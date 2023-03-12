import { AuthService } from './auth.service';
import { NotificationService } from './notification.service';
import { StudentService } from './student.service';
import { InternshipService } from './internship.service';
import { VisitService } from './visit.service';

export default (context: any, inject: any) => {
    inject('service', {
        auth: new AuthService(context.$axios),
        notification: new NotificationService(context.$axios),
        student: new StudentService(context.$axios),
        internship: new InternshipService(context.$axios),
        visit: new VisitService(context.$axios),
    });
};
