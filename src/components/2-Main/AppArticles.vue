<script>
import { data } from '../../js/data';
import AppMailFloat from './AppMailFloat.vue';

export default {
    name: 'AppArticles',

    components: {
        AppMailFloat
    },

    data(){
        return{
            data
        }
    }
}
</script>

<template>
    <div class="container-xxl">
        <div class="my_comp10 d-flex flex-column gap-3 text-white position-relative" v-for="currentElement in data.articles">
            <div class="my_subtitle fs-5 fw-bold">
                {{ currentElement.subtitle }}
            </div>
            <div class="my_title fw-bold mb-4 lh-sm w-50 pe-4">
                {{ currentElement.title }}
            </div>
            <div class="d-flex justify-content-center align-items-center gap-3 position-relative">
                <div class="position-absolute my_arrow d-flex gap-2">
                    <div class="my_arrow_bg_left d-flex justify-content-center align-items-center">
                        <img class="arrow_left" src="/img/image (11).svg" alt="">
                    </div>
                    <div class="my_arrow_bg_right d-flex justify-content-center align-items-center">
                        <img class="arrow_right" src="/img/image (12).svg" alt="">
                    </div>
                </div>
                <div class="w-25 my_bg_float rounded-3 overflow-hidden my_card_articles" v-for="currentArticle in currentElement.box">
                    <div class="my_img_art_height">
                        <img class="my_img-fluid my_articles_img" :src="currentArticle.img" alt="">
                    </div>
                    <div class="text-center p-4">
                        <div class="fs-4 fw-bold mb-4 lh-sm my_name_articles">
                            {{ currentArticle.name }}
                        </div>
                        <div class="mb-2 d-flex gap-5 justify-content-center align-items-center mb-4">
                            <div class="my_data_stream d-flex justify-content-center align-items-center gap-1">
                                <img class="img-fluid my_stream_svg" src="../../../public/img/image (13).svg" alt=""> <span class="text-nowrap">By Admin</span>
                                <span class="ms-2 my_color_primary_green">|</span>
                            </div>
                            
                            <div class="my_data_stream d-flex gap-1">
                                <img class="img-fluid my_stream_svg" src="../../../public/img/image (21).svg" alt=""> <span class="text-nowrap">By Admin</span>
                            </div>
                        </div>
                        <div class="d-flex justify-content-center align-items-center gap-3 mb-3">
                            <div class="d-flex"><button class="btn_more fw-bold">Read More <span><img class="my_arrow" src="../../../public/img/image (8).svg" alt=""></span></button></div>
                        </div>
                    </div>
                </div>
            </div>
            <AppMailFloat class="position-absolute my_mail"></AppMailFloat>
        </div>
    </div>
</template>

<style lang="scss">
    @use '../../style/variables.scss' as *;

    .my_comp10 {
        padding: 120px 0px 200px;


        .my_card_articles {

            .my_img_art_height{
                height: 280px;
                overflow: hidden;
            }

            &:hover {

                & .my_articles_img{
                    transform: scale(1.1);
                }

                & .my_name_articles{
                    color: $primarygreen !important;
                }
            }
        }

        .my_data_stream{
            width: 10px;

            

            .my_stream_svg{
                filter: invert(47%) sepia(44%) saturate(6826%) hue-rotate(128deg) brightness(99%) contrast(101%);
            }
        }

        .my_mail {
            bottom: 0;
            left: 50%;
    
            transform: translateX(-50%) translateY(50%);
        }
    }
</style>