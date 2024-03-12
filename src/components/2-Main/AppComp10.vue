<script>
import AppMailFloat from './AppMailFloat.vue';

export default {
    name: 'AppComp10',

    components: {
        AppMailFloat
    }
}
</script>

<template>
    <div class="my_comp10 container-xxl d-flex flex-column gap-3 text-white position-relative">
        <div>text</div>
        <div class="mb-5">text</div>
        <div class="d-flex justify-content-center align-items-center gap-3 position-relative">
            <div class="w-25 my_bg_float rounded-3 overflow-hidden">
                <div>
                    <img class="my_img-fluid" src="../../../public/img/b1.png" alt="">
                </div>
                <div class="text-center p-4">
                    <div class="mb-2">
                        text
                    </div>
                    <div class="mb-2">
                        text
                    </div>
                    <div>
                        text
                    </div>
                </div>
            </div>
            <div class="w-25 my_bg_float rounded-3 overflow-hidden">
                <div>
                    <img class="my_img-fluid" src="../../../public/img/b1.png" alt="">
                </div>
                <div class="text-center p-4">
                    <div class="mb-2">
                        text
                    </div>
                    <div class="mb-2">
                        text
                    </div>
                    <div>
                        text
                    </div>
                </div>
            </div>
            <div class="w-25 my_bg_float rounded-3 overflow-hidden">
                <div>
                    <img class="my_img-fluid" src="../../../public/img/b1.png" alt="">
                </div>
                <div class="text-center p-4">
                    <div class="mb-2">
                        text
                    </div>
                    <div class="mb-2">
                        text
                    </div>
                    <div>
                        text
                    </div>
                </div>
            </div>
            <div class="w-25 my_bg_float rounded-3 overflow-hidden">
                <div>
                    <img class="my_img-fluid" src="../../../public/img/b1.png" alt="">
                </div>
                <div class="text-center p-4">
                    <div class="mb-2">
                        text
                    </div>
                    <div class="mb-2">
                        text
                    </div>
                    <div>
                        text
                    </div>
                </div>
            </div>
        </div>
        <AppMailFloat class="position-absolute my_mail"></AppMailFloat>
    </div>
</template>

<style lang="scss">
    .my_comp10 {
        height: 1050px;
        padding: 120px 0px 200px;

        .my_mail {
            bottom: 0;
            left: 50%;
    
            transform: translateX(-50%) translateY(50%);
        }
    }
</style>