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
                <ul class="navbar-nav mb-2 mb-lg-0 d-flex justify-content-center">
                    <AppLink v-for="currentLink in data.genLink" :getLink="currentLink"></AppLink>
                </ul>
            </div>
            <div class="d-flex my_small justify-content-end" role="search">
                search
                cart
            </div>
        </div>
    </nav>
</template>

<style lang="scss">
    .my_small{
        width: 20%;
    }
</style>