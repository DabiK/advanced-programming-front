<template>
    <div>
        <login-header />
        <v-row class="login-page-container full-height mb-0" justify="center">
            <v-col md="6" sm="12" class="text-center px-10" justify-center>
                <signup-form :error="errorMessage" @signup="signup" @reset-error="resetError" />
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
import LoginHeader from '~/components/auth/login/login-header.vue';
import LoginPageRightImage from '~/components/auth/login/login-page-right-image.vue';
import SignupForm from '~/components/auth/signup/signup-form.vue';
import { SignupCredential } from '~/models/login/signup.model';
import { registerModule } from '~/store/store-helper';
import { UserState, USER_STATE_NAME } from '~/store/user-state';
import { pages, pagesPath } from '~/utils/page';

@Component({
    name: 'Signup',
    layout: pages.LAYOUT_LOGIN,
    components: {
        SignupForm,
        LoginPageRightImage,
        LoginHeader,
    },
})
export default class Signup extends Vue {
    errorMessage: string = '';

    async signup(credential: SignupCredential) {
        try {
            const result = await this.$service.auth.signup(credential);
            if (result) {
                this.$toast.success(this.$t('signup-account-created'));

                this.$router.push({
                    path: `${pagesPath.LOGIN_PAGE_PATH}/`,
                });
            } else {
                this.$toast.error(this.$t('errors.registration-failed'));
            }
        } catch (err) {
            console.debug(err);
            this.errorMessage = this.$t('errors.registration-failed').toString();
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
