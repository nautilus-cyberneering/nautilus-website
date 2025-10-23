import { test, expect } from '@playwright/test';

test('Header logo is visible and links to home', async ({ page }) => {
	await page.goto('/');

	// The logo link should be visible and have the correct aria-label
	const logo = page.getByRole('link', { name: /site logo/i });
	await expect(logo).toBeVisible();

	// The logo link should point to the homepage
	await expect(logo).toHaveAttribute('href', '/');

	// Clicking the logo should navigate to the homepage
	await logo.click();
	await expect(page).toHaveURL('/');
});

test('Header navigation links are visible and work', async ({ page }) => {
	await page.goto('/');

	// Navigation links
	const navLinks = [
		{ name: 'Home', path: '/' },
		{ name: 'About', path: '/about' },
		{ name: 'Blog', path: '/blog' },
		{ name: 'Contact', path: '/contact' }
	];

	for (const { name, path } of navLinks) {
		const link = page.getByRole('link', { name, exact: true });
		await expect(link).toBeVisible();
		await link.click();
		await expect(page).toHaveURL(path);
	}
});

test('Header theme toggle is visible and switches theme', async ({ page }) => {
	await page.goto('/');

	// Find the theme toggle button (adjust selector if needed)
	const themeToggle = page.getByRole('button', { name: /theme|toggle/i });
	await expect(themeToggle).toBeVisible();

	// Get the initial theme
	const initialTheme = await page.evaluate(() =>
		document.documentElement.getAttribute('data-theme')
	);

	// Try up to 3 clicks to cycle through all possible themes
	let newTheme = initialTheme;
	for (let i = 0; i < 3; i++) {
		await themeToggle.click();
		newTheme = await page.evaluate(() => document.documentElement.getAttribute('data-theme'));
		if (newTheme !== initialTheme) break;
	}
	expect(newTheme).not.toBe(initialTheme);

	console.log('Initial theme:', initialTheme, 'New theme:', newTheme);
});

// test('Header hamburger menu works on mobile', async ({ page }) => {
//   // Set viewport to mobile size
//   await page.setViewportSize({ width: 375, height: 800 });

//   await page.goto('/');

//   // Hamburger menu button should be visible
//   const hamburger = page.getByRole('button', { name: /toggle menu/i });
//   await expect(hamburger).toBeVisible();

//   // Navigation links should be hidden before opening menu
//   // (nav is hidden, so links inside should not be visible)
//   const nav = page.locator('nav');
//   await expect(nav).not.toBeVisible();

//   // Click hamburger to open menu
//   await hamburger.click();

//   // Wait for nav to become visible (animation)
//   await expect(nav).toBeVisible();

//   // Now check that the nav links are visible inside the open nav
//   for (const name of ['Home', 'About', 'Blog', 'Contact']) {
//     const navLink = nav.getByRole('link', { name, exact: true });
//     await expect(navLink).toBeVisible();
//   }

//   // Click hamburger again to close menu
//   await hamburger.click();
//   await expect(nav).not.toBeVisible();
// });
