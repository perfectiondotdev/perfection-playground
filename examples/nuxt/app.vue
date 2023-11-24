<script setup>
import '~/assets/main.css'

useSeoMeta({
  title: 'Perfection',
  description: 'Perfection Example for Nuxt',
})

const route = useRoute()

const bodyConfig = computed(() =>
  JSON.stringify({
    pageId: route.meta.pageId,
    providerId: 'generic-provider',
    entryId: route.meta.pageId,
  })
)
</script>

<template>
  <Body :data-pf="bodyConfig">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </Body>
</template>
