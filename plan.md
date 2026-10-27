# Hardek Telecommunication Frontend MVP — Implementation Plan

## Product scope

Hardek is a frontend-only, stakeholder-demo-ready phone retail and telecommunications platform. It combines a public storefront with customer, staff, sales agent, brand ambassador, and administrator experiences. There is no backend, database, real authentication, real payment processing, real courier integration, or production security claim. All roles, transactions, tracking events, payouts, bids, rewards, salaries, and notifications are simulated and visibly labeled as demo behavior.

The build will prioritize connected workflows over static dashboard tiles: products drive catalogue, detail, cart, comparison, checkout, inventory and admin views; orders drive customer tracking, admin fulfilment and finance; shared mock state persists through localStorage and supports reset-to-seed.

## Design direction

Three possible directions were considered:

1. **Precision Retail OS** — structured, editorial technology retail with a calm light canvas and navy navigation. Probability: 0.06.
2. **Signal & Supply** — a premium telecom control-room aesthetic with electric-blue data accents and crisp operational density. Probability: 0.05.
3. **Quiet Future Commerce** — softer, more lifestyle-oriented retail with pale neutrals and restrained cyan highlights. Probability: 0.04.

### Chosen direction: Precision Retail OS

- **Design movement:** Scandinavian editorial commerce blended with enterprise operations software.
- **Core principles:** Make product decisions easy; keep operational data legible; use color as status, not decoration; maintain one connected system across roles.
- **Color philosophy:** Deep navy anchors trust and authority, electric blue signals action and navigation, cyan marks newness and technology, and restrained green is reserved for success or healthy stock. White and mist-gray surfaces keep long catalogues and dense tables breathable.
- **Layout paradigm:** A left rail and asymmetric content canvas for role portals; storefront pages use a strong content spine with full-bleed promo bands and controlled product rails rather than oversized centered hero blocks.
- **Signature elements:** A small “signal bar” motif for stock/fulfilment health, compact pill badges with icon-plus-label semantics, and a subtle diagonal-cut corner on hero/product promo cards.
- **Interaction philosophy:** Every primary action gives immediate local feedback through toasts, inline state changes, or confirmation dialogs. Demo disclaimers are clear but quiet, placed where risk or simulation status matters.
- **Animation:** Short 150–220ms fades and slide-ins only for drawers, dialogs, toasts, and role switching. No looping decorative motion.
- **Typography system:** Inter for interface text and IBM Plex Mono for prices, IDs, timestamps, and operational metrics. Strong 12px uppercase eyebrow labels, 16–20px section heads, and 32–48px restrained display type.
- **Brand essence:** A trusted Nigerian technology retailer that makes buying, selling, and operating mobile commerce feel connected. Personality: precise, dependable, progressive.
- **Brand voice:** Direct, informed, and commercially warm. Example lines: “Choose your next signal.” and “Every order, visible from shelf to doorstep.”
- **Wordmark & logo:** A compact monogram built from two interlocking signal bars forming an H, paired with a custom-spaced “HARDEK” wordmark and the smaller “TELECOMMUNICATION” descriptor.
- **Signature brand color:** Hardek Electric `#1F7AFF` — a high-contrast blue used for action and recognizable brand presence.

## Architecture

### Application layers

- `src/app/` — router, providers, shell, role switching and route guards for demo-only access.
- `src/components/ui/` — buttons, badges, cards, dialogs, tabs, inputs, tables, empty states, toasts and responsive primitives.
- `src/components/layout/` — storefront header/footer, dashboard sidebar/topbar, mobile navigation and role switcher.
- `src/data/` — types, seed records, derived selectors and business rules.
- `src/store/` — React context/reducer for centralized mutable mock state plus localStorage persistence/reset.
- `src/lib/` — currency-safe minor-unit calculations, formatting, validation, CSV export and demo helpers.
- `src/features/storefront/` — home, catalogue, product details, comparison, cart, checkout and public blog/donations.
- `src/features/customer/` — overview, orders/tracking, loyalty, wishlist, pre-orders, bids, notifications and support.
- `src/features/staff/` — overview, sales/points, voting, employee of month and compensation estimates.
- `src/features/agent/` — overview, wholesale catalogue, bulk-order builder, commissions and fulfilment.
- `src/features/ambassador/` — overview, referrals, leaderboard and reward redemption.
- `src/features/admin/` — overview, product/inventory/order/staff/agent/ambassador management, finance/audit, content, campaigns, support and settings.
- `public/manus-routes.json` — complete route manifest for preview and publication checks.

### Shared mock data and rules

Seed data will include consistent IDs and relationships for products/variants, customers, staff, agents, ambassadors, orders/items, payments/deliveries, reviews, loyalty, referrals, votes/performance, auctions/pre-orders, commissions/incentives, donations/sponsors, articles, notifications, tickets, and audit events. Store all currency in integer minor units. Derived selectors will calculate revenue, AOV, inventory valuation, staff points, target progress, commissions, ambassador conversion rate, and finance summaries from the same state.

A `DemoStateProvider` will expose actions such as add/update product, adjust stock, add cart item, create demo order, update delivery/order status, submit vote, create bulk order, submit redemption, publish article, create support ticket, respond to ticket, append audit event, export CSV, and reset demo data. localStorage will persist the state envelope and a small UI preference envelope.

### Route map

Public:
- `/` home
- `/catalogue` catalogue
- `/product/:productId` product detail
- `/compare` comparison
- `/cart` cart
- `/checkout` checkout
- `/pre-orders` pre-orders
- `/auctions` auctions
- `/auctions/:auctionId` auction detail
- `/blog` blog
- `/blog/:articleId` article detail
- `/donations` donations
- `/donations/:campaignId` campaign detail

Demo portals:
- `/customer` and nested customer pages for orders, order detail/tracking, loyalty, wishlist, comparisons, pre-orders, bids, notifications, support and preferences
- `/staff` and nested sales, voting, employee-of-month and compensation pages
- `/agent` and nested catalogue, bulk orders, commissions and fulfilment pages
- `/ambassador` and nested referrals, rewards and leaderboard pages
- `/admin` and nested overview, products, inventory, orders, staff, agents, ambassadors, finance, audit, blog, donations, sponsors, support and settings pages

## Implementation phases

1. **Foundation and visual system:** Vite/React/TypeScript/Tailwind setup, package pinning, global styles, route manifest, logo metadata, reusable UI primitives, layout shells, toast/dialog systems, seed data and shared state.
2. **Storefront commerce:** homepage, catalogue filters/sort/search, product detail variants, wishlist, comparison, cart and validated simulated checkout with demo payment selection.
3. **Customer workflows:** account overview, order history/detail, synchronized tracking timeline, loyalty/redemption, pre-orders, auctions/bids, notifications and support tickets.
4. **Role portals:** staff KPIs/points/voting/employee-of-month; agent wholesale/bulk orders/commission; ambassador referrals/rewards/redemption.
5. **Admin operations:** overview analytics, product CRUD, inventory adjustments, order management/status sync, people management, reviews/promotions/settings, finance/audit/CSV, blog manager, campaigns/sponsors and support responses.
6. **Validation and delivery:** production build, route manifest check, diagnostics, primary flow checks, responsive/mobile review, checkpoint commit, and honest limitations in README.

## Material constraints

Use no external backend or secret values. Use CSS/inline SVG for the Hardek mark and restrained decorative motifs. Product imagery will use stable remote demo image URLs with sensible alt text and fallbacks; custom decorative hero art is intentionally avoided so phone imagery remains the visual focus. Any “payment”, “delivery”, “auction”, “salary”, “payout”, “redemption”, “tracking”, or “authentication” wording will carry a demo/simulated qualifier where it could otherwise imply a real service.

## Serving and build workflow

Run the app on the managed preview port 3000 with Vite and `0.0.0.0`. Add a self-contained build command and `dist` output declaration for static publication readiness. Keep the application backend-free. Use TypeScript diagnostics before implementation, run the production build before delivery, and save a checkpoint to the project’s canonical repository after the app is validated.
