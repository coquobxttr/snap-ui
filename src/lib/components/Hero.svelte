<script lang="ts">
    import { Nora } from "$lib/index.js";
    let { children, bgColour = "ffffff" } = $props()

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
</script>

<div
    class="flex flex-col items-center text-center p-10 w-full h-fit pt-10 pb-10 prose max-w-none"
    style="background-color: #{bgColour};"
>
    {@render children()}
</div>