import { Trans, useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { availabilitySelector } from '../../../../store/main/mainReducerSelectors';
import Box from '../../../designSystem/Box/Box';
import Text from '../../../designSystem/Text/Text';
import AvailabilityContactItem from './AvailabilityContactItem/AvailabilityContactItem';

import PhoneIcon from '../../../../../assets/vectors/call-outline.svg';
import MailIcon from '../../../../../assets/vectors/mail-outline.svg';
import LinkedinIcon from '../../../../../assets/vectors/logo-linkedin.svg';
import { Linking } from 'react-native';

const AvailabilityContact = () => {
  const { t } = useTranslation('availability');

  const isAvailable = useSelector(availabilitySelector);

  return (
    <Box paddingHorizontal="sToM">
      <Text fontSize={16} marginTop="sToM">
        <Trans
          components={[
            <Text key="reachMe" color={isAvailable ? 'textHighlight' : 'textCritical'} />,
          ]}>
          {t(`reachMe.${isAvailable ? 'available' : 'unavailable'}`)}
        </Trans>
      </Text>
      <Box marginTop="sToM">
        <AvailabilityContactItem
          onPress={() => Linking.openURL('mailto:yacine.berkane66s@gmail.com')}
          icon={MailIcon}>
          yacine.berkane66s@gmail.com
        </AvailabilityContactItem>
        <AvailabilityContactItem
          onPress={() => Linking.openURL('tel:33767642037')}
          icon={PhoneIcon}>
          07.67.64.20.37
        </AvailabilityContactItem>
        <AvailabilityContactItem
          onPress={() => Linking.openURL('https://www.linkedin.com/in/yacine-berkane-291592262/')}
          icon={LinkedinIcon}>
          <Trans
            components={[<Text key="reachMe.ways.linkedin" fontSize={13} color="textSubdued" />]}>
            {t('reachMe.ways.linkedin')}
          </Trans>
        </AvailabilityContactItem>
      </Box>
    </Box>
  );
};

export default AvailabilityContact;
