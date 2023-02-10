import { Moment } from 'moment';

export const enumerateDaysBetweenDates = (startDate: Moment, endDate: Moment) => {
  const now = startDate.clone(),
    dates = [];

  while (now.isSameOrBefore(endDate)) {
    dates.push(now.format('YYYY-MM-DD'));
    now.add(1, 'days');
  }
  return dates;
};
