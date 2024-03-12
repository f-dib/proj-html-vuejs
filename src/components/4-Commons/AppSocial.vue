<script>
export default {
    name: 'AppSocial',

    props: {
        getSocial: Object
    }
}
</script>

<template>
    <div class="my_social d-flex justify-content-center align-items-center">
        <img class="my_social_img" :src="getSocial.img" alt="">
    </div>
</template>

<style lang="scss">
    @use '../../style/variables.scss' as *;

    .my_social {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: $secondaryblu;

        .my_social_img{
            width: 20px;
            height: 20px;
            filter: invert(1);
        }
    }

    .my_social:hover {
        background-color: $secondarygreen;
    }
</style>