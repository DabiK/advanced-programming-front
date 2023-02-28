<template>
    <div>
        <!-- <v-app-bar-nav-icon class="navbar-toogle-icon" @click="drawer = true"></v-app-bar-nav-icon> -->
        <v-navigation-drawer class="navbar" permanent>
            <v-list class="list-container px-0" nav dense>
                <v-list-item class="navbar-list-item" to="/home">
                    <v-list-item-content>
                        <v-list-item-title class="white--text">{{ $t('navbar.home') }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item class="navbar-list-item" to="/home">
                    <v-list-item-content>
                        <v-list-item-title class="white--text">{{ $t('navbar.profil') }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item class="navbar-list-item" @click="logout">
                    <v-list-item-content>
                        <v-list-item-title class="white--text">{{ $t('navbar.logout') }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item class="navbar-list-item avatar-container" @click="logout">
                    <v-list-item-content>
                        <p class="white--text">{{ name }}</p>
                        <v-avatar class="avatar mt-2" color="brown">
                            <span class="text-h5">{{ initials }}</span>
                        </v-avatar>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </div>
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
    drawer = false;
    mounted() {
        this.userState = this.$store.state[USER_STATE_NAME];
    }

    logout() {}

    get name() {
        return `${this.$store.state[USER_STATE_NAME]?.user.firstName} ${this.$store.state[USER_STATE_NAME]?.user.lastName} `;
    }

    get initials() {
        return `${this.$store.state[USER_STATE_NAME]?.user.firstName[0].toUpperCase()}${this.$store.state[
            USER_STATE_NAME
        ]?.user.lastName[0].toUpperCase()} `;
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

    @media #{map-get($display-breakpoints, 'md-and-down')} {
        display: none;
    }

    .list-container {
        width: 100%;
    }

    .navbar-list-item {
        padding-left: 0px;
        text-align: center;
        width: 100%;
        border-radius: 0px;
        margin-bottom: 0px;
        border-bottom: 1px solid white;
    }

    .avatar-container {
        border-bottom: none !important;
        .v-list-item__content {
            display: flex !important;
            justify-content: center !important;
        }
    }
    .navbar-icon {
        padding-left: 0px;
    }

    &:hover {
        background-color: red;
    }

    .avatar {
        width: 50px;
        height: 50px;
        max-width: 50px;
    }
}

.top-navbar {
    background-color: var(--v-secondary-base) !important;
}
</style>

<style lang="scss">
.v-navigation-drawer {
    width: 200px !important;
    align-self: center;
}
.v-navigation-drawer__content {
    display: flex !important;
    width: 100%;
    align-items: end !important;
    padding-bottom: 50px;
    justify-content: center;
}
</style>
