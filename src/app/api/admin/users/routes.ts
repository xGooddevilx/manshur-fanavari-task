import { NextResponse } from 'next/server';
import { getTokenFromCookie, verifyToken } from './../../lib/auth';
import { getAllUsers } from './../../lib/db';

export async function GET() {
  const token = await getTokenFromCookie();
  const user = token ? verifyToken(token) : null;

  if (!user || user.role !== 'admin') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
  }

  const users = getAllUsers();
  return NextResponse.json({ users });
}
