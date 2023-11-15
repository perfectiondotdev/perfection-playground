# Perfection + SvelteKit

<p>
<a href="https://githubbox.com/perfectiondotdev/perfection/tree/main/examples/sveltekit" target="_blank">
    <img src="https://img.shields.io/badge/open%20in%20codesandbox-message?style=flat&logo=codesandbox&color=333&logoColor=fff" alt="Open in CodeSandbox" />
  </a>
    <img src="https://img.shields.io/badge/Svelte-message?style=flat&logo=svelte&color=ff4000&logoColor=fff" alt="Svelte" />
</p>

Perfection is an Digital Experience Composition tool for developers that enrich your preview site with Editing and Collaboration features.

This example shows how to add Perfection on any website with Svelte.

<img src="https://raw.githubusercontent.com/perfectiondotdev/perfection/main/assets/images/laptop.png" width="600" alt="Perfection Playground" />

## Try the demo

Open [http://localhost:5173/](http://localhost:5173/) in a new tab to see the result. Use those shared credentials to login into Perfection:

- Email: `demo@perfection.dev`
- Password: `thisisasharedaccount`

## Getting Started

First, you need to create an `.env` file with your `Site Name`, `API Key` and `Subscription ID`. An example is provided [in this file](.env.example).

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
