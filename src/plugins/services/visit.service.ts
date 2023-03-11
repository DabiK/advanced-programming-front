import { Visit } from '../../models/visit/visit';

export class VisitService {
    static visits: Visit[] = [
        {
            id: '1234',
            communicationMark: 15,
            companyId: '1224',
            companyTutorNote: 15,
            dateOfVisit: new Date(),
            schoolTutorId: '123',
            schoolTutorNote: 15,
            studentNote: 15,
            technicalMark: 14,
            visitDone: false,
        },
    ];
    async getVisitByIntershipId(id: string): Promise<undefined | Visit> {
        return undefined;
    }
}
