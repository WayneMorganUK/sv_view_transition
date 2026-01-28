<script lang="ts">
	import { page } from '$app/state';
	import { characterImages, getImageById } from '$lib/assets/images.js';

	type Props = {
		data: {
			hp_data: HpData[];
		};
	};

	let { data }: Props = $props();

	
</script>

<div
	class="mx-auto flex min-h-screen w-full justify-center bg-linear-to-br from-slate-900 to-slate-800 px-4 py-12"
>
	<a href="/load" class="">
		{#if page?.params?.slug}
		<img
			class="h-120 w-80 rounded object-cover"
			src={characterImages[getImageById(page.params.slug, data) as keyof typeof characterImages]}
			alt={data.hp_data.find((item) => item.id === page?.params?.slug)?.name}
			data-vtn="vtn-image-{page?.params?.slug}"
		/>
		{/if}
	</a>
</div>
