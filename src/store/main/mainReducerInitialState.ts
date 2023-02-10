import { SupportedLanguages } from '../../utils/i18n/i18n.types';
import MainReducerState from './mainReducer.types';

const MAIN_REDUCER_INITIAL_STATE = Object.freeze<MainReducerState>({
  isDarkMode: true,
  currentLanguage: SupportedLanguages.English,
  isAvailable: true,
});

export default MAIN_REDUCER_INITIAL_STATE;
