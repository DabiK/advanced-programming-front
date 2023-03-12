import { Middleware } from '@nuxt/types';
import { USER_STATE_NAME } from '../store/user-state';
import { User } from '../models/user/user.model';
import { VUEX_PERSIST_KEY } from '../plugins/vuex-persist';

export const HOME_REDIRECTION_MIDDLEWARE = 'home-redirection';

const authenticationMiddleware: Middleware = async ({ app, store, redirect, req }) => {
    try {
        const value = app.$cookies.get(VUEX_PERSIST_KEY);
        const user: User = value[USER_STATE_NAME].user;
        if (user.email) {
            return redirect(302, '/home');
        }
    } catch (e) {}
};

export default authenticationMiddleware;
