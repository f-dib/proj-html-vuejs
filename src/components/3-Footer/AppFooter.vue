<script>
import {data} from '../../js/data';

import AppSocial from '../4-Commons/AppSocial.vue';
import AppLink from '../4-Commons/AppLink.vue';

export default {
    name: 'AppFooter',

    components: {
        AppSocial,
        AppLink
    },

    data(){
        return {
            data
        }
    }
}
</script>

<template>
    <div class="my_footer">
        <div class="container-xxl">
            <div class="my_footer_link pb-4 d-flex align-items-center justify-content-between">
                <div>
                    <img src="../../../public/img/menulogo.png" alt="">
                </div>
                <div class="justify-content-lg-center justify-content-end">
                    <ul class="list-unstyled mb-2 mb-lg-0 d-flex justify-content-center gap-3">
                        <AppLink v-for="currentLink in data.genLink" :getLink="currentLink"></AppLink>
                    </ul>
                </div>
            </div>
            <div class="py-4 d-flex align-items-center justify-content-between">
                <div>
                    text
                </div>
                <div class="d-flex gap-3">
                    <AppSocial v-for="currentSocial in data.social" :getSocial="currentSocial"></AppSocial>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .my_footer{
        padding-top: 150px;

        background-image: url(../../../public/img/banner1.png);
        background-size: cover;
        background-position: center;

        .my_footer_link{
            border-bottom: 1px solid white;
        }
    }
</style>