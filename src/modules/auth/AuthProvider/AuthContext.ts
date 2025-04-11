'use client';

import { LoginResponse, LoginVariables } from '@/api-services/types';
import { createContext } from 'react';

export type AuthContextType = {
  isAuthenticating: boolean;
  
  login: (loginVariables:LoginVariables) => Promise<LoginResponse | undefined>;
  logout: () => Promise<void>;
  updateUser: (user: any) => void;
} & (
  | { isAuthenticated: false; user: undefined }
  | { isAuthenticated: true; user: {} }
);

export const AuthContext = createContext({} as AuthContextType);
