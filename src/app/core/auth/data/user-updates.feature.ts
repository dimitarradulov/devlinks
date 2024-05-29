import { inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Auth, authState } from '@angular/fire/auth';
import { patchState, signalStoreFeature, withHooks } from '@ngrx/signals';

export function withUserUpdates() {
  return signalStoreFeature(
    withHooks({
      onInit(store) {
        const auth = inject(Auth);
        const authState$ = authState(auth);

        authState$
          .pipe(takeUntilDestroyed())
          .subscribe((user) => patchState(store, { user }));
      },
    }),
  );
}
