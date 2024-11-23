import { expect, Locator, Page } from '@playwright/test'

export class InputField {
  private readonly page: Page
  private readonly searchField: Locator
  private readonly searchResultOptions: Locator

  constructor(page: Page, location: string) {
    this.page = page
    this.searchField = this.page.getByPlaceholder('Type to search for a location')
    this.searchResultOptions = this.page.getByRole('option', { name: location, exact: true })
  }

  async verifySearchFieldVisibility() {
    await expect(this.searchField).toBeVisible()
  }

  async enterSearchValues(value: string) {
    await this.searchField.click()
    await this.searchField.pressSequentially(value)
  }

  async verifySearchOptionsTrue() {
    expect(this.searchResultOptions).toBeTruthy()
    await this.searchResultOptions.click()
  }

  async verifySearchOptionsFalse() {
    expect(this.searchResultOptions).toBeFalsy()
  }
}
