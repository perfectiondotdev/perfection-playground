<script setup>
import HeaderBar from './components/HeaderBar.vue'
import HeroBanner from './components/HeroBanner.vue'
import SectionPlayground from './components/SectionPlayground.vue'
import Oversite from './scripts/oversite.client.js'
Oversite()
</script>

<template>
    <HeaderBar />
    <HeroBanner />
    <SectionPlayground />
</template>