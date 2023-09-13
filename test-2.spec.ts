import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.youtube.com/');
  await page.getByPlaceholder('Search').click();
  await page.getByPlaceholder('Search').fill('carwow');
  await page.getByPlaceholder('Search').press('Enter');
  await expect(page.locator('ytd-two-column-search-results-renderer')).toContainText('8.51M subscribers');
  await page.getByLabel('Subscribe').click();
  await expect(page).toHaveURL(/signin/);
});



test('test2', async ({ page }) => {
  await page.goto('https://creations.mattel.com/');
  await page.getByRole('banner').getByRole('link', { name: 'Brands' }).click()
  await page.locator('li:nth-child(3) > div > .nav-dropdown > div > .nav-dropdown__link').first().click();  
  await page.getByRole('link', { name: 'Paul George Hot Wheels Circle Tracker Creations Exclusive Hot Wheels Collectors Paul George Hot Wheels Circle Tracker $40.00' }).click();
  await expect(page).toHaveURL(/paul-george-hot-wheels-circle-tracker-hph63/);
  await expect(page.getByRole('button', { name: 'Add to cart' })).toHaveClass(['product__add-to-cart button button--primary non-rlc-btn ']); 
  await expect(page.getByRole('button', { name: 'Add to cart' })).toHaveAttribute('allow-limit','2');
  await page.getByRole('button', { name: 'Add to cart' }).click();
  await page.getByRole('link',{name: 'Continue Shopping'}).click();
  await expect(page.getByRole('button', { name: 'Add to cart' })).toHaveAttribute('allow-limit','1');
  await page.getByRole('button', { name: 'Add to cart' }).click();
  await page.getByRole('link',{name: 'Continue Shopping'}).click();
  await expect(page.getByRole('button', { name: 'Add to cart' })).toHaveAttribute('allow-limit','0');
  await expect(page.getByRole('button', { name: 'Add to cart' })).toHaveClass(['product__add-to-cart button button--primary non-rlc-btn disabled-btn grey-bg-cta']); 
  await expect(page.getByText("You have reached the limit of 2 per order.")).toBeVisible();
});