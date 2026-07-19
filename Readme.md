# New Bharat Footwear — E-Commerce Website

**New Bharat Footwear** is a full-stack, server-rendered e-commerce platform for browsing and purchasing footwear online. It supports product browsing and filtering, wishlists, cart management, checkout with Cash on Delivery or online payment via **PayU**, order tracking, product reviews, and a role-based admin dashboard for managing products, orders, and users.

🔗 Live demo: https://new-bharat-footwear.onrender.com/

---

## Features

### Customer Features
- **Product Catalog** — browse footwear organized into Men, Women, and Kids categories, with sub-categories (sneakers, boots, sandals, loafers, sport shoes, flip-flops).
- **Filtering** — filter products by price, color, and size on each category page.
- **Product Details** — dedicated detail page per product, including customer reviews.
- **Wishlist** — add, remove, and view saved products.
- **Shopping Cart** — add items, update quantities, remove items, with running quantity/price totals.
- **Checkout** — capture a shipping address and choose Cash on Delivery or online payment.
- **PayU Payment Integration** — online payments are initiated through PayU, with success/failure callback handling that updates order status.
- **Order Management** — customers can view their order history and status.
- **Review System** — customers can rate (1–5) and comment on products, restricted to items they have actually purchased and had delivered.
- **User Authentication** — signup, login, and logout using session-based authentication.
- **User Profile** — view and update profile details, including a profile image upload.
- **Store Locator Map** — an interactive TomTom Maps view on the home page showing the store location.
- **About Page** — project and developer information.
- **Responsive Design** — built on Bootstrap 5 for desktop, tablet, and mobile.

### Admin Features
- **Admin Dashboard** — real-time totals for sales, income, orders, and site visitors.
- **Product Management** — add, edit, and delete products, including image upload.
- **Order Management** — view all orders and update order status (Pending, Shipped, Delivered, Canceled).
- **User Management** — view all registered users.
- **Role-Based Access Control** — admin-only routes are protected by an authentication + role-check middleware.

---

## Tech Stack

**Frontend**
- HTML, CSS, JavaScript
- [Bootstrap 5](https://getbootstrap.com/) (via CDN)
- [EJS](https://ejs.co/) + [ejs-mate](https://www.npmjs.com/package/ejs-mate) (server-side templating and layouts)
- Font Awesome (via CDN)

**Backend**
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)

**Database**
- [MongoDB](https://www.mongodb.com/) (e.g. MongoDB Atlas)
- [Mongoose](https://mongoosejs.com/) (ODM)

**Authentication & Sessions**
- [Passport.js](https://www.passportjs.org/) (`passport-local`, `passport-local-mongoose`)
- [express-session](https://www.npmjs.com/package/express-session) with [connect-mongo](https://www.npmjs.com/package/connect-mongo) as the MongoDB-backed session store
- [connect-flash](https://www.npmjs.com/package/connect-flash) for one-time flash messages

**File Storage**
- [Cloudinary](https://cloudinary.com/) (image hosting)
- [Multer](https://www.npmjs.com/package/multer) + [multer-storage-cloudinary](https://www.npmjs.com/package/multer-storage-cloudinary) (upload handling directly to Cloudinary)

**Payments**
- [PayU](https://www.payu.in/) via [`payu-websdk`](https://www.npmjs.com/package/payu-websdk)

**Maps**
- [TomTom Maps SDK](https://developer.tomtom.com/) (via CDN)

**Build Tooling**
- [PostCSS](https://postcss.org/) + [cssnano](https://cssnano.co/) — CSS minification (`src/styles` → `public/stylesheets`)
- [Terser](https://terser.org/) — JavaScript minification (`src/scripts` → `public/scripts`)

**Deployment**
- [Render](https://render.com/)

---

## Folder Structure

```
Project/
├── app.js                 # Application entry point
├── config.js               # Centralized environment configuration & validation
├── CloudConfig.js          # Cloudinary + Multer storage configuration
├── payuConfig.js           # PayU client configuration
├── middleware.js           # Auth guards (isLoggedIn, isAdmin) and dashboard data middleware
│
├── controllers/             # Request-handling logic
│   ├── admin.js
│   ├── cart.js
│   ├── product.js
│   ├── profile.js
│   └── user.js
│
├── routes/                  # Express route definitions
│   ├── admin.js
│   ├── cart.js
│   ├── order.js
│   ├── payment.js
│   ├── product.js
│   ├── profile.js
│   ├── review.js
│   ├── user.js
│   └── wishlist.js
│
├── model/                    # Mongoose schemas
│   ├── cart.js
│   ├── order.js
│   ├── product.js
│   ├── review.js
│   ├── user.js
│   ├── visitor.js
│   └── wishlist.js
│
├── views/                    # EJS templates
│   ├── layouts/               # Shared page layout (ejs-mate)
│   ├── includes/              # Shared partials (navbar, footer, flash messages)
│   └── pages/
│       ├── adminPage/          # Admin dashboard views
│       ├── indexPage/          # Public storefront views (home, cart, checkout, etc.)
│       └── userPage/           # Auth & profile views (login, signup, profile)
│
├── src/                      # Unminified source assets
│   ├── scripts/                # Source JavaScript, minified into public/scripts
│   └── styles/                 # Source CSS, minified into public/stylesheets
│
├── public/                   # Static assets served by Express (build output)
│   ├── scripts/                # Minified JavaScript
│   └── stylesheets/            # Minified CSS
│
├── init/                     # Local database seed script (not committed to Git)
│   ├── data.js
│   └── index.js
│
├── .env.example              # Template for required environment variables
├── .nvmrc / .node-version     # Pinned Node.js version for version managers
└── package.json
```

---

## Prerequisites

- **Node.js** 20 LTS or 22 LTS (see [`.nvmrc`](.nvmrc) / [`.node-version`](.node-version))
- **npm** 10 or later (ships with Node 20/22)
- A **MongoDB** database (e.g. a free [MongoDB Atlas](https://www.mongodb.com/atlas) cluster, or a local MongoDB instance)
- A **Cloudinary** account (for image uploads)
- **PayU** merchant credentials (for online payments)
- A **TomTom Maps** API key (for the store-locator map on the home page)

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Prince-Mali/New-Bharat-Footwear.git
   cd New-Bharat-Footwear
   ```

2. (Optional) Use the pinned Node.js version:
   ```bash
   nvm use
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Copy the environment file template:
   ```bash
   cp .env.example .env
   ```

5. Open `.env` and fill in all required values (see [Environment Variables](#environment-variables) below).

6. Start the server:
   ```bash
   npm start
   ```

7. Open your browser at:
   ```
   http://localhost:8080
   ```
   (or whichever `PORT` you configured)

---

## Environment Variables

All variables are documented with placeholder values in [`.env.example`](.env.example). Copy it to `.env` and replace the placeholders — never commit `.env` or real secrets.

| Variable | Description | Required |
|---|---|---|
| `NODE_ENV` | Runtime environment: `development` or `production`. Affects whether `.env` is auto-loaded and whether session cookies are marked secure. | No — defaults to `development` |
| `PORT` | Port the Express server listens on. | No — defaults to `8080` |
| `BASE_URL` | Public base URL of the deployment (no trailing slash), used to build PayU success/failure redirect URLs. | No — falls back to the production URL |
| `DB_URL` | MongoDB connection string, used for both application data and the session store. | Yes |
| `SECRET` | Secret used to sign session cookies and encrypt session data stored in MongoDB. Must be at least 8 characters and include 2+ uppercase, 2+ lowercase, 2+ numeric, and 2+ special characters. | Yes |
| `CLOUD_NAME` | Cloudinary cloud name. | Yes |
| `CLOUD_API_KEY` | Cloudinary API key. | Yes |
| `CLOUD_API_SECRET` | Cloudinary API secret. | Yes |
| `PAYU_API_KEY` | PayU merchant key used to initiate payments. | Yes |
| `PAYU_SALT_256BIT` | PayU merchant salt (256-bit) used to sign payment requests. | Yes |
| `PAYU_MODE` | PayU environment: `TEST` or `LIVE`. | No — defaults to `TEST` |
| `MAP_TOKEN` | TomTom Maps API key, used to render the store-location map on the home page. | No — the map simply won't render if missing |

Required variables are validated on startup (`config.js`); if any are missing, the app fails fast with a clear error listing exactly which variables need to be set.

---

## Available Scripts

| Script | Command | Description |
|---|---|---|
| `npm start` | `node app.js` | Starts the server. |
| `npm test` | — | Placeholder — no automated test suite is currently configured. |
| `npm run minify-css` | `postcss src/styles/*.css --dir public/stylesheets/` | Minifies CSS from `src/styles` into `public/stylesheets` using cssnano. |
| `npm run minify-js` | `terser src/scripts/*.js --output-dir public/scripts --compress --mangle` | Minifies JavaScript from `src/scripts` into `public/scripts` using Terser. |

There is currently no dedicated development/watch script; `npm start` runs the same server used in production.

---

## Screenshots

No screenshots are currently included in this repository. Suggested pages to capture and add here:

- Home Page
- Product Listing (Men / Women / Kids)
- Product Details
- Cart
- Checkout
- User Profile
- Admin Dashboard

---

## Deployment

This project is deployed on [Render](https://render.com/) (see the live demo link above). There is no `render.yaml` or `Procfile` in the repository — the service is configured directly in the Render dashboard.

To deploy on Render (or a similar Node.js host):

1. Connect the repository to your hosting provider.
2. Set the **Build Command**:
   ```bash
   npm install
   ```
3. Set the **Start Command**:
   ```bash
   npm start
   ```
4. Configure all environment variables listed in [Environment Variables](#environment-variables) in the hosting provider's dashboard (never commit real values). In particular, set:
   - `NODE_ENV=production`
   - `BASE_URL` to your deployed URL, so PayU redirects work correctly
   - `PAYU_MODE=LIVE` once you're ready to accept real payments (defaults to `TEST`)
5. Ensure the Node.js version selected by your host satisfies the `engines` field in `package.json` (`>=20 <25`).

---

## Security

The following security-relevant practices are implemented in this codebase:

- **Environment-based configuration** — all secrets and environment-specific values are read from environment variables via a centralized, validated `config.js`; `.env` is excluded from version control via `.gitignore`.
- **Session-based authentication** — implemented with `express-session`, backed by MongoDB via `connect-mongo`, with session data encrypted at rest using the `SECRET` value.
- **Password hashing** — user passwords are hashed and salted via `passport-local-mongoose`; plaintext passwords are never stored.
- **Secure cookies in production** — session cookies are marked `secure` automatically when `NODE_ENV=production`, restricting them to HTTPS.
- **Role-based authorization** — admin-only routes are protected by an `isAdmin` middleware that checks both authentication and user role.
- **Restricted file uploads** — Cloudinary uploads are limited to `png`, `jpeg`, and `jpg` formats via the Multer/Cloudinary storage configuration.
- **Gateway-handled payments** — card and payment details are handled directly by PayU's hosted payment flow; this application only exchanges transaction metadata (amount, transaction ID, contact details) with PayU.

---

## Project Structure Overview

- **Routes** (`routes/`) — define URL paths and HTTP methods, apply middleware (auth guards, file upload handling), and delegate to controllers.
- **Controllers** (`controllers/`) — contain the request-handling logic: querying/updating models and rendering views or redirecting.
- **Models** (`model/`) — Mongoose schemas for `User`, `Product`, `Cart`, `Order`, `Review`, `Wishlist`, and `Visitor`, defining the shape of data stored in MongoDB.
- **Views** (`views/`) — EJS templates rendered server-side, organized into shared layouts/includes and page groups for the public storefront, user account pages, and the admin panel.
- **Middleware** (`middleware.js`) — cross-cutting request logic: `isLoggedIn` (authentication guard), `isAdmin` (role guard), and `dashboardData` (aggregates admin dashboard metrics before rendering).
- **Configuration** (`config.js`, `CloudConfig.js`, `payuConfig.js`) — centralizes and validates environment variables, and configures the Cloudinary and PayU SDK clients.
- **Public** (`public/`) — static assets served directly by Express; these are the minified build outputs of `src/`, not edited directly.
- **Uploads** — there is no local uploads directory; product and profile images are uploaded directly to Cloudinary through Multer's Cloudinary storage engine (`CloudConfig.js`), so uploaded files never touch the server's disk.

---

## Contributing

Contributions are welcome. To contribute:

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add: your change description"
   ```
4. Push to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a Pull Request describing your changes.

---

## Troubleshooting

**MongoDB connection failed**
Verify `DB_URL` in `.env` is correct and reachable, and that your IP address is allow-listed if you're using MongoDB Atlas.

**"Missing required environment variable(s)" on startup**
One or more required variables from the [Environment Variables](#environment-variables) table are missing. Copy `.env.example` to `.env` and fill in every required value.

**"The supplied secret failed to meet complexity requirements!"**
Your `SECRET` value doesn't meet the session store's complexity rules. Use a value with 8+ characters, including 2+ uppercase, 2+ lowercase, 2+ numeric, and 2+ special characters.

**Cloudinary configuration missing / image uploads failing**
Confirm `CLOUD_NAME`, `CLOUD_API_KEY`, and `CLOUD_API_SECRET` are set correctly in `.env`.

**Payment initiation / callback errors**
Verify `PAYU_API_KEY` and `PAYU_SALT_256BIT` are correct, `PAYU_MODE` matches the credentials you're using (`TEST` or `LIVE`), and `BASE_URL` points to a URL PayU can actually redirect back to (a plain `localhost` URL will not work with PayU's real gateway).

**Map not loading on the home page**
Check that `MAP_TOKEN` is set to a valid TomTom Maps API key.

**Node version mismatch**
This project targets Node.js 20–24 (see the `engines` field in `package.json`). Run `nvm use` to pick up the version pinned in `.nvmrc` / `.node-version`.

**`npm install` issues**
Try a clean reinstall:
```bash
rm -rf node_modules package-lock.json
npm install
```

**Port already in use**
Change the `PORT` value in `.env` to a free port.

---

## License

This project declares an **ISC License** in `package.json`, but no standalone `LICENSE` file is currently included in the repository.

---

## Author

**Prince Mali** — Full Stack Developer (solo project)

- Email: maliprince909@gmail.com
- GitHub: [https://github.com/Prince-Mali](https://github.com/Prince-Mali)
