declare const Tooltip: import("svelte").Component<{
    targetId: any;
    content?: string;
    placement?: string;
    trigger?: string;
    arrow?: boolean;
    children: any;
}, {}, "">;
type Tooltip = ReturnType<typeof Tooltip>;
export default Tooltip;
