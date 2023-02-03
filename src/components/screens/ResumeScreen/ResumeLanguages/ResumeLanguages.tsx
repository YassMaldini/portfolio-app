import Box from '../../../designSystem/Box/Box';
import Text from '../../../designSystem/Text/Text';
import ResumeLanguageItem from '../../../commons/ResumeLanguageItem/ResumeLanguageItem';
import { languagesList } from './ResumeLanguages.data';
import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';

const ResumeLanguages = () => {
  const { t } = useTranslation();

  const languages = useMemo(() => languagesList(t), [t]);

  return (
    <Box marginBottom="m">
      <Text variant="title2">{t('resume:languages.title')}</Text>
      {languages.map(({ language, level, icon }, index) => (
        <ResumeLanguageItem key={`language#${index}`} {...{ language, level, icon }} />
      ))}
    </Box>
  );
};

export default ResumeLanguages;
