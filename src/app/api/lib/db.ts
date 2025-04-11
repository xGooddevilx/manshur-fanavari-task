import { User, SafeUser } from './../types';


const users: User[] = [
  {
    id: 1,
    username: 'admin',
    password: 'admin123',
    name: 'Admin User',
    role: 'admin',
  },
  {
    id: 2,
    username: 'user',
    password: 'user123',
    name: 'Regular User',
    role: 'user',
  },
];

export function findUserByCredentials(username: string, password: string): User | undefined {
  return users.find(u => u.username === username && u.password === password);
}

export function getAllUsers(): SafeUser[] {
  return users.map(({ password, ...rest }) => rest);
}