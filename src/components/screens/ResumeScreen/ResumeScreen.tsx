import { ScrollView } from 'react-native';
import Box from '../../designSystem/Box/Box';
import ResumeCareer from './ResumeCareer/ResumeCareer';
import ResumeEducation from './ResumeEducation/ResumeEducation';
import ResumeLanguages from './ResumeLanguages/ResumeLanguages';
import ResumeTechnologies from './ResumeTechnologies/ResumeTechnologies';
import ResumeProjects from './ResumeProjects/ResumeProjects';

const ResumeScreen = () => {
  return (
    <ScrollView>
      <Box flex={1} paddingHorizontal="s">
        <ResumeCareer />
        <ResumeProjects />
        <ResumeEducation />
        <ResumeLanguages />
        <ResumeTechnologies />
      </Box>
    </ScrollView>
  );
};

export default ResumeScreen;
