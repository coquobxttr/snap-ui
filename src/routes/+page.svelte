<script lang="ts">
    import { Nora } from "$lib/index.js";
</script>

<Nora.Div width=300 height = 200 bgColour="ffffff">
    <Nora.Button bgColour="f57a81" id="defaultButton">
        This is a button
    </Nora.Button>
    <Nora.Tooltip targetId="defaultButton" placement="bottom">
        <strong>Custom HTML Content</strong>
        <br>
        <em>With multiple lines!</em>
    </Nora.Tooltip>
</Nora.Div>