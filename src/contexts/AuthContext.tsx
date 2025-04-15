import { createContext, useContext, useState, ReactNode } from "react";
import { useToast } from "../components/ui/use-toast";

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

interface User {
  id: string;
  name: string;
  email: string;
  role: "admin" | "user";
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { toast } = useToast();

  // Generate random user data
  const generateRandomUser = (email: string): User => {
    const names = ["Alex", "Jordan", "Taylor", "Casey", "Riley", "Jamie", "Morgan", "Drew"];
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomId = Math.floor(Math.random() * 1000).toString();
    
    return {
      id: randomId,
      name: randomName,
      email: email,
      role: Math.random() > 0.5 ? "admin" : "user"
    };
  };

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      // For testing, accept any email/password combination
      if (email && password) {
        const randomUser = generateRandomUser(email);
        setUser(randomUser);
        setIsAuthenticated(true);
        toast({
          title: "Login successful",
          description: `Welcome ${randomUser.name}!`,
        });
        return true;
      }
      
      toast({
        variant: "destructive",
        title: "Login failed",
        description: "Please enter both email and password.",
      });
      return false;
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Login error",
        description: "An unexpected error occurred. Please try again.",
      });
      return false;
    }
  };

  const signup = async (name: string, email: string, password: string): Promise<boolean> => {
    try {
      if (email && password && name) {
        const newUser: User = {
          id: Date.now().toString(),
          name,
          email,
          role: "user",
        };
        setUser(newUser);
        setIsAuthenticated(true);
        toast({
          title: "Signup successful",
          description: "Your account has been created successfully!",
        });
        return true;
      }
      
      toast({
        variant: "destructive",
        title: "Signup failed",
        description: "Please fill in all required fields.",
      });
      return false;
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Signup error",
        description: "An unexpected error occurred. Please try again.",
      });
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
