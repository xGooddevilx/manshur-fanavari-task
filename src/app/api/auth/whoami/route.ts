import { NextResponse } from 'next/server';
import { getTokenFromCookie, verifyToken } from './../../lib/auth';

export async function GET() {
  const token = await getTokenFromCookie();

  if (!token) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
  }

  const user = verifyToken(token);
  if (!user) {
    return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
  }

  return NextResponse.json({ user });
}
