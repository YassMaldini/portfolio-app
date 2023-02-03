import { useTheme } from '@shopify/restyle';
import { LinearGradient } from 'expo-linear-gradient';
import { useMemo } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { darkModeSelector } from '../../../../store/main/mainReducerSelectors';
import { Theme } from '../../../../utils/theme/theme';
import Box from '../../../designSystem/Box/Box';
import Image from '../../../designSystem/Image/Image';
import Text from '../../../designSystem/Text/Text';
import Constants from 'expo-constants';

const HomeRemote = () => {
  const { t } = useTranslation('home', { keyPrefix: 'remote' });
  const { colors } = useTheme<Theme>();
  const isDarkMode = useSelector(darkModeSelector);

  const mapId = useMemo(() => (isDarkMode ? '366ccf16b5c51f54' : 'dc4066a2b929234d'), [isDarkMode]);

  const MAPS_API_KEY = Constants.expoConfig?.extra?.googleMapsApiKey;

  return (
    <Box paddingHorizontal="m" marginBottom="m">
      {/* props {image, enableButtonFadeOut, ...} */}
      <Box>
        <Image
          source={{
            uri: `https://maps.googleapis.com/maps/api/staticmap?center=Perpignan%2C%20France&markers=color:gray|Perpignan%2C%20France&zoom=7&size=400x400&key=${MAPS_API_KEY}&map_id=${mapId}`,
          }}
          width={'100%'}
          aspectRatio={1}
          backgroundColor="surface"
        />
        <LinearGradient
          colors={[colors.background, 'transparent']}
          style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: 50 }}
          start={{ x: 0, y: 1.0 }}
          end={{ x: 0, y: 0 }}
        />
      </Box>
      <Box>
        <Text variant="title1" marginBottom="s">
          <Trans
            components={[<Text key="title" color="textHighlight" fontFamily="Roboto-Medium" />]}>
            {t('title')}
          </Trans>
        </Text>
        <Text color="textSubdued" fontSize={15}>
          {t('description')}
        </Text>
      </Box>
    </Box>
  );
};

export default HomeRemote;
