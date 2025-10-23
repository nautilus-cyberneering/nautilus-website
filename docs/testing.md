# docs/testing.md

# Testing Guide

This file documents how testing works in this project.

## Overview

This repo uses two test runners:

- Vitest — unit & component tests (runs tests under `src/`).
  - Files: `src/lib/utils/*.test.ts`, `src/lib/stores/*.test.ts`
  - Command: `npx vitest`
- Playwright — end-to-end (E2E) tests (runs tests under `tests/`).
  - Files: `tests/*.spec.ts`
  - Command: `npx playwright test`

Vitest and Playwright are run separately — Vitest must not attempt to run Playwright specs (we exclude `tests/` in `vitest.config.ts`).

Why Vitest excludes E2E tests
- Playwright tests use a different runner and runtime: they import Playwright's `test/expect` helpers, require browser automation and typically a running dev server. Running those specs with Vitest causes errors, slowdowns, and false failures. Excluding E2E tests keeps unit runs fast and avoids cross-runner conflicts.

## Running Tests

Unit tests (Vitest)
- Run once:
  ```
  npx vitest
  ```
- Watch mode:
  ```
  npx vitest --watch
  ```
- Coverage:
  ```
  npx vitest --coverage
  ```

E2E tests (Playwright)
- Make sure the dev server is running (or configure Playwright to start it).
  ```
  npm run dev
  ```
- Run E2E:
  ```
  npx playwright test
  ```
- Run a single test file:
  ```
  npx playwright test tests/header.spec.ts
  ```

Recommended npm scripts (optional)
```
# add to package.json scripts
"test:unit": "vitest",
"test:e2e": "playwright test",
"test": "npm run test:unit"
```

## Test Organization

- Unit tests: keep beside code under `src/` and name `*.test.ts`.
  - Examples: `src/lib/utils/date.test.ts`, `src/lib/stores/theme.test.ts`
- E2E tests: place in `tests/` and name `*.spec.ts`.
  - Examples: `tests/home.spec.ts`, `tests/header.spec.ts`
- Keep Playwright tests out of Vitest runs (see `vitest.config.ts`).

## Configuration

Vitest
- Project contains `vitest.config.ts` which excludes `tests/**/*` and `node_modules/**/*`.
  - File: [vitest.config.ts](../vitest.config.ts)

Playwright
- Playwright config (if present) controls browsers, timeouts, and webServer settings.
  - If you want Playwright to start the dev server automatically, add a `webServer` block to `playwright.config.ts`.

Example minimal Playwright config snippet (optional):
```ts
// playwright.config.ts (example)
import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: { baseURL: 'http://localhost:5173' },
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:5173',
    reuseExistingServer: true,
  },
});
```

## Writing New Tests

Unit test (Vitest + @testing-library/svelte) — example for a store or small component:
```ts
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/svelte';
import ThemeToggle from '$lib/components/molecules/ThemeToggle.svelte';
import { theme } from '$lib/stores/theme';

describe('ThemeToggle', () => {
  it('toggles theme store', async () => {
    const { getByRole } = render(ThemeToggle);
    const btn = getByRole('button', { name: /theme|toggle/i });
    btn.click();
    // assert store changed (import store and read or mock localStorage)
    expect(typeof $theme).toBe('string');
  });
});
```

E2E test (Playwright) — header examples used in this project:
```ts
import { test, expect } from '@playwright/test';

test('Header logo is visible and links to home', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  const logo = page.getByRole('link', { name: /site logo/i });
  await expect(logo).toBeVisible();
  await expect(logo).toHaveAttribute('href', '/');
});

test('Header theme toggle switches data-theme', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  const toggle = page.getByRole('button', { name: /theme|toggle/i });
  const before = await page.evaluate(() => document.documentElement.getAttribute('data-theme'));
  await toggle.click();
  const after = await page.evaluate(() => document.documentElement.getAttribute('data-theme'));
  expect(after).not.toBe(before);
});
```

Mobile/hamburger test tips
- Set viewport before navigation:
  ```ts
  await page.setViewportSize({ width: 375, height: 800 });
  await page.goto('http://localhost:5173/');
  ```
- Scope nav locator to header and wait for visibility after clicking burger:
  ```ts
  const nav = page.locator('header nav');
  const hamburger = page.getByRole('button', { name: /toggle menu/i });
  await hamburger.click();
  await page.waitForTimeout(300); // allow animation if needed
  await expect(nav).toBeVisible();
  ```

## Prerequisites

- Node 16+ (or project-supported Node version)
- Install dependencies:
  ```
  npm install
  npx playwright install
  ```
- Dev server running for E2E tests:
  ```
  npm run dev
  ```
  or configure `webServer` in `playwright.config.ts` so Playwright starts it automatically.

## Troubleshooting & Notes

- Vitest running Playwright tests? Ensure `vitest.config.ts` excludes `tests/**/*` and `node_modules/**/*`.
- Playwright strict role errors: use `exact: true` when multiple accessible names match.
- If nav animation hides elements during checks, add a short `waitForTimeout` or wait for the nav to have `.open`.
- For external links that open popups, prefer validating `href` or use:
  ```ts
  const newPage = await page.context().newPage();
  await newPage.goto(href);
  ```
- Keep unit tests and E2E tests separate and run with the correct runner.
