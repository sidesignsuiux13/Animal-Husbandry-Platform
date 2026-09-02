import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Mail, Lock, User, Phone } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card } from "../components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { useAuth } from "../context/AuthContext";
import { toast } from "sonner";
import loginBackground from "../../imports/AHP-login-img.png";

export function LoginPage() {
  const navigate = useNavigate();
  const { user, login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [welcomeUser, setWelcomeUser] = useState<any>(null);
  const [selectedDemoEmail, setSelectedDemoEmail] = useState("");

  // Redirect if already logged in
  useEffect(() => {
    if (user && !showWelcome) {
      navigate(user.dashboard, { replace: true });
    }
  }, [user, navigate, showWelcome]);

  const quickLoginUsers = [
    {
      name: "Dr. Arun Mishra",
      role: "Directorate Admin",
      roleLabel: "Directorate",
      scope: "All Odisha — 30 Districts",
      email: "admin@dahvs.odisha.gov.in",
      password: "Admin@123",
      color: "#003366",
      bgColor: "#003366",
    },
    {
      name: "Dr. Pradeep Rath",
      role: "CDVO — Cuttack District",
      roleLabel: "District Officer",
      scope: "Cuttack District — 12 Blocks",
      email: "cdvo.cuttack@dahvs.odisha.gov.in",
      password: "District@123",
      color: "#14B8A6",
      bgColor: "#14B8A6",
    },
    {
      name: "Dr. Sarita Mohanty",
      role: "BVO — Salipur Block",
      roleLabel: "Block Officer",
      scope: "Salipur Block — 8 LACs",
      email: "bvo.salipur@dahvs.odisha.gov.in",
      password: "Block@123",
      color: "#A855F7",
      bgColor: "#A855F7",
    },
    {
      name: "Rajan Kumar",
      role: "AIT — Salipur LAC",
      roleLabel: "Field Technician",
      scope: "Salipur LAC",
      email: "ait.salipur@dahvs.odisha.gov.in",
      password: "Field@123",
      color: "#10B981",
      bgColor: "#10B981",
    },
    {
      name: "Ramesh Pradhan",
      role: "Farmer",
      roleLabel: "Farmer",
      scope: "My Farm — Salipur, Cuttack",
      email: "farmer@odisha.gov.in",
      password: "Farmer@123",
      color: "#FF6600",
      bgColor: "#FF6600",
    },
  ];

  const handleLogin = async () => {
    setIsLoading(true);
    const success = login(email, password);

    if (success) {
      const userRecord = quickLoginUsers.find(u => u.email === email);
      if (userRecord) {
        setWelcomeUser(userRecord);
        setShowWelcome(true);

        setTimeout(() => {
          setIsLoading(false);
          setShowWelcome(false);
          if (userRecord.email === "ait.salipur@dahvs.odisha.gov.in" || userRecord.email === "farmer@odisha.gov.in") {
            navigate("/dashboard/field-technician");
          } else {
            navigate("/dashboard/directorate");
          }
        }, 2000);
      }
    } else {
      setIsLoading(false);
      toast.error("Invalid email or password");
    }
  };

  const handleQuickLogin = async (userRecord: any) => {
    setIsLoading(true);
    setEmail(userRecord.email);
    setPassword(userRecord.password);

    const success = login(userRecord.email, userRecord.password);
    if (success) {
      setWelcomeUser(userRecord);
      setShowWelcome(true);

      setTimeout(() => {
        setIsLoading(false);
        setShowWelcome(false);
        if (userRecord.email === "ait.salipur@dahvs.odisha.gov.in" || userRecord.email === "farmer@odisha.gov.in") {
          navigate("/dashboard/field-technician");
        } else {
          navigate("/dashboard/directorate");
        }
      }, 2000);
    } else {
      setIsLoading(false);
    }
  };

  const handleDemoLogin = () => {
    const selectedUser = quickLoginUsers.find((userRecord) => userRecord.email === selectedDemoEmail);

    if (!selectedUser) {
      toast.error("Please select a demo profile");
      return;
    }

    handleQuickLogin(selectedUser);
  };

  // Welcome confirmation overlay
  if (showWelcome && welcomeUser) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#003366' }}>
        <Card className="w-full max-w-md p-8 text-center shadow-2xl">
          <div className="mb-4">
            <div
              className="w-20 h-20 rounded-full mx-auto flex items-center justify-center mb-4"
              style={{ backgroundColor: welcomeUser.bgColor }}
            >
              <User className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-2xl font-bold mb-2" style={{ color: '#003366' }}>
              Welcome, {welcomeUser.name}
            </h2>
            <div className="space-y-2 mb-4">
              <div className="text-sm">
                <span style={{ color: '#6B7280' }}>Role: </span>
                <span className="font-semibold" style={{ color: '#003366' }}>
                  {welcomeUser.role}
                </span>
              </div>
              <div className="text-sm">
                <span style={{ color: '#6B7280' }}>Scope: </span>
                <span className="font-semibold" style={{ color: '#003366' }}>
                  {welcomeUser.scope}
                </span>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2" style={{ color: '#6B7280' }}>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2" style={{ borderColor: welcomeUser.bgColor }} />
              <span className="text-sm">Redirecting to dashboard...</span>
            </div>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex">
      {/* Left side - Image background with bottom helpline */}
      <div
        className="hidden lg:flex lg:w-1/2 items-end justify-center px-10 pb-6 relative overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(0, 51, 102, 0.68), rgba(0, 102, 204, 0.38)), url(${loginBackground})`,
        }}
      >
        <div
          className="w-full max-w-md rounded-lg border border-white/30 p-5 text-center shadow-2xl"
          style={{
            backgroundColor: 'rgba(0, 51, 102, 0.42)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
          }}
        >
          <Phone className="w-9 h-9 mx-auto mb-3 text-white" />
          <h3 className="text-base font-bold text-white mb-2">
            Krushi Samrudhi Helpline
          </h3>
          <p className="text-2xl font-bold text-white mb-2">1800-XXX-XXXX</p>
          <p className="text-xs text-blue-50 mb-1">(Toll Free)</p>
          <p className="text-xs text-blue-100 mb-3">
            Available: 8 AM — 8 PM | All days
          </p>
          <div
            className="p-2.5 rounded text-xs text-blue-50"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.16)' }}
          >
            <p className="mb-1">Call for support with:</p>
            <p>AI Service • Medicine • Vaccination • Disease Reports</p>
          </div>
        </div>
      </div>

      {/* Right side - Login card */}
      <div
        className="w-full lg:w-1/2 flex items-center justify-center p-8"
        style={{
          background: 'linear-gradient(135deg, #F8FAFC 0%, #F3F7FB 48%, #FFF7F0 100%)',
        }}
      >
        <Card className="w-full max-w-md p-8 shadow-xl border" style={{ backgroundColor: '#FFFFFF', borderColor: '#E5E7EB' }}>
          <div className="lg:hidden text-center mb-8">
            <h2 className="font-bold" style={{ color: '#003366' }}>
              ARD Digital Platform
            </h2>
            <p className="text-xs" style={{ color: '#6B7280' }}>
              F&ARD Department, Govt. of Odisha
            </p>
          </div>

          <h2 className="text-2xl font-bold mb-10 text-center" style={{ color: '#003366' }}>
            Login to Continue
          </h2>

          <div className="space-y-8">
            <div className="space-y-6">
              {/* Email Input */}
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: '#374151' }}>
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5" style={{ color: '#9CA3AF' }} />
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="h-10 pl-10"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleLogin()}
                  />
                </div>
              </div>

              {/* Password Input */}
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: '#374151' }}>
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5" style={{ color: '#9CA3AF' }} />
                  <Input
                    type="password"
                    placeholder="Enter your password"
                    className="h-10 pl-10"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleLogin()}
                  />
                </div>
              </div>
            </div>

            {/* Login Button */}
            <Button
              className="w-full h-10"
              style={{ backgroundColor: '#FF6600', color: '#FFFFFF' }}
              onClick={handleLogin}
              disabled={isLoading}
            >
              {isLoading ? "Logging in..." : "Login"}
            </Button>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t" style={{ borderColor: '#E5E7EB' }} />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white" style={{ color: '#6B7280' }}>
                  Quick Demo Access
                </span>
              </div>
            </div>

            {/* Demo profile dropdown */}
            <div className="space-y-3">
              <Select value={selectedDemoEmail} onValueChange={setSelectedDemoEmail} disabled={isLoading}>
                <SelectTrigger className="h-10">
                  <SelectValue placeholder="Select a demo profile" />
                </SelectTrigger>
                <SelectContent>
                  {quickLoginUsers.map((userRecord) => (
                    <SelectItem key={userRecord.email} value={userRecord.email}>
                      {userRecord.roleLabel} - {userRecord.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button
                variant="outline"
                className="w-full h-10"
                onClick={handleDemoLogin}
                disabled={isLoading}
                style={{ borderColor: '#003366', color: '#003366' }}
              >
                Use Selected Demo Profile
              </Button>
            </div>

            {/* Footer */}
            <div className="pt-2 text-center text-xs" style={{ color: '#9CA3AF' }}>
              <p>Powered by OCAC | Government of Odisha</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
