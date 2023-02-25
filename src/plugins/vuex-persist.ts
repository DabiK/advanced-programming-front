import VuexPersistence from 'vuex-persist';
import { USER_STATE_NAME } from '../store/user-state';

export const VUEX_PERSIST_KEY = 'vuex';

export default ({ app, store }: any) => {
    new VuexPersistence({
        restoreState: (key, storage) => app.$cookies.get(key),
        saveState: (key, state, storage) => {
            app.$cookies.set(key, JSON.stringify(state), {
                path: '/',
                maxAge: 60 * 60 * 24 * 7,
            });
        },
        modules: [USER_STATE_NAME],
        key: VUEX_PERSIST_KEY,
    }).plugin(store);
};
