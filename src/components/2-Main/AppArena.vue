<script>
import { data } from '../../js/data';

export default {
    name: 'AppArena',

    data(){
        return{
            data
        }
    }
}
</script>

<template>
    <div class="container-xxl">
        <div class="my_comp2 d-flex" v-for="currentElement in data.Arena">
            <div class="w-50 text-white d-flex flex-column justify-content-center">
                <div class="my_subtitle fs-5">
                    {{ currentElement.subtitle }}
                </div>
                <div class="my_title fw-bold mb-4 lh-sm">
                    {{ currentElement.title }}
                </div>
                <div class="fs-5 mb-3">
                    {{ currentElement.text }}
                </div>
            </div>
            <div class="w-50 d-flex flex-wrap justify-content-center align-items-center">
                <div v-for="currentBox in currentElement.box" class="w-50 p-3">
                    <div class="my_bg_tertiary_blu my_arena_box px-3 rounded-4 d-flex flex-column justify-content-center align-items-center">
                        <div class="my_box my_bg_float px-3 py-4 rounded-circle d-flex justify-content-center align-content-center mb-3">
                            <img class="img-fluid_box" :src="currentBox.img" alt="">
                        </div>
                        <div class="my_box_title fw-bold fs-4 mb-2">
                            {{ currentBox.title }}
                        </div>
                        <div class="text-center">
                            {{ currentBox.text }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    @use '../../style/variables.scss' as *;

    .my_comp2{
        padding: 100px 0px;

        .my_arena_box{
    
            transition: all 0.3s ease-in-out;
            padding: 50px 0px;
            color: white;

            .my_box{
    
                
                width: 110px;
                height: 110px;
    
                .img-fluid_box {
                    width: 70px;
                }
            }

               
            &:hover {
                background-color: $secondarygreen;

                color: $primaryblu;
            }

            &:hover .my_box{
                    transform: scale(1.1)
            }
        }
    }
</style>