<template>
    <div>
        <div>
            <v-chip class="document-chips" :class="soutenanceDone ? 'done' : 'not-done'" @click="selectSoutenance">
                <v-icon v-if="soutenanceDone" class="mr-3">{{ soutenanceDone ? 'mdi-check-circle' : '' }}</v-icon>
                {{ $t('internships.documents.soutenance') }}
            </v-chip>
            <v-chip class="document-chips" :class="reportDone ? 'done' : 'not-done'" @click="selectReport">
                <v-icon v-if="reportDone" class="mr-3">{{ reportDone ? 'mdi-check-circle' : '' }}</v-icon>

                {{ $t('internships.documents.report') }}
            </v-chip>
            <v-chip class="document-chips" :class="visitDone ? 'done' : 'not-done'" @click="selectVisit">
                <v-icon v-if="visitDone" class="mr-3">{{ visitDone ? 'mdi-check-circle' : '' }}</v-icon>
                {{ $t('internships.documents.visit') }}
            </v-chip>

            <div v-if="isSoutenanceDocument" class="document-detail-container">
                <div class="border big" :class="soutenanceDone ? 'done' : 'not-done'"></div>
                <v-row>
                    <v-col cols="12">
                        <h4 class="mb-2">{{ $t('internships.documents.form.date') }}</h4>
                        <v-date-picker no-title v-model="dateOfSoutenance"></v-date-picker>
                    </v-col>
                    <v-col cols="4">
                        <h4 class="mb-2">{{ $t('internships.documents.form.technical-grade') }}</h4>
                        <v-text-field v-model="soutenance.technicalMark" type="number" solo></v-text-field>
                    </v-col>
                    <v-col cols="4">
                        <h4 class="mb-2">{{ $t('internships.documents.form.presentation-grade') }}</h4>
                        <v-text-field v-model="soutenance.presentationMark" type="number" solo></v-text-field>
                    </v-col>

                    <v-col cols="4">
                        <h4 class="mb-2">{{ $t('internships.documents.form.global-grade') }}</h4>
                        <v-text-field v-model="soutenance.globalMark" type="number" solo></v-text-field>
                    </v-col>
                    <v-btn class="base-btn primary" @click="lockSoutenance">{{
                        $t('internships.documents.form.submit')
                    }}</v-btn>
                </v-row>
            </div>

            <div v-if="isReportDocument" class="document-detail-container">
                <div class="border small" :class="reportDone ? 'done' : 'not-done'"></div>
                <v-row>
                    <v-col cols="4">
                        <h4 class="mb-2">{{ $t('internships.documents.form.technical-grade') }}</h4>
                        <v-text-field type="number" solo></v-text-field>
                    </v-col>
                    <v-col cols="4">
                        <h4 class="mb-2">{{ $t('internships.documents.form.presentation-grade') }}</h4>
                        <v-text-field type="number" solo></v-text-field>
                    </v-col>

                    <v-col cols="4">
                        <h4 class="mb-2">{{ $t('internships.documents.form.global-grade') }}</h4>
                        <v-text-field type="number" solo></v-text-field>
                    </v-col>
                    <v-btn class="base-btn primary" @click="lockReport">{{
                        $t('internships.documents.form.submit')
                    }}</v-btn>
                </v-row>
            </div>

            <div v-if="isVisitDocument" class="document-detail-container">
                <div class="border" :class="visitDone ? 'done' : 'not-done'"></div>
                <v-row>
                    <v-col cols="12">
                        <h4 class="mb-2">{{ $t('internships.documents.form.date') }}</h4>
                        <v-date-picker no-title v-model="dateOfVisit"></v-date-picker>
                    </v-col>
                    <v-btn class="base-btn primary" @click="lockVisit">{{
                        $t('internships.documents.form.submit')
                    }}</v-btn>
                </v-row>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'nuxt-property-decorator';
import { Report } from '~/models/report/report';
import { Soutenance } from '~/models/soutenance/soutenance';
import { Visit } from '~/models/visit/visit';

enum Document {
    SOUTENANCE,
    REPORT,
    VISIT,
}

@Component({
    name: 'associated-document',
})
export default class AssociatedDocument extends Vue {
    @Prop({
        default: () => {},
    })
    soutenanceProp!: Soutenance;

    @Prop({
        default: () => {},
    })
    reportProp!: Report;

    @Prop({
        default: () => {},
    })
    visitProp!: Visit;

    selectedDocument: Document = Document.SOUTENANCE;

    selectSoutenance() {
        this.selectedDocument = Document.SOUTENANCE;
    }

    selectReport() {
        this.selectedDocument = Document.REPORT;
    }

    selectVisit() {
        this.selectedDocument = Document.VISIT;
    }

    @Emit('lock-soutenance')
    lockSoutenance() {
        return this.soutenance;
    }
    @Emit('lock-report')
    lockReport() {
        return this.report;
    }

    @Emit('lock-visit')
    lockVisit() {
        return this.visit;
    }

    get soutenance() {
        return this.soutenanceProp || {};
    }

    set soutenance(value: Soutenance) {
        this.soutenanceProp = value;
    }

    get report() {
        return this.reportProp || {};
    }

    set report(value: Report) {
        this.reportProp = value;
    }

    get visit() {
        return this.visitProp || {};
    }

    set visit(value: Visit) {
        this.visitProp = value;
    }

    get dateOfSoutenance() {
        return this.soutenance.dateOfSoutenance?.toISOString().substr(0, 10);
    }

    set dateOfSoutenance(date: string) {
        this.soutenance.dateOfSoutenance = new Date(date);
    }

    get dateOfVisit() {
        return this.visit.dateOfVisit?.toISOString().substr(0, 10);
    }

    set dateOfVisit(date: string) {
        this.visit = {
            ...this.visit,
            dateOfVisit: new Date(date),
        };
    }

    get soutenanceDone() {
        return this.soutenance?.soutenanceDone;
    }

    get reportDone() {
        return this.report?.reportDone;
    }

    get visitDone() {
        return this.visit?.visitDone;
    }

    get isSoutenanceDocument() {
        return this.selectedDocument == Document.SOUTENANCE;
    }

    get isReportDocument() {
        return this.selectedDocument == Document.REPORT;
    }

    get isVisitDocument() {
        return this.selectedDocument == Document.VISIT;
    }
}
</script>

<style lang="scss" scoped>
@import '~vuetify/src/styles/settings/_variables';

.document-chips {
    width: 170px;
    height: 50px;
    text-align: center;
    justify-content: center;
    color: var(--v-primary-base) !important;
    margin-right: 5;
    border-radius: 20px !important;
    margin-right: 10px;
    cursor: pointer;
    &.done {
        background-color: #b1ffcc;
    }
    &.not-done {
        background-color: #ffb1b1;
    }
}

.document-detail-container {
    margin-top: 20px;
    padding-left: 30px;
    .border {
        height: 250px;
        width: 10px;
        z-index: 10;
        position: absolute;
        left: 0px;
        border-radius: 20px;

        &.big {
            height: 500px;
        }

        &.small {
            height: 150px;
        }

        &.done {
            background-color: #b1ffcc;
        }
        &.not-done {
            background-color: #ffb1b1;
        }
    }
}
</style>
