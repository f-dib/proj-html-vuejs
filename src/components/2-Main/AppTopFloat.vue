<script>
import {data} from '../../js/data';

export default {
    name: 'AppTopFloat',

    data(){
        return {
            data
        }
    }
}
</script>

<template>
    <div class="my_bg_float p-4 rounded-3 d-flex align-items-center gap-5 w-100">
        <img class="my_img_top px-3" v-for="currentImg in data.topFloat" :src="currentImg.img" alt="">
    </div>
</template>

<style lang="scss">
    .my_img_top{
        width: 100%;
        height: 100%;
    }
</style>