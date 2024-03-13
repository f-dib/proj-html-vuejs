<script>
import { data } from '../../js/data';

export default {
    name: 'AppClient',

    data(){
        return{
            data
        }
    }
}
</script>

<template>
    <div class="container-xxl">
        <div class="my_comp8 d-flex flex-column gap-3 text-white" v-for="currentElement in data.client">
            <div class="my_subtitle fs-5 fw-bold w-25 text-center ms-5 ps-3">
                {{ currentElement.subtitle }}
            </div>
            <div class="my_title fw-bold mb-4 lh-sm w-50">
                {{ currentElement.title }}
            </div>
            <div class="d-flex justify-content-center align-items-center gap-3 position-relative">
                <div class="position-absolute my_arrow_client_left d-flex justify-content-center align-items-center">
                    <img class="arrow_left" src="/img/image (11).svg" alt="">
                </div>
                <div class="position-absolute my_arrow_bg_right my_arrow_client_right d-flex justify-content-center align-items-center">
                    <img class="arrow_right" src="/img/image (12).svg" alt="">
                </div>
                <div class="w-25" v-for="currentClient in currentElement.box">
                    <div class="my_client position-relative">
                        <img class="my_img-fluid object-fit-cover" :src="currentClient.img" alt="">
                        <div class="overlay">
                            <div class="position-absolute top-0 start-0 w-100 h-100 p-4 pt-5 my_client_overlay">
                                <div class="my_cit_client position-absolute"><img class="my_cit_svg" src="../../../public/img/image (15).svg" alt=""></div>
                                <p class="mt-4 fs-5">{{ currentClient.text }}</p>
                                <div class="my_subtitle fw-bold fs-4">{{ currentClient.name }}</div>
                                <div>{{ currentClient.rule }}</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    @use '../../style/variables.scss' as *;

    .my_comp8 {
        padding: 120px 0px;

        .my_arrow_client_left {
            top: 50%;
            left: 5%;
            transform: translateY(-50%);
            background-color: white;
            width: 35px;
            height: 35px;
            border-radius: 50%;
            z-index: 5;

            .arrow_left{
            width: 15px;
            height: 15px;
            }
        }

        .my_arrow_client_right {
            top: 50%;
            right: 5%;
            transform: translateY(-50%);
            background-color: $secondarygreen;
            width: 35px;
            height: 35px;
            border-radius: 50%;
            z-index: 5;

            .arrow_right{
            width: 15px;
            height: 15px;
            filter: invert(1);
            }
        }

        .my_client{
            height: 400px;
            

            .overlay {
                opacity: 0;
                transition: all 0.2s ease-in-out;
            }

            &:hover .overlay {
                opacity: 1;
                
                .my_client_overlay {
                    background-color: $primaryblu;

                    .my_cit_client{
                        width: 50px;
                        top: 10px;
                        left: 20px;

                        .my_cit_svg {
                            filter: invert(58%) sepia(20%) saturate(4772%) hue-rotate(115deg) brightness(99%) contrast(96%);
                        }
                    }
                }
            }
        }
    }
</style>