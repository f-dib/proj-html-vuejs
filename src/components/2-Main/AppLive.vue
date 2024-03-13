<script>
import { data } from '../../js/data';

export default {
    name: 'AppLive',

    data(){
        return{
            data
        }
    }
}
</script>

<template>
    <div class="container-xxl">
        <div class="my_comp3 d-flex gap-3" v-for="currentElement in data.Live">
            <div class="w-50 text-white">
                <div class="w-100 h-100 d-flex justify-content-end align-items-center position-relative">
                    <img class="w-100 rounded-5" src="../../../public/img/v-small1.png" alt="">
                    <div class="my_round my_play my_play_live d-flex justify-content-center align-items-center position-absolute">
                        <img class="my_round_img" src="../../../public/img/image (9).svg" alt="">
                    </div>
                </div>
            </div>
            <div class="w-50">
                <div class="p-3 mb-3">
                    <div class="my_subtitle fs-5 fw-bold">
                        {{ currentElement.subtitle }}
                    </div>
                    <div class="my_title fw-bold lh-sm text-white">
                        {{ currentElement.title }}
                    </div>
                </div>
                <div class="d-flex flex-wrap justify-content-center align-items-center position-relative">
                    <div class="position-absolute my_arrow d-flex gap-2">
                        <div class="my_arrow_bg_left d-flex justify-content-center align-items-center">
                            <img class="arrow_left" src="/img/image (11).svg" alt="">
                        </div>
                        <div class="my_arrow_bg_right d-flex justify-content-center align-items-center">
                            <img class="arrow_right" src="/img/image (12).svg" alt="">
                        </div>
                    </div>
                    <div class="w-50 p-3 text-white" v-for="currentLive in currentElement.box">
                        <div class="my_height rounded-4 overflow-hidden d-flex flex-column justify-content-center align-items-center mb-3">
                            <img class="my_img-fluid" :src="currentLive.img" alt="">
                        </div>
                        <div class="fw-bold mb-2">
                            {{ currentLive.title }}
                        </div>
                        <div>
                            {{ currentLive.text }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    @use '../../style/variables.scss' as *;

    .my_comp3{ 
       padding: 130px 0px;

       .my_play_live{
        top: 50%;
        left: 50%;

        transform: translateX(-50%) translateY(-50%);
        padding: 40px;
       }

       .my_height {
        height: 200px;
       }
    }
</style>