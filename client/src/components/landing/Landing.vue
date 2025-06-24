<script setup lang="ts">

import Header from './Header.vue';
import Nav from './Nav.vue';
import News from './News.vue';
import Footer from './footer/Footer.vue';

</script>

<template>
    <div class="wrapper">
        <Header />
        <Nav />
    </div>
    <News />
	<Footer />
</template>

<style lang="scss" scoped>
 .wrapper {
   display: flex;
   flex-direction: column;
   height: 100vh;
 }
</style>