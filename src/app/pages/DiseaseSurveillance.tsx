import { useState } from "react";
import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/tabs";
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Checkbox } from "../components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import {
  AlertTriangle,
  Download,
  Printer,
  CheckCircle,
  Clock,
  Circle,
  TestTube,
  Syringe,
  FlaskConical,
  PencilRuler,
  Beef,
  Milk,
} from "lucide-react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export function DiseaseSurveillance() {
  const [activeTab, setActiveTab] = useState("lab-queue");
  const [selectedSampleType, setSelectedSampleType] = useState("blood");
  const [selectedLab, setSelectedLab] = useState("ddl-cuttack");
  const [symptoms, setSymptoms] = useState({
    fever: true,
    lethargy: true,
    lossOfAppetite: false,
    nasalDischarge: true,
    lameness: true,
    skinLesions: false,
    diarrhoea: false,
    respiratoryDistress: false,
    suddenDeath: false,
    abortion: false,
  });

  const labQueueData = [
    {
      regNo: "DDL-2025-0241",
      farmer: "Ramesh Pradhan",
      district: "Cuttack",
      sample: "Blood",
      lab: "DDL Cuttack",
      submitted: "19 May",
      status: "testing",
      statusText: "Under Testing",
    },
    {
      regNo: "DDL-2025-0242",
      farmer: "Sunita Behera",
      district: "Puri",
      sample: "Serum",
      lab: "DDL Bhubaneswar",
      submitted: "20 May",
      status: "received",
      statusText: "Received",
    },
    {
      regNo: "DDL-2025-0243",
      farmer: "Manoj Nayak",
      district: "Balasore",
      sample: "Swab",
      lab: "DDL Sambalpur",
      submitted: "20 May",
      status: "registered",
      statusText: "Registered",
    },
    {
      regNo: "DDL-2025-0244",
      farmer: "Bikash Jena",
      district: "Jajpur",
      sample: "Blood",
      lab: "ADRI Phulnakhara",
      submitted: "21 May",
      status: "ready",
      statusText: "Report Ready",
    },
    {
      regNo: "DDL-2025-0245",
      farmer: "Priya Sahoo",
      district: "Khordha",
      sample: "Milk",
      lab: "DDL Bhubaneswar",
      submitted: "21 May",
      status: "registered",
      statusText: "Registered",
    },
  ];

  const topDiseasesData = [
    { disease: "FMD", cases: 24 },
    { disease: "HS", cases: 18 },
    { disease: "BQ", cases: 12 },
    { disease: "PPR", cases: 8 },
    { disease: "Mastitis", cases: 6 },
    { disease: "Theileriosis", cases: 4 },
  ];

  const trendData = [
    { month: "Jan", FMD: 8, HS: 6, BQ: 4 },
    { month: "Feb", FMD: 12, HS: 9, BQ: 5 },
    { month: "Mar", FMD: 18, HS: 12, BQ: 8 },
    { month: "Apr", FMD: 22, HS: 16, BQ: 10 },
    { month: "May", FMD: 24, HS: 18, BQ: 12 },
  ];

  const outbreakHistory = [
    {
      disease: "FMD",
      district: "Cuttack",
      cases: 24,
      dateRange: "15-22 May 2025",
      status: "active",
    },
    {
      disease: "HS",
      district: "Koraput",
      cases: 18,
      dateRange: "01-15 Apr 2025",
      status: "contained",
    },
    {
      disease: "BQ",
      district: "Gajapati",
      cases: 12,
      dateRange: "10-28 Mar 2025",
      status: "contained",
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "testing":
        return <Circle className="w-3 h-3 fill-blue-500 text-blue-500" />;
      case "received":
        return <Circle className="w-3 h-3 fill-yellow-500 text-yellow-500" />;
      case "registered":
        return <Circle className="w-3 h-3 fill-gray-400 text-gray-400" />;
      case "ready":
        return <Circle className="w-3 h-3 fill-green-500 text-green-500" />;
      default:
        return <Circle className="w-3 h-3" />;
    }
  };

  const sampleTypes = [
    { id: "blood", label: "Blood", icon: TestTube },
    { id: "serum", label: "Serum", icon: FlaskConical },
    { id: "tissue", label: "Tissue", icon: Beef },
    { id: "swab", label: "Swab", icon: PencilRuler },
    { id: "faeces", label: "Faeces", icon: Circle },
    { id: "milk", label: "Milk", icon: Milk },
    { id: "other", label: "Other", icon: Circle },
  ];

  return (
    <div className="flex min-h-screen bg-[#F5F5F5]">
      <Sidebar activeRoute="/disease-surveillance" />

      <div className="flex-1 flex flex-col">
        <Header />

        <main className="flex-1 p-6">
          <div className="max-w-[1600px] mx-auto">
            {/* Page Title */}
            <h1 className="text-2xl font-semibold mb-6 text-[#003366]">
              Disease Diagnosis & Surveillance
            </h1>

            {/* Outbreak Alert Banner */}
            <div className="bg-red-500 text-white p-4 rounded-lg mb-6 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-semibold">OUTBREAK ALERT: Foot and Mouth Disease</span>
                <span className="mx-2">—</span>
                <span>
                  7 cases in Cuttack district in last 7 days. Immediate containment required.
                  Contact ADRI Phulnakhara.
                </span>
              </div>
            </div>

            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="mb-6">
                <TabsTrigger value="submit-sample">Submit Sample</TabsTrigger>
                <TabsTrigger value="lab-queue">Lab Queue</TabsTrigger>
                <TabsTrigger value="view-report">View Report</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
              </TabsList>

              {/* Submit Sample Tab */}
              <TabsContent value="submit-sample">
                <div className="max-w-[700px] mx-auto">
                  <Card>
                    <CardHeader>
                      <CardTitle>Register Disease Sample</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {/* Section 1 - Beneficiary Details */}
                      <div className="space-y-4">
                        <h3 className="font-semibold text-[#003366]">Beneficiary Details</h3>

                        <div className="space-y-2">
                          <label className="text-sm">Farmer Name</label>
                          <Input placeholder="Ramesh Pradhan" defaultValue="Ramesh Pradhan" />
                        </div>

                        <div className="grid grid-cols-3 gap-4">
                          <div className="space-y-2">
                            <label className="text-sm">District</label>
                            <Select defaultValue="cuttack">
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="cuttack">Cuttack</SelectItem>
                                <SelectItem value="puri">Puri</SelectItem>
                                <SelectItem value="balasore">Balasore</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm">Block</label>
                            <Select defaultValue="salipur">
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="salipur">Salipur</SelectItem>
                                <SelectItem value="banki">Banki</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm">Village</label>
                            <Input placeholder="Kendupalli" defaultValue="Kendupalli" />
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label className="text-sm">Mobile</label>
                            <Input placeholder="9876543210" defaultValue="9876543210" />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm">Aadhaar</label>
                            <Input placeholder="XXXX-XXXX-1234" defaultValue="XXXX-XXXX-1234" />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label className="text-sm">Livestock ID (optional)</label>
                          <Input placeholder="OD1234" defaultValue="OD1234" />
                        </div>

                        <Badge className="bg-green-100 text-green-800 border-green-200">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          Fetched from Bharat Pashudhan
                        </Badge>
                      </div>

                      {/* Section 2 - Symptoms */}
                      <div className="space-y-4">
                        <h3 className="font-semibold text-[#003366]">Symptoms</h3>

                        <div className="grid grid-cols-3 gap-4">
                          {[
                            { key: "fever", label: "Fever" },
                            { key: "lethargy", label: "Lethargy" },
                            { key: "lossOfAppetite", label: "Loss of Appetite" },
                            { key: "nasalDischarge", label: "Nasal Discharge" },
                            { key: "lameness", label: "Lameness" },
                            { key: "skinLesions", label: "Skin Lesions" },
                            { key: "diarrhoea", label: "Diarrhoea" },
                            { key: "respiratoryDistress", label: "Respiratory Distress" },
                            { key: "suddenDeath", label: "Sudden Death" },
                            { key: "abortion", label: "Abortion" },
                          ].map((symptom) => (
                            <div key={symptom.key} className="flex items-center gap-2">
                              <Checkbox
                                checked={symptoms[symptom.key as keyof typeof symptoms]}
                                onCheckedChange={(checked) =>
                                  setSymptoms((prev) => ({
                                    ...prev,
                                    [symptom.key]: checked === true,
                                  }))
                                }
                              />
                              <label className="text-sm cursor-pointer">
                                {symptom.label}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Section 3 - Sample Details */}
                      <div className="space-y-4">
                        <h3 className="font-semibold text-[#003366]">Sample Details</h3>

                        <div className="space-y-2">
                          <label className="text-sm">Sample Type</label>
                          <div className="grid grid-cols-4 gap-3">
                            {sampleTypes.map((type) => {
                              const Icon = type.icon;
                              return (
                                <button
                                  key={type.id}
                                  onClick={() => setSelectedSampleType(type.id)}
                                  className={`flex flex-col items-center gap-2 p-3 border-2 rounded-lg transition-all ${
                                    selectedSampleType === type.id
                                      ? "border-[#003366] bg-blue-50"
                                      : "border-gray-200 hover:border-gray-300"
                                  }`}
                                >
                                  <Icon className="w-6 h-6" />
                                  <span className="text-xs">{type.label}</span>
                                </button>
                              );
                            })}
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label className="text-sm">Submitting Lab</label>
                          <RadioGroup value={selectedLab} onValueChange={setSelectedLab}>
                            {[
                              { id: "ddl-cuttack", label: "DDL Cuttack" },
                              { id: "ddl-bhubaneswar", label: "DDL Bhubaneswar" },
                              { id: "ddl-sambalpur", label: "DDL Sambalpur" },
                              { id: "ddl-balasore", label: "DDL Balasore" },
                              { id: "adri-phulnakhara", label: "ADRI Phulnakhara" },
                            ].map((lab) => (
                              <div key={lab.id} className="flex items-center gap-2">
                                <RadioGroupItem value={lab.id} id={lab.id} />
                                <label htmlFor={lab.id} className="text-sm cursor-pointer">
                                  {lab.label}
                                </label>
                              </div>
                            ))}
                          </RadioGroup>
                        </div>
                      </div>

                      <Button className="w-full bg-[#FF6600] hover:bg-[#FF6600]/90">
                        Submit Sample Registration
                      </Button>

                      {/* Confirmation Card */}
                      <Card className="bg-green-50 border-green-200">
                        <CardContent className="pt-6 text-center">
                          <div className="flex justify-center mb-3">
                            <CheckCircle className="w-10 h-10 text-green-600" />
                          </div>
                          <h4 className="font-semibold mb-2">SAMPLE REGISTERED</h4>
                          <div className="space-y-1 text-sm text-gray-700 mb-4">
                            <p>
                              <span className="font-semibold">Registration No:</span> DDL-2025-0247
                            </p>
                            <p>
                              <span className="font-semibold">Submitted to:</span> DDL Cuttack
                            </p>
                            <p>
                              <span className="font-semibold">Date:</span> 22 May 2025
                            </p>
                          </div>
                          <p className="text-sm text-gray-600 mb-4">
                            Track using this number. SMS sent to 987654XXXX
                          </p>
                          <div className="flex gap-2 justify-center">
                            <Button variant="outline" size="sm">
                              <Download className="w-4 h-4 mr-1" />
                              Download Receipt
                            </Button>
                            <Button variant="outline" size="sm">
                              Track
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Lab Queue Tab */}
              <TabsContent value="lab-queue">
                <div className="grid grid-cols-[1fr,450px] gap-6">
                  {/* Lab Queue Table */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Lab Queue</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead>
                            <tr className="border-b">
                              <th className="text-left p-3 text-sm font-semibold">Reg No</th>
                              <th className="text-left p-3 text-sm font-semibold">Farmer</th>
                              <th className="text-left p-3 text-sm font-semibold">District</th>
                              <th className="text-left p-3 text-sm font-semibold">Sample</th>
                              <th className="text-left p-3 text-sm font-semibold">Lab</th>
                              <th className="text-left p-3 text-sm font-semibold">Submitted</th>
                              <th className="text-left p-3 text-sm font-semibold">Status</th>
                              <th className="text-left p-3 text-sm font-semibold">Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            {labQueueData.map((item) => (
                              <tr key={item.regNo} className="border-b hover:bg-gray-50">
                                <td className="p-3 text-sm font-medium">{item.regNo}</td>
                                <td className="p-3 text-sm">{item.farmer}</td>
                                <td className="p-3 text-sm">{item.district}</td>
                                <td className="p-3 text-sm">{item.sample}</td>
                                <td className="p-3 text-sm">{item.lab}</td>
                                <td className="p-3 text-sm">{item.submitted}</td>
                                <td className="p-3">
                                  <div className="flex items-center gap-2">
                                    {getStatusIcon(item.status)}
                                    <span className="text-sm">{item.statusText}</span>
                                  </div>
                                </td>
                                <td className="p-3">
                                  <Button variant="outline" size="sm">
                                    {item.status === "ready"
                                      ? "View Report"
                                      : item.status === "testing"
                                      ? "Enter Results"
                                      : item.status === "received"
                                      ? "Start Testing"
                                      : "Mark Received"}
                                  </Button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Diagnosis Report Panel */}
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="font-semibold mb-4 text-[#003366]">DIAGNOSIS REPORT</h3>
                      <div className="space-y-4 text-sm">
                        <div>
                          <p className="font-semibold text-lg">DDL-2025-0244</p>
                        </div>

                        <div className="border-t pt-4 space-y-2">
                          <p>
                            <span className="text-gray-600">Patient:</span> Bikash Jena
                          </p>
                          <p>
                            <span className="text-gray-600">Livestock:</span> OD3456 Murrah Buffalo
                          </p>
                          <p>
                            <span className="text-gray-600">Lab:</span> ADRI Phulnakhara
                          </p>
                        </div>

                        <div className="border-t pt-4">
                          <p className="font-semibold mb-1">Disease: Foot & Mouth Disease</p>
                          <div className="flex items-center gap-2">
                            <span className="text-gray-600">Severity:</span>
                            <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">
                              MODERATE
                            </Badge>
                          </div>
                        </div>

                        <div className="border-t pt-4">
                          <p className="font-semibold mb-2">ADVISORY</p>
                          <ul className="space-y-1 text-sm text-gray-700">
                            <li>• Isolate animal immediately</li>
                            <li>• Administer FMD antiviral</li>
                            <li>• Revaccinate herd within 7 days</li>
                            <li>• Report to district vet officer</li>
                          </ul>
                        </div>

                        <div className="border-t pt-4">
                          <p className="font-semibold mb-2">VACCINATION HISTORY</p>
                          <ul className="space-y-1 text-sm text-gray-700">
                            <li className="flex items-center gap-2">
                              <CheckCircle className="w-3 h-3 text-green-600" />
                              BQ — 20 Mar 2025
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="w-3 h-3 text-green-600" />
                              FMD — 15 Nov 2024
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="w-3 h-3 text-green-600" />
                              HS — 08 Jun 2024
                            </li>
                          </ul>
                        </div>

                        <div className="border-t pt-4">
                          <p className="text-sm">
                            <span className="font-semibold">Charges:</span> ₹150 |{" "}
                            <span className="text-green-600 font-semibold">✓ Paid</span>
                          </p>
                        </div>

                        <div className="border-t pt-4 flex gap-2">
                          <Button variant="outline" size="sm" className="flex-1">
                            <Printer className="w-4 h-4 mr-1" />
                            Print Report
                          </Button>
                          <Button variant="outline" size="sm" className="flex-1">
                            <Download className="w-4 h-4 mr-1" />
                            Download PDF
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* View Report Tab */}
              <TabsContent value="view-report">
                <div className="grid grid-cols-[450px,1fr] gap-6">
                  {/* Report Lookup */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Fetch Diagnosis Report</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <label className="text-sm">Mobile or Aadhaar</label>
                        <Input placeholder="9876543210" defaultValue="9876543210" />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm">Registration Number</label>
                        <Input placeholder="DDL-2025-0244" defaultValue="DDL-2025-0244" />
                      </div>

                      <Button className="w-full bg-[#FF6600] hover:bg-[#FF6600]/90">
                        Fetch Report
                      </Button>

                      <div className="border-t pt-4">
                        <p className="font-semibold mb-3 text-sm">Your saved registrations:</p>
                        <div className="space-y-2">
                          <div className="p-3 bg-gray-50 rounded-lg text-sm cursor-pointer hover:bg-gray-100">
                            <p className="font-medium">DDL-2025-0241</p>
                            <p className="text-gray-600">19 May | Ramesh Pradhan</p>
                            <Badge variant="outline" className="mt-1">
                              Pending
                            </Badge>
                          </div>
                          <div className="p-3 bg-green-50 rounded-lg text-sm cursor-pointer hover:bg-green-100">
                            <p className="font-medium">DDL-2025-0244</p>
                            <p className="text-gray-600">21 May | Bikash Jena</p>
                            <Badge className="mt-1 bg-green-100 text-green-800 border-green-200">
                              ✓ Ready
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Full Report Display */}
                  <Card>
                    <CardContent className="pt-6">
                      <h2 className="text-xl font-semibold mb-1 text-[#003366]">
                        DIAGNOSIS REPORT
                      </h2>
                      <p className="text-sm text-gray-600 mb-4">
                        DDL-2025-0244 | ADRI Phulnakhara
                      </p>
                      <p className="text-sm text-gray-600 mb-6">Report Date: 22 May 2025</p>

                      <div className="space-y-6">
                        <div className="border-t pt-4">
                          <h3 className="font-semibold mb-3 text-[#003366]">PATIENT DETAILS</h3>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <p className="text-gray-600">Farmer</p>
                              <p className="font-medium">Bikash Jena</p>
                            </div>
                            <div>
                              <p className="text-gray-600">Mobile</p>
                              <p className="font-medium">987654XXXX</p>
                            </div>
                            <div>
                              <p className="text-gray-600">Livestock</p>
                              <p className="font-medium">OD3456 | Murrah Buffalo</p>
                            </div>
                            <div>
                              <p className="text-gray-600">Age</p>
                              <p className="font-medium">5 years</p>
                            </div>
                          </div>
                        </div>

                        <div className="border-t pt-4">
                          <h3 className="font-semibold mb-3 text-[#003366]">DIAGNOSIS</h3>
                          <div className="space-y-2 text-sm">
                            <p>
                              <span className="text-gray-600">Disease:</span>{" "}
                              <span className="font-semibold">Foot and Mouth Disease</span>
                            </p>
                            <p className="flex items-center gap-2">
                              <span className="text-gray-600">Severity:</span>
                              <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">
                                MODERATE
                              </Badge>
                            </p>
                            <p>
                              <span className="text-gray-600">Diagnosed by:</span> Dr. S. Mishra,
                              ADRI
                            </p>
                          </div>
                        </div>

                        <div className="border-t pt-4">
                          <h3 className="font-semibold mb-3 text-[#003366]">ADVISORY</h3>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li>• Isolate affected animal immediately from herd</li>
                            <li>• Administer FMD antiviral treatment within 24 hours</li>
                            <li>• Revaccinate entire herd within 7 days</li>
                            <li>• Report to district vet officer</li>
                            <li>• Follow up in 14 days</li>
                          </ul>
                        </div>

                        <div className="border-t pt-4">
                          <h3 className="font-semibold mb-3 text-[#003366]">
                            VACCINATION HISTORY
                          </h3>
                          <Badge className="mb-3 bg-green-100 text-green-800 border-green-200">
                            <CheckCircle className="w-3 h-3 mr-1" />
                            Fetched from Bharat Pashudhan
                          </Badge>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-600" />
                              BQ Vaccine — 20 Mar 2025
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-600" />
                              FMD Vaccine — 15 Nov 2024
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-600" />
                              HS Vaccine — 08 Jun 2024
                            </li>
                          </ul>
                        </div>

                        <div className="border-t pt-4">
                          <h3 className="font-semibold mb-3 text-[#003366]">CHARGES</h3>
                          <p className="text-sm">
                            Test Fee: <span className="font-semibold">₹150</span> | Status:{" "}
                            <span className="text-green-600 font-semibold">✓ Paid</span>
                          </p>
                        </div>

                        <div className="border-t pt-4 flex gap-3">
                          <Button variant="outline" className="flex-1">
                            <Printer className="w-4 h-4 mr-2" />
                            Print Report
                          </Button>
                          <Button variant="outline" className="flex-1">
                            <Download className="w-4 h-4 mr-2" />
                            Download PDF
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Analytics Tab */}
              <TabsContent value="analytics">
                <div className="grid grid-cols-2 gap-6">
                  {/* Top Diseases */}
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                      <CardTitle>Top Diseases — May 2025</CardTitle>
                      <div className="flex gap-2">
                        <Select defaultValue="all">
                          <SelectTrigger className="w-[140px]">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All Districts</SelectItem>
                            <SelectItem value="cuttack">Cuttack</SelectItem>
                            <SelectItem value="puri">Puri</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={topDiseasesData} layout="vertical">
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis type="number" />
                          <YAxis dataKey="disease" type="category" width={80} />
                          <Tooltip />
                          <Bar dataKey="cases" fill="#003366" />
                        </BarChart>
                      </ResponsiveContainer>
                      <div className="mt-4">
                        <Button variant="outline" size="sm">
                          <Download className="w-4 h-4 mr-1" />
                          Download Excel
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Disease Incidence Trend */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Disease Incidence — Jan to May 2025</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={trendData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="month" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Line type="monotone" dataKey="FMD" stroke="#EF4444" strokeWidth={2} />
                          <Line type="monotone" dataKey="HS" stroke="#3B82F6" strokeWidth={2} />
                          <Line type="monotone" dataKey="BQ" stroke="#22C55E" strokeWidth={2} />
                        </LineChart>
                      </ResponsiveContainer>
                      <div className="mt-4">
                        <Button variant="outline" size="sm">
                          <Download className="w-4 h-4 mr-1" />
                          Download PDF
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  {/* District Heatmap */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Cases by District</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-6 gap-2">
                        {[
                          { name: "Cuttack", cases: 24, outbreak: true },
                          { name: "Puri", cases: 18 },
                          { name: "Balasore", cases: 15 },
                          { name: "Jajpur", cases: 12 },
                          { name: "Khordha", cases: 10 },
                          { name: "Kendrapara", cases: 8 },
                          { name: "Jagatsinghpur", cases: 7 },
                          { name: "Nayagarh", cases: 6 },
                          { name: "Dhenkanal", cases: 5 },
                          { name: "Angul", cases: 4 },
                          { name: "Boudh", cases: 3 },
                          { name: "Koraput", cases: 3 },
                          { name: "Gajapati", cases: 2 },
                          { name: "Rayagada", cases: 2 },
                          { name: "Kandhamal", cases: 1 },
                          { name: "Kalahandi", cases: 1 },
                        ].map((district) => (
                          <div
                            key={district.name}
                            className="relative p-3 rounded-lg text-center cursor-pointer transition-all hover:scale-105"
                            style={{
                              backgroundColor:
                                district.cases > 20
                                  ? "#DC2626"
                                  : district.cases > 15
                                  ? "#F97316"
                                  : district.cases > 10
                                  ? "#FBBF24"
                                  : district.cases > 5
                                  ? "#FDE047"
                                  : "#E5E7EB",
                              color: district.cases > 10 ? "white" : "#1F2937",
                            }}
                          >
                            {district.outbreak && (
                              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-600 rounded-full animate-pulse" />
                            )}
                            <p className="text-xs font-medium truncate">{district.name}</p>
                            <p className="font-semibold">{district.cases}</p>
                          </div>
                        ))}
                      </div>
                      {/* Legend */}
                      <div className="mt-4 flex items-center gap-4 text-xs">
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 bg-red-600 rounded" />
                          <span>High (&gt;20)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 bg-orange-500 rounded" />
                          <span>Medium (10-20)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 bg-yellow-300 rounded" />
                          <span>Low (&lt;10)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse" />
                          <span>Active Outbreak</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Outbreak History */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Outbreak History</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {outbreakHistory.map((outbreak, index) => (
                          <div
                            key={index}
                            className={`p-4 border-l-4 rounded-lg ${
                              outbreak.status === "active"
                                ? "border-red-500 bg-red-50"
                                : "border-green-500 bg-green-50"
                            }`}
                          >
                            <div className="grid grid-cols-4 gap-4 text-sm">
                              <div>
                                <p className="text-gray-600">Disease</p>
                                <p className="font-semibold">{outbreak.disease}</p>
                              </div>
                              <div>
                                <p className="text-gray-600">District</p>
                                <p className="font-semibold">{outbreak.district}</p>
                              </div>
                              <div>
                                <p className="text-gray-600">Cases</p>
                                <p className="font-semibold">{outbreak.cases}</p>
                              </div>
                              <div>
                                <p className="text-gray-600">Status</p>
                                <Badge
                                  className={
                                    outbreak.status === "active"
                                      ? "bg-red-100 text-red-800 border-red-200"
                                      : "bg-green-100 text-green-800 border-green-200"
                                  }
                                >
                                  {outbreak.status === "active" ? "🔴 Active" : "🟢 Contained"}
                                </Badge>
                              </div>
                            </div>
                            <p className="text-xs text-gray-600 mt-2">{outbreak.dateRange}</p>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4">
                        <Button variant="outline" size="sm">
                          <Download className="w-4 h-4 mr-1" />
                          Download PDF
                        </Button>
                      </div>
                    </CardContent>
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
