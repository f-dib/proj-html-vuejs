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
                    <div class="fw-bold text-white fs-5">
                        {{ currentSearch.type }}
                    </div>
                </div>
            </div>
            <div class="my_box_match rounded-4 d-flex align-items-center gap-4">
                <div class="my_player_bg rounded-3">
                    <div class="p-4 my_comp_bg_blu rounded-3"><img src="../../../public/img/1.png" alt=""></div>
                    <div class="p-4">
                        <div>text</div>
                        <div>text</div>
                    </div>
                </div>
                <div class="my_comp_bg_blu p-5 rounded-3 text-uppercase">vs</div>
                <div class="my_player_bg rounded-3">
                    <div class="p-4 my_comp_bg_blu rounded-3"><img src="../../../public/img/1.png" alt=""></div>
                    <div class="p-4">
                        <div>text</div>
                        <div>text</div>
                    </div>
                </div>
                <div class="text-white">
                    <div>text</div>
                    <div>text</div>
                </div>
                <div class="my_bg_secondary_green p-4 rounded-3">
                    <div>text</div>
                    <div>text</div>
                    <div>text</div>
                </div>
            </div>
            <div class="my_box_match rounded-4 d-flex align-items-center gap-4">
                <div class="my_player_bg rounded-3">
                    <div class="p-4 my_comp_bg_blu rounded-3"><img src="../../../public/img/1.png" alt=""></div>
                    <div class="p-4">
                        <div>text</div>
                        <div>text</div>
                    </div>
                </div>
                <div class="my_comp_bg_blu p-5 rounded-3 text-uppercase">vs</div>
                <div class="my_player_bg rounded-3">
                    <div class="p-4 my_comp_bg_blu rounded-3"><img src="../../../public/img/1.png" alt=""></div>
                    <div class="p-4">
                        <div>text</div>
                        <div>text</div>
                    </div>
                </div>
                <div class="text-white">
                    <div>text</div>
                    <div>text</div>
                </div>
                <div class="my_bg_secondary_green p-4 rounded-3">
                    <div>text</div>
                    <div>text</div>
                    <div>text</div>
                </div>
            </div>
            <div class="my_box_match rounded-4 d-flex align-items-center gap-4">
                <div class="my_player_bg rounded-3">
                    <div class="p-4 my_comp_bg_blu rounded-3"><img src="../../../public/img/1.png" alt=""></div>
                    <div class="p-4">
                        <div>text</div>
                        <div>text</div>
                    </div>
                </div>
                <div class="my_comp_bg_blu p-5 rounded-3 text-uppercase">vs</div>
                <div class="my_player_bg rounded-3">
                    <div class="p-4 my_comp_bg_blu rounded-3"><img src="../../../public/img/1.png" alt=""></div>
                    <div class="p-4">
                        <div>text</div>
                        <div>text</div>
                    </div>
                </div>
                <div class="text-white">
                    <div>text</div>
                    <div>text</div>
                </div>
                <div class="my_bg_secondary_green p-4 rounded-3">
                    <div>text</div>
                    <div>text</div>
                    <div>text</div>
                </div>
            </div>
            <div class="my_box_match rounded-4 d-flex align-items-center gap-4">
                <div class="my_player_bg rounded-3">
                    <div class="p-4 my_comp_bg_blu rounded-3"><img src="../../../public/img/1.png" alt=""></div>
                    <div class="p-4">
                        <div>text</div>
                        <div>text</div>
                    </div>
                </div>
                <div class="my_comp_bg_blu p-5 rounded-3 text-uppercase">vs</div>
                <div class="my_player_bg rounded-3">
                    <div class="p-4 my_comp_bg_blu rounded-3"><img src="../../../public/img/1.png" alt=""></div>
                    <div class="p-4">
                        <div>text</div>
                        <div>text</div>
                    </div>
                </div>
                <div class="text-white">
                    <div>text</div>
                    <div>text</div>
                </div>
                <div class="my_bg_secondary_green p-4 rounded-3">
                    <div>text</div>
                    <div>text</div>
                    <div>text</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    @use '../../style/variables.scss' as *;

    .my_comp4{
        height: 2000px;
        padding: 120px 0px;

        .my_player_bg{
            background-color: $tertiaryblu;
        }

        .my_box_match{
            width: 100%;
            height: 360px;
            padding: 40px;
            border: 1px solid $secondarygreen;
            background-color: $secondaryblu;
        }
    }
</style>