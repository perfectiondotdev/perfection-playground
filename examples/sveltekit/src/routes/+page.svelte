<script>
	import Hero from '$lib/hero.svelte';
	import Playground from '$lib/playground.svelte';
	//Get Perfection Helpers Data (+page.server.js)
	export let data;

</script>

<Hero />
<Playground sectionOuter={data.section_outer} sectionInner={data.section_inner} components={data.components} />
