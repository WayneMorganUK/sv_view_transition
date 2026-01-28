<script lang="ts">
	type Props = {
		data: {
			hp_data: HpData[];
		};
	};

	let { data }: Props = $props();
</script>

<div class="min-h-screen bg-linear-to-br from-slate-900 to-slate-800 py-12 px-4">
  <div class="max-w-7xl mx-auto">
    <h2 class="text-center text-4xl font-bold text-white mb-12">Harry Potter Characters</h2>
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {#each data.hp_data as character, id}
      <a href="./load/image/{character.id}" class="group w-fit">
        <div class="bg-amber-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300 transform hover:scale-105">
          <div class="w-40 h-48 overflow-hidden">
            <img
			  crossorigin="anonymous"
              class="w-full h-full object-cover group-hover:opacity-90 transition duration-300"
              src={character.image}
              alt={character.name}
              data-vtn="vtn-image-{character.id}"
            />
          </div>
          <div class="py-2 px-4 h-8 flex flex-col justify-center">
             <p class="text-center font-semibold text-slate-900 text-sm">{character.name}</p>
           </div>
         </div>
      </a>
      {/each}
    </div>
  </div>
</div>