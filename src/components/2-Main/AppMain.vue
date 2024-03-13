<script>
import AppBestGaming from './AppBestGaming.vue';
import AppArena from './AppArena.vue';
import AppLive from './AppLive.vue';
import AppUpcoming from './AppUpcoming.vue';
import AppChoose from './AppChoose.vue';
import AppBattle from './AppBattle.vue';
import AppComp7 from './AppComp7.vue';
import AppComp8 from './AppComp8.vue';
import AppComp9 from './AppComp9.vue';
import AppComp10 from './AppComp10.vue';

export default {
    name: 'AppMain',

    components: {
        AppBestGaming,
        AppArena,
        AppLive,
        AppUpcoming,
        AppChoose,
        AppBattle,
        AppComp7,
        AppComp8,
        AppComp9,
        AppComp10
    }
}
</script>

<template>
    <div class="my_comp_bg_blu">
        <AppBestGaming></AppBestGaming>
    </div>
    <div class="my_bg_float my_comp2_bg">
        <AppArena></AppArena>
    </div>
    <div class="my_comp3_bg">
        <AppLive></AppLive>
    </div>
    <div class="my_comp_bg_blu">
        <AppUpcoming></AppUpcoming>
    </div>
    <div class="my_bg_float my_comp5_bg">
        <AppChoose></AppChoose>
    </div>
    <div class="my_comp6_bg">
        <AppBattle></AppBattle>
    </div>
    <div class="my_comp_bg_blu">
        <AppComp7></AppComp7>
    </div>
    <div class="my_bg_float my_comp8_bg">
        <AppComp8></AppComp8>
    </div>
    <div class="my_comp9_bg">
        <AppComp9></AppComp9>
    </div>
    <div class="my_comp_bg_blu">
        <AppComp10></AppComp10>
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

    // .my_comp3_bg::before {
    // position: absolute;
    // content: "";
    // top: 0;
    // left: 0;
    // right: 0;
    // bottom: 0;
    // background: rgba(0, 0, 0, 0.5);
    // }

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
</style>