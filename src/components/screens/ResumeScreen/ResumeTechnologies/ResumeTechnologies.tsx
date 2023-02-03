import Box from '../../../designSystem/Box/Box';
import Text from '../../../designSystem/Text/Text';
import ResumeTechnologyItem from '../../../commons/ResumeTechnologyItem/ResumeTechnologyItem';
import { technologiesList } from './ResumeTechnologies.data';
import { useTranslation } from 'react-i18next';

const ResumeTechnologies = () => {
  const { t } = useTranslation('resume', { keyPrefix: 'technologies' });
  return (
    <Box>
      <Text variant="title2">{t('title')}</Text>
      {technologiesList.map(({ label, icon, enabled }, index) => (
        <ResumeTechnologyItem key={`techno#${index}`} {...{ label, icon, enabled }} />
      ))}
    </Box>
  );
};

export default ResumeTechnologies;
