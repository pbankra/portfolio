<template>
    <div class="animated-bar">
    </div>
</template>

<script>
export default {
    name: 'AnimatedBar'
}
</script>

<style scoped lang="scss">
.animated-bar {
    height: 4px;
    width: 75px;
    content: "";
    right: 0;
    left: 0;
    margin: auto;
    position: relative;
    @apply bg-accent;

    ::before {
        left: 8px;
        animation-duration: 3s;
        animation-iteration-count: infinite;
        animation-name: barAnimation;
        animation-timing-function: linear;
        background-color: rgb(16, 16, 16);
        content: "";
        height: 100%;
        position: absolute;
        top: 0px;
        width: 4px;
    }
}
@keyframes gradientAnimation {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}
</style>