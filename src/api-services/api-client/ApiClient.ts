import { clientEnvironments } from '@/modules/env/client';
import ky from 'ky';

export const apiClient = ky.create({
  prefixUrl: clientEnvironments.NEXT_PUBLIC_API_PREFIX_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  hooks: {
    beforeRequest: [
      request => {
        const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
        if (token) {
          request.headers.set('Authorization', `Bearer ${token}`);
        }
      },
    ],
  },
});

