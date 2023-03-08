import { Report } from '../../models/report/report';

export class ReportService {
    static reports: Report[] = [
        {
            id: '124',
            communicationMark: 15,
            internshipId: '12232',
            reportDone: false,
            schoolTutorId: '1234',
            technicalMark: 15,
            tutorNote: 15,
        },
    ];

    async getReportByInternshipId(id: string): Promise<undefined | Report> {
        return undefined;
    }
}
