import{l as x,s as f}from"./HFsV3Kbj.js";import"./DffqL6pR.js";import{j as g,B as s,r as b,z as n,A as a,u as F,l as v}from"./DGn3Q9ok.js";import{D as w}from"./mtPfJ8e0.js";import{S as l}from"./CW08dy0m.js";const t={title:"Accordion",desc:"A flexible, accessible accordion component with smooth animations and customizable styling.",category:"Components",order:3},{title:L,desc:D,category:j,order:B}=t;var k=g(`<h2>Basic Usage</h2> <pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span style="color:#24292E">&#x3C;</span><span style="color:#22863A">script</span><span style="color:#24292E">></span></span>
<span class="line"><span style="color:#D73A49">    import</span><span style="color:#24292E"> &#123; Snap &#125; </span><span style="color:#D73A49">from</span><span style="color:#032F62"> 'snap-ui'</span><span style="color:#24292E">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49">    const</span><span style="color:#005CC5"> items</span><span style="color:#D73A49"> =</span><span style="color:#24292E"> [</span></span>
<span class="line"><span style="color:#24292E">        &#123;</span></span>
<span class="line"><span style="color:#24292E">            title: </span><span style="color:#032F62">"What is this accordion?"</span><span style="color:#24292E">,</span></span>
<span class="line"><span style="color:#24292E">            content: </span><span style="color:#032F62">"&#x3C;p>This is the first accordion item.&#x3C;/p>"</span></span>
<span class="line"><span style="color:#24292E">        &#125;,</span></span>
<span class="line"><span style="color:#24292E">        &#123;</span></span>
<span class="line"><span style="color:#24292E">            title: </span><span style="color:#032F62">"How does it work?"</span><span style="color:#24292E">,</span></span>
<span class="line"><span style="color:#24292E">            content: </span><span style="color:#032F62">"&#x3C;p>Click on any header to expand or collapse the content.&#x3C;/p>"</span></span>
<span class="line"><span style="color:#24292E">        &#125;</span></span>
<span class="line"><span style="color:#24292E">    ];</span></span>
<span class="line"><span style="color:#24292E">&#x3C;/</span><span style="color:#22863A">script</span><span style="color:#24292E">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E">&#x3C;</span><span style="color:#005CC5">Snap</span><span style="color:#24292E">.</span><span style="color:#005CC5">Accordion</span><span style="color:#6F42C1"> &#123;</span><span style="color:#24292E">items</span><span style="color:#6F42C1">&#125;</span><span style="color:#24292E">/></span></span></code></pre> <h2>Props</h2> <table><thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>items</code></td><td><code>Array&lt;&#123;title: string, content: string&#125;&gt;</code></td><td><code>[]</code></td><td>Array of accordion items with title and HTML content</td></tr><tr><td><code>bgColour</code></td><td><code>string</code></td><td><code>"ffffff"</code></td><td>Background color as hex string (without #)</td></tr><tr><td><code>allowMultiple</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Whether multiple panels can be open simultaneously</td></tr><tr><td><code>width</code></td><td><code>number</code></td><td><code>300</code></td><td>Width of the accordion in pixels</td></tr></tbody></table> <h2>Examples</h2> <h3>Basic Accordion</h3> <div class="flex justify-center items-center mt-15 mb-15"><!></div> <pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span style="color:#24292E">&#x3C;</span><span style="color:#005CC5">Snap</span><span style="color:#24292E">.</span><span style="color:#005CC5">Accordion</span></span>
<span class="line"><span style="color:#6F42C1">    width</span><span style="color:#24292E">=&#123;</span><span style="color:#005CC5">400</span><span style="color:#24292E">&#125;</span></span>
<span class="line"><span style="color:#6F42C1">    allowMultiple</span><span style="color:#24292E">=&#123;</span><span style="color:#005CC5">false</span><span style="color:#24292E">&#125;</span></span>
<span class="line"><span style="color:#6F42C1">    items</span><span style="color:#24292E">=&#123;[</span></span>
<span class="line"><span style="color:#24292E">        &#123;</span></span>
<span class="line"><span style="color:#24292E">        title: </span><span style="color:#032F62">"This accordion can only open 1 at a time"</span><span style="color:#24292E">,</span></span>
<span class="line"><span style="color:#24292E">        content: </span><span style="color:#032F62">"&#x3C;p>This is the first accordion item. It contains &#x3C;strong>HTML content&#x3C;/strong> and can be expanded or collapsed.&#x3C;/p>"</span></span>
<span class="line"><span style="color:#24292E">        &#125;,</span></span>
<span class="line"><span style="color:#24292E">        &#123;</span></span>
<span class="line"><span style="color:#24292E">        title: </span><span style="color:#032F62">"How does it work?"</span><span style="color:#24292E">,</span></span>
<span class="line"><span style="color:#24292E">        content: </span><span style="color:#032F62">"&#x3C;p>Click on any header to expand or collapse the content. You can have multiple items open at once!&#x3C;/p>"</span></span>
<span class="line"><span style="color:#24292E">        &#125;</span></span>
<span class="line"><span style="color:#24292E">    ]&#125;</span></span>
<span class="line"><span style="color:#24292E">/></span></span></code></pre> <h3>Multiple Panels Open</h3> <div class="flex justify-center items-center mt-15 mb-15"><!></div> <pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span style="color:#24292E">&#x3C;</span><span style="color:#22863A">div</span><span style="color:#6F42C1"> class</span><span style="color:#24292E">=</span><span style="color:#032F62">"flex justify-center items-center mt-15 mb-15"</span><span style="color:#24292E">></span></span>
<span class="line"><span style="color:#24292E">    &#x3C;</span><span style="color:#005CC5">Snap</span><span style="color:#24292E">.</span><span style="color:#005CC5">Accordion</span></span>
<span class="line"><span style="color:#6F42C1">        width</span><span style="color:#24292E">=&#123;</span><span style="color:#005CC5">400</span><span style="color:#24292E">&#125;</span></span>
<span class="line"><span style="color:#6F42C1">        allowMultiple</span><span style="color:#24292E">=&#123;</span><span style="color:#005CC5">true</span><span style="color:#24292E">&#125;</span></span>
<span class="line"><span style="color:#6F42C1">        items</span><span style="color:#24292E">=&#123;[</span></span>
<span class="line"><span style="color:#24292E">            &#123;</span></span>
<span class="line"><span style="color:#24292E">            title: </span><span style="color:#032F62">"This accordion can open multiple at a time?"</span><span style="color:#24292E">,</span></span>
<span class="line"><span style="color:#24292E">            content: </span><span style="color:#032F62">"&#x3C;p>This is the first accordion item. It contains &#x3C;strong>HTML content&#x3C;/strong> and can be expanded or collapsed.&#x3C;/p>"</span></span>
<span class="line"><span style="color:#24292E">            &#125;,</span></span>
<span class="line"><span style="color:#24292E">            &#123;</span></span>
<span class="line"><span style="color:#24292E">            title: </span><span style="color:#032F62">"How does it work?"</span><span style="color:#24292E">,</span></span>
<span class="line"><span style="color:#24292E">            content: </span><span style="color:#032F62">"&#x3C;p>Click on any header to expand or collapse the content. You can have multiple items open at once!&#x3C;/p>"</span></span>
<span class="line"><span style="color:#24292E">            &#125;</span></span>
<span class="line"><span style="color:#24292E">        ]&#125;</span></span>
<span class="line"><span style="color:#24292E">    /></span></span>
<span class="line"><span style="color:#24292E">&#x3C;/</span><span style="color:#22863A">div</span><span style="color:#24292E">></span></span></code></pre> <h3>Custom Styling</h3> <div class="flex justify-center items-center mt-15 mb-15"><!></div> <pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span style="color:#24292E">&#x3C;</span><span style="color:#005CC5">Snap</span><span style="color:#24292E">.</span><span style="color:#005CC5">Accordion</span></span>
<span class="line"><span style="color:#6F42C1">    bgColour</span><span style="color:#24292E">=</span><span style="color:#032F62">"</span><span style="color:#005CC5">2563eb</span><span style="color:#032F62">"</span></span>
<span class="line"><span style="color:#6F42C1">    width</span><span style="color:#24292E">=&#123;</span><span style="color:#005CC5">500</span><span style="color:#24292E">&#125;</span></span>
<span class="line"><span style="color:#6F42C1">    items</span><span style="color:#24292E">=&#123;[</span></span>
<span class="line"><span style="color:#24292E">    &#123;</span></span>
<span class="line"><span style="color:#24292E">        title: </span><span style="color:#032F62">"Blue Accordion"</span><span style="color:#24292E">,</span></span>
<span class="line"><span style="color:#24292E">        content: </span><span style="color:#032F62">"&#x3C;p>This accordion has a blue background with auto-contrasted text.&#x3C;/p>"</span></span>
<span class="line"><span style="color:#24292E">    &#125;</span></span>
<span class="line"><span style="color:#24292E">    ]&#125;</span></span>
<span class="line"><span style="color:#24292E">/></span></span></code></pre> <h3>Rich HTML Content</h3> <div class="flex justify-center items-center mt-15 mb-15"><!></div> <pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span style="color:#24292E">&#x3C;</span><span style="color:#005CC5">Snap</span><span style="color:#24292E">.</span><span style="color:#005CC5">Accordion</span></span>
<span class="line"><span style="color:#6F42C1">    items</span><span style="color:#24292E">=&#123;[</span></span>
<span class="line"><span style="color:#24292E">    &#123;</span></span>
<span class="line"><span style="color:#24292E">        title: </span><span style="color:#032F62">"Rich Content"</span><span style="color:#24292E">,</span></span>
<span class="line"><span style="color:#24292E">        content: </span><span style="color:#032F62">&#96;</span></span>
<span class="line"><span style="color:#032F62">            &#x3C;div></span></span>
<span class="line"><span style="color:#032F62">                &#x3C;h3>Subheading&#x3C;/h3></span></span>
<span class="line"><span style="color:#032F62">                &#x3C;p>You can include &#x3C;strong>any HTML&#x3C;/strong> in the content.&#x3C;/p></span></span>
<span class="line"><span style="color:#032F62">                &#x3C;ul></span></span>
<span class="line"><span style="color:#032F62">                    &#x3C;li>Lists work great&#x3C;/li></span></span>
<span class="line"><span style="color:#032F62">                    &#x3C;li>Images, links, everything!&#x3C;/li></span></span>
<span class="line"><span style="color:#032F62">                &#x3C;/ul></span></span>
<span class="line"><span style="color:#032F62">            &#x3C;/div></span></span>
<span class="line"><span style="color:#032F62">        &#96;</span></span>
<span class="line"><span style="color:#24292E">    &#125;]&#125;</span></span>
<span class="line"><span style="color:#24292E">/></span></span></code></pre> <h2>Behavior</h2> <h3>Default Content</h3> <p>If no <code>items</code> are provided, the component displays two default items for demonstration purposes.</p>`,1);function A(i,d){const y=x(d,["children","$$slots","$$events","$$legacy"]);w(i,f(()=>y,()=>t,{children:(h,_)=>{var c=k(),o=s(b(c),12),C=n(o);l.Accordion(C,{width:400,allowMultiple:!1,items:[{title:"This accordion can only open 1 at a time",content:"<p>This is the first accordion item. It contains <strong>HTML content</strong> and can be expanded or collapsed.</p>"},{title:"How does it work?",content:"<p>Click on any header to expand or collapse the content. You can have multiple items open at once!</p>"}]}),a(o);var e=s(o,6),E=n(e);l.Accordion(E,{width:400,allowMultiple:!0,items:[{title:"This accordion can open multiple at a time?",content:"<p>This is the first accordion item. It contains <strong>HTML content</strong> and can be expanded or collapsed.</p>"},{title:"How does it work?",content:"<p>Click on any header to expand or collapse the content. You can have multiple items open at once!</p>"}]}),a(e);var p=s(e,6),m=n(p);l.Accordion(m,{bgColour:"2563eb",width:500,items:[{title:"Blue Accordion",content:"<p>This accordion has a blue background with auto-contrasted text.</p>"}]}),a(p);var r=s(p,6),u=n(r);l.Accordion(u,{items:[{title:"Rich Content",content:`
                <div>
                    <h3>Subheading</h3>
                    <p>You can include <strong>any HTML</strong> in the content.</p>
                    <ul>
                        <li>Lists work great</li>
                        <li>Images, links, everything!</li>
                    </ul>
                </div>
            `}]}),a(r),F(8),v(h,c)},$$slots:{default:!0}}))}const I=Object.freeze(Object.defineProperty({__proto__:null,default:A,metadata:t},Symbol.toStringTag,{value:"Module"}));export{A as _,I as a};
