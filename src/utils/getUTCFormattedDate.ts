import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { EVENT_DATE_FORMAR } from '../constants';

dayjs.extend(utc);

export const getUTCFormattedDate = (date: string) => dayjs
    .utc(date)
    .local()
    .format(EVENT_DATE_FORMAR);