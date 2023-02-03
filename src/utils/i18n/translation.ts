import { SupportedLanguages } from './i18n.types';
import commonsEN from './locales/en/commonsEN.json';
import homeEN from './locales/en/homeEN.json';
import resumeEN from './locales/en/resumeEN.json';
import settingsEN from './locales/en/settingsEN.json';
import commonsFR from './locales/fr/commonsFR.json';
import homeFR from './locales/fr/homeFR.json';
import resumeFR from './locales/fr/resumeFR.json';
import settingsFR from './locales/fr/settingsFR.json';

const TRANSLATIONS = Object.freeze({
  [SupportedLanguages.English]: {
    commons: commonsEN,
    home: homeEN,
    resume: resumeEN,
    settings: settingsEN,
  },
  [SupportedLanguages.French]: {
    commons: commonsFR,
    home: homeFR,
    resume: resumeFR,
    settings: settingsFR,
  },
});

export default TRANSLATIONS;
