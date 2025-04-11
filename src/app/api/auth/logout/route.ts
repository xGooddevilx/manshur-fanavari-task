import { NextResponse } from 'next/server';
import { clearTokenCookie } from './../../lib/auth';

export async function POST() {
  await clearTokenCookie();
  return NextResponse.json({ message: 'Logout successful' });
}
