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
  "admin@dahvs.odisha.gov.in": {
    password: "Admin@123",
    user: {
      name: "Dr. Arun Mishra",
      role: "Directorate Admin",
      badge: "Directorate | State Level",
      scope: "All Odisha — 30 Districts",
      email: "admin@dahvs.odisha.gov.in",
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
  "cdvo.cuttack@dahvs.odisha.gov.in": {
    password: "District@123",
    user: {
      name: "Dr. Pradeep Rath",
      role: "CDVO — Cuttack District",
      badge: "District Officer | Cuttack",
      scope: "Cuttack District — 12 Blocks",
      email: "cdvo.cuttack@dahvs.odisha.gov.in",
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
  "bvo.salipur@dahvs.odisha.gov.in": {
    password: "Block@123",
    user: {
      name: "Dr. Sarita Mohanty",
      role: "BVO — Salipur Block",
      badge: "Block Officer | Salipur, Cuttack",
      scope: "Salipur Block — 8 LACs",
      email: "bvo.salipur@dahvs.odisha.gov.in",
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
  "ait.salipur@dahvs.odisha.gov.in": {
    password: "Field@123",
    user: {
      name: "Rajan Kumar",
      role: "AIT — Salipur LAC",
      badge: "AIT | Salipur LAC",
      scope: "Salipur LAC, Salipur Block, Cuttack",
      email: "ait.salipur@dahvs.odisha.gov.in",
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
  "farmer@odisha.gov.in": {
    password: "Farmer@123",
    user: {
      name: "Ramesh Pradhan",
      role: "Farmer",
      badge: "Farmer | Salipur, Cuttack",
      scope: "My Farm — Salipur, Cuttack",
      email: "farmer@odisha.gov.in",
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
