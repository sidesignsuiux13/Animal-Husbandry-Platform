import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./components/ui/tabs";
import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";
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
import { Search, FileText, Download, AlertCircle, CheckCircle, Edit, AlertTriangle, Plus, ChevronDown } from "lucide-react";

export function MedicineInventory() {
  const [activeTab, setActiveTab] = useState(0);

  const inventoryData = [
    {
      medicine: "Ivermectin",
      sku: "MED-001",
      category: "Antiparasitic",
      priority: "P0",
      priorityColor: "#EF4444",
      qtyAllocated: 1000,
      qtyDelivered: 48,
      status: "Critical",
      statusColor: "#EF4444",
    },
    {
      medicine: "Oxytetracycline",
      sku: "MED-002",
      category: "Antibiotic",
      priority: "P2",
      priorityColor: "#F59E0B",
      qtyAllocated: 800,
      qtyDelivered: 520,
      status: "Healthy",
      statusColor: "#22C55E",
    },
    {
      medicine: "Amoxicillin",
      sku: "MED-003",
      category: "Antibiotic",
      priority: "P1",
      priorityColor: "#FF6600",
      qtyAllocated: 600,
      qtyDelivered: 180,
      status: "Warning",
      statusColor: "#F59E0B",
    },
    {
      medicine: "Albendazole",
      sku: "MED-004",
      category: "Antiparasitic",
      priority: "P3",
      priorityColor: "#22C55E",
      qtyAllocated: 1200,
      qtyDelivered: 940,
      status: "Healthy",
      statusColor: "#22C55E",
    },
    {
      medicine: "Oxytocin",
      sku: "MED-005",
      category: "Hormone",
      priority: "P1",
      priorityColor: "#FF6600",
      qtyAllocated: 400,
      qtyDelivered: 85,
      status: "Critical",
      statusColor: "#EF4444",
    },
    {
      medicine: "Calcium Borogluconate",
      sku: "MED-006",
      category: "Supplement",
      priority: "P3",
      priorityColor: "#22C55E",
      qtyAllocated: 500,
      qtyDelivered: 412,
      status: "Healthy",
      statusColor: "#22C55E",
    },
    {
      medicine: "Dexamethasone",
      sku: "MED-007",
      category: "Steroid",
      priority: "P2",
      priorityColor: "#F59E0B",
      qtyAllocated: 350,
      qtyDelivered: 245,
      status: "Healthy",
      statusColor: "#22C55E",
    },
    {
      medicine: "Meloxicam",
      sku: "MED-008",
      category: "NSAID",
      priority: "P1",
      priorityColor: "#FF6600",
      qtyAllocated: 450,
      qtyDelivered: 98,
      status: "Warning",
      statusColor: "#F59E0B",
    },
  ];

  const tabs = ["Inventory", "Utilization", "Requisition", "Analytics"];

  return (
    <div className="flex min-h-screen" style={{ backgroundColor: '#F5F5F5' }}>
      <Sidebar activeRoute="/inventory/medicine" />

      <div className="flex-1 flex flex-col">
        <Header />

        <main className="flex-1 p-6">
          {/* Page Title */}
          <div className="mb-6">
            <h1 style={{ color: '#003366' }}>Medicine Management</h1>
            <p className="text-sm" style={{ color: '#6B7280' }}>
              Manage and track medicine inventory and requisitions
            </p>
          </div>

          {/* Tabs */}
          <div className="flex gap-6 mb-6 border-b" style={{ borderColor: '#E5E7EB' }}>
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`pb-3 px-2 transition-colors ${
                  activeTab === index ? 'border-b-2' : ''
                }`}
                style={
                  activeTab === index
                    ? { borderColor: '#FF6600', color: '#FF6600' }
                    : { color: '#6B7280' }
                }
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Inventory Tab */}
          {activeTab === 0 && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left Column - Filters and Table */}
              <div className="lg:col-span-2 space-y-6">
                {/* Filters Card */}
                <Card className="p-6" style={{ backgroundColor: '#FFFFFF' }}>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                    <Select>
                      <SelectTrigger style={{ borderColor: '#E5E7EB' }}>
                        <SelectValue placeholder="Category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="antibiotic">Antibiotic</SelectItem>
                        <SelectItem value="antiparasitic">Antiparasitic</SelectItem>
                        <SelectItem value="hormone">Hormone</SelectItem>
                        <SelectItem value="supplement">Supplement</SelectItem>
                      </SelectContent>
                    </Select>

                    <Select>
                      <SelectTrigger style={{ borderColor: '#E5E7EB' }}>
                        <SelectValue placeholder="Priority" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="p0">P0 Emergency</SelectItem>
                        <SelectItem value="p1">P1 Urgent</SelectItem>
                        <SelectItem value="p2">P2 Moderate</SelectItem>
                        <SelectItem value="p3">P3 Routine</SelectItem>
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

                {/* Critical Alert Banner */}
                <div
                  className="flex items-center gap-3 p-4 rounded-lg animate-pulse"
                  style={{
                    backgroundColor: '#FEE2E2',
                    border: '2px solid #EF4444'
                  }}
                >
                  <AlertCircle className="w-5 h-5" style={{ color: '#EF4444' }} />
                  <span style={{ color: '#991B1B', fontWeight: 500 }}>
                    🚨 CRITICAL STOCK ALERT: Ivermectin is at critical level in 4 districts. Immediate requisition required.
                  </span>
                </div>

                {/* Inventory Table */}
                <Card style={{ backgroundColor: '#FFFFFF' }}>
                  <Table>
                    <TableHeader>
                      <TableRow style={{ backgroundColor: '#F5F5F5' }}>
                        <TableHead style={{ color: '#003366' }}>Medicine</TableHead>
                        <TableHead style={{ color: '#003366' }}>SKU</TableHead>
                        <TableHead style={{ color: '#003366' }}>Category</TableHead>
                        <TableHead style={{ color: '#003366' }}>Priority</TableHead>
                        <TableHead style={{ color: '#003366' }}>Qty Allocated</TableHead>
                        <TableHead style={{ color: '#003366' }}>Qty Delivered</TableHead>
                        <TableHead style={{ color: '#003366' }}>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {inventoryData.map((row, index) => (
                        <TableRow
                          key={index}
                          style={index % 2 === 1 ? { backgroundColor: '#F9FAFB' } : {}}
                        >
                          <TableCell style={{ color: '#1A1A1A', fontWeight: 500 }}>{row.medicine}</TableCell>
                          <TableCell style={{ color: '#6B7280' }}>{row.sku}</TableCell>
                          <TableCell style={{ color: '#1A1A1A' }}>{row.category}</TableCell>
                          <TableCell>
                            <Badge
                              className="rounded-full px-3 py-1"
                              style={{
                                backgroundColor: `${row.priorityColor}20`,
                                color: row.priorityColor,
                              }}
                            >
                              {row.priority === "P0" && "🔴"}
                              {row.priority === "P1" && "🟠"}
                              {row.priority === "P2" && "🟡"}
                              {row.priority === "P3" && "🟢"}
                              {" " + row.priority}
                            </Badge>
                          </TableCell>
                          <TableCell style={{ color: '#1A1A1A' }}>{row.qtyAllocated}</TableCell>
                          <TableCell style={{ color: '#1A1A1A' }}>{row.qtyDelivered}</TableCell>
                          <TableCell>
                            <Badge
                              className="rounded-full px-3 py-1"
                              style={{
                                backgroundColor: `${row.statusColor}20`,
                                color: row.statusColor,
                              }}
                            >
                              {row.status === "Healthy" && "🟢"}
                              {row.status === "Warning" && "🟡"}
                              {row.status === "Critical" && "🔴"}
                              {" " + row.status}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Card>

                {/* Analytics Preview */}
                <div className="grid grid-cols-2 gap-4">
                  <Card className="p-4" style={{ backgroundColor: '#FFFFFF' }}>
                    <h4 className="text-sm mb-3" style={{ color: '#003366' }}>Medicine Usage Trend</h4>
                    <div className="h-32 flex items-end gap-1">
                      {[45, 52, 48, 61, 55, 67, 58, 72, 65, 78, 70, 75].map((height, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-t"
                          style={{
                            backgroundColor: '#FF6600',
                            height: `${height}%`,
                            opacity: 0.8,
                          }}
                        />
                      ))}
                    </div>
                  </Card>

                  <Card className="p-4" style={{ backgroundColor: '#FFFFFF' }}>
                    <h4 className="text-sm mb-3" style={{ color: '#003366' }}>Requisition Fulfilment</h4>
                    <div className="h-32 space-y-2">
                      {[
                        { label: "P0", width: "92%", color: "#EF4444" },
                        { label: "P1", width: "78%", color: "#FF6600" },
                        { label: "P2", width: "65%", color: "#F59E0B" },
                        { label: "P3", width: "85%", color: "#22C55E" },
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <span className="text-xs w-12" style={{ color: '#6B7280' }}>{item.label}</span>
                          <div className="flex-1 h-6 rounded" style={{ backgroundColor: '#F5F5F5' }}>
                            <div className="h-full rounded" style={{ backgroundColor: item.color, width: item.width }} />
                          </div>
                          <span className="text-xs w-8" style={{ color: '#6B7280' }}>{item.width}</span>
                        </div>
                      ))}
                    </div>
                  </Card>

                  <Card className="p-4" style={{ backgroundColor: '#FFFFFF' }}>
                    <h4 className="text-sm mb-3" style={{ color: '#003366' }}>P0 Emergency Requests Heatmap</h4>
                    <div className="grid grid-cols-5 gap-1 h-32">
                      {[8, 2, 5, 12, 3, 6, 15, 4, 1, 7, 9, 3, 11, 2, 6, 4, 13, 5, 8, 1].map((val, i) => (
                        <div
                          key={i}
                          className="rounded"
                          style={{
                            backgroundColor: val > 10 ? '#EF4444' : val > 5 ? '#F59E0B' : '#22C55E',
                            opacity: val / 15,
                          }}
                        />
                      ))}
                    </div>
                  </Card>

                  <Card className="p-4" style={{ backgroundColor: '#FFFFFF' }}>
                    <h4 className="text-sm mb-3 flex items-center gap-2" style={{ color: '#003366' }}>
                      🤖 AI-Powered Demand Forecast
                    </h4>
                    <div className="h-32 flex items-end gap-1">
                      {[52, 58, 55, 62, 59, 65, 63, 68].map((height, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-t"
                          style={{
                            backgroundColor: i < 5 ? '#003366' : 'transparent',
                            border: i >= 5 ? '2px dashed #003366' : 'none',
                            height: `${height}%`,
                            opacity: i < 5 ? 1 : 0.6,
                          }}
                        />
                      ))}
                    </div>
                  </Card>
                </div>
              </div>

              {/* Right Column - Requisition Panel */}
              <div className="lg:col-span-1 space-y-6">
                <Card className="p-6 sticky top-6" style={{ backgroundColor: '#FFFFFF' }}>
                  <h3 className="mb-4" style={{ color: '#003366' }}>Raise Requisition Request</h3>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm mb-2" style={{ color: '#6B7280' }}>
                        Medicine
                      </label>
                      <Select>
                        <SelectTrigger style={{ borderColor: '#E5E7EB' }}>
                          <SelectValue placeholder="Ivermectin" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ivermectin">Ivermectin</SelectItem>
                          <SelectItem value="oxy">Oxytetracycline</SelectItem>
                          <SelectItem value="amox">Amoxicillin</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="p-3 rounded-lg" style={{ backgroundColor: '#FEE2E2', border: '1px solid #EF4444' }}>
                      <span className="text-sm" style={{ color: '#991B1B', fontWeight: 500 }}>
                        Current Stock: 48 units 🔴
                      </span>
                    </div>

                    {/* Priority Selector */}
                    <div>
                      <label className="block text-sm mb-2" style={{ color: '#6B7280' }}>
                        Priority
                      </label>
                      <div className="grid grid-cols-1 gap-2">
                        <button
                          className="p-3 rounded-lg text-left font-medium transition-all"
                          style={{
                            backgroundColor: '#EF4444',
                            color: 'white',
                            border: '2px solid #EF4444',
                          }}
                        >
                          🔴 P0 EMERGENCY
                        </button>
                        <button
                          className="p-3 rounded-lg text-left font-medium transition-all"
                          style={{
                            backgroundColor: 'white',
                            color: '#FF6600',
                            border: '1px solid #E5E7EB',
                          }}
                        >
                          🟠 P1 URGENT
                        </button>
                        <button
                          className="p-3 rounded-lg text-left font-medium transition-all"
                          style={{
                            backgroundColor: 'white',
                            color: '#F59E0B',
                            border: '1px solid #E5E7EB',
                          }}
                        >
                          🟡 P2 MODERATE
                        </button>
                        <button
                          className="p-3 rounded-lg text-left font-medium transition-all"
                          style={{
                            backgroundColor: 'white',
                            color: '#22C55E',
                            border: '1px solid #E5E7EB',
                          }}
                        >
                          🟢 P3 ROUTINE
                        </button>
                      </div>
                    </div>

                    {/* P0 Warning */}
                    <div className="p-3 rounded-lg" style={{ backgroundColor: '#FEE2E2', border: '1px solid #EF4444' }}>
                      <p className="text-sm" style={{ color: '#991B1B' }}>
                        Emergency requisition will be escalated immediately to District and Directorate level
                      </p>
                    </div>

                    <div>
                      <label className="block text-sm mb-2" style={{ color: '#6B7280' }}>
                        Quantity (units)
                      </label>
                      <Input
                        type="number"
                        placeholder="500"
                        style={{ borderColor: '#E5E7EB' }}
                      />
                    </div>

                    <div>
                      <label className="block text-sm mb-2" style={{ color: '#6B7280' }}>
                        Notes
                      </label>
                      <textarea
                        className="w-full p-3 rounded-lg resize-none"
                        rows={3}
                        placeholder="Critically low, patient cases waiting..."
                        style={{ borderColor: '#E5E7EB', border: '1px solid' }}
                      />
                    </div>

                    <Button className="w-full py-6 font-semibold" style={{ backgroundColor: '#EF4444', color: 'white' }}>
                      Submit Emergency Request
                    </Button>
                  </div>
                </Card>

                {/* Approval Chain Stepper */}
                <Card className="p-6" style={{ backgroundColor: '#FFFFFF' }}>
                  <h4 className="mb-4 text-sm" style={{ color: '#003366' }}>Request SR-2891 Status</h4>

                  <div className="flex items-center justify-between mb-6">
                    <div className="flex flex-col items-center flex-1">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center mb-2" style={{ backgroundColor: '#22C55E' }}>
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-xs" style={{ color: '#22C55E' }}>AIT</span>
                    </div>
                    <div className="flex-1 h-0.5" style={{ backgroundColor: '#22C55E' }} />
                    <div className="flex flex-col items-center flex-1">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center mb-2" style={{ backgroundColor: '#22C55E' }}>
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-xs" style={{ color: '#22C55E' }}>Block</span>
                    </div>
                    <div className="flex-1 h-0.5" style={{ backgroundColor: '#FF6600' }} />
                    <div className="flex flex-col items-center flex-1">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center mb-2" style={{ backgroundColor: '#FF6600' }}>
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'white' }} />
                      </div>
                      <span className="text-xs" style={{ color: '#FF6600' }}>District</span>
                    </div>
                    <div className="flex-1 h-0.5" style={{ backgroundColor: '#E5E7EB' }} />
                    <div className="flex flex-col items-center flex-1">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center mb-2" style={{ backgroundColor: '#E5E7EB' }}>
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#9CA3AF' }} />
                      </div>
                      <span className="text-xs" style={{ color: '#9CA3AF' }}>Directorate</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" className="flex-1 gap-2" style={{ borderColor: '#E5E7EB', color: '#6B7280' }}>
                      <Edit className="w-4 h-4" />
                      Edit
                    </Button>
                    <Button className="flex-1" style={{ backgroundColor: '#22C55E', color: 'white' }}>
                      Approve & Forward
                    </Button>
                    <Button variant="outline" className="flex-1" style={{ borderColor: '#EF4444', color: '#EF4444' }}>
                      Reject
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          )}

          {/* Utilization Tab */}
          {activeTab === 1 && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Left Panel - Patient Selection (45%) */}
              <div className="lg:col-span-5 space-y-6">
                <Card className="p-6" style={{ backgroundColor: '#FFFFFF' }}>
                  <h3 className="mb-4" style={{ color: '#003366' }}>Patient Selection</h3>

                  {/* Patient Type Toggle */}
                  <div className="flex gap-2 mb-4">
                    <button
                      className="flex-1 py-2 px-4 rounded-lg font-medium transition-all"
                      style={{ backgroundColor: '#FF6600', color: 'white' }}
                    >
                      🐄 Farmer's Animal
                    </button>
                    <button
                      className="flex-1 py-2 px-4 rounded-lg font-medium transition-all"
                      style={{ backgroundColor: '#E5E7EB', color: '#6B7280' }}
                    >
                      🐕 Stray Animal
                    </button>
                  </div>

                  {/* Farmer Search */}
                  <div className="mb-4">
                    <Select>
                      <SelectTrigger style={{ borderColor: '#E5E7EB' }}>
                        <SelectValue placeholder="Search farmer by name or mobile" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ramesh">Ramesh Pradhan</SelectItem>
                        <SelectItem value="sunita">Sunita Behera</SelectItem>
                        <SelectItem value="manoj">Manoj Nayak</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Farmer Card */}
                  <div className="p-4 rounded-lg mb-4" style={{ backgroundColor: '#F9FAFB', border: '1px solid #E5E7EB' }}>
                    <h4 className="font-semibold mb-2" style={{ color: '#003366' }}>Ramesh Pradhan</h4>
                    <p className="text-sm" style={{ color: '#6B7280' }}>Cuttack | Salipur Block</p>
                    <p className="text-sm" style={{ color: '#6B7280' }}>Mobile: 987654XXXX</p>
                  </div>

                  {/* Medicine History Expandable */}
                  <div className="border rounded-lg" style={{ borderColor: '#E5E7EB' }}>
                    <button className="w-full p-4 flex items-center justify-between">
                      <span className="font-medium" style={{ color: '#003366' }}>View previous prescriptions →</span>
                      <ChevronDown className="w-4 h-4" style={{ color: '#6B7280' }} />
                    </button>
                    <div className="p-4 pt-0">
                      <Table>
                        <TableHeader>
                          <TableRow style={{ backgroundColor: '#F5F5F5' }}>
                            <TableHead style={{ color: '#003366', fontSize: '12px' }}>Date</TableHead>
                            <TableHead style={{ color: '#003366', fontSize: '12px' }}>Medicine</TableHead>
                            <TableHead style={{ color: '#003366', fontSize: '12px' }}>Qty</TableHead>
                            <TableHead style={{ color: '#003366', fontSize: '12px' }}>Administered By</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell style={{ color: '#6B7280', fontSize: '12px' }}>15 May</TableCell>
                            <TableCell style={{ color: '#1A1A1A', fontSize: '12px' }}>Ivermectin</TableCell>
                            <TableCell style={{ color: '#1A1A1A', fontSize: '12px' }}>2</TableCell>
                            <TableCell style={{ color: '#1A1A1A', fontSize: '12px' }}>Rajan Kumar</TableCell>
                          </TableRow>
                          <TableRow style={{ backgroundColor: '#F9FAFB' }}>
                            <TableCell style={{ color: '#6B7280', fontSize: '12px' }}>02 Apr</TableCell>
                            <TableCell style={{ color: '#1A1A1A', fontSize: '12px' }}>Oxytetracycline</TableCell>
                            <TableCell style={{ color: '#1A1A1A', fontSize: '12px' }}>1</TableCell>
                            <TableCell style={{ color: '#1A1A1A', fontSize: '12px' }}>Rajan Kumar</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Right Panel - Medicine Entry Form (55%) */}
              <div className="lg:col-span-7 space-y-6">
                <Card className="p-6" style={{ backgroundColor: '#FFFFFF' }}>
                  <h3 className="mb-4" style={{ color: '#003366' }}>Log Medicine Administration</h3>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm mb-2" style={{ color: '#6B7280' }}>Farmer</label>
                      <Input value="Ramesh Pradhan" disabled style={{ borderColor: '#E5E7EB', backgroundColor: '#F9FAFB' }} />
                    </div>

                    <div>
                      <label className="block text-sm mb-2" style={{ color: '#6B7280' }}>Animal Tag</label>
                      <Input value="OD1234" disabled style={{ borderColor: '#E5E7EB', backgroundColor: '#F9FAFB' }} />
                    </div>

                    <div>
                      <label className="block text-sm mb-2" style={{ color: '#6B7280' }}>Medicine</label>
                      <Select>
                        <SelectTrigger style={{ borderColor: '#E5E7EB' }}>
                          <SelectValue placeholder="Ivermectin" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ivermectin">Ivermectin</SelectItem>
                          <SelectItem value="oxy">Oxytetracycline</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm mb-2" style={{ color: '#6B7280' }}>Quantity (units)</label>
                      <Input type="number" placeholder="2" style={{ borderColor: '#E5E7EB' }} />
                    </div>

                    <div>
                      <label className="block text-sm mb-2" style={{ color: '#6B7280' }}>Date Administered</label>
                      <Input type="date" defaultValue="2025-05-22" style={{ borderColor: '#E5E7EB' }} />
                    </div>

                    <div>
                      <label className="block text-sm mb-2" style={{ color: '#6B7280' }}>Condition Treated</label>
                      <Input placeholder="Parasitic infection" style={{ borderColor: '#E5E7EB' }} />
                    </div>

                    {/* Add Another Medicine Link */}
                    <button className="flex items-center gap-2 text-sm" style={{ color: '#FF6600' }}>
                      <Plus className="w-4 h-4" />
                      Add Another Medicine
                    </button>

                    {/* Overdue Warning */}
                    <div className="p-3 rounded-lg" style={{ backgroundColor: '#FEF3C7', border: '1px solid #F59E0B' }}>
                      <div className="flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4" style={{ color: '#F59E0B' }} />
                        <span className="text-sm" style={{ color: '#92400E' }}>
                          ⚠ Data entry overdue — 8 days
                        </span>
                      </div>
                    </div>

                    <Button className="w-full py-6 font-semibold" style={{ backgroundColor: '#FF6600', color: 'white' }}>
                      Submit
                    </Button>

                    {/* Inventory Auto-update Notice */}
                    <div className="p-3 rounded-lg" style={{ backgroundColor: '#EFF6FF', border: '1px solid #DBEAFE' }}>
                      <p className="text-sm" style={{ color: '#1E40AF' }}>
                        2 units will be deducted from Salipur LAC inventory on submit
                      </p>
                    </div>
                  </div>
                </Card>

                {/* History Table */}
                <Card className="p-6" style={{ backgroundColor: '#FFFFFF' }}>
                  <h4 className="mb-4" style={{ color: '#003366' }}>Recent Medicine Administration</h4>
                  <Table>
                    <TableHeader>
                      <TableRow style={{ backgroundColor: '#F5F5F5' }}>
                        <TableHead style={{ color: '#003366', fontSize: '12px' }}>Date</TableHead>
                        <TableHead style={{ color: '#003366', fontSize: '12px' }}>Farmer</TableHead>
                        <TableHead style={{ color: '#003366', fontSize: '12px' }}>Animal</TableHead>
                        <TableHead style={{ color: '#003366', fontSize: '12px' }}>Medicine</TableHead>
                        <TableHead style={{ color: '#003366', fontSize: '12px' }}>Qty</TableHead>
                        <TableHead style={{ color: '#003366', fontSize: '12px' }}>Administered By</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[
                        { date: "22 May", farmer: "Ramesh P", animal: "OD1234", medicine: "Ivermectin", qty: 2, admin: "Rajan Kumar" },
                        { date: "21 May", farmer: "Sunita B", animal: "OD2345", medicine: "Amoxicillin", qty: 1, admin: "Deepak Singh" },
                        { date: "20 May", farmer: "Manoj N", animal: "OD3456", medicine: "Oxytocin", qty: 3, admin: "Priya Sahoo" },
                        { date: "19 May", farmer: "Bikash J", animal: "OD4567", medicine: "Ivermectin", qty: 2, admin: "Rajan Kumar" },
                        { date: "18 May", farmer: "Asha M", animal: "OD5678", medicine: "Dexamethasone", qty: 1, admin: "Deepak Singh" },
                        { date: "17 May", farmer: "Ravi K", animal: "OD6789", medicine: "Meloxicam", qty: 2, admin: "Priya Sahoo" },
                      ].map((row, index) => (
                        <TableRow key={index} style={index % 2 === 1 ? { backgroundColor: '#F9FAFB' } : {}}>
                          <TableCell style={{ color: '#6B7280', fontSize: '12px' }}>{row.date}</TableCell>
                          <TableCell style={{ color: '#1A1A1A', fontSize: '12px' }}>{row.farmer}</TableCell>
                          <TableCell style={{ color: '#1A1A1A', fontSize: '12px' }}>{row.animal}</TableCell>
                          <TableCell style={{ color: '#1A1A1A', fontSize: '12px' }}>{row.medicine}</TableCell>
                          <TableCell style={{ color: '#1A1A1A', fontSize: '12px' }}>{row.qty}</TableCell>
                          <TableCell style={{ color: '#1A1A1A', fontSize: '12px' }}>{row.admin}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Card>
              </div>
            </div>
          )}

          {/* Requisition Tab */}
          {activeTab === 2 && (
            <div className="space-y-6">
              {/* Section 1 - Raise Requisition */}
              <Card className="p-6" style={{ backgroundColor: '#FFFFFF' }}>
                <h3 className="mb-4" style={{ color: '#003366' }}>Raise Requisition Request</h3>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm mb-2" style={{ color: '#6B7280' }}>Medicine</label>
                    <Select>
                      <SelectTrigger style={{ borderColor: '#E5E7EB' }}>
                        <SelectValue placeholder="Ivermectin" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ivermectin">Ivermectin</SelectItem>
                        <SelectItem value="amoxicillin">Amoxicillin</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="p-3 rounded-lg" style={{ backgroundColor: '#FEE2E2', border: '1px solid #EF4444' }}>
                    <span className="text-sm" style={{ color: '#991B1B', fontWeight: 500 }}>
                      Current Stock: 48 units 🔴 Critical
                    </span>
                  </div>

                  <div>
                    <label className="block text-sm mb-2" style={{ color: '#6B7280' }}>Quantity Needed</label>
                    <Input type="number" placeholder="500" style={{ borderColor: '#E5E7EB' }} />
                  </div>

                  {/* Priority Buttons */}
                  <div>
                    <label className="block text-sm mb-2" style={{ color: '#6B7280' }}>Priority</label>
                    <div className="grid grid-cols-1 gap-2">
                      <button
                        className="p-3 rounded-lg text-left font-medium"
                        style={{ backgroundColor: '#EF4444', color: 'white' }}
                      >
                        🔴 P0 EMERGENCY
                      </button>
                      <button
                        className="p-3 rounded-lg text-left font-medium"
                        style={{ backgroundColor: 'white', color: '#FF6600', border: '1px solid #E5E7EB' }}
                      >
                        🟠 P1 URGENT
                      </button>
                      <button
                        className="p-3 rounded-lg text-left font-medium"
                        style={{ backgroundColor: 'white', color: '#F59E0B', border: '1px solid #E5E7EB' }}
                      >
                        🟡 P2 MODERATE
                      </button>
                      <button
                        className="p-3 rounded-lg text-left font-medium"
                        style={{ backgroundColor: 'white', color: '#22C55E', border: '1px solid #E5E7EB' }}
                      >
                        🟢 P3 ROUTINE
                      </button>
                    </div>
                  </div>

                  {/* P0 Warning */}
                  <div className="p-3 rounded-lg" style={{ backgroundColor: '#FEE2E2', border: '1px solid #EF4444' }}>
                    <p className="text-sm" style={{ color: '#991B1B' }}>
                      Emergency requisition will be escalated immediately. District and Directorate will be notified.
                    </p>
                  </div>

                  <Button className="w-full py-6 font-semibold" style={{ backgroundColor: '#EF4444', color: 'white' }}>
                    Submit Emergency Request
                  </Button>
                </div>
              </Card>

              {/* Section 2 - Active Requisitions */}
              <Card className="p-6" style={{ backgroundColor: '#FFFFFF' }}>
                <h3 className="mb-6" style={{ color: '#003366' }}>Active Requisitions</h3>

                <div className="space-y-6">
                  {/* Request MR-3421 */}
                  <div className="p-4 rounded-lg" style={{ backgroundColor: '#F9FAFB', border: '1px solid #E5E7EB' }}>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <h4 className="font-semibold" style={{ color: '#003366' }}>Request MR-3421</h4>
                        <Badge className="px-2 py-1" style={{ backgroundColor: '#FEE2E2', color: '#991B1B' }}>
                          P0
                        </Badge>
                      </div>
                      <div className="text-sm" style={{ color: '#6B7280' }}>500 Ivermectin | 22 May</div>
                    </div>

                    {/* Stepper */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex flex-col items-center flex-1">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center mb-1" style={{ backgroundColor: '#22C55E' }}>
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-xs" style={{ color: '#22C55E' }}>LAC</span>
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
                      <Button style={{ backgroundColor: '#22C55E', color: 'white' }}>
                        Approve & Forward
                      </Button>
                      <Button style={{ backgroundColor: '#FF6600', color: 'white' }}>
                        Procure Locally
                      </Button>
                      <Button variant="outline" style={{ borderColor: '#EF4444', color: '#EF4444' }}>
                        Reject
                      </Button>
                    </div>
                  </div>

                  {/* Request MR-3415 */}
                  <div className="p-4 rounded-lg" style={{ backgroundColor: '#F9FAFB', border: '1px solid #E5E7EB' }}>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <h4 className="font-semibold" style={{ color: '#003366' }}>Request MR-3415</h4>
                        <Badge className="px-2 py-1" style={{ backgroundColor: '#FEF3C7', color: '#92400E' }}>
                          P2
                        </Badge>
                      </div>
                      <div className="text-sm" style={{ color: '#6B7280' }}>200 Amoxicillin | 20 May</div>
                    </div>

                    {/* Stepper */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex flex-col items-center flex-1">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center mb-1" style={{ backgroundColor: '#22C55E' }}>
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-xs" style={{ color: '#22C55E' }}>LAC</span>
                      </div>
                      <div className="flex-1 h-0.5" style={{ backgroundColor: '#FF6600' }} />
                      <div className="flex flex-col items-center flex-1">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center mb-1" style={{ backgroundColor: '#FF6600' }}>
                          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'white' }} />
                        </div>
                        <span className="text-xs" style={{ color: '#FF6600' }}>Block</span>
                      </div>
                      <div className="flex-1 h-0.5" style={{ backgroundColor: '#E5E7EB' }} />
                      <div className="flex flex-col items-center flex-1">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center mb-1" style={{ backgroundColor: '#E5E7EB' }}>
                          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#9CA3AF' }} />
                        </div>
                        <span className="text-xs" style={{ color: '#9CA3AF' }}>District</span>
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
                      <Button style={{ backgroundColor: '#22C55E', color: 'white' }}>
                        Approve & Forward
                      </Button>
                      <Button variant="outline" style={{ borderColor: '#EF4444', color: '#EF4444' }}>
                        Reject
                      </Button>
                    </div>
                  </div>

                  {/* Request MR-3400 - Fulfilled */}
                  <div className="p-4 rounded-lg" style={{ backgroundColor: '#DCFCE7', border: '1px solid #22C55E' }}>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <h4 className="font-semibold" style={{ color: '#003366' }}>Request MR-3400</h4>
                        <Badge className="px-2 py-1" style={{ backgroundColor: '#22C55E', color: 'white' }}>
                          ✓ Fulfilled
                        </Badge>
                      </div>
                      <div className="text-sm" style={{ color: '#6B7280' }}>300 Albendazole | 15 May</div>
                    </div>

                    {/* Stepper */}
                    <div className="flex items-center justify-between">
                      {[
                        { id: 1, label: "LAC" },
                        { id: 2, label: "Block" },
                        { id: 3, label: "District" },
                        { id: 4, label: "Directorate" }
                      ].map((step, index) => (
                        <React.Fragment key={step.id}>
                          <div className="flex flex-col items-center flex-1">
                            <div className="w-8 h-8 rounded-full flex items-center justify-center mb-1" style={{ backgroundColor: '#22C55E' }}>
                              <CheckCircle className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-xs" style={{ color: '#22C55E' }}>
                              {step.label}
                            </span>
                          </div>
                          {index < 3 && <div className="flex-1 h-0.5" style={{ backgroundColor: '#22C55E' }} />}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>

              {/* Section 3 - Summary */}
              <Card className="p-6" style={{ backgroundColor: '#FFFFFF' }}>
                <h3 className="mb-4" style={{ color: '#003366' }}>Summary</h3>

                <div className="grid grid-cols-4 gap-4 mb-6">
                  <div className="p-4 rounded-lg text-center" style={{ backgroundColor: '#FEF3C7' }}>
                    <div className="text-2xl font-semibold mb-1" style={{ color: '#003366' }}>4</div>
                    <div className="text-xs" style={{ color: '#6B7280' }}>Pending</div>
                  </div>
                  <div className="p-4 rounded-lg text-center" style={{ backgroundColor: '#DCFCE7' }}>
                    <div className="text-2xl font-semibold mb-1" style={{ color: '#003366' }}>11</div>
                    <div className="text-xs" style={{ color: '#6B7280' }}>Approved</div>
                  </div>
                  <div className="p-4 rounded-lg text-center" style={{ backgroundColor: '#DBEAFE' }}>
                    <div className="text-2xl font-semibold mb-1" style={{ color: '#003366' }}>38</div>
                    <div className="text-xs" style={{ color: '#6B7280' }}>Fulfilled</div>
                  </div>
                  <div className="p-4 rounded-lg text-center" style={{ backgroundColor: '#F3F4F6' }}>
                    <div className="text-2xl font-semibold mb-1" style={{ color: '#003366' }}>5.8 hrs</div>
                    <div className="text-xs" style={{ color: '#6B7280' }}>Avg Time</div>
                  </div>
                </div>

                <Table>
                  <TableHeader>
                    <TableRow style={{ backgroundColor: '#F5F5F5' }}>
                      <TableHead style={{ color: '#003366' }}>Medicine</TableHead>
                      <TableHead style={{ color: '#003366' }}>Qty</TableHead>
                      <TableHead style={{ color: '#003366' }}>Date</TableHead>
                      <TableHead style={{ color: '#003366' }}>Status</TableHead>
                      <TableHead style={{ color: '#003366' }}>Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      { medicine: "Ivermectin", qty: 500, date: "22 May", status: "Pending" },
                      { medicine: "Amoxicillin", qty: 200, date: "20 May", status: "Approved" },
                    ].map((row, index) => (
                      <TableRow key={index}>
                        <TableCell style={{ color: '#1A1A1A' }}>{row.medicine}</TableCell>
                        <TableCell style={{ color: '#1A1A1A' }}>{row.qty}</TableCell>
                        <TableCell style={{ color: '#6B7280' }}>{row.date}</TableCell>
                        <TableCell style={{ color: '#1A1A1A' }}>{row.status}</TableCell>
                        <TableCell>
                          <Button variant="outline" className="text-xs px-2 py-1" style={{ borderColor: '#E5E7EB', color: '#6B7280' }}>
                            Transfer to Current Request
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
            </div>
          )}

          {/* Analytics Tab */}
          {activeTab === 3 && (
            <div className="grid grid-cols-2 gap-6">
              {/* Panel 1 - Medicine Usage Trends */}
              <Card className="p-6" style={{ backgroundColor: '#FFFFFF' }}>
                <h3 className="mb-4" style={{ color: '#003366' }}>Medicine Usage Trends</h3>
                <div className="flex gap-2 mb-4">
                  <Button variant="outline" className="text-xs px-3 py-1" style={{ backgroundColor: '#3B82F6', color: 'white', borderColor: '#3B82F6' }}>
                    Antiparasitic
                  </Button>
                  <Button variant="outline" className="text-xs px-3 py-1" style={{ borderColor: '#E5E7EB', color: '#6B7280' }}>
                    Antibiotic
                  </Button>
                  <Button variant="outline" className="text-xs px-3 py-1" style={{ borderColor: '#E5E7EB', color: '#6B7280' }}>
                    Hormone
                  </Button>
                </div>
                <div className="h-48 flex items-end gap-2">
                  {[
                    { label: "Jan", blue: 65, green: 45, orange: 25 },
                    { label: "Feb", blue: 70, green: 52, orange: 30 },
                    { label: "Mar", blue: 75, green: 58, orange: 28 },
                    { label: "Apr", blue: 82, green: 62, orange: 35 },
                    { label: "May", blue: 88, green: 68, orange: 40 },
                  ].map((month, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center">
                      <div className="relative w-full h-40 flex items-end">
                        <div className="absolute bottom-0 w-full flex gap-1">
                          <div className="flex-1 rounded-t" style={{ backgroundColor: '#3B82F6', height: `${month.blue}%` }} />
                          <div className="flex-1 rounded-t" style={{ backgroundColor: '#22C55E', height: `${month.green}%` }} />
                          <div className="flex-1 rounded-t" style={{ backgroundColor: '#FF6600', height: `${month.orange}%` }} />
                        </div>
                      </div>
                      <span className="text-xs mt-2" style={{ color: '#6B7280' }}>{month.label}</span>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Panel 2 - Requisition Fulfilment Rate */}
              <Card className="p-6" style={{ backgroundColor: '#FFFFFF' }}>
                <h3 className="mb-4" style={{ color: '#003366' }}>Requisition Fulfilment Rate</h3>
                <div className="h-48 flex items-end gap-4">
                  {[
                    { label: "LAC", hours: 2.8, unfulfilled: 8 },
                    { label: "Block", hours: 4.2, unfulfilled: 12 },
                    { label: "District", hours: 6.5, unfulfilled: 15 },
                    { label: "Dir", hours: 9.2, unfulfilled: 18 },
                  ].map((level, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center">
                      <div className="w-full flex flex-col items-center mb-2">
                        <div className="text-xs mb-1" style={{ color: '#6B7280' }}>{level.unfulfilled}%</div>
                        <div className="w-full h-32 rounded-t" style={{ backgroundColor: '#003366', height: `${level.hours * 10}%` }} />
                      </div>
                      <span className="text-xs" style={{ color: '#6B7280' }}>{level.label}</span>
                      <span className="text-xs" style={{ color: '#6B7280' }}>{level.hours}h</span>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Panel 3 - Emergency Requests (P0) */}
              <Card className="p-6" style={{ backgroundColor: '#FFFFFF' }}>
                <h3 className="mb-4" style={{ color: '#003366' }}>P0 Emergency Distribution</h3>
                <div className="flex gap-2 mb-4">
                  <Button variant="outline" className="text-xs px-3 py-1" style={{ backgroundColor: '#FF6600', color: 'white', borderColor: '#FF6600' }}>
                    This Month
                  </Button>
                  <Button variant="outline" className="text-xs px-3 py-1" style={{ borderColor: '#E5E7EB', color: '#6B7280' }}>
                    Quarter
                  </Button>
                </div>
                <div className="grid grid-cols-6 gap-1">
                  {[
                    { name: "Koraput", intensity: 95 },
                    { name: "Malkangiri", intensity: 88 },
                    { name: "Kalahandi", intensity: 45 },
                    { name: "Gajapati", intensity: 35 },
                    { name: "Cuttack", intensity: 12 },
                    { name: "Khordha", intensity: 15 },
                    ...Array.from({ length: 24 }).map(() => ({ name: "", intensity: Math.floor(Math.random() * 60) }))
                  ].map((district, i) => (
                    <div
                      key={i}
                      className="h-10 rounded"
                      style={{
                        backgroundColor: '#EF4444',
                        opacity: district.intensity / 100,
                      }}
                      title={district.name}
                    />
                  ))}
                </div>
              </Card>

              {/* Panel 4 - Allocation Efficiency */}
              <Card className="p-6" style={{ backgroundColor: '#FFFFFF' }}>
                <h3 className="mb-4" style={{ color: '#003366' }}>Allocation Efficiency</h3>
                <div className="h-48 flex items-end gap-4">
                  {[
                    { label: "Antiparasitic", realloc: 75, procure: 45 },
                    { label: "Antibiotic", realloc: 60, procure: 65 },
                    { label: "Hormone", realloc: 40, procure: 55 },
                    { label: "Supplement", realloc: 50, procure: 35 },
                  ].map((cat, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center">
                      <div className="w-full flex gap-1 items-end mb-2">
                        <div className="flex-1 rounded-t" style={{ backgroundColor: '#003366', height: `${cat.realloc}px` }} />
                        <div className="flex-1 rounded-t" style={{ backgroundColor: '#FF6600', height: `${cat.procure}px` }} />
                      </div>
                      <span className="text-xs text-center" style={{ color: '#6B7280' }}>{cat.label}</span>
                    </div>
                  ))}
                </div>
                <div className="flex gap-4 justify-center mt-4 text-xs">
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded" style={{ backgroundColor: '#003366' }} />
                    <span style={{ color: '#6B7280' }}>Reallocated</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded" style={{ backgroundColor: '#FF6600' }} />
                    <span style={{ color: '#6B7280' }}>New Procurement</span>
                  </div>
                </div>
              </Card>

              {/* Panel 5 - Stock-out Tracker */}
              <Card className="p-6" style={{ backgroundColor: '#FFFFFF' }}>
                <h3 className="mb-4" style={{ color: '#003366' }}>Stock-out Tracker</h3>
                <Table>
                  <TableHeader>
                    <TableRow style={{ backgroundColor: '#F5F5F5' }}>
                      <TableHead style={{ color: '#003366', fontSize: '11px' }}>Medicine</TableHead>
                      <TableHead style={{ color: '#003366', fontSize: '11px' }}>District</TableHead>
                      <TableHead style={{ color: '#003366', fontSize: '11px' }}>Duration</TableHead>
                      <TableHead style={{ color: '#003366', fontSize: '11px' }}>Frequency</TableHead>
                      <TableHead style={{ color: '#003366', fontSize: '11px' }}>Last</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell style={{ color: '#1A1A1A', fontSize: '11px' }}>Ivermectin</TableCell>
                      <TableCell style={{ color: '#1A1A1A', fontSize: '11px' }}>Koraput</TableCell>
                      <TableCell style={{ color: '#1A1A1A', fontSize: '11px' }}>8 days</TableCell>
                      <TableCell style={{ color: '#1A1A1A', fontSize: '11px' }}>4x</TableCell>
                      <TableCell>
                        <span style={{ color: '#EF4444', fontSize: '11px' }}>20 May 🔴</span>
                      </TableCell>
                    </TableRow>
                    <TableRow style={{ backgroundColor: '#F9FAFB' }}>
                      <TableCell style={{ color: '#1A1A1A', fontSize: '11px' }}>Oxytocin</TableCell>
                      <TableCell style={{ color: '#1A1A1A', fontSize: '11px' }}>Malkangiri</TableCell>
                      <TableCell style={{ color: '#1A1A1A', fontSize: '11px' }}>3 days</TableCell>
                      <TableCell style={{ color: '#1A1A1A', fontSize: '11px' }}>2x</TableCell>
                      <TableCell>
                        <span style={{ color: '#F59E0B', fontSize: '11px' }}>18 May 🟡</span>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell style={{ color: '#1A1A1A', fontSize: '11px' }}>Amoxicillin</TableCell>
                      <TableCell style={{ color: '#1A1A1A', fontSize: '11px' }}>Kalahandi</TableCell>
                      <TableCell style={{ color: '#1A1A1A', fontSize: '11px' }}>2 days</TableCell>
                      <TableCell style={{ color: '#1A1A1A', fontSize: '11px' }}>1x</TableCell>
                      <TableCell>
                        <span style={{ color: '#22C55E', fontSize: '11px' }}>21 May 🟢</span>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Card>

              {/* Panel 6 - AI Demand Forecast */}
              <Card className="p-6" style={{ backgroundColor: '#FFFFFF' }}>
                <h3 className="mb-4 flex items-center gap-2" style={{ color: '#003366' }}>
                  🤖 AI-Powered Demand Forecast
                </h3>
                <div className="h-32 flex items-end gap-1 mb-4">
                  {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"].map((month, i) => {
                    const heights = [52, 58, 55, 62, 59, 65, 70, 75];
                    return (
                      <div key={i} className="flex-1 flex flex-col items-center">
                        <div
                          className="w-full rounded-t"
                          style={{
                            backgroundColor: i < 5 ? '#003366' : 'transparent',
                            border: i >= 5 ? '2px dashed #003366' : 'none',
                            height: `${heights[i]}%`,
                            opacity: i < 5 ? 1 : 0.6,
                          }}
                        />
                      </div>
                    );
                  })}
                </div>
                <Table>
                  <TableHeader>
                    <TableRow style={{ backgroundColor: '#F5F5F5' }}>
                      <TableHead style={{ color: '#003366', fontSize: '11px' }}>Medicine</TableHead>
                      <TableHead style={{ color: '#003366', fontSize: '11px' }}>Jun</TableHead>
                      <TableHead style={{ color: '#003366', fontSize: '11px' }}>Jul</TableHead>
                      <TableHead style={{ color: '#003366', fontSize: '11px' }}>Aug</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell style={{ color: '#1A1A1A', fontSize: '11px' }}>Ivermectin</TableCell>
                      <TableCell style={{ color: '#6B7280', fontSize: '11px' }}>820</TableCell>
                      <TableCell style={{ color: '#6B7280', fontSize: '11px' }}>890</TableCell>
                      <TableCell style={{ color: '#6B7280', fontSize: '11px' }}>945</TableCell>
                    </TableRow>
                    <TableRow style={{ backgroundColor: '#F9FAFB' }}>
                      <TableCell style={{ color: '#1A1A1A', fontSize: '11px' }}>Amoxicillin</TableCell>
                      <TableCell style={{ color: '#6B7280', fontSize: '11px' }}>340</TableCell>
                      <TableCell style={{ color: '#6B7280', fontSize: '11px' }}>360</TableCell>
                      <TableCell style={{ color: '#6B7280', fontSize: '11px' }}>380</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Card>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
