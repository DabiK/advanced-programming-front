<template>
    <div class="edit-intern-container">
        <h1>{{ $t('student.edit-profile') }}</h1>
        <edit-student-form :beforeEditingStudent="beforeEditingStudent" @submit="editStudent" />
    </div>
</template>

<script lang="ts">
import { Vue, Component, Inject } from 'nuxt-property-decorator';
import EditStudentForm from '~/components/intern/edit-intern-form.vue';
import { AUTHENTICATION_MIDDLEWARE } from '~/middleware/authentication';
import { Student } from '~/models/students/student';
import { pages, pagesPath } from '~/utils/page';

@Component({
    name: 'editIntern',
    layout: pages.LAYOUT_WITH_NAVBAR,
    middleware: AUTHENTICATION_MIDDLEWARE,
    components: {
        EditStudentForm,
    },
})
export default class EditStudent extends Vue {
    @Inject()
    beforeEditingStudent!: Student;

    async mounted() {
        try {
            const { id } = this.$route.params;
    
            this.beforeEditingStudent = await this.$service.student.getStudent(id);
            console.log('1');
            if (!this.beforeEditingStudent) {
                return this.redirectToHome();
            }
        }
        catch (e) {
            this.$toast.error(this.$t('error.500'));
        }
    }

    redirectToHome() {
        this.$router.push({
            path: pagesPath.HOME_PATH,
        });
    }

    async editStudent(student: Student) {
        try {
            await this.$service.student.edit(student);
            const { id } = this.$route.params;
            this.$toast.success(this.$t('edit-intern.form.success'));
            this.$router.push({
                path: pagesPath.STUDENT_PAGE(id),
            });
        } catch (e) {
            console.debug(e);
            this.$toast.error(this.$t('edit-intern.form.failed'));
        }
    }
}
</script>

<style scoped>
.edit-intern-container {
    margin-top: 3rem;
    height: 80vh;
    display: flex;
    align-content: center;
    align-items: center;
    flex-wrap: wrap;
}
h1 {
    width: 100%;
}
</style>
