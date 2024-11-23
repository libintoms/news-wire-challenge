import { test } from '../fixtures/frontendPageFixtures'

test.describe('Test location picker feature', () => {
  test('[Positive] Verify quick link location filter is working', async ({ getHomePage, baseURL }) => {
    let homePage = getHomePage('Africa')
    await homePage.verifyQuickLinkLocationFilterFeature(baseURL)
    await homePage.clearFilter()
    homePage = getHomePage('Europe')
    await homePage.verifyQuickLinkLocationFilterFeature(baseURL)
    await homePage.clearFilter()
    homePage = getHomePage('APAC')
    await homePage.verifyQuickLinkLocationFilterFeature(baseURL)
    await homePage.clearFilter()
  })

  test('[Positive] Verify clear filter is working', async ({ getHomePage, baseURL }) => {
    let homePage = getHomePage('Africa')
    await homePage.verifyQuickLinkLocationFilterFeature(baseURL)
    await homePage.clearFilter()
  })

  test('[Positive] Verify text search in location filter is working', async ({ getHomePage }) => {
    let homePage = getHomePage('Ireland')
    await homePage.searchLocationByInput('Ireland')
  })

  test('[Negative] Verify blank spaces in location search do not return any values', async ({ getHomePage }) => {
    let homePage = getHomePage('Ireland')
    await homePage.searchLocationByInvalidValues('  ')
  })

  test('[Positive] Verify special chars in location search do not return any values', async ({ getHomePage }) => {
    let homePage = getHomePage('Ireland')
    await homePage.searchLocationByInvalidValues('!@#$')
  })
})

test.describe('Verify save story feature', () => {
  test('[Positive] Verify stories are saved', async ({ getHomePage }) => {
    let homePage = getHomePage('Ireland')
    await homePage.searchLocationByInput('Ireland')
    const savedStoriesPage = await homePage.saveStory()
    await savedStoriesPage.storiesPage.gotoSavedPage()
    await savedStoriesPage.storiesPage.verifyStoryIsSaved(savedStoriesPage.storyTitle)
  })
})