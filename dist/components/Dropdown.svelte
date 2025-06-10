<script lang="ts">
    import { onMount, tick } from "svelte";

    let { 
        targetId, 
        bgColour = "ffffff",
        placement = "top", 
        arrow = true,
        children
    } = $props();
    let darkerBg = darkerColour(bgColour);
    let textColour = autoTextColour(bgColour);

    let dropdownElement: HTMLDivElement | undefined = $state();
    let targetElement: HTMLElement | null = null;
    let isVisible = $state(false);
    let dropdownPosi = $state({ top: 0, left: 0 });
    
    onMount(() => {
        // Find the target element by ID
        targetElement = document.getElementById(targetId);
        
        if (!targetElement) {
            console.warn(`Dropdown target element with ID "${targetId}" not found`);
            return;
        }
        
        // Add event listeners based on trigger type
        targetElement.addEventListener('click', toggleDropdown);
        document.addEventListener('click', handleOutsideClick);
        
        return () => {
            if (targetElement) {
                targetElement.removeEventListener('click', toggleDropdown);
            }
            document.removeEventListener('click', handleOutsideClick);
        };
    });
    
    function hideDropdown() {
        isVisible = false;
    }
    
    function toggleDropdown() {
        isVisible = !isVisible;
        if (isVisible) {
            tick().then(() => {
                tick().then(calculatePosition);
            });
        }
    }
    
    function handleOutsideClick(event: MouseEvent) {
        if (dropdownElement && !dropdownElement.contains(event.target as Node) && 
            targetElement && !targetElement.contains(event.target as Node)) {
            hideDropdown();
        }
    }
    
    function calculatePosition() {
        if (!targetElement || !dropdownElement) return;
        
        const targetRect = targetElement.getBoundingClientRect();
        const dropdownRect = dropdownElement.getBoundingClientRect();
        const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        let top = 0;
        let left = 0;
        
        // Add offset for arrow (8px) to account for arrow space
        const arrowOffset = arrow ? 8 : 4;
        
        switch (placement) {
            case "top":
                top = targetRect.top + scrollTop - dropdownRect.height - arrowOffset;
                left = targetRect.left + scrollLeft + (targetRect.width / 2) - (dropdownRect.width / 2);
                break;
            case "bottom":
                top = targetRect.bottom + scrollTop + arrowOffset;
                left = targetRect.left + scrollLeft + (targetRect.width / 2) - (dropdownRect.width / 2);
                break;
            case "left":
                top = targetRect.top + scrollTop + (targetRect.height / 2) - (dropdownRect.height / 2);
                left = targetRect.left + scrollLeft - dropdownRect.width - arrowOffset;
                break;
            case "right":
                top = targetRect.top + scrollTop + (targetRect.height / 2) - (dropdownRect.height / 2);
                left = targetRect.right + scrollLeft + arrowOffset;
                break;
        }
        
        // Ensure dropdown stays within viewport
        const padding = 8;
        if (left < padding) left = padding;
        if (left + dropdownRect.width > window.innerWidth - padding) {
            left = window.innerWidth - dropdownRect.width - padding;
        }
        if (top < padding) top = padding;
        if (top + dropdownRect.height > window.innerHeight + scrollTop - padding) {
            top = window.innerHeight + scrollTop - dropdownRect.height - padding;
        }
        
        dropdownPosi = { top, left };
    }

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

{#if isVisible}
    <div
        class="rounded-xl"
        style="--bg: #{bgColour}; --bg-hover: #{darkerBg}; --text-colour: {textColour};
                top: {dropdownPosi.top}px;
                left: {dropdownPosi.left}px;"
    >
    {@render children()}
    </div>
{/if}

<style>
    div { 
        border-color: var(--bg-hover);
        border-style: solid;
        border-width: 1px;
        width: fit-content;
        overflow: hidden;
        display: flex;
        justify-content: center;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }

    div :global(ul) {
        width: fit-content;
    }

    div :global(li) {
        cursor: pointer;
        padding: 5px;
        padding-left: 20px;
        padding-right: 20px;
        border-bottom: 1px;
        border-style: solid;
        border-color: var(--bg-hover);
    }

    div :global(li):hover {
        background: var(--bg-hover);
    }

    div :global(li):last-child {
        border-bottom: none;
    }
</style>