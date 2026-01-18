<template>
  <section id="about-me" class="section h-screen pt-40 px-4">
    <div class="about-me__header">
      <div>
        <h2 class="section__heading pb-4 px-0 border-b-4 border-accent font-bold text-4xl w-fit mx-auto mb-20">About me</h2>
        <!-- <div class="animated-bar"></div> -->
        <p></p>
      </div>
      <div class="flex flex-col lg:flex-row"> 
        <img class="rounded-full border-8 border-accent ld:rounded-lg shadow-md max-w-sm mx-auto mb-8" src="../../../assets/about-me.jpg" alt="About me photo" />
        <div class="">
          <h3 class="text-2xl font-bold mb-4">Frontend Developer, Coesfeld</h3>    
          <p>I’m a Frontend Web Developer with over four years of experience building responsive, user-focused interfaces. I enjoy turning ideas into clean, efficient code and continuously improving my skills to grow into a strong, future-ready frontend engineer.
            Currently, I’m focusing on Vue.js, Tailwind CSS, and strengthening my JavaScript fundamentals.
          </p>
        </div>       
      </div>

       <div class="">
          <h3>skills</h3>
          <div>
            <ul class="flex gap-4 flex-wrap">
              <li class="rounded-lg px-5 py-3 bg-gray-300">HTML5</li>
              <li class="rounded-lg px-5 py-3 bg-gray-300">CSS3</li>
              <li class="rounded-lg px-5 py-3 bg-gray-300">JavaScript</li>
              <li class="rounded-lg px-5 py-3 bg-gray-300">SASS/LESS</li>
              <li class="rounded-lg px-5 py-3 bg-gray-300">Vue.js</li>
              <li class="rounded-lg px-5 py-3 bg-gray-300">Tailwind CSS</li>
              <li class="rounded-lg px-5 py-3 bg-gray-300">Git & GitHub</li>
            </ul>
          </div>
        </div> 
    </div>
    
  </section> 
</template>
<script></script>
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
</style>