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
import { Pill, ArrowLeft } from "lucide-react";

export function LogMedicineRequest() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const [farmerData, setFarmerData] = useState<any>(null);
  const [animalData, setAnimalData] = useState<any>(null);

  const [symptoms, setSymptoms] = useState<string[]>(["fever", "lethargy", "diarrhoea"]);
  const [duration, setDuration] = useState("1-3-days");
  const [severity, setSeverity] = useState("moderate");
  const [medicines, setMedicines] = useState([
    { name: "Oxytetracycline", sku: "MED-002", quantity: 2, route: "injection" },
  ]);
  const [charges, setCharges] = useState("200");
  const [paymentReceived, setPaymentReceived] = useState("yes");
  const [followUpRequired, setFollowUpRequired] = useState(true);
  const [followUpDate, setFollowUpDate] = useState("2025-05-29");
  const [notes, setNotes] = useState("Animal has fever since 2 days, administered IV antibiotics on site");

  const symptomOptions = [
    "fever", "lethargy", "not-eating", "diarrhoea",
    "limping", "nasal-discharge", "swelling", "skin-issues", "difficulty-breathing",
  ];

  const handleFarmerComplete = (farmer: any, animal: any) => {
    setFarmerData(farmer);
    setAnimalData(animal);
    setStep(2);
  };

  const toggleSymptom = (symptom: string) => {
    setSymptoms((prev) =>
      prev.includes(symptom) ? prev.filter((s) => s !== symptom) : [...prev, symptom]
    );
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
                  <Pill className="w-8 h-8" style={{ color: "#10B981" }} />
                </div>
                <h2 className="text-xl font-bold mb-2" style={{ color: "#003366" }}>
                  Medicine Record Saved: MR-2025-0891
                </h2>
                <p className="text-sm mb-1" style={{ color: "#6B7280" }}>
                  Submitted to: BVO Dr. Sarita Singh
                </p>
                <p className="text-sm mb-1" style={{ color: "#6B7280" }}>
                  Stock updated at Bakshi Ka Talab LAC ✓
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
                  Medicine Request
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
                      Medicine Details
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
                    <label className="block text-sm font-medium mb-3" style={{ color: "#374151" }}>
                      Symptoms Reported:
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { value: "fever", label: "Fever" },
                        { value: "lethargy", label: "Lethargy" },
                        { value: "not-eating", label: "Not Eating" },
                        { value: "diarrhoea", label: "Diarrhoea" },
                        { value: "limping", label: "Limping" },
                        { value: "nasal-discharge", label: "Nasal Discharge" },
                        { value: "swelling", label: "Swelling" },
                        { value: "skin-issues", label: "Skin Issues" },
                        { value: "difficulty-breathing", label: "Difficulty Breathing" },
                      ].map((symptom) => (
                        <button
                          key={symptom.value}
                          onClick={() => toggleSymptom(symptom.value)}
                          className="p-2 rounded border text-left text-sm transition-all"
                          style={{
                            borderColor: symptoms.includes(symptom.value) ? "#10B981" : "#E5E7EB",
                            backgroundColor: symptoms.includes(symptom.value) ? "#D1FAE5" : "white",
                          }}
                        >
                          <span className="mr-2">{symptoms.includes(symptom.value) ? "☑" : "☐"}</span>
                          {symptom.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: "#374151" }}>
                      Duration of Symptoms:
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { value: "less-24h", label: "Less than 24 hours" },
                        { value: "1-3-days", label: "1-3 days" },
                        { value: "more-3-days", label: "More than 3 days" },
                      ].map((dur) => (
                        <button
                          key={dur.value}
                          onClick={() => setDuration(dur.value)}
                          className="p-3 rounded-lg border-2 text-center transition-all"
                          style={{
                            borderColor: duration === dur.value ? "#FF6600" : "#E5E7EB",
                            backgroundColor: duration === dur.value ? "#FFF7ED" : "white",
                          }}
                        >
                          <span className="text-xs font-medium" style={{ color: "#003366" }}>
                            {dur.label}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: "#374151" }}>
                      Severity Assessment:
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { value: "mild", label: "Mild — Animal is active" },
                        { value: "moderate", label: "Moderate — Some distress visible" },
                        { value: "severe", label: "Severe — Animal unable to stand" },
                      ].map((sev) => (
                        <button
                          key={sev.value}
                          onClick={() => setSeverity(sev.value)}
                          className="p-3 rounded-lg border-2 text-center transition-all"
                          style={{
                            borderColor: severity === sev.value ? "#FF6600" : "#E5E7EB",
                            backgroundColor: severity === sev.value ? "#FFF7ED" : "white",
                          }}
                        >
                          <span className="text-xs font-medium" style={{ color: "#003366" }}>
                            {sev.label}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: "#374151" }}>
                      Medicine Administered:
                    </label>
                    <div className="space-y-4">
                      <Card className="p-4">
                        <div className="grid grid-cols-2 gap-4 mb-3">
                          <div>
                            <label className="block text-xs mb-1" style={{ color: "#6B7280" }}>
                              Medicine Name
                            </label>
                            <Select defaultValue="oxytetracycline">
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="oxytetracycline">Oxytetracycline</SelectItem>
                                <SelectItem value="multivitamin">Multivitamin Injection</SelectItem>
                              </SelectContent>
                            </Select>
                            <p className="text-xs mt-1" style={{ color: "#6B7280" }}>
                              SKU: MED-002
                            </p>
                          </div>
                          <div>
                            <label className="block text-xs mb-1" style={{ color: "#6B7280" }}>
                              Quantity
                            </label>
                            <Input type="number" defaultValue={2} />
                          </div>
                        </div>
                        <div>
                          <label className="block text-xs mb-2" style={{ color: "#6B7280" }}>
                            Route:
                          </label>
                          <div className="flex gap-3">
                            {["Injection", "Oral", "Topical"].map((route) => (
                              <button
                                key={route}
                                className="px-3 py-1 rounded border text-xs"
                                style={{
                                  borderColor: route === "Injection" ? "#10B981" : "#E5E7EB",
                                  backgroundColor: route === "Injection" ? "#D1FAE5" : "white",
                                }}
                              >
                                {route}
                              </button>
                            ))}
                          </div>
                        </div>
                        <p className="text-xs mt-3 flex items-center gap-1" style={{ color: "#10B981" }}>
                          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "#10B981" }} />
                          Oxytetracycline: 34 units available
                        </p>
                      </Card>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: "#374151" }}>
                      User Charges Collected:
                    </label>
                    <div className="flex gap-4 items-center">
                      <Input type="number" value={charges} onChange={(e) => setCharges(e.target.value)} className="w-32" placeholder="₹" />
                      <div className="flex gap-3">
                        {[
                          { value: "yes", label: "Received" },
                          { value: "no", label: "Pending" },
                          { value: "waived", label: "Waived" },
                        ].map((payment) => (
                          <button
                            key={payment.value}
                            onClick={() => setPaymentReceived(payment.value)}
                            className="px-3 py-2 rounded border text-sm"
                            style={{
                              borderColor: paymentReceived === payment.value ? "#10B981" : "#E5E7EB",
                              backgroundColor: paymentReceived === payment.value ? "#D1FAE5" : "white",
                            }}
                          >
                            {payment.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: "#374151" }}>
                      Additional Notes:
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
                      MEDICINE SERVICE RECORD
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
                        <span style={{ color: "#6B7280" }}>Symptoms:</span>
                        <span className="font-medium" style={{ color: "#003366" }}>
                          Fever, Lethargy, Diarrhoea
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span style={{ color: "#6B7280" }}>Severity:</span>
                        <span className="font-medium" style={{ color: "#003366" }}>
                          Moderate
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span style={{ color: "#6B7280" }}>Medicines:</span>
                        <span className="font-medium" style={{ color: "#003366" }}>
                          Oxytetracycline × 2 vials
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span style={{ color: "#6B7280" }}>Charges:</span>
                        <span className="font-medium" style={{ color: "#003366" }}>
                          ₹200 ✓ Received
                        </span>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4" style={{ backgroundColor: "#EFF6FF", borderColor: "#3B82F6" }}>
                    <p className="text-sm mb-2" style={{ color: "#1E40AF" }}>
                      Medicine record will be saved to the system and submitted to Block Officer (Dr. Sarita Singh) for review and approval. Stock at Bakshi Ka Talab LAC will be updated automatically.
                    </p>
                    <p className="text-xs font-semibold" style={{ color: "#1E40AF" }}>
                      Stock update preview: Oxytetracycline: 34 → 32 units
                    </p>
                  </Card>

                  <div className="flex gap-3 justify-end">
                    <Button onClick={() => setStep(2)} variant="outline">
                      ← Edit Details
                    </Button>
                    <Button onClick={handleSubmit} style={{ backgroundColor: "#FF6600", color: "white" }}>
                      ✓ Submit & Update Stock
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
