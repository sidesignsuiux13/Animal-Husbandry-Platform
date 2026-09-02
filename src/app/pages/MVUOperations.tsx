import { useState } from "react";
import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/tabs";
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import { Plus, X, CheckCircle, AlertTriangle } from "lucide-react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export function MVUOperations() {
  const [activeTab, setActiveTab] = useState("tour-planning");
  const [activeMonth, setActiveMonth] = useState("jun");

  const [weekPlans, setWeekPlans] = useState({
    may: { week1: [], week2: [], week3: [], week4: [] },
    jun: {
      week1: [
        { village: "Kendupalli", block: "Salipur Block" },
        { village: "Barapal", block: "Salipur Block" },
      ],
      week2: [
        { village: "Tigiria", block: "Tigiria Block" },
        { village: "Niali", block: "Niali Block" },
      ],
      week3: [{ village: "Banki", block: "Banki Block" }],
      week4: [],
    },
    jul: { week1: [], week2: [], week3: [], week4: [] },
  });

  const mvuPerformanceData = [
    { mvu: "MVU-CUT-01", planned: 16, visited: 14, compliance: 87, status: "Healthy" },
    { mvu: "MVU-CUT-02", planned: 16, visited: 10, compliance: 63, status: "Warning" },
    { mvu: "MVU-CUT-03", planned: 16, visited: 7, compliance: 44, status: "Critical" },
    { mvu: "MVU-CUT-04", planned: 16, visited: 0, compliance: 0, status: "Critical" },
  ];

  const tourComplianceData = [
    { month: "Jan", compliance: 72 },
    { month: "Feb", compliance: 68 },
    { month: "Mar", compliance: 75 },
    { month: "Apr", compliance: 71 },
    { month: "May", compliance: 64.5 },
  ];

  const villageVisitsData = [
    { mvu: "MVU-01", visits: 14 },
    { mvu: "MVU-02", visits: 10 },
    { mvu: "MVU-03", visits: 7 },
    { mvu: "MVU-04", visits: 0 },
  ];

  const serviceTrendData = [
    { month: "Jan", treatments: 285, vaccinations: 420, ai: 145 },
    { month: "Feb", treatments: 310, vaccinations: 395, ai: 160 },
    { month: "Mar", treatments: 295, vaccinations: 440, ai: 152 },
    { month: "Apr", treatments: 320, vaccinations: 410, ai: 168 },
    { month: "May", treatments: 305, vaccinations: 425, ai: 155 },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Healthy":
        return "#22C55E";
      case "Warning":
        return "#F59E0B";
      case "Critical":
        return "#EF4444";
      default:
        return "#6B7280";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Healthy":
        return "🟢";
      case "Warning":
        return "🟡";
      case "Critical":
        return "🔴";
      default:
        return "⚪";
    }
  };

  return (
    <div className="flex min-h-screen bg-[#F5F5F5]">
      <Sidebar activeRoute="/mvu" />

      <div className="flex-1 flex flex-col">
        <Header />

        <main className="flex-1 p-6">
          <h1 className="text-2xl font-semibold mb-6 text-[#003366]">
            Mobile Veterinary Unit Operations
          </h1>

          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-6">
              <TabsTrigger value="tour-planning">Tour Planning</TabsTrigger>
              <TabsTrigger value="village-log">Village Log</TabsTrigger>
              <TabsTrigger value="daily-service">Daily Service</TabsTrigger>
              <TabsTrigger value="medicine">Medicine</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>

            {/* Tour Planning Tab */}
            <TabsContent value="tour-planning">
              <div className="grid grid-cols-2 gap-6">
                {/* Left - BVO Tour Plan Entry */}
                <Card>
                  <CardHeader>
                    <CardTitle>Submit 3-Month Tour Plan</CardTitle>
                    <div className="text-sm text-gray-600">
                      MVU: MVU-CUT-04 | BVO: Dr. Sarita Mohanty
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Month Tabs */}
                    <div className="flex gap-2">
                      {["may", "jun", "jul"].map((month) => (
                        <button
                          key={month}
                          onClick={() => setActiveMonth(month)}
                          className={`px-4 py-2 rounded-md transition-colors ${
                            activeMonth === month
                              ? "bg-[#003366] text-white"
                              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                          }`}
                        >
                          {month.charAt(0).toUpperCase() + month.slice(1)}
                        </button>
                      ))}
                    </div>

                    {/* Week Plans */}
                    <div className="space-y-6">
                      {/* Week 1 */}
                      <div className="space-y-2">
                        <h4 className="font-semibold text-sm text-[#003366]">
                          Week 1 (02-08 Jun)
                        </h4>
                        <div className="space-y-2">
                          {weekPlans[activeMonth as keyof typeof weekPlans].week1.map(
                            (entry: any, idx: number) => (
                              <div
                                key={idx}
                                className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg"
                              >
                                <span className="flex-1 text-sm">
                                  {entry.village} | {entry.block}
                                </span>
                                <button className="text-gray-400 hover:text-red-500">
                                  <X className="w-4 h-4" />
                                </button>
                              </div>
                            )
                          )}
                          <Button variant="outline" size="sm" className="w-full">
                            <Plus className="w-4 h-4 mr-1" />
                            Add Village
                          </Button>
                        </div>
                      </div>

                      {/* Week 2 */}
                      <div className="space-y-2">
                        <h4 className="font-semibold text-sm text-[#003366]">
                          Week 2 (09-15 Jun)
                        </h4>
                        <div className="space-y-2">
                          {weekPlans[activeMonth as keyof typeof weekPlans].week2.map(
                            (entry: any, idx: number) => (
                              <div
                                key={idx}
                                className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg"
                              >
                                <span className="flex-1 text-sm">
                                  {entry.village} | {entry.block}
                                </span>
                                <button className="text-gray-400 hover:text-red-500">
                                  <X className="w-4 h-4" />
                                </button>
                              </div>
                            )
                          )}
                          <Button variant="outline" size="sm" className="w-full">
                            <Plus className="w-4 h-4 mr-1" />
                            Add Village
                          </Button>
                        </div>
                      </div>

                      {/* Week 3 */}
                      <div className="space-y-2">
                        <h4 className="font-semibold text-sm text-[#003366]">
                          Week 3 (16-22 Jun)
                        </h4>
                        <div className="space-y-2">
                          {weekPlans[activeMonth as keyof typeof weekPlans].week3.map(
                            (entry: any, idx: number) => (
                              <div
                                key={idx}
                                className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg"
                              >
                                <span className="flex-1 text-sm">
                                  {entry.village} | {entry.block}
                                </span>
                                <button className="text-gray-400 hover:text-red-500">
                                  <X className="w-4 h-4" />
                                </button>
                              </div>
                            )
                          )}
                          <Button variant="outline" size="sm" className="w-full">
                            <Plus className="w-4 h-4 mr-1" />
                            Add Village
                          </Button>
                        </div>
                      </div>

                      {/* Week 4 */}
                      <div className="space-y-2">
                        <h4 className="font-semibold text-sm text-[#003366]">
                          Week 4 (23-30 Jun)
                        </h4>
                        <div className="space-y-2">
                          <Button variant="outline" size="sm" className="w-full">
                            <Plus className="w-4 h-4 mr-1" />
                            Add Village
                          </Button>
                        </div>
                      </div>
                    </div>

                    <Button className="w-full bg-[#FF6600] hover:bg-[#FF6600]/90">
                      Submit Plan to CDVO
                    </Button>
                  </CardContent>
                </Card>

                {/* Right - CDVO Review Panel */}
                <Card>
                  <CardHeader>
                    <CardTitle>Review Submitted Plan</CardTitle>
                    <div className="text-sm text-gray-600 space-y-1">
                      <p>Submitted by: BVO Dr. Sarita Mohanty</p>
                      <p className="flex items-center gap-2">
                        Submitted: 20 May 2025 | Status:{" "}
                        <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">
                          🟡 Pending
                        </Badge>
                      </p>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Plan Summary Table */}
                    <div>
                      <h4 className="font-semibold text-sm mb-3 text-[#003366]">
                        Plan Summary
                      </h4>
                      <Table>
                        <TableHeader>
                          <TableRow className="bg-gray-50">
                            <TableHead>Month</TableHead>
                            <TableHead>Villages Planned</TableHead>
                            <TableHead>Status</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell>May 2025</TableCell>
                            <TableCell>16</TableCell>
                            <TableCell>
                              <Badge className="bg-green-100 text-green-800 border-green-200">
                                ✅ Approved
                              </Badge>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Jun 2025</TableCell>
                            <TableCell>12</TableCell>
                            <TableCell>
                              <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">
                                🟡 Pending Review
                              </Badge>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Jul 2025</TableCell>
                            <TableCell>—</TableCell>
                            <TableCell>
                              <Badge className="bg-gray-100 text-gray-600 border-gray-200">
                                ⚪ Not submitted
                              </Badge>
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-3">
                      <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Accept Plan
                      </Button>
                      <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white">
                        <AlertTriangle className="w-4 h-4 mr-2" />
                        Suggest Changes
                      </Button>
                      <Button variant="outline" className="w-full border-red-500 text-red-500 hover:bg-red-50">
                        Reject
                      </Button>
                    </div>

                    {/* Changes Notes */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Change Notes</label>
                      <textarea
                        className="w-full p-3 border rounded-lg resize-none"
                        rows={4}
                        placeholder="Enter suggested changes..."
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Village Log Tab */}
            <TabsContent value="village-log">
              <Card>
                <CardContent className="pt-6">
                  <p className="text-center text-gray-500">Village Log content here</p>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Daily Service Tab */}
            <TabsContent value="daily-service">
              <Card>
                <CardContent className="pt-6">
                  <p className="text-center text-gray-500">Daily Service content here</p>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Medicine Tab */}
            <TabsContent value="medicine">
              <Card>
                <CardContent className="pt-6">
                  <p className="text-center text-gray-500">Medicine content here</p>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Analytics Tab */}
            <TabsContent value="analytics">
              <div className="space-y-6">
                {/* Tour Compliance Gauge */}
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center mb-6">
                      <h3 className="text-sm font-semibold mb-2 text-[#003366]">
                        Tour Compliance - May 2025
                      </h3>
                      <div className="text-5xl font-bold text-[#003366] mb-4">64.5%</div>
                      <div className="max-w-2xl mx-auto">
                        <div className="w-full h-6 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-[#F59E0B] transition-all"
                            style={{ width: "64.5%" }}
                          />
                        </div>
                        <p className="text-sm text-gray-600 mt-2">
                          31 of 48 planned villages visited
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Analytics Charts */}
                <div className="grid grid-cols-2 gap-6">
                  {/* MVU Performance */}
                  <Card>
                    <CardHeader>
                      <CardTitle>MVU Performance</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Table>
                        <TableHeader>
                          <TableRow className="bg-gray-50">
                            <TableHead>MVU</TableHead>
                            <TableHead>Planned</TableHead>
                            <TableHead>Visited</TableHead>
                            <TableHead>Compliance</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {mvuPerformanceData.map((row, index) => (
                            <TableRow key={index}>
                              <TableCell>{row.mvu}</TableCell>
                              <TableCell>{row.planned}</TableCell>
                              <TableCell>{row.visited}</TableCell>
                              <TableCell>
                                <Badge
                                  style={{
                                    backgroundColor: `${getStatusColor(row.status)}20`,
                                    color: getStatusColor(row.status),
                                  }}
                                >
                                  {getStatusIcon(row.status)} {row.compliance}%
                                </Badge>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>

                  {/* Village Visits by MVU */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Village Visits by MVU</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ResponsiveContainer width="100%" height={250}>
                        <BarChart data={villageVisitsData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="mvu" />
                          <YAxis />
                          <Tooltip />
                          <Bar dataKey="visits" fill="#003366" />
                        </BarChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>

                  {/* Compliance Trend */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Tour Compliance Trend</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ResponsiveContainer width="100%" height={250}>
                        <LineChart data={tourComplianceData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="month" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Line
                            type="monotone"
                            dataKey="compliance"
                            stroke="#FF6600"
                            strokeWidth={2}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>

                  {/* Service Trend */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Service Delivery Trend</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ResponsiveContainer width="100%" height={250}>
                        <LineChart data={serviceTrendData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="month" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Line
                            type="monotone"
                            dataKey="treatments"
                            stroke="#22C55E"
                            strokeWidth={2}
                          />
                          <Line
                            type="monotone"
                            dataKey="vaccinations"
                            stroke="#3B82F6"
                            strokeWidth={2}
                          />
                          <Line type="monotone" dataKey="ai" stroke="#8B5CF6" strokeWidth={2} />
                        </LineChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
}
