import { LoginCredential } from '~/models/login/credential.model';
import { SignupCredential } from '~/models/login/signup.model';
import { User } from '~/models/user/user.model';
import { BaseService } from './base.service';
import { NuxtAxiosInstance } from '@nuxtjs/axios';

export class AuthService extends BaseService {
    constructor(axios: NuxtAxiosInstance) {
        super(axios);
    }
    async login(credential: LoginCredential): Promise<string | undefined> {
        try {
            const loginResponse: { token: string } = (await this.axios.post('/login', credential)).data;
            return loginResponse.token;
        } catch (err) {
            console.debug(err);
            return undefined;
        }
    }

    async signup(credential: SignupCredential): Promise<boolean> {
        try {
            await this.axios.post('/register', credential);
            console.log(credential);
            return true;
        } catch (err) {
            console.debug(err);
            throw err;
        }
    }

    async me() {
        try {
            return (
                await this.axios.get<User>('/me', {
                    withCredentials: true,
                })
            ).data;
        } catch (err) {
            console.debug(err);
            throw err;
        }
    }
}
