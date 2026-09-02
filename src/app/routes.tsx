import { createBrowserRouter } from "react-router";
import { LoginPage } from "./pages/LoginPage";
import { DirectorateDashboard } from "./pages/DirectorateDashboard";
import { FieldTechnicianDashboard } from "./pages/FieldTechnicianDashboard";
import { SemenInventory } from "./pages/SemenInventory";
import { VaccineInventory } from "./pages/VaccineInventory";
import { MedicineInventory } from "./pages/MedicineInventory";
import { DiseaseSurveillance } from "./pages/DiseaseSurveillance";
import { TrainingManagement } from "./pages/TrainingManagement";
import { MVUOperations } from "./pages/MVUOperations";
import { Expenditure } from "./pages/Expenditure";
import { FarmReports } from "./pages/FarmReports";
import { OnCallAI } from "./pages/OnCallAI";
import { Grievances } from "./pages/Grievances";
import { ServiceRequests } from "./pages/ServiceRequests";
import { FieldTechnicianRequests } from "./pages/FieldTechnicianRequests";
import { UserProfile } from "./pages/UserProfile";
import { PostApprovalAction } from "./pages/PostApprovalAction";
import { RequestAIService } from "./pages/RequestAIService";
import { RequestMedicine } from "./pages/RequestMedicine";
import { RequestVaccine } from "./pages/RequestVaccine";
import { LogNewRequest } from "./pages/LogNewRequest";
import { LogAIServiceRequest } from "./pages/LogAIServiceRequest";
import { LogMedicineRequest } from "./pages/LogMedicineRequest";
import { LogVaccineRequest } from "./pages/LogVaccineRequest";
import { LogDiseaseRequest } from "./pages/LogDiseaseRequest";
import { FarmerGrievances } from "./pages/FarmerGrievances";
import { FarmerActivityLog } from "./pages/FarmerActivityLog";
import { UserManagement } from "./pages/UserManagement";
import { ProtectedRoute } from "./components/ProtectedRoute";

const withProtection = (Component: React.ComponentType) => {
  return () => (
    <ProtectedRoute>
      <Component />
    </ProtectedRoute>
  );
};

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LoginPage,
  },
  {
    path: "/dashboard/directorate",
    Component: withProtection(DirectorateDashboard),
  },
  {
    path: "/dashboard/field-technician",
    Component: withProtection(FieldTechnicianDashboard),
  },
  {
    path: "/inventory/semen",
    Component: withProtection(SemenInventory),
  },
  {
    path: "/inventory/vaccine",
    Component: withProtection(VaccineInventory),
  },
  {
    path: "/inventory/medicine",
    Component: withProtection(MedicineInventory),
  },
  {
    path: "/disease-surveillance",
    Component: withProtection(DiseaseSurveillance),
  },
  {
    path: "/training",
    Component: withProtection(TrainingManagement),
  },
  {
    path: "/mvu",
    Component: withProtection(MVUOperations),
  },
  {
    path: "/expenditure",
    Component: withProtection(Expenditure),
  },
  {
    path: "/reports",
    Component: withProtection(FarmReports),
  },
  {
    path: "/oncall-ai",
    Component: withProtection(OnCallAI),
  },
  {
    path: "/grievances",
    Component: withProtection(Grievances),
  },
  {
    path: "/service-requests",
    Component: withProtection(ServiceRequests),
  },
  {
    path: "/my-requests",
    Component: withProtection(FieldTechnicianRequests),
  },
  {
    path: "/profile",
    Component: withProtection(UserProfile),
  },
  {
    path: "/request/:requestId/action",
    Component: withProtection(PostApprovalAction),
  },
  {
    path: "/request-ai",
    Component: withProtection(RequestAIService),
  },
  {
    path: "/request-medicine",
    Component: withProtection(RequestMedicine),
  },
  {
    path: "/request-vaccine",
    Component: withProtection(RequestVaccine),
  },
  {
    path: "/log-request",
    Component: withProtection(LogNewRequest),
  },
  {
    path: "/log-request/ai",
    Component: withProtection(LogAIServiceRequest),
  },
  {
    path: "/log-request/medicine",
    Component: withProtection(LogMedicineRequest),
  },
  {
    path: "/log-request/vaccine",
    Component: withProtection(LogVaccineRequest),
  },
  {
    path: "/log-request/disease",
    Component: withProtection(LogDiseaseRequest),
  },
  {
    path: "/farmer-grievances",
    Component: withProtection(FarmerGrievances),
  },
  {
    path: "/activity-log",
    Component: withProtection(FarmerActivityLog),
  },
  {
    path: "/user-management",
    Component: withProtection(UserManagement),
  },
]);
