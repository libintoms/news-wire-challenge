import { expect, Page } from '@playwright/test'
import { LocationButtons } from '../frontend-components/LocationButtons'
import { ActionButtons } from '../frontend-components/ActionButtons'
import { InputField } from '../frontend-components/InputField'
import { StoryCards } from '../frontend-components/StoryCards'
import { SavedStoriesPage } from './SavedStoriesPage'

export class HomePageLayout {
  private readonly page: Page
  private readonly location: string
  private readonly locationFilter: LocationButtons
  private readonly locationButtons: LocationButtons
  private readonly actionButtons: ActionButtons
  private readonly searchField: InputField
  private readonly storyCards: StoryCards

  constructor(page: Page, location: string) {
    this.page = page
    this.location = location
    this.locationFilter = new LocationButtons(this.page, location)
    this.locationButtons = new LocationButtons(this.page, location)
    this.actionButtons = new ActionButtons(this.page)
    this.searchField = new InputField(this.page, this.location)
    this.storyCards = new StoryCards(this.page, 'card-slug', location)
  }

  async verifyQuickLinkLocationFilterFeature(baseUrl: string) {
    await this.locationFilter.verifyFilterButtonsVisibility()
    await this.locationFilter.clickFilter()
    await this.actionButtons.clickClear()
    await this.locationButtons.verifyLocationButtonsVisibility()
    await this.locationButtons.clickLocationButtons()
    await this.actionButtons.verifyApplyButtonVisibility()
    await this.actionButtons.clickApply()
    expect(this.page.url()).toBe(`${baseUrl}/?regions=${this.location}`)
  }

  async clearFilter() {
    await this.actionButtons.verifyClearButtonVisibility()
    await this.actionButtons.clickClear()
  }

  async searchLocationByInput(value: string) {
    await this.locationFilter.verifyFilterButtonsVisibility()
    await this.locationFilter.clickFilter()
    await this.actionButtons.clickClear()
    await this.searchField.verifySearchFieldVisibility()
    await this.searchField.enterSearchValues(value)
    await this.searchField.verifySearchOptionsTrue()
    await this.actionButtons.clickApply()
    await this.storyCards.verifyStoryCardVisibility()
  }

  async searchLocationByInvalidValues(value: string) {
    await this.locationFilter.verifyFilterButtonsVisibility()
    await this.locationFilter.clickFilter()
    await this.actionButtons.clickClear()
    await this.searchField.verifySearchFieldVisibility()
    await this.searchField.enterSearchValues(value)
    await this.searchField.verifySearchOptionsFalse()
  }

  async saveStory() {
    await this.storyCards.starStoryCard()
    const storyTitle = await this.storyCards.returnStoryTitle()
    return { storiesPage: new SavedStoriesPage(this.page), storyTitle }
  }
}
