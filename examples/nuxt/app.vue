<script setup>
import './assets/main.css'
import HeaderBar from './components/HeaderBar.vue'
import HeroBanner from './components/HeroBanner.vue'
import SectionPlayground from './components/SectionPlayground.vue'
import Oversite from './scripts/oversite.js'
import './scripts/helpers.js'
Oversite()
useSeoMeta({
  title: 'Perfection Playground',
  description: 'Perfection Playground',
})
</script>

<template>
<Body data-pf='{"pageId": "homepage", "providerId":"generic-provider","entryId": "homepage"}'>
    <HeaderBar />
    <HeroBanner />
    <SectionPlayground />
</Body>
</template>


