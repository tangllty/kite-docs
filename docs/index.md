---
layout: home

title: Tang

hero:
  name: Tang
  text: 糖猫猫权限管理系统
  tagline: 使用最新的技术栈，开发一套权限管理系统
  image:
    src: /tang.svg
    alt: Tang
  actions:
    - theme: brand
      text: 开始
      link: /guide/introduction
    - theme: alt
      text: 交流群
      link: /guide/discussion-group
    - theme: alt
      text: 在 GitHub 上查看
      link: https://github.com/tangllty/
    - theme: alt
      text: 在 Gitee 上查看
      link: https://gitee.com/tangllty/

features:
  - icon: ❤️
    title: tang-boot
    details: tang-boot 是基于 Spring Boot3 + Spring Security + MyBatis + Redis + Jwt 的前后端分离权限管理系统
    link: https://gitee.com/tangllty/tang-boot
  - icon: ❤️
    title: tang-vue
    details: tang-vue 是基于 Vue3 + Vite4 + Vue Router4 + TypeScript + Pinia + Element Plus 的前后端分离权限管理系统
    link: https://gitee.com/tangllty/tang-vue
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
