This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm i
npm run dev
```
You also need to install the [backend](https://github.com/Rtinox/Bourse-Codity-Back) !

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Config back url
You need to change the backend url in pages/*
```js
const apiUrl = "https://codity-wedidit.herokuapp.com/"; // Default
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
