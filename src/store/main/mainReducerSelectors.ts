import RootState from '../store.types';

export const darkModeSelector = ({ main: reducer }: RootState) => reducer.isDarkMode;

export const currentLanguageSelector = ({ main: reducer }: RootState) => reducer.currentLanguage;
