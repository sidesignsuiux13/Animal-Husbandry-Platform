import { useState } from "react";
import { useNavigate } from "react-router";
import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";
import { ScopeBadge } from "../components/ScopeBadge";
import { Card } from "../components/ui/card";
import { Circle, Pill, Syringe, Microscope } from "lucide-react";

export function LogNewRequest() {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const serviceTypes = [
    {
      id: "ai",
      icon: Circle,
      title: "Artificial Insemination",
      description: "Farmer requesting AI service for cattle/goat",
      color: "#3B82F6",
      route: "/log-request/ai",
    },
    {
      id: "medicine",
      icon: Pill,
      title: "Medicine Request",
      description: "Farmer reporting sick animal needing treatment",
      color: "#10B981",
      route: "/log-request/medicine",
    },
    {
      id: "vaccine",
      icon: Syringe,
      title: "Vaccination",
      description: "Farmer requesting vaccination for livestock",
      color: "#A855F7",
      route: "/log-request/vaccine",
    },
    {
      id: "disease",
      icon: Microscope,
      title: "Disease & Diagnosis",
      description: "Farmer reporting suspected disease, sample needed",
      color: "#FF6600",
      route: "/log-request/disease",
    },
  ];

  return (
    <div className="flex min-h-screen" style={{ backgroundColor: "#F9FAFB" }}>
      <Sidebar activeRoute="/service-requests" />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6">
          <div className="max-w-4xl mx-auto space-y-6">
            <div>
              <h1 className="text-2xl font-bold mb-2" style={{ color: "#003366" }}>
                New Farmer Request
              </h1>
              <p className="text-sm mb-4" style={{ color: "#6B7280" }}>
                Select the type of service the farmer needs
              </p>
              <ScopeBadge scope="lac" scopeLabel="Bakshi Ka Talab LAC" subLabel="Lucknow District" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {serviceTypes.map((service) => {
                const Icon = service.icon;
                return (
                  <button
                    key={service.id}
                    onClick={() => navigate(service.route)}
                    className="p-6 rounded-lg border-2 text-left transition-all hover:shadow-lg"
                    style={{
                      borderColor: selectedType === service.id ? service.color : "#E5E7EB",
                      backgroundColor: selectedType === service.id ? `${service.color}15` : "white",
                    }}
                  >
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                      style={{ backgroundColor: `${service.color}20` }}
                    >
                      <Icon className="w-6 h-6" style={{ color: service.color }} />
                    </div>
                    <h3 className="font-semibold mb-2" style={{ color: "#003366" }}>
                      {service.title}
                    </h3>
                    <p className="text-sm" style={{ color: "#6B7280" }}>
                      {service.description}
                    </p>
                  </button>
                );
              })}
            </div>

            <Card className="p-6">
              <h3 className="font-semibold mb-4" style={{ color: "#003366" }}>
                What happens after you submit?
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between p-3 rounded" style={{ backgroundColor: "#F3F4F6" }}>
                  <div className="flex items-center gap-2">
                    <Circle className="w-4 h-4" style={{ color: "#3B82F6" }} />
                    <span style={{ color: "#374151" }}>AI Service</span>
                  </div>
                  <span className="font-medium" style={{ color: "#10B981" }}>
                    → Recorded directly ✓
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 rounded" style={{ backgroundColor: "#F3F4F6" }}>
                  <div className="flex items-center gap-2">
                    <Pill className="w-4 h-4" style={{ color: "#10B981" }} />
                    <span style={{ color: "#374151" }}>Medicine</span>
                  </div>
                  <span className="font-medium" style={{ color: "#F59E0B" }}>
                    → Block approval needed
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 rounded" style={{ backgroundColor: "#F3F4F6" }}>
                  <div className="flex items-center gap-2">
                    <Syringe className="w-4 h-4" style={{ color: "#A855F7" }} />
                    <span style={{ color: "#374151" }}>Vaccine</span>
                  </div>
                  <span className="font-medium" style={{ color: "#10B981" }}>
                    → Recorded directly ✓
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 rounded" style={{ backgroundColor: "#F3F4F6" }}>
                  <div className="flex items-center gap-2">
                    <Microscope className="w-4 h-4" style={{ color: "#FF6600" }} />
                    <span style={{ color: "#374151" }}>Disease Sample</span>
                  </div>
                  <span className="font-medium" style={{ color: "#3B82F6" }}>
                    → Registered + Lab notified
                  </span>
                </div>
              </div>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
