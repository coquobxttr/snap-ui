<script lang="ts">
	import { Nora } from "./index.js";
    import { goto } from "$app/navigation";
    import { onMount } from "svelte";
    import { page } from "$app/state";

    let { children, title, desc, order, category} = $props();

    interface SvxModule {
        metadata?: {
            title?: string;
            order?: number;
            category?: string;
        };
        default?: any;
    }

    interface Doc {
        path: string;
        title: string;
        order: number;
        category: string
    }

    interface Heading {
        id: string;
        text: string;
        level: number;
    }

    let docs: Doc[] = $state([]);
    let docCategories: string[] = $state([]);
    let headings: Heading[] = $state([]);
    let activeHeading: string = $state('');

    onMount(async () => {
        const modules = import.meta.glob('/src/routes/docs/**/*.svx');

        const docList = await Promise.all(
            Object.entries(modules).map(async ([Path2D, importFn]) => {
                const module = await importFn() as SvxModule;
                const fileName = Path2D.split('/').pop()?.replace('.svx', '') || '';

                return {
                    path: Path2D,
                    title: module.metadata?.title || fileName,
                    order: module.metadata?.order || 999,
                    category: module.metadata?.category || ''
                }
            })
        )
        //sort by order
        docs = docList.sort((a, b) => a.order - b.order);

        //add add categories to list
        for (let i = 0; i < docs.length; i++) {
            if (docCategories.includes(docs[i].category)) {
                continue 
            } else docCategories.push(docs[i].category);
        }

        // Extract headings from the rendered content
        extractHeadings();
        
        // Set up intersection observer for active heading tracking
        setupIntersectionObserver();
    })

    function extractHeadings() {
        const docColumn = document.getElementById('docColumn');
        if (!docColumn) return;

        const headingElements = docColumn.querySelectorAll('h1, h2, h3, h4, h5, h6');
        
        headings = Array.from(headingElements).map((heading, index) => {
            // Generate ID if it doesn't exist
            if (!heading.id) {
                heading.id = heading.textContent?.toLowerCase()
                    .replace(/[^\w\s-]/g, '')
                    .replace(/\s+/g, '-') || `heading-${index}`;
            }
            
            return {
                id: heading.id,
                text: heading.textContent || '',
                level: parseInt(heading.tagName.charAt(1))
            };
        });
    }

    function setupIntersectionObserver() {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        activeHeading = entry.target.id;
                    }
                });
            },
            {
                rootMargin: '-20% 0% -35% 0%',
                threshold: 0
            }
        );

        headings.forEach((heading) => {
            const element = document.getElementById(heading.id);
            if (element) observer.observe(element);
        });
    }

    function scrollToHeading(headingId: string) {
        const element = document.getElementById(headingId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    function nextPage(order: number) {
        goto(`/docs/${docs[order].title}`)
    }

    function prevPage(order: number) {
        goto(`/docs/${docs[order-2].title}`)
    }
</script>

<div id="Main" class="grid grid-cols-[1fr_2.5fr_1fr]">
    <div id="contentsColumn" class="prose hidden lg:block m-10">
        <h3 class="font-bold mb-4">Contents</h3>
        <ul class="space-y-2 p-0 list-none">
            {#each docCategories as docCategory}
                <h3>{docCategory}</h3>
                {#each docs as doc}
                    {#if doc.category == docCategory}
                        {#if (page.url.pathname).substring((page.url.pathname).lastIndexOf('/') + 1) === doc.title}
                            <li>
                                <button 
                                    class="w-full p-1 text-left transition-color bg-gray-100"
                                    onclick={() => {
                                        goto(`/docs/${doc.title}`)
                                        }}
                                >
                                    {doc.title}
                                </button>
                            </li>
                        {:else}
                            <li>
                                <button 
                                    class="w-full text-left p-1 hover:bg-gray-100 transition-colors"
                                    onclick={() => {
                                        goto(`/docs/${doc.title}`)
                                        }}
                                >
                                    {doc.title}
                                </button>
                            </li>
                        {/if}
                    {/if}
                {/each}
            {/each}
        </ul>
    </div>
    <div id="docColumn" class="col-span-3 lg:col-span-1 overflow-y-auto max-h-screen">
        <div class="flex flex-row w-full items-center">
            <div class="prose m-10 mb-auto ">
                <h1 class="mb-0">{title}</h1>
                <p class="text-gray-500">{desc}</p>
            </div>
            <div class="justify-center items-center min-w-24 m-10 ml-auto">
                {#if (order == 1)}
                    <div class="ml-12">
                        <Nora.Button margin={4} onClick={() => nextPage(order)}>&gt;</Nora.Button>
                    </div>
                {:else if (order >= docs.length)}
                    <Nora.Button margin={4} onClick={() => prevPage(order)}>&lt;</Nora.Button>
                {:else}
                    <Nora.Button margin={4} onClick={() => prevPage(order)}>&lt;</Nora.Button>
                    <Nora.Button margin={4} onClick={() => nextPage(order)}>&gt;</Nora.Button>
                {/if}                
            </div>
        </div>
        <div class="prose m-10">
            {@render children()}
        </div>
    </div>
    <div id="headersColumn" class="hidden lg:block m-10">
        <div class="prose">
            <h3 class="mb-4">On this page</h3>
            {#if headings.length > 0}
                <nav class="space-y-1">
                    {#each headings as heading}
                        <button
                            class="block w-full text-left text-sm py-1 px-2 rounded transition-colors hover:bg-gray-100 {
                                activeHeading === heading.id ? 'bg-blue-50 text-blue-600' : 'text-gray-600'
                            }"
                            style="margin-left: {(heading.level - 1) * 12}px"
                            onclick={() => scrollToHeading(heading.id)}
                        >
                            {heading.text}
                        </button>
                    {/each}
                </nav>
            {:else}
                <p class="text-gray-500 text-sm">No headings found</p>
            {/if}
        </div>
    </div>
</div>