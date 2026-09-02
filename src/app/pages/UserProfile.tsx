import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Switch } from "../components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { User, Building2, MapPin, Phone, Mail, Clock } from "lucide-react";
import { useAuth } from "../context/AuthContext";

export function UserProfile() {
  const { user } = useAuth();

  if (!user) {
    return null;
  }

  // Get initials from user name
  const initials = user.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
  return (
    <div className="flex min-h-screen" style={{ backgroundColor: "#F9FAFB" }}>
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Header />

        <main className="flex-1 p-6">
          <div className="max-w-5xl mx-auto space-y-6">
            {/* Page header */}
            <div>
              <h1 className="text-2xl font-bold" style={{ color: "#003366" }}>
                My Profile
              </h1>
              <p className="text-sm mt-1" style={{ color: "#6B7280" }}>
                View and manage your account information
              </p>
            </div>

            {/* Profile card */}
            <Card className="p-6">
              <div className="grid grid-cols-2 gap-8">
                {/* Left - Profile Info */}
                <div>
                  <h2 className="text-lg font-semibold mb-4" style={{ color: "#003366" }}>
                    Profile Information
                  </h2>

                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold"
                      style={{ backgroundColor: "#003366", color: "white" }}
                    >
                      {initials}
                    </div>
                    <div>
                      <div className="font-semibold text-lg" style={{ color: "#003366" }}>
                        {user.name}
                      </div>
                      <div className="text-sm" style={{ color: "#6B7280" }}>
                        {user.email}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <User className="w-5 h-5 mt-0.5" style={{ color: "#6B7280" }} />
                      <div>
                        <div className="text-sm" style={{ color: "#6B7280" }}>Role</div>
                        <div className="font-medium" style={{ color: "#003366" }}>
                          {user.role}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Building2 className="w-5 h-5 mt-0.5" style={{ color: "#6B7280" }} />
                      <div>
                        <div className="text-sm" style={{ color: "#6B7280" }}>Department</div>
                        <div className="font-medium" style={{ color: "#003366" }}>
                          DAHD, Govt of India
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right - Account Details */}
                <div>
                  <h2 className="text-lg font-semibold mb-4" style={{ color: "#003366" }}>
                    Account Details
                  </h2>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 mt-0.5" style={{ color: "#6B7280" }} />
                      <div className="flex-1">
                        <div className="text-sm" style={{ color: "#6B7280" }}>Scope</div>
                        <div className="font-medium" style={{ color: "#003366" }}>{user.scope}</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 mt-0.5" style={{ color: "#6B7280" }} />
                      <div className="flex-1">
                        <div className="text-sm" style={{ color: "#6B7280" }}>Email</div>
                        <div className="font-medium text-sm" style={{ color: "#003366" }}>
                          {user.email}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 mt-0.5" style={{ color: "#6B7280" }} />
                      <div className="flex-1">
                        <div className="text-sm" style={{ color: "#6B7280" }}>Last Login</div>
                        <div className="font-medium" style={{ color: "#003366" }}>
                          22 May 2025, 09:14 AM
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Settings panel */}
            <Card className="p-6">
              <h2 className="text-lg font-semibold mb-4" style={{ color: "#003366" }}>
                Settings
              </h2>

              <div className="space-y-6">
                {/* Language settings */}
                <div>
                  <h3 className="text-sm font-semibold mb-3" style={{ color: "#374151" }}>
                    Language Preferences
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm mb-2" style={{ color: "#6B7280" }}>
                        Primary Language
                      </label>
                      <Select defaultValue="english">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="english">English</SelectItem>
                          <SelectItem value="hindi">Hindi (ଓଡ଼ିଆ)</SelectItem>
                          <SelectItem value="hindi">Hindi (हिंदी)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm mb-2" style={{ color: "#6B7280" }}>
                        Secondary Language
                      </label>
                      <Select defaultValue="hindi">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="english">English</SelectItem>
                          <SelectItem value="hindi">Hindi (ଓଡ଼ିଆ)</SelectItem>
                          <SelectItem value="hindi">Hindi (हिंदी)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Notification settings */}
                <div>
                  <h3 className="text-sm font-semibold mb-3" style={{ color: "#374151" }}>
                    Notifications
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 rounded-lg" style={{ backgroundColor: "#F9FAFB" }}>
                      <div>
                        <div className="font-medium text-sm" style={{ color: "#003366" }}>
                          SMS Alerts
                        </div>
                        <div className="text-xs" style={{ color: "#6B7280" }}>
                          Receive SMS for new requests and updates
                        </div>
                      </div>
                      <Switch defaultChecked />
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-lg" style={{ backgroundColor: "#F9FAFB" }}>
                      <div>
                        <div className="font-medium text-sm" style={{ color: "#003366" }}>
                          App Notifications
                        </div>
                        <div className="text-xs" style={{ color: "#6B7280" }}>
                          Show in-app notification badges
                        </div>
                      </div>
                      <Switch defaultChecked />
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-lg" style={{ backgroundColor: "#F9FAFB" }}>
                      <div>
                        <div className="font-medium text-sm" style={{ color: "#003366" }}>
                          Weekly Reminders
                        </div>
                        <div className="text-xs" style={{ color: "#6B7280" }}>
                          Weekly summary of pending tasks
                        </div>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex gap-3 mt-6">
                <Button variant="outline" style={{ borderColor: "#FF6600", color: "#FF6600" }}>
                  Edit Profile
                </Button>
                <Button variant="outline" style={{ borderColor: "#FF6600", color: "#FF6600" }}>
                  Change Password
                </Button>
              </div>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
