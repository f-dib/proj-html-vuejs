<script>
import AppSocial from '../4-Commons/AppSocial.vue';

export default {
    name: 'AppFooter',

    components: {
        AppSocial
    }
}
</script>

<template>
    <div class="my_footer">
        <div class="container-xxl">
            <div>
                <div>
                    <img src="../../../public/img/menulogo.png" alt="">
                </div>
            </div>
            <AppSocial></AppSocial>
        </div>
    </div>
</template>

<style lang="scss">
    .my_footer{
        height: 380px;

        padding-top: 150px;

        background-image: url(../../../public/img/banner1.png);
        background-size: cover;
        background-position: center;
    }
</style>