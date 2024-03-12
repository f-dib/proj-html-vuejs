<script>
import {data} from '../../js/data';

export default {
    name: 'AppNav',

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
            <a class="navbar-brand" href="#"><img class="img-fluid" src="../../assets/menulogo.png" alt=""></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                <ul class="navbar-nav mb-2 mb-lg-0 d-flex justify-content-center">
                    <li class="nav-item" v-for="currentLink in data.genLink">
                    <a class="nav-link active text-white text-uppercase" aria-current="page" href="#">{{ currentLink.link }}</a>
                    </li>
                </ul>
            </div>
            <div class="d-flex" role="search">
                search
                cart
            </div>
        </div>
    </nav>
</template>

<style lang="scss">

</style>