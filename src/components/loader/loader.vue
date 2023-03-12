vue
<template>
    <div v-if="isLoading" class="loader-container">
        <v-img max-width="150px" class="loader" src="images/loader.gif" />
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import { AppState, APP_STATE_NAME } from '~/store/app-state';

@Component({
    name: 'loader',
})
export default class Loader extends Vue {
    mounted() {
        this.$store.registerModule(APP_STATE_NAME, AppState);
    }
    get isLoading() {
        return this.$store.state[APP_STATE_NAME]?.isLoading;
    }
}
</script>

<style lang="scss" scoped>
.loader-container {
    position: fixed;
    height: 100vh;
    width: 100vw;
    opacity: 0.46;
    background-color: rgb(58, 58, 58);
    border-color: rgb(58, 58, 58);
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    z-index: 1000;
}
</style>
