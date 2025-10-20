<script>
	import { fade, scale } from "svelte/transition";

    let { zIndex = 50, children = null, trigger = false } = $props();
    let scrollY = 0;
    
    $effect(() => {
        if (trigger) {
            scrollY = window.scrollY;
            
            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollY}px`;
            document.body.style.width = '100%';

        } else {
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';
            
            window.scrollTo(0, scrollY);
        }
    })
    
</script>

{#if trigger}
    <div transition:scale={{ start: 0.95, duration: 200 }} class={`prose absolute h-full w-full max-w-full md:w-1/5 z-${zIndex}`}>
            {@render children()}
    </div>
    <div transition:fade={{ duration: 100 }} class={`absolute top-0 left-0 w-full h-full bg-white/60 backdrop-blur-sm z-0`}></div>
{/if}