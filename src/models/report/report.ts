import { Internship } from '../internships/internship';

export interface Report {
    id: string;
    dateOfReport: Date;
    internship: Internship;
    reportDone: boolean;
    technicalMark: number;
    communicationMark: number;
    tutorNote: number;
}
