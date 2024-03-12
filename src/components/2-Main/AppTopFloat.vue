<script>
import {data} from '../../js/data';

export default {
    name: 'AppTopFloat',

    data(){
        return {
            data
        }
    },
    methods: {
        topImg(currentElement){
            return(
                `../../assets/${currentElement}`,
                console.log(`../../assets/${currentElement}`)
            )         
        }
    }
}
</script>

<template>
    <div class="my_bg_float p-4 rounded-3 d-flex gap-5">
        <img class="my_img_top" v-for="currentImg in data.topFloat" :src="topImg(currentImg.img)" alt="">
    </div>
</template>

<style lang="scss">
    .my_img_top{
        width: 60px;
        height: 80px;
    }
</style>