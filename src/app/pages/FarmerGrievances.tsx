import { useState } from "react";
import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";
import { ScopeBadge } from "../components/ScopeBadge";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Textarea } from "../components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Circle, Pill, Microscope, HelpCircle, Phone, Mic, Camera, ChevronDown, ChevronUp, CheckCircle2, AlertCircle } from "lucide-react";

export function FarmerGrievances() {
  const [step, setStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedRequest, setSelectedRequest] = useState("");
  const [issueType, setIssueType] = useState("");
  const [severity, setSeverity] = useState("medium");
  const [description, setDescription] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [expandedTicket, setExpandedTicket] = useState<string | null>(null);

  const categories = [
    { id: "ai", icon: Circle, label: "AI Service Issue", color: "#3B82F6" },
    { id: "medicine", icon: Pill, label: "Medicine Issue", color: "#10B981" },
    { id: "disease", icon: Microscope, label: "Disease Test Issue", color: "#FF6600" },
    { id: "other", icon: HelpCircle, label: "Other / General", color: "#6B7280" },
  ];

  const recentRequests = [
    { id: "SR-2025-1042", type: "AI Service", date: "22 May", status: "Completed", color: "#10B981" },
    { id: "SR-2025-1041", type: "Medicine", date: "22 May", status: "In Progress", color: "#3B82F6" },
    { id: "DDL-2025-0247", type: "Disease Test", date: "21 May", status: "At Lab", color: "#F59E0B" },
  ];

  const tickets = [
    {
      id: "GR-2025-0892",
      category: "💊 Medicine Issue",
      issue: "Wrong medicine dosage given",
      raised: "22 May 2025",
      status: "Open",
      statusColor: "#EF4444",
      assignedTo: "BVO Dr. Sarita Mohanty",
      sla: "Response due by 24 May",
      activities: [
        { time: "22 May 10:15 AM", text: "You raised this ticket" },
        { time: "22 May 10:16 AM", text: "Ticket assigned to BVO Dr. Sarita Mohanty" },
        { time: "22 May 11:00 AM", text: "BVO acknowledged your complaint", note: "We are looking into this" },
        { time: "Waiting", text: "⏳ Waiting for resolution..." },
      ],
    },
    {
      id: "GR-2025-0876",
      category: "🐄 AI Service",
      issue: "Technician arrived late",
      raised: "15 May 2025",
      status: "Resolved",
      statusColor: "#10B981",
      resolvedBy: "BVO Dr. Sarita Mohanty",
      resolution: "17 May 2025",
      activities: [
        { time: "15 May", text: "You raised ticket" },
        { time: "15 May", text: "Assigned to BVO" },
        { time: "16 May", text: "BVO investigated" },
        { time: "17 May", text: "Resolved: Technician delayed due to emergency case. Apologies noted. Will be addressed." },
        { time: "", text: "⭐⭐⭐⭐ Satisfaction rating given" },
      ],
    },
    {
      id: "GR-2025-0854",
      category: "🔬 Disease Test",
      issue: "Report not received after 7 days",
      raised: "08 May 2025",
      status: "Escalated to District",
      statusColor: "#F59E0B",
      escalated: "10 May 2025",
      activities: [
        { time: "08 May", text: "You raised ticket" },
        { time: "08 May", text: "Assigned to BVO" },
        { time: "10 May", text: "No response in 48hrs — Auto-escalated to District Officer" },
        { time: "10 May", text: "District Officer Dr. Pradeep Rath assigned" },
        { time: "11 May", text: "Resolved: Report sent" },
      ],
    },
  ];

  const handleSubmitGrievance = () => {
    setSubmitted(true);
  };

  const handleReset = () => {
    setStep(1);
    setSelectedCategory(null);
    setSelectedRequest("");
    setIssueType("");
    setSeverity("medium");
    setDescription("");
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <div className="flex min-h-screen" style={{ backgroundColor: "#F9FAFB" }}>
        <Sidebar activeRoute="/grievances" />
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="flex-1 p-6">
            <div className="max-w-2xl mx-auto">
              <Card className="p-8 text-center">
                <div
                  className="w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-4"
                  style={{ backgroundColor: "#D1FAE5" }}
                >
                  <CheckCircle2 className="w-8 h-8" style={{ color: "#10B981" }} />
                </div>
                <h2 className="text-xl font-bold mb-2" style={{ color: "#003366" }}>
                  ✓ Grievance Submitted
                </h2>
                <div className="my-4">
                  <p className="text-sm mb-2" style={{ color: "#6B7280" }}>
                    Ticket: <strong style={{ color: "#003366" }}>GR-2025-0892</strong>
                  </p>
                  <p className="text-sm mb-2" style={{ color: "#6B7280" }}>
                    Your issue has been sent to
                  </p>
                  <p className="text-sm mb-2 font-semibold" style={{ color: "#003366" }}>
                    Block Officer Dr. Sarita Mohanty
                  </p>
                  <p className="text-sm mb-2" style={{ color: "#6B7280" }}>
                    Expected response: 48 hours
                  </p>
                  <p className="text-xs" style={{ color: "#10B981" }}>
                    SMS confirmation sent ✓
                  </p>
                </div>
                <div className="flex gap-3 justify-center mt-6">
                  <Button onClick={handleReset} variant="outline">
                    Track This Ticket
                  </Button>
                  <Button variant="outline">Call Support Instead</Button>
                  <Button onClick={handleReset} style={{ backgroundColor: "#FF6600", color: "white" }}>
                    Raise Another Grievance
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
      <Sidebar activeRoute="/grievances" />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6">
          <div className="max-w-6xl mx-auto space-y-6">
            <div>
              <h1 className="text-2xl font-bold mb-2" style={{ color: "#003366" }}>
                My Grievances & Support
              </h1>
              <ScopeBadge scope="lac" scopeLabel="My Farm" subLabel="Salipur, Cuttack" />
            </div>

            <Tabs defaultValue="raise">
              <TabsList>
                <TabsTrigger value="raise">Raise Grievance</TabsTrigger>
                <TabsTrigger value="tickets">My Tickets</TabsTrigger>
                <TabsTrigger value="support">Call Support</TabsTrigger>
              </TabsList>

              <TabsContent value="raise">
                <Card className="p-8">
                  <h2 className="text-xl font-bold mb-6" style={{ color: "#003366" }}>
                    Tell us what went wrong
                  </h2>

                  {step === 1 && (
                    <div>
                      <h3 className="font-semibold mb-4" style={{ color: "#374151" }}>
                        Step 1 — What is your issue about?
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                        {categories.map((category) => {
                          const Icon = category.icon;
                          return (
                            <button
                              key={category.id}
                              onClick={() => {
                                setSelectedCategory(category.id);
                                setStep(2);
                              }}
                              className="p-6 rounded-lg border-2 text-center transition-all hover:shadow-lg"
                              style={{
                                borderColor: "#E5E7EB",
                                backgroundColor: "white",
                              }}
                            >
                              <Icon className="w-12 h-12 mx-auto mb-3" style={{ color: category.color }} />
                              <div className="font-semibold" style={{ color: "#003366" }}>
                                {category.label}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="space-y-6">
                      <h3 className="font-semibold mb-4" style={{ color: "#374151" }}>
                        Step 2 — Which request?
                      </h3>
                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: "#374151" }}>
                          Select the service request this is about:
                        </label>
                        <Select value={selectedRequest} onValueChange={setSelectedRequest}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a request" />
                          </SelectTrigger>
                          <SelectContent>
                            {recentRequests.map((req) => (
                              <SelectItem key={req.id} value={req.id}>
                                {req.id} | {req.type} | {req.date} | {req.status}
                              </SelectItem>
                            ))}
                            <SelectItem value="none">This is not about a specific request</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex gap-3">
                        <Button onClick={() => setStep(1)} variant="outline">
                          ← Back
                        </Button>
                        <Button
                          onClick={() => setStep(3)}
                          disabled={!selectedRequest}
                          style={{ backgroundColor: "#FF6600", color: "white" }}
                        >
                          Next →
                        </Button>
                      </div>
                    </div>
                  )}

                  {step === 3 && (
                    <div className="space-y-6">
                      <h3 className="font-semibold mb-4" style={{ color: "#374151" }}>
                        Step 3 — What happened?
                      </h3>

                      <div>
                        <label className="block text-sm font-medium mb-3" style={{ color: "#374151" }}>
                          Issue type:
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                          {[
                            "Service not received",
                            "Technician did not arrive",
                            "Wrong medicine given",
                            "Rude behaviour",
                            "Charged incorrectly",
                            "Report not received",
                            "Other",
                          ].map((type) => (
                            <button
                              key={type}
                              onClick={() => setIssueType(type)}
                              className="p-3 rounded-lg border-2 text-sm text-left transition-all"
                              style={{
                                borderColor: issueType === type ? "#FF6600" : "#E5E7EB",
                                backgroundColor: issueType === type ? "#FFF7ED" : "white",
                              }}
                            >
                              <span className="mr-2">{issueType === type ? "●" : "○"}</span>
                              {type}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: "#374151" }}>
                          Description:
                        </label>
                        <Textarea
                          rows={5}
                          placeholder="Describe your issue in detail"
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                        />
                        <div className="flex items-center gap-2 mt-2">
                          <button className="flex items-center gap-2 text-sm" style={{ color: "#3B82F6" }}>
                            <Mic className="w-4 h-4" />
                            Tap to speak your complaint
                          </button>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-3" style={{ color: "#374151" }}>
                          Severity:
                        </label>
                        <div className="grid grid-cols-3 gap-3">
                          {[
                            { value: "low", label: "Low — No urgent action needed", color: "#10B981" },
                            { value: "medium", label: "Medium — Needs attention soon", color: "#F59E0B" },
                            { value: "high", label: "High — Urgent, affecting my animal", color: "#EF4444" },
                          ].map((sev) => (
                            <button
                              key={sev.value}
                              onClick={() => setSeverity(sev.value)}
                              className="p-3 rounded-lg border-2 text-center transition-all"
                              style={{
                                borderColor: severity === sev.value ? sev.color : "#E5E7EB",
                                backgroundColor: severity === sev.value ? `${sev.color}20` : "white",
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
                          Photo evidence (optional):
                        </label>
                        <Button variant="outline">
                          <Camera className="w-4 h-4 mr-2" />
                          Add Photo
                        </Button>
                      </div>

                      <div className="flex gap-3">
                        <Button onClick={() => setStep(2)} variant="outline">
                          ← Back
                        </Button>
                        <Button
                          onClick={handleSubmitGrievance}
                          disabled={!issueType || !description}
                          className="flex-1"
                          style={{ backgroundColor: "#FF6600", color: "white" }}
                        >
                          Submit Grievance
                        </Button>
                      </div>
                    </div>
                  )}
                </Card>
              </TabsContent>

              <TabsContent value="tickets">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Select defaultValue="all">
                      <SelectTrigger className="w-40">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All</SelectItem>
                        <SelectItem value="open">Open</SelectItem>
                        <SelectItem value="resolved">Resolved</SelectItem>
                      </SelectContent>
                    </Select>
                    <span className="text-sm" style={{ color: "#6B7280" }}>
                      Sort: Newest first ↓
                    </span>
                  </div>

                  {tickets.map((ticket) => (
                    <Card key={ticket.id} className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="font-bold" style={{ color: "#003366" }}>
                              {ticket.id}
                            </h3>
                            <span
                              className="px-2 py-1 rounded text-xs font-semibold"
                              style={{ backgroundColor: `${ticket.statusColor}20`, color: ticket.statusColor }}
                            >
                              {ticket.status}
                            </span>
                          </div>
                          <p className="text-sm mb-1" style={{ color: "#374151" }}>
                            <strong>Category:</strong> {ticket.category}
                          </p>
                          <p className="text-sm mb-1" style={{ color: "#374151" }}>
                            <strong>Issue:</strong> {ticket.issue}
                          </p>
                          <p className="text-sm mb-1" style={{ color: "#6B7280" }}>
                            Raised: {ticket.raised}
                          </p>
                          {ticket.assignedTo && (
                            <p className="text-sm mb-1" style={{ color: "#6B7280" }}>
                              Assigned to: {ticket.assignedTo}
                            </p>
                          )}
                          {ticket.sla && (
                            <p className="text-sm" style={{ color: "#F59E0B" }}>
                              {ticket.sla}
                            </p>
                          )}
                        </div>
                        <button
                          onClick={() => setExpandedTicket(expandedTicket === ticket.id ? null : ticket.id)}
                          className="p-2"
                        >
                          {expandedTicket === ticket.id ? (
                            <ChevronUp className="w-5 h-5" style={{ color: "#6B7280" }} />
                          ) : (
                            <ChevronDown className="w-5 h-5" style={{ color: "#6B7280" }} />
                          )}
                        </button>
                      </div>

                      {expandedTicket === ticket.id && (
                        <div>
                          <Card className="p-4 mb-4" style={{ backgroundColor: "#F9FAFB" }}>
                            <h4 className="font-semibold mb-3" style={{ color: "#003366" }}>
                              TICKET ACTIVITY
                            </h4>
                            <div className="space-y-3">
                              {ticket.activities.map((activity, idx) => (
                                <div key={idx} className="text-sm">
                                  {activity.time && (
                                    <p className="font-medium mb-1" style={{ color: "#6B7280" }}>
                                      {activity.time}
                                    </p>
                                  )}
                                  <p style={{ color: "#374151" }}>{activity.text}</p>
                                  {activity.note && (
                                    <p className="italic mt-1" style={{ color: "#6B7280" }}>
                                      "{activity.note}"
                                    </p>
                                  )}
                                </div>
                              ))}
                            </div>
                          </Card>
                          <div className="flex gap-3">
                            {ticket.status === "Open" && (
                              <>
                                <Button variant="outline">Add More Information</Button>
                                <Button variant="outline">Call Support About This</Button>
                              </>
                            )}
                            {ticket.status === "Resolved" && (
                              <Button variant="outline">View Full Resolution</Button>
                            )}
                          </div>
                        </div>
                      )}
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="support">
                <div className="max-w-2xl mx-auto space-y-6">
                  <Card className="p-8 text-center" style={{ backgroundColor: "#003366", color: "white" }}>
                    <Phone className="w-16 h-16 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">Krushi Samrudhi Helpline</h3>
                    <p className="text-4xl font-bold mb-4">1800-XXX-XXXX</p>
                    <p className="text-lg mb-6">(Toll Free)</p>
                    <div className="mb-6">
                      <p className="text-sm mb-1">Available: 8 AM — 8 PM</p>
                      <p className="text-sm">All days including holidays</p>
                    </div>
                    <Button
                      className="w-full max-w-md mx-auto"
                      style={{ backgroundColor: "#FF6600", color: "white", padding: "1.5rem" }}
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Call Now
                    </Button>
                    <div className="mt-6 p-4 rounded" style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}>
                      <p className="text-sm mb-2">Your details will be shared with the helpline agent:</p>
                      <p className="text-sm">
                        <strong>Name:</strong> Ramesh Pradhan
                      </p>
                      <p className="text-sm">
                        <strong>ID:</strong> F001 | <strong>District:</strong> Cuttack
                      </p>
                    </div>
                  </Card>

                  <Card className="p-6">
                    <h4 className="font-semibold mb-4" style={{ color: "#003366" }}>
                      What helpline can help with:
                    </h4>
                    <ul className="space-y-2 text-sm" style={{ color: "#374151" }}>
                      <li>• Request AI service by phone</li>
                      <li>• Report sick animal</li>
                      <li>• Check status of your requests</li>
                      <li>• Lodge a complaint</li>
                      <li>• Get advisory on animal health</li>
                    </ul>
                  </Card>

                  <Card className="p-6">
                    <h4 className="font-semibold mb-2" style={{ color: "#003366" }}>
                      Language support:
                    </h4>
                    <p className="text-sm" style={{ color: "#374151" }}>
                      Available in: <strong>Odia | Hindi | English</strong>
                    </p>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
}
