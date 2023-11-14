<script>
	import Lock from './img/lock.svelte';
	import Card from './card.svelte';

	/**
	 * @type {any}
	 */
	export let sectionOuter;
	/**
	 * @type {any}
	 */
	export let sectionInner;
	/**
	 * @type {any}
	 */
	export let components;

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
		<section class={sectionOuter}>
			<code>
				&lt;section{' '}
				<span>
					data-pf="{'{'}...{'}'}"
				</span>{' '}
				/&gt;
			</code>
			<section
				class={sectionInner}
				data-pf={`{"sectionId":"gridSection", "title": "Grid Section", "providerId":"generic-provider","entryId": "homepage"}`}
			>
				<Card uid="card1" style={components[0]}/>
				<Card uid="card2" style={components[1]}/>
				<Card uid="card3" style={components[2]}/>
				<Card uid="card4" style={components[3]}/>
				<Card uid="card5" style={components[4]}/>
				<Card uid="card6" style={components[5]}/>
			</section>
		</section>
	</div>
</main>
