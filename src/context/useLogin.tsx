import { createContext, useState, useEffect, useContext, ReactNode } from "react";

interface User {
  name: string;
  email: string;
}

interface LoginContextProps {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

const LoginContext = createContext<LoginContextProps | undefined>(undefined);

export const LoginProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const parsed = JSON.parse(storedUser);
        setUser(parsed.user);
      } catch (err) {
        console.error("Error parsing user:", err);
      }
    }
  }, []);

  return (
    <LoginContext.Provider value={{ user, setUser }}>
      {children}
    </LoginContext.Provider>
  );
};

export const useLogin = () => {
  const context = useContext(LoginContext);
  if (!context) throw new Error("useLogin must be used within LoginProvider");
  return context;
};
