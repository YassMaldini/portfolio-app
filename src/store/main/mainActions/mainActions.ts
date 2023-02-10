import {
  ResetMainAction,
  RESET_MAIN_REDUCER,
  SetCurrentLanguageAction,
  SetIsAvailableAction,
  SetIsDarkModeAction,
  SET_CURRENT_LANGUAGE,
  SET_IS_AVAILABLE,
  SET_IS_DARK_MODE,
} from './mainActions.types';
import { Dispatch } from 'redux';
import { SupportedLanguages } from '../../../utils/i18n/i18n.types';

export const setDarkMode = (isDarkMode: boolean) => async (dispatch: Dispatch) => {
  dispatch<SetIsDarkModeAction>({
    type: SET_IS_DARK_MODE,
    isDarkMode,
  });
};

export const setCurrentLanguage =
  (currentLanguage: SupportedLanguages) => async (dispatch: Dispatch) => {
    dispatch<SetCurrentLanguageAction>({
      type: SET_CURRENT_LANGUAGE,
      currentLanguage,
    });
  };

export const setAvailability = (isAvailable: boolean) => async (dispatch: Dispatch) => {
  dispatch<SetIsAvailableAction>({
    type: SET_IS_AVAILABLE,
    isAvailable,
  });
};

export const resetMain = () => async (dispatch: Dispatch) => {
  dispatch<ResetMainAction>({
    type: RESET_MAIN_REDUCER,
  });
};
