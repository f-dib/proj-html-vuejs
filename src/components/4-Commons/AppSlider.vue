<!-- <script>
    export default {
        props: {
            items: {
            type: Array,
            required: true,
            },
        },
        data() {
            return {
            items: data,
            currentSlide: 0,
            slideWidth: 0,
            };
        },
        mounted() {
            this.slideWidth = this.$refs.data.offsetWidth;
        },
        methods: {
            prevSlide() {
            this.currentSlide--;
            if (this.currentSlide < 0) {
                this.currentSlide = this.items.length - 1;
            }
            },
            nextSlide() {
            this.currentSlide++;
            if (this.currentSlide === this.items.length) {
                this.currentSlide = 0;
            }
            },
        },
    };
</script>

<template>
    <div class="carousel-container">
      <div class="carousel-inner" :style="{ transform: `translateX(-${currentSlide} * ${slideWidth}px)` }">
        <slot name="item" v-for="item in data" :key="data"></slot>
      </div>
      <button class="carousel-arrow left" @click="prevSlide">‹</button>
      <button class="carousel-arrow right" @click="nextSlide">›</button>
    </div>
</template>

<style lang="scss">
</style> -->