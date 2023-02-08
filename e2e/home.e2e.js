describe('Home', () => {
  beforeAll(async () => {
    await device.launchApp();
    await device.reloadReactNative();
  });

  it('should display home presentation view', async () => {
    await expect(element(by.id('homePresentation'))).toBeVisible();
  });

  it('should scroll to home projects view', async () => {
    await expect(element(by.id('seeMyWorkButton'))).toBeVisible();
    await element(by.id('seeMyWorkButton')).tap();
    await expect(element(by.id('homeProjects'))).toBeVisible();
  });
});
