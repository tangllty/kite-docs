# Getting Started

## Environment Requirements

* Node.js 18.15.0

## Get Project

::: tabs key:repository

== GitHub

```bash
git clone https://github.com/tangllty/tang-vue.git
```

== Gitee

```bash
git clone https://gitee.com/tangllty/tang-vue.git
```

:::

## Modify Configuration

Modify .env.development backend interface address

```typescript
......
VITE_APP_URL = 'http://127.0.0.1:8080'
......
```

## Install Dependencies

```bash
pnpm install
```

## Start Project

```bash
pnpm run dev
```

Visit [http://localhost:5173/](http://localhost:5173/)

## Build Project

```bash
# Production environment
pnpm run build
```

::: tip Tip
The bundled file is in the dist directory
:::

## Run Backend

[Refer to run backend](/en/tang-boot/getting-started.md)
