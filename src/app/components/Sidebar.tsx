import { useNavigate, useLocation } from "react-router";
import {
  LayoutDashboard,
  TestTube,
  Syringe,
  Pill,
  Microscope,
  GraduationCap,
  Ambulance,
  DollarSign,
  FileText,
  Phone,
  MessageSquare,
  PhoneCall,
  ClipboardList,
  Settings,
  Landmark,
} from "lucide-react";
import { Badge } from "./ui/badge";
import { useAuth } from "../context/AuthContext";

interface SidebarProps {
  activeRoute?: string;
}

export function Sidebar({ activeRoute }: SidebarProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();

  const isAIT = user?.role.includes("AIT");
  const isFarmer = user?.role.includes("Farmer");
  const isAdmin = user?.role.includes("Directorate") || user?.role.includes("CDVO") || user?.role.includes("BVO");

  const allNavItems = [
    { icon: LayoutDashboard, label: isAdmin ? "Dashboard" : isFarmer ? "My Dashboard" : "Dashboard", route: "/dashboard/directorate" },
    { icon: LayoutDashboard, label: isFarmer ? "My Dashboard" : "Dashboard", route: "/dashboard/field-technician" },
    { icon: PhoneCall, label: "Service Requests", route: "/service-requests", badge: 12 },
    { icon: PhoneCall, label: isFarmer ? "My Services" : "My Requests", route: "/my-requests", badge: 5 },
    { icon: TestTube, label: isAIT ? "Semen — Log Use" : "Semen Management", route: "/inventory/semen" },
    { icon: Syringe, label: isAIT ? "Vaccine — Log Use" : "Vaccine Management", route: "/inventory/vaccine" },
    { icon: Pill, label: isAIT ? "Medicine — Log Use" : "Medicine Management", route: "/inventory/medicine" },
    { icon: Phone, label: "Request AI Service", route: "/request-ai" },
    { icon: Pill, label: "Request Medicine", route: "/request-medicine" },
    { icon: Syringe, label: "Request Vaccine", route: "/request-vaccine" },
    { icon: Microscope, label: isAIT ? "Disease — Submit Sample" : isFarmer ? "My Disease Reports" : "Disease Surveillance", route: "/disease-surveillance" },
    { icon: GraduationCap, label: "Training Management", route: "/training" },
    { icon: Ambulance, label: isAIT ? "MVU — Daily Log" : "MVU Operations", route: "/mvu" },
    { icon: DollarSign, label: "Expenditure", route: "/expenditure" },
    { icon: FileText, label: "Farm Reports", route: "/reports" },
    { icon: Phone, label: isAIT ? "AI Service" : "On-Call AI Service", route: "/oncall-ai" },
    { icon: MessageSquare, label: isFarmer ? "My Grievances" : "Grievances", route: isFarmer ? "/farmer-grievances" : "/grievances", badge: isFarmer ? undefined : 34 },
    { icon: ClipboardList, label: "My Activity Log", route: "/activity-log" },
    { icon: Settings, label: "User Management", route: "/user-management" },
  ];

  // Filter nav items based on user's allowed modules
  const navItems = user
    ? allNavItems.filter((item) => user.allowedModules.includes(item.route))
    : [];

  const isActive = (route: string) => {
    if (activeRoute) return activeRoute === route;
    return location.pathname === route;
  };

  return (
    <div
      className="w-64 min-h-screen flex flex-col"
      style={{ backgroundColor: '#003366' }}
    >
      {/* Brand */}
      <div className="p-6 flex items-center gap-3">
        <div className="w-10 h-10 rounded-md flex items-center justify-center bg-white/10">
          <Landmark className="w-6 h-6 text-white" />
        </div>
        <div>
          <p className="text-white font-semibold leading-tight">Govt. of India</p>
          <p className="text-blue-100 text-xs leading-tight">Animal Husbandry</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          const active = isActive(item.route);
          
          return (
            <button
              key={index}
              onClick={() => navigate(item.route)}
              className="w-full flex items-center gap-3 px-4 py-3 mb-1 rounded-lg transition-colors relative cursor-pointer hover:bg-white/10"
              style={active ? { backgroundColor: 'rgba(255, 255, 255, 0.1)' } : {}}
            >
              {/* Active indicator */}
              {active && (
                <div
                  className="absolute left-0 top-0 bottom-0 w-1 rounded-r"
                  style={{ backgroundColor: '#FF6600' }}
                />
              )}
              
              <Icon className="w-5 h-5 text-white" />
              <span className="text-white text-sm flex-1 text-left">{item.label}</span>
              
              {item.badge && (
                <Badge
                  className="text-xs"
                  style={{ backgroundColor: '#EF4444', color: 'white' }}
                >
                  {item.badge}
                </Badge>
              )}
            </button>
          );
        })}
      </nav>
    </div>
  );
}
