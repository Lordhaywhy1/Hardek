# Hardek Telecommunication Frontend MVP

Hardek is a premium React + TypeScript frontend demonstration for a Nigerian phone retail and telecommunications business. It combines a public storefront with customer, staff, sales-agent, brand-ambassador, and administrator portals.

## Run locally

```bash
pnpm install
pnpm dev
```

The production build is:

```bash
pnpm build
```

The managed preview runs on port `3000`.

## Demo access

No real authentication is connected. Use the role switcher in any portal header, or these routes directly:

- `/` — public storefront
- `/customer` — customer account, orders, simulated tracking, loyalty, wishlist, bids, and support
- `/customer/vote` — one-vote-per-period customer representative voting with live performance results
- `/staff` — staff performance, sales points, weekly voting, and Employee of the Month scoring
- `/agent` — wholesale catalogue, persistent bulk-order builder, and commission estimates
- `/agent/credit` — two- or three-instalment demo credit, 50% deposit policy, balance settlement, and purchase lock
- `/agent/submit` — agent bid/distress-sale submissions held for admin approval and scheduling
- `/ambassador` — referrals, copied referral link, reward redemption, and leaderboard
- `/admin` — command centre, product and inventory operations, order status sync, people, finance/audit, content, support, and settings
- `/admin/monitoring` — admin-only staff and agent oversight: staff sales/target/points, agent draft units, submitted bulk orders, and shared activity
- `/admin/auctions` — approve agent marketplace submissions and control start/end schedules
- `/admin/points` — automatically identify the best sales representative and manage product points and monthly targets
- `/track` — minimal public tracking-number lookup with In Store, In Transit, Out for delivery, and Delivered stages
- `/verify/:productId` — QR-style device verification against demo inventory records

## Mock state behavior

All records are centralized in `src/data.ts` and exposed through the `DemoStateProvider` in `src/store.tsx`. Storefront and portal screens share the same state. Examples include inventory adjustments reflected in catalogue availability, VAT recorded on checkout orders, admin delivery status changes appearing in customer tracking, ticket creation appearing in the support desk, agent bulk orders persisting across portal routes, agent credit locking new orders until balances are settled, auction submissions staying hidden until approval, and admin monitoring reflecting staff and agent activity. Public storefront reloads show an auction/distress-sale modal; customer bidding is not in the portal sidebar.

The demo state is persisted to `localStorage` under `hardek-demo-state-v1`. Use **Reset demo data** in the portal sidebar or Admin → Settings to restore the original seed data. Financial values use integer minor units and are formatted as Nigerian naira.

## Deliberate frontend-only boundaries

Payments, crypto equivalents, VAT settlement, delivery tracking, auctions, pre-orders, bids, QR verification, commissions, instalment balances, redemptions, salaries, rewards, referrals, support responses, email notices, audit entries, and authentication are simulated. The app does not collect real card details or wallet private keys and does not claim that money, bids, payouts, courier events, QR scans, email delivery, or production account changes have occurred.

Backend integration seams are the shared state actions and domain types in `src/types.ts`, `src/store.tsx`, and `src/lib.ts`. A production integration would replace those mock actions with authenticated API calls, persistence, payment-provider webhooks, courier events, and server-side authorization.

## Project structure

- `src/App.tsx` — connected storefront, commerce flows, portals, and admin views
- `src/data.ts` — realistic seed data and product imagery
- `src/store.tsx` — localStorage-backed reducer and shared mock mutations
- `src/lib.ts` — currency-safe calculations, formatters, search, and CSV export
- `src/types.ts` — domain records and action contracts
- `public/manus-routes.json` — complete managed preview route manifest
- `plan.md` / `TODO.md` — approved design and delivery outcomes
