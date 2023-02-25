<template>
    <v-app light>
        <v-main>
            <Nuxt />
        </v-main>
    </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
@Component({
    name: 'DefaultLayout',
})
export default class DefaultLayout extends Vue {}
</script>
