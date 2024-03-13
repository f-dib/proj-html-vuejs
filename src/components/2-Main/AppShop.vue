<script>
import { data } from '../../js/data';

export default {
    name: 'AppShop',

    data(){
        return{
            data
        }
    }
}
</script>

<template>
    <div class="container-xxl">
        <div class="my_comp9 d-flex flex-column gap-3 text-white" v-for="currentElement in data.shop">
            <div class="ms-5">
                <div class="my_subtitle fs-5 fw-bold w-25 text-center ms-5 ps-3 mb-4">
                    {{ currentElement.subtitle }}
                </div>
                <div class="my_title fw-bold mb-4 lh-sm w-50">
                    {{ currentElement.title }}
                </div>
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
                <div class="w-25 p-3 my_card_shop" v-for="currentItem in currentElement.box">
                    <div class="rounded-2 overflow-hidden my_comp_bg_blu ratio ratio-4x3 py-3 position-relative">
                        <div class="py-4 px-5 d-flex justify-content-center align-items-center">
                            <img class="img-fluid px-3" :src="currentItem.img" alt="">
                        </div>
                        <div class="overlay">
                            <div class="position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-end p-4">
                                <div class="d-flex gap-2 my_social_card">
                                    <div class="my_social d-flex justify-content-center align-items-center">
                                        <img class="my_social_img" src="../../../public/img/image (16).svg" alt="">
                                    </div>
                                    <div class="my_social d-flex justify-content-center align-items-center">
                                        <img class="my_social_img" src="../../../public/img/image (17).svg" alt="">
                                    </div>
                                    <div class="my_social d-flex justify-content-center align-items-center">
                                        <img class="my_social_img" src="../../../public/img/image (18).svg" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="pt-3 pb-2 d-flex gap-2">
                        <div class="my_star"><img class="img-fluid star_green" src="../../../public/img/image (19).svg" alt=""></div>
                        <div class="my_star"><img class="img-fluid star_green" src="../../../public/img/image (19).svg" alt=""></div>
                        <div class="my_star"><img class="img-fluid star_white" src="../../../public/img/image (19).svg" alt=""></div>
                        <div class="my_star"><img class="img-fluid star_white" src="../../../public/img/image (19).svg" alt=""></div>
                    </div>
                    <div class="fw-bold fs-4">
                        {{ currentItem.name }}
                    </div>
                    <div class="d-flex fw-bold">
                        <div class="my_color_primary_green me-2">{{ currentItem.discount }}</div>
                        <div>{{ currentItem.price }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    @use '../../style/variables.scss' as *;

    .my_comp9{
        padding: 120px 0px;

        .my_card_shop {

                &:hover .overlay {
                    display: block !important;
                }

            .overlay {
                display: none !important;

                .my_social_card{
                    transform: scale(0.9);
                }
            }

        }

        .my_star{
            width: 20px;

            .star_green {
                filter: invert(54%) sepia(76%) saturate(5144%) hue-rotate(126deg) brightness(96%) contrast(106%);
            }

            .star_white {
                filter: invert(1);
            }
        }
    }
</style>