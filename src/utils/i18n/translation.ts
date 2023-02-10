import { SupportedLanguages } from './i18n.types';
import commonsEN from './locales/en/commonsEN.json';
import homeEN from './locales/en/homeEN.json';
import portfolioEN from './locales/en/portfolioEN.json';
import resumeEN from './locales/en/resumeEN.json';
import availabilityEN from './locales/en/availabilityEN.json';
import settingsEN from './locales/en/settingsEN.json';
import commonsFR from './locales/fr/commonsFR.json';
import homeFR from './locales/fr/homeFR.json';
import portfolioFR from './locales/fr/portfolioFR.json';
import resumeFR from './locales/fr/resumeFR.json';
import availabilityFR from './locales/fr/availabilityFR.json';
import settingsFR from './locales/fr/settingsFR.json';

const TRANSLATIONS = Object.freeze({
  [SupportedLanguages.English]: {
    commons: commonsEN,
    home: homeEN,
    portfolio: portfolioEN,
    resume: resumeEN,
    availability: availabilityEN,
    settings: settingsEN,
  },
  [SupportedLanguages.French]: {
    commons: commonsFR,
    home: homeFR,
    portfolio: portfolioFR,
    resume: resumeFR,
    availability: availabilityFR,
    settings: settingsFR,
  },
});

export default TRANSLATIONS;
