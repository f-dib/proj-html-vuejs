<script>
export default {
    name: 'AppSocial'
}
</script>

<template>
    <div class="my_social d-flex justify-content-center align-items-center">
        <img class="my_social_img" src="../../../public/img/image (4).svg" alt="">
    </div>
    <div class="my_social d-flex justify-content-center align-items-center">
        <img class="my_social_img" src="../../../public/img/image (4).svg" alt="">
    </div>
    <div class="my_social d-flex justify-content-center align-items-center">
        <img class="my_social_img" src="../../../public/img/image (4).svg" alt="">
    </div>
    <div class="my_social d-flex justify-content-center align-items-center">
        <img class="my_social_img" src="../../../public/img/image (4).svg" alt="">
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
            filter: invert(1);
        }
    }
</style>