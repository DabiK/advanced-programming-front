import { AuthService } from './auth..service';

export default (context: any, inject: any) => {
    inject('service', {
        auth: new AuthService(),
    });
};
