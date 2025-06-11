<script lang="ts">
    import { Nora } from "$lib/index.js";
</script>

<div class="flex flex-col">
    <Nora.Card width=300 height = 200 bgColour="ffffff">
        <Nora.Button bgColour="f57a81" id="defaultButton">
            This is a button
        </Nora.Button>
        <Nora.Tooltip targetId="defaultButton" placement="bottom">
            <strong>Tooltip</strong>
            <br>
            <em>With multiple lines!</em>
        </Nora.Tooltip>
    </Nora.Card>

    <Nora.Button bgColour="ffffff" id="dropdownButton1">Dropdown</Nora.Button>
    <Nora.Dropdown targetId="dropdownButton1">
        <ul>
            <li>Thing 1</li>
            <hr/>
            <li>Thing 2</li>
        </ul>
    </Nora.Dropdown>
</div>
