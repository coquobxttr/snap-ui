<script>
    import { onMount } from 'svelte';
    
    let {
        npm = '',
        yarn = '',
        pnpm = '',
        bun = '',
        defaultTab = 'npm'} = $props();
    
    let activeTab = $state(defaultTab);
    
    const tabs = [
        { 
            id: 'npm', 
            code: npm,
            color: 'border-red-500 text-red-600',
            bgColor: 'bg-red-50'
        },
        { 
            id: 'yarn',  
            code: yarn,
            color: 'border-blue-500 text-blue-600',
            bgColor: 'bg-blue-50'
        },
        { 
            id: 'pnpm', 
            code: pnpm,
            color: 'border-yellow-500 text-yellow-600',
            bgColor: 'bg-yellow-50'
        },
        { 
            id: 'bun', 
            code: bun,
            color: 'border-yellow-500 text-yellow-600',
            bgColor: 'bg-yellow-50'
        }
    ].filter(tab => tab.code);

    function copyToClipboard() {
        const activeCode = tabs.find(tab => tab.id === activeTab)?.code;
        if (activeCode && navigator.clipboard) {
            navigator.clipboard.writeText(activeCode);
        }
    }
</script>

<div class=" w-4/5 my-6 rounded-xl border border-gray-200 overflow-hidden bg-gray-800 shadow-lg">
    <div class="flex h-10 bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
        {#each tabs as tab}
            <button
                class="flex items-center gap-2 px-6 py-4 text-sm transition-all duration-200 relative group
                             {activeTab === tab.id 
                                 ? `bg-white ${tab.color} border-b-2 shadow-sm` 
                                 : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
                             }"
                onclick={() => activeTab = tab.id}
            >
                <span class="tracking-wide">{tab.id}</span>
            </button>
        {/each}
    </div>
    
    <div class="relative">
        {#each tabs as tab}
            {#if activeTab === tab.id}
                <div class="text-gray-100 p-1 overflow-x-auto">
                    <pre class="text-sm leading-relaxed"><code class="text-white">{tab.code}</code></pre>
                </div>
            {/if}
        {/each}
        
        <!-- svelte-ignore a11y_consider_explicit_label -->
        <button
            onclick={copyToClipboard}
            class="absolute top-3 right-3 p-2 bg-gray-700/80 hover:bg-gray-600/80 
                         text-gray-300 hover:text-white rounded-lg text-xs transition-all duration-200
                         backdrop-blur-sm border border-gray-600/50 hover:border-gray-500/50
                         shadow-lg hover:shadow-xl group"
            title="Copy to clipboard"
        >
            <svg class="w-4 h-4 transition-transform duration-200 group-hover:scale-110" 
                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                            d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
        </button>
    </div>
</div>