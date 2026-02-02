<template>
  <section id="contact" class="section py-24">
    <div class="max-w-6xl mx-auto px-4 md:px-8">
      <!-- Section header -->
      <header class="text-center mb-12 md:mb-16">
        <p class="text-sm font-medium text-slate-500 tracking-wide uppercase">
          Let’s work together
        </p>
        <h2 class="mt-2 text-3xl md:text-4xl font-bold text-slate-900">
          Contact
        </h2>
        
      </header>

      <!-- Content -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-12 items-start">
        <!-- Contact details -->
        <div class="space-y-6 text-center lg:text-left">
          <p class="text-gray-700 max-w-md mx-auto lg:mx-0">
            I’m open to frontend roles, freelance work, and collaboration opportunities.
            If you think my experience could be a good fit, I’d be happy to hear from you.
          </p>

          <div class="space-y-4 text-gray-700 text-center lg:text-left">
            <div>
              <span class="block text-sm text-gray-500">Location</span>
              <span class="font-medium">NRW, Germany</span>
            </div>

            <div>
              <span class="block text-sm text-gray-500">Email</span>
              <a
                href="mailto:your@email.com"
                class="font-medium text-blue-600 hover:underline"
              >
                parvinder.bankra06@gmail.com
              </a>
            </div>

            <div>
              <span class="block text-sm text-gray-500">Phone</span>
              <a
                href="tel:+491234567890"
                class="font-medium text-blue-600 hover:underline"
              >
                +49 157 337 23537
              </a>
            </div>
          </div>
        </div>

        <!-- Contact form -->
        <div class="relative rounded-xl max-w-2xl mx-auto lg:mx-0 bg-white border border-slate-200/60 p-6 md:p-8">
          <!-- Accent bar -->
          <span
            class="absolute left-0 top-8 h-10 w-1 rounded-full bg-accent"
          ></span>

          <form class="space-y-6" @submit.prevent="handleSubmit">
            <!-- Name -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                v-model="form.name"
                type="text"
                required
                class="w-full rounded-md border border-gray-300 bg-white px-3 py-2
                       focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              />
            </div>

            <!-- Email -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                v-model="form.email"
                type="email"
                required
                class="w-full rounded-md border border-gray-300 bg-white px-3 py-2
                       focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              />
            </div>

            <!-- Message -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                v-model="form.message"
                rows="5"
                required
                class="w-full rounded-md border border-gray-300 bg-white px-3 py-2 resize-none
                       focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              ></textarea>
            </div>

            <!-- Submit -->
            <div class="flex items-center justify-between flex-wrap gap-6">
              <p class="text-sm text-gray-500">
                I usually respond within 1–2 days.
              </p>

              <button
                type="submit"
                class="rounded-md bg-accent px-6 py-2.5
                       text-sm font-medium text-white
                       hover:bg-accent-dark transition"
              >
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  name: '',
  email: '',
  message: ''
})

const handleSubmit = () => {
  console.log(form)
}
</script>
