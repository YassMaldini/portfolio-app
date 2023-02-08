describe('Settings Screen', () => {
  beforeAll(async () => {
    await device.launchApp();
    await device.reloadReactNative();
  });

  it('should display settings screen', async () => {
    await expect(element(by.id('tabBarSettings')).atIndex(0)).toBeVisible();
    await element(by.id('tabBarSettings')).atIndex(0).tap();
    await expect(element(by.id('settingsScreen'))).toBeVisible();
  });

  it('should switch to light mode', async () => {
    await expect(element(by.id('settingsSwitchItem'))).toBeVisible();
    await element(by.id('settingsSwitchItem')).tap();
    await expect(element(by.id('settingsSwitchItem'))).toHaveToggleValue(false);
  });

  it('should change language from English to French', async () => {
    await expect(element(by.id('settingsLanguageItem'))).toBeVisible();

    // The app is in english by default
    await expect(element(by.id('settingsLanguageItemText'))).toHaveText('English');

    await element(by.id('settingsLanguageItem')).tap();
    await element(by.label('bottomModalLanguageItem#fr')).tap();

    // The app should be in french
    await expect(element(by.id('settingsLanguageItemText'))).toHaveText('Français');
  });
});
