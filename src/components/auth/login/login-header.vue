<template>
    <v-img class="logo" max-width="300px" src="images/logo.png" />
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component({
    name: 'login-header',
})
export default class LoginHeader extends Vue {}
</script>

<style lang="scss" scoped>
@import '~vuetify/src/styles/settings/_variables';

.logo {
    position: absolute;
    @media #{map-get($display-breakpoints, 'sm-and-down')} {
        position: relative;
    }
}
</style>
