<template>
  <footer id="footer" class="border-t py-6 bg-accent/80">
    <div class="max-w-6xl mx-auto px-4 md:px-8 text-center">
      <p class="text-sm text-white">
        © {{ year }} Parvinder Bankra. All rights reserved.
      </p>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>
