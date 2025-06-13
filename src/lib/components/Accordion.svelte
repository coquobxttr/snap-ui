<script lang="ts">
    import { slide } from "svelte/transition";
    
    let { 
        items = [],
        bgColour = "ffffff", 
        allowMultiple = false,
        width = 300
    } = $props();
    
    let openItems = $state(new Set<number>());
    
    // Add some default items if none provided
    let accordionItems = items.length > 0 ? items : [
        {
            title: "Default Item 1",
            content: "<p>This is the default content for item 1.</p>"
        },
        {
            title: "Default Item 2", 
            content: "<p>This is the default content for item 2.</p>"
        }
    ];
    
    let darkerBg = darkerColour(bgColour);
    let textColour = autoTextColour(bgColour);
    
    function darkerColour(colour: string) {
        let r = colour.substring(0,2);
        let g = colour.substring(2,4);
        let b = colour.substring(4,6);
        let rInt: number = parseInt(r, 16);
        let gInt: number = parseInt(g, 16);
        let bInt: number = parseInt(b, 16);
        r = Math.max(0, rInt - 20).toString(16).padStart(2, '0');
        g = Math.max(0, gInt - 20).toString(16).padStart(2, '0');
        b = Math.max(0, bInt - 20).toString(16).padStart(2, '0');
        return `${r}${g}${b}`;
    }

    function getRelativeLuminance(hexColour: string): number {
        const r = parseInt(hexColour.substring(0, 2), 16);
        const g = parseInt(hexColour.substring(2, 4), 16);
        const b = parseInt(hexColour.substring(4, 6), 16);
        const rNorm = r / 255;
        const gNorm = g / 255;
        const bNorm = b / 255;
        const rLinear = rNorm <= 0.03928 ? rNorm / 12.92 : Math.pow((rNorm + 0.055) / 1.055, 2.4);
        const gLinear = gNorm <= 0.03928 ? gNorm / 12.92 : Math.pow((gNorm + 0.055) / 1.055, 2.4);
        const bLinear = bNorm <= 0.03928 ? bNorm / 12.92 : Math.pow((bNorm + 0.055) / 1.055, 2.4);
        return 0.2126 * rLinear + 0.7152 * gLinear + 0.0722 * bLinear;
    }

    function autoTextColour(bgColour: string) {
        const brightness = getRelativeLuminance(bgColour);
        return brightness > 0.5 ? 'black' : 'white';
    }
    
    function toggleItem(index: number) {
        const newOpenItems = new Set(openItems);
        
        if (allowMultiple) {
            if (newOpenItems.has(index)) {
                newOpenItems.delete(index);
            } else {
                newOpenItems.add(index);
            }
        } else {
            if (newOpenItems.has(index)) {
                newOpenItems.clear();
            } else {
                newOpenItems.clear();
                newOpenItems.add(index);
            }
        }
        
        openItems = newOpenItems;
    }
    
    function handleKeydown(event: KeyboardEvent, index: number) {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            toggleItem(index);
        }
    }
</script>

<div class="rounded-lg overflow-hidden border-1" style="border-color: #{darkerBg}; width: {width}px;">
    {#each accordionItems as item, index}
        <div class="b border-b-1 border-solid" style="border-color: #{darkerBg};">
            <!-- Header -->
            <button
                class="w-full text-left p-4 flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-blue-500 hover:brightness-95"
                style="background-color: #{bgColour}; color: {textColour};"
                onclick={() => toggleItem(index)}
                onkeydown={(e) => handleKeydown(e, index)}
                aria-expanded={openItems.has(index)}
            >
                <span class="font-medium">{item.title}</span>
                <span 
                    class="font-[0.875rem] transition-transform duration-200 {openItems.has(index) ? 'rotate-180' : ''}"
                >
                    ▼
                </span>
            </button>
            
            <!-- Content -->
            {#if openItems.has(index)}
                <div 
                    class="accordion-content p-4"
                    style="background-color: #{bgColour}; color: {textColour};"
                    transition:slide={{ duration: 300 }}
                >
                    {#if item.content}
                        {@html item.content}
                    {/if}
                </div>
            {/if}
        </div>
    {/each}
</div>