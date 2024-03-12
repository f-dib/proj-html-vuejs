<script>
import AppSocial from '../4-Commons/AppSocial.vue';

export default {
    name: 'AppJumbo',

    components: {
        AppSocial
    }
}
</script>

<template>
        <AppSocial></AppSocial>
        <div class="my_jumbo text-center text-white text-uppercase">
            <h5 class="my_subtitle">welcome to raxg</h5>
            <h1>are you ready for the next challenge?</h1>
        </div>
</template>

<style lang="scss">
    .my_jumbo{
        padding: 150px;
    }
</style>