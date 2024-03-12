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
    <div class="position-relative my_comp1">
        <AppTopFloat class="position-absolute my_top_float"></AppTopFloat>
    </div>
</template>

<style lang="scss">

    .my_comp1{
        height: 450px;
    }

    .my_top_float{
        top: 0;
        left: 50%;

        transform: translateX(-50%) translateY(-50%);
    }
</style>