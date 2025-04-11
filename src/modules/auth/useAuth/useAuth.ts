import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthContext';

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context)
    throw new Error(
      'useAuth must be used within the AuthProvider tree; Ensure that your app/component is wrapped with <AuthProvider>',
    );

  return context;
};
