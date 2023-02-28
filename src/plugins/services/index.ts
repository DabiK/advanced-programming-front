import { AuthService } from './auth.service';
import { NotificationService } from './notification.service';
import { StudentService } from './student.service';

export default (context: any, inject: any) => {
    inject('service', {
        auth: new AuthService(),
        notification: new NotificationService(),
        student: new StudentService(),
    });
};
