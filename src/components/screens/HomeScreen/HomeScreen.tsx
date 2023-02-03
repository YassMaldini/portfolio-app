import Box from '../../designSystem/Box/Box';
import { ScrollView } from 'react-native';
import { useRef } from 'react';
import HomePresentation from './HomePresentation/HomePresentation';
import HomeProjects from './HomeProjects/HomeProjects';
import HomeSkills from './HomeSkills/HomeSkills';
import HomeRemote from './HomeRemote/HomeRemote';

const HomeScreen = () => {
  const scrollViewRef = useRef<ScrollView>(null);

  return (
    <ScrollView ref={scrollViewRef}>
      <Box flex={1}>
        <HomePresentation {...{ scrollViewRef }} />
        <HomeRemote />
        <HomeSkills />
        <HomeProjects />
      </Box>
    </ScrollView>
  );
};

export default HomeScreen;
