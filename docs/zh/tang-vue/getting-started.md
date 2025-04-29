# 开始

## 环境要求

* Node.js 18.15.0

## 获取项目

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

## 修改配置

修改 .env.development 后端接口地址

```typescript
......
VITE_APP_URL = 'http://127.0.0.1:8080'
......
```

## 安装依赖

```bash
pnpm install
```

## 启动项目

```bash
pnpm run dev
```

访问 [http://localhost:5173/](http://localhost:5173/)

## 打包项目

```bash
# 生产环境
pnpm run build
```

::: tip 提示
打包后的文件在 dist 目录下
:::

## 运行后端

[参考后端运行](/zh/tang-boot/getting-started.md)
