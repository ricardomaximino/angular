import { Chronology } from './chronology';

export class LocalDate {
    year: number;
    month: string;
    dayOfMonth: number;
    dayOfWeek: string;
    era: string;
    dayOfYear: number;
    leapYear: boolean;
    monthValue: number;
    chronology: Chronology;
}
