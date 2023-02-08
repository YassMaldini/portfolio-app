describe('Portfolio', () => {
  beforeAll(async () => {
    await device.launchApp();
    await device.reloadReactNative();
  });

  it('should display portfolio screen', async () => {
    await expect(element(by.id('tabBarPortfolio'))).toBeVisible();
    await element(by.id('tabBarPortfolio')).tap();
    await expect(element(by.id('portfolioScreen'))).toBeVisible();
  });

  it('should open image viewer when click on a project card', async () => {
    await expect(element(by.id('projectListItem')).atIndex(1)).toBeVisible();
    await element(by.id('projectListItem')).atIndex(1).tap();
    await expect(element(by.id('portfolio'))).not.toBeVisible();
  });
});
