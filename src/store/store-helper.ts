import { VuexModule } from 'vuex-module-decorators';
import { Store } from 'vuex/types/index';

export const registerModule = <T>(name: string, module: any, store: Store<any>) => {
    if (!store.hasModule(name)) {
        store.unregisterModule(name);
    }
    store.registerModule(name, module);
};
