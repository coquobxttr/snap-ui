import type { Action } from 'svelte/action';

type IntersectParams = {
    threshold?: number;
    rootMargin?: string;
    root?: HTMLElement | null;
};

type IntersectDetail = {
    isIntersecting: boolean;
};

export const intersect: Action<
    HTMLElement,
    IntersectParams,
    {
        'on:intersect': (e: CustomEvent<IntersectDetail>) => void;
    }
> = (node, params = {}) => {
    let observer: IntersectionObserver;

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
        node.dispatchEvent(new CustomEvent<IntersectDetail>('intersect', {
            detail: { isIntersecting: entries[0].isIntersecting }
        }));
    };

    observer = new IntersectionObserver(handleIntersect, params);
    observer.observe(node);

    return {
        destroy() {
            observer.disconnect();
        },
        update(newParams: IntersectParams) {
            observer.disconnect();
            observer = new IntersectionObserver(handleIntersect, newParams);
            observer.observe(node);
        }
    };
};