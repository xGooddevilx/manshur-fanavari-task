import { getTokenFromCookie, verifyToken } from '@/app/api/lib/auth';

export const ssrGetUser = async () => {
  const token = await getTokenFromCookie();
  if (!token) return;

  const user = verifyToken(token);

  return user;
};
