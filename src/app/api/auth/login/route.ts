import { NextRequest, NextResponse } from 'next/server';
import { findUserByCredentials } from '../../lib/db';
import { generateToken, setTokenCookie } from '../../lib/auth';
import { LoginRequest } from '../../types';

export async function POST(request: NextRequest) {
  const body = await request.json() as LoginRequest;
  const { username, password } = body;

  if (!username || !password) {
    return NextResponse.json({ error: 'Missing credentials' }, { status: 400 });
  }

  const user = findUserByCredentials(username, password);
  if (!user) {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  }

  const token = generateToken(user);
  await setTokenCookie(token);

  return NextResponse.json({
    user: {
      id: user.id,
      username: user.username,
      name: user.name,
      role: user.role,
    },
    message: 'Login successful',
  });
}