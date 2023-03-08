import { Internship } from '../internships/internship';

export interface Soutenance {
    id: string;
    dateOfSoutenance: Date;
    soutenanceDone: boolean;
    technicalMark: number;
    communicationMark: number;
    tutorNote: number;
}
