import { Trans, useTranslation } from 'react-i18next';
import Calendar from '../../commons/Calendar/Calendar';
import Box from '../../designSystem/Box/Box';
import Text from '../../designSystem/Text/Text';
import { useEffect, useState } from 'react';
import moment from 'moment';
import { MarkedDates } from 'react-native-calendars/src/types';
import { enumerateDaysBetweenDates } from '../../../utils/date/enumerateDaysBetweenDates';
import AvailabilityContact from './AvailabilityContact/AvailabilityContact';

const AvailabilityScreen = () => {
  const { t } = useTranslation('availability');

  const [unavailableDays, setUnavailableDays] = useState<MarkedDates>({});

  const checkUnavailabilities = async () => {
    const response = await fetch('https://app.yassbk.com/unavailabilities');
    const json = await response.json();
    for (const period of json) {
      const periodUnavailabileDays = enumerateDaysBetweenDates(
        moment(period.start, 'YYYY-MM-DD'),
        moment(period.end, 'YYYY-MM-DD')
      );
      periodUnavailabileDays.map((day) => {
        setUnavailableDays((state) => ({
          ...state,
          [day]: { disabled: true, disableTouchEvent: true },
        }));
      });
    }
  };

  useEffect(() => {
    checkUnavailabilities();
  }, []);

  return (
    <Box>
      <Text fontSize={24} textAlign="center" fontFamily="Roboto-Medium">
        <Trans components={[<Text key="title" color="textHighlight" fontFamily="Roboto-Medium" />]}>
          {t('title')}
        </Trans>
      </Text>
      <Calendar markedDates={unavailableDays} />
      <AvailabilityContact />
    </Box>
  );
};

export default AvailabilityScreen;
