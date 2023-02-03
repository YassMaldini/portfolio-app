import { Linking } from 'react-native';
import Box from '../../../designSystem/Box/Box';
import Button from '../../../designSystem/Button/Button';
import { ButtonVariants } from '../../../designSystem/Button/Button.types';
import { SvgIcon } from '../../../designSystem/SvgIcon/SvgIcon';
import Text from '../../../designSystem/Text/Text';
import ChevronDown from '../../../../../assets/vectors/chevron-down-outline.svg';
import { HomePresentationProps } from './HomePresentation.types';
import { useTranslation } from 'react-i18next';

const HomePresentation = ({ scrollViewRef }: HomePresentationProps) => {
  const { t } = useTranslation('home', { keyPrefix: 'presentation' });

  return (
    <Box paddingHorizontal="m" paddingTop="mToL">
      <Text textAlign="center" color="textHighlight" fontSize={18} marginBottom="xs">
        Yacine Berkane
      </Text>
      <Text textAlign="center" fontSize={42} fontFamily="Roboto-Medium" marginBottom="xs">
        {t('title')}
      </Text>
      <Text textAlign="center" color="textSubdued" fontSize={16}>
        {t('description')}
      </Text>
      <Box
        flexDirection="row"
        justifyContent="space-between"
        paddingVertical="m"
        paddingHorizontal="m"
        marginBottom="m">
        <Box flex={1} marginRight="s">
          <Button
            variant={ButtonVariants.Contained}
            onPress={() => Linking.openURL('mailto:yacine.berkane66s@gmail.com')}>
            {t('buttons.contact')}
          </Button>
        </Box>
        <Box flex={1} marginLeft="s">
          <Button
            onPress={() => scrollViewRef.current?.scrollToEnd()}
            variant={ButtonVariants.Text}
            endElement={
              <Box
                borderWidth={1}
                borderColor="actionPrimary"
                borderRadius="l"
                marginLeft="s"
                padding="xxxs">
                <SvgIcon icon={ChevronDown} color="actionPrimary" width={13} height={13} />
              </Box>
            }>
            {t('buttons.see')}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePresentation;
