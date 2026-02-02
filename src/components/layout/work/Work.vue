<template>
  <section id="experience" class="section py-28">
    <div class="max-w-6xl mx-auto px-4 md:px-8">
      <!-- Section header -->
      <header class="text-center mb-12 md:mb-16">
        <p class="text-sm font-medium text-slate-500 tracking-wide uppercase">
          Professional journey and key contributions
        </p>
        <h2 class="mt-2 text-3xl md:text-4xl font-bold text-slate-900">
          Experience
        </h2>
      </header>

      <!-- Experience card -->
      <div class="relative rounded-xl bg-white border border-slate-200/60 p-6 md:p-8">
        <!-- Accent bar -->
        <span
          class="absolute left-0 top-8 h-10 w-1 rounded-full bg-accent"
        ></span>

        <!-- Role header -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold text-gray-900">
            Frontend Developer — E-Commerce Product Company
          </h3>
          <p class="text-sm text-gray-500 mt-1">
            2021 – Present
          </p>
        </div>

        <!-- Tech stack -->
        <div class="mb-6">
          <p class="text-sm text-gray-600">
            <span class="font-medium text-gray-700">Tech:</span>
            HTML, CSS, JavaScript (Modular JS), Tailwind CSS, Event Delegation, API Integration
          </p>
        </div>

        <!-- Intro -->
        <p class="text-gray-700 mb-8 max-w-3xl">
          I joined the company in 2021, initially working on a Shopware-based store before becoming 
          part of the team building a new e-commerce platform from scratch using modern frontend practices.
        </p>

        <!-- Key Contributions -->
        <div class="space-y-10">
          <!-- Shopware -->
          <div>
            <h4 class="text-lg font-medium text-gray-900 mb-3">
              Shopware Store (2021 – 2023)
            </h4>

            <ul class="list-disc pl-5 space-y-2 text-gray-700">
              <li>Fixed UI bugs and layout issues</li>
              <li>Improved responsiveness and styling consistency</li>
              <li>Implemented small JavaScript interactions and UI enhancements</li>
              <li>Collaborated closely with backend and design teams</li>
            </ul>
          </div>

          <!-- Sylius -->
          <div>
            <h4 class="text-lg font-medium text-gray-900 mb-4">
              New Sylius-Based Platform (2023 – Present)
            </h4>

            <!-- Subsection -->
            <div class="mb-6">
              <h5 class="font-medium text-gray-800 mb-2">
                Category Listing & Product Boxes
              </h5>
              <ul class="list-disc pl-5 space-y-2 text-gray-700">
                <li>Built dynamic product cards with discount badges</li>
                <li>Availability-based actions (“Add to Cart”, “Not Available”)</li>
                <li>Improved grid layouts and component scalability</li>
              </ul>
            </div>

            <div class="mb-6">
              <h5 class="font-medium text-gray-800 mb-2">
                Advanced Filters System (Mobile & Desktop)
              </h5>
              <ul class="list-disc pl-5 space-y-2 text-gray-700">
                <li>Designed and built the entire Filters UI independently</li>
                <li>Modular JS for checkbox logic, active filters, deletion, and ranges</li>
                <li>Async live product count via API integration</li>
                <li>Reusable filters shared with search pages</li>
              </ul>
            </div>

            <div class="mb-6">
              <h5 class="font-medium text-gray-800 mb-2">
                Multi-Level Main Menu
              </h5>
              <ul class="list-disc pl-5 space-y-2 text-gray-700">
                <li>Developed complex multi-level navigation behavior</li>
                <li>Used event delegation for performance</li>
                <li>Consistent UX across desktop and mobile</li>
              </ul>
            </div>

            <div>
              <h5 class="font-medium text-gray-800 mb-2">
                Other Components
              </h5>
              <ul class="list-disc pl-5 space-y-2 text-gray-700">
                <li>Dropdowns, email validators, character counters</li>
                <li>Reusable helpers and UI utilities</li>
                <li>Responsive layout refinements across the platform</li>
              </ul>
            </div>
          </div>

          <!-- Freelance -->
          <div>
            <h4 class="text-lg font-medium text-gray-900 mb-3">
              Freelance E-Commerce Frontend Work
            </h4>

            <p class="text-sm text-gray-600 mb-2">
              Tech: HTML, CSS, JavaScript
            </p>

            <ul class="list-disc pl-5 space-y-2 text-gray-700">
              <li>Ongoing project with continuous improvements and bug fixes</li>
              <li>UI fixes and styling adjustments</li>
              <li>Responsive enhancements</li>
              <li>Minor JavaScript feature additions</li>
              <li>Day-to-day maintenance and updates</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
