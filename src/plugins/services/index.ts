import { AuthService } from './auth.service';
import { NotificationService } from './notification.service';
import { StudentService } from './student.service';
import { InternshipService } from './internship.service';
import { ReportService } from './report.service';
import { VisitService } from './visit.service';
import { SoutenanceService } from './soutenance.service';

export default (context: any, inject: any) => {
    inject('service', {
        auth: new AuthService(),
        notification: new NotificationService(),
        student: new StudentService(),
        internship: new InternshipService(),
        soutenance: new SoutenanceService(),
        report: new ReportService(),
        visit: new VisitService(),
    });
};
