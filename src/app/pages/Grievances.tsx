import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";
import { MessageSquare } from "lucide-react";

export function Grievances() {
  return (
    <div className="flex min-h-screen" style={{ backgroundColor: '#F5F5F5' }}>
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Header />

        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-2xl font-semibold mb-6 text-[#003366]">Grievances Management</h1>
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: '#E8F4FF' }}>
                  <MessageSquare className="w-8 h-8" style={{ color: '#003366' }} />
                </div>
              </div>
              <h2 className="text-xl font-semibold mb-2" style={{ color: '#003366' }}>
                Grievances Management Module
              </h2>
              <p className="text-gray-600">
                This module is under development. It will include complaint registration, tracking, resolution workflow, and feedback management.
              </p>
              <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg" style={{ backgroundColor: '#FEE2E2' }}>
                <span className="text-sm" style={{ color: '#991B1B' }}>
                  34 pending grievances require attention
                </span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
