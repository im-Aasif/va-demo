import { test, expect } from '@playwright/test'

test.describe('Home Page', () => {
  test('should load homepage successfully', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByRole('heading', { name: 'Welcome to Your Vue App' })).toBeVisible()
  })

  test('should display features list', async ({ page }) => {
    await page.goto('/')
    const features = ['Vite 7', 'Vue 3', 'TypeScript', 'Vue Router 5', 'GitHub Actions', 'pnpm']
    for (const feature of features) {
      await expect(page.getByText(feature, { exact: false }).first()).toBeVisible()
    }
  })

  test('should navigate to about page', async ({ page }) => {
    await page.goto('/')
    await page.click('text=Learn More')
    await expect(page.getByRole('heading', { name: /About/ })).toBeVisible()
  })
})

test.describe('Navigation', () => {
  test('should navigate between pages', async ({ page }) => {
    await page.goto('/')

    // Go to About page
    await page.click('text=Learn More')
    await expect(page).toHaveURL(/.*#\/about/)

    // Go back to Home
    await page.click('text=Home')
    await expect(page).toHaveURL(/.*#\//)
  })
})
