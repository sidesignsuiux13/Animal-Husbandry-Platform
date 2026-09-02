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
import { Microscope, ArrowLeft, Camera, AlertTriangle } from "lucide-react";

export function LogDiseaseRequest() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const [farmerData, setFarmerData] = useState<any>(null);
  const [animalData, setAnimalData] = useState<any>(null);

  const [symptoms, setSymptoms] = useState<string[]>(["fever", "nasal-discharge", "lameness"]);
  const [duration, setDuration] = useState("1-3-days");
  const [otherAnimalsAffected, setOtherAnimalsAffected] = useState(true);
  const [affectedCount, setAffectedCount] = useState("3");
  const [suspectedDisease, setSuspectedDisease] = useState("fmd");
  const [urgency, setUrgency] = useState("urgent");
  const [sampleType, setSampleType] = useState("blood");
  const [submitTo, setSubmitTo] = useState("ddl-lucknow");
  const [actions, setActions] = useState<string[]>(["isolated", "biosecurity"]);
  const [notes, setNotes] = useState("Multiple cattle showing lameness and oral blisters. Suspected FMD. Animal isolated. Sample collected for confirmation.");

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

  const toggleAction = (action: string) => {
    setActions((prev) =>
      prev.includes(action) ? prev.filter((a) => a !== action) : [...prev, action]
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
                  style={{ backgroundColor: "#FEE2E2" }}
                >
                  <Microscope className="w-8 h-8" style={{ color: "#EF4444" }} />
                </div>
                <h2 className="text-xl font-bold mb-2" style={{ color: "#003366" }}>
                  Sample Registered: DDL-2025-0247
                </h2>
                <p className="text-sm mb-1" style={{ color: "#6B7280" }}>
                  Submitted to: DDL Lucknow
                </p>
                <p className="text-sm mb-1" style={{ color: "#EF4444" }}>
                  Urgency: 🔴 URGENT flagged
                </p>
                <p className="text-sm mb-1" style={{ color: "#6B7280" }}>
                  BVO Dr. Sarita Singh notified ✓
                </p>
                <p className="text-sm mb-6" style={{ color: "#6B7280" }}>
                  SMS sent to farmer ✓
                </p>

                <Card className="p-4 mb-6" style={{ backgroundColor: "#F9FAFB" }}>
                  <h3 className="font-semibold mb-2" style={{ color: "#003366" }}>
                    SAMPLE REGISTRATION
                  </h3>
                  <p className="text-sm mb-1" style={{ color: "#6B7280" }}>
                    Ref: DDL-2025-0247
                  </p>
                  <p className="text-sm mb-1" style={{ color: "#6B7280" }}>
                    Farmer: {farmerData?.name}
                  </p>
                  <p className="text-sm mb-1" style={{ color: "#6B7280" }}>
                    Date: 22 May 2025
                  </p>
                  <p className="text-sm" style={{ color: "#6B7280" }}>
                    Track at: DDL Lucknow
                  </p>
                </Card>

                <div className="flex gap-3 justify-center">
                  <Button variant="outline">Share via WhatsApp</Button>
                  <Button onClick={() => navigate("/disease-surveillance")} variant="outline">
                    View in Disease Module
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
                  Disease & Sample Request
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
                      Disease Details
                    </h2>
                  </div>

                  <Card className="p-4" style={{ backgroundColor: "#F9FAFB" }}>
                    <div className="flex items-center gap-2 text-sm mb-2">
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
                    <div className="text-xs" style={{ color: "#6B7280" }}>
                      Vaccination history: FMD ✓ Jan 2025 | HS ✓ Aug 2024
                    </div>
                  </Card>

                  <div>
                    <label className="block text-sm font-medium mb-3" style={{ color: "#374151" }}>
                      Symptoms Observed:
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { value: "fever", label: "🌡 Fever" },
                        { value: "nasal-discharge", label: "😮 Nasal Discharge" },
                        { value: "lameness", label: "🦵 Lameness" },
                        { value: "diarrhoea", label: "💧 Diarrhoea" },
                        { value: "respiratory", label: "🫁 Respiratory Distress" },
                        { value: "skin-lesions", label: "🩹 Skin Lesions / Blisters" },
                        { value: "sudden-death", label: "⚠ Sudden Death" },
                      ].map((symptom) => (
                        <button
                          key={symptom.value}
                          onClick={() => toggleSymptom(symptom.value)}
                          className="p-2 rounded border text-left text-sm transition-all"
                          style={{
                            borderColor: symptoms.includes(symptom.value) ? "#FF6600" : "#E5E7EB",
                            backgroundColor: symptoms.includes(symptom.value) ? "#FFF7ED" : "white",
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
                      Symptom Duration:
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { value: "less-24h", label: "Less than 24 hours" },
                        { value: "1-3-days", label: "1-3 days" },
                        { value: "more-3-days", label: "More than 3 days" },
                        { value: "more-week", label: "More than a week" },
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
                      Other animals affected?
                    </label>
                    <div className="flex gap-4 items-center">
                      <div className="flex gap-3">
                        <button
                          onClick={() => setOtherAnimalsAffected(true)}
                          className="px-4 py-2 rounded border"
                          style={{
                            borderColor: otherAnimalsAffected ? "#EF4444" : "#E5E7EB",
                            backgroundColor: otherAnimalsAffected ? "#FEE2E2" : "white",
                          }}
                        >
                          Yes
                        </button>
                        <button
                          onClick={() => setOtherAnimalsAffected(false)}
                          className="px-4 py-2 rounded border"
                          style={{
                            borderColor: !otherAnimalsAffected ? "#10B981" : "#E5E7EB",
                            backgroundColor: !otherAnimalsAffected ? "#D1FAE5" : "white",
                          }}
                        >
                          No
                        </button>
                      </div>
                      {otherAnimalsAffected && (
                        <>
                          <span className="text-sm" style={{ color: "#6B7280" }}>
                            How many?
                          </span>
                          <Input
                            type="number"
                            value={affectedCount}
                            onChange={(e) => setAffectedCount(e.target.value)}
                            className="w-24"
                          />
                        </>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: "#374151" }}>
                      Suspected Disease (technician's assessment):
                    </label>
                    <Select value={suspectedDisease} onValueChange={setSuspectedDisease}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="fmd">Foot and Mouth Disease</SelectItem>
                        <SelectItem value="hs">HS</SelectItem>
                        <SelectItem value="bq">BQ</SelectItem>
                        <SelectItem value="ppr">PPR</SelectItem>
                        <SelectItem value="brucellosis">Brucellosis</SelectItem>
                        <SelectItem value="theileriosis">Theileriosis</SelectItem>
                        <SelectItem value="unknown">Unknown</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: "#374151" }}>
                      Urgency Level:
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { value: "routine", label: "Routine — Submit for testing", color: "#10B981" },
                        { value: "urgent", label: "Urgent — Suspected outbreak", color: "#F59E0B" },
                        { value: "emergency", label: "Emergency — Multiple deaths", color: "#EF4444" },
                      ].map((urg) => (
                        <button
                          key={urg.value}
                          onClick={() => setUrgency(urg.value)}
                          className="p-3 rounded-lg border-2 text-center transition-all"
                          style={{
                            borderColor: urgency === urg.value ? urg.color : "#E5E7EB",
                            backgroundColor: urgency === urg.value ? `${urg.color}20` : "white",
                          }}
                        >
                          <span className="text-xs font-medium" style={{ color: "#003366" }}>
                            {urg.label}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: "#374151" }}>
                        Sample to Collect:
                      </label>
                      <Select value={sampleType} onValueChange={setSampleType}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="blood">Blood</SelectItem>
                          <SelectItem value="serum">Serum</SelectItem>
                          <SelectItem value="tissue">Tissue</SelectItem>
                          <SelectItem value="swab">Swab</SelectItem>
                          <SelectItem value="faeces">Faeces</SelectItem>
                          <SelectItem value="milk">Milk</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: "#374151" }}>
                        Submit Sample To:
                      </label>
                      <Select value={submitTo} onValueChange={setSubmitTo}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ddl-lucknow">DDL Lucknow (nearest)</SelectItem>
                          <SelectItem value="ddl-delhi">DDL Delhi</SelectItem>
                          <SelectItem value="ddl-patna">DDL Patna</SelectItem>
                          <SelectItem value="adri-phulnakhara">ADRI Phulnakhara</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-3" style={{ color: "#374151" }}>
                      Immediate Action Taken:
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { value: "isolated", label: "Animal isolated from herd" },
                        { value: "biosecurity", label: "Farmer advised on biosecurity" },
                        { value: "neighbours", label: "Neighbouring farms notified" },
                        { value: "emergency-treatment", label: "Emergency treatment given" },
                      ].map((action) => (
                        <button
                          key={action.value}
                          onClick={() => toggleAction(action.value)}
                          className="p-2 rounded border text-left text-sm transition-all"
                          style={{
                            borderColor: actions.includes(action.value) ? "#10B981" : "#E5E7EB",
                            backgroundColor: actions.includes(action.value) ? "#D1FAE5" : "white",
                          }}
                        >
                          <span className="mr-2">{actions.includes(action.value) ? "☑" : "☐"}</span>
                          {action.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: "#374151" }}>
                      Photo Evidence:
                    </label>
                    <Button variant="outline" className="w-full">
                      <Camera className="w-4 h-4 mr-2" />
                      Take/Upload Photo
                    </Button>
                    <p className="text-xs mt-2" style={{ color: "#6B7280" }}>
                      1 photo uploaded • Geo-tagged: Bakshi Ka Talab Village • Timestamp: 22 May 2025 10:45 AM
                    </p>
                  </div>

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
                      DISEASE SAMPLE SUBMISSION
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
                          Fever, Nasal Discharge, Lameness
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span style={{ color: "#6B7280" }}>Duration:</span>
                        <span className="font-medium" style={{ color: "#003366" }}>
                          1-3 days
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span style={{ color: "#6B7280" }}>Other animals affected:</span>
                        <span className="font-medium" style={{ color: "#003366" }}>
                          3
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span style={{ color: "#6B7280" }}>Suspected:</span>
                        <span className="font-medium" style={{ color: "#003366" }}>
                          FMD
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span style={{ color: "#6B7280" }}>Urgency:</span>
                        <span className="font-medium" style={{ color: "#EF4444" }}>
                          🔴 URGENT
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span style={{ color: "#6B7280" }}>Sample:</span>
                        <span className="font-medium" style={{ color: "#003366" }}>
                          Blood
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span style={{ color: "#6B7280" }}>Submit to:</span>
                        <span className="font-medium" style={{ color: "#003366" }}>
                          DDL Lucknow
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span style={{ color: "#6B7280" }}>Isolated:</span>
                        <span className="font-medium" style={{ color: "#10B981" }}>
                          ✓ Yes
                        </span>
                      </div>
                    </div>
                  </Card>

                  {urgency === "urgent" && (
                    <Card className="p-4" style={{ backgroundColor: "#FEE2E2", borderColor: "#EF4444" }}>
                      <div className="flex items-start gap-2">
                        <AlertTriangle className="w-5 h-5 mt-0.5" style={{ color: "#EF4444" }} />
                        <div>
                          <p className="text-sm font-semibold mb-1" style={{ color: "#991B1B" }}>
                            ⚠ Urgent submission detected.
                          </p>
                          <p className="text-xs" style={{ color: "#991B1B" }}>
                            This will be flagged to BVO Dr. Sarita Singh and CDVO Dr. Pradeep Sharma immediately. If confirmed as FMD, outbreak protocol will be triggered.
                          </p>
                        </div>
                      </div>
                    </Card>
                  )}

                  <Card className="p-4" style={{ backgroundColor: "#EFF6FF", borderColor: "#3B82F6" }}>
                    <p className="text-sm" style={{ color: "#1E40AF" }}>
                      Sample registration will be created in Disease Surveillance module. Registration number generated. DDL Lucknow will be notified. Block Officer will be alerted.
                    </p>
                  </Card>

                  <div className="flex gap-3 justify-end">
                    <Button onClick={() => setStep(2)} variant="outline">
                      ← Edit Details
                    </Button>
                    <Button
                      onClick={handleSubmit}
                      style={{
                        backgroundColor: urgency === "urgent" || urgency === "emergency" ? "#EF4444" : "#FF6600",
                        color: "white",
                      }}
                    >
                      ✓ {urgency === "urgent" || urgency === "emergency" ? "Submit Urgent Sample" : "Submit Sample"}
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
