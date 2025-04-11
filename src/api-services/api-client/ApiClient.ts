import ky from 'ky';

export const apiClient = ky.create({
  prefixUrl: '/api',
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

