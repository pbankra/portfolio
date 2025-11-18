<template>
  <div class="header bg-bg1 shadow-sm">
    <div class="header__content flex justify-between items-center py-4 px-8 xl:px-20 gap-x-16">
      <div class="header__logo-container flex items-center gap-x-4">
        <img class="header__logo-img w-[50px]" src="../../assets/main-photo.png" alt="">
        <div class="flex flex-col leading-none">
          <span class="header__logo-text uppercase text-lg font-bold tracking-wide text-textMain">Parvinder Bankra</span>    
          <span>Frontend Developer</span>
        </div>
      </div>            

      <nav class="hidden md:flex">
        <ul class="flex justify-between gap-8">
          <li v-for="item in Menu" :key="item.name"> 
            <a class="font-bold uppercase tracking-wide text-textBody text-sm" :href="item.href" >
              {{ item.name }}
            </a>
          </li>
        </ul>
      </nav>

      <div class="hidden lg:flex items-center gap-x-4">
        <div class="switch relative">
          <input id="language-toggle" class="check-toggle check-toggle-round-flat absolute invisible" type="checkbox">
          <label for="language-toggle"></label>
          <span class="on">DE</span>
          <span class="off">EN</span>
        </div>
        <!-- <Icon icon="bi:brightness-high-fill" width="32" height="32" /> -->
         <Icon icon="bi:brightness-high" width="16" height="16" />
      </div>

      <div class="md:hidden" @click="isMenuOpen = !isMenuOpen">
        <span v-if="isMenuOpen">
          <Icon icon="material-symbols:close" width="24" height="24" />
        </span>
        <span v-else>
          <Icon icon="material-symbols:menu-rounded" width="24" height="24" />
        </span>          
      </div>      
    </div> 

    <nav :class="[`flex lg:hidden py-4 px-8 lg:px-20 ${isMenuOpen?'block':'hidden'}`] ">
      <ul class="flex flex-col items-end w-full justify-around gap-4">
        <li class="py-4 border-t border-[#eee] w-full text-right" v-for="item in Menu" :key="item.name"> 
          <a :href="item.href" @click="scrollToSection(item.href )">
            {{ item.name }}
          </a>
        </li>
      </ul>
    </nav>  
  </div>       
</template>
<script setup>
  import {ref} from 'vue'
  const isMenuOpen = ref(false)
  const Menu = ref([
    {name:'Home',href:'#home'},
    {name:'About Me',href:'#about-me'},
    {name:'Work',href:'#work'},
    {name:'Contact',href:'#contact'},
    /* {name:'Blog',href:'#blog'} */
  ])
  const scrollToSection = (href) => {
    isMenuOpen = false;
    const section = document.querySelector(href)
    if(section) section.scrollIntoView({behaviour:'smooth'})
  }
</script>

<style scoped>

/* language switch styling */
.switch > span {
  position: absolute;
  top: 9px;
  pointer-events: none;
  font-family: 'Helvetica', Arial, sans-serif;
  font-weight: bold;
  font-size: 12px;
  text-transform: uppercase;
  text-shadow: 0 1px 0 rgba(0, 0, 0, .06);
  width: 50%;
  text-align: center;
}

input.check-toggle-round-flat:checked ~ .off {
  color: #10b981;
}

input.check-toggle-round-flat:checked ~ .on {
  color: #fff;
}

.switch > span.on {
  left: 0;
  padding-left: 2px;
  color: #10b981;
}

.switch > span.off {
  right: 0;
  padding-right: 4px;
  color: #fff;
}

.check-toggle + label {
  display: block;
  position: relative;
  cursor: pointer;
  outline: none;
  user-select: none;
}

input.check-toggle-round-flat + label {
  padding: 2px;
  width: 97px;
  height: 35px;
  background-color: #10b981;
  border-radius: 60px;
}
input.check-toggle-round-flat + label:before, input.check-toggle-round-flat + label:after {
  display: block;
  position: absolute;
  content: "";
}

input.check-toggle-round-flat + label:before {
  top: 2px;
  left: 2px;
  bottom: 2px;
  right: 2px;
  background-color: #10b981;
  border-radius: 60px;
}
input.check-toggle-round-flat + label:after {
  top: 4px;
  left: 4px;
  bottom: 4px;
  width: 48px;
  background-color: #fff;
  border-radius: 52px;
  transition: margin 0.2s;
}

input.check-toggle-round-flat:checked + label:after {
  margin-left: 44px;
}
</style>
