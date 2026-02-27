---
layout: home

title: Kite

hero:
  name: Kite
  text: Next Generation ORM Framework
  tagline: Elegant, lightweight, and efficient database operations made simple
  image:
    src: /kite.svg
    alt: Tang
  actions:
    - theme: brand
      text: Get Started
      link: /guide/introduction
    - theme: sponsor
      text: Group
      link: /guide/discussion-group
    - theme: alt
      text: View on GitHub
      link: https://github.com/tangllty/
    - theme: alt
      text: View on Gitee
      link: https://gitee.com/tangllty/

features:
  - icon: 🚀
    title: Multi-language Compatibility
    details: Kotlin-oriented API design with native compatibility with Java syntax.
  - icon: 📚
    title: Powerful SQL Construction Capabilities
    details: Chain-invoked QueryWrapper, UpdateWrapper and DeleteWrapper support full-scenario SQL construction including conditional query, grouping, sorting, aggregation, etc.
  - icon: 📖
    title: Convenient Pagination Capabilities
    details: Built-in pagination with flexibly configurable default parameters; automatically splices pagination SQL, adapts to different database dialects, and no need to integrate third-party pagination plugins.
  - icon: 🛡️
    title: Comprehensive Transaction Support
    details: Built-in JDBC transaction factory, compatible with Spring declarative transactions, supports transaction commit and rollback, with transactions enabled by default.
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
