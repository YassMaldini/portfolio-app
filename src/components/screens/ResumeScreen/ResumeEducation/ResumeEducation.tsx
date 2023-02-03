import { useMemo } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import Box from '../../../designSystem/Box/Box';
import Text from '../../../designSystem/Text/Text';

const ResumeEducation = () => {
  const { t } = useTranslation('resume', { keyPrefix: 'education' });

  const degrees = useMemo(() => t('degrees', { returnObjects: true }), [t]) as object;

  return (
    <Box marginBottom="m">
      <Text variant="title2">{t('title')}</Text>
      {Object.values(degrees).map((degree, index) => {
        const { name, place } = degree;
        return (
          <Box key={index}>
            <Text fontSize={16} fontFamily="Roboto-Medium">
              <Trans components={[<Text key="name" color="textHighlight" />]}>{name}</Trans>
            </Text>
            <Text color="textSubdued">{place}</Text>
          </Box>
        );
      })}
    </Box>
  );
};

export default ResumeEducation;
