For the Field Technician login (Rajan Kumar, 
AIT Bakshi Ka Talab LAC), add complete input forms 
for all service types a technician performs 
after receiving a farmer call.

The flow is:
Farmer calls → Technician logs request → 
Fills service form → Submits for approval 
OR gets recorded directly in system.

---

## STARTING POINT — Log New Request

When Field Technician clicks 
[+ Log Incoming Farmer Call]
show a Request Type selection screen:

Title: "New Farmer Request"
Subtitle: "Select the type of 
service the farmer needs"

4 large selection cards in 2x2 grid:

Card 1 — AI Service:
Icon: 🐄
Title: "Artificial Insemination"
Description: "Farmer requesting 
AI service for cattle/goat"
Colour: Blue border on select

Card 2 — Medicine:
Icon: 💊
Title: "Medicine Request"
Description: "Farmer reporting 
sick animal needing treatment"
Colour: Green border on select

Card 3 — Vaccine:
Icon: 💉
Title: "Vaccination"
Description: "Farmer requesting 
vaccination for livestock"
Colour: Purple border on select

Card 4 — Disease/Sample:
Icon: 🔬
Title: "Disease & Diagnosis"
Description: "Farmer reporting 
suspected disease, sample needed"
Colour: Orange border on select

After selecting a card, 
show Step 1 — Farmer Identification
(common to all 4 flows):

---

## STEP 1 — FARMER IDENTIFICATION
(Same for all 4 service types)

Title: "Step 1 of 3 — Farmer Details"
Progress: ● ○ ○

Farmer Lookup card:
"Enter farmer mobile or Aadhaar"
Large input field
[🔍 Search] button

On entering 9876543210:
Show fetched result:
┌─────────────────────────────────┐
│ ✓ Fetched from National Farmer Registry   │
│                                 │
│ Ramesh Yadav                  │
│ Bakshi Ka Talab Village, Lucknow        │
│ Mobile: 987654XXXX              │
│ Aadhaar: XXXX-XXXX-1234         │
│ Livestock: 3 cattle registered  │
│                                 │
│ [✓ Use This Farmer]             │
└─────────────────────────────────┘

If not found: show manual entry form:
Farmer Name: [text input]
Mobile Number: [number input]
Aadhaar Number: [text input]
Village: [text input]
Block: Bakshi Ka Talab (auto-filled)
District: Lucknow (auto-filled)
[Save & Continue] button

After farmer confirmed:
Livestock selector appears:
"Select the animal this 
request is for:"

Animal cards (from Bharat Pashudhan):
┌──────────────────────┐
│ 🐄 IN1234            │
│ Holstein Friesian    │
│ 4 years              │
│ Last AI: 3 months    │
│ [Select]             │
└──────────────────────┘
┌──────────────────────┐
│ 🐄 IN1235            │
│ Sahiwal              │
│ 2 years              │
│ Last vaccine: FMD    │
│ [Select]             │
└──────────────────────┘

"Animal not listed?" link →
manual animal entry:
Species: [dropdown]
Breed: [text]
Age: [number]
Tag/ID: [text]

[Next: Service Details →] 
orange button

---

## FORM A — AI SERVICE REQUEST
(After Step 1 completed)

Title: "Step 2 of 3 — AI Service Details"
Progress: ● ● ○

Service card at top (auto-filled):
Farmer: Ramesh Yadav ✓
Animal: IN1234 Holstein Friesian ✓

Form fields:

Heat Signs Observed:
● Yes  ○ No  ○ Not Sure
If yes: Since when? [date picker]

Semen Type Required:
○ Normal Cattle Semen
● Sex Sorted Cattle Semen
○ Normal Buffalo Semen
○ Normal Goat Semen

Semen Dose Code:
[SC-2025-0441 ▼]
(dropdown of available 
doses at Bakshi Ka Talab LAC only)
Stock shown: 82 doses available 🟢

Bull ID: [BL-2024-0112]

Date of Collection: [15 May 2025]

Batch of Collection: [BCH-2025-04]

Damp Seal:
● Yes  ○ No

Station Number: [ST-04]

Preferred Service Date:
[22 May 2025] (default today)

Preferred Time Slot:
○ Morning (7-11 AM)
● Afternoon (11-3 PM)
○ Evening (3-6 PM)

Additional Notes:
[Cow showing strong heat signs
since morning, owner confirmed]

[Next: Review & Submit →] button

---

Title: "Step 3 of 3 — Review & Submit"
Progress: ● ● ●

Summary card:
┌─────────────────────────────────┐
│ AI SERVICE REQUEST              │
│                                 │
│ Farmer: Ramesh Yadav          │
│ Animal: IN1234 Holstein Friesian│
│ Semen: Sex Sorted Cattle        │
│ Dose: SC-2025-0441              │
│ Date: 22 May 2025, Afternoon    │
│ Technician: Rajan Kumar (me)    │
│ LAC: Bakshi Ka Talab LAC                │
└─────────────────────────────────┘

What happens next (info box, blue):
"This request will be recorded in 
the system. After service is 
completed, enter utilization details 
and submit for Block Officer review."

[← Edit Details]  
[✓ Submit Request] orange button

On submit:
Success screen:
✓ Request Logged: SR-2025-1042
Recorded in: Semen Module
Next step: Complete service and 
log utilization details
[View in My Requests] button
[Log Another Request] button

---

## FORM B — MEDICINE REQUEST
(After Step 1 completed)

Title: "Step 2 of 3 — Medicine Details"
Progress: ● ● ○

Service card at top (auto-filled):
Farmer: Ramesh Yadav ✓
Animal: IN1234 Holstein Friesian ✓

Form fields:

Symptoms Reported:
(multi-select checkbox grid)
☑ Fever          ☑ Lethargy
☐ Not Eating     ☑ Diarrhoea
☐ Limping        ☐ Nasal Discharge
☐ Swelling       ☐ Skin Issues
☐ Difficulty Breathing
☐ Other: [text input if selected]

Duration of Symptoms:
○ Less than 24 hours
● 1-3 days
○ More than 3 days

Severity Assessment:
○ Mild — Animal is active
● Moderate — Some distress visible
○ Severe — Animal unable to stand

Medicine Administered:
(technician fills after visiting)

Medicine 1:
Name: [Oxytetracycline ▼]
SKU: MED-002 (auto-filled)
Quantity: [2] vials
Route: ● Injection ○ Oral ○ Topical

[+ Add Another Medicine] button

Medicine 2 (if added):
Name: [Multivitamin Injection ▼]
Quantity: [1] vial
Route: ● Injection ○ Oral

Current LAC Stock check 
(auto shown per selection):
Oxytetracycline: 34 units 🟢 Available
Multivitamin: 12 units 🟡 Low

Date Administered: [22 May 2025]

User Charges Collected:
₹ [200]
Payment received: ● Yes ○ No ○ Waived

Follow-up Required:
● Yes — Date: [29 May 2025]
○ No

Additional Notes:
[Animal has fever since 2 days,
administered IV antibiotics on site]

[Next: Review & Submit →] button

---

Title: "Step 3 of 3 — Review & Submit"
Progress: ● ● ●

Summary card:
┌─────────────────────────────────┐
│ MEDICINE SERVICE RECORD         │
│                                 │
│ Farmer: Ramesh Yadav          │
│ Animal: IN1234 Holstein Friesian│
│ Symptoms: Fever, Lethargy,      │
│ Diarrhoea                       │
│ Severity: Moderate              │
│ Medicines:                      │
│ • Oxytetracycline × 2 vials     │
│ • Multivitamin × 1 vial         │
│ Charges: ₹200 ✓ Received        │
│ Follow-up: 29 May 2025          │
│ Administered by: Rajan Kumar    │
└─────────────────────────────────┘

What happens next (info box):
"Medicine record will be saved 
to the system and submitted to 
Block Officer (Dr. Sarita Singh) 
for review and approval.
Stock at Bakshi Ka Talab LAC will be 
updated automatically."

Stock update preview:
Oxytetracycline: 34 → 32 units
Multivitamin: 12 → 11 units

[← Edit Details]
[✓ Submit & Update Stock] orange button

On submit:
Success screen:
✓ Medicine Record Saved: MR-2025-0891
Submitted to: BVO Dr. Sarita Singh
Stock updated at Bakshi Ka Talab LAC ✓
SMS sent to farmer ✓
[View in My Requests] button
[Log Another Request] button

---

## FORM C — VACCINE REQUEST
(After Step 1 completed)

Title: "Step 2 of 3 — Vaccination Details"
Progress: ● ● ○

Service card at top:
Farmer: Ramesh Yadav ✓
Animal: IN1234 Holstein Friesian ✓

Vaccination History shown 
(from Bharat Pashudhan):
Last FMD: 12 Jan 2025 (4 months ago)
Last HS: 05 Aug 2024
Due for booster: FMD due Jun 2025 🟡

Form fields:

Vaccination Purpose:
● Routine scheduled vaccination
○ Booster dose
○ Outbreak prevention
○ First time vaccination

Disease to Vaccinate Against:
● FMD
○ HS
○ BQ
○ PPR
○ Brucellosis
○ Other: [text]

Vaccine Selected:
[FMD Vaccine ▼]
Batch: [VB-2025-0441 ▼]
Expiry: 15 Jun 2025 (auto-filled)
🟢 Valid

Quantity Administered:
[2] doses

Route of Administration:
● Intramuscular
○ Subcutaneous
○ Oral

Date Administered: [22 May 2025]

Booster Required:
● Yes — Remind on: [21 Aug 2025]
○ No

User Charges Collected:
₹ [150]
Payment: ● Received ○ Pending ○ Waived

Current LAC Stock:
FMD Vaccine: 45 doses 🟡 Low
Warning: "Stock low at Bakshi Ka Talab LAC.
Consider raising restocking request."
[Raise Restocking Request] 
amber link button

Notes:
[Routine FMD booster administered,
animal in good health]

[Next: Review & Submit →] button

---

Title: "Step 3 of 3 — Review & Submit"
Progress: ● ● ●

Summary card:
┌─────────────────────────────────┐
│ VACCINATION RECORD              │
│                                 │
│ Farmer: Ramesh Yadav          │
│ Animal: IN1234 Holstein Friesian│
│ Vaccine: FMD Vaccine            │
│ Batch: VB-2025-0441             │
│ Qty: 2 doses                    │
│ Date: 22 May 2025               │
│ Booster due: 21 Aug 2025        │
│ Charges: ₹150 ✓ Received        │
│ Administered by: Rajan Kumar    │
└─────────────────────────────────┘

What happens next (info box):
"Vaccination record will be saved 
directly to the system.
Bharat Pashudhan will be updated.
Booster reminder will be sent to 
farmer on 21 Aug 2025.
Stock at Bakshi Ka Talab LAC updated."

Stock update preview:
FMD Vaccine: 45 → 43 doses

[← Edit Details]
[✓ Submit & Record Vaccination] 
orange button

On submit:
✓ Vaccination Recorded: VR-2025-0441
Bharat Pashudhan updated ✓
Booster reminder scheduled ✓
Stock updated: 43 doses remaining
SMS sent to farmer ✓
[View in My Requests] button
[Log Another Request] button

---

## FORM D — DISEASE & SAMPLE REQUEST
(After Step 1 completed)

Title: "Step 2 of 3 — Disease Details"
Progress: ● ● ○

Service card at top:
Farmer: Ramesh Yadav ✓
Animal: IN1234 Holstein Friesian ✓

Vaccination history 
(from Bharat Pashudhan):
FMD ✓ Jan 2025 | HS ✓ Aug 2024

Form fields:

Symptoms Observed:
(multi-select, with icons)
☑ 🌡 Fever
☑ 😮 Nasal Discharge  
☑ 🦵 Lameness
☐ 💧 Diarrhoea
☐ 🫁 Respiratory Distress
☐ 🩹 Skin Lesions / Blisters
☐ ⚠ Sudden Death
☐ Other: [text]

Symptom Duration:
○ Less than 24 hours
● 1-3 days
○ More than 3 days
○ More than a week

Other animals affected?
● Yes — How many? [3]
○ No

Suspected Disease 
(technician's assessment):
[Foot and Mouth Disease ▼]
Other options in dropdown:
HS | BQ | PPR | Brucellosis |
Theileriosis | Unknown

Urgency Level:
○ Routine — Submit for testing
● Urgent — Suspected outbreak
○ Emergency — Multiple deaths

Sample to Collect:
● Blood
○ Serum
○ Tissue
○ Swab
○ Faeces
○ Milk

Submit Sample To:
● DDL Lucknow (nearest)
○ DDL Delhi
○ DDL Patna
○ ADRI Phulnakhara
○ Other

Sample Collection Date: [22 May 2025]

Immediate Action Taken:
☑ Animal isolated from herd
☑ Farmer advised on biosecurity
☐ Neighbouring farms notified
☐ Emergency treatment given

If emergency treatment given:
Medicine: [dropdown]
Quantity: [input]

Photo Evidence:
[📷 Take/Upload Photo] button
Shows: 1 photo uploaded placeholder
"Geo-tagged: Bakshi Ka Talab Village"
Timestamp: 22 May 2025 10:45 AM

Notes:
[Multiple cattle showing lameness 
and oral blisters. Suspected FMD. 
Animal isolated. Sample collected 
for confirmation.]

[Next: Review & Submit →] button

---

Title: "Step 3 of 3 — Review & Submit"
Progress: ● ● ●

Summary card:
┌─────────────────────────────────┐
│ DISEASE SAMPLE SUBMISSION       │
│                                 │
│ Farmer: Ramesh Yadav          │
│ Animal: IN1234 Holstein Friesian│
│ Symptoms: Fever, Nasal          │
│ Discharge, Lameness             │
│ Duration: 1-3 days              │
│ Other animals affected: 3       │
│ Suspected: FMD                  │
│ Urgency: 🔴 URGENT              │
│ Sample: Blood                   │
│ Submit to: DDL Lucknow          │
│ Isolated: ✓ Yes                 │
│ Submitted by: Rajan Kumar       │
└─────────────────────────────────┘

Urgency alert box (red, because urgent):
"⚠ Urgent submission detected.
This will be flagged to 
BVO Dr. Sarita Singh and 
CDVO Dr. Pradeep Sharma immediately.
If confirmed as FMD, outbreak 
protocol will be triggered."

What happens next (info box):
"Sample registration will be 
created in Disease Surveillance module.
Registration number generated.
DDL Lucknow will be notified.
Block Officer will be alerted."

[← Edit Details]
[✓ Submit Urgent Sample] 
red button (because urgent)

On submit:
Success screen:
✓ Sample Registered: DDL-2025-0247
Submitted to: DDL Lucknow
Urgency: 🔴 URGENT flagged
BVO Dr. Sarita Singh notified ✓
SMS sent to farmer ✓

Registration card to share 
with farmer:
┌─────────────────────────────────┐
│ SAMPLE REGISTRATION             │
│ Ref: DDL-2025-0247              │
│ Farmer: Ramesh Yadav          │
│ Date: 22 May 2025               │
│ Track at: DDL Lucknow           │
│ SMS sent to farmer ✓            │
└─────────────────────────────────┘

[Share via WhatsApp] mock button
[View in Disease Module] button
[Log Another Request] button

---

## RESTOCKING REQUEST FORM
(Triggered from any module when 
stock is low or technician needs more)

Accessible from:
- Stock alert banner
- Any module when stock critical
- My Requests tab

Title: "Raise Restocking Request"

Request Type tabs:
[Semen] [Vaccine] [Medicine]

For Semen:
Current Stock shown:
Normal Cattle: 82 🟢
Sex Sorted: 12 🟡
Normal Buffalo: 5 🔴 Critical

What do you need?
Semen Type: [Normal Buffalo ▼]
Quantity: [50] doses
Urgency:
● URGENT (red highlight)
○ NOT URGENT
Reason: [Stock critically low,
3 pending AI requests this week]

For Vaccine:
Current Stock:
FMD: 43 🟡
HS: 8 🔴

Vaccine: [HS Vaccine ▼]
Disease Type: HS (auto-filled)
Quantity: [100] doses
Urgency toggle
Reason: [text]

For Medicine:
Current Stock shown per medicine.
Priority: 
[P0] [P1] [P2] [P3] buttons
Medicine: [dropdown]
Quantity: [number]
Reason: [text]

Common to all:
[Submit to Block Officer] 
orange button

On submit:
✓ Restocking Request Raised
Request: SR-REST-2025-0234
Submitted to: BVO Dr. Sarita Singh
Expected response: within 24 hours
[Track Request Status] button

---

## MY REQUESTS DASHBOARD
(Field Technician view after 
submitting forms)

Show all submitted forms 
in one unified view:

Title: "My Submitted Records"
Scope: "📍 Bakshi Ka Talab LAC"

Filter bar:
[All Types ▼] [All Status ▼] 
[This Week ▼]
Active filter: [Today ✕]
Sort: Date ↓ ↑ toggle
Showing 5 of 12 results

Request cards with status:

SR-2025-1042 | 🐄 AI Service
Farmer: Ramesh Yadav | IN1234
Submitted: 22 May 10:30 AM
Status: 🟢 Recorded in System
Semen dose: SC-2025-0441 logged
[View Details]

MR-2025-0891 | 💊 Medicine
Farmer: Sunita Devi | IN2345
Submitted: 22 May 09:15 AM
Status: 🔵 Pending Block Approval
Waiting: BVO Dr. Sarita Singh
Approval stepper mini:
● AIT ✓ → Block ⏳ → 
  District → Directorate
[View Details]

VR-2025-0441 | 💉 Vaccine
Farmer: Ramesh Yadav | IN1234
Submitted: 21 May 03:00 PM
Status: 🟢 Recorded Directly
No approval needed for routine 
vaccination
[View Details]

DDL-2025-0247 | 🔬 Disease Sample
Farmer: Manoj Kumar | IN3456
Submitted: 21 May 11:00 AM
Status: 🟠 Urgent — Flagged to BVO
At: DDL Lucknow — Under Testing
[View Details]

SR-REST-0234 | 📦 Restocking
HS Vaccine — 100 doses URGENT
Submitted: 20 May 04:00 PM
Status: 🟢 Approved by BVO
Forwarded to District Officer
[Track]

---

## WHICH FORMS GO FOR APPROVAL
VS RECORDED DIRECTLY

Show this logic visually in the 
success screen after each submission:

AI Service:
→ Recorded in Semen module directly
→ No approval needed to log
→ Approval needed only if 
   restocking required from the service

Medicine Administration:
→ Goes to Block Officer for review
→ Stock updated immediately on submit
→ Block reviews and forwards up chain

Vaccination:
→ Recorded directly in system
→ No approval chain needed
→ Bharat Pashudhan updated directly

Disease Sample:
→ Registered in Disease module directly
→ If URGENT: BVO and CDVO alerted
→ Lab processes and reports back

Restocking Request:
→ Always goes for approval
→ AIT → Block → District → Directorate
→ Approval chain based on quantity
   and urgency level

Show this as a simple 
info card on the 
"Log New Request" home screen:

"What happens after you submit?"
┌─────────────────────────────┐
│ 🐄 AI Service               │
│ → Recorded directly ✓       │
├─────────────────────────────┤
│ 💊 Medicine                 │
│ → Block approval needed     │
├─────────────────────────────┤
│ 💉 Vaccine                  │
│ → Recorded directly ✓       │
├─────────────────────────────┤
│ 🔬 Disease Sample           │
│ → Registered + Lab notified │
├─────────────────────────────┤
│ 📦 Restocking               │
│ → Full approval chain       │
└─────────────────────────────┘