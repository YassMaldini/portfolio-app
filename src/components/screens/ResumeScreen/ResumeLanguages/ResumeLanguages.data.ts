import FrIcon from '../../../../../assets/vectors/flags/fr.svg';
import GbIcon from '../../../../../assets/vectors/flags/gb.svg';
import EsIcon from '../../../../../assets/vectors/flags/es.svg';
import { TFunction } from 'react-i18next';
import { LanguageListItem } from './ResumeLanguages.types';

export const languagesList = (t: TFunction): LanguageListItem[] => [
  {
    language: t('commons:languages.fr'),
    level: t('resume:languages.levels.fluent'),
    icon: FrIcon,
  },
  {
    language: t('commons:languages.en'),
    level: t('resume:languages.levels.intermediate'),
    icon: GbIcon,
  },
  {
    language: t('commons:languages.es'),
    level: t('resume:languages.levels.basic'),
    icon: EsIcon,
  },
];
