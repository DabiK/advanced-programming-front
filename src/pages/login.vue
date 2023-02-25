<template>
    <div>
        <login-header />
        <v-row class="login-page-container full-height mb-0" justify="center">
            <v-col md="6" sm="12" class="text-center px-10" justify-center>
                <login-form @login="login" :error="errorMessage" @reset-error="resetError" />
            </v-col>
            <v-col
                class="carousel-container full-height"
                align="center"
                delimiter-icon="mdi-minus"
                justify="center"
                md="6"
                sm="12"
            >
                <login-page-right-image />
            </v-col>
        </v-row>
    </div>
</template>

<script lang="ts">
import { Vue, Component, getModule } from 'nuxt-property-decorator';
import LoginForm from '~/components/auth/login/login-form.vue';
import LoginHeader from '~/components/auth/login/login-header.vue';
import LoginPageRightImage from '~/components/auth/login/login-page-right-image.vue';
import { LoginCredential } from '~/models/login/credential.model';
import { registerModule } from '~/store/store-helper';
import { USER_STATE_NAME, UserState } from '~/store/user-state';
import { pages, pagesPath } from '~/utils/page';

@Component({
    name: 'Login',
    layout: pages.LAYOUT_WITH_NAVBAR,
    components: {
        LoginForm,
        LoginPageRightImage,
        LoginHeader,
    },
})
export default class Login extends Vue {
    errorMessage: string = '';
    async mounted() {
        registerModule(USER_STATE_NAME, UserState, this.$store);
    }

    async login(credential: LoginCredential) {
        const userState = getModule(UserState, this.$store);
        try {
            const token = await this.$service.auth.login(credential);
            if (token) {
                userState.updateToken(token);
                const user = await this.$service.auth.me();
                userState.updateUser(user);
                this.$router.push({
                    path: pagesPath.HOME_PATH,
                });
            } else {
                this.errorMessage = this.$t('errors.invalid-credential').toString();
            }
        } catch (err) {
            console.debug(err);
            this.errorMessage = this.$t('errors.invalid-credential').toString();
        }
    }

    async resetError() {
        this.errorMessage = '';
    }
}
</script>

<style lang="scss" scoped>
@import '~vuetify/src/styles/settings/_variables';

.login-page-container {
    align-items: center !important;
    @media #{map-get($display-breakpoints, 'sm-and-down')} {
        align-items: baseline !important;
    }
}
.carousel-container {
    @media #{map-get($display-breakpoints, 'sm-and-down')} {
        display: none;
    }
}
</style>
