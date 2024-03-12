<script>
import {data} from '../../js/data';
import AppLink from '../4-Commons/AppLink.vue';

export default {
    name: 'AppNav',

    components: {
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
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <a class="navbar-brand my_small" href="#"><img class="img-fluid" src="../../../public/img/menulogo.png" alt=""></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-lg-center justify-content-end" id="navbarSupportedContent">
                <ul class="navbar-nav mb-2 mb-lg-0 d-flex justify-content-center gap-4">
                    <AppLink v-for="currentLink in data.genLink" :getLink="currentLink"></AppLink>
                </ul>
            </div>
            <div class="d-flex gap-3 position-relative">
                <div v-for="currentCart in data.cart" class="my_round my_cart d-flex justify-content-center align-items-center">
                    <img class="my_round_img my_cart_svg" :src="currentCart.img" alt="">
                </div>
                <div class="my_number_cart rounded-circle d-flex justify-content-center align-items-center position-absolute">
                    <span class="text-white">0</span>
                </div>
            </div>
        </div>
    </nav>
</template>

<style lang="scss">
    @use '../../style/variables.scss' as *;

    .my_small{
        width: 20%;
    }

    .my_cart {
        background-color: white;

        .my_cart_svg{
            filter: invert(28%) sepia(91%) saturate(4046%) hue-rotate(233deg) brightness(100%) contrast(102%);
        }
    }

    .my_number_cart {
        width: 30px;
        height: 30px;
        top: 0;
        right: 0;
        transform: translateY(-25%) translateX(50%);
        background-color: $quaternaryblu;
    }
</style>