import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  username: string | null;
  login: (username: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const VALID_CREDENTIALS = {
  username: "UserTest",
  password: "SecurePass123"
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    const storedAuth = localStorage.getItem("auth");
    if (storedAuth) {
      const { isAuthenticated, username } = JSON.parse(storedAuth);
      setIsAuthenticated(isAuthenticated);
      setUsername(username);
    }
  }, []);

  const login = (inputUsername: string, inputPassword: string): boolean => {
    if (inputUsername === VALID_CREDENTIALS.username && inputPassword === VALID_CREDENTIALS.password) {
      setIsAuthenticated(true);
      setUsername(inputUsername);
      localStorage.setItem("auth", JSON.stringify({ isAuthenticated: true, username: inputUsername }));
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUsername(null);
    localStorage.removeItem("auth");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, username, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
