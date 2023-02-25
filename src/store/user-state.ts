import { Module, VuexModule, Action, Mutation } from 'vuex-module-decorators';
import { User } from '../models/user/user.model';

export const USER_STATE_NAME = 'user-state';
@Module({
    name: USER_STATE_NAME,
    stateFactory: true,
    namespaced: true,
})
export class UserState extends VuexModule {
    user: User = {};

    token: string = '';
    @Action
    updateToken(token: string) {
        this.setToken(token);
    }

    @Mutation
    private setToken(token: string) {
        this.token = token;
    }

    @Action
    updateUser(user: User) {
        this.setUser(user);
    }

    @Mutation
    private setUser(user: User) {
        this.user = user;
    }

    get userProfilPic() {
        return this.user.picture;
    }
}
