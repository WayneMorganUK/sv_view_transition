<script lang="ts">
	import { page } from '$app/state';

	interface HpData {
		id: string;
		name: string;
		image: string;
	}

	type Props = {
		data: {
			hp_data: HpData[];
		};
	};

	let { data }: Props = $props();

	// const imageModules = import.meta.glob('$lib/assets/*', { eager: true, query: 'url' });

	function getImageById(id: string | undefined) {
		if (!id) return null;
		const character = data.hp_data.find((item) => item.id === id);
		const remoteUrl = character ? character.image : null;

		if (!remoteUrl || remoteUrl === '') return null;

		const imageName = remoteUrl.split('/').pop();
		if (!imageName) return remoteUrl;
		console.log(imageName);

		const localImagePath = `/src/lib/assets/${imageName}`;
		// const localImageUrl = imageModules[localImagePath];

		return `/src/lib/assets/${imageName}`
	}
</script>

<div
	class="mx-auto flex min-h-screen w-full justify-center bg-linear-to-br from-slate-900 to-slate-800 px-4 py-12"
>
	<a href="/load" class="">
		<img
			class="h-120 w-80 rounded object-cover"
			alt={data.hp_data.find((item) => item.id === page?.params?.slug)?.name}
			src={getImageById(page?.params?.slug)}
			data-vtn="vtn-image-{page?.params?.slug}"
		/>
	</a>
</div>
