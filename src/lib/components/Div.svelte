<script lang="ts">
    let { children, width, height, bgColour } = $props()
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
</script>

<div
    class="rounded-xl m-4 shadow-md border-1"
    style="width: {width}px; height: {height}px; background-color: #{bgColour}; border-color: #{borderColour}">
    {@render children()}
</div>