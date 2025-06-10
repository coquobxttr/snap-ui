# Nora-kit

A modern, accessible Svelte component library that combines simplicity with deep customization. Built for developers who want components that work out of the box but can be tailored to any design system.

## ✨ Features

- **Simple by default** - Drop in components with sensible defaults
- **Deeply customizable** - Override styles, behaviors, and structure
- **TypeScript first** - Full type safety and IntelliSense support
- **Accessible** - WCAG 2.1 AA compliant components
- **Tree-shakeable** - Import only what you need
- **Theme-aware** - Built-in dark mode and custom theme support
- **Zero dependencies** - Pure Svelte components

## 🚀 Quick Start

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

## 📦 Installation

### Package Manager

```bash
# npm
npm install nora-kit

# pnpm
pnpm add nora-kit

# yarn
yarn add nora-kit
```

### CDN

```html
<script src="https://unpkg.com/nora-kit@latest/dist/index.js"></script>
```

## 🎯 Philosophy

Nora-kit follows the principle of **progressive enhancement**:

1. **Level 1**: Works immediately with zero configuration
2. **Level 2**: Customize with props and CSS variables
3. **Level 3**: Override internal structure with slots
4. **Level 4**: Create completely custom variants

## 🧩 Components

### Form Components
- `Button` - Versatile button with multiple variants
- `Div` - Text input with validation states
- `Dropdown` - Dropdown selection with search
- `Tooltip` - Accessible checkbox with indeterminate state
**and more to come...**

## 🎨 Customization

### Component Props

```svelte
<Nora.Button bgColour="f57a81" id="defaultButton">
    This is a button
</Nora.Button>
```
## 🧪 Development

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

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by the simplicity of [Tailwind UI](https://tailwindui.com)
- Built with the power of [Svelte](https://svelte.dev)
- Icons provided by [Lucide](https://lucide.dev)

---

<div align="center">
  <strong>Made with ❤️ for the Svelte community</strong>
</div>

<div align="center">
  <a href="https://github.com/coquobxttr/nora-kit">⭐ Star us on GitHub</a> •
  <p href="https://nora-kit.dev">📚 Documentation (coming soon)</p>
</div>