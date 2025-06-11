# **NoraKit - a Sveltekit UI Component Library**

NoraKit is a modern, accessible Svelte UI component library that combines simplicity with deep customization. Built for developers who want components that work out of the box but can be tailored to any design system.

---

## **Installation**

### **Package Manager**
```bash
# npm
npm install nora-kit

# pnpm
pnpm add nora-kit

# yarn
yarn add nora-kit

# bun
bun add nora-kit
```

### **Tailwindcss**
NoraKit uses **Tailwind v4.1** with the **typography and forms** plugins. See the [website](http://omg) for a more detailed tutorial on how to install.

```bash
npm install -D @tailwindcss/typography
npm install -D @tailwindcss/forms
```

---
## **Usage**

### **Dropdown Example**
```svelte
<Nora.Button bgColour="ffffff" id="dropdownButton">Dropdown</Nora.Button>
<Nora.Dropdown targetId="dropdownButton">
    <ul>
        <li>Thing 1</li>
        <hr/>
        <li>Thing 2</li>
    </ul>
</Nora.Dropdown>
```

## **🧪 Development**

```bash
# Clone the repository
git clone https://github.com/coquobxttr/nora-kit.git

# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm test

# Build
npm run build
```

## **License**

MIT - see [LICENSE](LICENSE.md) file for details.

## **Acknowledgments**

- Sveltekit
- Tailwindcss
- MDsveX for the docs site (coming soon)

---

<div align="center">
<a href="[github-url]">⭐ Star this on GitHub</a> •
<a href="[docs-url]">📚 Documentation</a>
</div>