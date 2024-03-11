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
    <AppNav></AppNav>
    <AppJumbo></AppJumbo>
</template>

<style lang="scss">

</style>
