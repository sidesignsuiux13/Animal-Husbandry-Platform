import { useState } from "react";
import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Badge } from "../components/ui/badge";
import { Settings, Search, Download, Copy, X, CheckCircle, XCircle } from "lucide-react";

export function UserManagement() {
  const [showEditPanel, setShowEditPanel] = useState(false);
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [showDeactivateModal, setShowDeactivateModal] = useState(false);
  const [newUserRole, setNewUserRole] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    employeeId: "",
    mobile: "",
    email: "",
    dob: "",
    gender: "male",
    role: "",
    district: "",
    block: "",
    lac: "",
    village: "",
    designation: "",
    username: "",
    tempPassword: "Temp@2025#GOI",
    sendSMS: true,
    sendEmail: true,
    webPortal: true,
    mobileApp: true,
    adminPanel: false,
    status: "active",
  });

  const users = [
    {
      id: "U001",
      name: "Dr. Arun Mishra",
      role: "Directorate Admin",
      location: "All India",
      status: "Active",
      statusColor: "#10B981",
      lastLogin: "22 May 09:14",
    },
    {
      id: "U002",
      name: "Dr. Pradeep Sharma",
      role: "District Officer",
      location: "Lucknow",
      status: "Active",
      statusColor: "#10B981",
      lastLogin: "22 May 08:30",
    },
    {
      id: "U003",
      name: "Dr. Sarita Singh",
      role: "Block Officer",
      location: "Bakshi Ka Talab, Lucknow",
      status: "Active",
      statusColor: "#10B981",
      lastLogin: "22 May 07:45",
    },
    {
      id: "U004",
      name: "Rajan Kumar",
      role: "Field Technician",
      location: "Bakshi Ka Talab LAC",
      status: "Active",
      statusColor: "#10B981",
      lastLogin: "22 May 09:00",
    },
    {
      id: "U005",
      name: "Ramesh Yadav",
      role: "Farmer",
      location: "Bakshi Ka Talab, Lucknow",
      status: "Active",
      statusColor: "#10B981",
      lastLogin: "20 May 14:22",
    },
    {
      id: "U006",
      name: "Deepak Singh",
      role: "Field Technician",
      location: "Chinhat LAC",
      status: "Active",
      statusColor: "#10B981",
      lastLogin: "21 May 11:00",
    },
    {
      id: "U007",
      name: "Dr. Amit Das",
      role: "Block Officer",
      location: "Malihabad, Lucknow",
      status: "Inactive",
      statusColor: "#F59E0B",
      lastLogin: "15 May 09:30",
    },
    {
      id: "U008",
      name: "Suresh Pal",
      role: "Field Technician",
      location: "Kakori LAC",
      status: "Suspended",
      statusColor: "#EF4444",
      lastLogin: "10 May 16:00",
    },
  ];

  const permissions = [
    { feature: "Log Farmer Request", directorate: false, district: false, block: false, ait: true, farmer: true },
    { feature: "Approve Requests", directorate: true, district: true, block: true, ait: false, farmer: false },
    { feature: "View All States", directorate: true, district: false, block: false, ait: false, farmer: false },
    { feature: "Allocate Stock", directorate: true, district: true, block: true, ait: false, farmer: false },
    { feature: "View Analytics", directorate: true, district: true, block: true, ait: false, farmer: false },
    { feature: "User Management", directorate: true, district: false, block: false, ait: false, farmer: false },
    { feature: "Raise Grievance", directorate: true, district: true, block: true, ait: true, farmer: true },
    { feature: "View Own Data Only", directorate: false, district: false, block: false, ait: true, farmer: true },
  ];

  const auditLogs = [
    {
      timestamp: "22 May 09:14",
      user: "Dr. Arun Mishra",
      action: "Login",
      module: "System",
      details: "Successful login",
      ip: "192.168.1.1",
    },
    {
      timestamp: "22 May 09:20",
      user: "Dr. Arun Mishra",
      action: "Approved",
      module: "Service Requests",
      details: "SR-2025-1040 approved",
      ip: "—",
    },
    {
      timestamp: "22 May 08:30",
      user: "Dr. Pradeep Sharma",
      action: "Login",
      module: "System",
      details: "Successful",
      ip: "—",
    },
    {
      timestamp: "22 May 08:45",
      user: "Dr. Pradeep Sharma",
      action: "Approved",
      module: "Medicine",
      details: "MR-2025-0891 forwarded to Directorate",
      ip: "—",
    },
    {
      timestamp: "22 May 07:45",
      user: "Dr. Sarita Singh",
      action: "Login",
      module: "System",
      details: "Successful",
      ip: "—",
    },
    {
      timestamp: "22 May 08:00",
      user: "Rajan Kumar",
      action: "Created Record",
      module: "Semen",
      details: "SR-2025-1042 logged",
      ip: "—",
    },
    {
      timestamp: "22 May 08:15",
      user: "Rajan Kumar",
      action: "Submitted",
      module: "Medicine",
      details: "MR-2025-0891 submitted",
      ip: "—",
    },
  ];

  const handleEditUser = (user: any) => {
    setSelectedUser(user);
    setShowEditPanel(true);
  };

  const handleDeactivate = () => {
    setShowDeactivateModal(false);
    setShowEditPanel(false);
  };

  return (
    <div className="flex min-h-screen" style={{ backgroundColor: "#F9FAFB" }}>
      <Sidebar activeRoute="/user-management" />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            <div>
              <h1 className="text-2xl font-bold mb-2" style={{ color: "#003366" }}>
                User Management
              </h1>
              <div className="flex items-center gap-2 mb-4">
                <Settings className="w-4 h-4" style={{ color: "#003366" }} />
                <span className="text-sm font-medium" style={{ color: "#003366" }}>
                  System Administration
                </span>
              </div>
            </div>

            <Tabs defaultValue="all-users">
              <TabsList>
                <TabsTrigger value="all-users">All Users</TabsTrigger>
                <TabsTrigger value="create">Create User</TabsTrigger>
                <TabsTrigger value="roles">Roles & Permissions</TabsTrigger>
                <TabsTrigger value="audit">Audit Log</TabsTrigger>
              </TabsList>

              <TabsContent value="all-users">
                <Card className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <Select defaultValue="all-roles">
                        <SelectTrigger className="w-48">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all-roles">Role: All</SelectItem>
                          <SelectItem value="directorate">Directorate Admin</SelectItem>
                          <SelectItem value="district">District Officer</SelectItem>
                          <SelectItem value="block">Block Officer</SelectItem>
                          <SelectItem value="ait">Field Technician</SelectItem>
                          <SelectItem value="farmer">Farmer</SelectItem>
                        </SelectContent>
                      </Select>

                      <Select defaultValue="all-districts">
                        <SelectTrigger className="w-48">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all-districts">State: All</SelectItem>
                          <SelectItem value="lucknow">Lucknow</SelectItem>
                        </SelectContent>
                      </Select>

                      <Select defaultValue="all-status">
                        <SelectTrigger className="w-48">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all-status">Status: All</SelectItem>
                          <SelectItem value="active">Active</SelectItem>
                          <SelectItem value="inactive">Inactive</SelectItem>
                          <SelectItem value="suspended">Suspended</SelectItem>
                        </SelectContent>
                      </Select>

                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4" style={{ color: "#9CA3AF" }} />
                        <Input placeholder="Search by name or ID" className="pl-10 w-64" />
                      </div>
                    </div>

                    <Button style={{ backgroundColor: "#FF6600", color: "white" }}>
                      + Create New User
                    </Button>
                  </div>

                  <p className="text-sm mb-4" style={{ color: "#6B7280" }}>
                    Showing 8 of 142 users
                  </p>

                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr style={{ borderBottom: "2px solid #E5E7EB" }}>
                          <th className="text-left py-3 px-4 font-semibold text-sm" style={{ color: "#374151" }}>
                            User ID
                          </th>
                          <th className="text-left py-3 px-4 font-semibold text-sm" style={{ color: "#374151" }}>
                            Name
                          </th>
                          <th className="text-left py-3 px-4 font-semibold text-sm" style={{ color: "#374151" }}>
                            Role
                          </th>
                          <th className="text-left py-3 px-4 font-semibold text-sm" style={{ color: "#374151" }}>
                            District/Block/LAC
                          </th>
                          <th className="text-left py-3 px-4 font-semibold text-sm" style={{ color: "#374151" }}>
                            Status
                          </th>
                          <th className="text-left py-3 px-4 font-semibold text-sm" style={{ color: "#374151" }}>
                            Last Login
                          </th>
                          <th className="text-left py-3 px-4 font-semibold text-sm" style={{ color: "#374151" }}>
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {users.map((user) => (
                          <tr key={user.id} style={{ borderBottom: "1px solid #E5E7EB" }}>
                            <td className="py-3 px-4 text-sm font-medium" style={{ color: "#003366" }}>
                              {user.id}
                            </td>
                            <td className="py-3 px-4 text-sm">{user.name}</td>
                            <td className="py-3 px-4 text-sm">{user.role}</td>
                            <td className="py-3 px-4 text-sm">{user.location}</td>
                            <td className="py-3 px-4">
                              <span
                                className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold"
                                style={{
                                  backgroundColor: `${user.statusColor}20`,
                                  color: user.statusColor,
                                }}
                              >
                                <span
                                  className="w-2 h-2 rounded-full"
                                  style={{ backgroundColor: user.statusColor }}
                                />
                                {user.status}
                              </span>
                            </td>
                            <td className="py-3 px-4 text-sm" style={{ color: "#6B7280" }}>
                              {user.lastLogin}
                            </td>
                            <td className="py-3 px-4">
                              <div className="flex items-center gap-2">
                                <Button size="sm" variant="outline" onClick={() => handleEditUser(user)}>
                                  Edit
                                </Button>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  style={{
                                    color: user.status === "Active" ? "#EF4444" : "#10B981",
                                    borderColor: user.status === "Active" ? "#EF4444" : "#10B981",
                                  }}
                                >
                                  {user.status === "Active" ? "Deactivate" : user.status === "Suspended" ? "Reinstate" : "Activate"}
                                </Button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="flex items-center justify-center gap-2 mt-6">
                    <button className="px-3 py-1 rounded border text-sm" style={{ borderColor: "#E5E7EB" }}>
                      1
                    </button>
                    <button className="px-3 py-1 rounded border text-sm" style={{ borderColor: "#E5E7EB" }}>
                      2
                    </button>
                    <button className="px-3 py-1 rounded border text-sm" style={{ borderColor: "#E5E7EB" }}>
                      3
                    </button>
                    <span className="text-sm" style={{ color: "#6B7280" }}>
                      ...
                    </span>
                    <button className="px-3 py-1 rounded border text-sm" style={{ borderColor: "#E5E7EB" }}>
                      18
                    </button>
                    <button className="px-3 py-1 rounded border text-sm" style={{ borderColor: "#E5E7EB" }}>
                      Next →
                    </button>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="create">
                <Card className="p-8">
                  <h2 className="text-xl font-bold mb-6" style={{ color: "#003366" }}>
                    Create New User Account
                  </h2>

                  <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h3 className="font-semibold mb-4" style={{ color: "#374151" }}>
                        Personal Information
                      </h3>
                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: "#374151" }}>
                          Full Name
                        </label>
                        <Input placeholder="Enter full name" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: "#374151" }}>
                          Employee/Farmer ID
                        </label>
                        <Input placeholder="Enter ID" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: "#374151" }}>
                          Mobile Number
                        </label>
                        <Input type="tel" placeholder="10-digit mobile number" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: "#374151" }}>
                          Email Address
                        </label>
                        <Input type="email" placeholder="email@example.com" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: "#374151" }}>
                          Date of Birth
                        </label>
                        <Input type="date" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: "#374151" }}>
                          Gender
                        </label>
                        <div className="flex gap-4">
                          <label className="flex items-center gap-2">
                            <input type="radio" name="gender" value="male" defaultChecked />
                            <span className="text-sm">Male</span>
                          </label>
                          <label className="flex items-center gap-2">
                            <input type="radio" name="gender" value="female" />
                            <span className="text-sm">Female</span>
                          </label>
                          <label className="flex items-center gap-2">
                            <input type="radio" name="gender" value="other" />
                            <span className="text-sm">Other</span>
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="font-semibold mb-4" style={{ color: "#374151" }}>
                        Role & Location
                      </h3>
                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: "#374151" }}>
                          Role
                        </label>
                        <Select value={newUserRole} onValueChange={setNewUserRole}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select role" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="directorate">Directorate Admin</SelectItem>
                            <SelectItem value="district">District Officer (CDVO)</SelectItem>
                            <SelectItem value="block">Block Officer (BVO)</SelectItem>
                            <SelectItem value="ait">Field Technician (AIT)</SelectItem>
                            <SelectItem value="farmer">Farmer</SelectItem>
                            <SelectItem value="mvu">MVU Team Member</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {(newUserRole === "district" || newUserRole === "block" || newUserRole === "ait" || newUserRole === "farmer") && (
                        <div>
                          <label className="block text-sm font-medium mb-2" style={{ color: "#374151" }}>
                            District
                          </label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select district" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="lucknow">Lucknow</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      )}

                      {(newUserRole === "block" || newUserRole === "ait" || newUserRole === "farmer") && (
                        <div>
                          <label className="block text-sm font-medium mb-2" style={{ color: "#374151" }}>
                            Block
                          </label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select block" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="bakshi-ka-talab">Bakshi Ka Talab</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      )}

                      {newUserRole === "ait" && (
                        <div>
                          <label className="block text-sm font-medium mb-2" style={{ color: "#374151" }}>
                            LAC
                          </label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select LAC" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="bakshi-ka-talab-lac">Bakshi Ka Talab LAC</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      )}

                      {newUserRole === "farmer" && (
                        <div>
                          <label className="block text-sm font-medium mb-2" style={{ color: "#374151" }}>
                            Village
                          </label>
                          <Input placeholder="Enter village name" />
                        </div>
                      )}

                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: "#374151" }}>
                          Designation
                        </label>
                        <Input placeholder="Enter designation" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: "#374151" }}>
                          Department
                        </label>
                        <Input value="DAHD" disabled />
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 p-6 rounded-lg" style={{ backgroundColor: "#F9FAFB" }}>
                    <h3 className="font-semibold mb-4" style={{ color: "#374151" }}>
                      Account Settings
                    </h3>
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: "#374151" }}>
                          Username (auto-generated)
                        </label>
                        <Input value="rajan.kumar" disabled />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: "#374151" }}>
                          Temporary Password
                        </label>
                        <div className="flex gap-2">
                          <Input value="Temp@2025#GOI" disabled />
                          <Button variant="outline" size="sm">
                            <Copy className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4">
                      <label className="block text-sm font-medium mb-2" style={{ color: "#374151" }}>
                        Send credentials via:
                      </label>
                      <div className="flex gap-4">
                        <label className="flex items-center gap-2">
                          <input type="checkbox" defaultChecked />
                          <span className="text-sm">SMS to mobile</span>
                        </label>
                        <label className="flex items-center gap-2">
                          <input type="checkbox" defaultChecked />
                          <span className="text-sm">Email</span>
                        </label>
                      </div>
                    </div>

                    <div className="mt-4">
                      <label className="block text-sm font-medium mb-2" style={{ color: "#374151" }}>
                        Access Level:
                      </label>
                      <div className="flex gap-4">
                        <label className="flex items-center gap-2">
                          <input type="checkbox" defaultChecked />
                          <span className="text-sm">Web Portal</span>
                        </label>
                        <label className="flex items-center gap-2">
                          <input type="checkbox" defaultChecked />
                          <span className="text-sm">Mobile App</span>
                        </label>
                        <label className="flex items-center gap-2">
                          <input type="checkbox" />
                          <span className="text-sm">Admin Panel</span>
                        </label>
                      </div>
                    </div>

                    <div className="mt-4">
                      <label className="block text-sm font-medium mb-2" style={{ color: "#374151" }}>
                        Account Status:
                      </label>
                      <div className="flex gap-4">
                        <label className="flex items-center gap-2">
                          <input type="radio" name="status" value="active" defaultChecked />
                          <span className="text-sm">Active</span>
                        </label>
                        <label className="flex items-center gap-2">
                          <input type="radio" name="status" value="inactive" />
                          <span className="text-sm">Inactive</span>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3 mt-6">
                    <Button variant="outline">Cancel</Button>
                    <Button style={{ backgroundColor: "#FF6600", color: "white" }}>
                      Create User Account
                    </Button>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="roles">
                <Card className="p-6">
                  <h2 className="text-xl font-bold mb-6" style={{ color: "#003366" }}>
                    Role Access Matrix
                  </h2>

                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr style={{ borderBottom: "2px solid #E5E7EB" }}>
                          <th className="text-left py-3 px-4 font-semibold text-sm" style={{ color: "#374151" }}>
                            Feature
                          </th>
                          <th className="text-center py-3 px-4 font-semibold text-sm" style={{ color: "#374151" }}>
                            Directorate
                          </th>
                          <th className="text-center py-3 px-4 font-semibold text-sm" style={{ color: "#374151" }}>
                            District
                          </th>
                          <th className="text-center py-3 px-4 font-semibold text-sm" style={{ color: "#374151" }}>
                            Block
                          </th>
                          <th className="text-center py-3 px-4 font-semibold text-sm" style={{ color: "#374151" }}>
                            AIT
                          </th>
                          <th className="text-center py-3 px-4 font-semibold text-sm" style={{ color: "#374151" }}>
                            Farmer
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {permissions.map((perm, idx) => (
                          <tr key={idx} style={{ borderBottom: "1px solid #E5E7EB" }}>
                            <td className="py-3 px-4 text-sm">{perm.feature}</td>
                            <td className="py-3 px-4 text-center">
                              {perm.directorate ? (
                                <span
                                  className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold"
                                  style={{ backgroundColor: "#D1FAE5", color: "#065F46" }}
                                >
                                  <CheckCircle className="w-3 h-3" />✓
                                </span>
                              ) : (
                                <span
                                  className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold"
                                  style={{ backgroundColor: "#FEE2E2", color: "#991B1B" }}
                                >
                                  <XCircle className="w-3 h-3" />✗
                                </span>
                              )}
                            </td>
                            <td className="py-3 px-4 text-center">
                              {perm.district ? (
                                <span
                                  className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold"
                                  style={{ backgroundColor: "#D1FAE5", color: "#065F46" }}
                                >
                                  <CheckCircle className="w-3 h-3" />✓
                                </span>
                              ) : (
                                <span
                                  className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold"
                                  style={{ backgroundColor: "#FEE2E2", color: "#991B1B" }}
                                >
                                  <XCircle className="w-3 h-3" />✗
                                </span>
                              )}
                            </td>
                            <td className="py-3 px-4 text-center">
                              {perm.block ? (
                                <span
                                  className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold"
                                  style={{ backgroundColor: "#D1FAE5", color: "#065F46" }}
                                >
                                  <CheckCircle className="w-3 h-3" />✓
                                </span>
                              ) : (
                                <span
                                  className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold"
                                  style={{ backgroundColor: "#FEE2E2", color: "#991B1B" }}
                                >
                                  <XCircle className="w-3 h-3" />✗
                                </span>
                              )}
                            </td>
                            <td className="py-3 px-4 text-center">
                              {perm.ait ? (
                                <span
                                  className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold"
                                  style={{ backgroundColor: "#D1FAE5", color: "#065F46" }}
                                >
                                  <CheckCircle className="w-3 h-3" />✓
                                </span>
                              ) : (
                                <span
                                  className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold"
                                  style={{ backgroundColor: "#FEE2E2", color: "#991B1B" }}
                                >
                                  <XCircle className="w-3 h-3" />✗
                                </span>
                              )}
                            </td>
                            <td className="py-3 px-4 text-center">
                              {perm.farmer ? (
                                <span
                                  className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold"
                                  style={{ backgroundColor: "#D1FAE5", color: "#065F46" }}
                                >
                                  <CheckCircle className="w-3 h-3" />✓
                                </span>
                              ) : (
                                <span
                                  className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold"
                                  style={{ backgroundColor: "#FEE2E2", color: "#991B1B" }}
                                >
                                  <XCircle className="w-3 h-3" />✗
                                </span>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <Card className="p-4 mt-6" style={{ backgroundColor: "#FFF7ED", borderColor: "#F59E0B" }}>
                    <p className="text-sm" style={{ color: "#92400E" }}>
                      <strong>Note:</strong> Role permissions are system-defined. Contact system administrator to modify access levels.
                    </p>
                  </Card>
                </Card>
              </TabsContent>

              <TabsContent value="audit">
                <Card className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold" style={{ color: "#003366" }}>
                      System Audit Log
                    </h2>
                    <Button variant="outline">
                      <Download className="w-4 h-4 mr-2" />
                      Export Log
                    </Button>
                  </div>

                  <div className="flex items-center gap-4 mb-6">
                    <Select defaultValue="all-users">
                      <SelectTrigger className="w-48">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all-users">User: All</SelectItem>
                      </SelectContent>
                    </Select>

                    <Select defaultValue="all-actions">
                      <SelectTrigger className="w-48">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all-actions">Action: All</SelectItem>
                        <SelectItem value="login">Login</SelectItem>
                        <SelectItem value="approved">Approved</SelectItem>
                        <SelectItem value="created">Created Record</SelectItem>
                      </SelectContent>
                    </Select>

                    <Select defaultValue="date-range">
                      <SelectTrigger className="w-48">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="date-range">Date Range</SelectItem>
                        <SelectItem value="today">Today</SelectItem>
                        <SelectItem value="week">This Week</SelectItem>
                      </SelectContent>
                    </Select>

                    <Select defaultValue="all-modules">
                      <SelectTrigger className="w-48">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all-modules">Module: All</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                        <SelectItem value="medicine">Medicine</SelectItem>
                        <SelectItem value="semen">Semen</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr style={{ borderBottom: "2px solid #E5E7EB" }}>
                          <th className="text-left py-3 px-4 font-semibold text-sm" style={{ color: "#374151" }}>
                            Timestamp
                          </th>
                          <th className="text-left py-3 px-4 font-semibold text-sm" style={{ color: "#374151" }}>
                            User
                          </th>
                          <th className="text-left py-3 px-4 font-semibold text-sm" style={{ color: "#374151" }}>
                            Action
                          </th>
                          <th className="text-left py-3 px-4 font-semibold text-sm" style={{ color: "#374151" }}>
                            Module
                          </th>
                          <th className="text-left py-3 px-4 font-semibold text-sm" style={{ color: "#374151" }}>
                            Details
                          </th>
                          <th className="text-left py-3 px-4 font-semibold text-sm" style={{ color: "#374151" }}>
                            IP
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {auditLogs.map((log, idx) => (
                          <tr key={idx} style={{ borderBottom: "1px solid #E5E7EB" }}>
                            <td className="py-3 px-4 text-sm" style={{ color: "#6B7280" }}>
                              {log.timestamp}
                            </td>
                            <td className="py-3 px-4 text-sm">{log.user}</td>
                            <td className="py-3 px-4 text-sm">
                              <Badge variant="outline">{log.action}</Badge>
                            </td>
                            <td className="py-3 px-4 text-sm">{log.module}</td>
                            <td className="py-3 px-4 text-sm">{log.details}</td>
                            <td className="py-3 px-4 text-sm" style={{ color: "#6B7280" }}>
                              {log.ip}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>

      {/* Edit User Slide-in Panel */}
      {showEditPanel && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setShowEditPanel(false)} />
          <div
            className="relative w-full max-w-md bg-white h-full overflow-y-auto p-6 shadow-2xl"
            style={{ animation: "slideIn 0.3s ease-out" }}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold" style={{ color: "#003366" }}>
                Edit User — {selectedUser?.name}
              </h2>
              <button onClick={() => setShowEditPanel(false)}>
                <X className="w-6 h-6" style={{ color: "#6B7280" }} />
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: "#374151" }}>
                  Name
                </label>
                <Input defaultValue={selectedUser?.name} />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: "#374151" }}>
                  Role
                </label>
                <Input defaultValue={selectedUser?.role} disabled />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: "#374151" }}>
                  Location
                </label>
                <Input defaultValue={selectedUser?.location} />
              </div>

              <Card className="p-4" style={{ backgroundColor: "#F9FAFB" }}>
                <h3 className="font-semibold mb-3" style={{ color: "#374151" }}>
                  Reset Password
                </h3>
                <Button variant="outline" className="w-full">
                  Reset Password
                </Button>
                <p className="text-xs mt-2" style={{ color: "#6B7280" }}>
                  New temporary password will be sent to user's mobile and email
                </p>
              </Card>

              <Card className="p-4" style={{ backgroundColor: "#FFF7ED", borderColor: "#F59E0B" }}>
                <h3 className="font-semibold mb-2" style={{ color: "#92400E" }}>
                  Change Role
                </h3>
                <div className="mb-3">
                  <p className="text-sm mb-1" style={{ color: "#92400E" }}>
                    <strong>Current:</strong> {selectedUser?.role}
                  </p>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select new role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="directorate">Directorate Admin</SelectItem>
                      <SelectItem value="district">District Officer</SelectItem>
                      <SelectItem value="block">Block Officer</SelectItem>
                      <SelectItem value="ait">Field Technician</SelectItem>
                      <SelectItem value="farmer">Farmer</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <p className="text-xs" style={{ color: "#92400E" }}>
                  ⚠ Changing role will modify data access scope immediately. User will need to re-login.
                </p>
              </Card>

              <div className="space-y-3">
                <Button
                  variant="outline"
                  className="w-full"
                  style={{ color: "#EF4444", borderColor: "#EF4444" }}
                  onClick={() => setShowDeactivateModal(true)}
                >
                  Deactivate Account
                </Button>
                <Button
                  variant="outline"
                  className="w-full"
                  style={{ color: "#F59E0B", borderColor: "#F59E0B" }}
                >
                  Suspend Account
                </Button>
                <Button className="w-full" style={{ backgroundColor: "#FF6600", color: "white" }}>
                  Save Changes
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Deactivate Confirmation Modal */}
      {showDeactivateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setShowDeactivateModal(false)} />
          <Card className="relative w-full max-w-md p-6">
            <h3 className="text-lg font-bold mb-4" style={{ color: "#003366" }}>
              Confirm Deactivation
            </h3>
            <p className="text-sm mb-6" style={{ color: "#374151" }}>
              Are you sure you want to deactivate <strong>{selectedUser?.name}</strong>? User will lose all system access. Their submitted records will be retained.
            </p>
            <div className="flex gap-3">
              <Button variant="outline" onClick={() => setShowDeactivateModal(false)} className="flex-1">
                Cancel
              </Button>
              <Button
                onClick={handleDeactivate}
                className="flex-1"
                style={{ backgroundColor: "#EF4444", color: "white" }}
              >
                Yes, Deactivate
              </Button>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}
