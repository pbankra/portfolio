<template>
  <div ref="headerRef" class="header bg-bg1 shadow-sm fixed w-full z-50 py-4 px-4 sm:px-8 xl:px-20">
    <div class="header__content flex justify-between items-center gap-x-16 sm:max-w-[640px] md:max-w-[860px] lg:max-w-[1200px] mx-auto">
      <div class="header__logo-container flex items-center gap-x-2.5 sm:gap-x-4">
        <img class="header__logo-img w-[50px]" src="../../../assets/main-photo.png" alt="">
        <div class="flex flex-col leading-none gap-y-1.5">
          <span class="header__logo-text uppercase text-base sm:text-lg font-bold tracking-wide text-textMain leading-none sm:leading-none">Parvinder Bankra</span>    
          <span>Frontend Developer</span>
        </div>
      </div>            

      <nav class="hidden md:flex">
        <ul class="flex justify-between gap-8">
          <li v-for="item in Menu" :key="item.name"> 
            <a class="font-bold uppercase tracking-wide text-textBody text-sm hover:border-b-2 hover:border-accent" :href="item.href" >
              {{ item.name }}
            </a>
          </li>
        </ul>
      </nav>

<!--  <div class="hidden lg:flex items-center gap-x-4">
        <div class="switch relative">
          <input id="language-toggle" class="check-toggle check-toggle-round-flat absolute invisible" type="checkbox">
          <label for="language-toggle"></label>
          <span class="on">DE</span>
          <span class="off">EN</span>
        </div>
        <Icon icon="bi:brightness-high-fill" width="32" height="32" />
        <Icon icon="bi:brightness-high" width="16" height="16" />
      </div> -->

      <div class="md:hidden" @click.stop="toggleMenu" aria-label="Toggle menu" role="button" :aria-expanded="isMenuOpen">
        <span v-if="isMenuOpen">
          <Icon icon="material-symbols:close" width="24" height="24" />
        </span>
        <span v-else>
          <Icon icon="material-symbols:menu-rounded" width="24" height="24" />
        </span>          
      </div>      
    </div> 

    <nav class="lg:hidden py-4 px-8 lg:px-20" v-show="isMenuOpen">
      <ul class="flex flex-col items-end w-full justify-around gap-4">
        <li class="py-4 border-t border-[#eee] w-full text-right" v-for="item in Menu" :key="item.name"> 
          <a :href="item.href" @click.prevent="scrollToSection(item.href)">
            {{ item.name }}
          </a>
        </li>
      </ul>
    </nav>  
  </div>       
</template>
<script setup>
  import { ref, onMounted, onBeforeUnmount } from 'vue'
  const headerRef = ref(null)
  const isMenuOpen = ref(false)
  const Menu = ref([
    {name:'Home',href:'#home'},
    {name:'About Me',href:'#about-me'},
    {name:'Experience',href:'#experience'},
    {name:'Contact',href:'#contact'},
    /* {name:'Blog',href:'#blog'} */
  ])
  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
  }
  const scrollToSection = (href) => {
    isMenuOpen.value = false;
    const section = document.querySelector(href)
    if(section) section.scrollIntoView({ behavior: 'smooth' })
  }

  // Close menu when clicking outside the header/menu area
  const onDocumentClick = (e) => {
    if (!isMenuOpen.value) return
    const el = headerRef.value
    if (el && !el.contains(e.target)) {
      isMenuOpen.value = false
    }
  }

  onMounted(() => {
    document.addEventListener('click', onDocumentClick)
  })

  onBeforeUnmount(() => {
    document.removeEventListener('click', onDocumentClick)
  })
</script>

<style scoped lang="postcss">

/* language switch styling */
.switch > span {
  @apply absolute top-2 pointer-events-none font-bold text-xs uppercase w-1/2 text-center;
  text-shadow: 0 1px 0 rgba(0, 0, 0, .06);
}

input.check-toggle-round-flat:checked ~ .off {
  @apply text-accent;
}

input.check-toggle-round-flat:checked ~ .on {
  @apply text-white;
}

.switch > span.on {
  @apply left-0 pl-0.5 text-accent;
}

.switch > span.off {
  @apply right-0 pr-1 text-white;
}

.check-toggle + label {
  @apply block cursor-pointer outline-none relative;
  user-select: none;
}

input.check-toggle-round-flat + label {
  @apply bg-accent p-0.5 w-24 h-9 rounded-full;
}
input.check-toggle-round-flat + label:before, input.check-toggle-round-flat + label:after {
  @apply block content-[""] absolute;
}

input.check-toggle-round-flat + label:before {
  @apply bg-accent top-1 left-1 bottom-1 right-1 rounded-full;
}
input.check-toggle-round-flat + label:after {
  @apply top-1 left-1 bottom-1 w-12 bg-white rounded-3xl transition-all;
}

input.check-toggle-round-flat:checked + label:after {
  @apply ml-11;
}
</style>
