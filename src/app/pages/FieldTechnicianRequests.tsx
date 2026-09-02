import { useNavigate } from "react-router";
import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";
import { ScopeBadge } from "../components/ScopeBadge";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Card } from "../components/ui/card";
import { Circle, Pill, Microscope, CheckCircle2, Clock, AlertCircle, X, Star } from "lucide-react";

export function FieldTechnicianRequests() {
  const navigate = useNavigate();
  return (
    <div className="flex min-h-screen" style={{ backgroundColor: "#F9FAFB" }}>
      <Sidebar activeRoute="/my-requests" />

      <div className="flex-1 flex flex-col">
        <Header />

        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Page header */}
            <div>
              <h1 className="text-2xl font-bold mb-2" style={{ color: "#003366" }}>
                My Assigned Requests
              </h1>
              <ScopeBadge
                scope="lac"
                scopeLabel="Salipur LAC"
                subLabel="8 Villages"
              />
            </div>

            {/* Workflow banner */}
            <Card className="p-4" style={{ backgroundColor: "#EFF6FF", borderColor: "#93C5FD" }}>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-1 h-6 rounded" style={{ backgroundColor: "#3B82F6" }} />
                <span className="font-semibold" style={{ color: "#1E40AF" }}>
                  Workflow Process
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="px-3 py-1.5 rounded-full font-medium text-sm flex items-center gap-1" style={{ backgroundColor: "#D1FAE5", color: "#065F46" }}>
                  <CheckCircle2 className="w-4 h-4" />
                  1. Farmer Request
                </div>
                <div className="w-6 border-t-2" style={{ borderColor: "#93C5FD" }} />
                <div className="px-3 py-1.5 rounded-full font-medium text-sm" style={{ backgroundColor: "#3B82F6", color: "white" }}>
                  2. Technician Assigned
                </div>
                <div className="w-6 border-t-2" style={{ borderColor: "#93C5FD" }} />
                <div className="px-3 py-1.5 rounded-full font-medium text-sm" style={{ backgroundColor: "#DBEAFE", color: "#1E40AF" }}>
                  3. Data Entry
                </div>
                <div className="w-6 border-t-2" style={{ borderColor: "#93C5FD" }} />
                <div className="px-3 py-1.5 rounded-full font-medium text-sm" style={{ backgroundColor: "#DBEAFE", color: "#1E40AF" }}>
                  4. Approval
                </div>
                <div className="w-6 border-t-2" style={{ borderColor: "#93C5FD" }} />
                <div className="px-3 py-1.5 rounded-full font-medium text-sm" style={{ backgroundColor: "#DBEAFE", color: "#1E40AF" }}>
                  5. Action
                </div>
              </div>
            </Card>

            {/* Today's summary */}
            <div className="grid grid-cols-3 gap-4">
              <Card className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-3xl font-bold" style={{ color: "#EAB308" }}>3</div>
                    <div className="text-sm mt-1" style={{ color: "#6B7280" }}>Pending Action</div>
                  </div>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: "#FEF3C7" }}>
                    <Clock className="w-6 h-6" style={{ color: "#EAB308" }} />
                  </div>
                </div>
              </Card>

              <Card className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-3xl font-bold" style={{ color: "#F97316" }}>2</div>
                    <div className="text-sm mt-1" style={{ color: "#6B7280" }}>Awaiting Approval</div>
                  </div>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: "#FFEDD5" }}>
                    <AlertCircle className="w-6 h-6" style={{ color: "#F97316" }} />
                  </div>
                </div>
              </Card>

              <Card className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-3xl font-bold" style={{ color: "#10B981" }}>1</div>
                    <div className="text-sm mt-1" style={{ color: "#6B7280" }}>Approved — Act Now</div>
                  </div>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: "#D1FAE5" }}>
                    <CheckCircle2 className="w-6 h-6" style={{ color: "#10B981" }} />
                  </div>
                </div>
              </Card>
            </div>

            {/* Active filters */}
            <div className="flex items-center gap-2">
              <Badge className="gap-1 px-3 py-1" style={{ backgroundColor: "#DBEAFE", color: "#1E40AF" }}>
                Today
                <X className="w-3 h-3 cursor-pointer" />
              </Badge>
              <Badge className="gap-1 px-3 py-1" style={{ backgroundColor: "#DBEAFE", color: "#1E40AF" }}>
                Assigned to Me
                <X className="w-3 h-3 cursor-pointer" />
              </Badge>
              <button className="text-sm" style={{ color: "#3B82F6" }}>
                Clear All Filters
              </button>
            </div>

            {/* Request cards */}
            <div className="space-y-4">
              {/* APPROVED - ACTION REQUIRED */}
              <Card className="p-6 border-2" style={{ borderColor: "#10B981" }}>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Badge style={{ backgroundColor: "#10B981", color: "white" }}>
                      🟢 APPROVED — ACT NOW
                    </Badge>
                  </div>
                  <span className="text-sm font-medium" style={{ color: "#6B7280" }}>SR-2025-1040</span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="text-sm" style={{ color: "#6B7280" }}>Request Type</div>
                    <div className="flex items-center gap-2 mt-1">
                      <Microscope className="w-5 h-5" style={{ color: "#003366" }} />
                      <span className="font-semibold" style={{ color: "#003366" }}>Disease Sample Collection</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm" style={{ color: "#6B7280" }}>Farmer</div>
                    <div className="font-semibold mt-1" style={{ color: "#003366" }}>Manoj Nayak | OD3456</div>
                  </div>
                  <div>
                    <div className="text-sm" style={{ color: "#6B7280" }}>Location</div>
                    <div className="font-semibold mt-1" style={{ color: "#003366" }}>Nilagiri Village, Salipur</div>
                  </div>
                  <div>
                    <div className="text-sm" style={{ color: "#6B7280" }}>Approved by</div>
                    <div className="font-semibold mt-1" style={{ color: "#003366" }}>District Officer</div>
                  </div>
                </div>

                <div className="p-3 rounded-lg mb-4" style={{ backgroundColor: "#EFF6FF" }}>
                  <div className="text-sm font-semibold mb-1" style={{ color: "#1E40AF" }}>Action Required:</div>
                  <div className="text-sm" style={{ color: "#1E40AF" }}>
                    Collect blood sample, submit to DDL Cuttack
                  </div>
                  <div className="text-xs mt-1" style={{ color: "#6B7280" }}>
                    Approved: 22 May 08:30 AM
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button
                    className="flex-1"
                    style={{ backgroundColor: "#10B981", color: "white" }}
                    onClick={() => navigate("/request/SR-2025-1040/action")}
                  >
                    Mark as Actioned
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => navigate("/request/SR-2025-1040/action")}
                  >
                    View Approval Details
                  </Button>
                </div>
              </Card>

              {/* IN PROGRESS - PENDING DATA ENTRY */}
              <Card className="p-6 border-2" style={{ borderColor: "#F97316" }}>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Badge style={{ backgroundColor: "#F97316", color: "white" }}>
                      🟠 IN PROGRESS
                    </Badge>
                  </div>
                  <span className="text-sm font-medium" style={{ color: "#6B7280" }}>SR-2025-1041</span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="text-sm" style={{ color: "#6B7280" }}>Request Type</div>
                    <div className="flex items-center gap-2 mt-1">
                      <Pill className="w-5 h-5" style={{ color: "#003366" }} />
                      <span className="font-semibold" style={{ color: "#003366" }}>Medicine Request</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm" style={{ color: "#6B7280" }}>Farmer</div>
                    <div className="font-semibold mt-1" style={{ color: "#003366" }}>Sunita Behera | OD2345</div>
                  </div>
                  <div>
                    <div className="text-sm" style={{ color: "#6B7280" }}>Location</div>
                    <div className="font-semibold mt-1" style={{ color: "#003366" }}>Brahmagiri Village</div>
                  </div>
                  <div>
                    <div className="text-sm" style={{ color: "#6B7280" }}>Assigned</div>
                    <div className="font-semibold mt-1" style={{ color: "#003366" }}>22 May 09:15 AM</div>
                  </div>
                </div>

                <div className="p-3 rounded-lg mb-4" style={{ backgroundColor: "#FFEDD5" }}>
                  <div className="text-sm font-semibold" style={{ color: "#9A3412" }}>
                    Next step: Enter medicine administered details
                  </div>
                </div>

                <Button className="w-full" style={{ backgroundColor: "#FF6600", color: "white" }}>
                  Enter Service Details
                </Button>
              </Card>

              {/* ASSIGNED - AWAITING ACTION */}
              <Card className="p-6 border-2" style={{ borderColor: "#EAB308" }}>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Badge style={{ backgroundColor: "#EAB308", color: "white" }}>
                      🟡 AWAITING YOUR ACTION
                    </Badge>
                  </div>
                  <span className="text-sm font-medium" style={{ color: "#6B7280" }}>SR-2025-1042</span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="text-sm" style={{ color: "#6B7280" }}>Request Type</div>
                    <div className="flex items-center gap-2 mt-1">
                      <Circle className="w-5 h-5" style={{ color: "#003366" }} />
                      <span className="font-semibold" style={{ color: "#003366" }}>AI Service</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm" style={{ color: "#6B7280" }}>Farmer</div>
                    <div className="font-semibold mt-1" style={{ color: "#003366" }}>Ramesh Pradhan | OD1234</div>
                  </div>
                  <div>
                    <div className="text-sm" style={{ color: "#6B7280" }}>Preferred Slot</div>
                    <div className="font-semibold mt-1" style={{ color: "#003366" }}>Morning (9:00 AM)</div>
                  </div>
                  <div>
                    <div className="text-sm" style={{ color: "#6B7280" }}>Location</div>
                    <div className="font-semibold mt-1" style={{ color: "#003366" }}>Salipur Village</div>
                  </div>
                </div>

                <Button className="w-full" style={{ backgroundColor: "#FF6600", color: "white" }}>
                  Start Service Entry
                </Button>
              </Card>

              {/* AWAITING APPROVAL */}
              <Card className="p-6 border-2" style={{ borderColor: "#3B82F6" }}>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Badge style={{ backgroundColor: "#3B82F6", color: "white" }}>
                      🔵 APPROVAL PENDING
                    </Badge>
                  </div>
                  <span className="text-sm font-medium" style={{ color: "#6B7280" }}>SR-2025-1043</span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="text-sm" style={{ color: "#6B7280" }}>Request Type</div>
                    <div className="flex items-center gap-2 mt-1">
                      <Pill className="w-5 h-5" style={{ color: "#003366" }} />
                      <span className="font-semibold" style={{ color: "#003366" }}>Medicine Request</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm" style={{ color: "#6B7280" }}>Farmer</div>
                    <div className="font-semibold mt-1" style={{ color: "#003366" }}>Priya Sahoo</div>
                  </div>
                  <div>
                    <div className="text-sm" style={{ color: "#6B7280" }}>Data Entered</div>
                    <div className="font-semibold mt-1" style={{ color: "#003366" }}>21 May 4:30 PM</div>
                  </div>
                  <div>
                    <div className="text-sm" style={{ color: "#6B7280" }}>Currently with</div>
                    <div className="font-semibold mt-1" style={{ color: "#003366" }}>Block Officer</div>
                  </div>
                </div>

                <div className="p-3 rounded-lg mb-4" style={{ backgroundColor: "#EFF6FF" }}>
                  <div className="text-sm mb-2" style={{ color: "#1E40AF" }}>
                    Approval Workflow:
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#10B981" }} />
                      <span className="text-xs" style={{ color: "#6B7280" }}>AIT</span>
                    </div>
                    <div className="w-6 border-t" style={{ borderColor: "#3B82F6" }} />
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: "#3B82F6" }} />
                      <span className="text-xs font-semibold" style={{ color: "#3B82F6" }}>Block</span>
                    </div>
                    <div className="w-6 border-t" style={{ borderColor: "#D1D5DB" }} />
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#D1D5DB" }} />
                      <span className="text-xs" style={{ color: "#9CA3AF" }}>District</span>
                    </div>
                    <div className="w-6 border-t" style={{ borderColor: "#D1D5DB" }} />
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#D1D5DB" }} />
                      <span className="text-xs" style={{ color: "#9CA3AF" }}>Directorate</span>
                    </div>
                  </div>
                </div>

                <Button variant="outline" className="w-full">
                  View Request Status
                </Button>
              </Card>

              {/* COMPLETED */}
              <Card className="p-6 border" style={{ borderColor: "#E5E7EB" }}>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Badge style={{ backgroundColor: "#6B7280", color: "white" }}>
                      ✅ COMPLETED
                    </Badge>
                  </div>
                  <span className="text-sm font-medium" style={{ color: "#6B7280" }}>SR-2025-1039</span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="text-sm" style={{ color: "#6B7280" }}>Request Type</div>
                    <div className="flex items-center gap-2 mt-1">
                      <Circle className="w-5 h-5" style={{ color: "#003366" }} />
                      <span className="font-semibold" style={{ color: "#003366" }}>AI Service</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm" style={{ color: "#6B7280" }}>Farmer</div>
                    <div className="font-semibold mt-1" style={{ color: "#003366" }}>Bikash Jena</div>
                  </div>
                  <div>
                    <div className="text-sm" style={{ color: "#6B7280" }}>Completed</div>
                    <div className="font-semibold mt-1" style={{ color: "#003366" }}>21 May 11:15 AM</div>
                  </div>
                  <div>
                    <div className="text-sm" style={{ color: "#6B7280" }}>Farmer Rating</div>
                    <div className="flex items-center gap-1 mt-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="w-4 h-4 fill-current" style={{ color: "#EAB308" }} />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-lg mb-4" style={{ backgroundColor: "#F3F4F6" }}>
                  <div className="text-sm" style={{ color: "#6B7280" }}>
                    OTP verified ✓
                  </div>
                </div>

                <Button variant="outline" className="w-full">
                  View Summary
                </Button>
              </Card>
            </div>

            <div className="text-sm text-center" style={{ color: "#6B7280" }}>
              Showing 5 of 12 requests
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
