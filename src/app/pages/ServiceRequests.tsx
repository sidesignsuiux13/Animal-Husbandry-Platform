import { useState } from "react";
import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";
import { ScopeBadge } from "../components/ScopeBadge";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Badge } from "../components/ui/badge";
import { Card } from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Textarea } from "../components/ui/textarea";
import { CheckCircle2, Circle, Pill, Microscope, X, Search, ArrowDown, AlertCircle, ChevronRight, Plus, Syringe } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router";

export function ServiceRequests() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [selectedRequestType, setSelectedRequestType] = useState<string | null>(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  if (!user) return null;

  const isDirectorate = user.role.includes("Directorate");
  const isDistrict = user.role.includes("CDVO");
  const isBlock = user.role.includes("BVO");
  const isAIT = user.role.includes("AIT");

  const handleLogRequest = () => {
    setShowConfirmation(true);
    setTimeout(() => setShowConfirmation(false), 5000);
  };

  // DIRECTORATE VIEW
  if (isDirectorate) {
    return (
      <div className="flex min-h-screen" style={{ backgroundColor: "#F9FAFB" }}>
        <Sidebar activeRoute="/service-requests" />
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="flex-1 p-6">
            <div className="max-w-7xl mx-auto space-y-6">
              <div>
                <h1 className="text-2xl font-bold mb-2" style={{ color: "#003366" }}>
                  Service Requests — State Overview
                </h1>
                <ScopeBadge scope="directorate" scopeLabel="All India" subLabel="States & UTs" />
              </div>

              {/* Pipeline Funnel */}
              <Card className="p-6">
                <h3 className="mb-4 font-semibold" style={{ color: "#003366" }}>
                  State-wide Request Pipeline
                </h3>
                <div className="flex items-center gap-4">
                  <div className="flex-1 p-4 rounded-lg text-center" style={{ backgroundColor: "#DBEAFE" }}>
                    <div className="text-3xl font-bold" style={{ color: "#1E40AF" }}>842</div>
                    <div className="text-sm" style={{ color: "#1E40AF" }}>Total Requests</div>
                  </div>
                  <ChevronRight className="w-6 h-6" style={{ color: "#9CA3AF" }} />
                  <div className="flex-1 p-4 rounded-lg text-center" style={{ backgroundColor: "#FEF3C7" }}>
                    <div className="text-3xl font-bold" style={{ color: "#92400E" }}>780</div>
                    <div className="text-sm" style={{ color: "#92400E" }}>Assigned</div>
                  </div>
                  <ChevronRight className="w-6 h-6" style={{ color: "#9CA3AF" }} />
                  <div className="flex-1 p-4 rounded-lg text-center" style={{ backgroundColor: "#E0E7FF" }}>
                    <div className="text-3xl font-bold" style={{ color: "#3730A3" }}>650</div>
                    <div className="text-sm" style={{ color: "#3730A3" }}>Data Entered</div>
                  </div>
                  <ChevronRight className="w-6 h-6" style={{ color: "#9CA3AF" }} />
                  <div className="flex-1 p-4 rounded-lg text-center" style={{ backgroundColor: "#FEE2E2" }}>
                    <div className="text-3xl font-bold" style={{ color: "#991B1B" }}>47</div>
                    <div className="text-sm" style={{ color: "#991B1B" }}>At Directorate</div>
                  </div>
                </div>
              </Card>

              {/* Pending My Approval */}
              <Card className="p-6">
                <h3 className="mb-4 font-semibold" style={{ color: "#003366" }}>
                  Pending My Approval
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr style={{ borderBottom: "2px solid #E5E7EB" }}>
                        <th className="text-left py-3 px-4 font-semibold text-sm" style={{ color: "#374151" }}>Ref</th>
                        <th className="text-left py-3 px-4 font-semibold text-sm" style={{ color: "#374151" }}>Type</th>
                        <th className="text-left py-3 px-4 font-semibold text-sm" style={{ color: "#374151" }}>District</th>
                        <th className="text-left py-3 px-4 font-semibold text-sm" style={{ color: "#374151" }}>Forwarded by</th>
                        <th className="text-left py-3 px-4 font-semibold text-sm" style={{ color: "#374151" }}>Waiting since</th>
                        <th className="text-left py-3 px-4 font-semibold text-sm" style={{ color: "#374151" }}>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: "1px solid #E5E7EB" }}>
                        <td className="py-3 px-4 text-sm">SR-2025-1045</td>
                        <td className="py-3 px-4 text-sm">Medicine Procurement</td>
                        <td className="py-3 px-4 text-sm">Lucknow</td>
                        <td className="py-3 px-4 text-sm">CDVO Lucknow</td>
                        <td className="py-3 px-4 text-sm">2 hrs</td>
                        <td className="py-3 px-4">
                          <div className="flex gap-2">
                            <Button size="sm" style={{ backgroundColor: "#10B981", color: "white" }}>
                              Approve
                            </Button>
                            <Button size="sm" variant="outline" style={{ color: "#EF4444" }}>
                              Reject
                            </Button>
                          </div>
                        </td>
                      </tr>
                      <tr style={{ borderBottom: "1px solid #E5E7EB" }}>
                        <td className="py-3 px-4 text-sm">SR-2025-1044</td>
                        <td className="py-3 px-4 text-sm">Semen Restocking</td>
                        <td className="py-3 px-4 text-sm">Jaipur</td>
                        <td className="py-3 px-4 text-sm">CDVO Jaipur</td>
                        <td className="py-3 px-4 text-sm">5 hrs</td>
                        <td className="py-3 px-4">
                          <div className="flex gap-2">
                            <Button size="sm" style={{ backgroundColor: "#10B981", color: "white" }}>
                              Approve
                            </Button>
                            <Button size="sm" variant="outline" style={{ color: "#EF4444" }}>
                              Reject
                            </Button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Card>
            </div>
          </main>
        </div>
      </div>
    );
  }

  // DISTRICT OFFICER VIEW
  if (isDistrict) {
    return (
      <div className="flex min-h-screen" style={{ backgroundColor: "#F9FAFB" }}>
        <Sidebar activeRoute="/service-requests" />
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="flex-1 p-6">
            <div className="max-w-7xl mx-auto space-y-6">
              <div>
                <h1 className="text-2xl font-bold mb-2" style={{ color: "#003366" }}>
                  Service Requests — Lucknow District
                </h1>
                <ScopeBadge scope="district" scopeLabel="Lucknow District" subLabel="12 Blocks" />
              </div>

              <Tabs defaultValue="pending" className="w-full">
                <TabsList>
                  <TabsTrigger value="pending">
                    Pending My Approval
                    <Badge className="ml-2" style={{ backgroundColor: "#F59E0B", color: "white" }}>3</Badge>
                  </TabsTrigger>
                  <TabsTrigger value="forwarded">Forwarded to Directorate</TabsTrigger>
                  <TabsTrigger value="completed">Completed</TabsTrigger>
                </TabsList>

                <TabsContent value="pending">
                  <Card className="p-6">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr style={{ borderBottom: "2px solid #E5E7EB" }}>
                            <th className="text-left py-3 px-4 font-semibold text-sm" style={{ color: "#374151" }}>Ref</th>
                            <th className="text-left py-3 px-4 font-semibold text-sm" style={{ color: "#374151" }}>Type</th>
                            <th className="text-left py-3 px-4 font-semibold text-sm" style={{ color: "#374151" }}>Block</th>
                            <th className="text-left py-3 px-4 font-semibold text-sm" style={{ color: "#374151" }}>Forwarded by</th>
                            <th className="text-left py-3 px-4 font-semibold text-sm" style={{ color: "#374151" }}>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr style={{ borderBottom: "1px solid #E5E7EB" }}>
                            <td className="py-3 px-4 text-sm">SR-2025-1043</td>
                            <td className="py-3 px-4 text-sm">Semen Restocking</td>
                            <td className="py-3 px-4 text-sm">Bakshi Ka Talab</td>
                            <td className="py-3 px-4 text-sm">BVO Bakshi Ka Talab</td>
                            <td className="py-3 px-4">
                              <div className="flex gap-2">
                                <Button size="sm" style={{ backgroundColor: "#10B981", color: "white" }}>
                                  Approve & Forward
                                </Button>
                                <Button size="sm" variant="outline" style={{ color: "#EF4444" }}>
                                  Reject
                                </Button>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </Card>
                </TabsContent>

                <TabsContent value="forwarded">
                  <Card className="p-6">
                    <p className="text-sm" style={{ color: "#6B7280" }}>
                      Requests forwarded to Directorate (read only tracking)
                    </p>
                  </Card>
                </TabsContent>

                <TabsContent value="completed">
                  <Card className="p-6">
                    <p className="text-sm" style={{ color: "#6B7280" }}>
                      Completed requests in Lucknow District
                    </p>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </main>
        </div>
      </div>
    );
  }

  // BLOCK OFFICER VIEW
  if (isBlock) {
    return (
      <div className="flex min-h-screen" style={{ backgroundColor: "#F9FAFB" }}>
        <Sidebar activeRoute="/service-requests" />
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="flex-1 p-6">
            <div className="max-w-7xl mx-auto space-y-6">
              <div>
                <h1 className="text-2xl font-bold mb-2" style={{ color: "#003366" }}>
                  Service Requests — Bakshi Ka Talab Block
                </h1>
                <ScopeBadge scope="block" scopeLabel="Bakshi Ka Talab Block" subLabel="8 LACs" />
              </div>

              <Tabs defaultValue="unassigned" className="w-full">
                <TabsList>
                  <TabsTrigger value="unassigned">
                    Unassigned
                    <Badge className="ml-2" style={{ backgroundColor: "#EF4444", color: "white" }}>2</Badge>
                  </TabsTrigger>
                  <TabsTrigger value="pending">
                    Pending My Approval
                    <Badge className="ml-2" style={{ backgroundColor: "#F59E0B", color: "white" }}>3</Badge>
                  </TabsTrigger>
                  <TabsTrigger value="forwarded">Forwarded to District</TabsTrigger>
                  <TabsTrigger value="completed">Completed</TabsTrigger>
                </TabsList>

                <TabsContent value="unassigned">
                  <Card className="p-6">
                    <h3 className="mb-4 font-semibold" style={{ color: "#003366" }}>
                      Unassigned Requests from Bakshi Ka Talab Block
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr style={{ borderBottom: "2px solid #E5E7EB" }}>
                            <th className="text-left py-3 px-4 font-semibold text-sm" style={{ color: "#374151" }}>Ref</th>
                            <th className="text-left py-3 px-4 font-semibold text-sm" style={{ color: "#374151" }}>Type</th>
                            <th className="text-left py-3 px-4 font-semibold text-sm" style={{ color: "#374151" }}>Farmer</th>
                            <th className="text-left py-3 px-4 font-semibold text-sm" style={{ color: "#374151" }}>Location</th>
                            <th className="text-left py-3 px-4 font-semibold text-sm" style={{ color: "#374151" }}>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr style={{ borderBottom: "1px solid #E5E7EB" }}>
                            <td className="py-3 px-4 text-sm">SR-2025-1046</td>
                            <td className="py-3 px-4 text-sm">AI Service</td>
                            <td className="py-3 px-4 text-sm">Vikas Kumar</td>
                            <td className="py-3 px-4 text-sm">Bakshi Ka Talab Village</td>
                            <td className="py-3 px-4">
                              <Select>
                                <SelectTrigger className="w-48">
                                  <SelectValue placeholder="Assign to AIT" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="rajan">Rajan Kumar</SelectItem>
                                  <SelectItem value="deepak">Deepak Singh</SelectItem>
                                  <SelectItem value="suresh">Suresh Pal</SelectItem>
                                </SelectContent>
                              </Select>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </Card>
                </TabsContent>

                <TabsContent value="pending">
                  <Card className="p-6">
                    <h3 className="mb-4 font-semibold" style={{ color: "#003366" }}>
                      Requests Awaiting My Approval
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr style={{ borderBottom: "2px solid #E5E7EB" }}>
                            <th className="text-left py-3 px-4 font-semibold text-sm" style={{ color: "#374151" }}>Ref</th>
                            <th className="text-left py-3 px-4 font-semibold text-sm" style={{ color: "#374151" }}>Type</th>
                            <th className="text-left py-3 px-4 font-semibold text-sm" style={{ color: "#374151" }}>AIT</th>
                            <th className="text-left py-3 px-4 font-semibold text-sm" style={{ color: "#374151" }}>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr style={{ borderBottom: "1px solid #E5E7EB" }}>
                            <td className="py-3 px-4 text-sm">SR-2025-1042</td>
                            <td className="py-3 px-4 text-sm">AI Service</td>
                            <td className="py-3 px-4 text-sm">Rajan Kumar</td>
                            <td className="py-3 px-4">
                              <div className="flex gap-2">
                                <Button size="sm" style={{ backgroundColor: "#10B981", color: "white" }}>
                                  Approve & Forward
                                </Button>
                                <Button size="sm" variant="outline" style={{ color: "#EF4444" }}>
                                  Reject
                                </Button>
                                <Button size="sm" variant="outline">
                                  Handle at Block
                                </Button>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </Card>
                </TabsContent>

                <TabsContent value="forwarded">
                  <Card className="p-6">
                    <p className="text-sm" style={{ color: "#6B7280" }}>
                      Requests forwarded to District Officer (read only tracking)
                    </p>
                  </Card>
                </TabsContent>

                <TabsContent value="completed">
                  <Card className="p-6">
                    <p className="text-sm" style={{ color: "#6B7280" }}>
                      Completed requests in Bakshi Ka Talab Block
                    </p>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </main>
        </div>
      </div>
    );
  }

  // AIT VIEW
  if (isAIT) {
    return (
      <div className="flex min-h-screen" style={{ backgroundColor: "#F9FAFB" }}>
        <Sidebar activeRoute="/service-requests" />
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="flex-1 p-6">
            <div className="max-w-7xl mx-auto space-y-6">
              <div>
                <h1 className="text-2xl font-bold mb-2" style={{ color: "#003366" }}>
                  My Service Requests
                </h1>
                <ScopeBadge scope="lac" scopeLabel="Bakshi Ka Talab LAC" subLabel="Bakshi Ka Talab Block, Lucknow" />
              </div>

              <Tabs defaultValue="log" className="w-full">
                <TabsList>
                  <TabsTrigger value="log">Log New Request</TabsTrigger>
                  <TabsTrigger value="assigned">
                    My Assigned
                    <Badge className="ml-2" style={{ backgroundColor: "#F59E0B", color: "white" }}>3</Badge>
                  </TabsTrigger>
                  <TabsTrigger value="awaiting">Awaiting Approval</TabsTrigger>
                  <TabsTrigger value="actnow">
                    Act Now
                    <Badge className="ml-2" style={{ backgroundColor: "#10B981", color: "white" }}>1</Badge>
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="log">
                  <div className="max-w-2xl mx-auto text-center space-y-6">
                    <div>
                      <Plus className="w-16 h-16 mx-auto mb-4" style={{ color: "#FF6600" }} />
                      <h3 className="text-xl font-semibold mb-2" style={{ color: "#003366" }}>
                        Log a New Farmer Request
                      </h3>
                      <p className="text-sm mb-6" style={{ color: "#6B7280" }}>
                        Record incoming farmer calls for AI Service, Medicine, Vaccination, or Disease Sample collection
                      </p>
                    </div>

                    <Button
                      onClick={() => navigate("/log-request")}
                      className="w-full max-w-md mx-auto"
                      style={{ backgroundColor: "#FF6600", color: "white", padding: "1.5rem", fontSize: "1.125rem" }}
                    >
                      <Plus className="w-5 h-5 mr-2" />
                      Log Incoming Farmer Call
                    </Button>

                    <Card className="p-6 text-left">
                      <h4 className="font-semibold mb-4" style={{ color: "#003366" }}>
                        What happens after you submit?
                      </h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center justify-between p-3 rounded" style={{ backgroundColor: "#F3F4F6" }}>
                          <div className="flex items-center gap-2">
                            <Circle className="w-4 h-4" style={{ color: "#3B82F6" }} />
                            <span style={{ color: "#374151" }}>AI Service</span>
                          </div>
                          <span className="font-medium" style={{ color: "#10B981" }}>
                            → Recorded directly ✓
                          </span>
                        </div>
                        <div className="flex items-center justify-between p-3 rounded" style={{ backgroundColor: "#F3F4F6" }}>
                          <div className="flex items-center gap-2">
                            <Pill className="w-4 h-4" style={{ color: "#10B981" }} />
                            <span style={{ color: "#374151" }}>Medicine</span>
                          </div>
                          <span className="font-medium" style={{ color: "#F59E0B" }}>
                            → Block approval needed
                          </span>
                        </div>
                        <div className="flex items-center justify-between p-3 rounded" style={{ backgroundColor: "#F3F4F6" }}>
                          <div className="flex items-center gap-2">
                            <Syringe className="w-4 h-4" style={{ color: "#A855F7" }} />
                            <span style={{ color: "#374151" }}>Vaccine</span>
                          </div>
                          <span className="font-medium" style={{ color: "#10B981" }}>
                            → Recorded directly ✓
                          </span>
                        </div>
                        <div className="flex items-center justify-between p-3 rounded" style={{ backgroundColor: "#F3F4F6" }}>
                          <div className="flex items-center gap-2">
                            <Microscope className="w-4 h-4" style={{ color: "#FF6600" }} />
                            <span style={{ color: "#374151" }}>Disease Sample</span>
                          </div>
                          <span className="font-medium" style={{ color: "#3B82F6" }}>
                            → Registered + Lab notified
                          </span>
                        </div>
                      </div>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="assigned">
                  <Card className="p-6">
                    <p className="text-sm" style={{ color: "#6B7280" }}>
                      Requests assigned to you - enter service details here
                    </p>
                  </Card>
                </TabsContent>

                <TabsContent value="awaiting">
                  <Card className="p-6">
                    <p className="text-sm" style={{ color: "#6B7280" }}>
                      Requests submitted, waiting Block Officer approval (read only)
                    </p>
                  </Card>
                </TabsContent>

                <TabsContent value="actnow">
                  <Card className="p-6">
                    <p className="text-sm" style={{ color: "#6B7280" }}>
                      Approved requests ready for action
                    </p>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </main>
        </div>
      </div>
    );
  }

  return null;
}
