# Turnover Agent — Product Spec

> **What:** Agent-as-a-service for short-term rental property managers. Detects guest checkout, dispatches cleaners, confirms turnover, escalates exceptions.
>
> **Pilot client:** Nick Mora (San Diego, cleaning + property management + Airbnb)
>
> **Tagline:** "Your guests check out. Your cleaner is already on the way."

---

## The Problem

Property managers lose money on slow turnovers. Guest checks out at 11am, next guest arrives at 3pm. If the cleaner doesn't get pinged instantly, the property sits dirty. Bad reviews, lower ranking, lost bookings.

The current manual process: Nick watches the Airbnb calendar, texts cleaners manually, follows up if they don't respond, tracks who confirmed, hopes nothing falls through the cracks.

---

## Agent Spec (7 Parts)

### 1. What wakes the agent up?

| Trigger | Source | Mechanism |
|--------|--------|-----------|
| Guest checkout event | Airbnb/VRBO iCal calendar | Poll iCal feed every 15 min for checkout events today |
| Guest early checkout | Airbnb webhook (if available) | Real-time push notification |
| Guest extension | Airbnb calendar update | iCal diff detects checkout date moved |
| Manual dispatch | Nick sends SMS/text to agent number | Twilio webhook → agent |

**Phase 1 (manual):** We poll the Airbnb iCal feed. No Airbnb API partnership required — iCal is a public calendar URL Airbnb provides to every host.

### 2. What context does it need?

- **Property profile:** Address, unit number, lockbox/access code, cleaning checklist, standard turnover time
- **Cleaner roster:** Name, phone, assigned properties, average response time, preferred contact method
- **Booking details:** Guest name, checkout date/time, next check-in time, turnover window
- **Historical data:** How long this property takes to clean, cleaner reliability score, past issues flagged
- **Edge case rules:** Guest extended? Early checkout credit? Maintenance issue from last turnover?

### 3. What tools can it use?

| Tool | Purpose | Phase |
|------|---------|-------|
| iCal parser | Read checkout/check-in events from Airbnb calendar feed | Phase 1 |
| Twilio SMS | Send/receive text messages to cleaners and Nick | Phase 1 |
| Google Calendar | Track scheduled cleanings and availability | Phase 1 |
| Notion/Airtable | Log turnover status, cleaner assignments, issues | Phase 1 |
| Airbnb API (future) | Direct webhook integration, real-time events | Phase 3 |
| Stripe | Outcome-based billing per successful turnover | Phase 3 |

### 4. What is it allowed to do itself?

- Parse iCal feed and detect checkout events
- Send SMS to assigned cleaner with property details
- Receive SMS replies from cleaners (confirm, reschedule, flag issue)
- Send confirmation to Nick
- Log all activity to a tracking sheet
- Send reminder if cleaner hasn't confirmed within 30 min
- Send reminder if cleaner hasn't marked "done" within expected turnover time + 1 hr
- Detect edge cases (guest extension, double-booking, no cleaner assigned)

### 5. Where does it need approval?

- Reassigning to a different cleaner (Nick approves unless it's an auto-fallback from the roster)
- Scheduling cleanings outside normal hours (before 7am, after 8pm)
- Reporting maintenance issues (Nick decides if it blocks next check-in)
- Any message sent to the guest (never — agent only talks to Nick and cleaners)

### 6. When should it escalate to a human?

| Condition | Action |
|-----------|--------|
| No cleaner confirmed within 60 min | Escalate to Nick — "No cleaner confirmed for 123 Main St. Checkout was 11am, next check-in 3pm. Options: call backup cleaner or handle manually." |
| Cleaner flags maintenance issue | Escalate to Nick — "Cleaner reports broken AC at 123 Main St. Does this block next check-in?" |
| Guest extended stay (checkout moved) | Alert Nick — "Guest at 123 Main St extended to tomorrow. Cleaner for today is cancelled. Reschedule?" |
| Turnover window too tight (< 2 hrs) | Alert Nick — "Checkout 11am, next check-in 1pm. Only 2hr window. Confirm cleaner can make it?" |
| Cleaner no-shows (no response in 2 hrs) | Escalate to Nick — "Cleaner Maria has not responded for 123 Main St. 2 hours past checkout. Need backup." |
| Same cleaner 3+ late confirmations in a week | Alert Nick — "Maria has been late confirming 3x this week. Consider reassigning or following up." |

### 7. What does success look like?

- Cleaner is notified within 5 minutes of guest checkout
- Cleaner confirms within 30 minutes
- Property is turned over before next check-in
- Nick has full visibility (who's cleaning, when confirmed, when done)
- Zero missed turnovers
- Edge cases caught and escalated before they become problems

---

## Phase 1: Manual Pilot (This Week)

**Goal:** Prove the workflow works before building any software.

### What we need from Nick:

1. **iCal URL** from his Airbnb/VRBO listings (one per property)
2. **Cleaner contacts** — names and phone numbers
3. **Property addresses** and access info (lockbox codes, etc.)
4. **Standard turnover time** per property (how long cleaning takes)
5. **Next check-in times** (usually 3pm or 4pm, but varies)

### Manual workflow:

1. I poll Nick's iCal feeds every morning for today's checkouts
2. I text the assigned cleaner: "123 Main St (Unit 2) is checking out today at 11am. Can you handle turnover? Reply 1=yes 2=no"
3. If no response in 30 min, I text Nick: "No confirmation from Maria for 123 Main St"
4. When cleaner confirms, I log it and set a reminder for expected completion
5. When cleaner marks done, I log it and notify Nick
6. If cleaner flags an issue, I relay to Nick immediately
7. All activity logged in a shared tracking sheet (Google Sheets or Notion)

### What we're testing:

- Does iCal give us reliable checkout data?
- Do cleaners respond to SMS quickly enough?
- What are the real edge cases Nick deals with?
- How long does turnover actually take per property?
- What does Nick need to see in the dashboard?

---

## Phase 2: Build the Smallest Useful Agent (Weeks 2-3)

**Architecture:**

```
Airbnb iCal → Python script (cron 15min) → Detect checkout today
  → Twilio SMS to assigned cleaner
  → Cleaner replies (Twilio webhook)
  → Agent processes reply (confirm/reschedule/issue)
  → Log to tracking sheet (Airtable or Google Sheets)
  → Alert Nick if escalation needed
  → Daily summary to Nick every evening
```

**Tech stack (what we already have):**

- Python backend (FastAPI — same as Voicebox pattern)
- Twilio for SMS (send + receive webhooks)
- iCal parser (Python `icalendar` library)
- Airtable or Google Sheets for the tracking dashboard
- Cron or systemd timer for polling
- Runs on Joe's existing server (WSL2 / same box as Hermes)

**Deliverables:**

- Working agent that polls iCal, texts cleaners, logs status
- Simple web dashboard (or Airtable view) Nick can check
- SMS-based interaction for cleaners (no app to install)
- Daily summary SMS to Nick

---

## Phase 3: Productize (Month 2+)

- Web dashboard for property managers (Next.js — same stack as JTS site)
- Multi-property, multi-cleaner management
- Airbnb/VRBO API integration (if we can get partner access)
- Outcome-based pricing: $X per successful turnover
- Onboarding flow: new property manager signs up, adds iCal URL, adds cleaners, agent starts watching
- Sell to other San Diego property managers

---

## Pricing Models to Test

| Model | Setup | Monthly | Outcome | Best For |
|-------|-------|---------|---------|----------|
| Flat | $1,500 | $1,000/mo (up to 10 properties) | — | Predictable, simple |
| Per-turnover | $1,000 | $500/mo base | $25-40 per confirmed turnover | Scales with volume, aligns incentives |
| Per-property | $500 | $150/mo per property | — | Easy to calculate ROI per unit |

**Recommendation for Nick's pilot:** Flat $1,500 setup + $1,000/mo. Keep it simple. Switch to per-turnover once we know the volume.

---

## Eval Set (50 Examples)

Before going live, test the agent against 50 real scenarios:

- 30 normal checkouts (cleaner confirms, cleans, done)
- 5 no-response cases (cleaner doesn't reply in 30/60/120 min)
- 5 edge cases (guest extends, early checkout, double booking)
- 5 maintenance issue flags
- 5 tight turnaround windows (< 2 hrs)

**Pass criteria:**
- Correct checkout detection: 48/50 (96%)
- Correct cleaner notification: 49/50 (98%)
- Correct escalation: 48/50 (96%)
- Zero false "done" confirmations
- All escalations include actionable info for Nick

---

## Distribution Content (Workflow Teardowns)

Once the pilot works, create content showing the old way vs the agent way:

**"The old way":** Nick watches 12 Airbnb calendars, texts 4 cleaners, forgets one, guest arrives to dirty property, 1-star review.

**"The agent way":** Guest checks out → cleaner already has the text → confirms in 8 minutes → property turned over by 1pm → next guest walks into a spotless unit → 5-star review.

Format: 60-90 sec reels for IG/TikTok. Show the actual text messages. Show the time stamps. Make it visceral.

---

## Next Steps

1. **Get Nick's iCal URLs and cleaner contacts** — Joe asks Nick
2. **Set up Google Sheet or Notion board** for tracking — I build this
3. **Start manual pilot** — I run the workflow for 1-2 weeks
4. **Log everything** — every edge case, every timing, every cleaner response
5. **Build the agent** — once the pattern is clear
6. **Productize** — dashboard, onboarding, sell to others

---

*Spec version: 1.0 | Created: 2026-07-01 | Author: Lurkr + Joe*