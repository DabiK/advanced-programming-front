<template>
    <div>
        <v-container fluid class="login-block">
            <v-form ref="form" lazy-validation>
                <div class="login-header text-left">
                    <h1>{{ $t('login.signin') }}</h1>
                    <p>{{ $t('login.description') }}</p>
                </div>
                <div class="login-email-container text-left">
                    <h4 class="mb-2">{{ $t('login.email') }}</h4>
                    <v-text-field
                        type="email"
                        v-model="credential.email"
                        @input="resetError"
                        :rules="formRules['email']"
                        solo
                    ></v-text-field>
                    <h4 class="mb-2">{{ $t('login.password') }}</h4>
                    <v-text-field
                        v-model="credential.password"
                        @input="resetError"
                        :rules="formRules['password']"
                        type="password"
                        solo
                    ></v-text-field>
                    <p v-if="errorMessage !== ''" class="my-0 red--text">{{ errorMessage }}</p>
                </div>
                <div class="login-form-footer">
                    <v-btn class="base-btn primary" @click="validateForm">{{ $t('login.submit') }}</v-btn>
                </div>
                <p class="mb-0">
                    {{ $t('login.dont-have-account') }}
                    <NuxtLink to="/signup">
                        <span class="secondary--text">{{ $t('login.create-account') }}</span>
                    </NuxtLink>
                </p>
            </v-form>
        </v-container>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Emit, PropSync } from 'nuxt-property-decorator';
import { LoginCredential } from '~/models/login/credential.model';
import { VForm } from '~/models/form/v-form';

@Component({
    name: 'login-form',
})
export default class LoginForm extends Vue {
    credential: LoginCredential = {
        email: '',
        password: '',
    };

    formRules: any = {
        email: [(v: any) => v !== '' || this.$t('form-error.empty-input')],
        password: [(v: any) => v !== '' || this.$t('form-error.empty-input')],
    };

    @PropSync('error', {
        type: String,
    })
    errorMessage!: string;

    validateForm() {
        if ((this.$refs.form as VForm).validate()) {
            this.login();
        }
    }

    @Emit('reset-error')
    resetError() {}

    @Emit('login')
    login() {
        return this.credential;
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
