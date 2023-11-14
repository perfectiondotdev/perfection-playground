<script>
	import Header from '$lib/header.svelte';
	import '../app.css';
	import { onMount } from 'svelte';

	onMount(() => {
		initOversite();
	});

	function initOversite() {
		if (import.meta.env.VITE_PUBLIC_PERFECTION_PREVIEW == 'true') {
			// @ts-ignore
			oversite.initialize({
				apiKey: import.meta.env.VITE_PUBLIC_PERFECTION_API_KEY,
				subscription: import.meta.env.VITE_PUBLIC_PERFECTION_SUBSCRIPTION_ID,
				site: import.meta.env.VITE_PUBLIC_PERFECTION_SITE_NAME
			});
		}
	}
</script>

<svelte:head>
	<script
		src="https://unpkg.com/@perfectiondev/oversite@latest/dist/index.iife.js"
		on:load={initOversite}
	></script>
</svelte:head>

<Header />
<slot />
