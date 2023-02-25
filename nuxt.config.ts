import colors from 'vuetify/es5/util/colors';
import { getFileName } from './env.config';
import * as dotenv from 'dotenv';
dotenv.config({
    path: `./environment/${getFileName()}`,
});
export default {
    srcDir: './src',
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        titleTemplate: '%s - frontend',
        title: 'frontend',
        htmlAttrs: {
            lang: 'en',
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css?family=Lato:400,700',
            },
        ],
    },
    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ['~/assets/helper.scss', '~/assets/theme.scss'],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        { src: '~/plugins/services/index.ts' },
        { src: '~/plugins/vuex-persist.ts', mode: 'client' },
        { src: '~/plugins/axios.ts', mode: 'client' },
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,
    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/typescript
        '@nuxt/typescript-build',
        // https://go.nuxtjs.dev/vuetify
        '@nuxtjs/vuetify',
        ['@nuxtjs/dotenv', { filename: `../environment/${getFileName()}` }],
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        [
            '@nuxtjs/i18n',
            {
                defaultLocale: 'en',
                locales: [
                    { code: 'en', iso: 'en-US', file: 'en.json' },
                    { code: 'fr', iso: 'ft-FR', file: 'fr.json' },
                ],
                lazy: true,
                langDir: '~/locales/',
            },
        ],
        '@nuxtjs/axios',
        '@nuxtjs/auth-next',
        'vue-toastification/nuxt',
        'cookie-universal-nuxt',
    ],
    i18n: {
        vueI18nLoader: true,
    },

    toast: {},

    // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
    vuetify: {
        customVariables: ['~/assets/variables.scss'],
        treeShake: true,
        theme: {
            options: {
                customProperties: true,
            },
            themes: {
                light: {
                    primary: '#163767',
                    secondary: '#6786FE',
                    'secondary-light': '#E8EDFF',
                    accent: '#DA9FF9',
                    'accent-light': '#F9F1FE',
                    dark: '#691EF2',
                    info: colors.teal.lighten1,
                    warning: colors.amber.base,
                    error: colors.deepOrange.accent4,
                    success: colors.green.accent3,
                },
            },
        },
    },

    axios: {
        withCredentials: true,
    },
    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},
};
