<template>
  <section id="skills" class="section bg-slate-50 py-24">
    <div class="max-w-6xl mx-auto px-4 md:px-8">
      <!-- Section header -->
      <header class="text-center mb-12 md:mb-16">
		<p class="text-sm font-medium text-slate-500 tracking-wide uppercase">
          Technologies I have experience with
        </p>
        <h2 class="mt-2 text-3xl md:text-4xl font-bold text-slate-900">
          Skills & Tools
        </h2>
        
      </header>

      <!-- Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <!-- Card -->
        <SkillCard
          icon="lucide:code"
          title="Core Web Languages"
          :skills="['HTML5', 'CSS3', 'JavaScript']"
        />

        <SkillCard
          icon="lucide:palette"
          title="Styling Systems"
          :skills="[
            'Tailwind CSS',
            'SCSS',
            'CSS Modules',
            'BEM',
            'Bootstrap'
          ]"
        />

        <SkillCard
          icon="lucide:layers"
          title="JavaScript Frameworks"
          :skills="['Vue.js']"
        />

        <SkillCard
          icon="lucide:settings"
          title="Dev Environment"
          :skills="[
            'VS Code',
            'GitHub Copilot',
            'ESLint',
            'Prettier'
          ]"
        />

        <SkillCard
          icon="lucide:git-branch"
          title="Team & Workflow"
          :skills="[
            'Git',
            'GitHub',
            'GitLab',
            'Jira / Trello',
            'Slack / Microsoft Teams'
          ]"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import SkillCard from './SkillCard.vue'
</script>
