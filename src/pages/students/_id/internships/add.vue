<template>
    <div class="add-internship-container">
        <h1>{{ $t('add-internship.btn') }}</h1>
        <add-internship-form @submit="addInternship" />
    </div>
</template>

<script lang="ts">
import { Vue, Component, Emit, PropSync } from 'nuxt-property-decorator';
import AddInternshipForm from '~/components/internship/add-internship-form.vue';
import { AUTHENTICATION_MIDDLEWARE } from '~/middleware/authentication';
import { AddInternshipDTO } from '~/models/internships/add-internship-dto';
import { pages, pagesPath } from '~/utils/page';

@Component({
    name: 'addInternship',
    layout: pages.LAYOUT_WITH_NAVBAR,
    middleware: AUTHENTICATION_MIDDLEWARE,
    components: {
        AddInternshipForm,
    },
})
export default class AddInternship extends Vue {
    async addInternship(addInternshipDTO: AddInternshipDTO) {
        const { studentId } = this.$route.params;
        
        const responseAdding = await this.$service.internship.create(studentId, addInternshipDTO);
        if (!responseAdding) {
            this.$toast.error(this.$t('add-internship.form.error', { companyName: addInternshipDTO.companyName }));
            return;
        }

        this.$toast.success(this.$t('add-internship.form.success'));
        this.$router.push({
            path: pagesPath.STUDENT_PAGE(studentId),
        });
    }
}
</script>

<style scoped>
.add-internship-container {
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
