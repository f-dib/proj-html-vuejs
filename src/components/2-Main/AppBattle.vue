<script>
import { data } from '../../js/data';
export default {
    name: 'AppBattle',

    data(){
        return{
            data
        }
    }
}
</script>

<template>
    <div class="container-xxl">
        <div class="my_comp6 d-flex flex-column gap-3 text-white" v-for="currentElement in data.battle">
            <div class="my_subtitle fs-5 fw-bold">
                {{ currentElement.subtitle }}
            </div>
            <div class="my_title fw-bold mb-5 lh-sm w-50">
                {{ currentElement.title }}
            </div>
            <div class="d-flex justify-content-center align-items-center gap-4 position-relative">
                <div class="position-absolute my_arrow d-flex gap-2">
                    <div class="my_arrow_bg_left d-flex justify-content-center align-items-center">
                        <img class="arrow_left" src="/img/image (11).svg" alt="">
                    </div>
                    <div class="my_arrow_bg_right d-flex justify-content-center align-items-center">
                        <img class="arrow_right" src="/img/image (12).svg" alt="">
                    </div>
                </div>
                <div class="my_w p-3 d-flex flex-column align-items-center my_bg_float rounded-2" v-for="currentBattle in currentElement.box">
                    <div class="my_comp_bg_blu rounded-4 my_manage_img position-relative mb-5">
                        <img class="my_img-fluid" :src="currentBattle.img" alt="">
                        <img class="my_overlay" :src="currentBattle.img" alt="">
                    </div>
                    <div class="fs-3 fw-bold mb-4 lh-sm">
                        {{ currentBattle.title }}
                    </div>
                    <div class="d-flex gap-3 position-relative mb-2">
                        <div v-for="currentStream in data.stream" class="my_stream d-flex justify-content-center align-items-center">
                            <img class="my_stream_svg" :src="currentStream.img" alt="">
                        </div>
                    </div>
                    <div class="fs-1 fw-bold">
                        {{ currentBattle.hour }}
                    </div>
                    <div class="fw-bold mb-4">
                        {{ currentBattle.data }}
                    </div>
                    <div class="mb-5">
                        <button class="btn_more fw-bold">View More</button>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .my_comp6{
        padding: 120px 0px;
    }

    .my_w{
        width: calc(100% / 3);

        .my_manage_img{
            width: 90%;
            height: 300px;

            padding: 40px 90px;

            .my_overlay {
                position: absolute;
                top: 0;
                right: 0;
                width: 60%;
                height: 100%;
                opacity: 0.2;
            }
        }
    }
</style>