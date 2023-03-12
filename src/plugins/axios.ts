import { NuxtAxiosInstance } from '@nuxtjs/axios';
import { USER_STATE_NAME } from '../store/user-state';

export default (context: any) => {
    const { $axios }: { $axios: NuxtAxiosInstance } = context;
    $axios.onRequest(async (config) => {
        config.withCredentials = true;
        const token = context.app.store.state[USER_STATE_NAME].token;
        $axios.setToken(`Bearer ${token}`);
        return config;
    });
};
