<template>
    <a class="internship-card">
        <div class="internship-card__body">
            <h3 class="internship-card__body__title">{{ date < new Date() ? $t("student.ended"): $t("student.in-progress") }}</h3>
            <span class="internship-card__body__date">2022-02-12 to 2022-06-04</span>

            <ul>
                <li :class="isDefenseDone ? 'color-success' : 'color-danger'"><span class="circle"></span> {{ $t("student.internship-defense") }}</li>
                <li :class="isDefenseDone ? 'color-success' : 'color-danger'"><span class="circle"></span> {{ $t("student.report") }}</li>
                <li :class="isDefenseDone ? 'color-success' : 'color-danger'"><span class="circle"></span> {{ $t("student.visit") }}</li>
            </ul>
        </div>

        <div class="internship-card__footer">{{companyName}}</div>
    </a>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';

@Component({
    name: "internship-details"
})
export default class InternshipDetails extends Vue {
    @Prop()
    date!: Date

    @Prop()
    isDefenseDone!: boolean

    @Prop()
    isReportDone!: boolean

    @Prop()
    isVisitDone!: boolean

    @Prop()
    companyName!: string
}

</script>

<style lang="scss" scoped>
@import '~/assets/variables.scss';

.internship-card {
    display: block;
    margin: 1rem;
    width: 230px;
    color: $white;

    .circle {
        border-radius: 50%;
        margin-right: 10px;
        display: block;
        width: 15px;
        height: 15px;
    }

    &__body {
        background-color: $dark-blue;
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
        padding: 1rem;

        &__title {
            width: 100%;
            text-align: center;
        }

        &__date {
            display: block;
            margin: 1rem 0;
            width: 100%;
            text-align: center;
            font-style: italic;
        }

        ul {
            height: 100px;
            list-style: none;
            margin: 2rem 0 0 0;
            padding: 0;

            li {
                display: flex;
                flex-wrap: nowrap;
                align-items: center;
                font-size: 1.2rem;

                &.color-danger {
                    color: $danger;

                    .circle {
                        background-color: $danger;
                    }
                }

                &.color-success {
                    color: $success;

                    .circle {
                        background-color: $success;
                    }
                }
            }
        }
    }

    &__footer {
        background-color: $medium-blue;
        width: 100%;
        padding: 1rem;
        border-bottom-left-radius: 15px;
        border-bottom-right-radius: 15px;
        text-align: center;
        font-weight: bold;
        font-size: 1.4rem;
    }
}
</style>

