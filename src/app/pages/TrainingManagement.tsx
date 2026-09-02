import { useState } from "react";
import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Users, TrendingUp, Clock, XCircle, Download, Eye, CheckCircle, X } from "lucide-react";

export function TrainingManagement() {
  const [activeTab, setActiveTab] = useState<"overview" | "applications" | "slots" | "database">("overview");

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "applications", label: "Applications" },
    { id: "slots", label: "Slot Allocation" },
    { id: "database", label: "Database" },
  ];

  const activeBatches = [
    {
      code: "ZDM-2025-04",
      name: "Zoonotic Disease Management",
      dates: "02 Jun – 06 Jun",
      venue: "VOTI",
      enrolled: 12,
      max: 15,
      percentage: 80,
      status: "Upcoming",
      statusColor: "#10B981",
    },
    {
      code: "BP-2025-03",
      name: "Biosecurity Protocols",
      dates: "10 Jun – 13 Jun",
      venue: "VOTI",
      enrolled: 8,
      max: 15,
      percentage: 53,
      status: "Filling",
      statusColor: "#F59E0B",
    },
    {
      code: "AD-2025-02",
      name: "Advanced Diagnostics",
      dates: "15 Jun – 18 Jun",
      venue: "DDL Cuttack",
      enrolled: 15,
      max: 15,
      percentage: 100,
      status: "Full",
      statusColor: "#EF4444",
    },
  ];

  const applications = [
    {
      officer: "Dr. Amit Das",
      designation: "BVO",
      district: "Cuttack",
      programme: "Zoonotic Disease Mgmt",
      applied: "18 May",
      warning: null,
      status: "Pending",
      statusColor: "#F59E0B",
    },
    {
      officer: "Dr. Kavita Patel",
      designation: "VAS",
      district: "Puri",
      programme: "Biosecurity Protocols",
      applied: "19 May",
      warning: "⚠ Completed Aug 2024",
      status: "Pending",
      statusColor: "#F59E0B",
    },
    {
      officer: "Sujit Kumar",
      designation: "AVAS",
      district: "Balasore",
      programme: "Advanced Diagnostics",
      applied: "20 May",
      warning: "⚠ Quota: 2/2 Balasore",
      status: "Pending",
      statusColor: "#F59E0B",
    },
    {
      officer: "Dr. Rekha Singh",
      designation: "CDVO",
      district: "Ganjam",
      programme: "Emergency Response",
      applied: "21 May",
      warning: null,
      status: "Approved",
      statusColor: "#10B981",
    },
    {
      officer: "Anita Mohanty",
      designation: "BVO",
      district: "Koraput",
      programme: "Animal Nutrition",
      applied: "21 May",
      warning: null,
      status: "Approved",
      statusColor: "#10B981",
    },
    {
      officer: "Priya Nanda",
      designation: "VAS",
      district: "Puri",
      programme: "Advanced Diagnostics",
      applied: "18 May",
      warning: null,
      status: "Rejected",
      statusColor: "#EF4444",
    },
  ];

  const databaseOfficers = [
    {
      officer: "Dr. Amit Das",
      designation: "BVO",
      district: "Cuttack",
      completed: 3,
      lastTraining: "Mar 2025",
      upcoming: "Jun 2025",
      highlighted: true,
      timeline: [
        { date: "Mar 2025", programme: "Biosecurity", status: "completed" },
        { date: "Jan 2025", programme: "Animal Nutrition", status: "completed" },
        { date: "Oct 2024", programme: "Emergency Response", status: "completed" },
        { date: "Jun 2025", programme: "Upcoming: ZDM-2025-04", status: "upcoming" },
      ],
    },
    {
      officer: "Dr. Kavita Patel",
      designation: "VAS",
      district: "Puri",
      completed: 4,
      lastTraining: "Aug 2024",
      upcoming: "—",
      highlighted: false,
      amber: true,
    },
    {
      officer: "Sujit Kumar",
      designation: "AVAS",
      district: "Balasore",
      completed: 1,
      lastTraining: "Jan 2025",
      upcoming: "Jun 2025",
      highlighted: false,
    },
    {
      officer: "Dr. Sarita Mohanty",
      designation: "BVO",
      district: "Cuttack",
      completed: 5,
      lastTraining: "Apr 2025",
      upcoming: "—",
      highlighted: false,
    },
    {
      officer: "Rajan Kumar",
      designation: "AIT",
      district: "Cuttack",
      completed: 2,
      lastTraining: "Feb 2025",
      upcoming: "Pending",
      highlighted: false,
    },
  ];

  const [selectedOfficer, setSelectedOfficer] = useState(databaseOfficers[0]);

  const districtData = [
    { district: "Cuttack", applications: 45 },
    { district: "Puri", applications: 38 },
    { district: "Ganjam", applications: 34 },
    { district: "Balasore", applications: 32 },
    { district: "Koraput", applications: 28 },
    { district: "Sambalpur", applications: 24 },
    { district: "Malkangiri", applications: 22 },
    { district: "Gajapati", applications: 18 },
  ];

  const maxApplications = Math.max(...districtData.map((d) => d.applications));

  return (
    <div className="flex min-h-screen" style={{ backgroundColor: "#F9FAFB" }}>
      <Sidebar activeRoute="/training" />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6">
          {/* Page header */}
          <div className="mb-6">
            <h1 className="text-3xl font-bold mb-2" style={{ color: "#003366" }}>
              Training Management
            </h1>
            <p className="text-sm" style={{ color: "#6B7280" }}>
              Veterinary Officers Training Institute (VOTI)
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

          {/* Overview Tab */}
          {activeTab === "overview" && (
            <div className="space-y-6">
              {/* Stats */}
              <div className="grid grid-cols-4 gap-4">
                <Card className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm" style={{ color: "#6B7280" }}>
                      Total Applications
                    </span>
                    <Users className="w-5 h-5" style={{ color: "#003366" }} />
                  </div>
                  <p className="text-3xl font-bold" style={{ color: "#003366" }}>
                    284
                  </p>
                </Card>
                <Card className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm" style={{ color: "#6B7280" }}>
                      Approved
                    </span>
                    <CheckCircle className="w-5 h-5" style={{ color: "#10B981" }} />
                  </div>
                  <p className="text-3xl font-bold" style={{ color: "#10B981" }}>
                    198
                  </p>
                </Card>
                <Card className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm" style={{ color: "#6B7280" }}>
                      Pending Review
                    </span>
                    <Clock className="w-5 h-5" style={{ color: "#F59E0B" }} />
                  </div>
                  <p className="text-3xl font-bold" style={{ color: "#F59E0B" }}>
                    38
                  </p>
                </Card>
                <Card className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm" style={{ color: "#6B7280" }}>
                      Rejected
                    </span>
                    <XCircle className="w-5 h-5" style={{ color: "#EF4444" }} />
                  </div>
                  <p className="text-3xl font-bold" style={{ color: "#EF4444" }}>
                    48
                  </p>
                </Card>
              </div>

              {/* Active Batches */}
              <div>
                <h2 className="text-lg font-semibold mb-4" style={{ color: "#003366" }}>
                  Active Batches
                </h2>
                <div className="grid grid-cols-3 gap-4">
                  {activeBatches.map((batch) => (
                    <Card key={batch.code} className="p-4">
                      <div className="mb-3">
                        <p className="font-semibold text-sm mb-1" style={{ color: "#003366" }}>
                          {batch.code}
                        </p>
                        <p className="text-sm mb-2" style={{ color: "#1F2937" }}>
                          {batch.name}
                        </p>
                        <p className="text-xs" style={{ color: "#6B7280" }}>
                          {batch.dates} | {batch.venue}
                        </p>
                      </div>
                      <div className="mb-3">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs" style={{ color: "#6B7280" }}>
                            👥 {batch.enrolled}/{batch.max}
                          </span>
                          <span className="text-xs font-medium" style={{ color: "#003366" }}>
                            {batch.percentage}%
                          </span>
                        </div>
                        <div className="w-full h-2 rounded-full" style={{ backgroundColor: "#E5E7EB" }}>
                          <div
                            className="h-2 rounded-full"
                            style={{ width: `${batch.percentage}%`, backgroundColor: batch.statusColor }}
                          />
                        </div>
                      </div>
                      <div className="flex items-center justify-between mb-3">
                        <Badge style={{ backgroundColor: batch.statusColor, color: "white" }}>
                          {batch.status}
                        </Badge>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          className="flex-1 text-xs py-1 h-8"
                          style={{ borderColor: "#003366", color: "#003366" }}
                        >
                          <Eye className="w-3 h-3 mr-1" />
                          View List
                        </Button>
                        <Button
                          variant="outline"
                          className="flex-1 text-xs py-1 h-8"
                          style={{ borderColor: "#003366", color: "#003366" }}
                        >
                          <Download className="w-3 h-3 mr-1" />
                          PDF
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              {/* District Chart */}
              <Card className="p-6">
                <h2 className="text-lg font-semibold mb-4" style={{ color: "#003366" }}>
                  Applications per District
                </h2>
                <div className="space-y-3">
                  {districtData.map((data) => (
                    <div key={data.district}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm" style={{ color: "#1F2937" }}>
                          {data.district}
                        </span>
                        <span className="text-sm font-medium" style={{ color: "#003366" }}>
                          {data.applications}
                        </span>
                      </div>
                      <div className="w-full h-6 rounded" style={{ backgroundColor: "#E5E7EB" }}>
                        <div
                          className="h-6 rounded flex items-center justify-end pr-2"
                          style={{
                            width: `${(data.applications / maxApplications) * 100}%`,
                            backgroundColor: "#003366",
                          }}
                        >
                          <span className="text-xs text-white font-medium">{data.applications}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          )}

          {/* Applications Tab */}
          {activeTab === "applications" && (
            <div className="space-y-4">
              {/* Filters */}
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <Badge style={{ backgroundColor: "#F3F4F6", color: "#1F2937" }}>
                    Status: Pending
                    <X className="w-3 h-3 ml-1 inline" />
                  </Badge>
                  <Badge style={{ backgroundColor: "#F3F4F6", color: "#1F2937" }}>
                    May 2025
                    <X className="w-3 h-3 ml-1 inline" />
                  </Badge>
                </div>
                <div className="text-sm" style={{ color: "#6B7280" }}>
                  Sort: Applied Date ↓
                </div>
              </div>
              <p className="text-sm" style={{ color: "#6B7280" }}>
                Showing 6 of 47 results
              </p>

              {/* Table */}
              <Card>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead style={{ backgroundColor: "#F9FAFB" }}>
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium" style={{ color: "#6B7280" }}>
                          Officer
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium" style={{ color: "#6B7280" }}>
                          Designation
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium" style={{ color: "#6B7280" }}>
                          District
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium" style={{ color: "#6B7280" }}>
                          Programme
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium" style={{ color: "#6B7280" }}>
                          Applied
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium" style={{ color: "#6B7280" }}>
                          Warning
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium" style={{ color: "#6B7280" }}>
                          Status
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium" style={{ color: "#6B7280" }}>
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {applications.map((app, idx) => (
                        <tr key={idx} className="border-t" style={{ borderColor: "#E5E7EB" }}>
                          <td className="px-4 py-3 text-sm" style={{ color: "#1F2937" }}>
                            {app.officer}
                          </td>
                          <td className="px-4 py-3 text-sm" style={{ color: "#6B7280" }}>
                            {app.designation}
                          </td>
                          <td className="px-4 py-3 text-sm" style={{ color: "#6B7280" }}>
                            {app.district}
                          </td>
                          <td className="px-4 py-3 text-sm" style={{ color: "#1F2937" }}>
                            {app.programme}
                          </td>
                          <td className="px-4 py-3 text-sm" style={{ color: "#6B7280" }}>
                            {app.applied}
                          </td>
                          <td className="px-4 py-3 text-sm" style={{ color: "#F59E0B" }}>
                            {app.warning || "—"}
                          </td>
                          <td className="px-4 py-3">
                            <Badge style={{ backgroundColor: app.statusColor, color: "white" }}>
                              {app.status}
                            </Badge>
                          </td>
                          <td className="px-4 py-3">
                            {app.status === "Pending" ? (
                              <div className="flex gap-2">
                                <Button
                                  className="text-xs py-1 h-7"
                                  style={{ backgroundColor: "#10B981", color: "white" }}
                                >
                                  Approve
                                </Button>
                                <Button
                                  variant="outline"
                                  className="text-xs py-1 h-7"
                                  style={{ borderColor: "#EF4444", color: "#EF4444" }}
                                >
                                  Reject
                                </Button>
                              </div>
                            ) : (
                              <Button
                                variant="outline"
                                className="text-xs py-1 h-7"
                                style={{ borderColor: "#003366", color: "#003366" }}
                              >
                                View
                              </Button>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </div>
          )}

          {/* Slot Allocation Tab */}
          {activeTab === "slots" && (
            <div className="space-y-6">
              <h2 className="text-lg font-semibold" style={{ color: "#003366" }}>
                Batch & Slot Management
              </h2>
              <div className="grid grid-cols-2 gap-6">
                {/* Left - Create Batch Form */}
                <Card className="p-6">
                  <h3 className="font-semibold mb-4" style={{ color: "#003366" }}>
                    Create New Batch
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1" style={{ color: "#374151" }}>
                        Programme
                      </label>
                      <Input value="Zoonotic Disease Management" readOnly />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1" style={{ color: "#374151" }}>
                        Dates
                      </label>
                      <Input value="02-06 Jun 2025" readOnly />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1" style={{ color: "#374151" }}>
                        Venue
                      </label>
                      <Input value="VOTI Bhubaneswar" readOnly />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1" style={{ color: "#374151" }}>
                        Max Participants
                      </label>
                      <Input value="15" readOnly />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: "#374151" }}>
                        Assigned Officers (3)
                      </label>
                      <div className="space-y-2">
                        {["Dr. Amit Das - BVO, Cuttack", "Dr. Rekha Singh - CDVO, Ganjam", "Anita Mohanty - BVO, Koraput"].map(
                          (officer, idx) => (
                            <label key={idx} className="flex items-center gap-2">
                              <input type="checkbox" checked readOnly className="w-4 h-4" />
                              <span className="text-sm" style={{ color: "#1F2937" }}>
                                {officer}
                              </span>
                            </label>
                          )
                        )}
                      </div>
                    </div>
                    <Button className="w-full" style={{ backgroundColor: "#FF6600", color: "white" }}>
                      Create Batch & Notify
                    </Button>
                  </div>
                </Card>

                {/* Right - Active Batches */}
                <div className="space-y-4">
                  <h3 className="font-semibold" style={{ color: "#003366" }}>
                    Active Batches
                  </h3>
                  {activeBatches.map((batch) => (
                    <Card key={batch.code} className="p-4">
                      <div className="mb-3">
                        <p className="font-semibold text-sm mb-1" style={{ color: "#003366" }}>
                          {batch.code}
                        </p>
                        <p className="text-sm mb-2" style={{ color: "#1F2937" }}>
                          {batch.name}
                        </p>
                        <p className="text-xs" style={{ color: "#6B7280" }}>
                          {batch.dates} | {batch.venue}
                        </p>
                      </div>
                      <div className="mb-3">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs" style={{ color: "#6B7280" }}>
                            👥 {batch.enrolled}/{batch.max}
                          </span>
                          <span className="text-xs font-medium" style={{ color: "#003366" }}>
                            {batch.percentage}%
                          </span>
                        </div>
                        <div className="w-full h-2 rounded-full" style={{ backgroundColor: "#E5E7EB" }}>
                          <div
                            className="h-2 rounded-full"
                            style={{ width: `${batch.percentage}%`, backgroundColor: batch.statusColor }}
                          />
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          className="flex-1 text-xs py-1 h-8"
                          style={{ borderColor: "#003366", color: "#003366" }}
                        >
                          <Download className="w-3 h-3 mr-1" />
                          Download List
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Database Tab */}
          {activeTab === "database" && (
            <div className="space-y-4">
              {/* Search and Filters */}
              <div className="flex gap-4">
                <Input placeholder="Search officers..." className="flex-1" />
                <select
                  className="px-4 py-2 border rounded-lg text-sm"
                  style={{ borderColor: "#D1D5DB", color: "#374151" }}
                >
                  <option>Designation ▼</option>
                </select>
                <select
                  className="px-4 py-2 border rounded-lg text-sm"
                  style={{ borderColor: "#D1D5DB", color: "#374151" }}
                >
                  <option>District ▼</option>
                </select>
                <select
                  className="px-4 py-2 border rounded-lg text-sm"
                  style={{ borderColor: "#D1D5DB", color: "#374151" }}
                >
                  <option>Programme ▼</option>
                </select>
              </div>

              {/* Table and Side Panel */}
              <div className="grid grid-cols-3 gap-6">
                <div className="col-span-2">
                  <Card>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead style={{ backgroundColor: "#F9FAFB" }}>
                          <tr>
                            <th className="px-4 py-3 text-left text-xs font-medium" style={{ color: "#6B7280" }}>
                              Officer
                            </th>
                            <th className="px-4 py-3 text-left text-xs font-medium" style={{ color: "#6B7280" }}>
                              Designation
                            </th>
                            <th className="px-4 py-3 text-left text-xs font-medium" style={{ color: "#6B7280" }}>
                              District
                            </th>
                            <th className="px-4 py-3 text-left text-xs font-medium" style={{ color: "#6B7280" }}>
                              Completed
                            </th>
                            <th className="px-4 py-3 text-left text-xs font-medium" style={{ color: "#6B7280" }}>
                              Last Training
                            </th>
                            <th className="px-4 py-3 text-left text-xs font-medium" style={{ color: "#6B7280" }}>
                              Upcoming
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {databaseOfficers.map((officer, idx) => (
                            <tr
                              key={idx}
                              className="border-t cursor-pointer hover:bg-gray-50"
                              style={{
                                borderColor: "#E5E7EB",
                                backgroundColor: officer.highlighted ? "#FEF3C7" : officer.amber ? "#FEF3C7" : "white",
                              }}
                              onClick={() => setSelectedOfficer(officer)}
                            >
                              <td className="px-4 py-3 text-sm" style={{ color: "#1F2937" }}>
                                {officer.officer}
                              </td>
                              <td className="px-4 py-3 text-sm" style={{ color: "#6B7280" }}>
                                {officer.designation}
                              </td>
                              <td className="px-4 py-3 text-sm" style={{ color: "#6B7280" }}>
                                {officer.district}
                              </td>
                              <td className="px-4 py-3 text-sm" style={{ color: "#1F2937" }}>
                                {officer.completed} programmes
                              </td>
                              <td className="px-4 py-3 text-sm" style={{ color: "#6B7280" }}>
                                {officer.lastTraining}
                              </td>
                              <td className="px-4 py-3 text-sm" style={{ color: "#6B7280" }}>
                                {officer.upcoming}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </Card>
                </div>

                {/* Right Side Panel */}
                <Card className="p-6">
                  <h3 className="font-semibold mb-4" style={{ color: "#003366" }}>
                    {selectedOfficer.officer}
                  </h3>
                  <p className="text-sm mb-4" style={{ color: "#6B7280" }}>
                    {selectedOfficer.designation}, {selectedOfficer.district}
                  </p>
                  <h4 className="text-sm font-semibold mb-3" style={{ color: "#1F2937" }}>
                    Training Timeline
                  </h4>
                  <div className="space-y-3">
                    {selectedOfficer.timeline?.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div
                          className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{
                            backgroundColor: item.status === "completed" ? "#10B981" : "#F59E0B",
                          }}
                        >
                          {item.status === "completed" ? (
                            <CheckCircle className="w-4 h-4 text-white" />
                          ) : (
                            <Clock className="w-4 h-4 text-white" />
                          )}
                        </div>
                        <div>
                          <p className="text-sm font-medium" style={{ color: "#1F2937" }}>
                            {item.date}
                          </p>
                          <p className="text-xs" style={{ color: "#6B7280" }}>
                            {item.programme}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
