# Nautilus Website

## Overview

This is the official website for **Nautilus Cyberneering**, built with **SvelteKit** and styled using **Sass** and **Tailwind CSS**.  
The website provides information about our projects, technologies, educational resources, and opportunities for developers and creators.

## Features

- Information about Nautilus Cyberneering and our mission
- Details on projects and technologies
- Educational resources, blog posts, and guides
- Contribution opportunities for developers and creators

## Testing

Testing is an important part of this project. All testing is documented in the [Testing Guide](docs/testing.md).

The project uses:

### Unit Tests (Vitest)

- Run tests once:

```bash
npx vitest
```

- Watch mode (re-run on file changes):

```bash
npx vitest --watch
```

- Generate coverage report:

```bash
npx vitest --coverage
```

### End-to-End Tests (Playwright)

Make sure the dev server is running before running E2E tests:

```bash
npm run dev
npx playwright test
```

- Run a single test file:

```bash
npx playwright test tests/header.spec.ts
```

See the full [Testing Guide](docs/testing.md) for detailed instructions, file organization, and examples.

## Contributing

We welcome contributions! Here’s how to get started:

1. Fork the repository and create a new branch with a descriptive name:

   ```
   git checkout -b feature/new-page
   ```

2. Make your changes.
3. Run tests locally to ensure nothing is broken:

   ```bash
   npx vitest
   npx playwright test
   ```

4. Commit your changes and submit a pull request.

**Tips for contributors:**

- Use descriptive commit messages.
- Keep unit tests and E2E tests separate.
- Follow the existing code style and component structure.

## License

This repository is **dual-licensed**, meaning different parts of the project are covered under different licenses:

- **Code** (server scripts, client-side JavaScript, HTML, etc.) is licensed under the **GNU Affero General Public License v3 (AGPLv3)**. This ensures that any modifications, especially those used over a network, remain open-source. See the full license in [`LICENSE-AGPL`](./LICENSE-AGPL) or read more at [GNU AGPLv3 License](https://www.gnu.org/licenses/agpl-3.0.html).

- **Content** (website text, design layouts, images, and other assets) is licensed under the **GNU Free Documentation License (GFDL) with Invariant Sections**. Some sections, like design credits, must remain unchanged in any derivative works. See the full license in [`LICENSE-GFDL`](./LICENSE-GFDL) or read more at [GNU GFDL License](https://www.gnu.org/licenses/fdl-1.3.html).

For a detailed explanation of how these licenses apply to this project, see the [`LICENSE`](./LICENSE) file.

## Get Involved

Join us and be part of the **Cyberneering movement**! Share your ideas, contribute code or content, and help us build a strong open-source community.
