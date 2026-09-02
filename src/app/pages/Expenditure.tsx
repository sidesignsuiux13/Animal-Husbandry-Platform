import { useState } from "react";
import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { DollarSign, TrendingUp, AlertTriangle, FileText, Download } from "lucide-react";

export function Expenditure() {
  const [activeTab, setActiveTab] = useState<"allocation" | "expenditure" | "requests" | "analytics">("allocation");

  const tabs = [
    { id: "allocation", label: "Fund Allocation" },
    { id: "expenditure", label: "Expenditure" },
    { id: "requests", label: "Fund Requests" },
    { id: "analytics", label: "Analytics" },
  ];

  const schemes = [
    {
      name: "ADRI Disease Surveillance",
      allocated: 8.2,
      spent: 6.8,
      percentage: 83,
      status: "🟢",
    },
    {
      name: "Vaccine Production & Disease Control",
      allocated: 12.4,
      spent: 6.1,
      percentage: 49,
      status: "🟡",
    },
    {
      name: "Bio-Medical Waste Management",
      allocated: 4.8,
      spent: 3.9,
      percentage: 81,
      status: "🟢",
    },
    {
      name: "Equipment Repair/AMC",
      allocated: 6.2,
      spent: 3.8,
      percentage: 61,
      status: "🟡",
    },
    {
      name: "MVU Operations",
      allocated: 11.2,
      spent: 8.5,
      percentage: 76,
      status: "🟢",
    },
  ];

  const allocationData = [
    {
      scheme: "ADRI Disease Surveillance",
      district: "Lucknow",
      allocated: 45,
      spent: 38,
      balance: 7,
      utilisation: 84,
      statusColor: "#10B981",
    },
    {
      scheme: "Vaccine Production",
      district: "Jaipur",
      allocated: 38,
      spent: 15,
      balance: 23,
      utilisation: 39,
      statusColor: "#EF4444",
    },
    {
      scheme: "Bio-Medical Waste",
      district: "Nashik",
      allocated: 22,
      spent: 16,
      balance: 6,
      utilisation: 72,
      statusColor: "#10B981",
    },
    {
      scheme: "Equipment Repair",
      district: "Patna",
      allocated: 18,
      spent: 12,
      balance: 6,
      utilisation: 67,
      statusColor: "#F59E0B",
    },
    {
      scheme: "MVU Operations",
      district: "Bhopal",
      allocated: 55,
      spent: 41,
      balance: 14,
      utilisation: 74,
      statusColor: "#10B981",
    },
    {
      scheme: "ADRI Surveillance",
      district: "Malkangiri",
      allocated: 32,
      spent: 8,
      balance: 24,
      utilisation: 25,
      statusColor: "#EF4444",
    },
    {
      scheme: "Vaccine Production",
      district: "Pune",
      allocated: 42,
      spent: 36,
      balance: 6,
      utilisation: 86,
      statusColor: "#10B981",
    },
    {
      scheme: "MVU Operations",
      district: "Lucknow",
      allocated: 68,
      spent: 54,
      balance: 14,
      utilisation: 79,
      statusColor: "#10B981",
    },
  ];

  const expenditureHistory = [
    {
      month: "May 2025",
      scheme: "ADRI",
      amount: "₹38L",
      status: "✅",
    },
    {
      month: "Apr 2025",
      scheme: "ADRI",
      amount: "₹35L",
      status: "✅",
    },
    {
      month: "Apr 2025",
      scheme: "MVU",
      amount: "₹42L",
      status: "✅",
    },
    {
      month: "Mar 2025",
      scheme: "Vaccine",
      amount: "₹28L",
      status: "✅",
    },
  ];

  const fundRequests = [
    {
      id: "FR-2025-0234",
      district: "Lucknow",
      scheme: "Vaccine Production",
      amount: "₹24L",
      priority: "URGENT",
      description: "FMD outbreak — emergency vaccine procurement needed",
      date: "20 May",
      urgent: true,
    },
    {
      id: "FR-2025-0228",
      district: "Gajapati",
      scheme: "Equipment Repair",
      amount: "₹18L",
      priority: "Routine",
      description: "Routine equipment maintenance and repairs",
      date: "19 May",
      urgent: false,
    },
    {
      id: "FR-2025-0215",
      district: "Jaipur",
      scheme: "MVU Operations",
      amount: "₹32L",
      priority: "Moderate",
      description: "MVU fuel and operational costs for Q2",
      date: "15 May",
      urgent: false,
    },
  ];

  const getStatusColor = (utilisation: number) => {
    if (utilisation >= 75) return "#10B981";
    if (utilisation >= 50) return "#F59E0B";
    return "#EF4444";
  };

  return (
    <div className="flex min-h-screen" style={{ backgroundColor: "#F9FAFB" }}>
      <Sidebar activeRoute="/expenditure" />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6">
          {/* Page header */}
          <div className="mb-6">
            <h1 className="text-3xl font-bold mb-2" style={{ color: "#003366" }}>
              Expenditure Monitoring
            </h1>
            <p className="text-sm" style={{ color: "#6B7280" }}>
              State Plan Scheme Fund Tracking — FY 2025-26
            </p>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 mb-6 border-b" style={{ borderColor: "#E5E7EB" }}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className="px-4 py-2 font-medium text-sm transition-colors"
                style={{
                  color: activeTab === tab.id ? "#003366" : "#6B7280",
                  borderBottom: activeTab === tab.id ? "2px solid #FF6600" : "2px solid transparent",
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Fund Allocation Tab */}
          {activeTab === "allocation" && (
            <div className="space-y-6">
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                <Card className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm" style={{ color: "#6B7280" }}>
                      Total Allocated
                    </span>
                    <DollarSign className="w-5 h-5" style={{ color: "#003366" }} />
                  </div>
                  <p className="text-3xl font-bold" style={{ color: "#003366" }}>
                    ₹42.8 Cr
                  </p>
                </Card>
                <Card className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm" style={{ color: "#6B7280" }}>
                      Total Spent
                    </span>
                    <TrendingUp className="w-5 h-5" style={{ color: "#10B981" }} />
                  </div>
                  <p className="text-3xl font-bold mb-1" style={{ color: "#10B981" }}>
                    ₹29.1 Cr
                  </p>
                  <p className="text-sm" style={{ color: "#6B7280" }}>
                    68% utilised
                  </p>
                </Card>
                <Card className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm" style={{ color: "#6B7280" }}>
                      Pending Requests
                    </span>
                    <FileText className="w-5 h-5" style={{ color: "#F59E0B" }} />
                  </div>
                  <p className="text-3xl font-bold mb-1" style={{ color: "#F59E0B" }}>
                    ₹8.4 Cr
                  </p>
                  <p className="text-sm" style={{ color: "#6B7280" }}>
                    14 requests
                  </p>
                </Card>
              </div>

              {/* Scheme Progress */}
              <Card className="p-6">
                <h2 className="text-lg font-semibold mb-4" style={{ color: "#003366" }}>
                  Scheme-wise Utilisation
                </h2>
                <div className="space-y-4">
                  {schemes.map((scheme, idx) => (
                    <div key={idx}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium" style={{ color: "#1F2937" }}>
                            {scheme.name}
                          </span>
                          <span className="text-lg">{scheme.status}</span>
                        </div>
                        <span className="text-sm" style={{ color: "#6B7280" }}>
                          ₹{scheme.allocated} Cr allocated | ₹{scheme.spent} Cr spent
                        </span>
                      </div>
                      <div className="w-full h-6 rounded-full" style={{ backgroundColor: "#E5E7EB" }}>
                        <div
                          className="h-6 rounded-full flex items-center justify-end pr-3"
                          style={{
                            width: `${scheme.percentage}%`,
                            backgroundColor: getStatusColor(scheme.percentage),
                          }}
                        >
                          <span className="text-xs text-white font-medium">{scheme.percentage}%</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Allocation Table */}
              <Card>
                <div className="p-4 border-b" style={{ borderColor: "#E5E7EB" }}>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      <select className="px-3 py-1.5 border rounded text-sm" style={{ borderColor: "#D1D5DB" }}>
                        <option>Scheme ▼</option>
                      </select>
                      <select className="px-3 py-1.5 border rounded text-sm" style={{ borderColor: "#D1D5DB" }}>
                        <option>District ▼</option>
                      </select>
                      <Badge style={{ backgroundColor: "#F3F4F6", color: "#1F2937" }}>
                        FY 2025-26 ✕
                      </Badge>
                    </div>
                    <span className="text-sm" style={{ color: "#6B7280" }}>
                      Sort: Utilisation ↑↓
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-sm mb-4" style={{ color: "#6B7280" }}>
                    Showing 8 of 150 entries
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead style={{ backgroundColor: "#F9FAFB" }}>
                        <tr>
                          <th className="px-4 py-3 text-left text-xs font-medium" style={{ color: "#6B7280" }}>
                            Scheme
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-medium" style={{ color: "#6B7280" }}>
                            District
                          </th>
                          <th className="px-4 py-3 text-right text-xs font-medium" style={{ color: "#6B7280" }}>
                            Allocated (₹L)
                          </th>
                          <th className="px-4 py-3 text-right text-xs font-medium" style={{ color: "#6B7280" }}>
                            Spent (₹L)
                          </th>
                          <th className="px-4 py-3 text-right text-xs font-medium" style={{ color: "#6B7280" }}>
                            Balance (₹L)
                          </th>
                          <th className="px-4 py-3 text-right text-xs font-medium" style={{ color: "#6B7280" }}>
                            Utilisation
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-medium" style={{ color: "#6B7280" }}>
                            Status
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {allocationData.map((row, idx) => (
                          <tr key={idx} className="border-t" style={{ borderColor: "#E5E7EB" }}>
                            <td className="px-4 py-3 text-sm" style={{ color: "#1F2937" }}>
                              {row.scheme}
                            </td>
                            <td className="px-4 py-3 text-sm" style={{ color: "#6B7280" }}>
                              {row.district}
                            </td>
                            <td className="px-4 py-3 text-sm text-right" style={{ color: "#1F2937" }}>
                              {row.allocated}
                            </td>
                            <td className="px-4 py-3 text-sm text-right" style={{ color: "#1F2937" }}>
                              {row.spent}
                            </td>
                            <td className="px-4 py-3 text-sm text-right" style={{ color: "#6B7280" }}>
                              {row.balance}
                            </td>
                            <td className="px-4 py-3 text-sm text-right font-medium" style={{ color: row.statusColor }}>
                              {row.utilisation}%
                            </td>
                            <td className="px-4 py-3">
                              <div
                                className="w-8 h-8 rounded-full"
                                style={{ backgroundColor: row.statusColor }}
                              />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </Card>

              {/* Alert Banner */}
              <div
                className="p-4 rounded-lg flex items-center gap-3"
                style={{ backgroundColor: "#FEF3C7", border: "1px solid #F59E0B" }}
              >
                <AlertTriangle className="w-5 h-5" style={{ color: "#F59E0B" }} />
                <p className="text-sm" style={{ color: "#92400E" }}>
                  ⚠ 6 districts below 50% utilisation with 2 months remaining in financial year
                </p>
              </div>
            </div>
          )}

          {/* Expenditure Tab */}
          {activeTab === "expenditure" && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                {/* Left - Entry Form */}
                <Card className="p-6">
                  <h3 className="font-semibold mb-4" style={{ color: "#003366" }}>
                    Submit Expenditure
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1" style={{ color: "#374151" }}>
                        Scheme
                      </label>
                      <Input value="ADRI Disease Surveillance" readOnly />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1" style={{ color: "#374151" }}>
                        District
                      </label>
                      <Input value="Lucknow" readOnly />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1" style={{ color: "#374151" }}>
                        Month
                      </label>
                      <Input value="May 2025" readOnly />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1" style={{ color: "#374151" }}>
                        Amount Spent
                      </label>
                      <Input value="₹38,00,000" readOnly />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1" style={{ color: "#374151" }}>
                        Note
                      </label>
                      <Input value="Quarterly lab maintenance" readOnly />
                    </div>
                    <Button className="w-full" style={{ backgroundColor: "#FF6600", color: "white" }}>
                      Submit Expenditure
                    </Button>
                  </div>
                </Card>

                {/* Right - Monthly Comparison */}
                <div className="space-y-4">
                  <Card className="p-6">
                    <h3 className="font-semibold mb-4" style={{ color: "#003366" }}>
                      Monthly Comparison - Lucknow
                    </h3>
                    <div className="space-y-4">
                      {schemes.slice(0, 3).map((scheme, idx) => (
                        <div key={idx}>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm" style={{ color: "#1F2937" }}>
                              {scheme.name}
                            </span>
                            <span className="text-xs" style={{ color: "#6B7280" }}>
                              {scheme.percentage}%
                            </span>
                          </div>
                          <div className="w-full h-4 rounded-full" style={{ backgroundColor: "#E5E7EB" }}>
                            <div
                              className="h-4 rounded-full"
                              style={{
                                width: `${scheme.percentage}%`,
                                backgroundColor: getStatusColor(scheme.percentage),
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card>

                  <Card className="p-6">
                    <h3 className="font-semibold mb-4" style={{ color: "#003366" }}>
                      Expenditure History
                    </h3>
                    <div className="space-y-2">
                      {expenditureHistory.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-between py-2 border-b"
                          style={{ borderColor: "#E5E7EB" }}
                        >
                          <div>
                            <p className="text-sm font-medium" style={{ color: "#1F2937" }}>
                              {item.month}
                            </p>
                            <p className="text-xs" style={{ color: "#6B7280" }}>
                              {item.scheme}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-medium" style={{ color: "#003366" }}>
                              {item.amount}
                            </p>
                            <p className="text-xs">{item.status}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          )}

          {/* Fund Requests Tab */}
          {activeTab === "requests" && (
            <div className="space-y-4">
              {fundRequests.map((request) => (
                <Card
                  key={request.id}
                  className="p-6"
                  style={{
                    border: request.urgent ? "2px solid #EF4444" : "1px solid #E5E7EB",
                  }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-semibold" style={{ color: "#003366" }}>
                          {request.id}
                        </h3>
                        <span className="text-sm" style={{ color: "#6B7280" }}>
                          {request.district}
                        </span>
                        {request.urgent && (
                          <Badge style={{ backgroundColor: "#EF4444", color: "white" }}>
                            🔴 {request.priority}
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm mb-1" style={{ color: "#1F2937" }}>
                        Scheme: {request.scheme}
                      </p>
                      <p className="text-sm mb-2" style={{ color: "#6B7280" }}>
                        "{request.description}"
                      </p>
                      <p className="text-xs" style={{ color: "#9CA3AF" }}>
                        Submitted: {request.date}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold mb-2" style={{ color: "#003366" }}>
                        {request.amount}
                      </p>
                      <p className="text-xs" style={{ color: "#6B7280" }}>
                        {request.priority}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Button
                      className="flex-1"
                      style={{ backgroundColor: "#10B981", color: "white" }}
                    >
                      Approve {request.amount}
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1"
                      style={{ borderColor: "#003366", color: "#003366" }}
                    >
                      Partial
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1"
                      style={{ borderColor: "#EF4444", color: "#EF4444" }}
                    >
                      Reject
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          )}

          {/* Analytics Tab */}
          {activeTab === "analytics" && (
            <div className="grid grid-cols-2 gap-6">
              {/* Chart placeholders */}
              <Card className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold" style={{ color: "#003366" }}>
                    Fund Usage Trends
                  </h3>
                  <div className="flex gap-2">
                    <Button variant="outline" className="text-xs py-1 h-7">
                      <Download className="w-3 h-3 mr-1" />
                      PDF
                    </Button>
                    <Button variant="outline" className="text-xs py-1 h-7">
                      <Download className="w-3 h-3 mr-1" />
                      CSV
                    </Button>
                  </div>
                </div>
                <div
                  className="h-64 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: "#F9FAFB", border: "1px dashed #D1D5DB" }}
                >
                  <p className="text-sm" style={{ color: "#9CA3AF" }}>
                    Line chart: 5 scheme lines, Apr-Mar financial year
                  </p>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold" style={{ color: "#003366" }}>
                    District Comparison
                  </h3>
                  <div className="flex gap-2">
                    <Button variant="outline" className="text-xs py-1 h-7">
                      <Download className="w-3 h-3 mr-1" />
                      PDF
                    </Button>
                    <Button variant="outline" className="text-xs py-1 h-7">
                      <Download className="w-3 h-3 mr-1" />
                      CSV
                    </Button>
                  </div>
                </div>
                <div
                  className="h-64 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: "#F9FAFB", border: "1px dashed #D1D5DB" }}
                >
                  <p className="text-sm" style={{ color: "#9CA3AF" }}>
                    Horizontal bar chart: Top 10 districts by utilisation %
                  </p>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold" style={{ color: "#003366" }}>
                    Budget vs Actual
                  </h3>
                  <div className="flex gap-2">
                    <Button variant="outline" className="text-xs py-1 h-7">
                      <Download className="w-3 h-3 mr-1" />
                      PDF
                    </Button>
                    <Button variant="outline" className="text-xs py-1 h-7">
                      <Download className="w-3 h-3 mr-1" />
                      CSV
                    </Button>
                  </div>
                </div>
                <div
                  className="h-64 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: "#F9FAFB", border: "1px dashed #D1D5DB" }}
                >
                  <p className="text-sm" style={{ color: "#9CA3AF" }}>
                    Grouped bar chart: Per scheme (Navy: Allocated, Orange: Spent)
                  </p>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold" style={{ color: "#003366" }}>
                    Quarter Breakdown
                  </h3>
                  <div className="flex gap-2">
                    <Button variant="outline" className="text-xs py-1 h-7">
                      <Download className="w-3 h-3 mr-1" />
                      PDF
                    </Button>
                    <Button variant="outline" className="text-xs py-1 h-7">
                      <Download className="w-3 h-3 mr-1" />
                      CSV
                    </Button>
                  </div>
                </div>
                <div
                  className="h-64 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: "#F9FAFB", border: "1px dashed #D1D5DB" }}
                >
                  <p className="text-sm" style={{ color: "#9CA3AF" }}>
                    Stacked bar chart: Q1 | Q2 | Q3 | Q4 (stacked by scheme)
                  </p>
                </div>
              </Card>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
