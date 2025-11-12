<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
		<link rel="icon" href={favicon} />
	<title>PayV2Discord</title>
	<meta name="description" content="PayV2Discord ist eine sichere Art der Verifizierung eines Discord Accounts für eine Bezahlung bei LumioINC.">

	<!-- Facebook Meta Tags -->
	<meta property="og:url" content="https://payv2discord.vercel.app/">
	<meta property="og:type" content="website">
	<meta property="og:title" content="PayV2Discord">
	<meta property="og:description" content="PayV2Discord ist eine sichere Art der Verifizierung eines Discord Accounts für eine Bezahlung bei LumioINC.">

	<!-- Twitter Meta Tags -->
	<meta name="twitter:title" content="PayV2Discord">
	<meta name="twitter:description" content="PayV2Discord ist eine sichere Art der Verifizierung eines Discord Accounts für eine Bezahlung bei LumioINC.">
	<meta name="theme-color" content="#5865F2">
</svelte:head>

{@render children()}
