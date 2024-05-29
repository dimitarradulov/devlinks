import { signalStore, withState } from '@ngrx/signals';

import { AuthState } from '../models/auth.model';
import { withNavigation } from './navigation.feature';
import { withAuthenticationMethods } from './auth-methods.feature';
import { withUserUpdates } from './user-updates.feature';

const initialState: AuthState = {
  user: null,
  error: null,
  loading: false,
};

export const AuthStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withNavigation(),
  withAuthenticationMethods(),
  withUserUpdates(),
);
