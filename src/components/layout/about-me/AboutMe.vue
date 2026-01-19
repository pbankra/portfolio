<template>
  <section id="about-me" class="section pt-24 px-4">
    <div class="about-me__header">
      <div>
        <h2 class="section__heading pb-4 px-0 border-b-4 border-accent font-bold text-4xl w-fit mx-auto mb-20">About me</h2>
        <!-- <div class="animated-bar"></div> -->
        <p></p>
      </div>
      <div class="flex flex-col lg:flex-row gap-8"> 
        <img class="rounded-full border-8 border-accent lg:rounded-lg shadow-md max-w-sm mx-auto mb-8 lg:mb-0" src="../../../assets/about-me.jpg" alt="About me photo" />
        <div class="flex flex-col">
          <h3 class="text-2xl font-bold mb-4">Frontend Developer, Coesfeld</h3>    
          <p class="leading-28 mb-4">
            I’m a Frontend Web Developer with 4+ years of experience creating responsive, user-centric interfaces. I focus on writing clean, maintainable code and continuously leveling up my skills to evolve into a strong, future-proof frontend engineer.
          </p>
          <p class="leading-28 mb-8">
            My current stack includes Vue.js and Tailwind CSS, and I’m actively working on a React.js project to expand my expertise across modern frontend ecosystems.
          </p>

          <div class="flex gap-4 mt-auto pt-5 border-t border-gray-300">
            <div class="home-hero__social w-[48px]">
              <a class="home-hero__social-icon-link block w-full" href="https://www.linkedin.com/in/parvinder-b-94b312bb/" rel="noreferrer" target="_blank">
                <img class="home-hero__social-icon rounded-lg" src="../../../assets/linkedin.png" alt="Parvinder Bankra Linkedin Profile">
              </a>
            </div>
            <div class="home-hero__social w-[48px]">
              <a class="home-hero__social-icon-link block w-full" href="https://www.youtube.com/@_happy-coding" rel="noreferrer" target="_blank">
                <img class="home-hero__social-icon rounded-lg" src="../../../assets/youtube.png" alt="Parvinder Bankra Youtube Channel">
              </a>
            </div>
            <div class="home-hero__social w-[48px]">
              <a class="home-hero__social-icon-link block w-full" href="https://github.com/pbankra" rel="noreferrer" target="_blank">
                <img class="home-hero__social-icon rounded-lg" src="../../../assets/github.png" alt="Parvinder Bankra Github Profile">
              </a>
            </div>
          </div>
        </div>       
      </div>

       <div class="mt-16">
          <h2 class="mt-64px text-3xl font-bold text-center mb-10">Skills</h2>
          <div>
            <h3 class="text-2xl font-bold mb-4">Languages</h3>
            <ul class="flex gap-4 flex-wrap mb-6">
              <li class="rounded-lg px-5 py-3 bg-accent text-white">HTML5</li>
              <li class="rounded-lg px-5 py-3 bg-accent text-white">CSS3</li>
              <li class="rounded-lg px-5 py-3 bg-accent text-white">JavaScript</li>
            </ul>

            <h3 class="text-2xl font-bold mb-4">Styling & CSS Architecture</h3>
            <ul class="flex gap-4 flex-wrap mb-6">
              <li class="rounded-lg px-5 py-3 bg-accent text-white">Tailwind CSS</li>
              <li class="rounded-lg px-5 py-3 bg-accent text-white">SCSS</li>
              <li class="rounded-lg px-5 py-3 bg-accent text-white">CSS Modules</li>
              <li class="rounded-lg px-5 py-3 bg-accent text-white">BEM</li>
              <li class="rounded-lg px-5 py-3 bg-accent text-white">Bootstrap</li>
            </ul>

            <h3 class="text-2xl font-bold mb-4">JavaScript Frameworks</h3>
            <ul class="flex gap-4 flex-wrap mb-6">
              <li class="rounded-lg px-5 py-3 bg-accent text-white">Vue.js</li>
            </ul>

            <h3 class="text-2xl font-bold mb-4">Version Control & Collaboration</h3>
            <ul class="flex gap-4 flex-wrap mb-6">
              <li class="rounded-lg px-5 py-3 bg-accent text-white">Git</li>
              <li class="rounded-lg px-5 py-3 bg-accent text-white">GitHub</li>
              <li class="rounded-lg px-5 py-3 bg-accent text-white">GitLab</li>
              <li class="rounded-lg px-5 py-3 bg-accent text-white">Jira/Trello</li>
              <li class="rounded-lg px-5 py-3 bg-accent text-white">Slack/Microsoft Teams</li>
            </ul>

            <h3 class="text-2xl font-bold mb-4">Development Tools & Code Quality</h3>
            <ul class="flex gap-4 flex-wrap mb-6">
              <li class="rounded-lg px-5 py-3 bg-accent text-white">VS Code</li>
              <li class="rounded-lg px-5 py-3 bg-accent text-white">GitHub Copilot</li>
              <li class="rounded-lg px-5 py-3 bg-accent text-white">ESLint</li>
              <li class="rounded-lg px-5 py-3 bg-accent text-white">Prettier</li>
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