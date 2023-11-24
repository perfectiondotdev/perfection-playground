<script setup>
const { $helpers } = useNuxtApp()

const uid = defineProps(['uid'])

const selector = $helpers.value.component.parts('gridCard', uid.uid)

const pf = {
  providerId: 'generic-provider',
  componentKey: 'card',
  title: 'Card',
  entryId: crypto.randomUUID(),
  groupId: 'gridCard',
  instanceId: uid.uid,
}
</script>

<template>
  <div :class="selector('self', 'bg-dark')" :data-pf="JSON.stringify(pf)">
    <code>
      &lt;component
      <br />
      <span> data-pf="{'...'}" </span>
      /&gt;
    </code>
  </div>
</template>
