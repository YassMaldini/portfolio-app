import { SupportedLanguages } from '../../utils/i18n/i18n.types';

interface MainReducerState {
  isDarkMode: boolean;
  currentLanguage: SupportedLanguages;
  isAvailable: boolean;
}

export default MainReducerState;
