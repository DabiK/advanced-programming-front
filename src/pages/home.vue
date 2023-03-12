<template>
    <v-container>
        <h1>{{ $t('home.welcome') }}</h1>
        <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere dolores atque iste repellat, nam id
            perferendis maxime explicabo voluptatibus quis deleniti sint, ipsam at odit voluptate perspiciatis cumque
            minima natus?
        </p>
        <h2>{{ $t('home.notifications') }}</h2>
        <notification-list :notifications="notifications" />

        <h2>{{ $t('home.student-list') }}</h2>

        <internship-details />

        <v-row>
            <v-col
                @click="openStudentPage(student.id)"
                cols="3"
                v-for="(student, index) in students"
                :key="index"
                class="student-container text-center"
            >
                <v-avatar size="200">
                    <img :src="student.pictureUrl" :alt="student.firstName" />
                </v-avatar>
                <p>{{ `${student.firstName} ${student.lastName}` }}</p>
                <p class="font-weight-bold">{{ student.currentClass }}</p>
            </v-col>

            <v-col @click="createStudent" class="student-container" cols="3">
                <v-avatar class="add-student-avatar" size="200">
                    <v-icon size="100" color="#163767">mdi-plus</v-icon>
                </v-avatar>
            </v-col>
        </v-row>
        <v-btn class="base-btn primary" @click="seeArchivedStudent = !seeArchivedStudent">{{
            !seeArchivedStudent ? $t('home.see-archived-student') : $t('home.hide-archived-student')
        }}</v-btn>

        <template v-if="seeArchivedStudent">
            <v-row>
                <v-col
                    @click="openStudentPage(student.id)"
                    cols="3"
                    v-for="(student, index) in archivedStudents"
                    :key="index"
                    class="student-container text-center"
                >
                    <v-avatar size="200">
                        <img :src="student.pictureUrl" :alt="student.firstName" />
                    </v-avatar>
                    <p>{{ `${student.firstName} ${student.lastName}` }}</p>
                    <p class="font-weight-bold">{{ student.currentClass }}</p>
                </v-col>
            </v-row>
        </template>
    </v-container>
</template>

<script lang="ts">
import { Vue, Component, Inject } from 'nuxt-property-decorator';
import NotificationList from '~/components/notifications/notifications-list.vue';
import InternshipDetails from '~/components/student/home/internship-details.vue';
import { Notification } from '~/models/notifications/notification';
import { Student } from '~/models/students/student';
import StudentView from './students/_id/index.vue';
import { pages, pagesPath } from '~/utils/page';
import { AUTHENTICATION_MIDDLEWARE } from '~/middleware/authentication';

@Component({
    name: 'Home',
    layout: pages.LAYOUT_WITH_NAVBAR,
    middleware: AUTHENTICATION_MIDDLEWARE,
    components: {
        NotificationList,
        StudentView,
    },
})
export default class Home extends Vue {
    errorMessage: string = '';

    @Inject({
        default: false,
    })
    seeArchivedStudent!: boolean;

    @Inject({
        default: [],
    })
    notifications!: Notification[];

    @Inject({
        default: [],
    })
    students!: Student[];

    @Inject({
        default: [],
    })
    archivedStudents!: Student[];

    async mounted() {
        this.notifications = await this.$service.notification.getAllNotification();
        this.students = await this.$service.student.getStudents();
        this.archivedStudents = await this.$service.student.getArchivedStudent();
    }

    openStudentPage(id: string) {
        this.$router.push({
            path: pagesPath.STUDENT_PAGE(id),
        });
    }

    createStudent() {
        this.$router.push({
            path: pagesPath.ADD_INTERN,
        });
    }
}
</script>

<style lang="scss" scoped>
@import '~vuetify/src/styles/styles.sass';

.student-container {
    cursor: pointer;
}
.add-student-avatar {
    border: solid 5px var(--v-primary-base);
}
</style>
