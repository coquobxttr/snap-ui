declare const Accordion: import("svelte").Component<{
    items?: any[];
    bgColour?: string;
    allowMultiple?: boolean;
    width?: number;
}, {}, "">;
type Accordion = ReturnType<typeof Accordion>;
export default Accordion;
