import { Locator, Page, expect } from '@playwright/test'

export class LocationButtons {
  private readonly page: Page
  private readonly filterButton: Locator
  private readonly locationButtons: Locator

  constructor(page: Page, buttonName: string) {
    this.page = page
    this.filterButton = this.page.getByRole('button', { name: buttonName })
    this.locationButtons = this.page.getByRole('button', { name: buttonName })
  }

  async verifyFilterButtonsVisibility() {
    await expect(this.filterButton).toBeVisible()
  }

  async clickFilter() {
    await this.filterButton.click()
  }

  async verifyFilterApplied() {
    expect(this.filterButton).toBeTruthy()
  }
  async verifyLocationButtonsVisibility() {
    await expect(this.locationButtons).toBeVisible()
  }

  async clickLocationButtons() {
    await this.locationButtons.click()
  }
}
