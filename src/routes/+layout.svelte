<script lang="ts">
	import '../app.css';
	import { goto } from '$app/navigation';
	import { Nora } from '$lib/index.js';
	import { onMount } from 'svelte';

	import AlignJustify from '@lucide/svelte/icons/align-justify';

	let { children } = $props();

	async function getStars(owner: string, repo: string): Promise<number | null> {
		try {
			const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
			if (!response.ok) return null;
			const data = await response.json();
			return data.stargazers_count;
		} catch {
			return null;
		}
	}

	let stars: number | null = $state(null);

	// Fetch stars when component mounts
	onMount(async () => {
		stars = await getStars('coquobxttr', 'nora-kit');
	});
	
</script>

<header class="w-full h-20 flex flex-row items-center">
	<div class="hidden md:block ml-5">
		    <Nora.Button onClick={() => goto('/')}>NoraKit</Nora.Button>
	</div>

	<div class="block md:hidden">
		    <Nora.Button onClick={() => goto('/')}>Sidebar Button</Nora.Button>
	</div>

	<div class="flex-row justify-center items-center right-0 ml-auto p-5 hidden md:flex">
		<!-- svelte-ignore a11y_consider_explicit_label -->
		<a class="pr-1" href="https://github.com/coquobxttr/nora-kit" target="_blank">
			<svg xmlns="http://www.w3.org/2000/svg" width="35" viewBox="0 0 24 24">
				<path fill="#000" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2" />
			</svg>
		</a>
		<p class="text-sm">{stars}</p>
	</div>
	<div class="flex-row justify-center items-center right-0 ml-auto flex md:hidden">
		<Nora.Button>
			<AlignJustify/>
		</Nora.Button>
	</div>
</header>
{@render children()}
<footer id="footer" class="w-full h-10 flex justify-center items-center">
    <p>
		Built by <a href="https://www.linkedin.com/in/z-adeniji/"><u>Zainab Adeniji</u></a>
	</p>
</footer>