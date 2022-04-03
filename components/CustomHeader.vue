<template>
  <header
    class="fixed h-16 w-screen border-b-4 border-gray-500 bg-white dark:border-cyan-300 dark:bg-slate-800 dark:text-cyan-100"
  >
    <div class="container flex h-full justify-between md:justify-start">
      <div class="flex h-full items-center">
        <h1 class="font-mono md:text-3xl">Florian Bopp</h1>
        <span
          class="animate-caret font-mono font-extrabold text-cyan-800 [text-shadow:0px_0px_8px_rgba(0,255,255,0.5)] dark:text-cyan-400 md:text-2xl"
          >_</span
        >
      </div>
      <div class="ml-8 hidden grow items-center gap-2 md:flex">
        <a
          :href="link.href"
          v-for="link in links"
          class="px-2 hover:text-pink-500"
          >{{ link.text }}</a
        >
      </div>
      <div
        class="flex h-1/2 w-10 items-center self-center justify-self-end md:w-12"
      >
        <Rive class="w-full" size="m" />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const links = ref([
  {
    text: 'Projects',
    href: '/projects',
  },
  {
    text: 'Blog',
    href: '/blog',
  },
  {
    text: 'About',
    href: '/about',
  },
  {
    text: 'Contact',
    href: '/contact',
  },
])
</script>

<style scoped>
.backdrop-filter-class {
  backdrop-filter: blur(8px);
}
</style>
