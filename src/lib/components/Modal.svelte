<script lang="ts">
    import { fade } from "svelte/transition";
    
    let { 
        triggerText = "Open Modal",
        title = "", 
        bgColour = "ffffff", 
        triggerBgColour = "3b82f6",
        children 
    } = $props();
    
    let isOpen = $state(false);
    let textColour = autoTextColour(bgColour);
    let darkerBg = darkerColour(bgColour);
    let triggerDarkerBg = darkerColour(triggerBgColour);
    let triggerTextColour = autoTextColour(triggerBgColour);

    function darkerColour(colour: string) {
        let r = colour.substring(0,2);
        let g = colour.substring(2,4);
        let b = colour.substring(4,6);

        let rInt: number = parseInt(r, 16);
        let gInt: number = parseInt(g, 16);
        let bInt: number = parseInt(b, 16);

        r = Math.max(0, rInt - 30).toString(16).padStart(2, '0');
        g = Math.max(0, gInt - 30).toString(16).padStart(2, '0');
        b = Math.max(0, bInt - 30).toString(16).padStart(2, '0');
        
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

    function openModal() {
        isOpen = true;
    }

    function closeModal() {
        isOpen = false;
    }

    function handleBackdropClick(e: MouseEvent) {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    }
</script>

<!-- Trigger Button -->
<button 
    class="w-fit rounded-lg p-1.5 pl-3 pr-3 m-4 font-medium shadow-md border-1 cursor-pointer"
    style="--bg: #{bgColour}; --bg-hover: #{darkerBg}; --text-colour: {textColour};"
    onclick={openModal}
>
    {triggerText}
</button>

<!-- Modal -->
{#if isOpen}
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div 
    class="fixed inset-0 flex items-center justify-center z-50"
    style="background: rgba(0, 0, 0, 0.5);"
    onclick={handleBackdropClick}
    transition:fade={{ duration: 150 }}
  >
        <div 
            class="rounded-lg shadow-lg max-w-md w-full mx-4 p-6"
            style="background-color: #{bgColour}; color: {textColour}; --bg-hover: #{darkerBg};"
        >
            {#if title}
                <div class="flex justify-between items-center mb-4">
                    <h2 class="text-xl font-bold">{title}</h2>
                    <button 
                        class="text-2xl hover:opacity-70"
                        onclick={closeModal}
                    >
                        ×
                    </button>
                </div>
            {/if}
            
            <div class="modal-body">
                {#if children}
                    {@render children()}
                {/if}
            </div>
        </div>
    </div>
{/if}

<style>
    button {
        border-color: var(--bg-hover);
    }
    button:hover {
        background-color: var(--bg-hover);
    }
</style>