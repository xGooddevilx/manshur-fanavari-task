'use client';

import { LoginResponse, LoginVariables, UserDto } from '@/api-services/types';
import { createContext } from 'react';

export type AuthContextType = {
  isAuthenticating: boolean; 
  login: (loginVariables:LoginVariables) => Promise<LoginResponse | undefined>;
  logout: () => Promise<void>;
} & (
  | { isAuthenticated: false; user: undefined }
  | { isAuthenticated: true; user: UserDto }
);

export const AuthContext = createContext({} as AuthContextType);
