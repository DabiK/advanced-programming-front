import { AddInternshipDTO } from '~/models/internships/add-internship-dto';
import { Internship } from '../../models/internships/internship';
import { v4 as uuidv4 } from 'uuid';
import { BaseService } from './base.service';

export class InternshipService extends BaseService {
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
        //TODO: to be removed
        return InternshipService.internships;
    }

    async create(addInternshipDTO: AddInternshipDTO) {
        //TODO: to bre removed
        const internship: Internship = {
            id: uuidv4(),
            company: {
                id: uuidv4(),
                name: addInternshipDTO.companyName,
                address: addInternshipDTO.companyAddress,
            },
            specificationsDone: false,
            startingDate: new Date(addInternshipDTO.startingDate),
            endingDate: new Date(addInternshipDTO.endingDate),
        };

        InternshipService.internships.push(internship);
        return internship;
    }
}
