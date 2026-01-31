<script lang="ts">
	import Grid from '$lib/Grid.svelte';
	import { getPotter } from './getPotter.remote';
	const data = $derived((await getPotter()));
</script>

<Grid {data} />
