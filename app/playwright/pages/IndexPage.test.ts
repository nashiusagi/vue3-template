import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/index');

  await expect(page.getByText(/Hello/)).toBeVisible();
});

test('has link', async ({ page }) => {
  await page.goto('/index');

  const createButton = page.getByText('create')

  await expect(createButton).toBeVisible()
  await expect(createButton).toHaveAttribute('href', '/post/create')
})
