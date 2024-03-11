<script>
import AppHeader from './components/1-Header/AppHeader.vue';
import AppMain from './components/2-Main/AppMain.vue';
import AppFooter from './components/3-Footer/AppFooter.vue';

export default {
  components: {
    AppHeader,
    AppMain,
    AppFooter
  }
}
</script>

<template>

    <AppHeader></AppHeader>
    <AppMain></AppMain>
    <AppFooter></AppFooter>

</template>

<style lang="scss">
    @use './style/variables.scss' as *;
    
    h2 {
      text-align: center;
    }
</style>