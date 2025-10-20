export declare const Snap: {
    Button: import("svelte").Component<{
        bgColour?: string;
        children?: any;
        id?: string;
        margin?: number;
        width?: string;
        height?: string;
        shadow?: boolean;
        border?: boolean;
        onClick?: any;
    }, {}, "">;
    Card: import("svelte").Component<{
        children?: any;
        width?: string;
        height?: string;
        bgColour?: string;
        prose?: string;
    }, {}, "">;
    Tooltip: import("svelte").Component<{
        targetId: any;
        content?: string;
        placement?: string;
        trigger?: string;
        arrow?: boolean;
        children?: any;
    }, {}, "">;
    Dropdown: import("svelte").Component<{
        targetId: any;
        placement?: string;
        bgColour?: string;
        children?: any;
    }, {}, "">;
    Modal: import("svelte").Component<{
        triggerText?: string;
        title?: string;
        bgColour?: string;
        triggerBgColour?: string;
        children?: any;
    }, {}, "">;
    Accordion: import("svelte").Component<{
        items?: any[];
        bgColour?: string;
        allowMultiple?: boolean;
        width?: number;
    }, {}, "">;
    Hero: import("svelte").Component<{
        children: any;
        bgColour?: string;
    }, {}, "">;
    CodeTab: import("svelte").Component<{
        npm?: string;
        yarn?: string;
        pnpm?: string;
        bun?: string;
        defaultTab?: string;
    }, {}, "">;
    Divider: import("svelte").Component<{
        bgColour?: string;
    }, {}, "">;
    Drawer: import("svelte").Component<{
        zIndex?: number;
        children?: any;
        trigger?: boolean;
    }, {}, "">;
};
export default Snap;
