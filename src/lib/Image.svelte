<script lang="ts">
	import { page } from '$app/state';

	type Props = {
		data: {
			hp_data: HpData[];
		};
	};

	let { data }: Props = $props();
	function getImageById(id: string | undefined) {
		if (!id) return null;
		const character = data.hp_data.find((item) => item.id === id);
		return character ? character.image : null;
	}
</script>

<div
	class="mx-auto flex min-h-screen w-full justify-center bg-linear-to-br from-slate-900 to-slate-800 px-4 py-12"
>
	<a href="/load" class="">
		<img crossorigin="anonymous"
			class="h-120 w-80 rounded object-cover"
			alt={data.hp_data.find((item) => item.id === page?.params?.slug)?.name}
			src={getImageById(page?.params?.slug)}
			data-vtn="vtn-image-{page?.params?.slug}"
		/>
	</a>
</div>
