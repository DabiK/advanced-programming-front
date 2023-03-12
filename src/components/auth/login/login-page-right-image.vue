<template>
    <v-container class="right-container">
        <div class="right-container-img">
            <v-img class="students-img" src="images/login-page-students.jpg"></v-img>
        </div>
        <!-- <h1 class="right-container-text">{{ $t('login.manage-your-students') }}</h1> -->
    </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component({
    name: 'login-page-right-image',
})
export default class LoginPageRightImage extends Vue {}
</script>

<style lang="scss" scoped>
@import '~vuetify/src/styles/settings/_variables';

.right-container {
    width: 80%;
    border-radius: 50px 0px 50px 0px;
    border: none;
    margin-right: 0px;
    // background: url('images/login-page-students.jpg') no-repeat center center !important;
    text-align: center;
    .right-container-img {
        height: 90vh;
        .students-img {
            border-radius: 50px 0px 50px 0px;
            height: 100%;
            width: 100%;
        }
    }
    .right-container-text {
        color: white;
        font-weight: bold;
        position: relative;
        top: 20%;
        text-align: center;
    }
}
</style>
