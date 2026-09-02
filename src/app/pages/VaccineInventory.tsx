import { useState } from "react";
import { Sidebar } from "../components/Sidebar";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/tabs";
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
import { Search, FileText, Download, AlertTriangle, Bell, CheckCircle, Edit } from "lucide-react";

export function VaccineInventory() {
  const [activeTab, setActiveTab] = useState(0);
  const inventoryData = [
    {
      batchNo: "VB-2025-0441",
      vaccineName: "FMD Vaccine",
      diseaseType: "FMD",
      animalType: "Cattle",
      expiryDate: "15 Jun 2025",
      qtyAllocated: 500,
      qtyDelivered: 420,
      status: "Healthy",
      statusColor: "#22C55E",
      isExpiring: false,
      isExpired: false,
    },
    {
      batchNo: "VB-2025-0442",
      vaccineName: "HS Vaccine",
      diseaseType: "HS",
      animalType: "Cattle",
      expiryDate: "28 May 2025",
      qtyAllocated: 300,
      qtyDelivered: 45,
      status: "EXPIRING SOON",
      statusColor: "#EF4444",
      isExpiring: true,
      isExpired: false,
    },
    {
      batchNo: "VB-2025-0443",
      vaccineName: "PPR Vaccine",
      diseaseType: "PPR",
      animalType: "Goat",
      expiryDate: "30 Aug 2025",
      qtyAllocated: 800,
      qtyDelivered: 612,
      status: "Healthy",
      statusColor: "#22C55E",
      isExpiring: false,
      isExpired: false,
    },
    {
      batchNo: "VB-2025-0444",
      vaccineName: "Ranikhet Vaccine",
      diseaseType: "Ranikhet",
      animalType: "Poultry",
      expiryDate: "10 Jun 2025",
      qtyAllocated: 1200,
      qtyDelivered: 980,
      status: "Warning",
      statusColor: "#F59E0B",
      isExpiring: false,
      isExpired: false,
    },
    {
      batchNo: "VB-2025-0445",
      vaccineName: "BQ Vaccine",
      diseaseType: "BQ",
      animalType: "Cattle",
      expiryDate: "20 Apr 2025",
      qtyAllocated: 200,
      qtyDelivered: 0,
      status: "EXPIRED",
      statusColor: "#EF4444",
      isExpiring: false,
      isExpired: true,
    },
    {
      batchNo: "VB-2025-0446",
      vaccineName: "Brucella Vaccine",
      diseaseType: "Brucellosis",
      animalType: "Cattle",
      expiryDate: "22 Jul 2025",
      qtyAllocated: 450,
      qtyDelivered: 398,
      status: "Healthy",
      statusColor: "#22C55E",
      isExpiring: false,
      isExpired: false,
    },
    {
      batchNo: "VB-2025-0447",
      vaccineName: "Anthrax Vaccine",
      diseaseType: "Anthrax",
      animalType: "Cattle",
      expiryDate: "05 Sep 2025",
      qtyAllocated: 600,
      qtyDelivered: 245,
      status: "Warning",
      statusColor: "#F59E0B",
      isExpiring: false,
      isExpired: false,
    },
    {
      batchNo: "VB-2025-0448",
      vaccineName: "Peste Vaccine",
      diseaseType: "PPR",
      animalType: "Goat",
      expiryDate: "18 Oct 2025",
      qtyAllocated: 550,
      qtyDelivered: 512,
      status: "Healthy",
      statusColor: "#22C55E",
      isExpiring: false,
      isExpired: false,
    },
  ];

  const userChargesData = [
    {
      endUser: "Rajan Kumar",
      vaccine: "FMD",
      qty: 2,
      charges: 150,
      date: "22 May",
      deposited: true,
    },
  ];

  const tabs = ["Inventory", "Utilization", "Restocking", "Reports"];

  return (
    <div className="flex min-h-screen" style={{ backgroundColor: '#F5F5F5' }}>
      <Sidebar activeRoute="/inventory/vaccine" />

      <div className="flex-1 flex flex-col">
        <Header />

        <main className="flex-1 p-6">
          {/* Page Title */}
          <div className="mb-6">
            <h1 style={{ color: '#003366' }}>Vaccine Inventory Management</h1>
            <p className="text-sm" style={{ color: '#6B7280' }}>
              Manage and track vaccine inventory across all locations
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
                      <SelectValue placeholder="Vaccine Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fmd">FMD Vaccine</SelectItem>
                      <SelectItem value="hs">HS Vaccine</SelectItem>
                      <SelectItem value="ppr">PPR Vaccine</SelectItem>
                      <SelectItem value="ranikhet">Ranikhet Vaccine</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select>
                    <SelectTrigger style={{ borderColor: '#E5E7EB' }}>
                      <SelectValue placeholder="Disease Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fmd">FMD</SelectItem>
                      <SelectItem value="hs">HS</SelectItem>
                      <SelectItem value="ppr">PPR</SelectItem>
                      <SelectItem value="bq">BQ</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select>
                    <SelectTrigger style={{ borderColor: '#E5E7EB' }}>
                      <SelectValue placeholder="Stock Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="healthy">Healthy</SelectItem>
                      <SelectItem value="warning">Warning</SelectItem>
                      <SelectItem value="expiring">Expiring Soon</SelectItem>
                      <SelectItem value="expired">Expired</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select>
                    <SelectTrigger style={{ borderColor: '#E5E7EB' }}>
                      <SelectValue placeholder="Expiry Filter" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="30days">Next 30 Days</SelectItem>
                      <SelectItem value="60days">Next 60 Days</SelectItem>
                      <SelectItem value="90days">Next 90 Days</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex gap-3">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4" style={{ color: '#6B7280' }} />
                    <Input
                      placeholder="Search..."
                      className="pl-10"
                      style={{ borderColor: '#E5E7EB' }}
                    />
                  </div>
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

              {/* Expiry Alert Banner */}
              <div className="flex items-center gap-3 p-4 rounded-lg" style={{ backgroundColor: '#FEF3C7', border: '1px solid #F59E0B' }}>
                <AlertTriangle className="w-5 h-5" style={{ color: '#F59E0B' }} />
                <span style={{ color: '#92400E' }}>
                  ⚠ 3 vaccine batches expiring within 30 days. Review stock.
                </span>
              </div>

              {/* Inventory Table */}
              <Card style={{ backgroundColor: '#FFFFFF' }}>
                <Table>
                  <TableHeader>
                    <TableRow style={{ backgroundColor: '#F5F5F5' }}>
                      <TableHead style={{ color: '#003366' }}>Batch No</TableHead>
                      <TableHead style={{ color: '#003366' }}>Vaccine Name</TableHead>
                      <TableHead style={{ color: '#003366' }}>Disease Type</TableHead>
                      <TableHead style={{ color: '#003366' }}>Animal Type</TableHead>
                      <TableHead style={{ color: '#003366' }}>Expiry Date</TableHead>
                      <TableHead style={{ color: '#003366' }}>Qty Allocated</TableHead>
                      <TableHead style={{ color: '#003366' }}>Qty Delivered</TableHead>
                      <TableHead style={{ color: '#003366' }}>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {inventoryData.map((row, index) => (
                      <TableRow
                        key={index}
                        style={
                          row.isExpiring
                            ? { backgroundColor: '#FEF3C7' }
                            : row.isExpired
                            ? { backgroundColor: '#FEE2E2' }
                            : index % 2 === 1
                            ? { backgroundColor: '#F9FAFB' }
                            : {}
                        }
                      >
                        <TableCell style={{ color: '#6B7280' }}>{row.batchNo}</TableCell>
                        <TableCell style={{ color: '#1A1A1A' }}>{row.vaccineName}</TableCell>
                        <TableCell style={{ color: '#1A1A1A' }}>{row.diseaseType}</TableCell>
                        <TableCell style={{ color: '#1A1A1A' }}>{row.animalType}</TableCell>
                        <TableCell style={{ color: '#6B7280' }}>{row.expiryDate}</TableCell>
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
                            {(row.status === "EXPIRING SOON" || row.status === "EXPIRED") && "🔴"}
                            {" " + row.status}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>

              {/* User Charges Report */}
              <Card className="p-6" style={{ backgroundColor: '#FFFFFF' }}>
                <h3 className="mb-4" style={{ color: '#003366' }}>User Charges Report</h3>
                <Table>
                  <TableHeader>
                    <TableRow style={{ backgroundColor: '#F5F5F5' }}>
                      <TableHead style={{ color: '#003366' }}>End User</TableHead>
                      <TableHead style={{ color: '#003366' }}>Vaccine</TableHead>
                      <TableHead style={{ color: '#003366' }}>Qty</TableHead>
                      <TableHead style={{ color: '#003366' }}>Charges</TableHead>
                      <TableHead style={{ color: '#003366' }}>Date</TableHead>
                      <TableHead style={{ color: '#003366' }}>Deposited</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {userChargesData.map((row, index) => (
                      <TableRow key={index}>
                        <TableCell style={{ color: '#1A1A1A' }}>{row.endUser}</TableCell>
                        <TableCell style={{ color: '#1A1A1A' }}>{row.vaccine}</TableCell>
                        <TableCell style={{ color: '#1A1A1A' }}>{row.qty}</TableCell>
                        <TableCell style={{ color: '#1A1A1A' }}>₹{row.charges}</TableCell>
                        <TableCell style={{ color: '#6B7280' }}>{row.date}</TableCell>
                        <TableCell>
                          {row.deposited && <span style={{ color: '#22C55E' }}>✓ Yes</span>}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
            </div>

            {/* Right Column - Utilization Entry */}
            <div className="lg:col-span-1">
              <Card className="p-6 sticky top-6" style={{ backgroundColor: '#FFFFFF' }}>
                <h3 className="mb-4" style={{ color: '#003366' }}>Log Vaccine Utilization</h3>

                <div className="space-y-4">
                  {/* Farmer Info */}
                  <div>
                    <label className="block text-sm mb-2" style={{ color: '#6B7280' }}>
                      Farmer
                    </label>
                    <div className="flex items-center justify-between p-3 rounded-lg" style={{ backgroundColor: '#F9FAFB', border: '1px solid #E5E7EB' }}>
                      <span style={{ color: '#1A1A1A' }}>Ramesh Yadav</span>
                      <Badge className="px-2 py-1" style={{ backgroundColor: '#DCFCE7', color: '#16A34A' }}>
                        Fetched from National Farmer Registry ✓
                      </Badge>
                    </div>
                  </div>

                  {/* Livestock Info */}
                  <div>
                    <label className="block text-sm mb-2" style={{ color: '#6B7280' }}>
                      Livestock
                    </label>
                    <div className="flex items-center justify-between p-3 rounded-lg" style={{ backgroundColor: '#F9FAFB', border: '1px solid #E5E7EB' }}>
                      <span style={{ color: '#1A1A1A' }}>IN1234 Holstein Friesian</span>
                      <Badge className="px-2 py-1" style={{ backgroundColor: '#DBEAFE', color: '#1D4ED8' }}>
                        Fetched from Bharat Pashudhan ✓
                      </Badge>
                    </div>
                  </div>

                  {/* Form Fields */}
                  <div>
                    <label className="block text-sm mb-2" style={{ color: '#6B7280' }}>
                      Vaccine Name
                    </label>
                    <Select>
                      <SelectTrigger style={{ borderColor: '#E5E7EB' }}>
                        <SelectValue placeholder="Select vaccine" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="fmd">FMD Vaccine</SelectItem>
                        <SelectItem value="hs">HS Vaccine</SelectItem>
                        <SelectItem value="ppr">PPR Vaccine</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm mb-2" style={{ color: '#6B7280' }}>
                      Batch Number
                    </label>
                    <Select>
                      <SelectTrigger style={{ borderColor: '#E5E7EB' }}>
                        <SelectValue placeholder="Select batch" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="vb441">VB-2025-0441</SelectItem>
                        <SelectItem value="vb442">VB-2025-0442</SelectItem>
                        <SelectItem value="vb443">VB-2025-0443</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm mb-2" style={{ color: '#6B7280' }}>
                      Expiry Date
                    </label>
                    <Input
                      value="15 Jun 2025"
                      disabled
                      style={{ borderColor: '#E5E7EB', backgroundColor: '#F9FAFB' }}
                    />
                  </div>

                  <div>
                    <label className="block text-sm mb-2" style={{ color: '#6B7280' }}>
                      Quantity (doses)
                    </label>
                    <Input
                      type="number"
                      placeholder="2"
                      style={{ borderColor: '#E5E7EB' }}
                    />
                  </div>

                  <div>
                    <label className="block text-sm mb-2" style={{ color: '#6B7280' }}>
                      Source
                    </label>
                    <Select>
                      <SelectTrigger style={{ borderColor: '#E5E7EB' }}>
                        <SelectValue placeholder="Select source" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bakshi-ka-talab">Bakshi Ka Talab Block</SelectItem>
                        <SelectItem value="lucknow">Lucknow Block</SelectItem>
                        <SelectItem value="pune">Pune Block</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm mb-2" style={{ color: '#6B7280' }}>
                      Date Administered
                    </label>
                    <Input
                      type="date"
                      defaultValue="2025-05-22"
                      style={{ borderColor: '#E5E7EB' }}
                    />
                  </div>

                  <div>
                    <label className="block text-sm mb-2" style={{ color: '#6B7280' }}>
                      User Charges (₹)
                    </label>
                    <Input
                      type="number"
                      placeholder="150"
                      style={{ borderColor: '#E5E7EB' }}
                    />
                  </div>

                  {/* Booster Reminder */}
                  <div className="p-4 rounded-lg" style={{ backgroundColor: '#EFF6FF', border: '1px solid #DBEAFE' }}>
                    <div className="flex items-center gap-2 mb-3">
                      <Bell className="w-4 h-4" style={{ color: '#1D4ED8' }} />
                      <span className="font-medium" style={{ color: '#1E40AF' }}>
                        Booster Required: Yes
                      </span>
                    </div>
                    <p className="text-sm mb-3" style={{ color: '#1E40AF' }}>
                      Schedule booster reminder for 21 Aug 2025?
                    </p>
                    <div className="flex gap-2">
                      <Button className="flex-1" style={{ backgroundColor: '#FF6600', color: 'white' }}>
                        Yes, Schedule
                      </Button>
                      <Button variant="outline" className="flex-1" style={{ borderColor: '#E5E7EB', color: '#6B7280' }}>
                        Skip
                      </Button>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button className="w-full" style={{ backgroundColor: '#FF6600', color: 'white' }}>
                    Submit Utilization
                  </Button>
                </div>
              </Card>
            </div>
          </div>
          )}

          {/* Utilization Tab */}
          {activeTab === 1 && (
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

              {/* Right Panel - Vaccine Utilization Form (55%) */}
              <div className="lg:col-span-7 space-y-6">
                <Card className="p-6" style={{ backgroundColor: '#FFFFFF' }}>
                  <h3 className="mb-4" style={{ color: '#003366' }}>Log Vaccine Utilization</h3>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm mb-2" style={{ color: '#6B7280' }}>Farmer</label>
                      <Input
                        value="Ramesh Yadav"
                        disabled
                        style={{ borderColor: '#E5E7EB', backgroundColor: '#F9FAFB' }}
                      />
                    </div>

                    <div>
                      <label className="block text-sm mb-2" style={{ color: '#6B7280' }}>Vaccine Name</label>
                      <Select>
                        <SelectTrigger style={{ borderColor: '#E5E7EB' }}>
                          <SelectValue placeholder="FMD Vaccine" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="fmd">FMD Vaccine</SelectItem>
                          <SelectItem value="hs">HS Vaccine</SelectItem>
                          <SelectItem value="ppr">PPR Vaccine</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm mb-2" style={{ color: '#6B7280' }}>Batch Number</label>
                      <Select>
                        <SelectTrigger style={{ borderColor: '#E5E7EB' }}>
                          <SelectValue placeholder="VB-2025-0441" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="vb441">VB-2025-0441</SelectItem>
                          <SelectItem value="vb442">VB-2025-0442</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm mb-2" style={{ color: '#6B7280' }}>Expiry Date</label>
                      <Input
                        value="15 Jun 2025 (not near expiry)"
                        disabled
                        style={{ borderColor: '#22C55E', backgroundColor: '#F0FDF4', color: '#22C55E' }}
                      />
                    </div>

                    <div>
                      <label className="block text-sm mb-2" style={{ color: '#6B7280' }}>Quantity Administered (doses)</label>
                      <Input type="number" placeholder="2" style={{ borderColor: '#E5E7EB' }} />
                    </div>

                    <div>
                      <label className="block text-sm mb-2" style={{ color: '#6B7280' }}>Source</label>
                      <Select>
                        <SelectTrigger style={{ borderColor: '#E5E7EB' }}>
                          <SelectValue placeholder="Bakshi Ka Talab Block" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="bakshi-ka-talab">Bakshi Ka Talab Block</SelectItem>
                          <SelectItem value="lucknow">Lucknow Block</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm mb-2" style={{ color: '#6B7280' }}>Date Administered</label>
                      <Input type="date" defaultValue="2025-05-22" style={{ borderColor: '#E5E7EB' }} />
                    </div>

                    <div>
                      <label className="block text-sm mb-2" style={{ color: '#6B7280' }}>User Charges Collected (₹)</label>
                      <Input type="number" placeholder="150" style={{ borderColor: '#E5E7EB' }} />
                    </div>

                    {/* Booster Required Section */}
                    <div className="p-4 rounded-lg" style={{ backgroundColor: '#EFF6FF', border: '1px solid #DBEAFE' }}>
                      <div className="flex items-center gap-2 mb-2">
                        <Bell className="w-4 h-4" style={{ color: '#1D4ED8' }} />
                        <span className="font-medium text-sm" style={{ color: '#1E40AF' }}>
                          🔔 This vaccine requires a booster
                        </span>
                      </div>
                      <p className="text-sm mb-2" style={{ color: '#1E40AF' }}>Booster due: 21 Aug 2025</p>
                      <p className="text-sm mb-3" style={{ color: '#1E40AF' }}>Schedule SMS reminder to farmer?</p>
                      <div className="flex gap-2 mb-3">
                        <Button className="flex-1" style={{ backgroundColor: '#FF6600', color: 'white' }}>
                          ✓ Yes, Schedule Reminder
                        </Button>
                        <Button variant="outline" className="flex-1" style={{ borderColor: '#E5E7EB', color: '#6B7280' }}>
                          Skip
                        </Button>
                      </div>
                      <Badge className="w-full justify-center px-3 py-1" style={{ backgroundColor: '#DCFCE7', color: '#16A34A' }}>
                        ✓ Reminder set for 21 Aug 2025
                      </Badge>
                    </div>

                    <Button className="w-full py-6 font-semibold" style={{ backgroundColor: '#FF6600', color: 'white' }}>
                      Submit Utilization
                    </Button>
                  </div>
                </Card>

                {/* Vaccination Plan Panel */}
                <Card className="p-6" style={{ backgroundColor: '#FFFFFF' }}>
                  <h4 className="mb-4" style={{ color: '#003366' }}>Upcoming Vaccination Drives</h4>
                  <Table>
                    <TableHeader>
                      <TableRow style={{ backgroundColor: '#F5F5F5' }}>
                        <TableHead style={{ color: '#003366' }}>Date</TableHead>
                        <TableHead style={{ color: '#003366' }}>Village</TableHead>
                        <TableHead style={{ color: '#003366' }}>Vaccine</TableHead>
                        <TableHead style={{ color: '#003366' }}>Target Animals</TableHead>
                        <TableHead style={{ color: '#003366' }}>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell style={{ color: '#6B7280' }}>28 May</TableCell>
                        <TableCell style={{ color: '#1A1A1A' }}>Chinhat</TableCell>
                        <TableCell style={{ color: '#1A1A1A' }}>FMD</TableCell>
                        <TableCell style={{ color: '#1A1A1A' }}>45</TableCell>
                        <TableCell>
                          <Badge className="px-2 py-1" style={{ backgroundColor: '#DBEAFE', color: '#1D4ED8' }}>
                            Planned
                          </Badge>
                        </TableCell>
                      </TableRow>
                      <TableRow style={{ backgroundColor: '#F9FAFB' }}>
                        <TableCell style={{ color: '#6B7280' }}>02 Jun</TableCell>
                        <TableCell style={{ color: '#1A1A1A' }}>Bakshi Ka Talab</TableCell>
                        <TableCell style={{ color: '#1A1A1A' }}>HS</TableCell>
                        <TableCell style={{ color: '#1A1A1A' }}>30</TableCell>
                        <TableCell>
                          <Badge className="px-2 py-1" style={{ backgroundColor: '#DBEAFE', color: '#1D4ED8' }}>
                            Planned
                          </Badge>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell style={{ color: '#6B7280' }}>08 Jun</TableCell>
                        <TableCell style={{ color: '#1A1A1A' }}>Malihabad</TableCell>
                        <TableCell style={{ color: '#1A1A1A' }}>BQ</TableCell>
                        <TableCell style={{ color: '#1A1A1A' }}>25</TableCell>
                        <TableCell>
                          <Badge className="px-2 py-1" style={{ backgroundColor: '#DBEAFE', color: '#1D4ED8' }}>
                            Planned
                          </Badge>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </Card>

                {/* User Charges Mini Report */}
                <Card className="p-6" style={{ backgroundColor: '#FFFFFF' }}>
                  <h4 className="mb-4" style={{ color: '#003366' }}>User Charges Report</h4>
                  <Table>
                    <TableHeader>
                      <TableRow style={{ backgroundColor: '#F5F5F5' }}>
                        <TableHead style={{ color: '#003366' }}>End User</TableHead>
                        <TableHead style={{ color: '#003366' }}>Vaccine</TableHead>
                        <TableHead style={{ color: '#003366' }}>Qty</TableHead>
                        <TableHead style={{ color: '#003366' }}>Charges</TableHead>
                        <TableHead style={{ color: '#003366' }}>Deposited</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell style={{ color: '#1A1A1A' }}>Rajan Kumar</TableCell>
                        <TableCell style={{ color: '#1A1A1A' }}>FMD</TableCell>
                        <TableCell style={{ color: '#1A1A1A' }}>2</TableCell>
                        <TableCell style={{ color: '#1A1A1A' }}>₹150</TableCell>
                        <TableCell>
                          <span style={{ color: '#22C55E' }}>✓ Yes</span>
                        </TableCell>
                      </TableRow>
                      <TableRow style={{ backgroundColor: '#F9FAFB' }}>
                        <TableCell style={{ color: '#1A1A1A' }}>Rajan Kumar</TableCell>
                        <TableCell style={{ color: '#1A1A1A' }}>HS</TableCell>
                        <TableCell style={{ color: '#1A1A1A' }}>3</TableCell>
                        <TableCell style={{ color: '#1A1A1A' }}>₹200</TableCell>
                        <TableCell>
                          <span style={{ color: '#22C55E' }}>✓ Yes</span>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell colSpan={5} className="text-right font-semibold" style={{ color: '#003366' }}>
                          Total this month: ₹1,840 collected
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </Card>
              </div>
            </div>
          )}

          {/* Restocking Tab */}
          {activeTab === 2 && (
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
                        <SelectItem value="goat">Goat</SelectItem>
                        <SelectItem value="poultry">Poultry</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm mb-2" style={{ color: '#6B7280' }}>Disease Type</label>
                    <Select>
                      <SelectTrigger style={{ borderColor: '#E5E7EB' }}>
                        <SelectValue placeholder="FMD" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="fmd">FMD</SelectItem>
                        <SelectItem value="hs">HS</SelectItem>
                        <SelectItem value="ppr">PPR</SelectItem>
                        <SelectItem value="bq">BQ</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm mb-2" style={{ color: '#6B7280' }}>Vaccine Name</label>
                    <Select>
                      <SelectTrigger style={{ borderColor: '#E5E7EB' }}>
                        <SelectValue placeholder="FMD Vaccine" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="fmd-vaccine">FMD Vaccine</SelectItem>
                        <SelectItem value="hs-vaccine">HS Vaccine</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm mb-2" style={{ color: '#6B7280' }}>Quantity Needed (doses)</label>
                    <Input type="number" placeholder="200" style={{ borderColor: '#E5E7EB' }} />
                  </div>

                  <div className="md:col-span-2">
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
                  {/* Request VR-1841 */}
                  <div className="p-4 rounded-lg" style={{ backgroundColor: '#F9FAFB', border: '1px solid #E5E7EB' }}>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <h4 className="font-semibold" style={{ color: '#003366' }}>Request VR-1841</h4>
                        <Badge className="px-2 py-1" style={{ backgroundColor: '#FEE2E2', color: '#991B1B' }}>
                          🔴 Urgent
                        </Badge>
                      </div>
                      <div className="text-sm" style={{ color: '#6B7280' }}>200 FMD doses | 21 May</div>
                    </div>

                    {/* Approval Stepper */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex flex-col items-center flex-1">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center mb-1" style={{ backgroundColor: '#22C55E' }}>
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-xs" style={{ color: '#22C55E' }}>AIT</span>
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
                      <Button className="flex-1" style={{ backgroundColor: '#22C55E', color: 'white' }}>
                        Approve & Forward
                      </Button>
                      <Button variant="outline" style={{ borderColor: '#EF4444', color: '#EF4444' }}>
                        Reject
                      </Button>
                    </div>
                  </div>

                  {/* Request VR-1838 */}
                  <div className="p-4 rounded-lg" style={{ backgroundColor: '#F9FAFB', border: '1px solid #E5E7EB' }}>
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-semibold" style={{ color: '#003366' }}>Request VR-1838</h4>
                      <div className="text-sm" style={{ color: '#6B7280' }}>500 PPR doses | 19 May</div>
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

                  {/* Request VR-1820 */}
                  <div className="p-4 rounded-lg" style={{ backgroundColor: '#DCFCE7', border: '1px solid #22C55E' }}>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <h4 className="font-semibold" style={{ color: '#003366' }}>Request VR-1820</h4>
                        <Badge className="px-2 py-1" style={{ backgroundColor: '#22C55E', color: 'white' }}>
                          ✓ Fulfilled
                        </Badge>
                      </div>
                      <div className="text-sm" style={{ color: '#6B7280' }}>300 HS doses | 12 May</div>
                    </div>

                    {/* Approval Stepper */}
                    <div className="flex items-center justify-between">
                      {[1, 2, 3, 4].map((step) => (
                        <>
                          <div key={step} className="flex flex-col items-center flex-1">
                            <div className="w-8 h-8 rounded-full flex items-center justify-center mb-1" style={{ backgroundColor: '#22C55E' }}>
                              <CheckCircle className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-xs" style={{ color: '#22C55E' }}>
                              {step === 1 && "AIT"}
                              {step === 2 && "Block"}
                              {step === 3 && "District"}
                              {step === 4 && "Directorate"}
                            </span>
                          </div>
                          {step < 4 && <div className="flex-1 h-0.5" style={{ backgroundColor: '#22C55E' }} />}
                        </>
                      ))}
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
                    <div className="text-2xl font-semibold mb-1" style={{ color: '#003366' }}>3</div>
                    <div className="text-xs" style={{ color: '#6B7280' }}>Pending</div>
                  </div>
                  <div className="p-4 rounded-lg text-center" style={{ backgroundColor: '#DCFCE7' }}>
                    <div className="text-2xl font-semibold mb-1" style={{ color: '#003366' }}>6</div>
                    <div className="text-xs" style={{ color: '#6B7280' }}>Approved</div>
                  </div>
                  <div className="p-4 rounded-lg text-center" style={{ backgroundColor: '#DBEAFE' }}>
                    <div className="text-2xl font-semibold mb-1" style={{ color: '#003366' }}>18</div>
                    <div className="text-xs" style={{ color: '#6B7280' }}>Fulfilled</div>
                  </div>
                  <div className="p-4 rounded-lg text-center" style={{ backgroundColor: '#F3F4F6' }}>
                    <div className="text-2xl font-semibold mb-1" style={{ color: '#003366' }}>7.2 hrs</div>
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
                      <TableCell style={{ color: '#1A1A1A' }}>2.8 hrs</TableCell>
                      <TableCell style={{ color: '#1A1A1A' }}>27</TableCell>
                    </TableRow>
                    <TableRow style={{ backgroundColor: '#F9FAFB' }}>
                      <TableCell style={{ color: '#1A1A1A' }}>Block → District</TableCell>
                      <TableCell style={{ color: '#1A1A1A' }}>4.6 hrs</TableCell>
                      <TableCell style={{ color: '#1A1A1A' }}>22</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell style={{ color: '#1A1A1A' }}>District → Directorate</TableCell>
                      <TableCell style={{ color: '#1A1A1A' }}>9.2 hrs</TableCell>
                      <TableCell style={{ color: '#1A1A1A' }}>16</TableCell>
                    </TableRow>
                    <TableRow style={{ backgroundColor: '#F9FAFB' }}>
                      <TableCell style={{ color: '#1A1A1A' }}>Directorate Closure</TableCell>
                      <TableCell style={{ color: '#1A1A1A' }}>20.1 hrs</TableCell>
                      <TableCell style={{ color: '#1A1A1A' }}>12</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Card>
            </div>
          )}

          {/* Reports Tab */}
          {activeTab === 3 && (
            <div className="grid grid-cols-2 gap-6">
              {/* Card 1 - Dose Utilization Report */}
              <Card className="p-6" style={{ backgroundColor: '#FFFFFF' }}>
                <h3 className="mb-4" style={{ color: '#003366' }}>Dose Utilization Report</h3>

                {/* Filters */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <Select>
                    <SelectTrigger style={{ borderColor: '#E5E7EB' }}>
                      <SelectValue placeholder="Disease Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Diseases</SelectItem>
                      <SelectItem value="fmd">FMD</SelectItem>
                      <SelectItem value="hs">HS</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger style={{ borderColor: '#E5E7EB' }}>
                      <SelectValue placeholder="Vaccine Name" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Vaccines</SelectItem>
                      <SelectItem value="fmd">FMD Vaccine</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger style={{ borderColor: '#E5E7EB' }}>
                      <SelectValue placeholder="Animal Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Animals</SelectItem>
                      <SelectItem value="cattle">Cattle</SelectItem>
                      <SelectItem value="goat">Goat</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger style={{ borderColor: '#E5E7EB' }}>
                      <SelectValue placeholder="Date Range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="month">This Month</SelectItem>
                      <SelectItem value="quarter">This Quarter</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* District Heatmap */}
                <div className="mb-4">
                  <div className="grid grid-cols-6 gap-1">
                    {Array.from({ length: 30 }).map((_, i) => {
                      const colors = ["#EF4444", "#F59E0B", "#22C55E"];
                      const color = colors[Math.floor(Math.random() * colors.length)];
                      return (
                        <div
                          key={i}
                          className="h-10 rounded"
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

              {/* Card 2 - Restocking Need Report */}
              <Card className="p-6" style={{ backgroundColor: '#FFFFFF' }}>
                <h3 className="mb-4" style={{ color: '#003366' }}>Restocking Need Report</h3>

                {/* Filters */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <Select>
                    <SelectTrigger style={{ borderColor: '#E5E7EB' }}>
                      <SelectValue placeholder="Disease Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Diseases</SelectItem>
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

                {/* Legend */}
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

                {/* District Grid */}
                <div className="mb-4">
                  <div className="grid grid-cols-6 gap-1">
                    {Array.from({ length: 30 }).map((_, i) => {
                      const colors = ["#EF4444", "#F59E0B", "#6B7280"];
                      const color = colors[Math.floor(Math.random() * colors.length)];
                      return (
                        <div
                          key={i}
                          className="h-10 rounded"
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

              {/* Card 3 - User Charges Report */}
              <Card className="p-6" style={{ backgroundColor: '#FFFFFF' }}>
                <h3 className="mb-4" style={{ color: '#003366' }}>User Charges Report</h3>

                <Table className="mb-4">
                  <TableHeader>
                    <TableRow style={{ backgroundColor: '#F5F5F5' }}>
                      <TableHead style={{ color: '#003366', fontSize: '11px' }}>End User</TableHead>
                      <TableHead style={{ color: '#003366', fontSize: '11px' }}>District</TableHead>
                      <TableHead style={{ color: '#003366', fontSize: '11px' }}>Vaccine</TableHead>
                      <TableHead style={{ color: '#003366', fontSize: '11px' }}>Qty</TableHead>
                      <TableHead style={{ color: '#003366', fontSize: '11px' }}>Charges</TableHead>
                      <TableHead style={{ color: '#003366', fontSize: '11px' }}>Date</TableHead>
                      <TableHead style={{ color: '#003366', fontSize: '11px' }}>Deposited</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell style={{ color: '#1A1A1A', fontSize: '11px' }}>Rajan Kumar</TableCell>
                      <TableCell style={{ color: '#1A1A1A', fontSize: '11px' }}>Lucknow</TableCell>
                      <TableCell style={{ color: '#1A1A1A', fontSize: '11px' }}>FMD</TableCell>
                      <TableCell style={{ color: '#1A1A1A', fontSize: '11px' }}>24 doses</TableCell>
                      <TableCell style={{ color: '#1A1A1A', fontSize: '11px' }}>₹1,200</TableCell>
                      <TableCell style={{ color: '#6B7280', fontSize: '11px' }}>May 2025</TableCell>
                      <TableCell>
                        <span style={{ color: '#22C55E', fontSize: '11px' }}>✓</span>
                      </TableCell>
                    </TableRow>
                    <TableRow style={{ backgroundColor: '#F9FAFB' }}>
                      <TableCell style={{ color: '#1A1A1A', fontSize: '11px' }}>Deepak Singh</TableCell>
                      <TableCell style={{ color: '#1A1A1A', fontSize: '11px' }}>Bhopal</TableCell>
                      <TableCell style={{ color: '#1A1A1A', fontSize: '11px' }}>HS</TableCell>
                      <TableCell style={{ color: '#1A1A1A', fontSize: '11px' }}>18 doses</TableCell>
                      <TableCell style={{ color: '#1A1A1A', fontSize: '11px' }}>₹900</TableCell>
                      <TableCell style={{ color: '#6B7280', fontSize: '11px' }}>May 2025</TableCell>
                      <TableCell>
                        <span style={{ color: '#22C55E', fontSize: '11px' }}>✓</span>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell style={{ color: '#1A1A1A', fontSize: '11px' }}>Sunita Roy</TableCell>
                      <TableCell style={{ color: '#1A1A1A', fontSize: '11px' }}>Pune</TableCell>
                      <TableCell style={{ color: '#1A1A1A', fontSize: '11px' }}>BQ</TableCell>
                      <TableCell style={{ color: '#1A1A1A', fontSize: '11px' }}>12 doses</TableCell>
                      <TableCell style={{ color: '#1A1A1A', fontSize: '11px' }}>₹600</TableCell>
                      <TableCell style={{ color: '#6B7280', fontSize: '11px' }}>May 2025</TableCell>
                      <TableCell>
                        <span style={{ color: '#EF4444', fontSize: '11px' }}>✗ Pending</span>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>

                {/* Summary Stats */}
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span style={{ color: '#6B7280' }}>Total Collected:</span>
                    <span className="font-semibold" style={{ color: '#003366' }}>₹8,240</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span style={{ color: '#6B7280' }}>Total Deposited:</span>
                    <span className="font-semibold" style={{ color: '#22C55E' }}>₹6,800</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span style={{ color: '#6B7280' }}>Pending Deposit:</span>
                    <span className="font-semibold" style={{ color: '#F59E0B' }}>₹1,440</span>
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

              {/* Card 4 - Master Report */}
              <Card className="p-6" style={{ backgroundColor: '#FFFFFF' }}>
                <h3 className="mb-4" style={{ color: '#003366' }}>Master Report</h3>

                {/* Filters */}
                <div className="grid grid-cols-4 gap-2 mb-4">
                  <Select>
                    <SelectTrigger style={{ borderColor: '#E5E7EB' }}>
                      <SelectValue placeholder="District" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger style={{ borderColor: '#E5E7EB' }}>
                      <SelectValue placeholder="Vaccine" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger style={{ borderColor: '#E5E7EB' }}>
                      <SelectValue placeholder="Disease" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger style={{ borderColor: '#E5E7EB' }}>
                      <SelectValue placeholder="Date" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="month">This Month</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Table className="mb-4">
                  <TableHeader>
                    <TableRow style={{ backgroundColor: '#F5F5F5' }}>
                      <TableHead style={{ color: '#003366', fontSize: '10px' }}>Farmer</TableHead>
                      <TableHead style={{ color: '#003366', fontSize: '10px' }}>Vaccine</TableHead>
                      <TableHead style={{ color: '#003366', fontSize: '10px' }}>Batch</TableHead>
                      <TableHead style={{ color: '#003366', fontSize: '10px' }}>Disease</TableHead>
                      <TableHead style={{ color: '#003366', fontSize: '10px' }}>Animal</TableHead>
                      <TableHead style={{ color: '#003366', fontSize: '10px' }}>Date</TableHead>
                      <TableHead style={{ color: '#003366', fontSize: '10px' }}>Charges</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      { farmer: "Ramesh Y", vaccine: "FMD", batch: "VB-441", disease: "FMD", animal: "Cattle", date: "22 May", charges: "₹150" },
                      { farmer: "Sunita D", vaccine: "HS", batch: "VB-442", disease: "HS", animal: "Cattle", date: "21 May", charges: "₹200" },
                      { farmer: "Manoj K", vaccine: "PPR", batch: "VB-443", disease: "PPR", animal: "Goat", date: "20 May", charges: "₹120" },
                      { farmer: "Priya V", vaccine: "FMD", batch: "VB-441", disease: "FMD", animal: "Cattle", date: "19 May", charges: "₹150" },
                      { farmer: "Vikas K", vaccine: "BQ", batch: "VB-445", disease: "BQ", animal: "Cattle", date: "18 May", charges: "₹180" },
                    ].map((row, index) => (
                      <TableRow key={index} style={index % 2 === 1 ? { backgroundColor: '#F9FAFB' } : {}}>
                        <TableCell style={{ color: '#1A1A1A', fontSize: '10px' }}>{row.farmer}</TableCell>
                        <TableCell style={{ color: '#1A1A1A', fontSize: '10px' }}>{row.vaccine}</TableCell>
                        <TableCell style={{ color: '#6B7280', fontSize: '10px' }}>{row.batch}</TableCell>
                        <TableCell style={{ color: '#1A1A1A', fontSize: '10px' }}>{row.disease}</TableCell>
                        <TableCell style={{ color: '#1A1A1A', fontSize: '10px' }}>{row.animal}</TableCell>
                        <TableCell style={{ color: '#6B7280', fontSize: '10px' }}>{row.date}</TableCell>
                        <TableCell style={{ color: '#1A1A1A', fontSize: '10px' }}>{row.charges}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>

                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm" style={{ color: '#6B7280' }}>Page 1 of 8</div>
                  <div className="flex gap-2">
                    <Button variant="outline" className="text-xs px-3" style={{ borderColor: '#E5E7EB', color: '#6B7280' }}>
                      Previous
                    </Button>
                    <Button variant="outline" className="text-xs px-3" style={{ borderColor: '#E5E7EB', color: '#6B7280' }}>
                      Next
                    </Button>
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
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
