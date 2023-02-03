import { Trans, useTranslation } from 'react-i18next';
import { Dimensions } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { useSelector } from 'react-redux';
import { darkModeSelector } from '../../../../store/main/mainReducerSelectors';
import Box from '../../../designSystem/Box/Box';
import Image from '../../../designSystem/Image/Image';
import Text from '../../../designSystem/Text/Text';
import { data } from './HomeProjects.data';

const HomeProjects = () => {
  const { t } = useTranslation('home', { keyPrefix: 'projects' });
  const isDarkMode = useSelector(darkModeSelector);

  const CAROUSEL_WIDTH = Dimensions.get('window').width;
  const CAROUSEL_HEIGHT = CAROUSEL_WIDTH / (9 / 16);

  return (
    <Box>
      <Text fontSize={24} textAlign="center" fontFamily="Roboto-Medium">
        <Trans components={[<Text key="title" color="textHighlight" fontFamily="Roboto-Medium" />]}>
          {t('title')}
        </Trans>
      </Text>
      <Carousel
        width={CAROUSEL_WIDTH}
        height={CAROUSEL_HEIGHT}
        loop
        autoPlay={true}
        autoPlayInterval={1500}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 50,
        }}
        panGestureHandlerProps={{
          activeOffsetX: [-10, 10],
        }}
        {...{ data }}
        renderItem={({ item, index }) => (
          <Box
            key={index}
            {...(isDarkMode && {
              borderWidth: 1,
              borderColor: 'surface',
              borderRadius: 'm',
            })}>
            <Image
              key={index}
              source={{ uri: item.imgUrl }}
              width="100%"
              height="100%"
              borderRadius="m"
            />
          </Box>
        )}
      />
    </Box>
  );
};

export default HomeProjects;
