<script>
import AppBestGaming from './AppBestGaming.vue';
import AppArena from './AppArena.vue';
import AppLive from './AppLive.vue';
import AppUpcoming from './AppUpcoming.vue';
import AppChoose from './AppChoose.vue';
import AppBattle from './AppBattle.vue';
import AppTeam from './AppTeam.vue';
import AppClient from './AppClient.vue';
import AppShop from './AppShop.vue';
import AppArticles from './AppArticles.vue';

export default {
    name: 'AppMain',

    components: {
        AppBestGaming,
        AppArena,
        AppLive,
        AppUpcoming,
        AppChoose,
        AppBattle,
        AppTeam,
        AppClient,
        AppShop,
        AppArticles
    }
}
</script>

<template>
    <div class="my_comp_bg_blu">
        <AppBestGaming></AppBestGaming>
    </div>
    <div class="my_bg_float my_comp2_bg">
        <div class="my_comp_overlay_light">
            <AppArena></AppArena>
        </div>
    </div>
    <div class="my_comp3_bg">
        <div class="my_comp_overlay">
            <AppLive></AppLive>
        </div>
    </div>
    <div class="my_comp_bg_blu">
        <AppUpcoming></AppUpcoming>
    </div>
    <div class="my_bg_float my_comp5_bg">
        <div class="my_comp_overlay_light">
            <AppChoose></AppChoose>
        </div>
    </div>
    <div class="my_comp6_bg">
        <div class="my_comp_overlay">
            <AppBattle></AppBattle>
        </div>
    </div>
    <div class="my_comp_bg_blu">
        <AppTeam></AppTeam>
    </div>
    <div class="my_bg_float my_comp8_bg">
        <div class="my_comp_overlay_light">
            <AppClient></AppClient>
        </div>
    </div>
    <div class="my_comp9_bg">
        <div class="my_comp_overlay">
            <AppShop></AppShop>
        </div>
    </div>
    <div class="my_comp_bg_blu">
        <AppArticles></AppArticles>
    </div>
</template>

<style lang="scss">
    .my_comp2_bg{
        background-image: url(../../../public/img/Vector.png);
        background-size: cover;
        background-position: center;
    }

    .my_comp3_bg{
        background-image: url(../../../public/img/v-bg.png);
        background-size: cover;
        background-position: center;
        position: relative;
    }

    .my_comp5_bg{
        background-image: url(../../../public/img/protfolio-vector.png);
        background-size: cover;
        background-position: center;
    }

    .my_comp6_bg{
        background-image: url(../../../public/img/v-bg.png);
        background-size: cover;
        background-position: center;
    }

    .my_comp8_bg{
        background-image: url(../../../public/img/test-grouptwo.png), url(../../../public/img/test-group.png);
        background-size: 60% 70%, 40% 100%;
        background-position: left bottom, right top;
        background-repeat: no-repeat;
    }

    .my_comp9_bg{
        background-image: url(../../../public/img/shop-bg.png);
        background-size: cover;
        background-position: center;
    }

    .my_comp_overlay {
        width: 100%;
        height: 100%;
        background-color: rgba($color: #000000, $alpha: 0.65);
    }

    .my_comp_overlay_light{
        width: 100%;
        height: 100%;
        background-color: rgba($color: #000000, $alpha: 0.3);
    }
</style>