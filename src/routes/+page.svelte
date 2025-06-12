<script lang="ts">
    import { Nora } from "$lib/index.js";

    function lol() {
        console.log("Example Click Event")
    }
</script>

<div class="flex flex-col w-full h-full">
    <Nora.Card width=300 height = 200 bgColour="ffffff">
        <Nora.Button bgColour="f57a81" id="defaultButton" onClick={lol}>
            This is a button
        </Nora.Button>
        <Nora.Tooltip targetId="defaultButton" placement="bottom">
            <strong>Tooltip</strong>
            <br>
            <em>With multiple lines!</em>
        </Nora.Tooltip>
    </Nora.Card>

    <Nora.Button id="dropdownButton1">Dropdown</Nora.Button>
    <Nora.Dropdown targetId="dropdownButton1">
        <ul>
            <li>Thing 1</li>
            <hr/>
            <li>Thing 2</li>
        </ul>
    </Nora.Dropdown>

    <Nora.Modal 
        triggerText="Open My Modal"
        title="Example Modal" 
        bgColour="ffffff"
        triggerBgColour="10b981"
    >
        <h1>I'm a heading</h1>
        <p><em>Hello hello</em></p>
        <p>This modal manages its own state!</p>
    </Nora.Modal>

    <Nora.Accordion
        width={400}
        allowMultiple={true}
        items={[
            {
            title: "What is this accordion?",
            content: "<p>This is the first accordion item. It contains <strong>HTML content</strong> and can be expanded or collapsed.</p>"
            },
            {
            title: "How does it work?",
            content: "<p>Click on any header to expand or collapse the content. You can have multiple items open at once!</p>"
            }
        ]}
    />
</div>
