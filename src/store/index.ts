import Vuex from 'vuex';
import { UserState } from './user-state';
import { AppState } from './app-state';
import Vue from 'vue';

Vue.use(Vuex);

export default function createStore() {
    return new Vuex.Store({
        modules: {
            UserState,
            AppState,
        },
    });
}
