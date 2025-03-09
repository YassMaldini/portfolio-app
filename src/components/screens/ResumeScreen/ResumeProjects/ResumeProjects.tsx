import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import ResumeExperience from '../../../commons/ResumeExperience/ResumeExperience';
import { ResumeExperienceProps } from '../../../commons/ResumeExperience/ResumeExperience.types';
import Box from '../../../designSystem/Box/Box';
import Text from '../../../designSystem/Text/Text';

const ResumeProjects = () => {
  const { t } = useTranslation('resume', { keyPrefix: 'projects' });

  const experiences = useMemo(
    () => t('experiences', { returnObjects: true }),
    [t]
  ) as ResumeExperienceProps[];

  return (
    <Box>
      <Text variant="title2" marginBottom="sToM">
        {t('title')}
      </Text>
      {Object.values(experiences).map((experience, index) => {
        const { title, date, place, stack, description, features } = experience;

        return (
          <ResumeExperience
            key={index}
            {...{ title, place, date, description }}
            stack={Object.values(stack).map((techno) => techno as string)}
            features={Object.values(features).map((feature) => feature as string)}
          />
        );
      })}
    </Box>
  );
};

export default ResumeProjects;
