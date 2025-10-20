declare const Button: import("svelte").Component<{
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
type Button = ReturnType<typeof Button>;
export default Button;
