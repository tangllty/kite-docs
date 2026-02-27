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
  - icon: 🚀
    title: 多语言兼容
    details: Kotlin API 设计，同时兼容 Java 语法。
  - icon: 📚
    title: 强大的 SQL 构建能力
    details: 链式调用的 QueryWrapper、UpdateWrapper、DeleteWrapper，支持条件查询、分组、排序、聚合等全场景 SQL 构建。
  - icon: 📖
    title: 便捷的分页能力
    details: 内置分页功能，默认参数可灵活配置，自动拼接分页 SQL，适配不同的数据库方言，无需集成第三方分页插件。
  - icon: 🛡️
    title: 完善的事务支持
    details: 内置 JDBC 事务工厂，兼容 Spring 声明式事务，支持事务提交、回滚，默认开启事务。
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
