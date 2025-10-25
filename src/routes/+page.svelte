<script lang="ts">
	import { goto } from "$app/navigation";
    import { Snap } from "$lib/index.js";
</script>

<div id="Main" class="flex flex-col items-center">
    <Snap.Hero>
        <h1>Make your websites shine with SnapUI</h1>
        <p>A modern, lightweight component library for SvelteKit that helps you build beautiful interfaces faster</p>
        <div class="flex flex-row">
            <Snap.Button onClick={() => goto('/docs/introduction')}>Get Started</Snap.Button>
            <a target="_blank" href="https://www.github.com/coquobxttr/snap-ui">
                <Snap.Button bgColour="000000">View on Github</Snap.Button>
            </a>
        </div>
    </Snap.Hero>

    <Snap.Divider/>

    <div class="w-fit grid grid-cols-1 md:grid-cols-2">
        <Snap.Card width="400" prose="true">
            <h3>Lightning Fast</h3>
            <p>Built for performance with minimal bundle size. Get the components you need without the bloat that slows down your site.</p>
        </Snap.Card>
        <Snap.Card width="400" prose="true">
            <h3>Fully Customisable</h3>
            <p>Every component is designed to be styled and themed to match your brand. No fighting with opinionated defaults.</p>
        </Snap.Card>
        <Snap.Card width="400" prose="true">
            <h3>Mobile First</h3>
            <p>Responsive design built in from the ground up. Your components look great on every device, every time.</p>
        </Snap.Card>
        <Snap.Card width="400" prose="true">
            <div class="flex flex-row items-center">
                <h3 class="mt-0 mb-0 pr-5">Tailwind CSS Support</h3>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" viewBox="0 0 24 24"><path fill="#3cbcf4" fill-rule="evenodd" d="M7 9.969q1-4.063 5-4.063c4 0 4.5 3.047 6.5 3.555q2 .508 3.5-1.524Q21 12 17 12c-4 0-4.5-3.047-6.5-3.555Q8.5 7.938 7 9.97m-5 6.094Q3 12 7 12c4 0 4.5 3.047 6.5 3.555q2 .507 3.5-1.524q-1 4.063-5 4.063c-4 0-4.5-3.047-6.5-3.555q-2-.508-3.5 1.524" clip-rule="evenodd"/></svg>
            </div>
            <p>Seamlessly integrates with Tailwind CSS. Use utility classes like <code>bg-blue-500</code> and <code>text-lg</code> right out of the box.</p>
        </Snap.Card>
    </div>

    <Snap.Divider/>

    <Snap.Hero>
        <h1>Want to make a documentation page like this?</h1>
        <p>Check out <a href="" target="_blank">GingerSnap</a>, the easy to use docs site builder that powers this very page!</p>
    </Snap.Hero>
</div>