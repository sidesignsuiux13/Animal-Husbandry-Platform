import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card } from "./ui/card";
import { Search } from "lucide-react";

interface Animal {
  id: string;
  breed: string;
  age: string;
  lastService?: string;
}

interface FarmerData {
  name: string;
  mobile: string;
  aadhaar: string;
  village: string;
  livestock: number;
}

interface Props {
  onComplete: (farmer: FarmerData, animal: Animal) => void;
}

export function FarmerIdentificationStep({ onComplete }: Props) {
  const [searchQuery, setSearchQuery] = useState("");
  const [farmerFound, setFarmerFound] = useState(false);
  const [showManualEntry, setShowManualEntry] = useState(false);
  const [selectedAnimal, setSelectedAnimal] = useState<Animal | null>(null);

  const [farmerData, setFarmerData] = useState<FarmerData>({
    name: "",
    mobile: "",
    aadhaar: "",
    village: "",
    livestock: 0,
  });

  const mockAnimals: Animal[] = [
    { id: "IN1234", breed: "Holstein Friesian", age: "4 years", lastService: "Last AI: 3 months ago" },
    { id: "IN1235", breed: "Sahiwal", age: "2 years", lastService: "Last vaccine: FMD" },
  ];

  const handleSearch = () => {
    if (searchQuery === "9876543210" || searchQuery.length === 12) {
      setFarmerData({
        name: "Ramesh Yadav",
        mobile: "987654XXXX",
        aadhaar: "XXXX-XXXX-1234",
        village: "Bakshi Ka Talab Village, Lucknow",
        livestock: 3,
      });
      setFarmerFound(true);
    } else {
      setShowManualEntry(true);
    }
  };

  const handleUseFarmer = () => {
    if (selectedAnimal) {
      onComplete(farmerData, selectedAnimal);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center gap-2">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "#FF6600" }}
            >
              <span className="text-white font-bold text-sm">●</span>
            </div>
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "#E5E7EB" }}
            >
              <span className="text-gray-400 font-bold text-sm">○</span>
            </div>
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "#E5E7EB" }}
            >
              <span className="text-gray-400 font-bold text-sm">○</span>
            </div>
          </div>
          <span className="text-sm ml-2" style={{ color: "#6B7280" }}>
            Step 1 of 3
          </span>
        </div>
        <h2 className="text-xl font-bold" style={{ color: "#003366" }}>
          Farmer Details
        </h2>
      </div>

      {!farmerFound && !showManualEntry && (
        <Card className="p-6">
          <label className="block text-sm font-medium mb-2" style={{ color: "#374151" }}>
            Enter farmer mobile or Aadhaar
          </label>
          <div className="flex gap-2">
            <Input
              placeholder="Mobile number or Aadhaar"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1"
            />
            <Button onClick={handleSearch} style={{ backgroundColor: "#FF6600", color: "white" }}>
              <Search className="w-4 h-4 mr-2" />
              Search
            </Button>
          </div>
        </Card>
      )}

      {farmerFound && (
        <>
          <Card className="p-6" style={{ backgroundColor: "#F0FDF4", borderColor: "#10B981" }}>
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: "#10B981" }}>
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="font-medium" style={{ color: "#065F46" }}>
                  Fetched from National Farmer Registry
                </span>
              </div>
              <h3 className="text-lg font-bold mb-1" style={{ color: "#003366" }}>
                {farmerData.name}
              </h3>
              <p className="text-sm mb-1" style={{ color: "#374151" }}>
                {farmerData.village}
              </p>
              <p className="text-sm mb-1" style={{ color: "#6B7280" }}>
                Mobile: {farmerData.mobile}
              </p>
              <p className="text-sm mb-1" style={{ color: "#6B7280" }}>
                Aadhaar: {farmerData.aadhaar}
              </p>
              <p className="text-sm" style={{ color: "#6B7280" }}>
                Livestock: {farmerData.livestock} cattle registered
              </p>
            </div>
          </Card>

          <div>
            <label className="block text-sm font-medium mb-3" style={{ color: "#374151" }}>
              Select the animal this request is for:
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {mockAnimals.map((animal) => (
                <button
                  key={animal.id}
                  onClick={() => setSelectedAnimal(animal)}
                  className="p-4 rounded-lg border-2 text-left transition-all"
                  style={{
                    borderColor: selectedAnimal?.id === animal.id ? "#FF6600" : "#E5E7EB",
                    backgroundColor: selectedAnimal?.id === animal.id ? "#FFF7ED" : "white",
                  }}
                >
                  <div className="text-2xl mb-2">🐄</div>
                  <div className="font-semibold mb-1" style={{ color: "#003366" }}>
                    {animal.id}
                  </div>
                  <div className="text-sm mb-1" style={{ color: "#374151" }}>
                    {animal.breed}
                  </div>
                  <div className="text-xs" style={{ color: "#6B7280" }}>
                    {animal.age}
                  </div>
                  {animal.lastService && (
                    <div className="text-xs mt-1" style={{ color: "#6B7280" }}>
                      {animal.lastService}
                    </div>
                  )}
                </button>
              ))}
            </div>
            <button className="text-sm mt-3" style={{ color: "#3B82F6" }}>
              Animal not listed? Add manually
            </button>
          </div>
        </>
      )}

      {showManualEntry && (
        <Card className="p-6">
          <h3 className="font-semibold mb-4" style={{ color: "#003366" }}>
            Manual Farmer Entry
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: "#374151" }}>
                Farmer Name
              </label>
              <Input placeholder="Enter farmer name" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: "#374151" }}>
                Mobile Number
              </label>
              <Input placeholder="10-digit mobile number" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: "#374151" }}>
                Aadhaar Number
              </label>
              <Input placeholder="12-digit Aadhaar" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: "#374151" }}>
                Village
              </label>
              <Input placeholder="Village name" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: "#374151" }}>
                  Block
                </label>
                <Input value="Bakshi Ka Talab" disabled />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: "#374151" }}>
                  District
                </label>
                <Input value="Lucknow" disabled />
              </div>
            </div>
          </div>
        </Card>
      )}

      {farmerFound && selectedAnimal && (
        <div className="flex justify-end">
          <Button onClick={handleUseFarmer} style={{ backgroundColor: "#FF6600", color: "white" }}>
            Next: Service Details →
          </Button>
        </div>
      )}
    </div>
  );
}
