<script>
export default {
    name: 'AppComp3'
}
</script>

<template>
    <div class="my_comp3 container-xxl d-flex gap-3">
        <div class="w-50 text-white">
            <div class="w-100 h-100 d-flex justify-content-end align-items-center">
                <img class="w-100 h-75 rounded-5" src="../../../public/img/v-small1.png" alt="">
            </div>
        </div>
        <div class="w-50">
            <div class="p-3 mb-3">
                <div>
                    text
                </div>
                <div>
                    text
                </div>
            </div>
            <div class="d-flex flex-wrap justify-content-center align-items-center position-relative">
                <div class="w-50 p-3">
                    <div class="my_height rounded-4 overflow-hidden d-flex flex-column justify-content-center align-items-center">
                        <img class="my_img-fluid" src="../../../public/img/v-small1.png" alt="">
                    </div>
                    <div>
                            text
                        </div>
                        <div>
                            text
                        </div>
                </div>
                <div class="w-50 p-3">
                    <div class="my_height rounded-4 overflow-hidden d-flex flex-column justify-content-center align-items-center">
                        <img class="my_img-fluid" src="../../../public/img/v-small2.png" alt="">
                    </div>
                    <div>
                            text
                        </div>
                        <div>
                            text
                        </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .my_comp3{
       height: 750px; 
       padding: 130px 0px;

       .my_height {
        height: 200px;
       }
    }
</style>