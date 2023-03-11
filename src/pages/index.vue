

<template>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { REDIRECT_TO_LOGIN_MIDDLEWARE } from '~/middleware/redirect-to-login';

@Component({
    name: 'Index',
    middleware: REDIRECT_TO_LOGIN_MIDDLEWARE,
})
export default class Index extends Vue {
}
</script>
</script>
