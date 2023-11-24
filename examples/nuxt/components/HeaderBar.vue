<script setup>
import IconLogo from '@/components/img/IconLogo.vue'
</script>

<template>
  <nav class="ui-nav">
    <div>
      <IconLogo />
      <menu>
        <li>
          <NuxtLink to="/">Solutions</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/">Learn</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about">About</NuxtLink>
        </li>
      </menu>
      <NuxtLink to="/" class="ui-cta ui-cta--sm"> Get started</NuxtLink>
    </div>
  </nav>
</template>
