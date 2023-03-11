import { format } from 'date-fns';

export const SEC_MS = 1000;
export const MINUTE_MS = SEC_MS * 60;
export const HOUR_MS = MINUTE_MS * 60;
export const DAY_MS = HOUR_MS * 24;

export const fromDateToString = (date: Date, formatDate: string = 'dd/MM/yyyy') => format(date, formatDate);
