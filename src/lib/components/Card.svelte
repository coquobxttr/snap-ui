<script lang="ts">
	import { onMount } from "svelte";

    let { 
        children,
        width = "100",
        height = "100",
        bgColour = "ffffff",
        prose = "false"
    } = $props()

    let borderColour = darkerColour(bgColour);

    function darkerColour(colour: String) {
        let r = colour.substring(0,2)
        let g = colour.substring(2,4)
        let b = colour.substring(4,7)

        let rInt: number = parseInt(r, 16)
        let gInt: number = parseInt(g, 16)
        let bInt: number = parseInt(b, 16)

        r = (rInt - 30).toString(16)
        g = (gInt - 30).toString(16)
        b = (bInt - 30).toString(16)

        return `${r}${g}${b}`
    }

    onMount(() => {
        if (!width.endsWith("px")) width = width.concat("px");
        if (!height.endsWith("px")) height = height.concat("px");
    })
    
</script>

{#if prose === "false"}
    <div
        class="max-w-[90vw] md:max-w-full rounded-xl m-4 shadow-md border flex flex-col p-4"
        style="width: {width}; height: {height}; background-color: #{bgColour}; border-color: #{borderColour}"
    >
        {@render children()}
    </div>
{:else if prose === "true"}
    <div
        class="max-w-[90vw] md:max-w-full rounded-xl m-4 shadow-md border flex flex-col p-4 prose"
        style="width: {width}; height: {height}; background-color: #{bgColour}; border-color: #{borderColour}"
    >
        {@render children()}
    </div>  
{/if} 

<style>
    :global(#card > div) {
        position: absolute;
    }
</style>