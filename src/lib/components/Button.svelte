<script lang="ts">
    let {
        bgColour = "ffffff",
        children,
        id = "button",
        margin = 16,
        width = "fit-content",
        height = "fit-content",
        onClick = () => {}
    }: {
        bgColour?: string,
        children: import('svelte').Snippet;
        id?: string,
        margin?: number,
        width?: string,
        height?: string
        onClick?: (event: MouseEvent) => void;
    } = $props()
    
    let darkerBg = darkerColour(bgColour);
    let textColour = autoTextColour(bgColour)

    function darkerColour(colour: string) {
        let r = colour.substring(0,2)
        let g = colour.substring(2,4)
        let b = colour.substring(4,6) // Fixed: was (4,7)
        
        let rInt: number = parseInt(r, 16)
        let gInt: number = parseInt(g, 16)
        let bInt: number = parseInt(b, 16)
        
        // Subtract 30 but ensure we don't go below 0
        rInt = Math.max(0, rInt - 20)
        gInt = Math.max(0, gInt - 20)
        bInt = Math.max(0, bInt - 20)
        
        // Convert back to hex with proper padding
        r = rInt.toString(16).padStart(2, '0')
        g = gInt.toString(16).padStart(2, '0')
        b = bInt.toString(16).padStart(2, '0')
        
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
    class="flex flex-row rounded-lg p-1.5 pl-3 pr-3 font-medium shadow-md border-1 cursor-pointer"
    style="--text-colour: #{textColour}; background-color: #{bgColour}; color: {textColour}; border-color: #{darkerBg}; margin: {margin}px; width: {width}; height: {height}"
    id="{id}"
    onclick={onClick}
>
    {@render children()}
</button>

<style>
    button :global(*) {
        color: var(--text-colour);
    }
</style>