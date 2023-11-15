# Perfection + Next.js Pages Router

<p>
<a href="https://githubbox.com/perfectiondotdev/perfection/tree/main/examples/nextjs-pages" target="_blank">
    <img src="https://img.shields.io/badge/open%20in%20codesandbox-message?style=flat&logo=codesandbox&color=333&logoColor=fff" alt="Open in CodeSandbox" />
  </a>
    <img src="https://img.shields.io/badge/react-message?style=flat&logo=react&color=0bd&logoColor=fff" alt="React" />
    <img src="https://img.shields.io/badge/next.js-message?style=flat&logo=next.js&color=07f&logoColor=fff" alt="Next.js" />
</p>

Perfection is an Digital Experience Composition tool for developers that enrich your preview site with Editing and Collaboration features.

This example shows how to add Perfection on any website with Next.js.

<img src="https://raw.githubusercontent.com/perfectiondotdev/perfection/main/assets/images/laptop.png" width="600" alt="Perfection Playground" />

## Try the demo

Open [http://localhost:3000](http://localhost:3000) in a new tab to see the result. Use those shared credentials to login into Perfection:

- Email: `demo@perfection.dev`
- Password: `thisisasharedaccount`

## Getting Started

First, you need to create an `.env.local` file with your `Site Name`, `API Key` and `Subscription ID`. An example is provided [in this file](.env.local.example).

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
