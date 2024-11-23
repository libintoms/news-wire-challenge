import { HomePageLayout } from '../pages/HomePageLayout'
import { test as base } from '@playwright/test'

type Home = {
  getHomePage: (location: string) => HomePageLayout
}

export const test = base.extend<Home>({
  getHomePage: async ({ page }, use) => {
    await use((location: string) => {
      // Dynamically create a HomePageLayout instance with the location
      return new HomePageLayout(page, location)
    })
  }
})

export { expect } from '@playwright/test'
