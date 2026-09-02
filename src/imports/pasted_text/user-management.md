Add a new Admin User Management module 
accessible only to Directorate Admin 
(Dr. Arun Mishra).

Add to sidebar (bottom, above Profile):
⚙ User Management
(Hidden from all other roles)

Page title: "User Management"
Scope badge: "📍 System Administration"

---

TAB BAR:
[All Users] [Create User] 
[Roles & Permissions] [Audit Log]

---

ALL USERS TAB (default active):

Filter bar:
[Role ▼] [District ▼] [Status ▼]
[🔍 Search by name or ID]
Active filter: [Role: All ✕]
Sort: Name ↑↓ | Created Date ↑↓
Showing 8 of 142 users

[+ Create New User] orange button 
top right

Users table:
User ID | Name | Role | 
District/Block/LAC | Status | 
Last Login | Actions

U001 | Dr. Arun Mishra | 
Directorate Admin | All Odisha | 
🟢 Active | 22 May 09:14 | 
[Edit] [Deactivate]

U002 | Dr. Pradeep Rath | 
District Officer | Cuttack | 
🟢 Active | 22 May 08:30 | 
[Edit] [Deactivate]

U003 | Dr. Sarita Mohanty | 
Block Officer | Salipur, Cuttack | 
🟢 Active | 22 May 07:45 | 
[Edit] [Deactivate]

U004 | Rajan Kumar | 
Field Technician | Salipur LAC | 
🟢 Active | 22 May 09:00 | 
[Edit] [Deactivate]

U005 | Ramesh Pradhan | 
Farmer | Salipur, Cuttack | 
🟢 Active | 20 May 14:22 | 
[Edit] [Deactivate]

U006 | Deepak Singh | 
Field Technician | Kendupalli LAC | 
🟢 Active | 21 May 11:00 | 
[Edit] [Deactivate]

U007 | Dr. Amit Das | 
Block Officer | Banki, Cuttack | 
🟡 Inactive | 15 May 09:30 | 
[Edit] [Activate]

U008 | Suresh Pal | 
Field Technician | Barapal LAC | 
🔴 Suspended | 10 May 16:00 | 
[Edit] [Reinstate]

Pagination: 1 2 3 ... 18 Next →

---

CREATE USER TAB:

Title: "Create New User Account"

Form (two column layout):

Left column:
Full Name: [text input]
Employee/Farmer ID: [text input]
Mobile Number: [number input]
Email Address: [email input]
Date of Birth: [date picker]
Gender: ○ Male ○ Female ○ Other

Right column:
Role: [dropdown]
Options:
  Directorate Admin
  District Officer (CDVO)
  Block Officer (BVO)
  Field Technician (AIT)
  Farmer
  MVU Team Member

Based on role selected, 
show relevant location fields:

If District Officer:
District: [Cuttack ▼]

If Block Officer:
District: [Cuttack ▼]
Block: [Salipur ▼]

If Field Technician:
District: [Cuttack ▼]
Block: [Salipur ▼]
LAC: [Salipur LAC ▼]

If Farmer:
District: [dropdown]
Block: [dropdown]
Village: [text]

Designation: [text input]
Department: F&ARD (auto-filled)

Account Settings section:
Username: [auto-generated from name]
Temporary Password: [auto-generated]
  Show: "Temp@2025#ARD"
  [Copy Password] icon button

Send credentials via:
☑ SMS to mobile
☑ Email

Access Level:
☑ Web Portal
☑ Mobile App
☐ Admin Panel

Account Status:
● Active ○ Inactive

[Cancel] [Create User Account] 
orange button

On submit: success toast:
"✓ User created: Rajan Kumar
Credentials sent via SMS and Email"

---

EDIT USER (slide-in panel):

Appears when [Edit] clicked on 
any user row.

Panel title: "Edit User — Rajan Kumar"

All fields pre-filled and editable:
Name | Mobile | Email | Role |
District | Block | LAC | Status

Reset Password section:
[Reset Password] button
"New temporary password will be 
sent to user's mobile and email"

Change Role section:
Current: Field Technician
New Role: [dropdown]
Warning (amber box):
"Changing role will modify 
data access scope immediately.
User will need to re-login."

Account Actions:
[Deactivate Account] red outlined
[Suspend Account] amber outlined
[Save Changes] orange filled

Deactivate confirmation modal:
"Are you sure you want to 
deactivate Rajan Kumar?
User will lose all system access.
Their submitted records 
will be retained."
[Cancel] [Yes, Deactivate] red

---

ROLES & PERMISSIONS TAB:

Title: "Role Access Matrix"

Table showing what each role can do:
Rows = Features
Columns = Roles

Feature | Director | District | 
Block | AIT | Farmer

Log Farmer Request | ✗ | ✗ | ✗ | ✓ | ✓
Approve Requests | ✓ | ✓ | ✓ | ✗ | ✗
View All Districts | ✓ | ✗ | ✗ | ✗ | ✗
Allocate Stock | ✓ | ✓ | ✓ | ✗ | ✗
View Analytics | ✓ | ✓ | ✓ | ✗ | ✗
User Management | ✓ | ✗ | ✗ | ✗ | ✗
Raise Grievance | ✓ | ✓ | ✓ | ✓ | ✓
View Own Data Only | ✗ | ✗ | ✗ | ✓ | ✓

Each cell: green ✓ or red ✗ pill

Note at bottom:
"Role permissions are system-defined.
Contact system administrator 
to modify access levels."

---

AUDIT LOG TAB:

Title: "System Audit Log"

Filter: [User ▼] [Action ▼] 
[Date Range ▼] [Module ▼]
[Export Log] button

Table:
Timestamp | User | Action | 
Module | Details | IP

22 May 09:14 | Dr. Arun Mishra | 
Login | System | 
Successful login | 192.168.1.1

22 May 09:20 | Dr. Arun Mishra | 
Approved | Service Requests | 
SR-2025-1040 approved | —

22 May 08:30 | Dr. Pradeep Rath | 
Login | System | Successful | —

22 May 08:45 | Dr. Pradeep Rath | 
Approved | Medicine | 
MR-2025-0891 forwarded to 
Directorate | —

22 May 07:45 | Dr. Sarita Mohanty |
Login | System | Successful | —

22 May 08:00 | Rajan Kumar | 
Created Record | Semen | 
SR-2025-1042 logged | —

22 May 08:15 | Rajan Kumar | 
Submitted | Medicine | 
MR-2025-0891 submitted | —

Pagination + export CSV button