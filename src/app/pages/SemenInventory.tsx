import { useState } from "react";
import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/tabs";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Input } from "../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import { Search, FileText, Download, CheckCircle, AlertTriangle, Edit } from "lucide-react";

export function SemenInventory() {
  const [activeTab, setActiveTab] = useState("inventory");
  const inventoryData = [
    {
      location: "Bakshi Ka Talab LAC",
      type: "Normal Cattle",
      animal: "Cattle",
      code: "SC-2025-0441",
      allocated: 100,
      delivered: 82,
      date: "15 May",
      status: "Healthy",
      statusColor: "#22C55E",
    },
    {
      location: "Jaipur LAC",
      type: "Sex Sorted",
      animal: "Cattle",
      code: "SC-2025-0442",
      allocated: 50,
      delivered: 12,
      date: "14 May",
      status: "Critical",
      statusColor: "#EF4444",
    },
    {
      location: "Ranchi LAC",
      type: "Normal Buffalo",
      animal: "Buffalo",
      code: "SB-2025-0221",
      allocated: 75,
      delivered: 45,
      date: "16 May",
      status: "Warning",
      statusColor: "#F59E0B",
    },
    {
      location: "Lucknow LAC",
      type: "Normal Cattle",
      animal: "Cattle",
      code: "SC-2025-0443",
      allocated: 120,
      delivered: 98,
      date: "17 May",
      status: "Healthy",
      statusColor: "#22C55E",
    },
    {
      location: "Berhampur LAC",
      type: "Sex Sorted",
      animal: "Cattle",
      code: "SC-2025-0444",
      allocated: 60,
      delivered: 55,
      date: "15 May",
      status: "Healthy",
      statusColor: "#22C55E",
    },
    {
      location: "Bhopal LAC",
      type: "Normal Cattle",
      animal: "Cattle",
      code: "SC-2025-0445",
      allocated: 90,
      delivered: 34,
      date: "13 May",
      status: "Warning",
      statusColor: "#F59E0B",
    },
    {
      location: "Patna LAC",
      type: "Normal Buffalo",
      animal: "Buffalo",
      code: "SB-2025-0222",
      allocated: 80,
      delivered: 72,
      date: "18 May",
      status: "Healthy",
      statusColor: "#22C55E",
    },
    {
      location: "Pune LAC",
      type: "Sex Sorted",
      animal: "Cattle",
      code: "SC-2025-0446",
      allocated: 55,
      delivered: 18,
      date: "12 May",
      status: "Critical",
      statusColor: "#EF4444",
    },
  ];

  return (
    <div className="flex min-h-screen" style={{ backgroundColor: '#F5F5F5' }}>
      <Sidebar activeRoute="/inventory/semen" />

      <div className="flex-1 flex flex-col">
        <Header />

        <main className="flex-1 p-6">
          {/* Page Title */}
          <div className="mb-6">
            <h1 style={{ color: '#003366' }}>Semen Inventory Management</h1>
            <p className="text-sm" style={{ color: '#6B7280' }}>
              Manage and track semen inventory across all locations
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-6">
              <TabsTrigger value="inventory">Inventory</TabsTrigger>
              <TabsTrigger value="utilization">Utilization</TabsTrigger>
              <TabsTrigger value="restocking">Restocking</TabsTrigger>
              <TabsTrigger value="reports">Reports</TabsTrigger>
            </TabsList>

          {/* Inventory Tab */}
          <TabsContent value="inventory">
              {/* Filters Card */}
          <Card className="p-6 mb-6" style={{ backgroundColor: '#FFFFFF' }}>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-4">
              <Select>
                <SelectTrigger style={{ borderColor: '#E5E7EB' }}>
                  <SelectValue placeholder="Semen Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="normal-cattle">Normal Cattle</SelectItem>
                  <SelectItem value="sex-sorted">Sex Sorted</SelectItem>
                  <SelectItem value="normal-buffalo">Normal Buffalo</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger style={{ borderColor: '#E5E7EB' }}>
                  <SelectValue placeholder="Animal Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cattle">Cattle</SelectItem>
                  <SelectItem value="buffalo">Buffalo</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger style={{ borderColor: '#E5E7EB' }}>
                  <SelectValue placeholder="Stock Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="healthy">Healthy</SelectItem>
                  <SelectItem value="warning">Warning</SelectItem>
                  <SelectItem value="critical">Critical</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger style={{ borderColor: '#E5E7EB' }}>
                  <SelectValue placeholder="Date Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="today">Today</SelectItem>
                  <SelectItem value="week">This Week</SelectItem>
                  <SelectItem value="month">This Month</SelectItem>
                </SelectContent>
              </Select>

              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4" style={{ color: '#6B7280' }} />
                <Input
                  placeholder="Search..."
                  className="pl-10"
                  style={{ borderColor: '#E5E7EB' }}
                />
              </div>
            </div>

            <div className="flex gap-3">
              <Button
                variant="outline"
                className="gap-2"
                style={{ borderColor: '#003366', color: '#003366' }}
              >
                <FileText className="w-4 h-4" />
                Export PDF
              </Button>
              <Button
                variant="outline"
                className="gap-2"
                style={{ borderColor: '#003366', color: '#003366' }}
              >
                <Download className="w-4 h-4" />
                Export CSV
              </Button>
            </div>
          </Card>

          {/* Inventory Table */}
          <Card style={{ backgroundColor: '#FFFFFF' }}>
            <Table>
              <TableHeader>
                <TableRow style={{ backgroundColor: '#F5F5F5' }}>
                  <TableHead style={{ color: '#003366' }}>Location</TableHead>
                  <TableHead style={{ color: '#003366' }}>Type</TableHead>
                  <TableHead style={{ color: '#003366' }}>Animal</TableHead>
                  <TableHead style={{ color: '#003366' }}>Code</TableHead>
                  <TableHead style={{ color: '#003366' }}>Qty Allocated</TableHead>
                  <TableHead style={{ color: '#003366' }}>Qty Delivered</TableHead>
                  <TableHead style={{ color: '#003366' }}>Date</TableHead>
                  <TableHead style={{ color: '#003366' }}>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {inventoryData.map((row, index) => (
                  <TableRow
                    key={index}
                    className={index % 2 === 1 ? '' : ''}
                    style={index % 2 === 1 ? { backgroundColor: '#F9FAFB' } : {}}
                  >
                    <TableCell style={{ color: '#1A1A1A' }}>{row.location}</TableCell>
                    <TableCell style={{ color: '#1A1A1A' }}>{row.type}</TableCell>
                    <TableCell style={{ color: '#1A1A1A' }}>{row.animal}</TableCell>
                    <TableCell style={{ color: '#6B7280' }}>{row.code}</TableCell>
                    <TableCell style={{ color: '#1A1A1A' }}>{row.allocated}</TableCell>
                    <TableCell style={{ color: '#1A1A1A' }}>{row.delivered}</TableCell>
                    <TableCell style={{ color: '#6B7280' }}>{row.date}</TableCell>
                    <TableCell>
                      <Badge
                        className="rounded-full px-3 py-1"
                        style={{
                          backgroundColor: `${row.statusColor}20`,
                          color: row.statusColor,
                        }}
                      >
                        🟢 {row.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
          </TabsContent>

          {/* Utilization Tab */}
          <TabsContent value="utilization">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Left Panel - Farmer & Livestock Lookup (45%) */}
              <div className="lg:col-span-5 space-y-6">
                {/* Farmer Lookup */}
                <Card className="p-6" style={{ backgroundColor: '#FFFFFF' }}>
                  <h3 className="mb-4" style={{ color: '#003366' }}>Farmer Lookup</h3>

                  <div className="space-y-4">
                    <div>
                      <Input
                        placeholder="Enter Mobile Number or Aadhaar"
                        className="mb-3"
                        style={{ borderColor: '#E5E7EB' }}
                      />
                      <Button className="w-full" style={{ backgroundColor: '#FF6600', color: 'white' }}>
                        Search
                      </Button>
                    </div>

                    {/* Result Card */}
                    <div className="p-4 rounded-lg" style={{ backgroundColor: '#F9FAFB', border: '1px solid #E5E7EB' }}>
                      <Badge className="mb-3 px-3 py-1" style={{ backgroundColor: '#DCFCE7', color: '#16A34A' }}>
                        ✓ Fetched from National Farmer Registry
                      </Badge>

                      <div className="space-y-2">
                        <h4 className="font-semibold" style={{ color: '#003366' }}>Ramesh Yadav</h4>
                        <p className="text-sm" style={{ color: '#6B7280' }}>Lucknow | Bakshi Ka Talab Block</p>
                        <p className="text-sm" style={{ color: '#6B7280' }}>Mobile: 987654XXXX</p>
                        <p className="text-sm" style={{ color: '#6B7280' }}>Livestock: 3 cattle</p>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Livestock Lookup */}
                <Card className="p-6" style={{ backgroundColor: '#FFFFFF' }}>
                  <h3 className="mb-4" style={{ color: '#003366' }}>Livestock Lookup</h3>

                  <div className="space-y-4">
                    <div>
                      <Input
                        placeholder="Enter Cattle Tag Number"
                        className="mb-3"
                        defaultValue="IN1234"
                        style={{ borderColor: '#E5E7EB' }}
                      />
                      <Button className="w-full" style={{ backgroundColor: '#FF6600', color: 'white' }}>
                        Fetch
                      </Button>
                    </div>

                    {/* Livestock Result Card */}
                    <div className="p-4 rounded-lg" style={{ backgroundColor: '#F9FAFB', border: '1px solid #E5E7EB' }}>
                      <Badge className="mb-3 px-3 py-1" style={{ backgroundColor: '#DBEAFE', color: '#1D4ED8' }}>
                        ✓ Fetched from Bharat Pashudhan
                      </Badge>

                      <div className="space-y-2 mb-4">
                        <p className="text-sm" style={{ color: '#6B7280' }}>Tag: <strong style={{ color: '#003366' }}>IN1234</strong></p>
                        <p className="text-sm" style={{ color: '#6B7280' }}>Holstein Friesian | 4 yrs</p>
                        <p className="text-sm" style={{ color: '#6B7280' }}>Last AI: 3 months ago</p>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold mb-2" style={{ color: '#003366' }}>Vaccination History:</h4>
                        <div className="space-y-1">
                          <p className="text-sm" style={{ color: '#22C55E' }}>✓ FMD — 12 Jan 2025</p>
                          <p className="text-sm" style={{ color: '#22C55E' }}>✓ HS — 05 Aug 2024</p>
                          <p className="text-sm" style={{ color: '#22C55E' }}>✓ BQ — 20 Mar 2024</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Right Panel - Utilization Entry Form (55%) */}
              <div className="lg:col-span-7 space-y-6">
                <Card className="p-6" style={{ backgroundColor: '#FFFFFF' }}>
                  <h3 className="mb-4" style={{ color: '#003366' }}>Log Semen Utilization</h3>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm mb-2" style={{ color: '#6B7280' }}>Semen Type</label>
                      <Select>
                        <SelectTrigger style={{ borderColor: '#E5E7EB' }}>
                          <SelectValue placeholder="Normal Cattle Semen" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="normal-cattle">Normal Cattle Semen</SelectItem>
                          <SelectItem value="sex-sorted">Sex Sorted Semen</SelectItem>
                          <SelectItem value="buffalo">Normal Buffalo Semen</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm mb-2" style={{ color: '#6B7280' }}>Dose Code</label>
                      <Select>
                        <SelectTrigger style={{ borderColor: '#E5E7EB' }}>
                          <SelectValue placeholder="SC-2025-0441" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="sc441">SC-2025-0441</SelectItem>
                          <SelectItem value="sc442">SC-2025-0442</SelectItem>
                          <SelectItem value="sc443">SC-2025-0443</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm mb-2" style={{ color: '#6B7280' }}>Animal Breed</label>
                      <Select>
                        <SelectTrigger style={{ borderColor: '#E5E7EB' }}>
                          <SelectValue placeholder="Holstein Friesian" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="holstein">Holstein Friesian</SelectItem>
                          <SelectItem value="jersey">Jersey</SelectItem>
                          <SelectItem value="sahiwal">Sahiwal</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm mb-2" style={{ color: '#6B7280' }}>Bull ID</label>
                      <Input defaultValue="BL-2024-088" style={{ borderColor: '#E5E7EB' }} />
                    </div>

                    <div>
                      <label className="block text-sm mb-2" style={{ color: '#6B7280' }}>Date of Collection</label>
                      <Input type="date" defaultValue="2025-05-15" style={{ borderColor: '#E5E7EB' }} />
                    </div>

                    <div>
                      <label className="block text-sm mb-2" style={{ color: '#6B7280' }}>Batch of Collection</label>
                      <Input defaultValue="BATCH-2025-04" style={{ borderColor: '#E5E7EB' }} />
                    </div>

                    <div>
                      <label className="block text-sm mb-2" style={{ color: '#6B7280' }}>Damp Seal</label>
                      <div className="flex gap-4">
                        <label className="flex items-center gap-2">
                          <input type="radio" name="dampSeal" defaultChecked />
                          <span style={{ color: '#1A1A1A' }}>● Yes</span>
                        </label>
                        <label className="flex items-center gap-2">
                          <input type="radio" name="dampSeal" />
                          <span style={{ color: '#1A1A1A' }}>○ No</span>
                        </label>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm mb-2" style={{ color: '#6B7280' }}>Station Number</label>
                      <Input defaultValue="STN-CUT-02" style={{ borderColor: '#E5E7EB' }} />
                    </div>

                    <div>
                      <label className="block text-sm mb-2" style={{ color: '#6B7280' }}>Date Administered</label>
                      <Input type="date" defaultValue="2025-05-22" style={{ borderColor: '#E5E7EB' }} />
                    </div>

                    <div>
                      <label className="block text-sm mb-2" style={{ color: '#6B7280' }}>Source of Distribution</label>
                      <Select>
                        <SelectTrigger style={{ borderColor: '#E5E7EB' }}>
                          <SelectValue placeholder="Bakshi Ka Talab Block" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="bakshi-ka-talab">Bakshi Ka Talab Block</SelectItem>
                          <SelectItem value="lucknow">Lucknow Block</SelectItem>
                          <SelectItem value="malihabad">Malihabad Block</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Overdue Warning Banner */}
                    <div className="p-3 rounded-lg" style={{ backgroundColor: '#FEF3C7', border: '1px solid #F59E0B' }}>
                      <div className="flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4" style={{ color: '#F59E0B' }} />
                        <span className="text-sm" style={{ color: '#92400E' }}>
                          ⚠ Data entry overdue — last updated 8 days ago. Please update records.
                        </span>
                      </div>
                    </div>

                    <Button className="w-full py-6 font-semibold" style={{ backgroundColor: '#FF6600', color: 'white' }}>
                      Submit Utilization
                    </Button>

                    {/* Success State */}
                    <div className="space-y-3">
                      <div className="p-3 rounded-lg" style={{ backgroundColor: '#DCFCE7', border: '1px solid #22C55E' }}>
                        <p className="text-sm" style={{ color: '#16A34A' }}>✓ Utilization logged successfully</p>
                        <p className="text-sm" style={{ color: '#16A34A' }}>Stock updated: 84 doses remaining</p>
                      </div>
                      <Button variant="outline" className="w-full" style={{ borderColor: '#6B7280', color: '#6B7280' }}>
                        Share Receipt via WhatsApp
                      </Button>
                    </div>
                  </div>
                </Card>

                {/* Utilization History Table */}
                <Card className="p-6" style={{ backgroundColor: '#FFFFFF' }}>
                  <h4 className="mb-4" style={{ color: '#003366' }}>Recent Utilization History</h4>
                  <Table>
                    <TableHeader>
                      <TableRow style={{ backgroundColor: '#F5F5F5' }}>
                        <TableHead style={{ color: '#003366', fontSize: '12px' }}>Date</TableHead>
                        <TableHead style={{ color: '#003366', fontSize: '12px' }}>Farmer</TableHead>
                        <TableHead style={{ color: '#003366', fontSize: '12px' }}>Animal</TableHead>
                        <TableHead style={{ color: '#003366', fontSize: '12px' }}>Dose Code</TableHead>
                        <TableHead style={{ color: '#003366', fontSize: '12px' }}>Type</TableHead>
                        <TableHead style={{ color: '#003366', fontSize: '12px' }}>Administered By</TableHead>
                        <TableHead style={{ color: '#003366', fontSize: '12px' }}>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[
                        { date: "22 May", farmer: "Ramesh Yadav", animal: "IN1234", code: "SC-2025-0441", type: "Normal Cattle", admin: "Dr. Kumar", status: "Completed" },
                        { date: "21 May", farmer: "Sunita Devi", animal: "IN2345", code: "SC-2025-0442", type: "Sex Sorted", admin: "Dr. Singh", status: "Completed" },
                        { date: "20 May", farmer: "Manoj Kumar", animal: "IN3456", code: "SB-2025-0221", type: "Buffalo", admin: "Dr. Patel", status: "Completed" },
                        { date: "19 May", farmer: "Priya Verma", animal: "IN4567", code: "SC-2025-0443", type: "Normal Cattle", admin: "Dr. Kumar", status: "Completed" },
                        { date: "18 May", farmer: "Vikas Kumar", animal: "IN5678", code: "SC-2025-0444", type: "Normal Cattle", admin: "Dr. Singh", status: "Completed" },
                      ].map((row, index) => (
                        <TableRow key={index} style={index % 2 === 1 ? { backgroundColor: '#F9FAFB' } : {}}>
                          <TableCell style={{ color: '#6B7280', fontSize: '12px' }}>{row.date}</TableCell>
                          <TableCell style={{ color: '#1A1A1A', fontSize: '12px' }}>{row.farmer}</TableCell>
                          <TableCell style={{ color: '#1A1A1A', fontSize: '12px' }}>{row.animal}</TableCell>
                          <TableCell style={{ color: '#6B7280', fontSize: '12px' }}>{row.code}</TableCell>
                          <TableCell style={{ color: '#1A1A1A', fontSize: '12px' }}>{row.type}</TableCell>
                          <TableCell style={{ color: '#1A1A1A', fontSize: '12px' }}>{row.admin}</TableCell>
                          <TableCell>
                            <Badge className="px-2 py-1 text-xs" style={{ backgroundColor: '#DCFCE7', color: '#16A34A' }}>
                              ✓ {row.status}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Restocking Tab */}
          <TabsContent value="restocking">
            <div className="space-y-6">
              {/* Section 1 - Raise Request */}
              <Card className="p-6" style={{ backgroundColor: '#FFFFFF' }}>
                <h3 className="mb-4" style={{ color: '#003366' }}>Raise Restocking Request</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm mb-2" style={{ color: '#6B7280' }}>Animal Type</label>
                    <Select>
                      <SelectTrigger style={{ borderColor: '#E5E7EB' }}>
                        <SelectValue placeholder="Cattle" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cattle">Cattle</SelectItem>
                        <SelectItem value="buffalo">Buffalo</SelectItem>
                        <SelectItem value="goat">Goat</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm mb-2" style={{ color: '#6B7280' }}>Semen Type</label>
                    <Select>
                      <SelectTrigger style={{ borderColor: '#E5E7EB' }}>
                        <SelectValue placeholder="Normal Cattle Semen" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="normal">Normal Cattle Semen</SelectItem>
                        <SelectItem value="sex-sorted">Sex Sorted Semen</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm mb-2" style={{ color: '#6B7280' }}>Quantity Needed (doses)</label>
                    <Input type="number" placeholder="50" style={{ borderColor: '#E5E7EB' }} />
                  </div>

                  <div>
                    <label className="block text-sm mb-2" style={{ color: '#6B7280' }}>Urgency</label>
                    <div className="flex gap-2">
                      <button
                        className="flex-1 py-3 px-4 rounded-lg font-semibold transition-all"
                        style={{ backgroundColor: '#FF6600', color: 'white' }}
                      >
                        🔴 URGENT
                      </button>
                      <button
                        className="flex-1 py-3 px-4 rounded-lg font-semibold transition-all"
                        style={{ backgroundColor: '#E5E7EB', color: '#6B7280' }}
                      >
                        NOT URGENT
                      </button>
                    </div>
                  </div>
                </div>

                <Button className="w-full py-6 font-semibold" style={{ backgroundColor: '#FF6600', color: 'white' }}>
                  Submit to Block Officer
                </Button>
              </Card>

              {/* Section 2 - Active Requests */}
              <Card className="p-6" style={{ backgroundColor: '#FFFFFF' }}>
                <h3 className="mb-6" style={{ color: '#003366' }}>Request Tracker</h3>

                <div className="space-y-6">
                  {/* Request SR-2341 */}
                  <div className="p-4 rounded-lg" style={{ backgroundColor: '#F9FAFB', border: '1px solid #E5E7EB' }}>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <h4 className="font-semibold" style={{ color: '#003366' }}>Request SR-2341</h4>
                        <Badge className="px-2 py-1" style={{ backgroundColor: '#FEE2E2', color: '#991B1B' }}>
                          🔴 Urgent
                        </Badge>
                      </div>
                      <div className="text-sm" style={{ color: '#6B7280' }}>50 doses | Submitted 20 May</div>
                    </div>

                    {/* Approval Stepper */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex flex-col items-center flex-1">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center mb-1" style={{ backgroundColor: '#22C55E' }}>
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-xs" style={{ color: '#22C55E' }}>AIT</span>
                      </div>
                      <div className="flex-1 h-0.5" style={{ backgroundColor: '#22C55E' }} />
                      <div className="flex flex-col items-center flex-1">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center mb-1" style={{ backgroundColor: '#22C55E' }}>
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-xs" style={{ color: '#22C55E' }}>Block</span>
                      </div>
                      <div className="flex-1 h-0.5" style={{ backgroundColor: '#FF6600' }} />
                      <div className="flex flex-col items-center flex-1">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center mb-1" style={{ backgroundColor: '#FF6600' }}>
                          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'white' }} />
                        </div>
                        <span className="text-xs" style={{ color: '#FF6600' }}>District</span>
                      </div>
                      <div className="flex-1 h-0.5" style={{ backgroundColor: '#E5E7EB' }} />
                      <div className="flex flex-col items-center flex-1">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center mb-1" style={{ backgroundColor: '#E5E7EB' }}>
                          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#9CA3AF' }} />
                        </div>
                        <span className="text-xs" style={{ color: '#9CA3AF' }}>Directorate</span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button variant="outline" className="gap-1" style={{ borderColor: '#E5E7EB', color: '#6B7280' }}>
                        <Edit className="w-4 h-4" />
                        Edit
                      </Button>
                      <Button className="flex-1" style={{ backgroundColor: '#22C55E', color: 'white' }}>
                        Approve & Forward
                      </Button>
                      <Button variant="outline" style={{ borderColor: '#EF4444', color: '#EF4444' }}>
                        Reject
                      </Button>
                    </div>
                  </div>

                  {/* Request SR-2338 */}
                  <div className="p-4 rounded-lg" style={{ backgroundColor: '#F9FAFB', border: '1px solid #E5E7EB' }}>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <h4 className="font-semibold" style={{ color: '#003366' }}>Request SR-2338</h4>
                        <Badge className="px-2 py-1" style={{ backgroundColor: '#F3F4F6', color: '#6B7280' }}>
                          Not Urgent
                        </Badge>
                      </div>
                      <div className="text-sm" style={{ color: '#6B7280' }}>30 doses | Submitted 18 May</div>
                    </div>

                    {/* Approval Stepper */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex flex-col items-center flex-1">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center mb-1" style={{ backgroundColor: '#22C55E' }}>
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-xs" style={{ color: '#22C55E' }}>AIT</span>
                      </div>
                      <div className="flex-1 h-0.5" style={{ backgroundColor: '#22C55E' }} />
                      <div className="flex flex-col items-center flex-1">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center mb-1" style={{ backgroundColor: '#22C55E' }}>
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-xs" style={{ color: '#22C55E' }}>Block</span>
                      </div>
                      <div className="flex-1 h-0.5" style={{ backgroundColor: '#22C55E' }} />
                      <div className="flex flex-col items-center flex-1">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center mb-1" style={{ backgroundColor: '#22C55E' }}>
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-xs" style={{ color: '#22C55E' }}>District</span>
                      </div>
                      <div className="flex-1 h-0.5" style={{ backgroundColor: '#FF6600' }} />
                      <div className="flex flex-col items-center flex-1">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center mb-1" style={{ backgroundColor: '#FF6600' }}>
                          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'white' }} />
                        </div>
                        <span className="text-xs" style={{ color: '#FF6600' }}>Directorate</span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button variant="outline" className="gap-1" style={{ borderColor: '#E5E7EB', color: '#6B7280' }}>
                        <Edit className="w-4 h-4" />
                        Edit
                      </Button>
                      <Button style={{ backgroundColor: '#22C55E', color: 'white' }}>
                        Approve
                      </Button>
                      <Button variant="outline" style={{ borderColor: '#E5E7EB', color: '#6B7280' }}>
                        Reassign
                      </Button>
                      <Button style={{ backgroundColor: '#FF6600', color: 'white' }}>
                        Procurement
                      </Button>
                    </div>
                  </div>

                  {/* Request SR-2310 */}
                  <div className="p-4 rounded-lg" style={{ backgroundColor: '#DCFCE7', border: '1px solid #22C55E' }}>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <h4 className="font-semibold" style={{ color: '#003366' }}>Request SR-2310</h4>
                        <Badge className="px-2 py-1" style={{ backgroundColor: '#22C55E', color: 'white' }}>
                          ✓ Fulfilled
                        </Badge>
                      </div>
                      <div className="text-sm" style={{ color: '#6B7280' }}>100 doses | Submitted 10 May</div>
                    </div>

                    {/* Approval Stepper */}
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col items-center flex-1">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center mb-1" style={{ backgroundColor: '#22C55E' }}>
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-xs" style={{ color: '#22C55E' }}>AIT</span>
                      </div>
                      <div className="flex-1 h-0.5" style={{ backgroundColor: '#22C55E' }} />
                      <div className="flex flex-col items-center flex-1">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center mb-1" style={{ backgroundColor: '#22C55E' }}>
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-xs" style={{ color: '#22C55E' }}>Block</span>
                      </div>
                      <div className="flex-1 h-0.5" style={{ backgroundColor: '#22C55E' }} />
                      <div className="flex flex-col items-center flex-1">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center mb-1" style={{ backgroundColor: '#22C55E' }}>
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-xs" style={{ color: '#22C55E' }}>District</span>
                      </div>
                      <div className="flex-1 h-0.5" style={{ backgroundColor: '#22C55E' }} />
                      <div className="flex flex-col items-center flex-1">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center mb-1" style={{ backgroundColor: '#22C55E' }}>
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-xs" style={{ color: '#22C55E' }}>Directorate</span>
                      </div>
                      <div className="flex-1 h-0.5" style={{ backgroundColor: '#22C55E' }} />
                      <div className="flex flex-col items-center flex-1">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center mb-1" style={{ backgroundColor: '#22C55E' }}>
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-xs" style={{ color: '#22C55E' }}>Fulfilled</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Section 3 - Summary */}
              <Card className="p-6" style={{ backgroundColor: '#FFFFFF' }}>
                <h3 className="mb-4" style={{ color: '#003366' }}>Request Summary</h3>

                {/* Stats Row */}
                <div className="grid grid-cols-4 gap-4 mb-6">
                  <div className="p-4 rounded-lg text-center" style={{ backgroundColor: '#FEF3C7' }}>
                    <div className="text-2xl font-semibold mb-1" style={{ color: '#003366' }}>2</div>
                    <div className="text-xs" style={{ color: '#6B7280' }}>Pending</div>
                  </div>
                  <div className="p-4 rounded-lg text-center" style={{ backgroundColor: '#DCFCE7' }}>
                    <div className="text-2xl font-semibold mb-1" style={{ color: '#003366' }}>8</div>
                    <div className="text-xs" style={{ color: '#6B7280' }}>Approved</div>
                  </div>
                  <div className="p-4 rounded-lg text-center" style={{ backgroundColor: '#DBEAFE' }}>
                    <div className="text-2xl font-semibold mb-1" style={{ color: '#003366' }}>24</div>
                    <div className="text-xs" style={{ color: '#6B7280' }}>Fulfilled</div>
                  </div>
                  <div className="p-4 rounded-lg text-center" style={{ backgroundColor: '#F3F4F6' }}>
                    <div className="text-2xl font-semibold mb-1" style={{ color: '#003366' }}>6 hrs</div>
                    <div className="text-xs" style={{ color: '#6B7280' }}>Avg Approval</div>
                  </div>
                </div>

                {/* Summary Table */}
                <Table>
                  <TableHeader>
                    <TableRow style={{ backgroundColor: '#F5F5F5' }}>
                      <TableHead style={{ color: '#003366' }}>Level</TableHead>
                      <TableHead style={{ color: '#003366' }}>Avg Time</TableHead>
                      <TableHead style={{ color: '#003366' }}>Requests Handled</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell style={{ color: '#1A1A1A' }}>AIT → Block</TableCell>
                      <TableCell style={{ color: '#1A1A1A' }}>2.5 hrs</TableCell>
                      <TableCell style={{ color: '#1A1A1A' }}>34</TableCell>
                    </TableRow>
                    <TableRow style={{ backgroundColor: '#F9FAFB' }}>
                      <TableCell style={{ color: '#1A1A1A' }}>Block → District</TableCell>
                      <TableCell style={{ color: '#1A1A1A' }}>4.2 hrs</TableCell>
                      <TableCell style={{ color: '#1A1A1A' }}>28</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell style={{ color: '#1A1A1A' }}>District → Directorate</TableCell>
                      <TableCell style={{ color: '#1A1A1A' }}>8.1 hrs</TableCell>
                      <TableCell style={{ color: '#1A1A1A' }}>19</TableCell>
                    </TableRow>
                    <TableRow style={{ backgroundColor: '#F9FAFB' }}>
                      <TableCell style={{ color: '#1A1A1A' }}>Directorate Closure</TableCell>
                      <TableCell style={{ color: '#1A1A1A' }}>18.4 hrs</TableCell>
                      <TableCell style={{ color: '#1A1A1A' }}>14</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Card>
            </div>
          </TabsContent>

          {/* Reports Tab */}
          <TabsContent value="reports">
            <div className="grid grid-cols-2 gap-6">
              {/* Card 1 - Dose Utilization Report */}
              <Card className="p-6" style={{ backgroundColor: '#FFFFFF' }}>
                <h3 className="mb-4" style={{ color: '#003366' }}>Dose Utilization Report</h3>

                {/* Filters */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <Select>
                    <SelectTrigger style={{ borderColor: '#E5E7EB' }}>
                      <SelectValue placeholder="Semen Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="normal">Normal Cattle</SelectItem>
                      <SelectItem value="sex-sorted">Sex Sorted</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger style={{ borderColor: '#E5E7EB' }}>
                      <SelectValue placeholder="Animal Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Animals</SelectItem>
                      <SelectItem value="cattle">Cattle</SelectItem>
                      <SelectItem value="buffalo">Buffalo</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger style={{ borderColor: '#E5E7EB' }}>
                      <SelectValue placeholder="Date Range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="month">This Month</SelectItem>
                      <SelectItem value="quarter">This Quarter</SelectItem>
                      <SelectItem value="year">This Year</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* District Heatmap */}
                <div className="mb-4">
                  <div className="grid grid-cols-6 gap-1 mb-3">
                    {[
                      { name: "Jaipur", color: "#EF4444" },
                      { name: "Malkangiri", color: "#EF4444" },
                      { name: "Kalahandi", color: "#F59E0B" },
                      { name: "Gajapati", color: "#F59E0B" },
                      { name: "Lucknow", color: "#22C55E" },
                      { name: "Gurugram", color: "#22C55E" },
                      { name: "Pune", color: "#22C55E" },
                      { name: "Bhopal", color: "#22C55E" },
                      { name: "Mayurbhanj", color: "#F59E0B" },
                      { name: "Keonjhar", color: "#22C55E" },
                      { name: "Sundargarh", color: "#22C55E" },
                      { name: "Patna", color: "#F59E0B" },
                      { name: "Bargarh", color: "#22C55E" },
                      { name: "Jharsuguda", color: "#22C55E" },
                      { name: "Deogarh", color: "#F59E0B" },
                      { name: "Angul", color: "#22C55E" },
                      { name: "Dhenkanal", color: "#22C55E" },
                      { name: "Jajpur", color: "#22C55E" },
                      { name: "Bhadrak", color: "#F59E0B" },
                      { name: "Kendrapara", color: "#22C55E" },
                      { name: "Jagatsinghpur", color: "#22C55E" },
                      { name: "Nayagarh", color: "#F59E0B" },
                      { name: "Nashik", color: "#22C55E" },
                      { name: "Kandhamal", color: "#EF4444" },
                      { name: "Boudh", color: "#F59E0B" },
                      { name: "Sonepur", color: "#22C55E" },
                      { name: "Bolangir", color: "#F59E0B" },
                      { name: "Nuapada", color: "#EF4444" },
                      { name: "Nabarangpur", color: "#EF4444" },
                      { name: "Rayagada", color: "#EF4444" },
                    ].map((district, i) => (
                      <div
                        key={i}
                        className="h-12 rounded flex items-center justify-center text-xs text-white font-medium"
                        style={{ backgroundColor: district.color }}
                        title={district.name}
                      >
                        {district.name.slice(0, 3)}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sample Table */}
                <div className="mb-4">
                  <Table>
                    <TableHeader>
                      <TableRow style={{ backgroundColor: '#F5F5F5' }}>
                        <TableHead style={{ color: '#003366', fontSize: '12px' }}>District</TableHead>
                        <TableHead style={{ color: '#003366', fontSize: '12px' }}>Breedable Population</TableHead>
                        <TableHead style={{ color: '#003366', fontSize: '12px' }}>Utilisation %</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell style={{ color: '#1A1A1A', fontSize: '12px' }}>Jaipur</TableCell>
                        <TableCell style={{ color: '#1A1A1A', fontSize: '12px' }}>45,240</TableCell>
                        <TableCell style={{ color: '#EF4444', fontSize: '12px' }}>28%</TableCell>
                      </TableRow>
                      <TableRow style={{ backgroundColor: '#F9FAFB' }}>
                        <TableCell style={{ color: '#1A1A1A', fontSize: '12px' }}>Lucknow</TableCell>
                        <TableCell style={{ color: '#1A1A1A', fontSize: '12px' }}>62,180</TableCell>
                        <TableCell style={{ color: '#22C55E', fontSize: '12px' }}>82%</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell style={{ color: '#1A1A1A', fontSize: '12px' }}>Gurugram</TableCell>
                        <TableCell style={{ color: '#1A1A1A', fontSize: '12px' }}>58,920</TableCell>
                        <TableCell style={{ color: '#22C55E', fontSize: '12px' }}>78%</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>

                {/* Download Buttons */}
                <div className="flex gap-2">
                  <Button variant="outline" className="gap-2 text-xs" style={{ borderColor: '#E5E7EB', color: '#6B7280' }}>
                    <FileText className="w-3 h-3" />
                    PDF
                  </Button>
                  <Button variant="outline" className="gap-2 text-xs" style={{ borderColor: '#E5E7EB', color: '#6B7280' }}>
                    <Download className="w-3 h-3" />
                    CSV
                  </Button>
                  <Button variant="outline" className="gap-2 text-xs" style={{ borderColor: '#E5E7EB', color: '#6B7280' }}>
                    <Download className="w-3 h-3" />
                    Excel
                  </Button>
                </div>
              </Card>

              {/* Card 2 - Restocking Need Report */}
              <Card className="p-6" style={{ backgroundColor: '#FFFFFF' }}>
                <h3 className="mb-4" style={{ color: '#003366' }}>Restocking Need Report</h3>

                {/* Filters */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <Select>
                    <SelectTrigger style={{ borderColor: '#E5E7EB' }}>
                      <SelectValue placeholder="Semen Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger style={{ borderColor: '#E5E7EB' }}>
                      <SelectValue placeholder="Animal Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Animals</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger style={{ borderColor: '#E5E7EB' }}>
                      <SelectValue placeholder="Date Range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="month">This Month</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* District Grid */}
                <div className="mb-4">
                  <div className="flex gap-2 mb-3 text-xs">
                    <span className="flex items-center gap-1">
                      <div className="w-3 h-3 rounded" style={{ backgroundColor: '#EF4444' }} /> Urgent
                    </span>
                    <span className="flex items-center gap-1">
                      <div className="w-3 h-3 rounded" style={{ backgroundColor: '#F59E0B' }} /> Monitor
                    </span>
                    <span className="flex items-center gap-1">
                      <div className="w-3 h-3 rounded" style={{ backgroundColor: '#6B7280' }} /> Adequate
                    </span>
                  </div>
                  <div className="grid grid-cols-6 gap-1">
                    {Array.from({ length: 30 }).map((_, i) => {
                      const colors = ["#EF4444", "#F59E0B", "#6B7280"];
                      const color = colors[Math.floor(Math.random() * colors.length)];
                      return (
                        <div
                          key={i}
                          className="h-12 rounded"
                          style={{ backgroundColor: color }}
                        />
                      );
                    })}
                  </div>
                </div>

                {/* Download Buttons */}
                <div className="flex gap-2">
                  <Button variant="outline" className="gap-2 text-xs" style={{ borderColor: '#E5E7EB', color: '#6B7280' }}>
                    <FileText className="w-3 h-3" />
                    PDF
                  </Button>
                  <Button variant="outline" className="gap-2 text-xs" style={{ borderColor: '#E5E7EB', color: '#6B7280' }}>
                    <Download className="w-3 h-3" />
                    CSV
                  </Button>
                  <Button variant="outline" className="gap-2 text-xs" style={{ borderColor: '#E5E7EB', color: '#6B7280' }}>
                    <Download className="w-3 h-3" />
                    Excel
                  </Button>
                </div>
              </Card>

              {/* Card 3 - Data Updation Rate */}
              <Card className="p-6" style={{ backgroundColor: '#FFFFFF' }}>
                <h3 className="mb-4" style={{ color: '#003366' }}>Data Updation Rate</h3>

                <Table>
                  <TableHeader>
                    <TableRow style={{ backgroundColor: '#F5F5F5' }}>
                      <TableHead style={{ color: '#003366' }}>District/Block</TableHead>
                      <TableHead style={{ color: '#003366' }}>Last Updated</TableHead>
                      <TableHead style={{ color: '#003366' }}>Days Since</TableHead>
                      <TableHead style={{ color: '#003366' }}>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell style={{ color: '#1A1A1A' }}>Bakshi Ka Talab LAC</TableCell>
                      <TableCell style={{ color: '#6B7280' }}>22 May</TableCell>
                      <TableCell style={{ color: '#6B7280' }}>0 days</TableCell>
                      <TableCell>
                        <Badge className="px-2 py-1" style={{ backgroundColor: '#DCFCE7', color: '#16A34A' }}>
                          🟢
                        </Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow style={{ backgroundColor: '#F9FAFB' }}>
                      <TableCell style={{ color: '#1A1A1A' }}>Chinhat</TableCell>
                      <TableCell style={{ color: '#6B7280' }}>22 May</TableCell>
                      <TableCell style={{ color: '#6B7280' }}>0 days</TableCell>
                      <TableCell>
                        <Badge className="px-2 py-1" style={{ backgroundColor: '#DCFCE7', color: '#16A34A' }}>
                          🟢
                        </Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow style={{ backgroundColor: '#FEE2E2' }}>
                      <TableCell style={{ color: '#1A1A1A' }}>Malihabad LAC</TableCell>
                      <TableCell style={{ color: '#6B7280' }}>14 May</TableCell>
                      <TableCell style={{ color: '#EF4444' }}>8 days</TableCell>
                      <TableCell>
                        <Badge className="px-2 py-1" style={{ backgroundColor: '#FEE2E2', color: '#991B1B' }}>
                          🔴 Overdue
                        </Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow style={{ backgroundColor: '#FEE2E2' }}>
                      <TableCell style={{ color: '#1A1A1A' }}>Sarojini Nagar LAC</TableCell>
                      <TableCell style={{ color: '#6B7280' }}>10 May</TableCell>
                      <TableCell style={{ color: '#EF4444' }}>12 days</TableCell>
                      <TableCell>
                        <Badge className="px-2 py-1" style={{ backgroundColor: '#FEE2E2', color: '#991B1B' }}>
                          🔴 Overdue
                        </Badge>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>

                <div className="flex gap-2 mt-4">
                  <Button variant="outline" className="gap-2 text-xs" style={{ borderColor: '#E5E7EB', color: '#6B7280' }}>
                    <FileText className="w-3 h-3" />
                    PDF
                  </Button>
                  <Button variant="outline" className="gap-2 text-xs" style={{ borderColor: '#E5E7EB', color: '#6B7280' }}>
                    <Download className="w-3 h-3" />
                    CSV
                  </Button>
                  <Button variant="outline" className="gap-2 text-xs" style={{ borderColor: '#E5E7EB', color: '#6B7280' }}>
                    <Download className="w-3 h-3" />
                    Excel
                  </Button>
                </div>
              </Card>

              {/* Card 4 - Master Report */}
              <Card className="p-6" style={{ backgroundColor: '#FFFFFF' }}>
                <h3 className="mb-4" style={{ color: '#003366' }}>Master Report</h3>

                {/* Filters */}
                <div className="grid grid-cols-4 gap-2 mb-4">
                  <Select>
                    <SelectTrigger style={{ borderColor: '#E5E7EB' }}>
                      <SelectValue placeholder="All States" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All States</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger style={{ borderColor: '#E5E7EB' }}>
                      <SelectValue placeholder="Semen Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger style={{ borderColor: '#E5E7EB' }}>
                      <SelectValue placeholder="Animal" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Animals</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger style={{ borderColor: '#E5E7EB' }}>
                      <SelectValue placeholder="Date Range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="month">This Month</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Table>
                  <TableHeader>
                    <TableRow style={{ backgroundColor: '#F5F5F5' }}>
                      <TableHead style={{ color: '#003366', fontSize: '11px' }}>Farmer</TableHead>
                      <TableHead style={{ color: '#003366', fontSize: '11px' }}>Aadhaar</TableHead>
                      <TableHead style={{ color: '#003366', fontSize: '11px' }}>Dose Code</TableHead>
                      <TableHead style={{ color: '#003366', fontSize: '11px' }}>Type</TableHead>
                      <TableHead style={{ color: '#003366', fontSize: '11px' }}>Animal</TableHead>
                      <TableHead style={{ color: '#003366', fontSize: '11px' }}>Date</TableHead>
                      <TableHead style={{ color: '#003366', fontSize: '11px' }}>Administered By</TableHead>
                      <TableHead style={{ color: '#003366', fontSize: '11px' }}>District</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      { farmer: "Ramesh Y", aadhaar: "****3456", code: "SC-441", type: "Normal", animal: "IN1234", date: "22 May", admin: "Dr Kumar", district: "Lucknow" },
                      { farmer: "Sunita D", aadhaar: "****7890", code: "SC-442", type: "Sex Sorted", animal: "IN2345", date: "21 May", admin: "Dr Singh", district: "Gurugram" },
                      { farmer: "Manoj K", aadhaar: "****2341", code: "SB-221", type: "Buffalo", animal: "IN3456", date: "20 May", admin: "Dr Patel", district: "Pune" },
                      { farmer: "Priya V", aadhaar: "****5678", code: "SC-443", type: "Normal", animal: "IN4567", date: "19 May", admin: "Dr Kumar", district: "Lucknow" },
                      { farmer: "Vikas K", aadhaar: "****9012", code: "SC-444", type: "Normal", animal: "IN5678", date: "18 May", admin: "Dr Singh", district: "Bhopal" },
                      { farmer: "Asha M", aadhaar: "****3434", code: "SC-445", type: "Sex Sorted", animal: "IN6789", date: "17 May", admin: "Dr Rao", district: "Nashik" },
                      { farmer: "Ravi K", aadhaar: "****7878", code: "SB-222", type: "Buffalo", animal: "IN7890", date: "16 May", admin: "Dr Patel", district: "Pune" },
                      { farmer: "Deepa R", aadhaar: "****1212", code: "SC-446", type: "Normal", animal: "IN8901", date: "15 May", admin: "Dr Kumar", district: "Lucknow" },
                    ].map((row, index) => (
                      <TableRow key={index} style={index % 2 === 1 ? { backgroundColor: '#F9FAFB' } : {}}>
                        <TableCell style={{ color: '#1A1A1A', fontSize: '11px' }}>{row.farmer}</TableCell>
                        <TableCell style={{ color: '#6B7280', fontSize: '11px' }}>{row.aadhaar}</TableCell>
                        <TableCell style={{ color: '#6B7280', fontSize: '11px' }}>{row.code}</TableCell>
                        <TableCell style={{ color: '#1A1A1A', fontSize: '11px' }}>{row.type}</TableCell>
                        <TableCell style={{ color: '#1A1A1A', fontSize: '11px' }}>{row.animal}</TableCell>
                        <TableCell style={{ color: '#6B7280', fontSize: '11px' }}>{row.date}</TableCell>
                        <TableCell style={{ color: '#1A1A1A', fontSize: '11px' }}>{row.admin}</TableCell>
                        <TableCell style={{ color: '#1A1A1A', fontSize: '11px' }}>{row.district}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>

                <div className="flex items-center justify-between mt-4">
                  <div className="text-sm" style={{ color: '#6B7280' }}>Page 1 of 12</div>
                  <div className="flex gap-2">
                    <Button variant="outline" className="text-xs px-3" style={{ borderColor: '#E5E7EB', color: '#6B7280' }}>
                      Previous
                    </Button>
                    <Button variant="outline" className="text-xs px-3" style={{ borderColor: '#E5E7EB', color: '#6B7280' }}>
                      Next
                    </Button>
                  </div>
                </div>

                <div className="flex gap-2 mt-4">
                  <Button variant="outline" className="gap-2 text-xs" style={{ borderColor: '#E5E7EB', color: '#6B7280' }}>
                    <FileText className="w-3 h-3" />
                    PDF
                  </Button>
                  <Button variant="outline" className="gap-2 text-xs" style={{ borderColor: '#E5E7EB', color: '#6B7280' }}>
                    <Download className="w-3 h-3" />
                    CSV
                  </Button>
                  <Button variant="outline" className="gap-2 text-xs" style={{ borderColor: '#E5E7EB', color: '#6B7280' }}>
                    <Download className="w-3 h-3" />
                    Excel
                  </Button>
                </div>
              </Card>
            </div>
          </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
}
