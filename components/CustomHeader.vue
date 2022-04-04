<template>
  <header
    class="h-12 w-screen border-b-4 border-gray-800 bg-white dark:border-cyan-300 dark:bg-slate-800 dark:text-cyan-100 md:fixed md:h-16"
  >
    <div class="container flex h-full justify-between md:justify-start">
      <NuxtLink href="/">
        <div class="mr-4 flex h-full items-center">
          <h1 class="font-mono text-2xl md:text-3xl md:first-letter:text-4xl">
            Florian Bopp
          </h1>
          <span
            class="animate-caret font-mono text-2xl font-extrabold text-pink-500 [text-shadow:0px_0px_8px_rgba(0,255,255,0.5)] md:text-3xl"
            >_</span
          >
        </div>
      </NuxtLink>
      <div
        class="fixed inset-x-0 bottom-0 flex justify-around border-t-4 border-gray-800 bg-white py-2 dark:border-cyan-300 dark:bg-slate-800 md:static md:mb-0 md:ml-8 md:grow md:items-center md:justify-start md:gap-2 md:border-0"
      >
        <NuxtLink
          :href="link.href"
          v-for="link in links"
          :activeClass="activeClasses"
          class="px-2 py-1 hover:text-pink-500"
          >{{ link.text }}</NuxtLink
        >
      </div>
      <div
        class="flex h-1/2 w-10 items-center self-center justify-self-end md:w-12"
      >
        <Rive class="w-[50px]" />
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
  return 'bg-pink-600 text-white hover:text-white  shadow-[inset_0px_0px_0px_2px_rgba(0,0,0,1)] dark:shadow-[inset_0px_0px_0px_2px_rgba(103,232,249,1)]'
})
</script>

<style scoped>
.backdrop-filter-class {
  backdrop-filter: blur(8px);
}
</style>
