import { expect, Locator, Page } from '@playwright/test'

export class SavedStoriesPage {
  private readonly page: Page
  private readonly savedStory: Locator

  constructor(page: Page) {
    this.page = page
    this.savedStory = this.page.getByTestId('card-slug')
  }

  async gotoSavedPage() {
    await this.page.goto('/saved', { waitUntil: 'networkidle' })
  }

  async verifyStoryIsSaved(storyTitle: string) {
    const story = await this.savedStory.filter({ hasText: storyTitle })
    await expect(story).toBeVisible()
  }
}
