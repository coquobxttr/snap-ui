<script lang="ts">
    let { children, bgColour = "ffffff" } = $props()
</script>

<div
    class="flex flex-col items-center text-center p-10 w-full h-fit pt-10 pb-10 prose max-w-none"
    style="background-color: #{bgColour};"
>
    {@render children?.()}
</div>