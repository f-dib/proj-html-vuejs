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
        <AppNav></AppNav>
        <AppJumbo></AppJumbo>
    </div>
</template>

<style lang="scss">
    .my_header {
        background-image: url(../../assets/banner1.png);
        background-position: center;
        background-size: cover;
    }
</style>
