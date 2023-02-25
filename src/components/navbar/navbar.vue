<template>
    <v-navigation-drawer v-model="display" class="navbar" absolute temporary>
        <v-list nav dense>
            <v-list-item class="navbar-list-item">
                <nuxt-link to="/home">
                    <v-list-item-icon>
                        <v-icon large color="white" class="navbar-icon">mdi-home</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title class="white--text">{{ $t('page.header.home') }}</v-list-item-title>
                </nuxt-link>
            </v-list-item>
            <v-list-item class="navbar-list-item">
                <nuxt-link to="/automations">
                    <v-list-item-icon>
                        <v-icon large color="white" class="navbar-icon">mdi-home</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title class="white--text">{{ $t('page.header.automations') }}</v-list-item-title>
                </nuxt-link>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';
import { USER_STATE_NAME } from '~/store/user-state';

@Component({
    name: 'navbar',
})
export default class Navbar extends Vue {
    userState!: any;
    mini: Boolean = true;
    @Prop({
        default: false,
    })
    display!: boolean;
    mounted() {
        this.userState = this.$store.state[USER_STATE_NAME];
    }

    get imgUrl() {
        return this.$store.state[USER_STATE_NAME]?.user.picture;
    }

    get email() {
        return this.$store.state[USER_STATE_NAME]?.user.email;
    }
}
</script>

<style lang="scss" scoped>
@import '~vuetify/src/styles/settings/_variables';
.navbar {
    background-color: var(--v-primary-base) !important;
    border-top-right-radius: 40px;
    border-bottom-right-radius: 40px;
    position: fixed;

    .navbar-list-item {
        padding-left: 0px;
    }
    .navbar-icon {
        padding-left: 0px;
    }

    &:hover {
        background-color: red;
    }
}

.top-navbar {
    background-color: var(--v-secondary-base) !important;
}
</style>

<style lang="scss">
.v-navigation-drawer__content {
    display: flex !important;
    align-items: center !important;
}
</style>
