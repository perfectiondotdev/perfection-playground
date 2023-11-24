<script setup>
import './assets/main.css'
import HeroBanner from './components/HeroBanner.vue'
import SectionPlayground from './components/SectionPlayground.vue'
//Oversite is automatically loaded as placed in Nuxt 3 "plugins" folder, see here https://nuxt.com/docs/guide/directory-structure/plugins

useSeoMeta({
  title: 'Perfection',
  description: 'Perfection Example for Nuxt',
})
</script>

<template>
  <Body data-pf='{"pageId": "homepage", "providerId":"generic-provider","entryId": "homepage"}'>
      <NuxtLayout>
        <HeroBanner />
        <SectionPlayground />
      </NuxtLayout>
  </Body>
</template>


