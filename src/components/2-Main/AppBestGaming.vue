<script>
import { data } from '../../js/data';
import AppTopFloat from './AppTopFloat.vue';

export default {
    name: 'AppBestGaming',

    components: {
        AppTopFloat
    },

    data(){
        return{
            data
        }
    }
}
</script>

<template>
    <div class="position-relative my_comp1 container-xxl">
        <AppTopFloat class="position-absolute my_top_float"></AppTopFloat>
        <div class="d-flex gap-5" v-for="currentElement in data.bestGaming">
            <div class="w-50">
                <div class="my_comp1_img position-absolute">
                    <img class="img-fluid" src="../../../public/img/exprience-shape.png" alt="">
                </div>
                <div class="my_exprince position-relative">
                    <img class="position-absolute my_shape1" src="../../../public/img/shape1.png" alt="">
                    <img class="position-absolute z-2 my_exprince_img" :src="currentElement.img" alt="">
                    <img class="position-absolute my_shape2" src="../../../public/img/shape2.png" alt="">
                </div>
            </div>
            <div class="w-50 text-white">
                <div class="my_subtitle fs-5">
                    {{ currentElement.subtitle }}
                </div>
                <div class="my_title fw-bold mb-4">
                    {{ currentElement.title }}
                </div>
                <div class="fs-5 mb-3">
                    {{ currentElement.text }}
                </div>
                <div class="fs-5 mb-4">
                    {{ currentElement.text2 }}
                </div>
                <div v-for="currentBullet in currentElement.bullet" class="d-flex me-2 align-items-center mb-3">
                    <div class="my_round my_bullet d-flex justify-content-center align-items-center me-2">
                        <img class="my_round_img my_bullet_svg" :src="currentBullet.img" alt="">
                    </div>
                    <div class="fw-bold my_bullet_text">
                        {{ currentBullet.bull }}
                    </div>
                </div>
                <div class="d-flex justify-content-start align-items-center gap-3 pt-4">
                    <div class="d-flex"><button class="btn_more fw-bold">Read More <span><img class="my_arrow" src="../../../public/img/image (8).svg" alt=""></span></button></div>
                    <div class="my_round my_play d-flex justify-content-center align-items-center">
                        <img class="my_round_img my_play_svg" src="../../../public/img/image (9).svg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    @use '../../style/variables.scss' as *;

    .my_comp1{
        padding: 250px 60px 120px;


        .my_top_float{
            top: 0;
            left: 50%;
    
            transform: translateX(-50%) translateY(-50%);
        }

        .my_comp1_img{
            width: 130px;

            top: 40%;
            left: 0%;

            transform: translateX(-50%) translateY(-90%);

            z-index: 10;
        }

        .my_exprince{
            width: 500px;
            height: 500px;

            .my_shape1{
                width: 90%;
                top: 7%;
                left: -8%;
            }

            .my_exprince_img{
                left: 3%;
                top: 18%;
                width: 500px;
                height: 500px;
            }

            .my_shape2{
                width: 50%;
                bottom: -26%;
                right: -11%;
            }
        }
    }

    .my_bullet{
        width: 30px;
        height: 30px;
        border: 1px solid $primarygreen;
        
        .my_bullet_svg{
            width: 15px;
            width: 15px;
            filter: invert(38%) sepia(98%) saturate(944%) hue-rotate(116deg) brightness(96%) contrast(101%);
        }
    }

    .my_bullet_text{
        font-size: 18px;
    }

</style>