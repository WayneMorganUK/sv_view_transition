<script>
	import { goto } from "$app/navigation";

</script>

<div class="min-h-screen bg-linear-to-br from-slate-900 to-slate-800 flex items-center justify-center p-4">
	<div class="max-w-md w-full">
		<div class="bg-white rounded-lg shadow-lg p-8">
			<h1 class="text-3xl font-bold text-slate-900 mb-2">View Transitions</h1>
			<p class="text-slate-600 mb-8">Choose a method to load and display data:</p>
			
			<div class="space-y-4">
				<button 
					onclick={() => goto('/load')}
					class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-200 ease-in-out transform hover:scale-105"
				>
					Using Load
				</button>
				
				<button 
					onclick={() => goto('/remote-function')}
					class="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-200 ease-in-out transform hover:scale-105"
				>
					Using Remote Function
				</button>
			</div>
		</div>
	</div>
</div>