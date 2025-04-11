import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';
import { User, SafeUser } from './../types';

const JWT_SECRET = 'your-secret-key'; // replace with env var

export function generateToken(user: User): string {
  const { password, ...payload } = user;
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '1d' });
}

export function verifyToken(token: string): SafeUser | null {
  try {
    return jwt.verify(token, JWT_SECRET) as SafeUser;
  } catch {
    return null;
  }
}

export async function setTokenCookie(token: string) {
  const cookieStore = cookies();
  (await cookieStore).set('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24,
    path: '/',
  });
}

export async function clearTokenCookie() {
  const cookieStore = cookies();
  (await cookieStore).set('token', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 0,
    path: '/',
  });
}

export async function getTokenFromCookie(): Promise<string | undefined> {
  const cookieStore = cookies();
  return (await cookieStore).get('token')?.value;
}