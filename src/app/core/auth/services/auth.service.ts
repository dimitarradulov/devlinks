import { Injectable, computed, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  authState,
} from '@angular/fire/auth';
import { Subject, catchError, switchMap, from, EMPTY, merge } from 'rxjs';
import { AuthCredentials, AuthState } from '../models/auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private auth = inject(Auth);

  // State
  private state = signal<AuthState>({
    user: null,
    error: null,
    loading: false,
  });

  // Selectors
  user = computed(() => this.state().user);
  error = computed(() => this.state().error);
  loading = computed(() => this.state().loading);

  // Sources
  registerAction = new Subject<AuthCredentials>();
  loginAction = new Subject<AuthCredentials>();

  private authAction$ = merge(this.registerAction, this.loginAction);
  private login$ = this.registerAction.pipe(
    switchMap((credentials) =>
      from(
        signInWithEmailAndPassword(
          this.auth,
          credentials.email,
          credentials.password,
        ),
      ).pipe(catchError(this.handleError.bind(this))),
    ),
  );
  private register$ = this.loginAction.pipe(
    switchMap((credentials) =>
      from(
        createUserWithEmailAndPassword(
          this.auth,
          credentials.email,
          credentials.password,
        ),
      ).pipe(catchError(this.handleError.bind(this))),
    ),
  );
  private authState$ = authState(this.auth);

  constructor() {
    // Reducers
    this.authAction$
      .pipe(takeUntilDestroyed())
      .subscribe(() =>
        this.state.update((state) => ({ ...state, loading: true })),
      );

    merge(this.login$, this.register$)
      .pipe(takeUntilDestroyed())
      .subscribe(() =>
        this.state.update((state) => ({
          ...state,
          loading: false,
        })),
      );

    this.authState$
      .pipe(takeUntilDestroyed())
      .subscribe((user) => this.state.update((state) => ({ ...state, user })));
  }

  private handleError(error: any) {
    this.state.update((state) => ({ ...state, error }));
    return EMPTY;
  }
}
