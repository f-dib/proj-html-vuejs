<script>
import { data } from '../../js/data';

export default {
    name: 'AppChoose',

    data(){
        return{
            data
        }
    }
}
</script>

<template>
    <div class="container-xxl">
        <div class="my_comp5 d-flex flex-column gap-3 text-white" v-for="currentElement in data.choose">
            <div class="my_subtitle fs-5 fw-bold">
                {{ currentElement.subtitle }}
            </div>
            <div class="my_title fw-bold mb-4 lh-sm w-50">
                {{ currentElement.title }}
            </div>
            <div class="d-flex justify-content-center align-items-center position-relative">
                <div class="position-absolute my_arrow d-flex gap-2">
                    <div class="my_arrow_bg_left d-flex justify-content-center align-items-center">
                        <img class="arrow_left" src="/img/image (11).svg" alt="">
                    </div>
                    <div class="my_arrow_bg_right d-flex justify-content-center align-items-center">
                        <img class="arrow_right" src="/img/image (12).svg" alt="">
                    </div>
                </div>
                <div class="w-25 p-3 position-relative my_choose" v-for="currentBox in currentElement.box">
                    <div class="position-absolute my_bg_secondary_green my_badge fw-bold">
                        {{ currentBox.type }}
                    </div>
                    <div>
                        <img class="my_img-fluid" :src="currentBox.img" alt="">
                    </div>
                    <div class="my_bg_float p-3 my_choose_text">
                        <div class="fw-bold mb-2 fs-5">
                            {{ currentBox.title }}
                        </div>
                        <div>
                            {{ currentBox.text }}
                        </div>
                        <div class="my_round my_play my_play_choose d-flex justify-content-center align-items-center position-absolute">
                            <img class="my_round_img my_play_svg" src="../../../public/img/image (9).svg" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    @use '../../style/variables.scss' as *;


    .my_comp5{
        padding: 120px 0px;

        .my_choose{

            & .my_choose_text {
                transition: all 0.3s ease-in-out;
            }


            .my_badge{
                top: 16px;
                left: 16px;
    
                padding: 5px 10px;
                color: $primaryblu;
            }
    
            .my_play_choose {
                right: 25px;
                bottom: 40px;
                transform: scale(0.9);
            }

            &:hover .my_choose_text{
                background-color: $secondarygreen;

                & .my_play_choose{
                    background-color: $primaryblu;

                    & .my_play_svg{
                        filter: invert(53%) sepia(65%) saturate(6350%) hue-rotate(129deg) brightness(100%) contrast(103%);
                    }
                }
            }
        }

    }
</style>