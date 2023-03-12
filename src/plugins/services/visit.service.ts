import { Visit } from '../../models/visit/visit';
import { BaseService } from './base.service';

export class VisitService extends BaseService {
    static visits: Visit[] = [
        {
            id: '1234',
            dateOfVisit: new Date(),
            schoolTutorNote: 15,
            visitDone: false,
            webSurveyDone: false,
        },
    ];
    async getVisitByIntershipId(id: string): Promise<undefined | Visit> {
        return undefined;
    }
}
