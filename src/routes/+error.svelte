<script lang="ts">
    
    import Snap from "$lib/index.js";
    import { goto } from "$app/navigation";

    import Panda from '@lucide/svelte/icons/panda';
    
    let x = $state("")
</script>
<div class="py-25">
    <Snap.Hero>
        <div class="flex flex-row">
            <div class="px-20">
                <Panda
                    size={300}/>
            </div>
            <div class="flex flex-col items-end justify-center">
                <h1 class="pr-5">Uh Oh!</h1>
                <p class="pr-5">This page doesn't exist. Maybe something went wrong.</p>
                <Snap.Button bgColour="FF0000" onClick={() => goto('/snap-ui')}>Go Back</Snap.Button>
            </div>
        </div>
    </Snap.Hero>
</div>