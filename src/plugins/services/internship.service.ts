import { Internship } from '../../models/internships/internship';

export class InternshipService {
    static internships: Internship[] = [
        {
            id: '123',
            company: {
                address: '3 rue de paris',
                id: '123',
                name: 'TF1',
            },
            report: undefined,
            soutenance: {
                id: '123',
                dateOfSoutenance: new Date(),
                soutenanceDone: true,
                communicationMark: 15,
                technicalMark: 15,
                tutorNote: 15,
            },
            visit: undefined,
            endingDate: new Date(),
            specificationsDone: true,
            startingDate: new Date(),
        },
        {
            id: '1234',
            company: {
                address: '4 rue de paris',
                id: '1234',
                name: 'Renault',
            },
            report: undefined,
            soutenance: {
                id: '1234',
                dateOfSoutenance: new Date(),
                soutenanceDone: true,
                communicationMark: 11,
                technicalMark: 11,
                tutorNote: 11,
            },
            visit: undefined,
            endingDate: new Date(),
            specificationsDone: true,
            startingDate: new Date(),
        },
    ];

    async getStudentInternship(studentId: string, internshipId: string) {
        //TODO to be removed
        return InternshipService.internships[0];
    }

    async getStudentInternships(studentId: string) {
        return InternshipService.internships
    }
}
