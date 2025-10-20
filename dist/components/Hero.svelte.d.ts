declare const Hero: import("svelte").Component<{
    children: any;
    bgColour?: string;
}, {}, "">;
type Hero = ReturnType<typeof Hero>;
export default Hero;
