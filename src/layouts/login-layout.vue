<template>
    <v-app light>
        <v-main>
            <Nuxt />
        </v-main>
    </v-app>
</template>

<script lang="ts">
import { getModule } from 'nuxt-property-decorator';
import { Vue, Component } from 'vue-property-decorator';
import { APP_STATE_NAME, AppState } from '~/store/app-state';
import { USER_STATE_NAME, UserState } from '~/store/user-state';
import { registerModule } from '~/store/store-helper';
@Component({
    name: 'LoginLayout',
})
export default class LoginLayout extends Vue {
    appState!: AppState;
    userState!: UserState;

    async mounted() {
        registerModule(USER_STATE_NAME, UserState, this.$store);
        registerModule(APP_STATE_NAME, AppState, this.$store);
        this.userState = getModule(UserState, this.$store);
        this.appState = getModule(AppState, this.$store);
        this.appState.updateLoading(false);
    }
}
</script>
