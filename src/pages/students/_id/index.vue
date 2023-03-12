<template>
    <div>
        <h1>Student details</h1>
        <div class="student-details">
            <img :src="student?.pictureUrl" />
            <div>
                <ul>
                    <li>{{ $t('add-intern.form.lastname') }}: {{ student?.lastName }}</li>
                    <li>{{ $t('add-intern.form.firstname') }} : {{ student?.firstName }}</li>
                    <li>{{ $t('add-intern.form.phone-number') }}: {{ student?.phoneNumber }}</li>
                </ul>
            </div>
        </div>

        <section class="student-internships">
            <h2>Internships</h2>
            <div class="internships-container">
                <internship-details
                    v-for="(internship, index) in internships"
                    :key="index"
                    :internship="internship"
                    @goToInternshipPage="goToInternshipPage(internship.id)"
                />
            </div>

            <NuxtLink :to="pagesPath.ADD_INTERNSHIP_PAGE(student?.id)">
                <v-btn class="base-btn primary">{{ $t('add-internship.btn') }}</v-btn>
            </NuxtLink>
        </section>

        <section class="student-actions">
            <NuxtLink :to="`/students/${student?.id}/edit`">
                <v-btn class="base-btn primary">{{ $t('student.edit-profile') }}</v-btn>
            </NuxtLink>
            <v-btn class="base-btn danger" @click="archiveStudent">{{ $t('student.archived') }}</v-btn>
        </section>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Inject } from 'nuxt-property-decorator';
import { pages, pagesPath } from '~/utils/page';
import InternshipDetails from '~/components/student/home/internship-details.vue';
import { Internship } from '~/models/internships/internship';
import { Student } from '~/models/students/student';
import { AUTHENTICATION_MIDDLEWARE } from '~/middleware/authentication';

@Component({
    name: 'Student',
    layout: pages.LAYOUT_WITH_NAVBAR,
    middleware: AUTHENTICATION_MIDDLEWARE,
    components: {
        InternshipDetails,
    },
})
export default class StudentView extends Vue {
    @Inject()
    student!: Student;

    @Inject({
        default: [],
    })
    internships!: Internship[];

    async created() {
        try {
            const { id } = this.$route.params;
    
            this.student = await this.$service.student.getStudent(id);
            if (!this.student) {
                return this.redirectToHome();
            }
    
            this.internships = await this.$service.internship.getStudentInternships(id);
        }
        catch (e) {
            console.debug(e);
            this.$toast.error(this.$t('error.500'));
        }
    }

    archiveStudent() {
        try {
            this.$service.student.archive(this.student);
            this.redirectToHome();
        }
        catch (e) {
            console.debug(e);
            this.$toast.error(this.$t('error.500'));
        }
    }

    redirectToHome() {
        this.$router.push({
            path: pagesPath.HOME_PATH,
        });
    }

    goToInternshipPage(internshipId: string) {
        this.$router.push({
            path: pagesPath.INTERNSHIP_PAGE(this.student.id, internshipId),
        });
    }

    get pagesPath() {
        return pagesPath;
    }
}
</script>

<style lang="scss" scoped>
h1 {
    margin-bottom: 2rem;
}

.student-details {
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    img {
        width: 200px;
        height: 200px;
        border-radius: 100%;
        object-fit: cover;
    }

    ul {
        margin: 0 0 0 2rem;
        padding: 0;
        list-style: none;

        li {
            font-size: 1.3rem;
        }
    }
}

.student-internships {
    margin-top: 4rem;

    .internships-container {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        padding: 2rem 0;
    }
}

.base-btn {
    width: fit-content;
}

.student-actions {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>
