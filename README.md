# Adobe-Style Multi‑Vendor Marketplace (React + Vite + Tailwind)

This project implements an Adobe Store–inspired multi‑vendor storefront with a customer account dashboard, seller dashboard (no site header/footer), seller storefront, and a seller map locator. It connects to a Magento backend via GraphQL.

## Frontend Stack
- React 18 + Vite + TypeScript
- Tailwind CSS + shadcn/ui
- Apollo Client (@apollo/client)
- React Router
- TanStack Query (ancillary)

## Backend Requirements (Magento + GraphQL)
- Magento instance accessible at: https://app.canadamarketplace.test
- GraphQL endpoint: https://app.canadamarketplace.test/graphql
- CORS must allow this frontend origin and include Authorization headers
- Customer token authentication (customerToken) stored in localStorage
- 3rd‑party Multi‑Vendor module must expose these GraphQL fields/mutations or equivalents:
  - sellerByCustomer, updateSellerProfile, requestSellerPayout
  - products filterable by seller_id
  - createVendorProduct or similar mutation for seller product creation

## Apollo Client Configuration
File: src/lib/apolloClient.ts
- Uses the Magento GraphQL endpoint
- Adds Authorization: Bearer <customerToken> when present
- Centralized error logging for GraphQL and network errors

## Implemented GraphQL Documents
Files under src/graphql/
- customer.ts
  - GET_CUSTOMER, GET_CUSTOMER_ORDERS, UPDATE_CUSTOMER
- seller.ts
  - GET_SELLER_BY_CUSTOMER, UPDATE_SELLER_PROFILE, REQUEST_PAYOUT
- catalog.ts
  - GET_VENDOR_PRODUCTS, CREATE_VENDOR_PRODUCT

These documents are scaffolds and may need to be aligned to your marketplace module's exact schema names.

## Pages and Routes
- / — Home with Adobe‑style header, hero slider, categories, featured products
- /account — Customer Account Dashboard with vertical menu tabs and Become a Seller CTA or Seller Panel shortcut
- /dashboard/seller — Seller Dashboard with left sidebar navigation, no site header/footer
- /seller/:sellerId/storefront — Seller Storefront page
- /seller/map — Seller Map Locator
- /seller/:sellerId/products — Seller Product Listing
- /wishlist — Wishlist page
- /compare — Compare items page

## Seller Dashboard (No Global Header/Footer)
- Left vertical menu matching Magento admin look & groups:
  - Dashboard, Seller (My Profile, My Shop), Catalog (Manage Products, Configurable Attributes, Manage Categories, Manage Discounts), Finance (Transactions, Payouts, Payment Methods)
- Quick links open the corresponding Magento screens in a new tab

## Customer Account Dashboard
- Left vertical menu tabs:
  - My Account, My Orders, My Downloadable Products, My Wish List, Address Book, Edit Account, Stored Payment Methods, My Product Reviews, Newsletter Subscription, Privacy Settings
- Become a Seller CTA if not approved (localStorage isSellerApproved !== "true")
- If approved, shows buttons for Edit Seller and Seller Panel

## Header UX
- Right‑top icons: Language switcher (EN/FR), Wishlist, Account dropdown
- Account dropdown items: My Account, My Wishlist, Compare Items, My Orders, Contact Us + language switcher and Logout when authenticated

## Internationalization
- Minimal EN/FR switcher stores selection in localStorage (key: lang)
- Extendable via src/context/LanguageContext.tsx

## How to Run
1. npm i
2. npm run dev

## How to Connect to Magento
1. Ensure Magento GraphQL is reachable from the browser (CORS enabled)
2. Create or obtain a customer token (via Magento REST or GraphQL customerToken mutation)
3. Store token in browser localStorage under key customerToken
4. Load the app — authenticated GraphQL requests will include the token automatically

## Mapping Multi‑Vendor Features
- Seller Profiles and Storefront: use GET_SELLER_BY_CUSTOMER and frontend Seller pages
- Product Listings: GET_VENDOR_PRODUCTS with search/sort/pagination in SellerProductPage
- Vendor‑Specific Cart: UI scaffold present in src/pages/cart/Cart.tsx (extend to group per vendor and compute totals)
- Seller Dashboard: Operations scaffolded; link to Magento flows for create/edit where applicable

## Next Steps
- Align GraphQL document names/fields to your module
- Implement data fetching in pages to replace mock data
- Add proper i18n (e.g., i18next) if full translation is required
- Hook up vendor‑grouped cart calculations and shipping selection

