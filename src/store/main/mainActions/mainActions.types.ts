import { Action } from 'redux';
import { SupportedLanguages } from '../../../utils/i18n/i18n.types';

export const SET_IS_DARK_MODE = 'SET_IS_DARK_MODE';
export const SET_CURRENT_LANGUAGE = 'SET_CURRENT_LANGUAGE';
export const RESET_MAIN_REDUCER = 'RESET_MAIN_REDUCER';

export interface SetIsDarkModeAction extends Action {
  type: typeof SET_IS_DARK_MODE;
  isDarkMode: boolean;
}

export interface SetCurrentLanguageAction extends Action {
  type: typeof SET_CURRENT_LANGUAGE;
  currentLanguage: SupportedLanguages;
}

export interface ResetMainAction extends Action {
  type: typeof RESET_MAIN_REDUCER;
}

type MainReducerActionsTypes = SetIsDarkModeAction | SetCurrentLanguageAction | ResetMainAction;

export default MainReducerActionsTypes;
