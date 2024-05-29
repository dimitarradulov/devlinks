import { inject } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from '@angular/fire/auth';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import { patchState, signalStoreFeature, withMethods } from '@ngrx/signals';

import { AuthCredentials } from '../models/auth.model';

export function withAuthenticationMethods() {
  return signalStoreFeature(
    withMethods((state) => {
      const auth = inject(Auth);
      const firestore = inject(Firestore);

      return {
        async login(credentials: AuthCredentials) {
          patchState(state, { loading: true });

          try {
            await signInWithEmailAndPassword(
              auth,
              credentials.email,
              credentials.password,
            );
          } catch (error: any) {
            console.error(error);
            patchState(state, { error });
          } finally {
            patchState(state, { loading: false });
          }
        },
        async register(credentials: AuthCredentials) {
          patchState(state, { loading: true });

          try {
            await createUserWithEmailAndPassword(
              auth,
              credentials.email,
              credentials.password,
            );
            const usersCollection = collection(firestore, 'users');
            await addDoc(usersCollection, {
              email: credentials.email,
              links: [],
            });
          } catch (error) {
            console.error(error);
            patchState(state, { error });
          } finally {
            patchState(state, { loading: false });
          }
        },
      };
    }),
  );
}
