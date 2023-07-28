# Getting Started

## Environment Requirements

* Node.js 18.15.0

## Get Project

```bash
git clone https://gitee.com/tangllty/tang-vue.git
```

## Modify Configuration

Modify vue.config.ts backend interface address

```typescript
server: {
  ......
  proxy: {
    [env.VITE_APP_BASE_API]: {
      target: 'http://127.0.0.1:8080',
      ......
    }
  }
}
```

## Install Dependencies

```bash
yarn
```

## Start Project

```bash
yarn run dev
```

Visit [http://localhost:5173/](http://localhost:5173/)

## Build Project

```bash
# Production environment
yarn run build
```

::: tip Tip
The bundled file is in the dist directory
:::

## Run Backend

[Refer to run backend](/en/tang-boot/getting-started.md)
