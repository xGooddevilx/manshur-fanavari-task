export type Role = 'admin' | 'user';

export interface User {
  id: number;
  username: string;
  password: string;
  name: string;
  role: Role;
}

export type SafeUser = Omit<User, 'password'>;

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  user: SafeUser;
  message: string;
}

export interface ErrorResponse {
  error: string;
}
