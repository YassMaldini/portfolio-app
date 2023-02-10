import { useTheme } from '@shopify/restyle';
import moment from 'moment';
import { Calendar as RNCalendar, CalendarListProps } from 'react-native-calendars';
import { useSelector } from 'react-redux';
import { darkModeSelector } from '../../../store/main/mainReducerSelectors';
import { rgbaToHex } from '../../../utils/colors/rgbaToHex';
import { Theme } from '../../../utils/theme/theme';

const Calendar = (props: CalendarListProps) => {
  const { colors } = useTheme<Theme>();
  const isDarkMode = useSelector(darkModeSelector);

  return (
    <RNCalendar
      key={isDarkMode ? 'dark' : 'light'}
      theme={{
        calendarBackground: rgbaToHex(colors.background),
        dayTextColor: rgbaToHex(colors.text),
        monthTextColor: rgbaToHex(colors.textSubdued),
        textDisabledColor: rgbaToHex(colors.textDisabled),
        todayTextColor: colors.textHighlight,
        arrowColor: colors.actionPrimary,
      }}
      firstDay={1}
      minDate={moment().format('YYYY-MM-DD')}
      maxDate={moment().add(6, 'months').format('YYYY-MM')}
      enableSwipeMonths={true}
      // CalendarList props
      // pastScrollRange={6}
      // futureScrollRange={6}
      // scrollEnabled={true}
      {...props}
    />
  );
};

export default Calendar;
