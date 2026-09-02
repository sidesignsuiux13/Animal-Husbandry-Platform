Design a high-fidelity government web application 
called the "Animal Husbandry Digital Platform" for the DAHD 
Department, Government of India. This is a 
livestock management system for the Directorate 
of Animal Husbandry and Veterinary Services.

---

## DESIGN SYSTEM

Colours:
Primary: #003366 (deep navy blue)
Accent: #FF6600 (orange)
Success: #22C55E (green)
Warning: #F59E0B (amber)
Danger: #EF4444 (red)
Background: #F5F5F5 (light grey)
Card: #FFFFFF
Text Primary: #1A1A1A
Text Secondary: #6B7280
Border: #E5E7EB

Typography:
Headers: Bold, #003366
Body: Regular, #1A1A1A
Labels: Medium, #6B7280
Badges: Semibold

Components to establish:
- Stat card: white, rounded, shadow, 
  coloured left border, icon top right
- Status badge: pill shape
  Green = Healthy/Approved/Completed
  Amber = Warning/Pending/In Progress
  Red = Critical/Rejected/Overdue
  Blue = Info/Assigned
- Primary button: #FF6600, white text, rounded
- Secondary button: outlined #003366
- Sidebar: #003366 background, 
  white icons and text, 
  active item #FF6600 left border highlight
- Data table: white card, 
  grey header row, alternating rows
- Progress bar: coloured by status
  (green/amber/red)
- Tab navigation: underline style, 
  active tab #FF6600

Header bar:
Left: NIC logo placeholder + 
      "Animal Husbandry Digital Platform | 
       Department of Animal Husbandry & Dairying, Govt. of India"
Right: notification bell + 
       role badge + user name

---

## SCREEN 1: LOGIN PAGE

Clean centered card on #F5F5F5 background.

Card contents (top to bottom):
- NIC logo placeholder (64px, centered)
- "Animal Husbandry Digital Platform" (H1, #003366)
- "Department of Animal Husbandry & Dairying, Government of India" 
  (subtitle, grey)
- Divider line
- Email input field
- Password input field
- "Login" button (full width, #FF6600)
- Divider: "Quick Demo Login"
- 5 role buttons in a grid:
  [Directorate Admin] [District Officer]
  [Block Officer] [Field Technician]
  [Farmer]
  Each button shows role name + 
  department/location below

Bottom: "Powered by NIC | 
Government of India" footer

---

## SCREEN 2: DASHBOARD — DIRECTORATE VIEW

Full layout with sidebar + main content.

Sidebar (left, #003366):
NIC logo at top
Navigation items with icons:
🏠 Dashboard (active, #FF6600 highlight)
🧪 Semen Management
💉 Vaccine Management
💊 Medicine Management
🔬 Disease Surveillance
🎓 Training Management
🚑 MVU Operations
💰 Expenditure
📋 Farm Reports
🐄 On-Call AI Service
📣 Grievances (red badge: 34)

Main content:
Page title: "Dashboard"
Subtitle: "State-wide overview | 
Directorate Admin | Today: 22 May 2025"

Row 1 — 4 stat cards:
Card 1: Total Stock Units
  Icon: 📦 | Value: 4,82,350
  Subtitle: "doses across India"
  Left border: #003366

Card 2: Services This Month
  Icon: ✅ | Value: 28,450
  Subtitle: "↑ 12% vs last month"
  Left border: #22C55E

Card 3: Pending Approvals
  Icon: ⏳ | Value: 47
  Subtitle: "across all modules"
  Left border: #F59E0B

Card 4: Active Grievances
  Icon: 📣 | Value: 34
  Subtitle: "6 breached SLA"
  Left border: #EF4444

Row 2 — two panels:

Left panel (60%): 
"National Utilisation Map"
Show states and UTs across India as a 
clean grid/tile layout
Each district = small rounded rectangle 
with district name + utilisation %
Colour coded:
  Red tiles: Jaipur 28%, Malkangiri 31%, 
             Nabarangpur 35%, Nuapada 38%
  Amber tiles: Kalahandi 45%, Gajapati 48%,
               Kandhamal 52%, Boudh 55%,
               Deogarh 58%, Nayagarh 62%
  Green tiles: remaining 20 districts 
               ranging 65-94%
Colour legend below: 
🔴 <40% Low | 🟡 40-70% Adequate | 
🟢 >70% High

Right panel (40%):
"Pending Approvals"
List of 5 items:
  🧪 Semen restocking — AIT Bakshi Ka Talab
     "50 doses, Urgent" — 2 hrs ago
     [Approve] [View] buttons
  💉 Vaccine restock — BVO Jaipur
     "200 FMD doses" — 4 hrs ago
     [Approve] [View] buttons
  💊 Medicine P0 — LAC Ranchi
     "Ivermectin critical" — 5 hrs ago
     [Approve] [View] buttons
  🎓 Training approval — Dr. Sujit
     "Biosecurity Protocol" — 6 hrs ago
     [Approve] [View] buttons
  💰 Fund request — Gajapati District
     "₹2.4L additional" — 8 hrs ago
     [Approve] [View] buttons

Row 3 — Recent Activity feed:
8 timestamped items in a 2-column list
covering all modules

---

## SCREEN 3: DASHBOARD — FIELD TECHNICIAN VIEW

Same sidebar layout.
Role badge: "AIT — Bakshi Ka Talab LAC, Lucknow"

4 stat cards (scoped to technician):
Card 1: My Stock — 85 doses
Card 2: Services Today — 3
Card 3: Pending Requests — 2
Card 4: Overdue Data Entry — ⚠ 8 days

Orange overdue banner below cards:
"⚠ Data entry overdue — 
last updated 8 days ago. 
Please update utilization records."

Today's Tasks panel (prominent, full width):
Title: "Today's Tasks"
3 task rows:
  ✅ 3 AI service bookings assigned today →
  ⚠ Semen data entry overdue — 8 days →
  📦 Restocking request: awaiting Block 
     approval →

Quick Actions grid (2x2):
[Log Semen Use] [Log Vaccine Use]
[Log Medicine]  [Book AI Service]
Each button: icon + label, 
#FF6600 accent, rounded card

Stock Status strip (horizontal):
"Normal Cattle Semen 🟢 82 doses"
"FMD Vaccine 🟡 Low Stock"
"Ivermectin 🔴 Critical"

---

## SCREEN 4: INVENTORY MANAGEMENT
(Semen/Vaccine/Medicine — combined pattern)

Page title: "Semen Inventory Management"
Sub-tabs: 
[Inventory] [Utilization] [Restocking] 
[Reports]
Active tab: Inventory (underlined #FF6600)

Filter bar:
Semen Type dropdown | Animal Type dropdown |
Stock Status dropdown | Date Range | 
[Search] [Export PDF] [Export CSV]

Inventory table (8 rows of mock data):
Location | Type | Animal | Code | 
Qty Allocated | Qty Delivered | Date | Status

Row examples:
Bakshi Ka Talab LAC | Normal Cattle | Cattle | 
SC-2025-0441 | 100 | 82 | 15 May | 🟢 Healthy

Jaipur LAC | Sex Sorted | Cattl