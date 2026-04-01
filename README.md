# Onvo

AI-powered accountant copilot for bookkeepers and small accounting firms.

## What is Onvo?

Onvo helps accountants manage multiple small business clients faster. It auto-categorizes transactions, reconciles accounts, flags anomalies, and drafts financial reports — so bookkeepers can spend less time on data entry and more time advising their clients.

## Who is it for?

- Independent bookkeepers managing 10–50+ clients
- Small accounting firms (1–10 people)
- Fractional CFOs juggling multiple businesses

## Core Features (MVP)

- **Multi-client dashboard** — see all your clients at a glance
- **Bank connection** — connect client bank accounts via Plaid
- **AI transaction categorization** — auto-categorize with per-client learning
- **Bulk review** — approve/correct AI suggestions in bulk
- **P&L generation** — auto-draft profit & loss statements per client
- **Anomaly alerts** — flag unusual charges, missing expected payments, low balances

## Tech Stack

| Layer | Tech |
|-------|------|
| Frontend | Next.js, Tailwind CSS, [@slate-ui/react](https://github.com/Adarsh-S-Nair/slate-ui) |
| Auth & Database | Supabase (Postgres + Auth) |
| Bank Data | Plaid API (sandbox → production) |
| AI | Claude API (transaction categorization, report generation) |
| Deployment | Vercel (frontend), Supabase (backend) |

## CSS Theming

Onvo uses CSS custom properties for theming, compatible with `@slate-ui/react`:

```css
:root {
  --color-accent: #6366f1;
  --color-accent-hover: #4f46e5;
  --color-fg: #f8fafc;
  --color-bg: #0f1724;
  --color-surface: #1a2332;
  --color-content-bg: #141d2b;
  --color-border: #2a3444;
  --color-card-border: #2a3444;
  --color-muted: #64748b;
  --color-danger: #ef4444;
  --color-on-danger: #ffffff;
  --color-on-accent: #ffffff;
  --color-ring: #6366f1;
}
```

## Project Structure

```
onvo/
├── src/
│   ├── app/              # Next.js app router pages
│   ├── components/       # App-specific components
│   ├── lib/              # Utilities, API clients, Supabase
│   └── types/            # TypeScript types
├── supabase/
│   └── migrations/       # Database migrations
├── public/
└── package.json
```

## Getting Started

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local

# Run development server
npm run dev
```

## Roadmap

### Phase 1 — MVP
- [ ] Project scaffolding (Next.js + Supabase + Slate UI)
- [ ] Auth (sign up, login, password reset)
- [ ] Multi-client management (add/edit/archive clients)
- [ ] Plaid sandbox integration (connect bank accounts)
- [ ] Transaction feed with AI categorization
- [ ] Bulk review/approve workflow
- [ ] Basic P&L report generation

### Phase 2 — Intelligence
- [ ] Per-client category learning (improves over time)
- [ ] Bank reconciliation
- [ ] Anomaly detection & alerts
- [ ] Cash flow forecasting
- [ ] Dashboard with key metrics across all clients

### Phase 3 — Integrations & Billing
- [ ] QuickBooks Online integration
- [ ] Xero integration
- [ ] Receipt/invoice upload + extraction
- [ ] Stripe billing (usage-based pricing)
- [ ] Client-facing reports (shareable links)

## License

MIT
