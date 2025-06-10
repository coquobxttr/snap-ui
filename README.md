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
- `Input` - Text input with validation states
- `Select` - Dropdown selection with search
- `Checkbox` - Accessible checkbox with indeterminate state
- `Radio` - Radio button groups
- `Switch` - Toggle switch component
- `Textarea` - Multi-line text input

### Layout Components
- `Card` - Flexible container with header/footer
- `Grid` - Responsive grid system
- `Stack` - Vertical/horizontal spacing utility
- `Container` - Responsive content wrapper
- `Divider` - Visual separator

### Navigation Components
- `Navbar` - Responsive navigation bar
- `Sidebar` - Collapsible side navigation
- `Breadcrumb` - Hierarchical navigation
- `Tabs` - Tabbed interface
- `Pagination` - Page navigation

### Feedback Components
- `Alert` - Contextual messages
- `Toast` - Temporary notifications
- `Modal` - Overlay dialogs
- `Loading` - Loading states and spinners
- `Progress` - Progress indicators

### Data Display
- `Table` - Sortable, filterable data tables
- `Badge` - Status indicators
- `Avatar` - User profile images
- `Tooltip` - Contextual help text

## 🎨 Customization

### CSS Variables

Every component exposes CSS variables for easy theming:

```css
:root {
  --nora-primary: #3b82f6;
  --nora-secondary: #64748b;
  --nora-success: #10b981;
  --nora-warning: #f59e0b;
  --nora-error: #ef4444;
  --nora-border-radius: 0.5rem;
  --nora-spacing-unit: 0.25rem;
}
```

### Component Props

```svelte
<Button 
  variant="primary"
  size="large"
  disabled={false}
  loading={false}
  on:click={handleClick}
>
  Click me
</Button>
```

### Advanced Customization with Slots

```svelte
<Card>
  <div slot="header">
    <h2>Custom Header</h2>
    <Button size="small">Action</Button>
  </div>
  
  <p>Card content goes here</p>
  
  <div slot="footer">
    <Button variant="outline">Cancel</Button>
    <Button>Confirm</Button>
  </div>
</Card>
```

### Creating Custom Variants

```svelte
<script>
  import { Button } from 'nora-kit';
</script>

<Button 
  class="custom-gradient-button"
  --nora-button-bg="linear-gradient(45deg, #ff6b6b, #4ecdc4)"
  --nora-button-color="white"
>
  Gradient Button
</Button>

<style>
  :global(.custom-gradient-button) {
    border: none;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  }
</style>
```

## 🌙 Dark Mode

Dark mode is supported out of the box:

```svelte
<script>
  import { setTheme, ThemeProvider } from 'nora-kit';
  
  // Toggle theme
  const toggleTheme = () => {
    setTheme(currentTheme === 'light' ? 'dark' : 'light');
  };
</script>

<ThemeProvider>
  <Button on:click={toggleTheme}>
    Toggle Theme
  </Button>
</ThemeProvider>
```

## 📖 Documentation

Visit our [documentation site](https://nora-kit.dev) for:

- **Component API** - Complete prop and event reference
- **Examples** - Copy-paste code examples
- **Guides** - Step-by-step tutorials
- **Theme Builder** - Visual theme customization tool

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

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Setup

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Submit a pull request

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by the simplicity of [Tailwind UI](https://tailwindui.com)
- Built with the power of [Svelte](https://svelte.dev)
- Icons provided by [Lucide](https://lucide.dev)

## 📈 Roadmap

- [ ] Form validation utilities
- [ ] Data visualization components
- [ ] Animation utilities
- [ ] Figma design system kit
- [ ] Vue.js port
- [ ] React port

---

<div align="center">
  <strong>Made with ❤️ for the Svelte community</strong>
</div>

<div align="center">
  <a href="https://github.com/yourusername/nora-kit">⭐ Star us on GitHub</a> •
  <a href="https://nora-kit.dev">📚 Documentation</a> •
  <a href="https://discord.gg/nora-kit">💬 Discord</a> •
  <a href="https://twitter.com/norakit">🐦 Twitter</a>
</div>