import { defineNuxtConfig } from 'nuxt3';
import { resolve } from 'path';

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    alias: {
        animations: resolve(__dirname, './asstets/animations'),
    },
    modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt'],
});
