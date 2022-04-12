# Turborepo starter for NPM, tRPC, Next.js, NextAuth, Prisma, and PlanetScale

Inspired by [init.tips](https://init.tips/other). You can easily add Tailwind, Plausible, etc.

After cloning run:

```
npm install
npm run build
```

This will install dependencies and build packages and generate Prisma Client.

The Prisma schema already contains models for NestAuth.js Users, Accounts, etc. See: [https://next-auth.js.org/adapters/prisma](https://next-auth.js.org/adapters/prisma)

For deploying to Vercel and setting up the DB in PlanetScale, follow this article: [https://davidparks.dev/blog/planetscale-deployment-with-prisma/](https://davidparks.dev/blog/planetscale-deployment-with-prisma/). Keep in mind the prisma migration should run in the **db** package where the schema is.

**Remember to add DB URLs to environment.**

## What's inside?

This turborepo uses [NPM](https://www.npmjs.com/) as a package manager. It includes the following packages/apps:

### Apps and Packages

- `web`: a [Next.js](https://nextjs.org) app with [tRPC](https://trpc.io/) and [NextAuth.js](https://next-auth.js.org/)
- `config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo
- `db`: contains [Prisma](https://www.prisma.io/) schema and generates Prisma client that can be imported by other packages in repo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

## Setup

This repository is used in the `npx create-turbo@latest` command, and selected when choosing which package manager you wish to use with your monorepo (NPM).

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
npm run build
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo
npm run dev
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching (Beta)](https://turborepo.org/docs/features/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching (Beta) you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd my-turborepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your turborepo:

```
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Pipelines](https://turborepo.org/docs/features/pipelines)
- [Caching](https://turborepo.org/docs/features/caching)
- [Remote Caching (Beta)](https://turborepo.org/docs/features/remote-caching)
- [Scoped Tasks](https://turborepo.org/docs/features/scopes)
- [Configuration Options](https://turborepo.org/docs/reference/configuration)
- [CLI Usage](https://turborepo.org/docs/reference/command-line-reference)
