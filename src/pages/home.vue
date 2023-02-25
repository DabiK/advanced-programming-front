<template>
    <div>HERE</div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import { pages } from '~/utils/page';

@Component({
    name: 'Home',
    layout: pages.LAYOUT_WITH_NAVBAR,
    components: {},
})
export default class Home extends Vue {
    errorMessage: string = '';
}
</script>

<style lang="scss" scoped></style>
