import { useState } from "react";
import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";
import { ScopeBadge } from "../components/ScopeBadge";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Textarea } from "../components/ui/textarea";
import { Circle, Pill } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

export function RequestMedicine() {
  const [selectedAnimal, setSelectedAnimal] = useState("");
  const [issue, setIssue] = useState("");
  const [urgency, setUrgency] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const myAnimals = [
    { id: "IN1234", name: "Holstein Friesian" },
    { id: "IN5678", name: "Jersey" },
    { id: "IN9012", name: "Red Sindhi" },
  ];

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div className="flex min-h-screen" style={{ backgroundColor: "#F9FAFB" }}>
      <Sidebar activeRoute="/request-medicine" />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6">
          <div className="max-w-3xl mx-auto space-y-6">
            <div>
              <h1 className="text-2xl font-bold mb-2" style={{ color: "#003366" }}>
                Request Medicine
              </h1>
              <ScopeBadge scope="lac" scopeLabel="My Farm" subLabel="Bakshi Ka Talab, Lucknow" />
            </div>

            {!submitted ? (
              <Card className="p-8">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: "#374151" }}>
                      Which animal needs medicine?
                    </label>
                    <Select value={selectedAnimal} onValueChange={setSelectedAnimal}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your animal" />
                      </SelectTrigger>
                      <SelectContent>
                        {myAnimals.map((animal) => (
                          <SelectItem key={animal.id} value={animal.id}>
                            {animal.id} - {animal.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: "#374151" }}>
                      What is the issue?
                    </label>
                    <Textarea
                      placeholder="Describe the problem with your animal..."
                      rows={4}
                      value={issue}
                      onChange={(e) => setIssue(e.target.value)}
                    />
                    <p className="text-xs mt-1" style={{ color: "#6B7280" }}>
                      Example: Animal is not eating, fever, diarrhea, skin problem, etc.
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: "#374151" }}>
                      How urgent is it?
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        onClick={() => setUrgency("routine")}
                        className="p-4 rounded-lg border-2 text-center transition-all"
                        style={{
                          borderColor: urgency === "routine" ? "#10B981" : "#E5E7EB",
                          backgroundColor: urgency === "routine" ? "#D1FAE5" : "white",
                        }}
                      >
                        <div className="font-semibold" style={{ color: "#003366" }}>
                          Routine
                        </div>
                        <div className="text-xs" style={{ color: "#6B7280" }}>
                          Can wait 1-2 days
                        </div>
                      </button>
                      <button
                        onClick={() => setUrgency("urgent")}
                        className="p-4 rounded-lg border-2 text-center transition-all"
                        style={{
                          borderColor: urgency === "urgent" ? "#EF4444" : "#E5E7EB",
                          backgroundColor: urgency === "urgent" ? "#FEE2E2" : "white",
                        }}
                      >
                        <div className="font-semibold" style={{ color: "#003366" }}>
                          Urgent
                        </div>
                        <div className="text-xs" style={{ color: "#6B7280" }}>
                          Need help today
                        </div>
                      </button>
                    </div>
                  </div>

                  <Button
                    onClick={handleSubmit}
                    disabled={!selectedAnimal || !issue || !urgency}
                    className="w-full"
                    style={{ backgroundColor: "#FF6600", color: "white" }}
                  >
                    Submit Medicine Request
                  </Button>
                </div>
              </Card>
            ) : (
              <Card className="p-8 text-center">
                <div className="mb-4">
                  <div
                    className="w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-4"
                    style={{ backgroundColor: "#D1FAE5" }}
                  >
                    <Pill className="w-8 h-8" style={{ color: "#10B981" }} />
                  </div>
                  <h2 className="text-xl font-bold mb-2" style={{ color: "#003366" }}>
                    Request Received!
                  </h2>
                  <p className="text-sm mb-4" style={{ color: "#6B7280" }}>
                    We will send someone to help you
                  </p>
                  <div className="inline-block px-4 py-2 rounded-lg mb-6" style={{ backgroundColor: "#DBEAFE" }}>
                    <span className="text-sm font-semibold" style={{ color: "#1E40AF" }}>
                      Reference: MED-2025-0345
                    </span>
                  </div>
                </div>

                <div className="max-w-md mx-auto">
                  <div className="p-4 rounded-lg mb-6" style={{ backgroundColor: "#FFF7ED" }}>
                    <p className="text-sm" style={{ color: "#92400E" }}>
                      {urgency === "urgent" ? (
                        <>
                          <strong>Urgent request:</strong> A veterinary officer will contact you within 2 hours.
                        </>
                      ) : (
                        <>
                          <strong>Routine request:</strong> A veterinary officer will visit within 1-2 days.
                        </>
                      )}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h3 className="font-semibold mb-3" style={{ color: "#003366" }}>
                      Request Status
                    </h3>
                    <div className="flex items-center gap-2 justify-center">
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#10B981" }} />
                        <span className="text-xs font-semibold" style={{ color: "#10B981" }}>Pending</span>
                      </div>
                      <div className="w-12 border-t" style={{ borderColor: "#D1D5DB" }} />
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#D1D5DB" }} />
                        <span className="text-xs" style={{ color: "#9CA3AF" }}>In Progress</span>
                      </div>
                      <div className="w-12 border-t" style={{ borderColor: "#D1D5DB" }} />
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#D1D5DB" }} />
                        <span className="text-xs" style={{ color: "#9CA3AF" }}>Done</span>
                      </div>
                    </div>
                  </div>

                  <Button
                    onClick={() => {
                      setSubmitted(false);
                      setSelectedAnimal("");
                      setIssue("");
                      setUrgency("");
                    }}
                    variant="outline"
                    className="w-full"
                  >
                    Make Another Request
                  </Button>
                </div>
              </Card>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
