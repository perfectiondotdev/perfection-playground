<script setup>
	import IconLock from '@/components/img/IconLock.vue';
	import GridCard from '@/components/GridCard.vue';
	import { oversiteHelpers } from '../scripts/helpers';

	const helpers = oversiteHelpers?.instances.get("homepage");
	const part = oversiteHelpers?.section.parts(helpers?.section.parts, "gridSection");
</script>

<template>
<main>
	<div class="ui-frame">
		<header>
			<nav />
			<span>
				<IconLock />
				your-preview.company.com
			</span>
			<span>+</span>
		</header>
		<code>
			&lt;body
			<span>
				data-pf="{'...'}"
			</span>
			&gt;
		</code>
		<section :class="part('outer', '')">
			<code>
				&lt;section
				<span>
					data-pf="{'...'}"
				</span>
				/&gt;
			</code>
			<section :class="part('inner', 'ui-section')" data-pf='{"sectionId":"gridSection", "title": "Grid Section", "providerId":"generic-provider","entryId": "homepage"}'>
				<GridCard uid="card1" />
				<GridCard uid="card2" />
				<GridCard uid="card3" />
				<GridCard uid="card4" />
				<GridCard uid="card5" />
				<GridCard uid="card6" />
			</section>
		</section>
	</div>
</main>
</template>