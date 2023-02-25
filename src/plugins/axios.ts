import { NuxtAxiosInstance } from '@nuxtjs/axios';

export default (context: any) => {
    const { $axios }: { $axios: NuxtAxiosInstance } = context;
    $axios.onRequest(async (config) => {
        config.withCredentials = true;
        const token = await context.$service.auth.getJwtToken();
        $axios.setToken(`Bearer ${token}`);
        return config;
    });
};
