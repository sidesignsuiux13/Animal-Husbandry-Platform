import { useState } from "react";
import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";
import { ScopeBadge } from "../components/ScopeBadge";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Circle, Pill, Syringe, Microscope, MessageSquare, ChevronDown, ChevronUp, Download, Star } from "lucide-react";

export function FarmerActivityLog() {
  const [expandedActivity, setExpandedActivity] = useState<string | null>(null);

  const activities = [
    {
      date: "22 May 2025",
      items: [
        {
          id: "SR-2025-1042",
          time: "10:30 AM",
          icon: Circle,
          iconColor: "#3B82F6",
          type: "AI Service Request",
          animal: "IN1234 Holstein Friesian",
          technician: "Rajan Kumar assigned",
          status: "Completed",
          statusColor: "#10B981",
          rating: 5,
          details: {
            semen: "SC-2025-0441",
            dose: "Sex Sorted Cattle",
            completed: "22 May 11:15 AM",
            otp: "Confirmed ✓",
            next: "Recommended Aug 2025",
          },
        },
        {
          id: "MR-2025-0891",
          time: "09:15 AM",
          icon: Pill,
          iconColor: "#10B981",
          type: "Medicine Service",
          animal: "IN1234",
          medicines: "Oxytetracycline × 2, Multivitamin × 1",
          charges: "₹200 paid ✓",
          status: "Pending Block Approval",
          statusColor: "#3B82F6",
        },
      ],
    },
    {
      date: "21 May 2025",
      items: [
        {
          id: "DDL-2025-0247",
          time: "11:00 AM",
          icon: Microscope,
          iconColor: "#FF6600",
          type: "Disease Sample",
          animal: "IN3456",
          symptoms: "Fever, Lameness",
          sample: "Blood | DDL Lucknow",
          status: "Under Testing",
          statusColor: "#F59E0B",
          expected: "Expected report: 25 May 2025",
        },
      ],
    },
    {
      date: "15 May 2025",
      items: [
        {
          id: "VR-2025-0441",
          time: "03:00 PM",
          icon: Syringe,
          iconColor: "#A855F7",
          type: "Vaccination",
          animal: "IN1234",
          vaccine: "FMD Vaccine | 2 doses",
          batch: "VB-2025-0441",
          charges: "₹150 paid ✓",
          booster: "Booster due: 21 Aug 2025 🔔",
          status: "Recorded",
          statusColor: "#10B981",
        },
      ],
    },
    {
      date: "08 May 2025",
      items: [
        {
          id: "GR-2025-0854",
          time: "10:00 AM",
          icon: MessageSquare,
          iconColor: "#6B7280",
          type: "Grievance Raised",
          issue: "Disease report not received",
          status: "Resolved — 11 May",
          statusColor: "#10B981",
        },
      ],
    },
    {
      date: "01 May 2025",
      items: [
        {
          id: "SR-2025-0998",
          time: "09:30 AM",
          icon: Circle,
          iconColor: "#3B82F6",
          type: "AI Service Request",
          animal: "IN1235",
          status: "Completed",
          statusColor: "#10B981",
          rating: 4,
        },
      ],
    },
  ];

  const stats = [
    { label: "Total Services", value: 24, color: "#003366" },
    { label: "AI Services", value: 8, color: "#3B82F6" },
    { label: "Vaccinations", value: 6, color: "#A855F7" },
    { label: "Medicine", value: 10, color: "#10B981" },
  ];

  return (
    <div className="flex min-h-screen" style={{ backgroundColor: "#F9FAFB" }}>
      <Sidebar activeRoute="/activity-log" />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6">
          <div className="max-w-5xl mx-auto space-y-6">
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-2xl font-bold mb-2" style={{ color: "#003366" }}>
                  My Service History
                </h1>
                <p className="text-sm mb-2" style={{ color: "#6B7280" }}>
                  All requests and services — Ramesh Yadav
                </p>
                <ScopeBadge scope="lac" scopeLabel="My Farm" subLabel="Bakshi Ka Talab, Lucknow" />
              </div>
              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Download My History
              </Button>
            </div>

            <div className="grid grid-cols-4 gap-4">
              {stats.map((stat, idx) => (
                <Card key={idx} className="p-4 text-center">
                  <div className="text-3xl font-bold mb-1" style={{ color: stat.color }}>
                    {stat.value}
                  </div>
                  <div className="text-sm" style={{ color: "#6B7280" }}>
                    {stat.label}
                  </div>
                </Card>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <Select defaultValue="all-types">
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-types">All Types</SelectItem>
                  <SelectItem value="ai">AI Services</SelectItem>
                  <SelectItem value="medicine">Medicine</SelectItem>
                  <SelectItem value="vaccine">Vaccination</SelectItem>
                  <SelectItem value="disease">Disease</SelectItem>
                </SelectContent>
              </Select>

              <Select defaultValue="all-status">
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-status">All Status</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="testing">Under Testing</SelectItem>
                </SelectContent>
              </Select>

              <Select defaultValue="date-range">
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="date-range">Date Range</SelectItem>
                  <SelectItem value="last-week">Last Week</SelectItem>
                  <SelectItem value="last-month">Last Month</SelectItem>
                  <SelectItem value="last-3-months">Last 3 Months</SelectItem>
                </SelectContent>
              </Select>

              <span className="text-sm ml-auto" style={{ color: "#6B7280" }}>
                Sort: Newest first ↓
              </span>
            </div>

            <p className="text-sm" style={{ color: "#6B7280" }}>
              Showing 8 of 24 records
            </p>

            <div className="space-y-8">
              {activities.map((day, dayIdx) => (
                <div key={dayIdx}>
                  <div
                    className="text-sm font-semibold mb-4 pb-2"
                    style={{
                      color: "#003366",
                      borderBottom: "2px solid #E5E7EB",
                    }}
                  >
                    {day.date}
                  </div>

                  <div className="space-y-4">
                    {day.items.map((activity) => {
                      const Icon = activity.icon;
                      const isExpanded = expandedActivity === activity.id;

                      return (
                        <Card key={activity.id} className="p-5">
                          <div className="flex items-start gap-4">
                            <div
                              className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                              style={{ backgroundColor: `${activity.iconColor}20` }}
                            >
                              <Icon className="w-5 h-5" style={{ color: activity.iconColor }} />
                            </div>

                            <div className="flex-1">
                              <div className="flex items-start justify-between mb-2">
                                <div>
                                  <div className="flex items-center gap-2 mb-1">
                                    <span className="text-sm font-medium" style={{ color: "#6B7280" }}>
                                      {activity.time}
                                    </span>
                                    <span className="text-sm font-bold" style={{ color: "#003366" }}>
                                      {activity.type}
                                    </span>
                                  </div>
                                  <p className="text-sm mb-1" style={{ color: "#374151" }}>
                                    <strong>Ref:</strong> {activity.id}
                                  </p>
                                  {activity.animal && (
                                    <p className="text-sm mb-1" style={{ color: "#374151" }}>
                                      <strong>Animal:</strong> {activity.animal}
                                    </p>
                                  )}
                                  {activity.technician && (
                                    <p className="text-sm mb-1" style={{ color: "#374151" }}>
                                      {activity.technician}
                                    </p>
                                  )}
                                  {activity.medicines && (
                                    <p className="text-sm mb-1" style={{ color: "#374151" }}>
                                      <strong>Medicines:</strong> {activity.medicines}
                                    </p>
                                  )}
                                  {activity.symptoms && (
                                    <p className="text-sm mb-1" style={{ color: "#374151" }}>
                                      <strong>Symptoms:</strong> {activity.symptoms}
                                    </p>
                                  )}
                                  {activity.sample && (
                                    <p className="text-sm mb-1" style={{ color: "#374151" }}>
                                      <strong>Sample:</strong> {activity.sample}
                                    </p>
                                  )}
                                  {activity.vaccine && (
                                    <p className="text-sm mb-1" style={{ color: "#374151" }}>
                                      <strong>Vaccine:</strong> {activity.vaccine}
                                    </p>
                                  )}
                                  {activity.batch && (
                                    <p className="text-sm mb-1" style={{ color: "#374151" }}>
                                      <strong>Batch:</strong> {activity.batch}
                                    </p>
                                  )}
                                  {activity.charges && (
                                    <p className="text-sm mb-1" style={{ color: "#374151" }}>
                                      <strong>Charges:</strong> {activity.charges}
                                    </p>
                                  )}
                                  {activity.booster && (
                                    <p className="text-sm mb-1" style={{ color: "#374151" }}>
                                      {activity.booster}
                                    </p>
                                  )}
                                  {activity.expected && (
                                    <p className="text-sm mb-1" style={{ color: "#374151" }}>
                                      {activity.expected}
                                    </p>
                                  )}
                                  {activity.issue && (
                                    <p className="text-sm mb-1" style={{ color: "#374151" }}>
                                      <strong>Issue:</strong> {activity.issue}
                                    </p>
                                  )}
                                </div>

                                <div className="flex items-center gap-3">
                                  <span
                                    className="px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap"
                                    style={{
                                      backgroundColor: `${activity.statusColor}20`,
                                      color: activity.statusColor,
                                    }}
                                  >
                                    {activity.status}
                                  </span>
                                  {activity.details && (
                                    <button
                                      onClick={() =>
                                        setExpandedActivity(isExpanded ? null : activity.id)
                                      }
                                      className="p-1"
                                    >
                                      {isExpanded ? (
                                        <ChevronUp className="w-5 h-5" style={{ color: "#6B7280" }} />
                                      ) : (
                                        <ChevronDown className="w-5 h-5" style={{ color: "#6B7280" }} />
                                      )}
                                    </button>
                                  )}
                                </div>
                              </div>

                              {activity.rating && (
                                <div className="flex items-center gap-1 mt-2">
                                  {Array.from({ length: 5 }).map((_, i) => (
                                    <Star
                                      key={i}
                                      className="w-4 h-4"
                                      style={{
                                        color: i < activity.rating ? "#F59E0B" : "#D1D5DB",
                                        fill: i < activity.rating ? "#F59E0B" : "none",
                                      }}
                                    />
                                  ))}
                                  <span className="text-xs ml-1" style={{ color: "#6B7280" }}>
                                    You rated this service
                                  </span>
                                </div>
                              )}

                              {isExpanded && activity.details && (
                                <Card
                                  className="mt-4 p-4 text-sm"
                                  style={{ backgroundColor: "#F9FAFB" }}
                                >
                                  <div className="space-y-1">
                                    {activity.details.semen && (
                                      <p style={{ color: "#374151" }}>
                                        <strong>Semen used:</strong> {activity.details.semen}
                                      </p>
                                    )}
                                    {activity.details.dose && (
                                      <p style={{ color: "#374151" }}>
                                        <strong>Dose:</strong> {activity.details.dose}
                                      </p>
                                    )}
                                    {activity.details.completed && (
                                      <p style={{ color: "#374151" }}>
                                        <strong>Completed:</strong> {activity.details.completed}
                                      </p>
                                    )}
                                    {activity.details.otp && (
                                      <p style={{ color: "#10B981" }}>
                                        OTP {activity.details.otp}
                                      </p>
                                    )}
                                    {activity.details.next && (
                                      <p style={{ color: "#374151" }}>
                                        <strong>Next AI:</strong> {activity.details.next}
                                      </p>
                                    )}
                                  </div>
                                </Card>
                              )}
                            </div>
                          </div>
                        </Card>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
