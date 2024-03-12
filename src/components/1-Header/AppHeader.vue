<script>
import AppNav from './AppNav.vue';
import AppJumbo from './AppJumbo.vue'

export default {
    name: 'AppHeader',

    components:{
        AppNav,
        AppJumbo
    }
}
</script>

<template>
    <div class="my_header">
        <div class="container-xxl">
            <AppNav></AppNav>
            <div class="position-relative">
                <AppJumbo></AppJumbo>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .my_header {
        background-image: url(../../../public/img/banner1.png);
        background-position: center;
        background-size: cover;
    }
</style>
