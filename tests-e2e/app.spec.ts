import { test, expect } from '@playwright/test'

test('can generate a password', async ({ page }) => {
  await page.goto('/')

  await expect(page.getByTestId('title')).toBeVisible()

  await page.getByTestId('generate-button').click()

  const passwordField = page.getByTestId('password-input')
  const value = await passwordField.inputValue()

  expect(value.length).toBeGreaterThan(0)
})
