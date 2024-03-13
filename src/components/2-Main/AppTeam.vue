<script>
import { data } from '../../js/data';
import AppSocial from '../4-Commons/AppSocial.vue';

export default {
    name: 'AppTeam',

    components: {
        AppSocial
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
        <div class="my_comp7 d-flex flex-column gap-3 text-white" v-for="currentElement in data.team">
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
                <div class="w-25 my_bg_tertiary_blu my_team_card" v-for="currentMember in currentElement.box">
                    <div class="my_team_img position-relative">
                        <img class="my_img-fluid" :src="currentMember.img" alt="">
                        <div class="overlay">
                            <div class="position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-end p-2">
                                <div class="d-flex gap-3 my_social_card">
                                    <AppSocial v-for="currentSocial in data.social" :getSocial="currentSocial"></AppSocial>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="text-center p-4 my_team">
                        <div class="fw-bold mb-2 fs-5">
                            {{ currentMember.name }}
                        </div>
                        <div>
                            {{ currentMember.rule }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    @use '../../style/variables.scss' as *;

    .my_comp7{
        padding: 120px 0px;

        .my_team_card {

            &:hover {
                background-color: $secondarygreen;

                & .overlay {
                    display: block !important;
                }
            }

            .overlay {
                display: none !important;

                .my_social_card{
                    transform: scale(0.7);
                }
            }

        }
    }
</style>