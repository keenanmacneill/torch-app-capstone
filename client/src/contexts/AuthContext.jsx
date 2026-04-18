import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

const VITE_API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:8080';

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchin = async () => {
    try {
      const res = await fetch(`${VITE_API_URL}/auth/me`, {
        credentials: 'include',
      });

      const data = await res.json();
      if (res.ok) {
        setUser(data.user);
      } else {
        setUser(null);
      }
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchin();
  }, []);

  const logoutFunc = async () => {
    await fetch(`${VITE_API_URL}/auth/logout`, {
      method: 'POST',
      credentials: 'include',
    });
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, loading, refreshUser: fetchin, logoutFunc }}
    >
      {children}
    </AuthContext.Provider>
  );
}
