<template>
    <div>
        <div v-if="!isLoading">
            <div class="student-info-container">
                <div class="student-info">
                    <v-row>
                        <v-col>
                            <v-avatar size="60">
                                <img :src="student.picture" :alt="student.firstName" />
                            </v-avatar>
                        </v-col>

                        <v-col align-self="center">
                            <p>{{ `${student.firstName} ${student.lastName}` }}</p>
                        </v-col>

                        <v-col align-self="center">
                            <p>{{ `${student.email}` }}</p>
                        </v-col>

                        <v-col align-self="center">
                            <p>{{ `${student.phoneNumber}` }}</p>
                        </v-col>
                    </v-row>
                </div>
            </div>
            <div class="page-content">
                <h1 class="mb-2 mt-5">
                    {{
                        $t('internships.title', {
                            company: internship.company?.name,
                        })
                    }}
                </h1>
                <p>
                    {{
                        $t('internships.details.name', {
                            name: internship.company?.name,
                        })
                    }}
                </p>

                <p>
                    {{
                        $t('internships.details.company-address', {
                            address: internship.company?.address,
                        })
                    }}
                </p>

                <p>
                    {{
                        $t('internships.details.startdate', {
                            date: format(internship.startingDate),
                        })
                    }}
                </p>

                <p>
                    {{
                        $t('internships.details.enddate', {
                            date: format(internship.endingDate),
                        })
                    }}
                </p>

                <h2>{{ $t('internships.associated-documents') }}</h2>
                <associated-document
                    @lock-report="lockReport"
                    @lock-soutenance="lockSoutenance"
                    @lock-visit="lockVisit"
                    :soutenanceProp="soutenance"
                    :reportProp="report"
                    :visitProp="visit"
                />

                <h2 class="mt-5">{{ $t('internships.todo.title') }}</h2>
                <p>
                    {{
                        $t('internships.todo.subtitle', {
                            name: `${student.firstName} ${student.lastName}`,
                        })
                    }}
                </p>

                <div>
                    <v-list lines="three" select-strategy="classic">
                        <v-list-item :class="visit.webSurveyDone ? 'todo-active' : ''">
                            <template v-slot:default>
                                <v-list-item-action>
                                    <v-checkbox v-model="visit.webSurveyDone"></v-checkbox>
                                </v-list-item-action>

                                <v-list-item-content>
                                    <v-list-item-title
                                        ><p :class="visit.webSurveyDone ? 'text-decoration-line-through' : ''">
                                            {{ $t('internships.todo.web-survey') }}
                                        </p></v-list-item-title
                                    >
                                </v-list-item-content>
                            </template>
                        </v-list-item>
                    </v-list>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Inject } from 'nuxt-property-decorator';
import { APP_STATE_NAME, AppState } from '~/store/app-state';
import { pages, pagesPath } from '~/utils/page';
import { fromDateToString } from '~/utils/time';
import { Internship } from '~/models/internships/internship';
import { getModule } from 'vuex-module-decorators';
import { Soutenance } from '~/models/soutenance/soutenance';
import { Report } from '~/models/report/report';
import { Visit } from '~/models/visit/visit';
import AssociatedDocument from '~/components/internship/associated-document.vue';
import { Student } from '~/models/students/student';

@Component({
    name: 'InternshipDetails',
    layout: pages.LAYOUT_WITH_NAVBAR,
    components: {
        AssociatedDocument,
    },
})
export default class InternshipDetails extends Vue {
    @Inject({
        default: {},
    })
    internship!: Internship;
    appState!: AppState;
    @Inject({
        default: {},
    })
    soutenance!: Soutenance;

    @Inject({
        default: {},
    })
    report!: Report;

    @Inject({
        default: {},
    })
    visit!: Visit;

    @Inject({
        default: {},
    })
    student!: Student;

    async mounted() {
        this.$store.registerModule(APP_STATE_NAME, AppState);
        this.$store.registerModule(APP_STATE_NAME, AppState);
        this.appState = getModule(AppState, this.$store);
        const id = this.$route.params.id;
        const internshipId = this.$route.params.internshipId;
        await this.fetchData(id, internshipId);
    }

    async fetchData(studentId: string, internshipId: string) {
        this.appState.updateLoading(true);

        await this.fetchStudent(studentId);
        await this.fetchInternship(studentId, internshipId);
        this.appState.updateLoading(false);
    }

    async fetchStudent(studentId: string) {
        try {
            this.student = await this.$service.student.getStudent(studentId);
        } catch (err) {
            console.debug(err);
        }
    }

    async fetchInternship(studentId: string, internshipId: string) {
        try {
            this.internship = await this.$service.internship.getStudentInternship(studentId, internshipId);
            this.report = this.internship.report || {};
            this.visit = this.internship.visit || {};
            this.soutenance = this.internship.soutenance || {};
        } catch (err) {
            console.debug(err);
        }
    }

    async lockReport(report: Report) {}

    async lockVisit(visit: Visit) {}

    async lockSoutenance(soutenance: Soutenance) {}

    format(date: Date) {
        return !!date ? fromDateToString(date) : date;
    }
    get isLoading() {
        return this.$store.state[APP_STATE_NAME]?.isLoading;
    }
}
</script>

<style lang="scss" scoped>
.page-content {
    margin-top: 60px;
}
.student-info-container {
    z-index: 10;
    position: fixed;
    top: 5px;
    width: 100%;
    display: flex;
    color: white;
    align-items: center;
    justify-content: center;

    .student-info {
        padding: 5px;
        border-radius: 30px;
        background-color: var(--v-primary-base) !important;
        width: 40%;
        height: 70px;
        margin-right: 15%;
    }
}

.todo-active {
    background-color: #ffb1b1;
    border-radius: 10px;
}
</style>
