import { redirect } from 'next/navigation';
import { ssrGetUser } from './ssrGetUser';
import { routes } from '../routes';

type Parameters = {
  against: 'authenticated-user' | 'unauthenticated-guest';
};

export const ssrAuthGuard = async ({ against }: Parameters) => {
  const user = await ssrGetUser();

  if (user) {
    if (against === 'authenticated-user') redirect(routes.home);
  }
  else {
    if (against === 'unauthenticated-guest') redirect(routes.auth.login);
  }
};
