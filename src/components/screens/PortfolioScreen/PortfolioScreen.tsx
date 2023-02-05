import { useState } from 'react';
import Box from '../../designSystem/Box/Box';
import Text from '../../designSystem/Text/Text';
import ImageView from 'react-native-image-viewing';
import ProjectsList from './ProjectsList/ProjectsList';
import { ScrollView } from 'react-native';
import { ImageSource } from '../../../types/models/images.types';

const PortfolioScreen = () => {
  const [isImageViewerVisible, setIsImageViewerVisible] = useState(false);
  const [images, setImages] = useState<ImageSource[]>([]);

  return (
    <ScrollView>
      <Box paddingHorizontal="s">
        <Text fontSize={24} textAlign="center" fontFamily="Roboto-Medium">
          Browse{' '}
          <Text color="textHighlight" fontFamily="Roboto-Medium">
            projects
          </Text>
        </Text>
        <ProjectsList {...{ setImages, setIsImageViewerVisible }} />
        <ImageView
          images={images}
          imageIndex={0}
          visible={isImageViewerVisible}
          onRequestClose={() => setIsImageViewerVisible(false)}
        />
      </Box>
    </ScrollView>
  );
};

export default PortfolioScreen;
