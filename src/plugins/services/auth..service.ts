import { LoginCredential } from '~/models/login/credential.model';
import { SignupCredential } from '~/models/login/signup.model.ts';

export class AuthService {
    static users = [
        {
            email: 'toto@gmail.com',
            firstName: 'toto',
            lastName: 'titi',
            phoneNumber: '09089898989',
        },
    ];
    async login(credential: LoginCredential): Promise<string | undefined> {
        try {
            //TODO do the http call
            //TODO: to be removed
            console.log(credential);
            return 'token';
        } catch (err) {
            console.debug(err);
            return undefined;
        }
    }

    async signup(credential: SignupCredential): Promise<boolean> {
        try {
            //TODO do the http call
            //TODO: to be removed
            console.log(credential);
            return true;
        } catch (err) {
            console.debug(err);
            throw err;
        }
    }

    async me() {
        try {
            //TODO do the http call
            //TODO: to be removed
            return AuthService.users[0];
        } catch (err) {
            console.debug(err);
            throw err;
        }
    }
}
