<script>
	import { goto } from '$app/navigation';
</script>

<div
	class="flex min-h-screen items-center justify-center bg-linear-to-br from-slate-900 to-slate-800 p-4"
>
	<div class="w-full max-w-md">
		<div class="rounded-lg bg-white p-8 shadow-lg">
			<h1 class="mb-2 text-3xl font-bold text-slate-900">View Transitions</h1>
			<p class="mb-8 text-slate-600">Choose a method to load and display data:</p>

			<div class="space-y-4">
				<button
					onclick={() => goto('/load')}
					class="w-full transform rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white transition duration-200 ease-in-out hover:scale-105 hover:bg-blue-700"
				>
					Using Load
				</button>

				<button
					onclick={() => goto('/remote-function')}
					class="w-full transform rounded-lg bg-purple-600 px-4 py-3 font-semibold text-white transition duration-200 ease-in-out hover:scale-105 hover:bg-purple-700"
				>
					Using Remote Function
				</button>
			</div>
		</div>
	</div>
</div>
