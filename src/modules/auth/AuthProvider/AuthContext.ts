'use client';

import { createContext } from 'react';

export type AuthContextType = {
  isAuthenticating: boolean;

  login: (signInVariables) => Promise<{} | undefined>;
  logout: () => Promise<void>;
  updateUser: (user: any) => void;
} & (
  | { isAuthenticated: false; user: undefined }
  | { isAuthenticated: true; user: {} }
);

export const AuthContext = createContext({} as AuthContextType);
