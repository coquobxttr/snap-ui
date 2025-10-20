<script lang="ts">
    import { onMount, tick } from 'svelte';
    
    let { 
        targetId, 
        content = "Tooltip text", 
        placement = "top", 
        trigger = "hover",
        arrow = true,
        children = null
    } = $props();
    
    let tooltipElement: HTMLDivElement | undefined = $state();
    let targetElement: HTMLElement | null = null;
    let isVisible = $state(false);
    let tooltipPosition = $state({ top: 0, left: 0 });
    
    onMount(() => {
        // Find the target element by ID
        targetElement = document.getElementById(targetId);
        
        if (!targetElement) {
            console.warn(`Tooltip target element with ID "${targetId}" not found`);
            return;
        }
        
        // Add event listeners based on trigger type
        if (trigger === "hover") {
            targetElement.addEventListener('mouseenter', showTooltip);
            targetElement.addEventListener('mouseleave', hideTooltip);
        } else if (trigger === "click") {
            targetElement.addEventListener('click', toggleTooltip);
            document.addEventListener('click', handleOutsideClick);
        }
        
        return () => {
            if (targetElement) {
                targetElement.removeEventListener('mouseenter', showTooltip);
                targetElement.removeEventListener('mouseleave', hideTooltip);
                targetElement.removeEventListener('click', toggleTooltip);
            }
            document.removeEventListener('click', handleOutsideClick);
        };
    });
    
    async function showTooltip() {
        isVisible = true;
        await tick(); // Wait for DOM update
        await tick(); // Extra tick to ensure tooltip is fully rendered
        calculatePosition();
    }
    
    function hideTooltip() {
        isVisible = false;
    }
    
    function toggleTooltip() {
        isVisible = !isVisible;
        if (isVisible) {
            tick().then(() => {
                tick().then(calculatePosition);
            });
        }
    }
    
    function handleOutsideClick(event: MouseEvent) {
        if (tooltipElement && !tooltipElement.contains(event.target as Node) && 
            targetElement && !targetElement.contains(event.target as Node)) {
            hideTooltip();
        }
    }
    
    function calculatePosition() {
        if (!targetElement || !tooltipElement) return;
        
        const targetRect = targetElement.getBoundingClientRect();
        const tooltipRect = tooltipElement.getBoundingClientRect();
        const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        let top = 0;
        let left = 0;
        
        // Add offset for arrow (8px) to account for arrow space
        const arrowOffset = arrow ? 8 : 4;
        
        switch (placement) {
            case "top":
                top = targetRect.top + scrollTop - tooltipRect.height - arrowOffset;
                left = targetRect.left + scrollLeft + (targetRect.width / 2) - (tooltipRect.width / 2);
                break;
            case "bottom":
                top = targetRect.bottom + scrollTop + arrowOffset;
                left = targetRect.left + scrollLeft + (targetRect.width / 2) - (tooltipRect.width / 2);
                break;
            case "left":
                top = targetRect.top + scrollTop + (targetRect.height / 2) - (tooltipRect.height / 2);
                left = targetRect.left + scrollLeft - tooltipRect.width - arrowOffset;
                break;
            case "right":
                top = targetRect.top + scrollTop + (targetRect.height / 2) - (tooltipRect.height / 2);
                left = targetRect.right + scrollLeft + arrowOffset;
                break;
        }
        
        // Ensure tooltip stays within viewport
        const padding = 8;
        if (left < padding) left = padding;
        if (left + tooltipRect.width > window.innerWidth - padding) {
            left = window.innerWidth - tooltipRect.width - padding;
        }
        if (top < padding) top = padding;
        if (top + tooltipRect.height > window.innerHeight + scrollTop - padding) {
            top = window.innerHeight + scrollTop - tooltipRect.height - padding;
        }
        
        tooltipPosition = { top, left };
    }
</script>

{#if isVisible}
    <div
        bind:this={tooltipElement}
        class="tooltip"
        class:tooltip-arrow={arrow}
        class:placement-top={placement === "top" && arrow}
        class:placement-bottom={placement === "bottom" && arrow}
        class:placement-left={placement === "left" && arrow}
        class:placement-right={placement === "right" && arrow}
        style="top: {tooltipPosition.top}px; left: {tooltipPosition.left}px;"
    >
        {#if children}
            {@render children?.()}
        {:else}
            {content}
        {/if}
    </div>
{/if}

<style>
    .tooltip {
        position: absolute;
        z-index: 1000;
        background-color: #1f2937;
        color: white;
        padding: 8px 12px;
        border-radius: 6px;
        font-size: 14px;
        line-height: 1.4;
        max-width: 200px;
        word-wrap: break-word;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        pointer-events: none;
        opacity: 0;
        transform: scale(0.8);
        transition: opacity 0.15s ease-in-out, transform 0.15s ease-in-out;
        animation: tooltip-show 0.15s ease-out forwards;
    }
    
    @keyframes tooltip-show {
        to {
            opacity: 1;
            transform: scale(1);
        }
    }
    
    .tooltip-arrow::before {
        content: '';
        position: absolute;
        width: 0;
        height: 0;
        border: 6px solid transparent;
    }
    
    .placement-top::before {
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        border-top-color: #1f2937;
    }
    
    .placement-bottom::before {
        bottom: 100%;
        left: 50%;
        transform: translateX(-50%);
        border-bottom-color: #1f2937;
    }
    
    .placement-left::before {
        left: 100%;
        top: 50%;
        transform: translateY(-50%);
        border-left-color: #1f2937;
    }
    
    .placement-right::before {
        right: 100%;
        top: 50%;
        transform: translateY(-50%);
        border-right-color: #1f2937;
    }
</style>