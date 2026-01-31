<script lang="ts">
	import Image from '$lib/Image.svelte';
	  import { getPotter } from '../../getPotter.remote';

	 const data=$derived(await getPotter())

</script>

<Image {data} />
