<template></template>

<script lang="ts">
import { LocaleObject } from '@nuxtjs/i18n';
import { Vue, Component, Inject } from 'nuxt-property-decorator';
import { User } from '~/models/user/user.model';
import { UserState, USER_STATE_NAME } from '~/store/user-state';
import { pagesPath } from '~/utils/page';

@Component({
    name: 'top-navbar',
    components: {},
})
export default class TopNavbar extends Vue {
    userState!: UserState;
    drawer = false;
    @Inject({
        default: {},
    })
    user!: User;

    async mounted() {}

    async logout() {
        await this.$router.push(pagesPath.LOGIN_PAGE_PATH);
    }

    updateLocal(code: string) {
        this.$i18n.setLocale(code);
    }

    get imgUrl() {
        return this.user?.picture;
    }

    get email() {
        return this.user?.email;
    }

    get pageName() {
        return this.$nuxt.$route.name?.split('___')[0].replace(/(\w)(\w*)/g, (g0, g1, g2) => {
            return g1?.toUpperCase() + g2?.toLowerCase();
        });
    }

    get availableLocales() {
        return this.$i18n.locales.map((element: LocaleObject | string) => (element as LocaleObject).code);
    }
}
</script>

<style lang="scss" scoped>
@import '~vuetify/src/styles/settings/_variables';

.top-navbar {
    background-color: var(--v-secondary-base) !important;
    margin-right: 0px;

    .navbar-toogle-icon {
        display: none;
    }

    .navbar-navigation-icon {
        display: block;
    }

    .logout-icon:hover {
        cursor: pointer;
    }
    .local-dropdown {
        max-width: 50px;
        margin-right: 10px;
        margin-top: 5px;
    }

    @media #{map-get($display-breakpoints, 'md-and-down')} {
        .navbar-toogle-icon {
            display: block;
        }
        .navbar-navigation-icon {
            display: none;
        }
    }
}
.navbar {
    background-color: var(--v-secondary-base) !important;
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
.v-navigation-drawer {
    width: 200px !important;
}
.v-navigation-drawer__content {
    display: flex !important;
    align-items: center !important;
}
</style>
