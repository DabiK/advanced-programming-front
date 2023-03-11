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
    ];

    async getStudentInternship(studentId: string, internshipId: string) {
        //TODO to be removed
        return InternshipService.internships[0];
    }
}
