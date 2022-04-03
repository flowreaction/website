<template>
  <CustomHeader class="top-0" />
  <main class="container mt-6 md:mt-24">
    <slot></slot>
  </main>
</template>

<script setup>
import CustomHeader from '../components/CustomHeader.vue'
</script>

<style lang="scss" scoped></style>
