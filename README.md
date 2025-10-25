# **[SnapUI](https://coquobxttr.github.io/snap-ui/) - a Sveltekit UI Component Library**

A small collection of Svelte components. They're accessible, customizable, and don't try to do too much.

---

## **Installation**

### **Package Manager**
```bashf
# npm
npm install snap-ui

# pnpm
pnpm add snap-ui

# yarn
yarn add snap-ui

# bun
bun add snap-ui
```

### **Tailwindcss**
SnapUI uses **Tailwind v4.1** with the **typography and forms** plugins. See the [website](https://tailwindcss.com/docs/installation/framework-guides/sveltekit) for a more detailed tutorial on how to install.

```bash
npm install -D @tailwindcss/typography
npm install -D @tailwindcss/forms
```

---
## **Usage**

### **Dropdown Example**
```svelte
<Snap>.Button bgColour="ffffff" id="dropdownButton">Dropdown</Snap.Button>
<Snap>.Dropdown targetId="dropdownButton">
    <ul>
        <li>Thing 1</li>
        <hr/>
        <li>Thing 2</li>
    </ul>
</Snap.Dropdown>
```

## **Development**

```bash
# Clone the repository
git clone https://github.com/coquobxttr/snap-ui.git

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
<a href="[https://github.com/coquobxttr/snap-ui.git]">⭐ Star this on GitHub</a> •
<a href="[docs-url]">📚 Documentation</a>
</div>