# 🧪 Test Automation - Magento E-Commerce

End-to-end (E2E) test automation project for a Magento-based e-commerce platform. Tests cover login, registration, and user account management scenarios.

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Requirements](#requirements)
- [Installation](#installation)
- [Running Tests](#running-tests)
- [Project Structure](#project-structure)
- [Implemented Features](#implemented-features)
- [Work in Progress](#work-in-progress)
- [Contact](#contact)

## 📖 Project Overview

This project contains automated end-to-end tests for a Magento e-commerce store - hyva theme. Tests leverage the **Playwright** framework for browser automation and implement the **Page Object Model (POM)** pattern to maintain clean, maintainable test code.

**Test Site:** [Hyva Demo Store](https://demo.hyva.io/)


## 🚀 Running Tests

### Run all tests
```bash
npm test
```

### Run tests in headed mode 
```bash
npm run test:headed
```

### Run tests in UI mode
```bash
npm run watch:pw
```

### View test report
```bash
npm run report
```

## 📁 Project Structure

```
TA_E2E_ECOMMERCE_MAGENTO/
├── tests/
│   ├── login.spec.ts              # Login tests
│   ├── registration.spec.ts       # Registration tests
│   ├── pages/
│   │   └── LoginPage.ts           # Page Object for login page
│   ├── fixtures/
│   │   └── pomFixtures.ts         # Custom fixtures for tests
│   └── features/
│       └── login.feature          # BDD scenarios (Gherkin)
├── playwright.config.ts           # Playwright configuration
├── playwright-report/             # HTML test reports
├── test-results/                  # Test results (videos, screenshots)
├── tsconfig.json                  # TypeScript configuration
├── package.json                   # Project dependencies
└── README.md                       # This file
```

## ✅ Implemented Features

### Login Tests (`login.spec.ts`)
- ✅ Successful login with valid credentials
- ✅ Invalid login validation with incorrect passwords
- ✅ Invalid login validation with incorrect emails
- ✅ Email format validation
- ✅ Redirect to user profile page after successful login


## 🔨 Further tests in Progress

The following features are currently under development:

- 🔄 Expanding user registration tests
- 🔄 User profile management tests
- 🔄 Add to cart functionality tests
- 🔄 Checkout process tests (order completion)
- 🔄 Payment tests
- 🔄 Favorites management tests
- 🔄 CI/CD pipeline integration (GitHub Actions / GitLab CI)
- 🔄 Responsive design tests across devices
- 🔄 Additional page objects for remaining pages

## 📊 Test Reports

After running tests, an HTML report is automatically generated. To view it:

```bash
npm run report
```

## 🛠️ Technologies Used

- **[Playwright](https://playwright.dev/)** - Browser automation framework
- **[TypeScript](https://www.typescriptlang.org/)** - Static typing for JavaScript
- **[Node.js](https://nodejs.org/)** - JavaScript runtime
- **[dotenv](https://www.npmjs.com/package/dotenv)** - Environment variable management
