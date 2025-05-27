# ✅ SauceDemo End-to-End Test Automation (Playwright + TypeScript)

This project is a complete end-to-end automated testing suite built using [Playwright](https://playwright.dev) with TypeScript.  
It covers the most important functional scenarios on [https://www.saucedemo.com](https://www.saucedemo.com), designed for academic QA/Testing evaluation.

---

## 🚀 Features Tested

| # | Feature                   | Description                                 |
|---|---------------------------|---------------------------------------------|
| 1 | 🔐 Login                  | Valid & invalid login scenarios             |
| 2 | 🛒 Add to Cart            | Add products to the cart                    |
| 3 | ❌ Remove from Cart       | Remove a product and verify it's removed    |
| 4 | 💳 Checkout Flow         | Complete checkout with valid user data      |
| 5 | 🔃 Sort Functionality     | Sort products by Name (Z to A) & Price (High → Low) |
| 6 | 🌐 Multi-Browser Testing | Runs on Chromium and Firefox                |

---

## 🛠️ Tech Stack

- 🎭 [Playwright](https://playwright.dev)
- 🧪 TypeScript
- 📁 Page Object Model (POM)
- ✅ Grouped test suites (`test.describe`)
- 🔐 `.env` based credential loading (parameterized testing)

---

## 📂 Project Structure

```
saucedemo-tests/
├── tests/
│   ├── login.spec.ts
│   ├── cart.spec.ts
│   ├── checkout.spec.ts
│   ├── sort.spec.ts
├── pages/
│   ├── LoginPage.ts
│   ├── ProductsPage.ts
│   ├── CartPage.ts
│   ├── CheckoutPage.ts
├── .env.example
├── playwright.config.ts
```

---

## 🧪 How to Run

### 📦 1. Install dependencies

```bash
npm install
```

### 🔐 2. Create your `.env` file

Create a `.env` file based on `.env.example`:

```env
SAUCE_USERNAME=standard_user
SAUCE_PASSWORD=secret_sauce
```

> Do NOT commit the `.env` file.

---

### ▶️ 3. Run all tests

```bash
npx playwright test
```

### 🖥 4. Run in specific browser

```bash
npx playwright test --project=firefox
npx playwright test --project=chromium
```

---

## 🧠 Notes

- Login is performed via `beforeEach()` in every spec due to Saucedemo’s session model.
- No `globalSetup` or `storageState` is used - session resets every time.
---