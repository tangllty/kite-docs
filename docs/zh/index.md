---
layout: home

title: Tang

hero:
  name: Kite
  text: 下一代 ORM 框架
  tagline: 优雅、轻量、高效的数据库操作变得简单
  image:
    src: /kite.svg
    alt: Tang
  actions:
    - theme: brand
      text: 开始
      link: /zh/guide/introduction
    - theme: sponsor
      text: 交流群
      link: /zh/guide/discussion-group
    - theme: alt
      text: 在 GitHub 上查看
      link: https://github.com/tangllty/
    - theme: alt
      text: 在 Gitee 上查看
      link: https://gitee.com/tangllty/

features:
  - icon: ❤️
    title: kite
    details: Kite 是一个由 Kotlin 编写的轻量级 ORM 框架
    link: https://gitee.com/tangllty/kite
  - icon: ❤️
    title: tang-boot
    details: tang-boot 是基于 Spring Boot3 + Spring Security + MyBatis + Redis + Jwt 的前后端分离权限管理系统
    link: https://gitee.com/tangllty/tang-boot
  - icon: ❤️
    title: tang-vue
    details: tang-vue 是基于 Vue3 + Vite5 + Vue Router4 + TypeScript + Pinia + Element Plus 的前后端分离权限管理系统
    link: https://gitee.com/tangllty/tang-vue
  - icon: ❤️
    title: tang-docs
    details: tang-docs 是基于 VitePress 的糖猫猫权限管理系统文档
    link: https://gitee.com/tangllty/tang-docs
  - icon: ❤️
    title: vite-plugin-svg
    details: vite-plugin-svg 是一个基于 Vite5 的 SVG 插件
    link: https://gitee.com/tangllty/vite-plugin-svg
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>
