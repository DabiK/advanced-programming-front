import { AuthService } from './services/auth.service';
import { ErrorService } from './services/error.service';
import { IAutomationService } from './services/graphql/interfaces/automation.service';
import { IAutomationResultService } from './services/graphql/interfaces/automation-result.service';
import { IDashboardService } from './services/graphql/interfaces/dashboard.service';
import { ProxyService } from './services/proxy.service';
import { ApolloHelpers } from '@nuxtjs/apollo';

export interface Services {
    auth: AuthService;
}

declare module 'vue/types/vue' {
    interface Vue {
        readonly $service: Services;
    }
}
