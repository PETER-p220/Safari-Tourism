import React, { createContext, useEffect, useState } from "react";

export interface Auth {
  isLoggedIn: boolean;
  user: { role: string; user: object } | null;
  login: (data: { role: string; token: string; user: object }) => void;
  logout: () => void;
  role: string | null;
}

export const AuthContext = createContext<Auth>({
  isLoggedIn: false,
  user: null,
  login: () => {},
  logout: () => {},
  role: null,
});

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<{ role: string; user: object } | null>(null);
  const [role, setRole] = useState<string | null>(null);

  const login = (data: { role: string; token: string; user: object }) => {
    const userInfo = { role: data.role, user: data.user };

    localStorage.setItem("user", JSON.stringify(userInfo));
    localStorage.setItem("ps", data.token);

    setUser(userInfo);
    setRole(data.role);
    setIsLoggedIn(true);
  };

  const logout = () => {
    setUser(null);
    setRole(null);
    setIsLoggedIn(false);

    localStorage.removeItem("ps");
    localStorage.removeItem("user");
  };

  useEffect(() => {
    const stored = localStorage.getItem("user");
    const token = localStorage.getItem("ps");

    if (stored && token) {
      const parsed = JSON.parse(stored);
      setUser(parsed);
      setRole(parsed.role);
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
      setUser(null);
      setRole(null);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout, role }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
