<script lang="ts">
	import { goto } from "$app/navigation";
    import { Nora } from "$lib/index.js";
</script>

<Nora.Hero>
    <h1>Make your docs shine with NoraKit</h1>
    <p>Everything you need to build a stellar documentation website. Fast, accessible, and easy-to-use.</p>
    <Nora.Button onClick={() => goto('/docs/Introduction')}>Get Started</Nora.Button>
</Nora.Hero>