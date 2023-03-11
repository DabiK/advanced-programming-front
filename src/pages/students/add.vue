<template>
    <div>
        <h2>{{ $t('student-add.title') }}</h2>

        <add-intern-form @submit="submit" />
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import AddInternForm from '~/components/intern/add-intern-form.vue';
import { Student } from '~/models/students/student';
import { pages, pagesPath } from '~/utils/page';

@Component({
    name: 'AddIntern',
    layout: pages.LAYOUT_WITH_NAVBAR,
    components: {
        AddInternForm,
    },
})
export default class AddIntern extends Vue {
    async submit(student: Student) {
        console.log(student);
        try {
            const createdStudent = await this.$service.student.create(student);
            if (createdStudent) {
                this.$toast.success(this.$t('student-add.student-created', { name: createdStudent.firstName }));
                this.$router.push({
                    path: pagesPath.HOME_PAGE_PATH,
                });
            } else {
                this.$toast.error(this.$t('student-add.student-created-failed', { name: student.firstName }));
            }
        } catch (err) {
            console.debug(err);
            this.$toast.error(this.$t('student-add.student-created-failed', { name: student.firstName }));
        }
    }
}
</script>

<style lang="scss" scoped></style>
