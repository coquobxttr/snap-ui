export default Drawer;
type Drawer = {
    $on?(type: string, callback: (e: any) => void): () => void;
    $set?(props: Partial<$$ComponentProps>): void;
};
declare const Drawer: import("svelte").Component<{
    zIndex?: number;
    children?: any;
    trigger?: boolean;
}, {}, "">;
type $$ComponentProps = {
    zIndex?: number;
    children?: any;
    trigger?: boolean;
};
