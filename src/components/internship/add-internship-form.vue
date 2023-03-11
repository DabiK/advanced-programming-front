<template>
    <div>
        <v-container fluid>
            <v-form ref="form" lazy-validation>
                <div class="login-email-container text-left">
                    <v-row>
                        <v-col md="6">
                            <h4 class="mb-2">{{ $t('add-internship.form.companyName') }}</h4>
                            <v-text-field
                                type="text"
                                v-model="internship.companyName"
                                :rules="formRules['text']"
                                solo
                            ></v-text-field>
                        </v-col>

                        <v-col md="6">
                            <h4 class="mb-2">{{ $t('add-internship.form.companyAddress') }}</h4>
                            <v-text-field
                                type="text"
                                v-model="internship.companyAddress"
                                :rules="formRules['text']"
                                solo
                            ></v-text-field>
                        </v-col>

                        <v-col md="6">
                            <h4 class="mb-2">{{ $t('add-internship.form.startingDate') }}</h4>
                            <v-text-field
                                type="date"
                                v-model="internship.startingDate"
                                :rules="formRules['date']"
                                solo
                            ></v-text-field>
                        </v-col>

                        <v-col md="6">
                            <h4 class="mb-2">{{ $t('add-internship.form.endingDate') }}</h4>
                            <v-text-field
                                type="date"
                                v-model="internship.endingDate"
                                :rules="formRules['date']"
                                solo
                            ></v-text-field>
                        </v-col>
                    </v-row>

                    <p v-if="errorMessage !== ''" class="my-0 red--text">{{ errorMessage }}</p>
                </div>
                <div class="login-form-footer">
                    <v-btn class="base-btn primary" @click="validateForm">{{ $t('add-intern.form.create') }}</v-btn>
                </div>
            </v-form>
        </v-container>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Emit, PropSync } from 'nuxt-property-decorator';
import { VForm } from '~/models/form/v-form';
import { AddInternshipDTO } from '~/models/internships/add-internship-dto';

@Component({
    name: 'add-internship-form',
})
export default class AddInternshipForm extends Vue {
    internship: Partial<AddInternshipDTO> = {};

    formRules: any = {
        text: [(v: any) => v !== undefined || this.$t('form-error.empty-input')],
        date: [(v: any) => v !== undefined || this.$t('form-error.empty-input')]
    };

    @PropSync('error', {
        type: String,
    })
    errorMessage!: string;

    validateForm() {
        if ((this.$refs.form as VForm).validate()) {
            this.create();
        }
    }

    @Emit('submit')
    create() {
        return this.internship;
    }
}
</script>

<style lang="scss" scoped>

button {
    width: fit-content;
}
</style>
