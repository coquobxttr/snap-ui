declare const Modal: import("svelte").Component<{
    triggerText?: string;
    title?: string;
    bgColour?: string;
    triggerBgColour?: string;
    children?: any;
}, {}, "">;
type Modal = ReturnType<typeof Modal>;
export default Modal;
