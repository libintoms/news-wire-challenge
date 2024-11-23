import { expect, Locator, Page } from '@playwright/test'

export class StoryCards {
  private readonly page: Page
  private readonly root: Locator
  private readonly storyCard: Locator
  private readonly starButton: Locator

  constructor(page: Page, dataTestId: string, storyTitle: string) {
    this.page = page
    this.root = this.page.getByTestId(dataTestId)
    this.storyCard = this.root.filter({ hasText: storyTitle }).first()
    this.starButton = this.root.locator('[data-testId="emptyStar"]')
  }

  async verifyStoryCardVisibility() {
    expect(this.storyCard).toBeTruthy()
  }

  async starStoryCard() {
    await this.starButton.click()
  }

  async returnStoryTitle() {
    return await this.storyCard.textContent()
  }
}
