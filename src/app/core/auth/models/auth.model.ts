import { User } from '@angular/fire/auth';

export type AuthCredentials = {
  email: string;
  password: string;
  createPassword?: string;
};

export type AuthState = {
  user: User | null;
  error: any;
  loading: boolean;
};
