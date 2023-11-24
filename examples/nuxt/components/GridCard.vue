<script setup>
	import { oversiteHelpers } from '../scripts/helpers';

	await oversiteHelpers.init("homepage");
	const props = defineProps(['uid']);
	const helpers = oversiteHelpers?.instances.get("homepage");
	const selector = helpers?.component.parts("gridCard", props.uid) || ((selector, classes) => { return classes });
	const pf = {
		providerId: 'generic-provider',
		componentKey: 'card',
		title: 'Card',
		entryId: crypto.randomUUID(),
		groupId: 'gridCard',
		instanceId: props.uid
	}
</script>

<template>
<div :class="selector('self', 'bg-dark')" :data-pf="JSON.stringify(pf)">
	<code>
		&lt;component
		<br />
		<span>
			data-pf="{'...'}"
		</span>
		/&gt;
	</code>
</div>
</template>