<script>
import { data } from '../../js/data';

export default {
    name: 'AppUpcoming',

    data(){
        return{
            data
        }
    }
}
</script>

<template>
    <div class="container-xxl">
        <div class="my_comp4 d-flex flex-column gap-4 align-items-center" v-for="currentElement in data.Upcoming">
            <div class="my_subtitle fs-5 fw-bold">
                {{ currentElement.subtitle }}
            </div>
            <div class="my_title fw-bold mb-4 lh-sm text-white">
                {{ currentElement.title }}
            </div>
            <div class="d-flex gap-4 mb-3">
                <div v-for="currentSearch in currentElement.filter">
                    <div class="fw-bold text-white fs-5 my_type_search">
                        {{ currentSearch.type }}
                    </div>
                </div>
            </div>
            <div class="my_box_match rounded-4 d-flex align-items-center gap-4" v-for="currentMatch in currentElement.box">
                <div class="my_player_bg rounded-3 overflow-hidden">
                    <div class="my_layer">
                        <div class="p-4 my_comp_bg_blu rounded-3 w-100 my_card_match d-flex justify-content-center"><img class="img-fluid" :src="currentMatch.img1" alt=""></div>
                        <div class="px-4 py-3">
                            <div class="my_subtitle fs-5 fw-bold">
                                {{ currentMatch.country1 }}
                            </div>
                            <div class="fs-4 fw-bold lh-sm text-white">
                                {{ currentMatch.name1 }}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="my_comp_bg_blu p-4 rounded-3 text-uppercase fs-3 fw-bold my_color_primary_green">vs</div>
                <div class="my_player_bg rounded-3 overflow-hidden">
                    <div class="my_layer">
                        <div class="p-4 my_comp_bg_blu rounded-3 w-100 my_card_match d-flex justify-content-center"><img class="img-fluid" :src="currentMatch.img2" alt=""></div>
                        <div class="px-4 py-3">
                            <div class="my_subtitle fs-5 fw-bold">
                                {{ currentMatch.country2 }}
                            </div>
                            <div class="fs-4 fw-bold lh-sm text-white">
                                {{ currentMatch.name2 }}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="text-white description_width">
                    <div class="fs-2 fw-bold mb-4 lh-sm">
                        {{ currentMatch.title }}
                    </div>
                    <div class="fs-5 mb-3">
                        {{ currentMatch.text }}
                    </div>
                </div>
                <div class="my_comp_bg_blu p-4 rounded-3 text-center text-white my_match_data">
                    <div class="fs-1 fw-bold">
                        {{ currentMatch.hour }}
                    </div>
                    <div class="fw-bold mb-3 text-nowrap">
                        {{ currentMatch.date }}
                    </div>
                    <div class="d-flex justify-content-center gap-3 position-relative mb-2">
                        <div v-for="currentStream in data.stream" class="my_stream d-flex justify-content-center align-items-center">
                            <img class="my_stream_svg" :src="currentStream.img" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    @use '../../style/variables.scss' as *;

    .my_comp4{
        padding: 120px 0px;

        .my_type_search:hover {
            color: $primarygreen !important;
            cursor: pointer;
        }

        .my_player_bg{
            width: 220px;
            height: 300px;
            background-color: $tertiaryblu;

            .my_layer{
                width: 100%;
                height: 100%;
                background-color: rgba($color: #000000, $alpha: 0.2);
            }

            .my_card_match{
                height: 200px;
            }
        }

        .my_box_match{
            width: 100%;
            height: 360px;
            padding: 40px;
            border: 1px solid $secondarygreen;
            background-color: $secondaryblu;

            &:hover {
                background-color: $tertiaryblu;
                border: none;

                & .my_match_data{
                    background-color: $secondarygreen;
                    color: $primaryblu !important;
                }

                & .my_stream{
                    background-color: $primaryblu;

                    & .my_stream_svg{
                        filter: invert(1);
                    }
                }
            }
        }

        .description_width{
            width: 35%;
        }
    }
</style>