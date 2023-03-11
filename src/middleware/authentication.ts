import { Middleware } from '@nuxt/types';
import { getModule } from 'vuex-module-decorators';
import { UserState, USER_STATE_NAME } from '../store/user-state';
import { VUEX_PERSIST_KEY } from '../plugins/vuex-persist';

export const AUTHENTICATION_MIDDLEWARE = 'authentication';

const authenticationMiddleware: Middleware = async ({ app, store, redirect, req }) => {
    try {
        //TODO get user token
    } catch (e) {
        return redirect(302, '/login');
    }
};

export default authenticationMiddleware;
