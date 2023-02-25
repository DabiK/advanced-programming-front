import { Middleware } from '@nuxt/types';
import { withSSRContext } from 'aws-amplify';

export const HOME_REDIRECTION_MIDDLEWARE = 'home-redirection';

const authenticationMiddleware: Middleware = async ({ app, store, redirect, req }) => {
    const { Auth } = withSSRContext({ req });
    try {
        // Get user token
        const user = undefined;
        if (user) {
            return redirect(302, '/home');
        }
    } catch (e) {}
};

export default authenticationMiddleware;
