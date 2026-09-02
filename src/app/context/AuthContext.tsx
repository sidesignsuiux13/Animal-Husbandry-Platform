import { createContext, useContext, useState, ReactNode } from "react";

export interface User {
  name: string;
  role: string;
  badge: string;
  scope: string;
  email: string;
  dashboard: string;
  allowedModules: string[];
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const USERS: Record<string, { password: string; user: User }> = {
  "admin@dahd.gov.in": {
    password: "Admin@123",
    user: {
      name: "Dr. Arun Mishra",
      role: "Directorate Admin",
      badge: "Directorate | National Level",
      scope: "All India — States & UTs",
      email: "admin@dahd.gov.in",
      dashboard: "/dashboard/directorate",
      allowedModules: [
        "/dashboard/directorate",
        "/service-requests",
        "/inventory/semen",
        "/inventory/vaccine",
        "/inventory/medicine",
        "/disease-surveillance",
        "/training",
        "/mvu",
        "/expenditure",
        "/reports",
        "/oncall-ai",
        "/grievances",
        "/user-management",
        "/profile",
      ],
    },
  },
  "cdvo.lucknow@dahd.gov.in": {
    password: "District@123",
    user: {
      name: "Dr. Pradeep Sharma",
      role: "CDVO — Lucknow District",
      badge: "District Officer | Lucknow",
      scope: "Lucknow District — 12 Blocks",
      email: "cdvo.lucknow@dahd.gov.in",
      dashboard: "/dashboard/directorate",
      allowedModules: [
        "/dashboard/directorate",
        "/service-requests",
        "/inventory/semen",
        "/inventory/vaccine",
        "/inventory/medicine",
        "/disease-surveillance",
        "/training",
        "/mvu",
        "/expenditure",
        "/reports",
        "/grievances",
        "/profile",
      ],
    },
  },
  "bvo.bakshi-ka-talab@dahd.gov.in": {
    password: "Block@123",
    user: {
      name: "Dr. Sarita Singh",
      role: "BVO — Bakshi Ka Talab Block",
      badge: "Block Officer | Bakshi Ka Talab, Lucknow",
      scope: "Bakshi Ka Talab Block — 8 LACs",
      email: "bvo.bakshi-ka-talab@dahd.gov.in",
      dashboard: "/dashboard/directorate",
      allowedModules: [
        "/dashboard/directorate",
        "/service-requests",
        "/inventory/semen",
        "/inventory/vaccine",
        "/inventory/medicine",
        "/disease-surveillance",
        "/training",
        "/reports",
        "/grievances",
        "/profile",
      ],
    },
  },
  "ait.bakshi-ka-talab@dahd.gov.in": {
    password: "Field@123",
    user: {
      name: "Rajan Kumar",
      role: "AIT — Bakshi Ka Talab LAC",
      badge: "AIT | Bakshi Ka Talab LAC",
      scope: "Bakshi Ka Talab LAC, Bakshi Ka Talab Block, Lucknow",
      email: "ait.bakshi-ka-talab@dahd.gov.in",
      dashboard: "/dashboard/field-technician",
      allowedModules: [
        "/dashboard/field-technician",
        "/my-requests",
        "/request-ai",
        "/request-medicine",
        "/request-vaccine",
        "/inventory/semen",
        "/inventory/vaccine",
        "/inventory/medicine",
        "/disease-surveillance",
        "/mvu",
        "/oncall-ai",
        "/grievances",
        "/profile",
      ],
    },
  },
  "farmer@dahd.gov.in": {
    password: "Farmer@123",
    user: {
      name: "Ramesh Yadav",
      role: "Farmer",
      badge: "Farmer | Bakshi Ka Talab, Lucknow",
      scope: "My Farm — Bakshi Ka Talab, Lucknow",
      email: "farmer@dahd.gov.in",
      dashboard: "/dashboard/field-technician",
      allowedModules: [
        "/dashboard/field-technician",
        "/my-requests",
        "/request-ai",
        "/request-medicine",
        "/request-vaccine",
        "/disease-surveillance",
        "/farmer-grievances",
        "/activity-log",
        "/profile",
      ],
    },
  },
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const login = (email: string, password: string): boolean => {
    const userRecord = USERS[email];
    if (userRecord && userRecord.password === password) {
      setUser(userRecord.user);
      localStorage.setItem("user", JSON.stringify(userRecord.user));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
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
