<template>
    <v-app light>
        <v-main>
            <!-- <navbar /> -->
            <loader />
            <navbar class="mb-3" />
            <v-container fluid class="main-container pt-0 pr-0">
                <v-main>
                    <Nuxt />
                </v-main>
            </v-container>
        </v-main>
    </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { pages } from '~/utils/page';
import Navbar from '~/components/navbar/navbar.vue';
import Loader from '~/components/loader/loader.vue';

@Component({
    name: pages.LAYOUT_WITH_NAVBAR,
    components: {
        Navbar,
        Loader,
    },
})
export default class LayoutWithNavbar extends Vue {
    handleError(e: any) {
        console.error(e);
    }
}
</script>

<style lang="scss" scoped>
@import '~vuetify/src/styles/settings/_variables';

.main-container {
    margin-left: 260px;
    width: 80%;
}
@media #{map-get($display-breakpoints, 'md-and-down')} {
    .main-container {
        width: 100%;
        margin-left: 0px;
    }
}
</style>
