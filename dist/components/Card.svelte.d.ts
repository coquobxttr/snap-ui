declare const Card: import("svelte").Component<{
    children?: any;
    width?: string;
    height?: string;
    bgColour?: string;
    prose?: string;
}, {}, "">;
type Card = ReturnType<typeof Card>;
export default Card;
