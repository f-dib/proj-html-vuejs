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
    <div class="position-absolute my_social_header d-flex flex-column gap-2">
        <AppSocial></AppSocial>
    </div>
    <div class="my_jumbo text-center text-white text-uppercase">
        <h5 class="my_subtitle">welcome to raxg</h5>
        <h1>are you ready for the next challenge?</h1>
    </div>
</template>

<style lang="scss">

    .my_social_header{
        top: 50%;
        left: 0%;

        transform: translateY(-50%) translateX(-100%);
    }

    .my_jumbo{
        padding: 150px;
    }
</style>