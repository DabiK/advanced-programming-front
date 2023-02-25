<template>
    <div>
        <v-container fluid class="login-block">
            <v-form ref="form" lazy-validation>
                <div class="login-header text-left">
                    <h1>{{ $t('signup.signup') }}</h1>
                    <p>{{ $t('signup.description') }}</p>
                </div>
                <div class="login-email-container text-left">
                    <h4 class="mb-2">{{ $t('login.email') }}</h4>
                    <v-text-field
                        type="email"
                        v-model="credential.username"
                        @input="resetError"
                        :rules="formRules['username']"
                        solo
                    ></v-text-field>
                    <h4 class="mb-2">{{ $t('login.password') }}</h4>
                    <v-text-field
                        v-model="credential.password"
                        :rules="formRules['password']"
                        :hint="$t('signup.password-rule')"
                        :append-icon="passwordVisible ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
                        @click:append="tooglePasswordVisibility"
                        @input="resetError"
                        :type="passwordVisible ? 'text' : 'password'"
                        solo
                    ></v-text-field>
                    <h4 class="mb-2">{{ $t('login.confirm-password') }}</h4>
                    <v-text-field
                        v-model="credential.confirmPassword"
                        :rules="formRules['confirmPassword']"
                        @input="resetError"
                        :append-icon="passwordVisible ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
                        @click:append="tooglePasswordVisibility"
                        :type="passwordVisible ? 'text' : 'password'"
                        solo
                    ></v-text-field>
                    <p v-if="errorMessage !== ''" class="my-0 red--text">{{ errorMessage }}</p>
                </div>
                <div class="login-form-footer">
                    <v-btn class="base-btn primary" @click="validateForm">{{ $t('signup.submit') }}</v-btn>
                </div>
                <p class="mb-0">
                    {{ $t('signup.have-account') }}
                    <NuxtLink to="/login">
                        <span class="secondary--text">{{ $t('signup.login') }}</span>
                    </NuxtLink>
                </p>
            </v-form>
        </v-container>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Emit, PropSync } from 'nuxt-property-decorator';
import { VForm } from '~/models/form/v-form';
import { SignupCredential } from '~/models/login/signup.model';

@Component({
    name: 'signup-form',
})
export default class SignupForm extends Vue {
    credential: SignupCredential = {
        username: '',
        password: '',
        confirmPassword: '',
    };

    formRules: any = {
        username: [
            (v: any) => v !== '' || this.$t('form-error.empty-input'),
            (v: any) => v !== '' || this.$t('form-error.empty-input'),
            (v: any) => /.+@.+\..+/.test(v) || this.$t('form-error.incorrect-email-input'),
        ],
        password: [(v: any) => v !== '' || this.$t('form-error.empty-input')],
        confirmPassword: [
            (v: any) => v !== '' || this.$t('form-error.empty-input'),
            (v: any) => v == this.credential.password || this.$t('form-error.incorrect-confirm-password'),
        ],
    };

    passwordVisible: Boolean = false;

    @PropSync('error', {
        type: String,
    })
    errorMessage!: string;

    @PropSync('step', {
        type: Number,
    })
    currentStep!: number;

    validateForm() {
        if ((this.$refs.form as VForm)?.validate()) {
            this.signup();
        }
    }

    @Emit('reset-error')
    resetError() {}

    @Emit('signup')
    signup() {
        return this.credential;
    }

    tooglePasswordVisibility() {
        this.passwordVisible = !this.passwordVisible;
    }
}
</script>

<style lang="scss" scoped>
@import '~vuetify/src/styles/settings/_variables';

.login-block {
    width: 70%;
}

@media #{map-get($display-breakpoints, 'md-and-down')} {
    .login-block {
        width: 100%;
    }
}
</style>
