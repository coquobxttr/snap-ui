<script lang="ts">
	import { goto } from "$app/navigation";
    import { Nora } from "$lib/index.js";
    
</script>

<div id="Main" class="flex flex-col items-center">
    <Nora.Hero>
        <h1>Make your websites shine with NoraKit</h1>
        <p>something else</p>
        <div class="flex flex-row">
            <Nora.Button onClick={() => goto('/docs/Introduction')}>Get Started</Nora.Button>

        </div>
    </Nora.Hero>

    <Nora.Divider/>

    <div class="w-fit grid grid-cols-1 md:grid-cols-2">
        <Nora.Card width="400" prose="true">
            <h3>You can do a lot i guess...</h3>
        </Nora.Card>
        <Nora.Card width="400" prose="true">
            idk what to put here
        </Nora.Card>
        <Nora.Card width="400" prose="true">
            lmfao
        </Nora.Card>
        <Nora.Card width="400" prose="true">
            <h3>Tailwindcss support</h3>
            <p>It looks <code>weird here</code></p>
        </Nora.Card>
    </div>

    <Nora.Hero>
        hi
    </Nora.Hero>
</div>