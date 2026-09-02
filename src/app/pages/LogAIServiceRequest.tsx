import { useState } from "react";
import { useNavigate } from "react-router";
import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";
import { ScopeBadge } from "../components/ScopeBadge";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Textarea } from "../components/ui/textarea";
import { FarmerIdentificationStep } from "../components/FarmerIdentificationStep";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Circle, ArrowLeft } from "lucide-react";

export function LogAIServiceRequest() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const [farmerData, setFarmerData] = useState<any>(null);
  const [animalData, setAnimalData] = useState<any>(null);

  const [heatSigns, setHeatSigns] = useState("yes");
  const [heatDate, setHeatDate] = useState("2025-05-22");
  const [semenType, setSemenType] = useState("sex-sorted-cattle");
  const [semenDose, setSemenDose] = useState("SC-2025-0441");
  const [serviceDate, setServiceDate] = useState("2025-05-22");
  const [timeSlot, setTimeSlot] = useState("afternoon");
  const [notes, setNotes] = useState("Cow showing strong heat signs since morning, owner confirmed");

  const handleFarmerComplete = (farmer: any, animal: any) => {
    setFarmerData(farmer);
    setAnimalData(animal);
    setStep(2);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex min-h-screen" style={{ backgroundColor: "#F9FAFB" }}>
        <Sidebar activeRoute="/service-requests" />
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="flex-1 p-6">
            <div className="max-w-3xl mx-auto">
              <Card className="p-8 text-center">
                <div
                  className="w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-4"
                  style={{ backgroundColor: "#D1FAE5" }}
                >
                  <Circle className="w-8 h-8" style={{ color: "#10B981" }} />
                </div>
                <h2 className="text-xl font-bold mb-2" style={{ color: "#003366" }}>
                  Request Logged: SR-2025-1042
                </h2>
                <p className="text-sm mb-1" style={{ color: "#6B7280" }}>
                  Recorded in: Semen Module
                </p>
                <p className="text-sm mb-6" style={{ color: "#6B7280" }}>
                  Next step: Complete service and log utilization details
                </p>
                <div className="flex gap-3 justify-center">
                  <Button onClick={() => navigate("/my-requests")} variant="outline">
                    View in My Requests
                  </Button>
                  <Button
                    onClick={() => {
                      setSubmitted(false);
                      setStep(1);
                    }}
                    style={{ backgroundColor: "#FF6600", color: "white" }}
                  >
                    Log Another Request
                  </Button>
                </div>
              </Card>
            </div>
          </main>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen" style={{ backgroundColor: "#F9FAFB" }}>
      <Sidebar activeRoute="/service-requests" />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="flex items-center gap-3">
              <button onClick={() => step === 1 ? navigate("/log-request") : setStep(step - 1)}>
                <ArrowLeft className="w-5 h-5" style={{ color: "#6B7280" }} />
              </button>
              <div>
                <h1 className="text-2xl font-bold" style={{ color: "#003366" }}>
                  AI Service Request
                </h1>
                <ScopeBadge scope="lac" scopeLabel="Bakshi Ka Talab LAC" subLabel="Lucknow District" />
              </div>
            </div>

            <Card className="p-8">
              {step === 1 && <FarmerIdentificationStep onComplete={handleFarmerComplete} />}

              {step === 2 && (
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: "#10B981" }}>
                          <span className="text-white font-bold text-sm">✓</span>
                        </div>
                        <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: "#FF6600" }}>
                          <span className="text-white font-bold text-sm">●</span>
                        </div>
                        <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: "#E5E7EB" }}>
                          <span className="text-gray-400 font-bold text-sm">○</span>
                        </div>
                      </div>
                      <span className="text-sm ml-2" style={{ color: "#6B7280" }}>
                        Step 2 of 3
                      </span>
                    </div>
                    <h2 className="text-xl font-bold" style={{ color: "#003366" }}>
                      AI Service Details
                    </h2>
                  </div>

                  <Card className="p-4" style={{ backgroundColor: "#F9FAFB" }}>
                    <div className="flex items-center gap-2 text-sm">
                      <span style={{ color: "#6B7280" }}>Farmer:</span>
                      <span className="font-semibold" style={{ color: "#003366" }}>
                        {farmerData?.name} ✓
                      </span>
                      <span className="mx-2">|</span>
                      <span style={{ color: "#6B7280" }}>Animal:</span>
                      <span className="font-semibold" style={{ color: "#003366" }}>
                        {animalData?.id} {animalData?.breed} ✓
                      </span>
                    </div>
                  </Card>

                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: "#374151" }}>
                      Heat Signs Observed:
                    </label>
                    <div className="flex gap-4">
                      {["yes", "no", "not-sure"].map((option) => (
                        <button
                          key={option}
                          onClick={() => setHeatSigns(option)}
                          className="px-4 py-2 rounded-lg border-2 transition-all"
                          style={{
                            borderColor: heatSigns === option ? "#FF6600" : "#E5E7EB",
                            backgroundColor: heatSigns === option ? "#FFF7ED" : "white",
                          }}
                        >
                          <span className="text-sm font-medium" style={{ color: "#003366" }}>
                            {option === "yes" ? "Yes" : option === "no" ? "No" : "Not Sure"}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: "#374151" }}>
                      Semen Type Required:
                    </label>
                    <Select value={semenType} onValueChange={setSemenType}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="normal-cattle">Normal Cattle Semen</SelectItem>
                        <SelectItem value="sex-sorted-cattle">Sex Sorted Cattle Semen</SelectItem>
                        <SelectItem value="normal-buffalo">Normal Buffalo Semen</SelectItem>
                        <SelectItem value="normal-goat">Normal Goat Semen</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: "#374151" }}>
                      Semen Dose Code:
                    </label>
                    <Select value={semenDose} onValueChange={setSemenDose}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="SC-2025-0441">SC-2025-0441</SelectItem>
                        <SelectItem value="SC-2025-0442">SC-2025-0442</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-xs mt-1 flex items-center gap-1" style={{ color: "#10B981" }}>
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "#10B981" }} />
                      Stock shown: 82 doses available
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: "#374151" }}>
                      Preferred Service Date:
                    </label>
                    <input
                      type="date"
                      value={serviceDate}
                      onChange={(e) => setServiceDate(e.target.value)}
                      className="w-full px-3 py-2 border rounded-lg"
                      style={{ borderColor: "#E5E7EB" }}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: "#374151" }}>
                      Preferred Time Slot:
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { value: "morning", label: "Morning (7-11 AM)" },
                        { value: "afternoon", label: "Afternoon (11-3 PM)" },
                        { value: "evening", label: "Evening (3-6 PM)" },
                      ].map((slot) => (
                        <button
                          key={slot.value}
                          onClick={() => setTimeSlot(slot.value)}
                          className="p-3 rounded-lg border-2 text-center transition-all"
                          style={{
                            borderColor: timeSlot === slot.value ? "#FF6600" : "#E5E7EB",
                            backgroundColor: timeSlot === slot.value ? "#FFF7ED" : "white",
                          }}
                        >
                          <span className="text-sm font-medium" style={{ color: "#003366" }}>
                            {slot.label}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: "#374151" }}>
                      Additional Notes:
                    </label>
                    <Textarea
                      rows={3}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Enter any additional information..."
                    />
                  </div>

                  <div className="flex justify-end">
                    <Button onClick={() => setStep(3)} style={{ backgroundColor: "#FF6600", color: "white" }}>
                      Next: Review & Submit →
                    </Button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: "#10B981" }}>
                          <span className="text-white font-bold text-sm">✓</span>
                        </div>
                        <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: "#10B981" }}>
                          <span className="text-white font-bold text-sm">✓</span>
                        </div>
                        <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: "#FF6600" }}>
                          <span className="text-white font-bold text-sm">●</span>
                        </div>
                      </div>
                      <span className="text-sm ml-2" style={{ color: "#6B7280" }}>
                        Step 3 of 3
                      </span>
                    </div>
                    <h2 className="text-xl font-bold" style={{ color: "#003366" }}>
                      Review & Submit
                    </h2>
                  </div>

                  <Card className="p-6" style={{ backgroundColor: "#F9FAFB" }}>
                    <h3 className="font-semibold mb-4" style={{ color: "#003366" }}>
                      AI SERVICE REQUEST
                    </h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span style={{ color: "#6B7280" }}>Farmer:</span>
                        <span className="font-medium" style={{ color: "#003366" }}>
                          {farmerData?.name}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span style={{ color: "#6B7280" }}>Animal:</span>
                        <span className="font-medium" style={{ color: "#003366" }}>
                          {animalData?.id} {animalData?.breed}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span style={{ color: "#6B7280" }}>Semen:</span>
                        <span className="font-medium" style={{ color: "#003366" }}>
                          Sex Sorted Cattle
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span style={{ color: "#6B7280" }}>Dose:</span>
                        <span className="font-medium" style={{ color: "#003366" }}>
                          {semenDose}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span style={{ color: "#6B7280" }}>Date:</span>
                        <span className="font-medium" style={{ color: "#003366" }}>
                          22 May 2025, Afternoon
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span style={{ color: "#6B7280" }}>Technician:</span>
                        <span className="font-medium" style={{ color: "#003366" }}>
                          Rajan Kumar (me)
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span style={{ color: "#6B7280" }}>LAC:</span>
                        <span className="font-medium" style={{ color: "#003366" }}>
                          Bakshi Ka Talab LAC
                        </span>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4" style={{ backgroundColor: "#EFF6FF", borderColor: "#3B82F6" }}>
                    <p className="text-sm" style={{ color: "#1E40AF" }}>
                      This request will be recorded in the system. After service is completed, enter utilization details and submit for Block Officer review.
                    </p>
                  </Card>

                  <div className="flex gap-3 justify-end">
                    <Button onClick={() => setStep(2)} variant="outline">
                      ← Edit Details
                    </Button>
                    <Button onClick={handleSubmit} style={{ backgroundColor: "#FF6600", color: "white" }}>
                      ✓ Submit Request
                    </Button>
                  </div>
                </div>
              )}
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
