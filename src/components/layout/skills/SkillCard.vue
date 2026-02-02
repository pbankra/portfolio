<template>
  <div
    class="relative p-6 rounded-lg border border-slate-200/60 bg-white/60"
  >
    <!-- Accent bar -->
    <span
      class="absolute left-0 top-6 h-8 w-1 rounded-full bg-accent"
    ></span>

    <!-- Header -->
    <div class="flex items-center gap-2 mb-3">
      <Icon
        :icon="icon"
        class="text-gray-600"
        width="22"
        height="22"
      />
      <h3 class="text-lg font-medium text-gray-900">
        {{ title }}
      </h3>
    </div>

    <!-- Skills -->
    <div class="flex flex-wrap gap-2.5">
      <span
        v-for="skill in skills"
        :key="skill"
        class="rounded-lg bg-white border border-gray-300 px-3 py-1.5
               text-sm font-medium text-gray-700"
      >
        {{ skill }}
      </span>
    </div>
  </div>
</template>


<script setup>
import { Icon } from '@iconify/vue'

defineProps({
  title: String,
  icon: String,
  skills: Array
})
</script>
