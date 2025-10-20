export default CodeTab;
type CodeTab = {
    $on?(type: string, callback: (e: any) => void): () => void;
    $set?(props: Partial<$$ComponentProps>): void;
};
declare const CodeTab: import("svelte").Component<{
    npm?: string;
    yarn?: string;
    pnpm?: string;
    bun?: string;
    defaultTab?: string;
}, {}, "">;
type $$ComponentProps = {
    npm?: string;
    yarn?: string;
    pnpm?: string;
    bun?: string;
    defaultTab?: string;
};
