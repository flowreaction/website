<template>
  <header
    class="fixed h-16 w-screen border-b-4 border-gray-800 bg-white dark:border-cyan-300 dark:bg-slate-800 dark:text-cyan-100"
  >
    <div class="container flex h-full justify-between md:justify-start">
      <div class="mr-4 flex h-full items-center">
        <h1 class="font-mono md:text-3xl">Florian Bopp</h1>
        <span
          class="animate-caret font-mono font-extrabold text-pink-500 [text-shadow:0px_0px_8px_rgba(0,255,255,0.5)] md:text-3xl"
          >_</span
        >
      </div>
      <div class="ml-8 hidden grow items-center gap-2 md:flex">
        <NuxtLink
          :href="link.href"
          v-for="link in links"
          class="px-2 py-1 hover:text-pink-500"
          :activeClass="activeClasses"
          >{{ link.text }}</NuxtLink
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
const route = useRoute()
onUpdated(() => {
  console.log(route.path)
})

const activeClasses = computed(() => {
  return 'bg-pink-600 text-white hover:text-white border-2 border-gray-800 dark:border-cyan-300'
})
</script>

<style scoped>
.backdrop-filter-class {
  backdrop-filter: blur(8px);
}
</style>
