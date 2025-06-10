# **Nora-kit**
A modern, accessible Svelte component library that combines simplicity with deep customization. Built for developers who want components that work out of the box but can be tailored to any design system.

## **✨ Features**
- **Simple by default** - Drop in components with sensible defaults
- **Deeply customizable** - Override styles, behaviors, and structure
- **TypeScript first** - Full type safety and IntelliSense support
- **Accessible** - WCAG 2.1 AA compliant components
- **Tree-shakeable** - Import only what you need
- **Theme-aware** - Built-in dark mode and custom theme support
- **Zero dependencies** - Pure Svelte components

## **🚀 Quick Start**
```bash
npm install nora-kit
```

```svelte
<script>
import { Button, Card, Input } from 'nora-kit';
</script>

<Card>
<Input placeholder="Enter your name" />
<Button>Get Started</Button>
</Card>
```

## **📦 Installation**

### **Package Manager**
```bash
# npm
npm install nora-kit

# pnpm
pnpm add nora-kit

# yarn
yarn add nora-kit

#bun
bun add nora-kit
```

### **Tailwind CSS Setup**
Nora-kit requires Tailwind CSS to be installed in your SvelteKit project. Follow these steps:

1. **Install Tailwind CSS and its dependencies:**
```bash
npm install tailwindcss @tailwindcss/vite
```

2. **Add the @tailwindcss/vite plugin to your Vite configuration.**
```svelte
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
export default defineConfig({
  plugins: [
    tailwindcss(),
    sveltekit(),
  ],
});
```

3. **Create a ./src/app.css file and add an @import that imports Tailwind CSS.**
```bash
@import "tailwindcss";
```

4. **Create a ./src/routes/+layout.svelte file and import the newly-created app.css file.**
```svelte
<script>
  let { children } = $props();
  import "../app.css";
</script>
{@render children()}
```

## **🎯 Philosophy**
Nora-kit follows the principle of **progressive enhancement**:
1. **Level 1**: Works immediately with zero configuration
2. **Level 2**: Customize with props and CSS variables
3. **Level 3**: Override internal structure with slots
4. **Level 4**: Create completely custom variants

## **🧩 Components**
### **Form Components**
- `Button` - Versatile button with multiple variants
- `Dropdown` - Dropdown selection with search
- `Card` - Flexible container component
- `Tooltip` - Accessible tooltip component

**and more to come...**

## **🎨 Customization**
### **Component Props**
```svelte
<Button bgColour="f57a81" id="defaultButton">
 This is a button
</Button>
```

## **🧪 Development**
```bash
# Clone the repository
git clone https://github.com/yourusername/nora-kit.git

# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm test

# Build library
npm run build
```

## **📄 License**
MIT License - see [LICENSE](LICENSE) file for details.

## **🙏 Acknowledgments**
- Inspired by the simplicity of [Tailwind UI](https://tailwindui.com)
- Built with the power of [Svelte](https://svelte.dev)
- Icons provided by [Lucide](https://lucide.dev)

---

<div align="center">
<strong>Made with ❤️ for the Svelte community</strong>
</div>

<div align="center">
<a href="https://github.com/coquobxttr/nora-kit">⭐ Star this on GitHub</a> •
<a href="https://nora-kit.dev">📚 Documentation (coming soon)</a>
</div>