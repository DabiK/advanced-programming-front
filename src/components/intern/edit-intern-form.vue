<template>
    <div>
        <v-container fluid>
            <v-form ref="form" lazy-validation>
                <div class="text-left">
                    <v-row>
                        <v-col md="6">
                            <h4 class="mb-2">{{ $t('add-intern.form.firstname') }}</h4>
                            <v-text-field
                                type="text"
                                v-model="beforeEditingStudent.firstName"
                                :rules="formRules['text']"
                                solo
                            ></v-text-field>
                        </v-col>

                        <v-col md="6">
                            <h4 class="mb-2">{{ $t('add-intern.form.lastname') }}</h4>
                            <v-text-field
                                type="text"
                                v-model="beforeEditingStudent.lastName"
                                :rules="formRules['text']"
                                solo
                            ></v-text-field>
                        </v-col>

                        <v-col md="6">
                            <h4 class="mb-2">{{ $t('add-intern.form.email') }}</h4>
                            <v-text-field
                                type="email"
                                v-model="beforeEditingStudent.email"
                                :rules="formRules['email']"
                                solo
                            ></v-text-field>
                        </v-col>

                        <v-col md="6">
                            <h4 class="mb-2">{{ $t('add-intern.form.phone-number') }}</h4>
                            <v-text-field
                                type="text"
                                v-model="beforeEditingStudent.phoneNumber"
                                :rules="formRules['phone']"
                                solo
                            ></v-text-field>
                        </v-col>

                        <v-col md="12">
                            <h4 class="mb-2">{{ $t('add-intern.form.class') }}</h4>
                            <v-text-field
                                type="text"
                                v-model="beforeEditingStudent.currentClass"
                                :rules="formRules['text']"
                                solo
                            ></v-text-field>
                        </v-col>

                        <v-col md="12" class="text-center">
                            <h4 class="mb-2">{{ $t('add-intern.form.picture') }}</h4>
                            <v-text-field
                                type="text"
                                v-model="beforeEditingStudent.pictureUrl"
                                :rules="formRules['text']"
                                solo
                            ></v-text-field>
                            <v-avatar size="200">
                                <img :src="beforeEditingStudent.pictureUrl" />
                            </v-avatar>
                        </v-col>
                    </v-row>

                    <p v-if="errorMessage !== ''" class="my-0 red--text">{{ errorMessage }}</p>
                </div>
                <div class="login-form-footer">
                    <v-btn class="base-btn primary" @click="validateForm">{{ $t('edit-intern.form.edit') }}</v-btn>
                </div>
            </v-form>
        </v-container>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Emit, PropSync, Prop } from 'nuxt-property-decorator';
import { VForm } from '~/models/form/v-form';
import { Student } from '~/models/students/student';
import { pagesPath } from '~/utils/page';

@Component({
    name: 'edit-student-form',
})
export default class EditStudentForm extends Vue {
    @Prop()
    beforeEditingStudent!: Student;

    student: Partial<Student> = {};
    previewImage = '';

    formRules: any = {
        text: [(v: any) => v !== undefined || this.$t('form-error.empty-input')],
        email: [
            (v: any) => v !== '' || this.$t('form-error.empty-input'),
            (v: any) => /.+@.+\..+/.test(v) || this.$t('form-error.incorrect-email-input'),
        ],
        phone: [
            (v: any) => v !== '' || this.$t('form-error.empty-input'),
            (v: any) => (v !== '' && (v as string)?.length == 10) || this.$t('form-error.invalid-phone'),
        ],
        date: [(v: any) => v !== undefined || this.$t('form-error.empty-input')],
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
        return this.beforeEditingStudent;
    }
}
</script>

<style lang="scss" scoped>
button {
    width: fit-content;
}
</style>
