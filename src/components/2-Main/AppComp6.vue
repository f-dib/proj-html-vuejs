<script>
export default {
    name: 'AppComp6'
}
</script>

<template>
    <div class="my_comp6 container-xxl d-flex flex-column gap-3 text-white">
        <div>text</div>
        <div class="mb-5">text</div>
        <div class="d-flex justify-content-center align-items-center gap-4 position-relative">
            <div class="my_w p-3 d-flex flex-column align-items-center gap-3 my_bg_float rounded-2">
                <div class="my_comp_bg_blu rounded-4 my_manage_img">
                    <img class="my_img-fluid" src="../../../public/img/1.png" alt="">
                </div>
                <div>
                    text
                </div>
                <div>
                    text
                </div>
                <div>
                    text
                </div>
                <div>
                    text
                </div>
                <div>
                    text
                </div>
            </div>
            <div class="my_w p-3 d-flex flex-column align-items-center gap-3 my_bg_float rounded-2">
                <div class="my_comp_bg_blu rounded-4 my_manage_img">
                    <img class="my_img-fluid" src="../../../public/img/1.png" alt="">
                </div>
                <div>
                    text
                </div>
                <div>
                    text
                </div>
                <div>
                    text
                </div>
                <div>
                    text
                </div>
                <div>
                    text
                </div>
            </div>
            <div class="my_w p-3 d-flex flex-column align-items-center gap-3 my_bg_float rounded-2">
                <div class="my_comp_bg_blu rounded-4 my_manage_img">
                    <img class="my_img-fluid" src="../../../public/img/1.png" alt="">
                </div>
                <div>
                    text
                </div>
                <div>
                    text
                </div>
                <div>
                    text
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
</template>

<style lang="scss">
    .my_comp6{
        height: 1150px;
        padding: 120px 0px;
    }

    .my_w{
        width: calc(100% / 3);

        .my_manage_img{
            width: 90%;
            padding: 40px 90px;
        }
    }
</style>