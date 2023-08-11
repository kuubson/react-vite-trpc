# 🛠️ Monorepo template

A template that provides a straightforward and flexible way to use the benefits of tRPC in your React projects. It emphasizes the use of absolute paths and a monorepo approach that significantly improves the developer experience. If you're looking for a clean setup with pure React and modularization, this template is an excellent place to start!

## 🔧 Stack

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF.svg?style=for-the-badge&logo=Vite&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![tRPC](https://img.shields.io/badge/tRPC-2596BE.svg?style=for-the-badge&logo=tRPC&logoColor=white)
![Turborepo](https://img.shields.io/badge/Turborepo-EF4444.svg?style=for-the-badge&logo=Turborepo&logoColor=white)

## 🚀 Getting started

To run locally, trigger `pnpm install` and `pnpm dev`

## 🧩 The challenge

This setup faced a challenge while importing the `AppRouter` from the server folder to the client folder, which resulted in Typescript server errors related to imports from the 'trpc' path on the server side.

The solution leverages Typescript references to allow importing the `AppRouter` on the client side while using absolute paths on the server side.

```js
// apps/web/tsconfig.json
{
  "compilerOptions": {
    "baseUrl": "src",
    "outDir": "dist",
  },
  "references": [{ "path": "../server" }] <~ fixes the /server references on the /web
}

// apps/web/package.json
{
  "scripts": {
    "ts:check": "tsc -b", <~ the -b flag is crucial when building an app that has references in its tsconfig.json
    "build": "pnpm ts:check && vite build"
  }
}

// apps/server/tsconfig.json
{
  "compilerOptions": {
    "baseUrl": "src",
    "outDir": "dist", <~ required, sets the build destination folder
    "composite": true <~ required to make TS references work
  },
  "ts-node": { "swc": true }
}
```
