import { useState } from "react";
import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/tabs";
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { CheckCircle, MapPin, Share2, Navigation, Eye, Star } from "lucide-react";

export function OnCallAI() {
  const [activeTab, setActiveTab] = useState("book-service");
  const [bookingStep, setBookingStep] = useState(3);

  const technicianBookings = [
    {
      ref: "AI-2025-0847",
      status: "completed",
      statusText: "Completed",
      farmer: "Ramesh Yadav",
      animal: "Holstein IN1234",
      location: "Bakshi Ka Talab Village",
      slot: "Morning",
      semen: "SC-2025-0441",
      otp: true,
      time: "11:15 AM",
      rating: 5,
    },
    {
      ref: "AI-2025-0848",
      status: "en-route",
      statusText: "En Route",
      farmer: "Sunita Devi",
      animal: "Sahiwal IN2345",
      location: "Brahmagiri Village",
      slot: "Afternoon",
      semen: "Normal Cattle",
      semenAvailable: true,
    },
    {
      ref: "AI-2025-0851",
      status: "assigned",
      statusText: "Assigned",
      farmer: "Vikas Kumar",
      location: "Dharmasala Village",
      slot: "Evening",
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800 border-green-200";
      case "en-route":
        return "bg-orange-100 text-orange-800 border-orange-200";
      case "assigned":
        return "bg-blue-100 text-blue-800 border-blue-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return "✅";
      case "en-route":
        return "🟠";
      case "assigned":
        return "🔵";
      default:
        return "⚪";
    }
  };

  return (
    <div className="flex min-h-screen bg-[#F5F5F5]">
      <Sidebar activeRoute="/oncall-ai" />

      <div className="flex-1 flex flex-col">
        <Header />

        <main className="flex-1 p-6">
          <h1 className="text-2xl font-semibold mb-6 text-[#003366]">
            On-Call Artificial Insemination Service
          </h1>

          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-6">
              <TabsTrigger value="book-service">Book Service</TabsTrigger>
              <TabsTrigger value="manage-bookings">Manage Bookings</TabsTrigger>
              <TabsTrigger value="technician-view">Technician View</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>

            {/* Book Service Tab */}
            <TabsContent value="book-service">
              <div className="max-w-3xl mx-auto">
                {/* Step Indicator */}
                <div className="flex items-center justify-center mb-8">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-semibold">
                        ①
                      </div>
                      <span className="text-sm font-medium">Select Animal</span>
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    </div>

                    <div className="w-12 h-0.5 bg-green-500" />

                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-semibold">
                        ②
                      </div>
                      <span className="text-sm font-medium">Choose Slot</span>
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    </div>

                    <div className="w-12 h-0.5 bg-[#003366]" />

                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-[#003366] text-white flex items-center justify-center font-semibold">
                        ③
                      </div>
                      <span className="text-sm font-medium">Confirm Booking</span>
                    </div>
                  </div>
                </div>

                {/* Step 3 - Confirm Booking */}
                <Card>
                  <CardHeader>
                    <CardTitle>Confirm Your Booking</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Booking Summary */}
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-600">Animal</p>
                          <p className="font-semibold">Holstein Friesian | IN1234</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Breed</p>
                          <p className="font-semibold">Holstein Friesian | Age: 4 yrs</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Date</p>
                          <p className="font-semibold">24 May 2025</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Time</p>
                          <p className="font-semibold">Morning (7 AM – 11 AM)</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Location</p>
                          <p className="font-semibold">Bakshi Ka Talab Village, Lucknow</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Estimated Arrival</p>
                          <p className="font-semibold">9:00 AM</p>
                        </div>
                      </div>

                      <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                        <p className="text-sm text-green-800">
                          <CheckCircle className="w-4 h-4 inline mr-1" />
                          Semen availability: ✓ Available nearby
                        </p>
                      </div>
                    </div>

                    <Button className="w-full bg-[#FF6600] hover:bg-[#FF6600]/90 py-6 text-lg">
                      Confirm Booking
                    </Button>

                    {/* Confirmed State */}
                    <Card className="bg-green-50 border-green-200">
                      <CardContent className="pt-6">
                        <div className="text-center mb-4">
                          <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-2" />
                          <h3 className="text-xl font-semibold text-green-800 mb-1">
                            BOOKING CONFIRMED
                          </h3>
                        </div>

                        <div className="space-y-3 mb-6">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-700">Reference:</span>
                            <span className="font-semibold">AI-2025-0852</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-700">Date:</span>
                            <span className="font-semibold">24 May, Morning</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-700">Status:</span>
                            <Badge className="bg-blue-100 text-blue-800 border-blue-200">
                              Awaiting Technician
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-600">SMS sent to 987654XXXX</p>
                        </div>

                        {/* Status Tracker */}
                        <div className="mb-6">
                          <h4 className="font-semibold text-sm mb-3">Status Tracker:</h4>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <div className="w-4 h-4 rounded-full bg-green-500" />
                              <span className="text-sm">Booked ✓</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-4 h-4 rounded-full bg-gray-300" />
                              <span className="text-sm text-gray-500">Technician Assigned</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-4 h-4 rounded-full bg-gray-300" />
                              <span className="text-sm text-gray-500">En Route</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-4 h-4 rounded-full bg-gray-300" />
                              <span className="text-sm text-gray-500">Completed</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex gap-2">
                          <Button variant="outline" className="flex-1">
                            <Eye className="w-4 h-4 mr-1" />
                            Track Booking
                          </Button>
                          <Button variant="outline" className="flex-1">
                            <Share2 className="w-4 h-4 mr-1" />
                            Share WhatsApp
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Manage Bookings Tab */}
            <TabsContent value="manage-bookings">
              <Card>
                <CardContent className="pt-6">
                  <p className="text-center text-gray-500">Manage Bookings content here</p>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Technician View Tab */}
            <TabsContent value="technician-view">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-semibold text-[#003366]">
                      Today's Assigned Bookings
                    </h2>
                    <p className="text-sm text-gray-600">Date: 22 May 2025 | Rajan Kumar, AIT</p>
                  </div>
                </div>

                <div className="grid gap-6">
                  {/* Card 1 - Completed */}
                  <Card className="border-l-4 border-green-500">
                    <CardContent className="pt-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-semibold text-lg">
                              {technicianBookings[0].ref}
                            </h3>
                            <Badge className={getStatusBadge(technicianBookings[0].status)}>
                              {getStatusIcon(technicianBookings[0].status)}{" "}
                              {technicianBookings[0].statusText}
                            </Badge>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-gray-600">Farmer</p>
                          <p className="font-medium">{technicianBookings[0].farmer}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Animal</p>
                          <p className="font-medium">{technicianBookings[0].animal}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Location</p>
                          <p className="font-medium flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {technicianBookings[0].location}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Slot</p>
                          <p className="font-medium">{technicianBookings[0].slot}</p>
                        </div>
                      </div>

                      <div className="space-y-2 p-3 bg-green-50 border border-green-200 rounded-lg">
                        <p className="text-sm">
                          <span className="text-gray-600">Semen used:</span>{" "}
                          <span className="font-medium">{technicianBookings[0].semen}</span>
                        </p>
                        <p className="text-sm">
                          <span className="text-gray-600">OTP verified:</span>{" "}
                          <span className="text-green-600 font-medium">
                            ✓ | Time: {technicianBookings[0].time}
                          </span>
                        </p>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 fill-yellow-400 text-yellow-400"
                            />
                          ))}
                          <span className="text-sm ml-2">Farmer feedback</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Card 2 - En Route */}
                  <Card className="border-l-4 border-orange-500">
                    <CardContent className="pt-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-semibold text-lg">
                              {technicianBookings[1].ref}
                            </h3>
                            <Badge className={getStatusBadge(technicianBookings[1].status)}>
                              {getStatusIcon(technicianBookings[1].status)}{" "}
                              {technicianBookings[1].statusText}
                            </Badge>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-gray-600">Farmer</p>
                          <p className="font-medium">{technicianBookings[1].farmer}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Animal</p>
                          <p className="font-medium">{technicianBookings[1].animal}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Location</p>
                          <p className="font-medium flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {technicianBookings[1].location}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Slot</p>
                          <p className="font-medium">{technicianBookings[1].slot}</p>
                        </div>
                      </div>

                      <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg mb-4">
                        <p className="text-sm">
                          <span className="text-gray-600">Semen:</span>{" "}
                          <span className="font-medium">
                            {technicianBookings[1].semen} ✓ Available
                          </span>
                        </p>
                      </div>

                      <div className="space-y-3">
                        <Button className="w-full bg-[#FF6600] hover:bg-[#FF6600]/90">
                          Complete Service
                        </Button>

                        <div className="space-y-2">
                          <label className="text-sm font-medium">OTP Entry</label>
                          <div className="flex gap-2">
                            <Input
                              placeholder="_"
                              maxLength={1}
                              className="w-12 h-12 text-center text-lg"
                            />
                            <Input
                              placeholder="_"
                              maxLength={1}
                              className="w-12 h-12 text-center text-lg"
                            />
                            <Input
                              placeholder="_"
                              maxLength={1}
                              className="w-12 h-12 text-center text-lg"
                            />
                            <Input
                              placeholder="_"
                              maxLength={1}
                              className="w-12 h-12 text-center text-lg"
                            />
                          </div>
                          <p className="text-xs text-gray-600">Enter OTP from farmer</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Card 3 - Upcoming */}
                  <Card className="border-l-4 border-blue-500">
                    <CardContent className="pt-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-semibold text-lg">
                              {technicianBookings[2].ref}
                            </h3>
                            <Badge className={getStatusBadge(technicianBookings[2].status)}>
                              {getStatusIcon(technicianBookings[2].status)}{" "}
                              {technicianBookings[2].statusText}
                            </Badge>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-gray-600">Farmer</p>
                          <p className="font-medium">{technicianBookings[2].farmer}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Location</p>
                          <p className="font-medium flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {technicianBookings[2].location}
                          </p>
                        </div>
                        <div className="col-span-2">
                          <p className="text-sm text-gray-600">Slot</p>
                          <p className="font-medium">{technicianBookings[2].slot}</p>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button variant="outline" className="flex-1">
                          <Navigation className="w-4 h-4 mr-1" />
                          Navigate to Location
                        </Button>
                        <Button variant="outline" className="flex-1">
                          <Eye className="w-4 h-4 mr-1" />
                          View Details
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Analytics Tab */}
            <TabsContent value="analytics">
              <Card>
                <CardContent className="pt-6">
                  <p className="text-center text-gray-500">Analytics content here</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
}
