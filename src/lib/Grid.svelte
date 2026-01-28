<script lang="ts">
	import { characterImages, getImageById, getImagebyUrl } from '$lib/assets/images.js';

	type Props = {
		data: {
			hp_data: HpData[];
		};
	};

	let { data }: Props = $props();
</script>

<div class="min-h-screen bg-linear-to-br from-slate-900 to-slate-800 px-4 py-12">
	<div class="mx-auto max-w-7xl">
		<h2 class="mb-12 text-center text-4xl font-bold text-white">Harry Potter Characters</h2>
		<div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
			{#each data.hp_data as character, id}
				<a href="./load/image/{character.id}" class="group w-fit">
					<div
						class="transform overflow-hidden rounded-lg bg-amber-200 shadow-lg transition duration-300 hover:scale-105 hover:shadow-xl"
					>
						<div class="h-48 w-40 overflow-hidden">
							<img
								class="h-full w-full object-cover transition duration-300 group-hover:opacity-90"
								src={characterImages[
									getImagebyUrl(character.image) as keyof typeof characterImages
								]}
								alt={character.name}
								data-vtn="vtn-image-{character.id}"
							/>
						</div>
						<div class="flex h-8 flex-col justify-center px-4 py-2">
							<p class="text-center text-sm font-semibold text-slate-900">{character.name}</p>
						</div>
					</div>
				</a>
			{/each}
		</div>
	</div>
</div>
