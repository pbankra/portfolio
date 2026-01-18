<template>
    <section class="home-hero h-screen">
        <div class="bg-image"></div>
        <!-- <Social></Social> -->
        <HeroContent></HeroContent>
        <svg id="home-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1400 300" preserveAspectRatio="none">
                <path class="p-curve" d="M0,96.1c109.9,67.5,145.1,201.1,329.6,202.5S1043.2,99.5,1400,0v300H0V96.1z"></path>
            </svg>
    </section>
</template>

<script setup>
    import Social from './Social.vue';
    import HeroContent from './HeroContent.vue'
</script>

<style scoped lang="scss">
    .bg-image {
    background: linear-gradient(
    to right bottom,
    rgba(0, 0, 0, 0.6),
    rgba(0, 0, 0, 0.6) 
  ), url(../../../assets/hero.jpg) center/cover no-repeat;
    height: 100vh;
}

#home-svg {
    height: 150px;
    width: 100vw;
    position: absolute;
    bottom: 0px;
    left: 0;
    z-index: 3;
}

#home-svg .p-curve {
    fill: #fff;
}
</style>