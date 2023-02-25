import { Module, VuexModule, Action, Mutation } from 'vuex-module-decorators';

export const APP_STATE_NAME = 'app-state';
@Module({
    name: APP_STATE_NAME,
    stateFactory: true,
    namespaced: true,
})
export class AppState extends VuexModule {
    isLoading: boolean = false;

    @Action
    updateLoading(loading: boolean) {
        this.setLoading(loading);
    }

    @Mutation
    private setLoading(loading: boolean) {
        this.isLoading = loading;
    }
}
