import { useState } from "react";
import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/tabs";
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import { AlertTriangle, Eye, Send } from "lucide-react";
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

export function FarmReports() {
  const [activeTab, setActiveTab] = useState("review");

  const farmReportsData = [
    {
      farm: "Govt Cattle Farm Lucknow",
      type: "Govt",
      district: "Lucknow",
      submitted: "21 May",
      status: "submitted",
      statusText: "Submitted",
      alert: "⚠ 2 vacancies",
    },
    {
      farm: "OBPI Lucknow",
      type: "Govt",
      district: "Lucknow",
      submitted: "22 May",
      status: "reviewed",
      statusText: "Reviewed",
      alert: null,
    },
    {
      farm: "Pvt Farm Malihabad",
      type: "Private",
      district: "Lucknow",
      submitted: "20 May",
      status: "draft",
      statusText: "Draft",
      alert: null,
    },
    {
      farm: "Coop Farm Sarojini Nagar",
      type: "Coop",
      district: "Lucknow",
      submitted: "—",
      status: "not-started",
      statusText: "Not Started",
      alert: null,
    },
    {
      farm: "Govt Dairy Jagatpur",
      type: "Govt",
      district: "Lucknow",
      submitted: "—",
      status: "not-started",
      statusText: "Not Started",
      alert: null,
    },
  ];

  const milkProductivityData = [
    { month: "Dec", Lucknow: 2650, Pune: 2400, Bhopal: 2200 },
    { month: "Jan", Lucknow: 2720, Pune: 2450, Bhopal: 2280 },
    { month: "Feb", Lucknow: 2680, Pune: 2420, Bhopal: 2250 },
    { month: "Mar", Lucknow: 2780, Pune: 2500, Bhopal: 2320 },
    { month: "Apr", Lucknow: 2810, Pune: 2480, Bhopal: 2340 },
    { month: "May", Lucknow: 2840, Pune: 2520, Bhopal: 2360 },
  ];

  const submissionStatusData = [
    { district: "Lucknow", submitted: 8, pending: 4 },
    { district: "Pune", submitted: 12, pending: 2 },
    { district: "Bhopal", submitted: 10, pending: 3 },
    { district: "Gurugram", submitted: 15, pending: 1 },
  ];

  const staffShortagesData = [
    { farm: "Govt Cattle Farm Lucknow", position: "Veterinarian", vacancies: 1 },
    { farm: "Govt Cattle Farm Lucknow", position: "Attendants", vacancies: 2 },
    { farm: "OBPI Bhopal", position: "Veterinarian", vacancies: 1 },
    { farm: "Govt Dairy Jagatpur", position: "Driver", vacancies: 1 },
    { farm: "Pvt Farm Bakshi Ka Talab", position: "Attendants", vacancies: 3 },
  ];

  const aiSuccessData = [
    { farm: "Govt Lucknow", procedures: 18, confirmed: 12, rate: 67 },
    { farm: "OBPI", procedures: 22, confirmed: 18, rate: 82 },
    { farm: "Pvt Bakshi Ka Talab", procedures: 15, confirmed: 9, rate: 60 },
    { farm: "Coop Malihabad", procedures: 20, confirmed: 15, rate: 75 },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "submitted":
        return "bg-green-100 text-green-800 border-green-200";
      case "reviewed":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "draft":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "not-started":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "submitted":
        return "✅";
      case "reviewed":
        return "✅";
      case "draft":
        return "🟡";
      case "not-started":
        return "🔴";
      default:
        return "⚪";
    }
  };

  return (
    <div className="flex min-h-screen bg-[#F5F5F5]">
      <Sidebar activeRoute="/reports" />

      <div className="flex-1 flex flex-col">
        <Header />

        <main className="flex-1 p-6">
          <h1 className="text-2xl font-semibold mb-6 text-[#003366]">
            Monthly Farm Reports
          </h1>

          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-6">
              <TabsTrigger value="submit-report">Submit Report</TabsTrigger>
              <TabsTrigger value="review">Review</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>

            {/* Submit Report Tab */}
            <TabsContent value="submit-report">
              <Card>
                <CardContent className="pt-6">
                  <p className="text-center text-gray-500">Submit Report content here</p>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Review Tab */}
            <TabsContent value="review">
              <div className="space-y-6">
                {/* Filter Bar */}
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex gap-4">
                      <Select defaultValue="all-districts">
                        <SelectTrigger className="w-[180px]">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all-districts">All States</SelectItem>
                          <SelectItem value="lucknow">Lucknow</SelectItem>
                          <SelectItem value="pune">Pune</SelectItem>
                          <SelectItem value="bhopal">Bhopal</SelectItem>
                        </SelectContent>
                      </Select>

                      <Select defaultValue="all-types">
                        <SelectTrigger className="w-[180px]">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all-types">All Farm Types</SelectItem>
                          <SelectItem value="govt">Government</SelectItem>
                          <SelectItem value="private">Private</SelectItem>
                          <SelectItem value="coop">Cooperative</SelectItem>
                        </SelectContent>
                      </Select>

                      <Select defaultValue="may">
                        <SelectTrigger className="w-[180px]">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="may">May 2025</SelectItem>
                          <SelectItem value="apr">April 2025</SelectItem>
                          <SelectItem value="mar">March 2025</SelectItem>
                        </SelectContent>
                      </Select>

                      <Select defaultValue="all-status">
                        <SelectTrigger className="w-[180px]">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all-status">All Status</SelectItem>
                          <SelectItem value="submitted">Submitted</SelectItem>
                          <SelectItem value="draft">Draft</SelectItem>
                          <SelectItem value="not-started">Not Started</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>

                {/* Submission Status Cards */}
                <div className="grid grid-cols-4 gap-4">
                  <Card>
                    <CardContent className="pt-6 text-center">
                      <div className="text-3xl font-bold text-[#003366] mb-1">14</div>
                      <div className="text-sm text-gray-600">Total Farms</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6 text-center">
                      <div className="text-3xl font-bold text-green-600 mb-1">8</div>
                      <div className="text-sm text-gray-600">Submitted</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6 text-center">
                      <div className="text-3xl font-bold text-yellow-600 mb-1">2</div>
                      <div className="text-sm text-gray-600">Draft</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6 text-center">
                      <div className="text-3xl font-bold text-red-600 mb-1">4</div>
                      <div className="text-sm text-gray-600">Not Started 🔴</div>
                    </CardContent>
                  </Card>
                </div>

                {/* Reports Table */}
                <Card>
                  <CardContent className="pt-6">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-gray-50">
                          <TableHead>Farm</TableHead>
                          <TableHead>Type</TableHead>
                          <TableHead>District</TableHead>
                          <TableHead>Submitted</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Staff Alert</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {farmReportsData.map((report, index) => (
                          <TableRow key={index}>
                            <TableCell className="font-medium">{report.farm}</TableCell>
                            <TableCell>{report.type}</TableCell>
                            <TableCell>{report.district}</TableCell>
                            <TableCell>{report.submitted}</TableCell>
                            <TableCell>
                              <Badge className={getStatusBadge(report.status)}>
                                {getStatusIcon(report.status)} {report.statusText}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              {report.alert ? (
                                <span className="text-amber-600 text-sm flex items-center gap-1">
                                  <AlertTriangle className="w-4 h-4" />
                                  {report.alert}
                                </span>
                              ) : (
                                <span className="text-gray-400">—</span>
                              )}
                            </TableCell>
                            <TableCell>
                              {report.status === "submitted" || report.status === "reviewed" ? (
                                <Button variant="outline" size="sm">
                                  <Eye className="w-4 h-4 mr-1" />
                                  {report.status === "reviewed" ? "View" : "Review"}
                                </Button>
                              ) : (
                                <Button variant="outline" size="sm">
                                  <Send className="w-4 h-4 mr-1" />
                                  Send Reminder
                                </Button>
                              )}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Analytics Tab */}
            <TabsContent value="analytics">
              <div className="grid grid-cols-2 gap-6">
                {/* Milk Productivity Trend */}
                <Card>
                  <CardHeader>
                    <CardTitle>Milk Productivity Trend (6 Months)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <LineChart data={milkProductivityData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line
                          type="monotone"
                          dataKey="Lucknow"
                          stroke="#003366"
                          strokeWidth={2}
                        />
                        <Line type="monotone" dataKey="Pune" stroke="#22C55E" strokeWidth={2} />
                        <Line
                          type="monotone"
                          dataKey="Bhopal"
                          stroke="#FF6600"
                          strokeWidth={2}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                {/* Submission Status by District */}
                <Card>
                  <CardHeader>
                    <CardTitle>Submission Status by District</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={submissionStatusData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="district" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="submitted" fill="#22C55E" />
                        <Bar dataKey="pending" fill="#EF4444" />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                {/* Staff Shortages */}
                <Card>
                  <CardHeader>
                    <CardTitle>Staff Shortages</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-gray-50">
                          <TableHead>Farm</TableHead>
                          <TableHead>Position</TableHead>
                          <TableHead>Vacancies</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {staffShortagesData.map((shortage, index) => (
                          <TableRow key={index}>
                            <TableCell className="text-sm">{shortage.farm}</TableCell>
                            <TableCell className="text-sm">{shortage.position}</TableCell>
                            <TableCell>
                              <Badge className="bg-red-100 text-red-800 border-red-200">
                                🔴 {shortage.vacancies}
                              </Badge>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>

                {/* AI Success Rate */}
                <Card>
                  <CardHeader>
                    <CardTitle>AI Procedures vs Pregnancy Confirmations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={aiSuccessData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="farm" />
                        <YAxis yAxisId="left" />
                        <YAxis yAxisId="right" orientation="right" />
                        <Tooltip />
                        <Legend />
                        <Bar yAxisId="left" dataKey="procedures" fill="#3B82F6" />
                        <Bar yAxisId="left" dataKey="confirmed" fill="#22C55E" />
                        <Line
                          yAxisId="right"
                          type="monotone"
                          dataKey="rate"
                          stroke="#FF6600"
                          strokeWidth={2}
                        />
                      </BarChart>
                    </ResponsiveContainer>
                    <div className="mt-4 text-sm text-gray-600">
                      <p className="font-semibold mb-2">Success Rates:</p>
                      <div className="grid grid-cols-2 gap-2">
                        {aiSuccessData.map((farm, index) => (
                          <div key={index} className="flex items-center justify-between">
                            <span>{farm.farm}:</span>
                            <span className="font-semibold">{farm.rate}%</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
}
