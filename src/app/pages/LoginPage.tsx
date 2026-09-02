import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Mail, Lock, User, Phone } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card } from "../components/ui/card";
import { useAuth } from "../context/AuthContext";
import { toast } from "sonner";
import logo from "../../imports/shared_image__2_.png";
import logo1 from "../../imports/shared_image__1___1_.png";
import logo2 from "../../imports/shared_image__3_.png";
import mediaImage1 from "../../imports/shared_image__1_.png";
import mediaImage2 from "../../imports/shared_image.png";

export function LoginPage() {
  const navigate = useNavigate();
  const { user, login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [welcomeUser, setWelcomeUser] = useState<any>(null);

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
      {/* Left side - Blue gradient with branding */}
      <div
        className="hidden lg:flex lg:w-1/2 flex-col items-start justify-start p-8 pt-4"
        style={{
          background: 'linear-gradient(135deg, #003366 0%, #0051A3 50%, #0066CC 100%)'
        }}
      >
        <div className="w-full space-y-8">
          <div className="text-center">
            {/* Top images — single horizontal row */}
            <div className="flex items-center justify-between gap-3 mb-8 w-full">
              <img
                src={mediaImage1}
                alt="Government of India"
                className="h-24 w-auto flex-shrink-0"
              />
              <div className="flex items-center justify-center gap-4 flex-1">
                <img
                  src={logo1}
                  alt="ARD Logo"
                  className="h-20 w-auto"
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
                <img
                  src={logo}
                  alt="ARD Logo"
                  className="h-20 w-auto"
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
                <img
                  src={logo2}
                  alt="ARD Logo"
                  className="h-20 w-auto"
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
              </div>
              <img
                src={mediaImage2}
                alt="Government of Odisha"
                className="h-24 w-auto flex-shrink-0"
              />
            </div> 
            <h1 className="text-4xl font-bold text-white mb-4 mt-10">
              ARD Digital Platform
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              F&ARD Department, Government of Odisha
            </p>
            <div className="text-blue-200 text-sm">
              <p className="mb-2">Streamlining livestock services across Odisha</p>
              <p>Empowering farmers, technicians, and administrators</p>
            </div>
          </div>

          {/* Hotline Card */}
          <div
            className="p-6 rounded-lg text-center"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)', backdropFilter: 'blur(10px)' }}
          >
            <Phone className="w-12 h-12 mx-auto mb-4 text-white" />
            <h3 className="text-lg font-bold text-white mb-2">
              Krushi Samrudhi Helpline
            </h3>
            <p className="text-3xl font-bold text-white mb-3">1800-XXX-XXXX</p>
            <p className="text-sm text-blue-100 mb-1">(Toll Free)</p>
            <p className="text-xs text-blue-200 mb-4">
              Available: 8 AM — 8 PM | All days
            </p>
            <div
              className="p-3 rounded text-xs text-blue-100"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
            >
              <p className="mb-1">Call for support with:</p>
              <p>AI Service • Medicine • Vaccination • Disease Reports</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Login card */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8" style={{ backgroundColor: '#F9FAFB' }}>
        <Card className="w-full max-w-md p-8 shadow-xl" style={{ backgroundColor: '#FFFFFF' }}>
          {/* Mobile logo */}
          <div className="lg:hidden text-center mb-6">
            {/* Top images */}
            <div className="flex items-center justify-center gap-4 mb-5">
              <img
                src={mediaImage1}
                alt="Government of India"
                className="h-24 w-auto"
              />
              <img
                src={mediaImage2}
                alt="Government of Odisha"
                className="h-24 w-auto"
              />
            </div>
            <img
              src={logo}
              alt="ARD Logo"
              className="w-20 h-auto mx-auto mb-3"
            />
            <h2 className="font-bold" style={{ color: '#003366' }}>
              ARD Digital Platform
            </h2>
            <p className="text-xs" style={{ color: '#6B7280' }}>
              F&ARD Department, Govt. of Odisha
            </p>
          </div>

          <h2 className="text-2xl font-bold mb-6 text-center" style={{ color: '#003366' }}>
            Login to Continue
          </h2>

          {/* Email Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" style={{ color: '#374151' }}>
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5" style={{ color: '#9CA3AF' }} />
              <Input
                type="email"
                placeholder="Enter your email"
                className="pl-10"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleLogin()}
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2" style={{ color: '#374151' }}>
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5" style={{ color: '#9CA3AF' }} />
              <Input
                type="password"
                placeholder="Enter your password"
                className="pl-10"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleLogin()}
              />
            </div>
          </div>

          {/* Login Button */}
          <Button
            className="w-full mb-6"
            style={{ backgroundColor: '#FF6600', color: '#FFFFFF' }}
            onClick={handleLogin}
            disabled={isLoading}
          >
            {isLoading ? "Logging in..." : "Login"}
          </Button>

          {/* Divider */}
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t" style={{ borderColor: '#E5E7EB' }} />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white" style={{ color: '#6B7280' }}>
                Quick Demo Access
              </span>
            </div>
          </div>

          {/* Role Buttons - Vertical Stack */}
          <div className="space-y-3">
            {quickLoginUsers.map((userRecord, index) => (
              <button
                key={index}
                onClick={() => handleQuickLogin(userRecord)}
                disabled={isLoading}
                className="w-full p-4 rounded-lg transition-all hover:shadow-lg disabled:opacity-50 text-left"
                style={{
                  backgroundColor: `${userRecord.bgColor}10`,
                  border: `2px solid ${userRecord.bgColor}`,
                }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: userRecord.bgColor }}
                    >
                      <User className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm mb-0.5" style={{ color: '#1F2937' }}>
                        {userRecord.name}
                      </p>
                      <p className="text-xs" style={{ color: '#6B7280' }}>
                        {userRecord.role}
                      </p>
                    </div>
                  </div>
                  <div
                    className="px-3 py-1.5 rounded-md text-xs font-semibold text-white"
                    style={{ backgroundColor: userRecord.bgColor }}
                  >
                    Login as {userRecord.roleLabel}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-6 text-center text-xs" style={{ color: '#9CA3AF' }}>
            <p>Powered by OCAC | Government of Odisha</p>
          </div>
        </Card>
      </div>
    </div>
  );
}
