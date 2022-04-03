<template>
  <CustomHeader class="top-0" />
  <main class="container mt-6 md:mt-24">
    <slot></slot>
  </main>
</template>

<script setup>
const route = useRoute()
onUpdated(() => {
  console.log(route)
})
useMeta({
  title: computed(() => {
    return `Florian Bopp - ${
      route.name.charAt(0).toUpperCase() + route.name.substring(1).toLowerCase()
    }`
  }),
})
</script>

<style lang="scss" scoped></style>
