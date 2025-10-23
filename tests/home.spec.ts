import { test, expect } from '@playwright/test';

test('homepage loads and shows key sections', async ({ page }) => {
	await page.goto('/');

	await expect(
		page.getByRole('heading', { name: /pioneering open source ecosystems/i })
	).toBeVisible();
	for (const title of ['Developing', 'Helping', 'Sharing', 'Collaborating']) {
		await expect(page.getByRole('heading', { name: title })).toBeVisible();
	}
});

test('homepage shows three latest articles and article links work', async ({ page }) => {
	await page.goto('/');

	const articles = page.locator('.article-wrapper .card');
	await expect(articles).toHaveCount(3);

	const firstArticleLink = articles.nth(0).locator('.image-container a');
	const href = await firstArticleLink.getAttribute('href');
	await firstArticleLink.click();

	const expectedUrl = new URL(href!, page.url()).toString();
	await expect(page).toHaveURL(expectedUrl);
});

test('TechAndProjects HomeCards have working links', async ({ page }) => {
	await page.goto('/');

	// Locate the HomeCards in the TechAndProjects section
	// Adjust selector if needed to be more specific to TechAndProjects
	const cards = page.locator('.tech-and-projects .card');
	await expect(cards).toHaveCount(2);

	for (let i = 0; i < 2; i++) {
		const card = cards.nth(i);
		const links = card.locator('.link');
		await expect(links).toHaveCount(2);

		// Check that both links have hrefs and are visible
		for (let j = 0; j < 2; j++) {
			const link = links.nth(j);
			const href = await link.getAttribute('href');
			await expect(link).toBeVisible();
			expect(href).toBeTruthy();
		}
	}
});

test('ExplorationAndEduction RepoCards have working links', async ({ page }) => {
	await page.goto('/');

	// Locate the RepoCards in the ExplorationAndEduction section
	const repoCards = page.locator('.repo-wrapper .card');
	await expect(repoCards).toHaveCount(2);

	for (let i = 0; i < 2; i++) {
		const card = repoCards.nth(i);
		const link = card.locator('a[target="_blank"]');
		const href = await link.getAttribute('href');
		await expect(link).toBeVisible();
		expect(href).toBeTruthy();

		// Optionally, check that clicking opens the correct URL in a new tab
		const [newPage] = await Promise.all([page.waitForEvent('popup'), link.click()]);
		await expect(newPage).toHaveURL(href!);
		await newPage.close();
	}
});
