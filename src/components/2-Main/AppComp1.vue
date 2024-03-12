<script>
import AppTopFloat from './AppTopFloat.vue';

export default {
    name: 'AppComp1',

    components: {
        AppTopFloat
    }
}
</script>

<template>
    <div class="position-relative my_comp1 container-xxl">
        <AppTopFloat class="position-absolute my_top_float"></AppTopFloat>
        <div class="d-flex gap-5">
            <div class="w-50">
                <div class="my_comp1_img position-absolute">
                    <img class="img-fluid" src="../../../public/img/exprience-shape.png" alt="">
                </div>
                <div class="my_exprince position-relative">
                    <img class="position-absolute my_shape1" src="../../../public/img/shape1.png" alt="">
                    <img class="position-absolute top-0 left-0 z-2 my_exprince_img" src="../../../public/img/exprince.jpg" alt="">
                    <img class="position-absolute my_shape2" src="../../../public/img/shape2.png" alt="">
                </div>
            </div>
            <div class="w-50 text-white">
                <div>
                    subtitle
                </div>
                <div>
                    text
                </div>
                <div>
                    bullet
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">

    .my_comp1{
        padding: 250px 60px 120px;


        .my_top_float{
            top: 0;
            left: 50%;
    
            transform: translateX(-50%) translateY(-50%);
        }

        .my_comp1_img{
            width: 130px;

            top: 40%;
            left: 0%;

            transform: translateX(-50%) translateY(-115%);

            z-index: 10;
        }

        .my_exprince{
            width: 500px;
            height: 500px;

            .my_shape1{
                width: 90%;
                top: -8%;
                left: -8%;
            }

            .my_exprince_img{
                width: 500px;
            }

            .my_shape2{
                width: 50%;
                bottom: -8%;
                right: -8%;
            }
        }
    }

</style>