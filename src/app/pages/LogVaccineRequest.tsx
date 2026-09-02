import { useState } from "react";
import { useNavigate } from "react-router";
import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";
import { ScopeBadge } from "../components/ScopeBadge";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Textarea } from "../components/ui/textarea";
import { Input } from "../components/ui/input";
import { FarmerIdentificationStep } from "../components/FarmerIdentificationStep";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Syringe, ArrowLeft } from "lucide-react";

export function LogVaccineRequest() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const [farmerData, setFarmerData] = useState<any>(null);
  const [animalData, setAnimalData] = useState<any>(null);

  const [purpose, setPurpose] = useState("routine");
  const [disease, setDisease] = useState("fmd");
  const [vaccine, setVaccine] = useState("FMD Vaccine");
  const [batch, setBatch] = useState("VB-2025-0441");
  const [quantity, setQuantity] = useState("2");
  const [route, setRoute] = useState("intramuscular");
  const [dateAdministered, setDateAdministered] = useState("2025-05-22");
  const [boosterRequired, setBoosterRequired] = useState(true);
  const [boosterDate, setBoosterDate] = useState("2025-08-21");
  const [charges, setCharges] = useState("150");
  const [paymentStatus, setPaymentStatus] = useState("received");
  const [notes, setNotes] = useState("Routine FMD booster administered, animal in good health");

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
                  <Syringe className="w-8 h-8" style={{ color: "#10B981" }} />
                </div>
                <h2 className="text-xl font-bold mb-2" style={{ color: "#003366" }}>
                  Vaccination Recorded: VR-2025-0441
                </h2>
                <p className="text-sm mb-1" style={{ color: "#6B7280" }}>
                  Bharat Pashudhan updated ✓
                </p>
                <p className="text-sm mb-1" style={{ color: "#6B7280" }}>
                  Booster reminder scheduled ✓
                </p>
                <p className="text-sm mb-1" style={{ color: "#6B7280" }}>
                  Stock updated: 43 doses remaining
                </p>
                <p className="text-sm mb-6" style={{ color: "#6B7280" }}>
                  SMS sent to farmer ✓
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
              <button onClick={() => (step === 1 ? navigate("/log-request") : setStep(step - 1))}>
                <ArrowLeft className="w-5 h-5" style={{ color: "#6B7280" }} />
              </button>
              <div>
                <h1 className="text-2xl font-bold" style={{ color: "#003366" }}>
                  Vaccination Request
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
                      Vaccination Details
                    </h2>
                  </div>

                  <Card className="p-4" style={{ backgroundColor: "#F9FAFB" }}>
                    <div className="flex items-center gap-2 text-sm mb-3">
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
                    <div className="text-xs p-3 rounded" style={{ backgroundColor: "#FFF7ED", color: "#92400E" }}>
                      Vaccination History: Last FMD: 12 Jan 2025 (4 months ago) | Last HS: 05 Aug 2024 | Due for booster: FMD due Jun 2025 🟡
                    </div>
                  </Card>

                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: "#374151" }}>
                      Vaccination Purpose:
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { value: "routine", label: "Routine scheduled vaccination" },
                        { value: "booster", label: "Booster dose" },
                        { value: "outbreak", label: "Outbreak prevention" },
                        { value: "first-time", label: "First time vaccination" },
                      ].map((p) => (
                        <button
                          key={p.value}
                          onClick={() => setPurpose(p.value)}
                          className="p-3 rounded-lg border-2 text-left transition-all"
                          style={{
                            borderColor: purpose === p.value ? "#A855F7" : "#E5E7EB",
                            backgroundColor: purpose === p.value ? "#F3E8FF" : "white",
                          }}
                        >
                          <span className="text-sm font-medium" style={{ color: "#003366" }}>
                            {p.label}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: "#374151" }}>
                      Disease to Vaccinate Against:
                    </label>
                    <Select value={disease} onValueChange={setDisease}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="fmd">FMD</SelectItem>
                        <SelectItem value="hs">HS</SelectItem>
                        <SelectItem value="bq">BQ</SelectItem>
                        <SelectItem value="ppr">PPR</SelectItem>
                        <SelectItem value="brucellosis">Brucellosis</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: "#374151" }}>
                      Vaccine Selected:
                    </label>
                    <Select value={vaccine} onValueChange={setVaccine}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="FMD Vaccine">FMD Vaccine</SelectItem>
                        <SelectItem value="HS Vaccine">HS Vaccine</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: "#374151" }}>
                        Batch:
                      </label>
                      <Select value={batch} onValueChange={setBatch}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="VB-2025-0441">VB-2025-0441</SelectItem>
                          <SelectItem value="VB-2025-0442">VB-2025-0442</SelectItem>
                        </SelectContent>
                      </Select>
                      <p className="text-xs mt-1" style={{ color: "#10B981" }}>
                        Expiry: 15 Jun 2025 🟢 Valid
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: "#374151" }}>
                        Quantity Administered:
                      </label>
                      <Input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: "#374151" }}>
                      Route of Administration:
                    </label>
                    <div className="flex gap-3">
                      {["intramuscular", "subcutaneous", "oral"].map((r) => (
                        <button
                          key={r}
                          onClick={() => setRoute(r)}
                          className="px-4 py-2 rounded border text-sm capitalize"
                          style={{
                            borderColor: route === r ? "#A855F7" : "#E5E7EB",
                            backgroundColor: route === r ? "#F3E8FF" : "white",
                          }}
                        >
                          {r}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: "#374151" }}>
                      User Charges Collected:
                    </label>
                    <div className="flex gap-4 items-center">
                      <Input type="number" value={charges} onChange={(e) => setCharges(e.target.value)} className="w-32" placeholder="₹" />
                      <div className="flex gap-3">
                        {["received", "pending", "waived"].map((status) => (
                          <button
                            key={status}
                            onClick={() => setPaymentStatus(status)}
                            className="px-3 py-2 rounded border text-sm capitalize"
                            style={{
                              borderColor: paymentStatus === status ? "#10B981" : "#E5E7EB",
                              backgroundColor: paymentStatus === status ? "#D1FAE5" : "white",
                            }}
                          >
                            {status}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <Card className="p-4" style={{ backgroundColor: "#FFF7ED", borderColor: "#F59E0B" }}>
                    <p className="text-sm mb-2" style={{ color: "#92400E" }}>
                      <strong>Current LAC Stock: FMD Vaccine: 45 doses 🟡 Low</strong>
                    </p>
                    <p className="text-xs" style={{ color: "#92400E" }}>
                      Warning: Stock low at Bakshi Ka Talab LAC. Consider raising restocking request.
                    </p>
                    <button className="text-xs font-medium mt-2" style={{ color: "#F59E0B" }}>
                      [Raise Restocking Request]
                    </button>
                  </Card>

                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: "#374151" }}>
                      Notes:
                    </label>
                    <Textarea rows={3} value={notes} onChange={(e) => setNotes(e.target.value)} />
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
                      VACCINATION RECORD
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
                        <span style={{ color: "#6B7280" }}>Vaccine:</span>
                        <span className="font-medium" style={{ color: "#003366" }}>
                          FMD Vaccine
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span style={{ color: "#6B7280" }}>Batch:</span>
                        <span className="font-medium" style={{ color: "#003366" }}>
                          VB-2025-0441
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span style={{ color: "#6B7280" }}>Qty:</span>
                        <span className="font-medium" style={{ color: "#003366" }}>
                          2 doses
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span style={{ color: "#6B7280" }}>Date:</span>
                        <span className="font-medium" style={{ color: "#003366" }}>
                          22 May 2025
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span style={{ color: "#6B7280" }}>Booster due:</span>
                        <span className="font-medium" style={{ color: "#003366" }}>
                          21 Aug 2025
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span style={{ color: "#6B7280" }}>Charges:</span>
                        <span className="font-medium" style={{ color: "#003366" }}>
                          ₹150 ✓ Received
                        </span>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4" style={{ backgroundColor: "#EFF6FF", borderColor: "#3B82F6" }}>
                    <p className="text-sm mb-2" style={{ color: "#1E40AF" }}>
                      Vaccination record will be saved directly to the system. Bharat Pashudhan will be updated. Booster reminder will be sent to farmer on 21 Aug 2025. Stock at Bakshi Ka Talab LAC updated.
                    </p>
                    <p className="text-xs font-semibold" style={{ color: "#1E40AF" }}>
                      Stock update preview: FMD Vaccine: 45 → 43 doses
                    </p>
                  </Card>

                  <div className="flex gap-3 justify-end">
                    <Button onClick={() => setStep(2)} variant="outline">
                      ← Edit Details
                    </Button>
                    <Button onClick={handleSubmit} style={{ backgroundColor: "#FF6600", color: "white" }}>
                      ✓ Submit & Record Vaccination
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
