<script>
	import Lock from './img/lock.svelte';
	import Card from './card.svelte';
</script>

<main>
	<div class="ui-frame">
		<header>
			<nav />
			<span>
				<Lock />
				your-preview.company.com
			</span>
			<span>+</span>
		</header>
		<code>
			&lt;body{' '}
			<span>
				data-pf="{'{'}...{'}'}"
			</span>
			&gt;
		</code>
		<section class="">
			<code>
				&lt;section{' '}
				<span>
					data-pf="{'{'}...{'}'}"
				</span>{' '}
				/&gt;
			</code>
			<section
				class="ui-section"
				data-pf={`{"sectionId":"gridSection", "title": "Grid Section", "providerId":"generic-provider","entryId": "homepage"}`}
			>
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</section>
		</section>
	</div>
</main>
