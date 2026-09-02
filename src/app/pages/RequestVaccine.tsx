import { useState } from "react";
import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";
import { ScopeBadge } from "../components/ScopeBadge";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Syringe, CheckCircle2 } from "lucide-react";

export function RequestVaccine() {
  const [selectedAnimal, setSelectedAnimal] = useState("");
  const [vaccineType, setVaccineType] = useState("");
  const [purpose, setPurpose] = useState("");
  const [preferredDate, setPreferredDate] = useState("2025-05-22");
  const [timeSlot, setTimeSlot] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  const myAnimals = [
    { id: "IN1234", name: "Holstein Friesian", lastVaccine: "FMD - 12 Jan 2025" },
    { id: "IN5678", name: "Jersey", lastVaccine: "FMD - 12 Jan 2025" },
    { id: "IN9012", name: "Red Sindhi", lastVaccine: "FMD - 12 Jan 2025" },
  ];

  const vaccineTypes = [
    { value: "fmd", label: "FMD (Foot & Mouth Disease)" },
    { value: "hs", label: "HS (Haemorrhagic Septicaemia)" },
    { value: "bq", label: "BQ (Black Quarter)" },
    { value: "ppr", label: "PPR (Peste des Petits Ruminants)" },
    { value: "brucellosis", label: "Brucellosis" },
  ];

  const handleConfirm = () => {
    setConfirmed(true);
  };

  if (confirmed) {
    return (
      <div className="flex min-h-screen" style={{ backgroundColor: "#F9FAFB" }}>
        <Sidebar activeRoute="/request-vaccine" />
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="flex-1 p-6">
            <div className="max-w-3xl mx-auto">
              <Card className="p-8 text-center">
                <div
                  className="w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-4"
                  style={{ backgroundColor: "#E0E7FF" }}
                >
                  <Syringe className="w-8 h-8" style={{ color: "#6366F1" }} />
                </div>
                <h2 className="text-xl font-bold mb-2" style={{ color: "#003366" }}>
                  Request Confirmed!
                </h2>
                <p className="text-sm mb-4" style={{ color: "#6B7280" }}>
                  Your vaccination request has been received
                </p>
                <div className="inline-block px-4 py-2 rounded-lg mb-6" style={{ backgroundColor: "#DBEAFE" }}>
                  <span className="text-sm font-semibold" style={{ color: "#1E40AF" }}>
                    Reference: VR-2025-0450
                  </span>
                </div>

                <div className="max-w-md mx-auto">
                  <div className="mb-6">
                    <h3 className="font-semibold mb-3" style={{ color: "#003366" }}>
                      Request Status
                    </h3>
                    <div className="flex items-center gap-2 justify-center">
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#10B981" }} />
                        <span className="text-xs font-semibold" style={{ color: "#10B981" }}>
                          Booked
                        </span>
                      </div>
                      <div className="w-8 border-t" style={{ borderColor: "#D1D5DB" }} />
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#D1D5DB" }} />
                        <span className="text-xs" style={{ color: "#9CA3AF" }}>
                          Assigned
                        </span>
                      </div>
                      <div className="w-8 border-t" style={{ borderColor: "#D1D5DB" }} />
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#D1D5DB" }} />
                        <span className="text-xs" style={{ color: "#9CA3AF" }}>
                          En Route
                        </span>
                      </div>
                      <div className="w-8 border-t" style={{ borderColor: "#D1D5DB" }} />
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#D1D5DB" }} />
                        <span className="text-xs" style={{ color: "#9CA3AF" }}>
                          Done
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm mb-6" style={{ color: "#6B7280" }}>
                    We will send a veterinary technician to your farm. You will receive an SMS when the technician is
                    assigned.
                  </p>

                  <Button
                    onClick={() => setConfirmed(false)}
                    variant="outline"
                    className="w-full"
                  >
                    Make Another Request
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
      <Sidebar activeRoute="/request-vaccine" />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6">
          <div className="max-w-3xl mx-auto space-y-6">
            <div>
              <h1 className="text-2xl font-bold mb-2" style={{ color: "#003366" }}>
                Request Vaccination Service
              </h1>
              <ScopeBadge scope="lac" scopeLabel="My Farm" subLabel="Bakshi Ka Talab, Lucknow" />
            </div>

            <Card className="p-8">
              <div className="space-y-6">
                {/* Step 1 */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center font-bold"
                      style={{ backgroundColor: "#FF6600", color: "white" }}
                    >
                      1
                    </div>
                    <h3 className="font-semibold" style={{ color: "#003366" }}>
                      Select Your Animal
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ml-10">
                    {myAnimals.map((animal) => (
                      <button
                        key={animal.id}
                        onClick={() => setSelectedAnimal(animal.id)}
                        className="p-4 rounded-lg border-2 text-left transition-all"
                        style={{
                          borderColor: selectedAnimal === animal.id ? "#FF6600" : "#E5E7EB",
                          backgroundColor: selectedAnimal === animal.id ? "#FFF7ED" : "white",
                        }}
                      >
                        <Syringe className="w-8 h-8 mb-2" style={{ color: "#6366F1" }} />
                        <div className="font-semibold text-sm" style={{ color: "#003366" }}>
                          {animal.id}
                        </div>
                        <div className="text-xs" style={{ color: "#6B7280" }}>
                          {animal.name}
                        </div>
                        <div className="text-xs mt-1" style={{ color: "#6B7280" }}>
                          {animal.lastVaccine}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 2 */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center font-bold"
                      style={{
                        backgroundColor: selectedAnimal ? "#FF6600" : "#E5E7EB",
                        color: "white",
                      }}
                    >
                      2
                    </div>
                    <h3 className="font-semibold" style={{ color: "#003366" }}>
                      Vaccine Details
                    </h3>
                  </div>
                  <div className="ml-10 space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: "#374151" }}>
                        Which vaccine do you need?
                      </label>
                      <Select
                        value={vaccineType}
                        onValueChange={setVaccineType}
                        disabled={!selectedAnimal}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select vaccine type" />
                        </SelectTrigger>
                        <SelectContent>
                          {vaccineTypes.map((vaccine) => (
                            <SelectItem key={vaccine.value} value={vaccine.value}>
                              {vaccine.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: "#374151" }}>
                        Purpose of vaccination:
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          { value: "routine", label: "Routine scheduled" },
                          { value: "booster", label: "Booster dose" },
                          { value: "outbreak", label: "Outbreak prevention" },
                          { value: "first-time", label: "First time" },
                        ].map((p) => (
                          <button
                            key={p.value}
                            onClick={() => setPurpose(p.value)}
                            disabled={!selectedAnimal}
                            className="p-3 rounded-lg border-2 text-center transition-all"
                            style={{
                              borderColor: purpose === p.value ? "#6366F1" : "#E5E7EB",
                              backgroundColor: purpose === p.value ? "#E0E7FF" : "white",
                            }}
                          >
                            <span className="text-sm font-medium" style={{ color: "#003366" }}>
                              {p.label}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center font-bold"
                      style={{
                        backgroundColor: selectedAnimal && vaccineType ? "#FF6600" : "#E5E7EB",
                        color: "white",
                      }}
                    >
                      3
                    </div>
                    <h3 className="font-semibold" style={{ color: "#003366" }}>
                      Choose Date and Time
                    </h3>
                  </div>
                  <div className="ml-10 space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: "#374151" }}>
                        Preferred Date:
                      </label>
                      <input
                        type="date"
                        value={preferredDate}
                        onChange={(e) => setPreferredDate(e.target.value)}
                        disabled={!selectedAnimal || !vaccineType}
                        className="w-full px-3 py-2 border rounded-lg"
                        style={{ borderColor: "#E5E7EB" }}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: "#374151" }}>
                        Preferred Time Slot:
                      </label>
                      <Select
                        value={timeSlot}
                        onValueChange={setTimeSlot}
                        disabled={!selectedAnimal || !vaccineType}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select preferred time slot" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="morning">Morning (6 AM - 10 AM)</SelectItem>
                          <SelectItem value="afternoon">Afternoon (12 PM - 4 PM)</SelectItem>
                          <SelectItem value="evening">Evening (4 PM - 7 PM)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Step 4 */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center font-bold"
                      style={{
                        backgroundColor: selectedAnimal && vaccineType && timeSlot ? "#FF6600" : "#E5E7EB",
                        color: "white",
                      }}
                    >
                      4
                    </div>
                    <h3 className="font-semibold" style={{ color: "#003366" }}>
                      Confirm Request
                    </h3>
                  </div>
                  <div className="ml-10">
                    <Button
                      onClick={handleConfirm}
                      disabled={!selectedAnimal || !vaccineType || !timeSlot}
                      className="w-full"
                      style={{ backgroundColor: "#FF6600", color: "white" }}
                    >
                      Confirm Vaccination Request
                    </Button>
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
