import { Locator, Page, expect } from '@playwright/test'

export class ActionButtons {
  private readonly page: Page
  private readonly applyButton: Locator
  private readonly clearButton: Locator

  constructor(page: Page) {
    this.page = page
    this.applyButton = this.page.getByRole('button', { name: 'Apply' })
    this.clearButton = this.page.getByRole('button', { name: 'Clear' })
  }

  async verifyApplyButtonVisibility() {
    await expect(this.applyButton).toBeVisible()
  }

  async clickApply() {
    await this.applyButton.click()
  }

  async verifyClearButtonVisibility() {
    await expect(this.clearButton).toBeVisible()
  }

  async clickClear() {
    await this.clearButton.click()
  }
}
