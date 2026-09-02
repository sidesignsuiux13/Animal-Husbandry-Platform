import { useNavigate } from "react-router";
import { Bell, Building2, LogOut, User, Settings, Key, ChevronDown } from "lucide-react";
import { Badge } from "./ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useAuth } from "../context/AuthContext";

export function Header() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  if (!user) {
    return null;
  }

  return (
    <header
      className="h-16 flex items-center justify-between px-6 border-b"
      style={{ backgroundColor: '#FFFFFF', borderColor: '#E5E7EB' }}
    >
      {/* Left side - Platform name */}
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded flex items-center justify-center" style={{ backgroundColor: '#003366' }}>
          <Building2 className="w-5 h-5 text-white" />
        </div>
        <div>
          <h2 className="font-semibold" style={{ color: '#003366', fontSize: '0.875rem' }}>
            Animal Husbandry Digital Platform
          </h2>
          <p className="text-xs" style={{ color: '#6B7280' }}>
            Department of Animal Husbandry & Dairying, Govt. of India
          </p>
        </div>
      </div>

      {/* Right side - Notifications and user */}
      <div className="flex items-center gap-4">
        {/* Notification bell */}
        <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <Bell className="w-5 h-5" style={{ color: '#6B7280' }} />
          <Badge
            className="absolute -top-1 -right-1 px-1.5 py-0.5 text-xs min-w-5 h-5 flex items-center justify-center"
            style={{ backgroundColor: '#EF4444', color: 'white' }}
          >
            3
          </Badge>
        </button>

        {/* Role badge */}
        <Badge
          className="px-3 py-1"
          style={{ backgroundColor: '#003366', color: 'white' }}
        >
          {user.badge}
        </Badge>

        {/* User dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded-lg transition-colors">
              <User className="w-4 h-4" style={{ color: '#6B7280' }} />
              <span className="text-sm font-medium" style={{ color: '#1A1A1A' }}>
                {user.name}
              </span>
              <ChevronDown className="w-4 h-4" style={{ color: '#6B7280' }} />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuItem onClick={() => navigate("/profile")} className="cursor-pointer">
              <User className="w-4 h-4 mr-2" />
              My Profile
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <Key className="w-4 h-4 mr-2" />
              Change Password
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogout} className="cursor-pointer text-red-600">
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
