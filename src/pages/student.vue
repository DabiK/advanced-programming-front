<template>
    <div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Inject } from 'nuxt-property-decorator';
import { pages } from '~/utils/page';
import InternshipDetails from '~/components/student/home/internship-details.vue';
import { Prop } from 'vue-property-decorator';

@Component({
    name: 'Student',
    layout: pages.LAYOUT_WITH_NAVBAR,
    components: {
        InternshipDetails
    },
})
export default class StudentView extends Vue {
    @Prop()
    studentId!: number

    @Prop()
    internships!: []

    async mounted() {
        console.log("Hello there")
    }
}
</script>

<style lang="scss" scoped></style>