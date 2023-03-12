import { NuxtAxiosInstance } from '@nuxtjs/axios';

export abstract class BaseService {
    constructor(protected axios: NuxtAxiosInstance) {}
}
