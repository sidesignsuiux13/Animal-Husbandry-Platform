import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";
import { StatCard } from "../components/StatCard";
import { ScopeBadge } from "../components/ScopeBadge";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Package, CheckCircle, Clock, MessageSquare, TestTube, Syringe, Pill, GraduationCap, DollarSign, AlertCircle } from "lucide-react";
import { useAuth } from "../context/AuthContext";

export function DirectorateDashboard() {
  const { user } = useAuth();

  if (!user) return null;

  const isDirectorate = user.role.includes("Directorate");
  const isDistrict = user.role.includes("CDVO");
  const isBlock = user.role.includes("BVO");

  // Role-specific stats
  const getStats = () => {
    if (isDirectorate) {
      return [
        {
          icon: Package,
          title: "Total Stock Units",
          value: "4,82,350",
          subtitle: "doses across India",
          borderColor: "#003366",
        },
        {
          icon: CheckCircle,
          title: "Services This Month",
          value: "28,450",
          subtitle: "↑ 12% vs last month",
          borderColor: "#22C55E",
        },
        {
          icon: Clock,
          title: "Pending Approvals",
          value: "47",
          subtitle: "across all modules",
          borderColor: "#F59E0B",
        },
        {
          icon: MessageSquare,
          title: "Active Grievances",
          value: "34",
          subtitle: "6 breached SLA",
          borderColor: "#EF4444",
        },
      ];
    } else if (isDistrict) {
      return [
        {
          icon: Package,
          title: "District Stock",
          value: "18,420",
          subtitle: "Across 12 blocks, Lucknow",
          borderColor: "#003366",
        },
        {
          icon: CheckCircle,
          title: "District Services",
          value: "1,240",
          subtitle: "Lucknow District total",
          borderColor: "#22C55E",
        },
        {
          icon: Clock,
          title: "Pending Approvals",
          value: "12",
          subtitle: "Awaiting my approval",
          borderColor: "#F59E0B",
        },
        {
          icon: MessageSquare,
          title: "Active Grievances",
          value: "8",
          subtitle: "Lucknow District only",
          borderColor: "#EF4444",
        },
      ];
    } else if (isBlock) {
      return [
        {
          icon: Package,
          title: "Block Stock",
          value: "1,240",
          subtitle: "Across 8 LACs, Bakshi Ka Talab",
          borderColor: "#003366",
        },
        {
          icon: CheckCircle,
          title: "Block Services",
          value: "186",
          subtitle: "Bakshi Ka Talab Block total",
          borderColor: "#22C55E",
        },
        {
          icon: Clock,
          title: "Pending Approvals",
          value: "5",
          subtitle: "From my 8 LACs",
          borderColor: "#F59E0B",
        },
        {
          icon: AlertCircle,
          title: "Data Entry Overdue",
          value: "2",
          subtitle: "LACs not updated in 7 days",
          borderColor: "#EF4444",
        },
      ];
    }
    return [];
  };

  const stats = getStats();

  // Role-specific map data
  const getMapData = () => {
    if (isDirectorate) {
      return {
        title: "National Utilisation Map",
        items: [
          { name: "Jaipur", utilization: 28, color: "#EF4444" },
          { name: "Malkangiri", utilization: 31, color: "#EF4444" },
          { name: "Nabarangpur", utilization: 35, color: "#EF4444" },
          { name: "Nuapada", utilization: 38, color: "#EF4444" },
          { name: "Kalahandi", utilization: 45, color: "#F59E0B" },
          { name: "Gajapati", utilization: 48, color: "#F59E0B" },
          { name: "Kandhamal", utilization: 52, color: "#F59E0B" },
          { name: "Boudh", utilization: 55, color: "#F59E0B" },
          { name: "Deogarh", utilization: 58, color: "#F59E0B" },
          { name: "Nayagarh", utilization: 62, color: "#F59E0B" },
          { name: "Gurugram", utilization: 65, color: "#22C55E" },
          { name: "Pune", utilization: 70, color: "#22C55E" },
          { name: "Lucknow", utilization: 92, color: "#22C55E" },
          { name: "Jagatsinghpur", utilization: 75, color: "#22C55E" },
          { name: "Kendrapara", utilization: 78, color: "#22C55E" },
          { name: "Jajpur", utilization: 81, color: "#22C55E" },
          { name: "Bhadrak", utilization: 84, color: "#22C55E" },
          { name: "Bhopal", utilization: 87, color: "#22C55E" },
          { name: "Mayurbhanj", utilization: 90, color: "#22C55E" },
          { name: "Keonjhar", utilization: 93, color: "#22C55E" },
          { name: "Angul", utilization: 70, color: "#22C55E" },
          { name: "Dhenkanal", utilization: 73, color: "#22C55E" },
          { name: "Patna", utilization: 76, color: "#22C55E" },
          { name: "Bargarh", utilization: 79, color: "#22C55E" },
          { name: "Jharsuguda", utilization: 82, color: "#22C55E" },
          { name: "Sundargarh", utilization: 85, color: "#22C55E" },
          { name: "Bolangir", utilization: 67, color: "#22C55E" },
          { name: "Sonepur", utilization: 71, color: "#22C55E" },
          { name: "Rayagada", utilization: 74, color: "#22C55E" },
          { name: "Nashik", utilization: 94, color: "#22C55E" },
        ],
        gridCols: "grid-cols-5",
      };
    } else if (isDistrict) {
      return {
        title: "Lucknow District — Block View",
        items: [
          { name: "Bakshi Ka Talab", utilization: 78, color: "#22C55E" },
          { name: "Malihabad", utilization: 72, color: "#22C55E" },
          { name: "Sarojini Nagar", utilization: 54, color: "#F59E0B" },
          { name: "Niali", utilization: 32, color: "#EF4444" },
          { name: "Barabati", utilization: 84, color: "#22C55E" },
          { name: "Mahanga", utilization: 48, color: "#F59E0B" },
          { name: "Tangi", utilization: 91, color: "#22C55E" },
          { name: "Baramba", utilization: 67, color: "#22C55E" },
          { name: "Athagarh", utilization: 76, color: "#22C55E" },
          { name: "Badamba", utilization: 59, color: "#F59E0B" },
          { name: "Narasinghpur", utilization: 82, color: "#22C55E" },
          { name: "Kantapada", utilization: 71, color: "#22C55E" },
        ],
        gridCols: "grid-cols-4",
      };
    } else if (isBlock) {
      return {
        title: "Bakshi Ka Talab Block — LAC View",
        items: [
          { name: "Bakshi Ka Talab LAC", utilization: 85, color: "#22C55E" },
          { name: "Chinhat LAC", utilization: 72, color: "#22C55E" },
          { name: "Kakori LAC", utilization: 28, color: "#EF4444" },
          { name: "Sarojini Nagar LAC", utilization: 68, color: "#F59E0B" },
          { name: "Mohanlalganj LAC", utilization: 91, color: "#22C55E" },
          { name: "Gosainganj LAC", utilization: 76, color: "#22C55E" },
          { name: "Itaunja LAC", utilization: 54, color: "#F59E0B" },
          { name: "Mall LAC", utilization: 82, color: "#22C55E" },
        ],
        gridCols: "grid-cols-4",
      };
    }
    return { title: "", items: [], gridCols: "grid-cols-4" };
  };

  const mapData = getMapData();

  // Role-specific pending approvals
  const getPendingApprovals = () => {
    if (isDirectorate) {
      return [
        {
          icon: TestTube,
          title: "Semen restocking — CDVO Lucknow",
          subtitle: "500 doses, approved by District",
          time: "2 hrs ago",
        },
        {
          icon: Syringe,
          title: "Vaccine restock — CDVO Jaipur",
          subtitle: "200 FMD doses, District approved",
          time: "4 hrs ago",
        },
        {
          icon: Pill,
          title: "Medicine procurement — CDVO Gajapati",
          subtitle: "Add to state procurement list",
          time: "5 hrs ago",
        },
        {
          icon: GraduationCap,
          title: "Training approval — State level",
          subtitle: "Biosecurity Protocol",
          time: "6 hrs ago",
        },
        {
          icon: DollarSign,
          title: "Fund request — Gajapati District",
          subtitle: "₹2.4L additional allocation",
          time: "8 hrs ago",
        },
      ];
    } else if (isDistrict) {
      return [
        {
          icon: TestTube,
          title: "Semen restocking — BVO Bakshi Ka Talab",
          subtitle: "50 doses, Block approved",
          time: "1 hr ago",
        },
        {
          icon: Syringe,
          title: "Vaccine request — BVO Niali",
          subtitle: "100 FMD doses urgent",
          time: "3 hrs ago",
        },
        {
          icon: Pill,
          title: "Medicine request — BVO Sarojini Nagar",
          subtitle: "Deworming tablets",
          time: "4 hrs ago",
        },
      ];
    } else if (isBlock) {
      return [
        {
          icon: TestTube,
          title: "Semen restocking — AIT Rajan Kumar",
          subtitle: "20 doses, Bakshi Ka Talab LAC",
          time: "30 mins ago",
        },
        {
          icon: Syringe,
          title: "Vaccine request — AIT Deepak Singh",
          subtitle: "30 FMD doses, Chinhat LAC",
          time: "2 hrs ago",
        },
        {
          icon: Pill,
          title: "Medicine request — AIT Suresh Pal",
          subtitle: "Ivermectin, Kakori LAC",
          time: "5 hrs ago",
        },
      ];
    }
    return [];
  };

  const pendingApprovals = getPendingApprovals();

  // Role-specific recent activity
  const getRecentActivity = () => {
    if (isDirectorate) {
      return [
        { action: "Semen batch delivered", location: "Lucknow District", time: "10 mins ago" },
        { action: "Vaccination completed", location: "Jaipur District", time: "25 mins ago" },
        { action: "Training scheduled", location: "State Training Center", time: "1 hr ago" },
        { action: "Disease report submitted", location: "Pune District", time: "2 hrs ago" },
        { action: "MVU deployed", location: "Nashik District", time: "3 hrs ago" },
        { action: "Expenditure approved", location: "Bhopal District", time: "4 hrs ago" },
        { action: "Grievance resolved", location: "Gurugram District", time: "5 hrs ago" },
        { action: "State procurement finalized", location: "Directorate", time: "6 hrs ago" },
      ];
    } else if (isDistrict) {
      return [
        { action: "Semen batch delivered", location: "Bakshi Ka Talab Block", time: "15 mins ago" },
        { action: "Vaccination completed", location: "Malihabad Block", time: "30 mins ago" },
        { action: "Block report submitted", location: "Sarojini Nagar Block", time: "1 hr ago" },
        { action: "Disease sample sent", location: "DDL Lucknow", time: "2 hrs ago" },
        { action: "MVU tour approved", location: "Barabati Block", time: "3 hrs ago" },
        { action: "Stock allocated", location: "Mahanga Block", time: "4 hrs ago" },
        { action: "Grievance forwarded", location: "Niali Block", time: "5 hrs ago" },
        { action: "AI service completed", location: "Tangi Block", time: "6 hrs ago" },
      ];
    } else if (isBlock) {
      return [
        { action: "AI service completed", location: "Bakshi Ka Talab LAC", time: "5 mins ago" },
        { action: "Semen stock replenished", location: "Chinhat LAC", time: "20 mins ago" },
        { action: "Data entry updated", location: "Mohanlalganj LAC", time: "45 mins ago" },
        { action: "Vaccination reported", location: "Gosainganj LAC", time: "1 hr ago" },
        { action: "Sample collected", location: "Sarojini Nagar LAC", time: "2 hrs ago" },
        { action: "Stock alert triggered", location: "Kakori LAC", time: "3 hrs ago" },
        { action: "Service request assigned", location: "Itaunja LAC", time: "4 hrs ago" },
        { action: "Farm visit completed", location: "Mall LAC", time: "5 hrs ago" },
      ];
    }
    return [];
  };

  const recentActivity = getRecentActivity();

  return (
    <div className="flex min-h-screen" style={{ backgroundColor: '#F5F5F5' }}>
      <Sidebar activeRoute="/dashboard/directorate" />

      <div className="flex-1 flex flex-col">
        <Header />

        <main className="flex-1 p-6">
          {/* Page Title */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold mb-2" style={{ color: '#003366' }}>Dashboard</h1>
            {isDirectorate && (
              <ScopeBadge
                scope="directorate"
                scopeLabel="All India"
                subLabel="States & UTs"
              />
            )}
            {isDistrict && (
              <ScopeBadge
                scope="district"
                scopeLabel="Lucknow District"
                subLabel="12 Blocks"
              />
            )}
            {isBlock && (
              <ScopeBadge
                scope="block"
                scopeLabel="Bakshi Ka Talab Block"
                subLabel="8 LACs"
              />
            )}
          </div>

          {/* Stat Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>

          {/* Map and Pending Approvals */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-6">
            {/* Utilization Map */}
            <Card className="lg:col-span-3 p-6" style={{ backgroundColor: '#FFFFFF' }}>
              <h3 className="mb-4 font-semibold" style={{ color: '#003366' }}>
                {mapData.title}
              </h3>

              <div className={`grid ${mapData.gridCols} gap-2 mb-4`}>
                {mapData.items.map((item, index) => (
                  <div
                    key={index}
                    className="p-3 rounded-lg text-center"
                    style={{ backgroundColor: `${item.color}20` }}
                  >
                    <p className="text-xs mb-1" style={{ color: '#1A1A1A' }}>
                      {item.name}
                    </p>
                    <p className="text-sm font-semibold" style={{ color: item.color }}>
                      {item.utilization}%
                    </p>
                  </div>
                ))}
              </div>

              {/* Legend */}
              <div className="flex gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#EF4444' }} />
                  <span style={{ color: '#6B7280' }}>&lt;40% Low</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#F59E0B' }} />
                  <span style={{ color: '#6B7280' }}>40-70% Adequate</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#22C55E' }} />
                  <span style={{ color: '#6B7280' }}>&gt;70% High</span>
                </div>
              </div>
            </Card>

            {/* Pending Approvals */}
            <Card className="lg:col-span-2 p-6" style={{ backgroundColor: '#FFFFFF' }}>
              <h3 className="mb-4 font-semibold" style={{ color: '#003366' }}>
                Pending Approvals
              </h3>

              <div className="space-y-4">
                {pendingApprovals.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="pb-4 border-b last:border-0" style={{ borderColor: '#E5E7EB' }}>
                      <div className="flex items-start gap-3 mb-2">
                        <Icon className="w-5 h-5 mt-1" style={{ color: '#FF6600' }} />
                        <div className="flex-1">
                          <p className="text-sm mb-1" style={{ color: '#1A1A1A' }}>
                            {item.title}
                          </p>
                          <p className="text-xs" style={{ color: '#6B7280' }}>
                            {item.subtitle}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between ml-8">
                        <span className="text-xs" style={{ color: '#6B7280' }}>
                          {item.time}
                        </span>
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            style={{ backgroundColor: '#22C55E', color: 'white' }}
                          >
                            {isDirectorate ? "Approve" : isDistrict ? "Approve & Forward" : "Approve & Forward"}
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            style={{ borderColor: '#003366', color: '#003366' }}
                          >
                            View
                          </Button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>
          </div>

          {/* Block/LAC Performance Table (District & Block only) */}
          {(isDistrict || isBlock) && (
            <Card className="p-6 mb-6" style={{ backgroundColor: '#FFFFFF' }}>
              <h3 className="mb-4 font-semibold" style={{ color: '#003366' }}>
                {isDistrict ? "Block Performance" : "LAC Performance"}
              </h3>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr style={{ borderBottom: "2px solid #E5E7EB" }}>
                      <th className="text-left py-3 px-4 font-semibold text-sm" style={{ color: '#374151' }}>
                        {isDistrict ? "Block" : "LAC"}
                      </th>
                      {isBlock && (
                        <th className="text-left py-3 px-4 font-semibold text-sm" style={{ color: '#374151' }}>
                          AIT
                        </th>
                      )}
                      <th className="text-left py-3 px-4 font-semibold text-sm" style={{ color: '#374151' }}>
                        Stock
                      </th>
                      <th className="text-left py-3 px-4 font-semibold text-sm" style={{ color: '#374151' }}>
                        Services
                      </th>
                      <th className="text-left py-3 px-4 font-semibold text-sm" style={{ color: '#374151' }}>
                        {isBlock ? "Last Updated" : "Pending"}
                      </th>
                      {isDistrict && (
                        <th className="text-left py-3 px-4 font-semibold text-sm" style={{ color: '#374151' }}>
                          Critical Alerts
                        </th>
                      )}
                      <th className="text-left py-3 px-4 font-semibold text-sm" style={{ color: '#374151' }}>
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {isDistrict && (
                      <>
                        <tr style={{ borderBottom: "1px solid #E5E7EB" }}>
                          <td className="py-3 px-4 text-sm">Bakshi Ka Talab</td>
                          <td className="py-3 px-4 text-sm">1,240</td>
                          <td className="py-3 px-4 text-sm">186</td>
                          <td className="py-3 px-4 text-sm">3</td>
                          <td className="py-3 px-4 text-sm">0</td>
                          <td className="py-3 px-4 text-sm">🟢</td>
                        </tr>
                        <tr style={{ borderBottom: "1px solid #E5E7EB" }}>
                          <td className="py-3 px-4 text-sm">Malihabad</td>
                          <td className="py-3 px-4 text-sm">980</td>
                          <td className="py-3 px-4 text-sm">142</td>
                          <td className="py-3 px-4 text-sm">1</td>
                          <td className="py-3 px-4 text-sm">0</td>
                          <td className="py-3 px-4 text-sm">🟢</td>
                        </tr>
                        <tr style={{ borderBottom: "1px solid #E5E7EB" }}>
                          <td className="py-3 px-4 text-sm">Sarojini Nagar</td>
                          <td className="py-3 px-4 text-sm">420</td>
                          <td className="py-3 px-4 text-sm">68</td>
                          <td className="py-3 px-4 text-sm">2</td>
                          <td className="py-3 px-4 text-sm">1</td>
                          <td className="py-3 px-4 text-sm">🟡</td>
                        </tr>
                        <tr style={{ borderBottom: "1px solid #E5E7EB" }}>
                          <td className="py-3 px-4 text-sm">Niali</td>
                          <td className="py-3 px-4 text-sm">85</td>
                          <td className="py-3 px-4 text-sm">12</td>
                          <td className="py-3 px-4 text-sm">4</td>
                          <td className="py-3 px-4 text-sm">2</td>
                          <td className="py-3 px-4 text-sm">🔴</td>
                        </tr>
                        <tr style={{ borderBottom: "1px solid #E5E7EB" }}>
                          <td className="py-3 px-4 text-sm">Barabati</td>
                          <td className="py-3 px-4 text-sm">650</td>
                          <td className="py-3 px-4 text-sm">98</td>
                          <td className="py-3 px-4 text-sm">0</td>
                          <td className="py-3 px-4 text-sm">0</td>
                          <td className="py-3 px-4 text-sm">🟢</td>
                        </tr>
                        <tr style={{ borderBottom: "1px solid #E5E7EB" }}>
                          <td className="py-3 px-4 text-sm">Mahanga</td>
                          <td className="py-3 px-4 text-sm">320</td>
                          <td className="py-3 px-4 text-sm">45</td>
                          <td className="py-3 px-4 text-sm">1</td>
                          <td className="py-3 px-4 text-sm">1</td>
                          <td className="py-3 px-4 text-sm">🟡</td>
                        </tr>
                      </>
                    )}
                    {isBlock && (
                      <>
                        <tr style={{ borderBottom: "1px solid #E5E7EB" }}>
                          <td className="py-3 px-4 text-sm">Bakshi Ka Talab LAC</td>
                          <td className="py-3 px-4 text-sm">Rajan Kumar</td>
                          <td className="py-3 px-4 text-sm">82 doses</td>
                          <td className="py-3 px-4 text-sm">24</td>
                          <td className="py-3 px-4 text-sm">22 May</td>
                          <td className="py-3 px-4 text-sm">🟢</td>
                        </tr>
                        <tr style={{ borderBottom: "1px solid #E5E7EB" }}>
                          <td className="py-3 px-4 text-sm">Chinhat LAC</td>
                          <td className="py-3 px-4 text-sm">Deepak Singh</td>
                          <td className="py-3 px-4 text-sm">45 doses</td>
                          <td className="py-3 px-4 text-sm">18</td>
                          <td className="py-3 px-4 text-sm">21 May</td>
                          <td className="py-3 px-4 text-sm">🟢</td>
                        </tr>
                        <tr style={{ borderBottom: "1px solid #E5E7EB" }}>
                          <td className="py-3 px-4 text-sm">Kakori LAC</td>
                          <td className="py-3 px-4 text-sm">Suresh Pal</td>
                          <td className="py-3 px-4 text-sm">12 doses</td>
                          <td className="py-3 px-4 text-sm">8</td>
                          <td className="py-3 px-4 text-sm" style={{ color: '#EF4444' }}>14 May</td>
                          <td className="py-3 px-4 text-sm">🔴 Overdue</td>
                        </tr>
                        <tr style={{ borderBottom: "1px solid #E5E7EB" }}>
                          <td className="py-3 px-4 text-sm">Sarojini Nagar LAC</td>
                          <td className="py-3 px-4 text-sm">Amit Roy</td>
                          <td className="py-3 px-4 text-sm">68 doses</td>
                          <td className="py-3 px-4 text-sm">15</td>
                          <td className="py-3 px-4 text-sm">20 May</td>
                          <td className="py-3 px-4 text-sm">🟡</td>
                        </tr>
                      </>
                    )}
                  </tbody>
                </table>
              </div>
            </Card>
          )}

          {/* Recent Activity */}
          <Card className="p-6" style={{ backgroundColor: '#FFFFFF' }}>
            <h3 className="mb-4 font-semibold" style={{ color: '#003366' }}>
              Recent Activity
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {recentActivity.map((activity, index) => (
                <div
                  key={index}
                  className="flex items-start justify-between p-3 rounded-lg"
                  style={{ backgroundColor: '#F5F5F5' }}
                >
                  <div>
                    <p className="text-sm mb-1" style={{ color: '#1A1A1A' }}>
                      {activity.action}
                    </p>
                    <p className="text-xs" style={{ color: '#6B7280' }}>
                      {activity.location}
                    </p>
                  </div>
                  <span className="text-xs" style={{ color: '#6B7280' }}>
                    {activity.time}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </main>
      </div>
    </div>
  );
}
