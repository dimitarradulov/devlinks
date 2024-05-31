import { effect, inject } from '@angular/core';
import { signalStoreFeature, type, withHooks } from '@ngrx/signals';

import { AuthState } from '../models/auth.model';
import { Router } from '@angular/router';

export function withNavigation() {
  return signalStoreFeature(
    { state: type<AuthState>() },
    withHooks({
      onInit(store) {
        const router = inject(Router);

        effect(() => {
          const user = store.user();

          if (user) {
            router.navigate(['links', 'customize']);
          }
        });
      },
    }),
  );
}
