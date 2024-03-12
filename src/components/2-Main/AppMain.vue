<script>
import AppComp1 from './AppComp1.vue';
import AppComp2 from './AppComp2.vue';
import AppComp3 from './AppComp3.vue';
import AppComp4 from './AppComp4.vue';
import AppComp5 from './AppComp5.vue';
import AppComp6 from './AppComp6.vue';
import AppComp7 from './AppComp7.vue';
import AppComp8 from './AppComp8.vue';
import AppComp9 from './AppComp9.vue';
import AppComp10 from './AppComp10.vue';
import AppMailFloat from './AppMailFloat.vue';

export default {
    name: 'AppMain',

    components: {
        AppComp1,
        AppComp2,
        AppComp3,
        AppComp4,
        AppComp5,
        AppComp6,
        AppComp7,
        AppComp8,
        AppComp9,
        AppComp10,
        AppMailFloat
    }
}
</script>

<template>
    <div class="my_comp_bg_blu">
        <AppComp1></AppComp1>
    </div>
    <div class="my_bg_float my_comp2_bg">
        <AppComp2></AppComp2>
    </div>
    <div class="my_comp3_bg">
        <AppComp3></AppComp3>
    </div>
    <div class="my_comp_bg_blu">
        <AppComp4></AppComp4>
    </div>
    <AppComp5></AppComp5>
    <AppComp6></AppComp6>
    <AppComp7></AppComp7>
    <AppComp8></AppComp8>
    <AppComp9></AppComp9>
    <AppComp10></AppComp10>
    <AppMailFloat></AppMailFloat>
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
    }
</style>