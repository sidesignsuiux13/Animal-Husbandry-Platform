import { useState } from "react";
import { useNavigate } from "react-router";
import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Card } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { Label } from "../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import {
  ChevronRight,
  CheckCircle2,
  AlertCircle,
  Microscope,
  Upload,
  WifiOff,
} from "lucide-react";

export function PostApprovalAction() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(["", "", "", ""]);

  const handleOtpChange = (index: number, value: string) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
    }
  };

  return (
    <div className="flex min-h-screen" style={{ backgroundColor: "#F9FAFB" }}>
      <Sidebar activeRoute="/my-requests" />

      <div className="flex-1 flex flex-col">
        <Header />

        <main className="flex-1 p-6">
          <div className="max-w-5xl mx-auto space-y-6">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm" style={{ color: "#6B7280" }}>
              <button onClick={() => navigate("/dashboard/field-technician")} className="hover:underline">
                Dashboard
              </button>
              <ChevronRight className="w-4 h-4" />
              <button onClick={() => navigate("/my-requests")} className="hover:underline">
                My Requests
              </button>
              <ChevronRight className="w-4 h-4" />
              <span style={{ color: "#003366" }}>SR-2025-1040</span>
            </div>

            {/* Page header */}
            <div>
              <h1 className="text-2xl font-bold" style={{ color: "#003366" }}>
                Approved Request — Act Now
              </h1>
            </div>

            {/* Workflow progress banner */}
            <Card className="p-4" style={{ backgroundColor: "#FFF7ED", borderColor: "#FDBA74" }}>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-1 h-6 rounded" style={{ backgroundColor: "#FF6600" }} />
                <span className="font-semibold" style={{ color: "#9A3412" }}>
                  Workflow Progress
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="px-3 py-1.5 rounded-full font-medium text-sm flex items-center gap-1" style={{ backgroundColor: "#D1FAE5", color: "#065F46" }}>
                  <CheckCircle2 className="w-4 h-4" />
                  1. Farmer Request
                </div>
                <div className="w-6 border-t-2" style={{ borderColor: "#10B981" }} />
                <div className="px-3 py-1.5 rounded-full font-medium text-sm flex items-center gap-1" style={{ backgroundColor: "#D1FAE5", color: "#065F46" }}>
                  <CheckCircle2 className="w-4 h-4" />
                  2. Technician Assigned
                </div>
                <div className="w-6 border-t-2" style={{ borderColor: "#10B981" }} />
                <div className="px-3 py-1.5 rounded-full font-medium text-sm flex items-center gap-1" style={{ backgroundColor: "#D1FAE5", color: "#065F46" }}>
                  <CheckCircle2 className="w-4 h-4" />
                  3. Data Entry
                </div>
                <div className="w-6 border-t-2" style={{ borderColor: "#10B981" }} />
                <div className="px-3 py-1.5 rounded-full font-medium text-sm flex items-center gap-1" style={{ backgroundColor: "#D1FAE5", color: "#065F46" }}>
                  <CheckCircle2 className="w-4 h-4" />
                  4. Approval
                </div>
                <div className="w-6 border-t-2" style={{ borderColor: "#FF6600" }} />
                <div className="px-3 py-1.5 rounded-full font-medium text-sm" style={{ backgroundColor: "#FF6600", color: "white" }}>
                  5. Act Now
                </div>
              </div>
            </Card>

            {/* Approval Summary Card */}
            <Card className="p-6 border-2" style={{ borderColor: "#10B981" }}>
              <div className="flex items-start justify-between mb-4">
                <Badge style={{ backgroundColor: "#10B981", color: "white" }} className="text-sm px-3 py-1">
                  ✅ APPROVED — Action Required
                </Badge>
                <span className="text-sm font-medium" style={{ color: "#6B7280" }}>
                  Request: SR-2025-1040
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <div className="text-sm" style={{ color: "#6B7280" }}>Request Type</div>
                  <div className="flex items-center gap-2 mt-1">
                    <Microscope className="w-5 h-5" style={{ color: "#003366" }} />
                    <span className="font-semibold" style={{ color: "#003366" }}>
                      Disease Sample Collection
                    </span>
                  </div>
                </div>
                <div>
                  <div className="text-sm" style={{ color: "#6B7280" }}>Farmer</div>
                  <div className="font-semibold mt-1" style={{ color: "#003366" }}>
                    Manoj Nayak
                  </div>
                </div>
                <div>
                  <div className="text-sm" style={{ color: "#6B7280" }}>Livestock</div>
                  <div className="font-semibold mt-1" style={{ color: "#003366" }}>
                    OD3456 | Murrah Buffalo
                  </div>
                </div>
                <div>
                  <div className="text-sm" style={{ color: "#6B7280" }}>Location</div>
                  <div className="font-semibold mt-1" style={{ color: "#003366" }}>
                    Nilagiri Village, Salipur
                  </div>
                </div>
              </div>

              {/* Approval Chain */}
              <div className="border-t pt-4" style={{ borderColor: "#E5E7EB" }}>
                <div className="text-sm font-semibold mb-3" style={{ color: "#374151" }}>
                  Approval Chain
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#10B981" }} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-sm" style={{ color: "#003366" }}>
                          AIT submitted
                        </span>
                        <CheckCircle2 className="w-4 h-4" style={{ color: "#10B981" }} />
                      </div>
                      <div className="text-xs" style={{ color: "#6B7280" }}>
                        21 May 4:00 PM
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#10B981" }} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-sm" style={{ color: "#003366" }}>
                          Block approved
                        </span>
                        <CheckCircle2 className="w-4 h-4" style={{ color: "#10B981" }} />
                      </div>
                      <div className="text-xs" style={{ color: "#6B7280" }}>
                        21 May 5:30 PM
                      </div>
                      <div className="text-xs mt-1 italic" style={{ color: "#6B7280" }}>
                        Note: "Urgent, collect sample ASAP"
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#10B981" }} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-sm" style={{ color: "#003366" }}>
                          District approved
                        </span>
                        <CheckCircle2 className="w-4 h-4" style={{ color: "#10B981" }} />
                      </div>
                      <div className="text-xs" style={{ color: "#6B7280" }}>
                        22 May 8:30 AM
                      </div>
                      <div className="text-xs mt-1 italic" style={{ color: "#6B7280" }}>
                        Note: "Suspected FMD, priority"
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#D1D5DB" }} />
                    </div>
                    <div className="flex-1">
                      <span className="font-medium text-sm" style={{ color: "#9CA3AF" }}>
                        Directorate — not required for this request type
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Approved Instructions */}
              <div className="mt-4 p-4 rounded-lg" style={{ backgroundColor: "#EFF6FF", borderLeft: "4px solid #3B82F6" }}>
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 mt-0.5" style={{ color: "#3B82F6" }} />
                  <div>
                    <div className="font-semibold text-sm mb-1" style={{ color: "#1E40AF" }}>
                      Instructions from District Officer:
                    </div>
                    <div className="text-sm" style={{ color: "#1E40AF" }}>
                      Collect blood sample from affected animal. Submit to DDL Cuttack marked URGENT.
                      Isolate animal from herd immediately. Report back within 24hrs.
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Log Action Form */}
            <Card className="p-6">
              <h2 className="text-lg font-semibold mb-4" style={{ color: "#003366" }}>
                Record Action Taken
              </h2>

              <div className="space-y-5">
                {/* Date and Time */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="text-sm font-medium mb-2 block" style={{ color: "#374151" }}>
                      Action Date
                    </Label>
                    <Input type="date" defaultValue="2025-05-22" />
                  </div>
                  <div>
                    <Label className="text-sm font-medium mb-2 block" style={{ color: "#374151" }}>
                      Action Time
                    </Label>
                    <Input type="time" defaultValue="11:30" />
                  </div>
                </div>

                {/* Sample collected */}
                <div>
                  <Label className="text-sm font-medium mb-2 block" style={{ color: "#374151" }}>
                    Sample collected
                  </Label>
                  <RadioGroup defaultValue="yes" className="flex gap-4">
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="yes" id="sample-yes" />
                      <Label htmlFor="sample-yes" className="cursor-pointer">Yes</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="no" id="sample-no" />
                      <Label htmlFor="sample-no" className="cursor-pointer">No</Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Sample type */}
                <div>
                  <Label className="text-sm font-medium mb-2 block" style={{ color: "#374151" }}>
                    Sample type
                  </Label>
                  <Select defaultValue="blood">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="blood">Blood</SelectItem>
                      <SelectItem value="tissue">Tissue</SelectItem>
                      <SelectItem value="swab">Swab</SelectItem>
                      <SelectItem value="milk">Milk</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Submitted to lab */}
                <div>
                  <Label className="text-sm font-medium mb-2 block" style={{ color: "#374151" }}>
                    Submitted to lab
                  </Label>
                  <Select defaultValue="ddl-cuttack">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ddl-cuttack">DDL Cuttack</SelectItem>
                      <SelectItem value="ddl-bhubaneswar">DDL Bhubaneswar</SelectItem>
                      <SelectItem value="rdl-berhampur">RDL Berhampur</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Submission ref */}
                <div>
                  <Label className="text-sm font-medium mb-2 block" style={{ color: "#374151" }}>
                    Submission reference
                  </Label>
                  <Input placeholder="DDL-2025-0247" defaultValue="DDL-2025-0247" />
                </div>

                {/* Animal isolated */}
                <div>
                  <Label className="text-sm font-medium mb-2 block" style={{ color: "#374151" }}>
                    Animal isolated
                  </Label>
                  <RadioGroup defaultValue="yes" className="flex gap-4">
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="yes" id="isolated-yes" />
                      <Label htmlFor="isolated-yes" className="cursor-pointer">Yes</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="no" id="isolated-no" />
                      <Label htmlFor="isolated-no" className="cursor-pointer">No</Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Farmer advised */}
                <div>
                  <Label className="text-sm font-medium mb-2 block" style={{ color: "#374151" }}>
                    Farmer advised
                  </Label>
                  <RadioGroup defaultValue="yes" className="flex gap-4">
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="yes" id="advised-yes" />
                      <Label htmlFor="advised-yes" className="cursor-pointer">Yes</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="no" id="advised-no" />
                      <Label htmlFor="advised-no" className="cursor-pointer">No</Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Advice given */}
                <div>
                  <Label className="text-sm font-medium mb-2 block" style={{ color: "#374151" }}>
                    Advice given
                  </Label>
                  <Textarea
                    placeholder="Isolate from herd, monitor temperature..."
                    defaultValue="Isolate from herd, monitor temperature, provide clean water, avoid contact with other animals"
                    rows={3}
                  />
                </div>

                {/* Next visit required */}
                <div>
                  <Label className="text-sm font-medium mb-2 block" style={{ color: "#374151" }}>
                    Next visit required
                  </Label>
                  <RadioGroup defaultValue="yes" className="flex gap-4">
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="yes" id="visit-yes" />
                      <Label htmlFor="visit-yes" className="cursor-pointer">Yes</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="no" id="visit-no" />
                      <Label htmlFor="visit-no" className="cursor-pointer">No</Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Next visit date */}
                <div>
                  <Label className="text-sm font-medium mb-2 block" style={{ color: "#374151" }}>
                    Next visit date
                  </Label>
                  <Input type="date" defaultValue="2025-05-29" />
                </div>

                {/* Photo upload */}
                <div>
                  <Label className="text-sm font-medium mb-2 block" style={{ color: "#374151" }}>
                    Photo evidence
                  </Label>
                  <div className="border-2 border-dashed rounded-lg p-4 text-center" style={{ borderColor: "#D1D5DB" }}>
                    <Upload className="w-8 h-8 mx-auto mb-2" style={{ color: "#9CA3AF" }} />
                    <div className="text-sm mb-1" style={{ color: "#6B7280" }}>
                      Click to upload or drag and drop
                    </div>
                    <div className="text-xs" style={{ color: "#9CA3AF" }}>
                      PNG, JPG up to 10MB
                    </div>
                    <div className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded" style={{ backgroundColor: "#D1FAE5" }}>
                      <CheckCircle2 className="w-4 h-4" style={{ color: "#059669" }} />
                      <span className="text-sm" style={{ color: "#065F46" }}>1 photo uploaded</span>
                    </div>
                  </div>
                </div>

                {/* OTP Verification */}
                <div>
                  <Label className="text-sm font-medium mb-2 block" style={{ color: "#374151" }}>
                    OTP Verification
                  </Label>
                  <div className="text-sm mb-3" style={{ color: "#6B7280" }}>
                    Enter OTP from farmer to confirm service was delivered
                  </div>
                  <div className="flex gap-2">
                    {otp.map((digit, index) => (
                      <Input
                        key={index}
                        type="text"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleOtpChange(index, e.target.value)}
                        className="w-12 h-12 text-center text-lg font-semibold"
                        placeholder="0"
                      />
                    ))}
                  </div>
                </div>

                {/* Submit button */}
                <Button className="w-full" style={{ backgroundColor: "#FF6600", color: "white" }}>
                  Submit Action Record
                </Button>
              </div>
            </Card>

            {/* Offline mode notice */}
            <Card className="p-4" style={{ backgroundColor: "#EFF6FF", borderColor: "#93C5FD" }}>
              <div className="flex items-start gap-3">
                <WifiOff className="w-5 h-5 mt-0.5" style={{ color: "#3B82F6" }} />
                <div className="flex-1">
                  <div className="font-semibold text-sm mb-1" style={{ color: "#1E40AF" }}>
                    📵 Offline mode supported
                  </div>
                  <div className="text-sm mb-2" style={{ color: "#1E40AF" }}>
                    You can log action details offline. Data will sync automatically when you are back online.
                  </div>
                  <div className="text-xs" style={{ color: "#3B82F6" }}>
                    Offline queue: <span className="font-semibold">0 items</span> pending sync
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
