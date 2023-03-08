export interface Visit {
    id: string;
    schoolTutorId: string;
    companyId: string;
    dateOfVisit: Date;
    visitDone: boolean;
    technicalMark: number;
    communicationMark: number;
    schoolTutorNote: number;
    companyTutorNote: number;
    studentNote: number;
}
