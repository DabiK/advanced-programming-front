import { Soutenance } from '../../models/soutenance/soutenance';

export class SoutenanceService {
    static soutenances: Soutenance[] = [
        {
            id: '123',
            internshipId: '12334',
            presentationMark: 15,
            dateOfSoutenance: new Date(),
            schoolTutorId: '1234',
            soutenanceDone: true,
            technicalMark: 15,
            globalMark: 15,
        },
    ];

    async getSoutenanceByInternshipId(id: string): Promise<undefined | Soutenance> {
        return SoutenanceService.soutenances[0];
    }
}
