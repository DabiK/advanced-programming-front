<template>
    <div>
        <v-container fluid>
            <v-form ref="form" lazy-validation>
                <div class="text-left">
                    <v-row>
                        <v-col md="6">
                            <h4 class="mb-2">{{ $t('add-intern.form.firstname') }}</h4>
                            <v-text-field type="text" v-model="student.firstName" :rules="formRules['text']"
                                solo></v-text-field>
                        </v-col>

                        <v-col md="6">
                            <h4 class="mb-2">{{ $t('add-intern.form.lastname') }}</h4>
                            <v-text-field type="text" v-model="student.lastName" :rules="formRules['text']"
                                solo></v-text-field>
                        </v-col>

                        <v-col md="6">
                            <h4 class="mb-2">{{ $t('add-intern.form.email') }}</h4>
                            <v-text-field type="email" v-model="student.email" :rules="formRules['text']"
                                solo></v-text-field>
                        </v-col>

                        <v-col md="6">
                            <h4 class="mb-2">{{ $t('add-intern.form.phone-number') }}</h4>
                            <v-text-field type="text" v-model="student.phoneNumber" :rules="formRules['text']"
                                solo></v-text-field>
                        </v-col>

                        <v-col md="12" class="text-center">
                            <h4 class="mb-2">{{ $t('add-intern.form.picture') }}</h4>
                            <v-file-input show-size :label="$t('add-intern.form.select-image')" accept="image/*"
                                @change="selectImage"></v-file-input>
                            <v-avatar size="200">
                                <img :src="previewImage" />
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
    beforeEditingStudent!: Student

    student: Partial<Student> = {};
    previewImage = '';

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

    selectImage(image) {
        this.previewImage = URL.createObjectURL(image);
        this.student.picture = URL.createObjectURL(image);
    }

    @Emit('submit')
    create() {
        return this.student;
    }

    async created() {
        const { id } = this.$route.params

        this.student = await this.$service.student.getStudent(id);
        if (!this.student) {
            return this.redirectToHome()
        }
    }

    redirectToHome() {
        this.$router.push({
            path: pagesPath.HOME_PATH,
        });
    }
}
</script>

<style lang="scss" scoped>
button {
    width: fit-content;
}
</style>
