import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/index');

  await expect(page.getByText(/Hello/)).toBeVisible();
});
