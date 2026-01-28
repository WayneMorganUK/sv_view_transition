<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import ViewTransition from '$lib/ViewTransition.svelte';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<header>
    <nav class="bg-slate-900 p-4">
        <div class="flex justify-center items-center space-x-8 text-3xl">
            <a href="/" class="text-gray-300 hover:text-white transition duration-300">Home</a>
            <a href="/remote-function" class="text-gray-300 hover:text-white transition duration-300">Remote Function</a>
            <a href="/load" class="text-gray-300 hover:text-white transition duration-300">Load</a>
        </div>
    </nav>
</header>

<main>
    <ViewTransition />
    {@render children()}
<img src="https://github.com/WayneMorganUK/sv_view_transition/blob/master/src/lib/assets/cedric.jpg?raw=true" alt="Cedric" />
</main>
