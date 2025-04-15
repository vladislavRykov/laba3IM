// AuthContext.tsx
import React, { createContext, useState } from 'react';

interface UserInfo {
  nickname: string;
  password: string;
  email: string;
}

interface AuthContextValue {
  users: UserInfo[];
  setUsers: React.Dispatch<React.SetStateAction<UserInfo[]>>;
  currentUser: UserInfo | null;
  setCurrentUser: (user: UserInfo | null) => void;
}

export const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const initialUsers = [
    {
      nickname: 'AlexPro',
      password: '123',
      email: 'alex.pro@example.com',
    },
    {
      nickname: 'MariaCoder',
      password: '1234',
      email: 'maria.coder@example.com',
    },
    {
      nickname: 'MaxPower',
      password: '12345',
      email: 'max.power@example.com',
    },
  ];

  const [users, setUsers] = useState<UserInfo[]>(initialUsers);
  const [currentUser, setCurrentUser] = useState<UserInfo | null>(null);

  return (
    <AuthContext.Provider value={{ users, setUsers, currentUser, setCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
