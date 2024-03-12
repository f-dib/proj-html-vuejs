<script>
import { data } from '../../js/data';
import AppSocial from '../4-Commons/AppSocial.vue';

export default {
    name: 'AppJumbo',

    components: {
        AppSocial
    },

    data(){
        return {
            data
        }
    }
}
</script>

<template>
    <div class="position-absolute my_social_header d-flex flex-column gap-2">
        <AppSocial v-for="currentSocial in data.social" :getSocial="currentSocial"></AppSocial>
    </div>
    <div class="my_jumbo text-center text-white text-uppercase">
        <h5 class="my_subtitle">welcome to raxg</h5>
        <h1 class="pb-5">are you ready for the next challenge?</h1>
        <div class="d-flex justify-content-center align-items-center gap-3">
            <div class="d-flex"><button class="btn_more fw-bold">Read More <span><img class="my_arrow" src="../../../public/img/image (8).svg" alt=""></span></button></div>
            <div class="my_round my_play d-flex justify-content-center align-items-center">
                <img class="my_round_img my_play_svg" src="../../../public/img/image (9).svg" alt="">
            </div>
        </div>
    </div>
</template>

<style lang="scss">

    .my_social_header{
        top: 50%;
        left: 0%;

        transform: translateY(-50%) translateX(-100%);
    }

    .my_jumbo{
        padding: 300px;
    }
</style>