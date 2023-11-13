<script>
	import Header from '$lib/header.svelte';
	import '../app.css';
</script>

<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="description" content="Perfection Example for Svelte" />
		<meta name="viewport" content="width=device-width" />
		<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
		<meta name="generator" />
		<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
		<title>Perfection</title>
	</head>
	<body
		data-pf={`data-pf='{"pageId": "homepage", "providerId":"generic-provider","entryId": "homepage"}'`}
	>
		<Header />
		<slot />
	</body>
</html>
