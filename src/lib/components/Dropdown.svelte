<script lang="ts">
    import { onMount, tick } from 'svelte';
    
    let { 
        targetId, 
        placement = "top", 
        trigger = "click",
        bgColour = "ffffff",
        children
    } = $props();
    
    let DropdownElement: HTMLDivElement | undefined = $state();
    let targetElement: HTMLElement | null = null;
    let isVisible = $state(false);
    let dropdownPosition = $state({ top: 0, left: 0 });
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
    
    onMount(() => {
        // Find the target element by ID
        targetElement = document.getElementById(targetId);
        
        if (!targetElement) {
            console.warn(`Dropdown target element with ID "${targetId}" not found`);
            return;
        }
        
        // Add event listeners
        targetElement.addEventListener('click', toggleDropdown);
        document.addEventListener('click', handleOutsideClick);
        
        return () => {
            if (targetElement) {
                targetElement.removeEventListener('mouseenter', showDropdown);
                targetElement.removeEventListener('mouseleave', hideDropdown);
                targetElement.removeEventListener('click', toggleDropdown);
            }
            document.removeEventListener('click', handleOutsideClick);
        };
    });
    
    async function showDropdown() {
        isVisible = true;
        await tick(); // Wait for DOM update
        await tick(); // Extra tick to ensure Dropdown is fully rendered
        calculatePosition();
    }
    
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
        if (DropdownElement && !DropdownElement.contains(event.target as Node) && 
            targetElement && !targetElement.contains(event.target as Node)) {
            hideDropdown();
        }
    }
    
    function calculatePosition() {
        if (!targetElement || !DropdownElement) return;
        
        const targetRect = targetElement.getBoundingClientRect();
        const DropdownRect = DropdownElement.getBoundingClientRect();
        const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        let top = 0;
        let left = 0;
    
        
        switch (placement) {
            case "top":
                top = targetRect.top + scrollTop - DropdownRect.height;
                left = targetRect.left + scrollLeft + (targetRect.width / 2) - (DropdownRect.width / 2);
                break;
            case "bottom":
                top = targetRect.bottom + scrollTop;
                left = targetRect.left + scrollLeft + (targetRect.width / 2) - (DropdownRect.width / 2);
                break;
            case "left":
                top = targetRect.top + scrollTop + (targetRect.height / 2) - (DropdownRect.height / 2);
                left = targetRect.left + scrollLeft - DropdownRect.width;
                break;
            case "right":
                top = targetRect.top + scrollTop + (targetRect.height / 2) - (DropdownRect.height / 2);
                left = targetRect.right + scrollLeft;
                break;
        }
        
        // Ensure Dropdown stays within viewport
        const padding = 8;
        if (left < padding) left = padding;
        if (left + DropdownRect.width > window.innerWidth - padding) {
            left = window.innerWidth - DropdownRect.width - padding;
        }
        if (top < padding) top = padding;
        if (top + DropdownRect.height > window.innerHeight + scrollTop - padding) {
            top = window.innerHeight + scrollTop - DropdownRect.height - padding;
        }
        
        dropdownPosition = { top, left };
    }
</script>

{#if isVisible}
    <div
        class="rounded-xl m-4 mt-0"
        id="dropMenu"
        style="--bg: #{bgColour}; --bg-hover: #{darkerBg}; --text-colour: {textColour};
                top: {dropdownPosition.top}px;
                left: {dropdownPosition.left}px;"
    >
    {@render children()}
    </div>
{/if}

<style>
    div {
        border-color: var(--bg-hover);
        border-style: solid;
        border-width: 1px;
        width: 150px;
        overflow: hidden;
        display: flex;
        justify-content: center;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

        transform: scale(0.8);
        transition: opacity 0.15s ease-in-out, transform 0.15s ease-in-out;
        animation: dropdown-show 0.15s ease-out forwards;
    }

    @keyframes dropdown-show {
        to {
            opacity: 1;
            transform: scale(1);
        }
    }

    #dropMenu :global(ul hr) {
        width: 50%;
        margin: auto;
    }

    div :global(ul) {
        text-align: center;
        width: 100%;
    }

    div :global(li) {
        cursor: pointer;
        padding: 5px;
        padding-left: 20px;
        padding-right: 20px;
    }

    div :global(li):hover {
        background: var(--bg-hover);
    }
</style>
