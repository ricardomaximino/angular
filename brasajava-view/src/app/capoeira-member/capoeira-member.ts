import { LocalDate } from './local-date';

export class CapoeiraMember {
    id: number;
    capoeiraName: string;
    graduation: string;
    group: string;
    groups: string[];
    startDate: LocalDate;
    image: string;
    description: string;
}
