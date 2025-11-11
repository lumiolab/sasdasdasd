<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
		<link rel="icon" href={favicon} />
	<title>Discord Verify</title>
	<meta name="description" content="Discord Verify Site.">

	<!-- Facebook Meta Tags -->
	<meta property="og:url" content="https://dc-verify.vercel.app/">
	<meta property="og:type" content="website">
	<meta property="og:title" content="Discord Verify">
	<meta property="og:description" content="Dies ist eine Seite um seinen discord Account zu verifizieren.">

	<!-- Twitter Meta Tags -->
	<meta name="twitter:title" content="Discord Verify">
	<meta name="twitter:description" content="Dies ist eine Seite um seinen discord Account zu verifizieren.">
	<meta name="theme-color" content="#5865F2">
</svelte:head>

{@render children()}
