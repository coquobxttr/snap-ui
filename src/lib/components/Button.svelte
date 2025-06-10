<script lang="ts">
    let { bgColour, children, id } = $props()
    let darkerBg = darkerColour(bgColour);
    let textColour = autoTextColour(bgColour)

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

    function getRelativeLuminance(hexColour: string): number {
        const r = parseInt(hexColour.substring(0, 2), 16);
        const g = parseInt(hexColour.substring(2, 4), 16);
        const b = parseInt(hexColour.substring(4, 6), 16);
        
        // Convert to 0-1 range
        const rNorm = r / 255;
        const gNorm = g / 255;
        const bNorm = b / 255;
        
        // Apply gamma correction
        const rLinear = rNorm <= 0.03928 ? rNorm / 12.92 : Math.pow((rNorm + 0.055) / 1.055, 2.4);
        const gLinear = gNorm <= 0.03928 ? gNorm / 12.92 : Math.pow((gNorm + 0.055) / 1.055, 2.4);
        const bLinear = bNorm <= 0.03928 ? bNorm / 12.92 : Math.pow((bNorm + 0.055) / 1.055, 2.4);
        
        // Calculate relative luminance
        return 0.2126 * rLinear + 0.7152 * gLinear + 0.0722 * bLinear;
    }

    function autoTextColour(bgColour: string) {
        const brightness = getRelativeLuminance(bgColour)
        return brightness > 0.5 ? 'black' : 'white'
    }
</script>

<button
    class="rounded-lg p-1.5 pl-3 pr-3 m-2 font-medium shadow-md border-1 cursor-pointer"
    style="--bg: #{bgColour}; --bg-hover: #{darkerBg}; --text-colour: {textColour};"
    id="{id}"
>
    {@render children()}
</button>

<style>
    button {
        background-color: var(--bg);
        color: var(--text-colour);
        border-color: var(--bg-hover);
    }

    button:hover {
        background-color: var(--bg-hover);
    }
</style>