import { useState } from 'react';
import Box from '../../designSystem/Box/Box';
import Text from '../../designSystem/Text/Text';
import ImageView from 'react-native-image-viewing';
import ProjectsList from './ProjectsList/ProjectsList';
import { ScrollView } from 'react-native';
import { ImageSource } from '../../../types/models/images.types';
import { Trans, useTranslation } from 'react-i18next';

const PortfolioScreen = () => {
  const { t } = useTranslation('portfolio');

  const [isImageViewerVisible, setIsImageViewerVisible] = useState(false);
  const [images, setImages] = useState<ImageSource[]>([]);

  return (
    <ScrollView>
      <Box paddingHorizontal="s">
        <Text fontSize={24} textAlign="center" fontFamily="Roboto-Medium">
          <Trans
            components={[<Text key="title" color="textHighlight" fontFamily="Roboto-Medium" />]}>
            {t('title')}
          </Trans>
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
