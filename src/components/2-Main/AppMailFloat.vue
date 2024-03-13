<script>
export default {
    name: 'AppMailFloat'
}
</script>

<template>
    <div class="my_mail_float my_bg_float p-4 rounded-3 d-flex justify-content-between align-items-center w-100">
        <div class="fs-1 fw-bold mb-4 lh-sm w-50 p-4 mt-3">
            Our news Letter
        </div>
        <div class="mb-3 mt-3 w-50 p-4 position-relative">
            <input type="email" class="form-control px-5 py-3 rounded-5 my_input_mail" id="exampleFormControlInput1" placeholder="name@example.com">
            <div class="my_svg position-absolute"><img class="img-fluid my_mail_svg" src="../../../public/img/image (14).svg" alt=""></div>
            <div class="rounded-5 overflow-hidden position-absolute btn_email">
                <button class="btn_more btn_subcribe fw-bold">Subcribe</button>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    @use '../../style/variables.scss' as *;

    .my_mail_float {
        height: 200px;

        .my_input_mail{
            background-color: $primaryblu;
            border: none;
        }

        .my_svg {
            width: 20px;
           top: 50%;
           left: 7%; 
           transform: translateY(-50%);

           .my_mail_svg{
            filter: invert(47%) sepia(44%) saturate(6826%) hue-rotate(128deg) brightness(99%) contrast(101%); 
           }
        }

        .btn_email{
            top: 50%;
            right: 5%;
           transform: translateY(-50%);

           .btn_subcribe{
            background-color: $primarygreen;
            color: $primaryblu;
           }
        }
    }
    
</style>