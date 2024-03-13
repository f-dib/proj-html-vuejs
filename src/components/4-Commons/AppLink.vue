<script>
export default {
    name: 'AppLink',

    props: {
        getLink: Object
    }
}
</script>

<template>
    <li class="nav-item dropdown">
        <a class="nav-link active text-white text-uppercase my_hover_link" aria-current="page" href="#"role="button" data-bs-toggle="dropdown" aria-expanded="false"><h5>{{ getLink.link }}</h5></a>
        <ul class="dropdown-menu p-2 my_comp_bg_blu">
            <li><a class="dropdown-item my_color_primary_green my_link_line" href="#">About us</a></li>
            <li><a class="dropdown-item my_color_primary_green my_link_line" href="#">Matches</a></li>
            <li><a class="dropdown-item my_color_primary_green" href="#">Team</a></li>
        </ul>
    </li>
</template>

<style lang="scss">
    .my_link_line {
        border-bottom: 1px solid rgb(67, 65, 65);
    }
</style>