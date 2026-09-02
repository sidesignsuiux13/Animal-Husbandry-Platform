import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";
import { StatCard } from "../components/StatCard";
import { ScopeBadge } from "../components/ScopeBadge";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Package, CheckCircle, Clock, AlertTriangle, TestTube, Syringe, Pill, Phone, Star, Circle, Microscope, Search } from "lucide-react";
import { useAuth } from "../context/AuthContext";

export function FieldTechnicianDashboard() {
  const { user } = useAuth();

  if (!user) return null;

  const isAIT = user.role.includes("AIT");
  const isFarmer = user.role.includes("Farmer");

  // AIT Stats
  const aitStats = [
    {
      icon: Package,
      title: "My Stock",
      value: "85",
      subtitle: "Bakshi Ka Talab LAC only",
      borderColor: "#003366",
    },
    {
      icon: CheckCircle,
      title: "My Services Today",
      value: "3",
      subtitle: "Logged by me today",
      borderColor: "#22C55E",
    },
    {
      icon: Clock,
      title: "Pending Requests",
      value: "2",
      subtitle: "My raised requests",
      borderColor: "#F59E0B",
    },
    {
      icon: AlertTriangle,
      title: "Approved — Act Now",
      value: "1",
      subtitle: "Ready for action 🟢",
      borderColor: "#10B981",
    },
  ];

  const aitStockStatus = [
    { item: "Normal Cattle Semen", stock: 82, status: "🟢", lastUsed: "22 May", color: "#22C55E" },
    { item: "Sex Sorted Semen", stock: 12, status: "🟡", lastUsed: "19 May", color: "#F59E0B" },
    { item: "FMD Vaccine", stock: 45, status: "🟡", lastUsed: "21 May", color: "#F59E0B" },
    { item: "Ivermectin", stock: 8, status: "🔴", lastUsed: "20 May", color: "#EF4444" },
    { item: "Amoxicillin", stock: 34, status: "🟢", lastUsed: "22 May", color: "#22C55E" },
  ];

  const priorityTasks = [
    { id: "SR-1040", type: "disease", status: "Act Now", desc: "Disease sample", color: "#10B981", icon: "🟢" },
    { id: "SR-1042", type: "ai", status: "AI Service 9AM", desc: "Ramesh Yadav", color: "#F59E0B", icon: "🟡" },
    { id: "SR-1041", type: "medicine", status: "Awaiting approval", desc: "Medicine request", color: "#3B82F6", icon: "🔵" },
  ];

  const workflowStatus = [
    { label: "Assigned to Me", count: 3, color: "#F59E0B" },
    { label: "Data Entered", count: 2, color: "#3B82F6" },
    { label: "Awaiting Approval", count: 1, color: "#6B7280" },
    { label: "Approved/Act Now", count: 1, color: "#10B981" },
  ];

  // Farmer data
  const myAnimals = [
    {
      id: "IN1234",
      breed: "Holstein Friesian",
      age: "4 years",
      lastAI: "3 months ago",
      lastVaccine: "FMD 12 Jan",
      health: "Good",
    },
    {
      id: "IN5678",
      breed: "Jersey",
      age: "2 years",
      lastAI: "6 months ago",
      lastVaccine: "FMD 12 Jan",
      health: "Good",
    },
    {
      id: "IN9012",
      breed: "Red Sindhi",
      age: "5 years",
      lastAI: "Not yet",
      lastVaccine: "FMD 12 Jan",
      health: "Good",
    },
  ];

  const farmerRecentServices = [
    {
      date: "22 May",
      type: "AI Service",
      animal: "IN1234",
      provider: "Rajan Kumar",
      status: "Completed",
      rating: 5,
    },
    {
      date: "15 May",
      type: "Medicine",
      animal: "IN1234",
      provider: "Ivermectin",
      status: "Administered",
      rating: 0,
    },
    {
      date: "08 May",
      type: "Disease Test",
      animal: "IN1234",
      provider: "DDL-2025-0244",
      status: "Report Ready",
      rating: 0,
    },
  ];

  return (
    <div className="flex min-h-screen" style={{ backgroundColor: '#F5F5F5' }}>
      <Sidebar activeRoute="/dashboard/field-technician" />

      <div className="flex-1 flex flex-col">
        <Header />

        <main className="flex-1 p-6">
          {/* Page Title */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold mb-2" style={{ color: '#003366' }}>
              {isAIT ? "Dashboard" : "My Dashboard"}
            </h1>
            {isAIT && (
              <ScopeBadge
                scope="lac"
                scopeLabel="Bakshi Ka Talab LAC"
                subLabel="Bakshi Ka Talab Block, Lucknow"
              />
            )}
            {isFarmer && (
              <ScopeBadge
                scope="lac"
                scopeLabel="My Farm"
                subLabel="Bakshi Ka Talab, Lucknow"
              />
            )}
          </div>

          {/* AIT View */}
          {isAIT && (
            <>
              {/* Stat Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                {aitStats.map((stat, index) => (
                  <StatCard key={index} {...stat} />
                ))}
              </div>

              {/* Workflow Status Panel */}
              <Card className="p-6 mb-6" style={{ backgroundColor: '#FFFFFF' }}>
                <h3 className="mb-4 font-semibold" style={{ color: '#003366' }}>
                  Workflow Status
                </h3>

                <div className="flex items-center gap-4 mb-4">
                  {workflowStatus.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div
                        className="px-4 py-2 rounded-full font-semibold"
                        style={{ backgroundColor: `${item.color}20`, color: item.color }}
                      >
                        {item.count}
                      </div>
                      <span className="text-sm" style={{ color: '#6B7280' }}>
                        {item.label}
                      </span>
                      {index < workflowStatus.length - 1 && (
                        <span className="text-xl mx-2" style={{ color: '#D1D5DB' }}>→</span>
                      )}
                    </div>
                  ))}
                </div>
              </Card>

              {/* Today's Priority Tasks */}
              <Card className="p-6 mb-6" style={{ backgroundColor: '#FFFFFF' }}>
                <h3 className="mb-4 font-semibold" style={{ color: '#003366' }}>
                  Today's Priority Tasks
                </h3>

                <div className="space-y-3">
                  {priorityTasks.map((task, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 rounded-lg border"
                      style={{ borderColor: task.color, backgroundColor: `${task.color}10` }}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-lg">{task.icon}</span>
                        <div>
                          <p className="font-semibold text-sm" style={{ color: '#1A1A1A' }}>
                            {task.id} {task.status}: {task.desc}
                          </p>
                        </div>
                      </div>
                      <Button
                        size="sm"
                        style={{ backgroundColor: task.color, color: 'white' }}
                      >
                        View
                      </Button>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Block-wide Inventory Heatmaps */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Semen Inventory Heatmap */}
                <Card className="p-6" style={{ backgroundColor: '#FFFFFF' }}>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-semibold mb-1" style={{ color: '#003366' }}>
                        Semen Inventory — Bakshi Ka Talab Block
                      </h3>
                      <p className="text-xs" style={{ color: '#6B7280' }}>
                        All 8 LACs | Updated 22 May
                      </p>
                    </div>
                    <button className="p-1">
                      <Search className="w-4 h-4" style={{ color: '#6B7280' }} />
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {[
                      { lac: "Bakshi Ka Talab LAC", doses: 82, color: "#10B981", current: true },
                      { lac: "Chinhat LAC", doses: 45, color: "#F59E0B", current: false },
                      { lac: "Kakori LAC", doses: 12, color: "#EF4444", current: false },
                      { lac: "Sarojini Nagar LAC", doses: 68, color: "#10B981", current: false },
                      { lac: "Mohanlalganj LAC", doses: 35, color: "#F59E0B", current: false },
                      { lac: "Gosainganj LAC", doses: 8, color: "#EF4444", current: false },
                      { lac: "Itaunja LAC", doses: 54, color: "#10B981", current: false },
                      { lac: "Mall LAC", doses: 22, color: "#F59E0B", current: false },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-lg border-2 text-center"
                        style={{
                          borderColor: item.current ? "#FF6600" : item.color,
                          backgroundColor: `${item.color}15`,
                        }}
                      >
                        <div className="text-xs mb-1" style={{ color: '#6B7280' }}>
                          {item.lac}
                        </div>
                        <div className="text-xl font-bold" style={{ color: item.color }}>
                          {item.doses}
                        </div>
                        <div className="text-xs" style={{ color: '#6B7280' }}>
                          doses
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 text-xs mb-3" style={{ color: '#6B7280' }}>
                    <span className="flex items-center gap-1">
                      <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#10B981' }} />
                      Healthy &gt;50
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#F59E0B' }} />
                      Low 20-50
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#EF4444' }} />
                      Critical &lt;20
                    </span>
                  </div>

                  <div className="p-3 rounded-lg mb-2" style={{ backgroundColor: '#FEF3C7' }}>
                    <p className="text-xs" style={{ color: '#92400E' }}>
                      2 LACs at critical level — Raise restocking request?
                    </p>
                  </div>
                  <button className="text-xs font-medium" style={{ color: '#F59E0B' }}>
                    [Raise Request]
                  </button>
                </Card>

                {/* Medicine Inventory Heatmap */}
                <Card className="p-6" style={{ backgroundColor: '#FFFFFF' }}>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-semibold mb-1" style={{ color: '#003366' }}>
                        Medicine Inventory — Bakshi Ka Talab Block
                      </h3>
                      <p className="text-xs" style={{ color: '#6B7280' }}>
                        Top 3 critical medicines shown
                      </p>
                    </div>
                    <button className="p-1">
                      <Search className="w-4 h-4" style={{ color: '#6B7280' }} />
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {[
                      { lac: "Bakshi Ka Talab LAC", status: "All adequate", color: "#10B981", current: true },
                      { lac: "Chinhat LAC", status: "2 medicines low", color: "#F59E0B", current: false },
                      { lac: "Kakori LAC", status: "Ivermectin critical", color: "#EF4444", current: false },
                      { lac: "Sarojini Nagar LAC", status: "All adequate", color: "#10B981", current: false },
                      { lac: "Mohanlalganj LAC", status: "Oxytocin critical", color: "#EF4444", current: false },
                      { lac: "Gosainganj LAC", status: "1 medicine low", color: "#F59E0B", current: false },
                      { lac: "Itaunja LAC", status: "All adequate", color: "#10B981", current: false },
                      { lac: "Mall LAC", status: "2 medicines low", color: "#F59E0B", current: false },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-lg border-2 text-center"
                        style={{
                          borderColor: item.current ? "#FF6600" : item.color,
                          backgroundColor: `${item.color}15`,
                        }}
                      >
                        <div className="text-xs mb-1" style={{ color: '#6B7280' }}>
                          {item.lac}
                        </div>
                        <div className="text-xs font-semibold" style={{ color: item.color }}>
                          {item.status}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2 mb-3">
                    <div className="flex items-center justify-between p-2 rounded" style={{ backgroundColor: '#FEE2E2' }}>
                      <span className="text-xs" style={{ color: '#374151' }}>Ivermectin</span>
                      <span className="text-xs font-semibold" style={{ color: '#EF4444' }}>
                        🔴 8 units (Kakori LAC)
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded" style={{ backgroundColor: '#FEE2E2' }}>
                      <span className="text-xs" style={{ color: '#374151' }}>Oxytocin</span>
                      <span className="text-xs font-semibold" style={{ color: '#EF4444' }}>
                        🔴 5 units (Mohanlalganj LAC)
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded" style={{ backgroundColor: '#FEF3C7' }}>
                      <span className="text-xs" style={{ color: '#374151' }}>Amoxicillin</span>
                      <span className="text-xs font-semibold" style={{ color: '#F59E0B' }}>
                        🟡 18 units (Chinhat)
                      </span>
                    </div>
                  </div>

                  <button className="text-xs font-medium" style={{ color: '#3B82F6' }}>
                    [View Medicine Module]
                  </button>
                </Card>

                {/* Vaccine Inventory Heatmap */}
                <Card className="p-6" style={{ backgroundColor: '#FFFFFF' }}>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-semibold mb-1" style={{ color: '#003366' }}>
                        Vaccine Inventory — Bakshi Ka Talab Block
                      </h3>
                      <p className="text-xs" style={{ color: '#6B7280' }}>
                        By LAC | Expiry alerts shown
                      </p>
                    </div>
                    <button className="p-1">
                      <Search className="w-4 h-4" style={{ color: '#6B7280' }} />
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {[
                      { lac: "Bakshi Ka Talab LAC", status: "FMD low", alert: true, color: "#F59E0B", current: true },
                      { lac: "Chinhat LAC", status: "All adequate", alert: false, color: "#10B981", current: false },
                      { lac: "Kakori LAC", status: "HS critical", alert: false, color: "#EF4444", current: false },
                      { lac: "Sarojini Nagar LAC", status: "All adequate", alert: false, color: "#10B981", current: false },
                      { lac: "Mohanlalganj LAC", status: "PPR low", alert: false, color: "#F59E0B", current: false },
                      { lac: "Gosainganj LAC", status: "All adequate", alert: false, color: "#10B981", current: false },
                      { lac: "Itaunja LAC", status: "FMD low", alert: false, color: "#F59E0B", current: false },
                      { lac: "Mall LAC", status: "Ranikhet critical", alert: false, color: "#EF4444", current: false },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-lg border-2 text-center relative"
                        style={{
                          borderColor: item.current ? "#FF6600" : item.color,
                          backgroundColor: `${item.color}15`,
                        }}
                      >
                        {item.alert && (
                          <div className="absolute top-1 right-1 text-xs">⚠</div>
                        )}
                        <div className="text-xs mb-1" style={{ color: '#6B7280' }}>
                          {item.lac}
                        </div>
                        <div className="text-xs font-semibold" style={{ color: item.color }}>
                          {item.status}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2 mb-3">
                    <div className="p-2 rounded" style={{ backgroundColor: '#FEF3C7' }}>
                      <p className="text-xs" style={{ color: '#92400E' }}>
                        ⚠ FMD Batch VB-2025-0441: Expires 28 May (6 days) — Bakshi Ka Talab LAC
                      </p>
                    </div>
                    <div className="p-2 rounded" style={{ backgroundColor: '#FEF3C7' }}>
                      <p className="text-xs" style={{ color: '#92400E' }}>
                        ⚠ HS Batch VB-2025-0442: Expires 02 Jun — Kakori LAC
                      </p>
                    </div>
                  </div>

                  <button className="text-xs font-medium" style={{ color: '#3B82F6' }}>
                    [View Vaccine Module]
                  </button>
                </Card>
              </div>
            </>
          )}

          {/* Farmer View */}
          {isFarmer && (
            <>
              {/* My Animals Panel */}
              <Card className="p-6 mb-6" style={{ backgroundColor: '#FFFFFF' }}>
                <h3 className="mb-4 font-semibold" style={{ color: '#003366' }}>
                  My Animals
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {myAnimals.map((animal, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-lg border"
                      style={{ borderColor: '#E5E7EB', backgroundColor: '#FFFFFF' }}
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <Circle className="w-8 h-8" style={{ color: '#003366' }} />
                        <div>
                          <p className="font-semibold" style={{ color: '#003366' }}>
                            {animal.id}
                          </p>
                          <p className="text-xs" style={{ color: '#6B7280' }}>
                            {animal.breed} | {animal.age}
                          </p>
                        </div>
                      </div>

                      <div className="space-y-2 mb-4">
                        <div className="text-sm">
                          <span style={{ color: '#6B7280' }}>Last AI: </span>
                          <span style={{ color: '#1A1A1A' }}>{animal.lastAI}</span>
                        </div>
                        <div className="text-sm">
                          <span style={{ color: '#6B7280' }}>Last Vaccine: </span>
                          <span style={{ color: '#1A1A1A' }}>{animal.lastVaccine}</span>
                        </div>
                        <div className="text-sm">
                          <span style={{ color: '#6B7280' }}>Health: </span>
                          <span style={{ color: '#10B981' }}>🟢 {animal.health}</span>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          className="flex-1"
                          style={{ backgroundColor: '#FF6600', color: 'white' }}
                        >
                          Request AI
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1">
                          View History
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* My Recent Services */}
              <Card className="p-6 mb-6" style={{ backgroundColor: '#FFFFFF' }}>
                <h3 className="mb-4 font-semibold" style={{ color: '#003366' }}>
                  My Recent Services
                </h3>

                <div className="space-y-3">
                  {farmerRecentServices.map((service, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 rounded-lg"
                      style={{ backgroundColor: '#F9FAFB' }}
                    >
                      <div className="flex items-center gap-4">
                        <div className="text-sm font-semibold" style={{ color: '#003366' }}>
                          {service.date}
                        </div>
                        <div className="h-8 w-px" style={{ backgroundColor: '#E5E7EB' }} />
                        <div>
                          <p className="text-sm font-medium" style={{ color: '#1A1A1A' }}>
                            {service.type} | {service.animal}
                          </p>
                          <p className="text-xs" style={{ color: '#6B7280' }}>
                            {service.provider}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <Badge
                          style={{
                            backgroundColor: service.status === "Completed" ? '#D1FAE5' : service.status === "Report Ready" ? '#DBEAFE' : '#FEF3C7',
                            color: service.status === "Completed" ? '#065F46' : service.status === "Report Ready" ? '#1E40AF' : '#92400E'
                          }}
                        >
                          {service.status === "Completed" ? "✅" : service.status === "Report Ready" ? "🟢" : "✅"} {service.status}
                        </Badge>
                        {service.rating > 0 && (
                          <div className="flex items-center gap-1">
                            {[...Array(service.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-current" style={{ color: '#EAB308' }} />
                            ))}
                          </div>
                        )}
                        {service.status === "Report Ready" && (
                          <Button size="sm" variant="outline">
                            View
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* My Active Requests */}
              <Card className="p-6" style={{ backgroundColor: '#FFFFFF' }}>
                <h3 className="mb-4 font-semibold" style={{ color: '#003366' }}>
                  My Active Requests
                </h3>

                <div className="p-4 rounded-lg border" style={{ borderColor: '#F59E0B', backgroundColor: '#FFF7ED' }}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold mb-1" style={{ color: '#1A1A1A' }}>
                        SR-2025-1042 | AI Service
                      </p>
                      <p className="text-sm" style={{ color: '#6B7280' }}>
                        22 May | 🟡 Technician Assigned
                      </p>
                    </div>
                    <Button size="sm" variant="outline">
                      Track
                    </Button>
                  </div>

                  {/* Status tracker */}
                  <div className="mt-4 flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#10B981' }} />
                      <span className="text-xs" style={{ color: '#10B981' }}>Booked</span>
                    </div>
                    <div className="w-8 border-t" style={{ borderColor: '#10B981' }} />
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#10B981' }} />
                      <span className="text-xs font-semibold" style={{ color: '#10B981' }}>Assigned</span>
                    </div>
                    <div className="w-8 border-t" style={{ borderColor: '#D1D5DB' }} />
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#D1D5DB' }} />
                      <span className="text-xs" style={{ color: '#9CA3AF' }}>En Route</span>
                    </div>
                    <div className="w-8 border-t" style={{ borderColor: '#D1D5DB' }} />
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#D1D5DB' }} />
                      <span className="text-xs" style={{ color: '#9CA3AF' }}>Done</span>
                    </div>
                  </div>
                </div>
              </Card>
            </>
          )}
        </main>
      </div>
    </div>
  );
}
