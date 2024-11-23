import { expect, test as setup } from '@playwright/test'

setup('Visit the Newswire page', async ({ page, baseURL }) => {
  await page.goto('/', { waitUntil: 'commit' })
  await page.getByPlaceholder('email').pressSequentially('libinth@gmail.com')
  await page.getByPlaceholder('password').pressSequentially('M@rthoma2')
  await page.pause()
  console.log('Pausing test for manual intervention...')
  console.log('Verify captcha manually')
  console.log('Click on sign in button')
  expect(page.url()).toBe(baseURL)
})
