import { Middleware } from '@nuxt/types';
import { pagesPath } from '../utils/page';

export const REDIRECT_TO_LOGIN_MIDDLEWARE = 'redirect-to-login';

const redirectToLoginMiddleware: Middleware = async ({ app, store, redirect, req }) => {
    return redirect(301, pagesPath.LOGIN_PAGE_PATH);
};

export default redirectToLoginMiddleware;
