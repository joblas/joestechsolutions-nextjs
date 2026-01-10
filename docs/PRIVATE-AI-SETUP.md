# Private AI Setup - Implementation Guide

This document covers the Private AI Setup service integration with Stripe payments.

## Overview

Two pricing tiers:
- **Local Install**: $99 one-time — Setup on client's computer
- **VPS Hosting**: $99 setup + $29/mo — Hostinger KVM 1 VPS with domain

## Files Created

```
src/
├── app/
│   ├── private-ai-setup/
│   │   ├── page.tsx              # Landing page with dual pricing
│   │   └── success/
│   │       └── page.tsx          # Post-payment intake form
│   ├── api/
│   │   ├── create-checkout/
│   │   │   └── route.ts          # Stripe checkout session creation
│   │   ├── verify-payment/
│   │   │   └── route.ts          # Payment verification
│   │   └── intakes/
│   │       └── route.ts          # Intake form submission + admin GET
│   └── services/
│       └── page.tsx              # Updated with AI service card
├── lib/
│   ├── stripe.ts                 # Stripe config + price IDs
│   └── intakes.ts                # JSON file storage for intakes
```

## Environment Variables

Add these to your `.env.local`:

```bash
# Stripe Configuration
STRIPE_SECRET_KEY=sk_live_...           # From Stripe Dashboard → Developers → API keys
STRIPE_PUBLISHABLE_KEY=pk_live_...      # Public key (if needed client-side)

# Price IDs (from Stripe Dashboard → Products)
STRIPE_LOCAL_PRICE_ID=price_...         # "Private AI Local Setup" $99 one-time
STRIPE_VPS_SETUP_PRICE_ID=price_...     # "Private AI VPS Setup" $99 one-time
STRIPE_VPS_MONTHLY_PRICE_ID=price_...   # "VPS Monthly Hosting" $29/mo subscription

# Base URL for redirects
NEXT_PUBLIC_BASE_URL=https://joestechsolutions.com  # Or http://localhost:3000 for dev
```

## Stripe Dashboard Setup

### Step 1: Create Products

Go to Stripe Dashboard → Products → Add Product

**Product 1: Private AI Local Setup**
- Name: "Private AI Local Setup"
- Price: $99.00 USD (One time)
- Copy the Price ID → `STRIPE_LOCAL_PRICE_ID`

**Product 2: Private AI VPS Setup**
- Name: "Private AI VPS Setup"
- Price: $99.00 USD (One time)
- Copy the Price ID → `STRIPE_VPS_SETUP_PRICE_ID`

**Product 3: VPS Monthly Hosting**
- Name: "VPS Monthly Hosting"
- Price: $29.00 USD (Recurring, Monthly)
- Copy the Price ID → `STRIPE_VPS_MONTHLY_PRICE_ID`

### Step 2: Configure Webhooks (Optional but Recommended)

For production, set up webhooks to track payments even if users don't complete the intake form:

1. Stripe Dashboard → Developers → Webhooks
2. Add endpoint: `https://joestechsolutions.com/api/webhooks/stripe`
3. Listen for: `checkout.session.completed`

## Calendly Integration

After users submit the intake form, they're prompted to schedule a call.

Update the placeholder in `src/app/private-ai-setup/success/page.tsx`:

```tsx
// Replace this:
<a href="https://calendly.com/YOUR_CALENDLY_LINK" ...>

// With your actual Calendly URL:
<a href="https://calendly.com/joe-at-joestechsolutions/private-ai-setup" ...>
```

Or embed directly:
```tsx
<iframe
  src="https://calendly.com/joe-at-joestechsolutions/private-ai-setup"
  width="100%"
  height="600"
  frameBorder="0"
/>
```

## Data Storage

Intakes are stored in `data/intakes.json` (JSON file storage).

**View recent intakes:**
```bash
curl http://localhost:3000/api/intakes
```

**Production alternatives:**
- Prisma + PostgreSQL
- Supabase
- Vercel KV

## VPS Fulfillment Process

When a client purchases VPS hosting:

### 1. Provision Hostinger VPS
- Log into Hostinger hPanel
- VPS → KVM 1 ($4.99/mo)
- Select Ubuntu 22.04 LTS

### 2. Domain Setup
- Register domain via Hostinger (~$10/yr) or client's registrar
- Point A record to VPS IP

### 3. Install Stack
```bash
# SSH into VPS
ssh root@<VPS_IP>

# Install Docker
curl -fsSL https://get.docker.com | sh

# Run Open WebUI with Ollama
docker run -d -p 3000:8080 --add-host=host.docker.internal:host-gateway \
  -v ollama:/root/.ollama -v open-webui:/app/backend/data \
  --name open-webui --restart always \
  ghcr.io/open-webui/open-webui:ollama

# Pull a model
docker exec -it open-webui ollama pull mistral:7b
```

### 4. SSL Setup
- Use Hostinger's free Let's Encrypt
- Or use Caddy as reverse proxy

### 5. Handover
- Provide client with:
  - OpenWebUI URL (https://ai.theirdomain.com)
  - Admin credentials
  - hPanel login (optional)

### Profit Calculation
```
Monthly Revenue: $29
Hostinger KVM 1: -$5
Domain (amortized): -$1
Net Profit: $23/mo per client
```

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Test checkout (use Stripe test mode)
# Use card: 4242 4242 4242 4242
```

## Deployment

```bash
# Build
npm run build

# Deploy to Vercel
vercel --prod
```

Make sure environment variables are set in Vercel Dashboard → Settings → Environment Variables.

## Troubleshooting

### "Payment configuration error"
- Check that all price IDs are set in environment variables
- Verify Stripe secret key is correct

### Checkout not redirecting
- Check browser console for errors
- Verify `NEXT_PUBLIC_BASE_URL` is set correctly

### Intakes not saving
- Ensure `data/` directory is writable
- Check server logs for errors

## Testing Checklist

- [ ] Local checkout flow works
- [ ] VPS checkout flow works (subscription mode)
- [ ] Payment verification works
- [ ] Intake form saves data
- [ ] Admin endpoint returns intakes
- [ ] Calendly link works
- [ ] Service card on /services links correctly
