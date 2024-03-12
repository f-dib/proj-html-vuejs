<script>
export default {
    name: 'AppLink',

    props: {
        getLink: Object
    }
}
</script>

<template>
    <li class="nav-item">
        <a class="nav-link active text-white text-uppercase" aria-current="page" href="#"><h5>{{ getLink.link }}</h5></a>
    </li>
</template>

<style lang="scss">
    
</style>