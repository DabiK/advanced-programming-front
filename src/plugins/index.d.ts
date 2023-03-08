import { AuthService } from './services/auth.service';
import { NotificationService } from './services/notification.service';
import { StudentService } from './services/student.service';
import { ErrorService } from './services/error.service';
import { IAutomationService } from './services/graphql/interfaces/automation.service';
import { IAutomationResultService } from './services/graphql/interfaces/automation-result.service';
import { IDashboardService } from './services/graphql/interfaces/dashboard.service';
import { ProxyService } from './services/proxy.service';
import { ApolloHelpers } from '@nuxtjs/apollo';
import { InternshipService } from './services/internship.service';
import { SoutenanceService } from './services/soutenance.service';
import { ReportService } from './services/report.service';
import { VisitService } from './services/visit.service';

export interface Services {
    auth: AuthService;
    notification: NotificationService;
    student: StudentService;
    internship: InternshipService;
    soutenance: SoutenanceService;
    report: ReportService;
    visit: VisitService;
}

declare module 'vue/types/vue' {
    interface Vue {
        readonly $service: Services;
    }
}
