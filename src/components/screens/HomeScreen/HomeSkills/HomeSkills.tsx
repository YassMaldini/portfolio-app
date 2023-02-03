import Box from '../../../designSystem/Box/Box';
import HomeSkillCard from './HomeSkillCard/HomeSkillCard';
import SpeedometerIcon from '../../../../../assets/vectors/speedometer-outline.svg';
import GitCompareIcon from '../../../../../assets/vectors/git-compare-outline.svg';
import ReactIcon from '../../../../../assets/vectors/logo-react.svg';

const HomeSkills = () => {
  return (
    <Box>
      <HomeSkillCard i18nKey="performance" icon={SpeedometerIcon} />
      <HomeSkillCard i18nKey="quality" icon={GitCompareIcon} />
      <HomeSkillCard i18nKey="technos" icon={ReactIcon} />
    </Box>
  );
};

export default HomeSkills;
