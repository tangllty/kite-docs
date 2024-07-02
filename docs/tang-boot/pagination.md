# 分页

## 简介

基于 `PageHelper` 实现分页, `PageHelper` 是一个 `MyBatis` 分页插件，支持多种数据库，用法简单，而且完全不依赖任何第三方组件。

## 依赖

在 `tang-commons/pom.xml` 中声明依赖 `pagehelper-spring-boot-starter`，详情可查看 [pagehelper-spring-boot-starter](https://gitee.com/tangllty/tang-boot/blob/master/tang-commons/pom.xml#L25-L28)

```xml
<dependency>
    <groupId>com.github.pagehelper</groupId>
    <artifactId>pagehelper-spring-boot-starter</artifactId>
</dependency>
```

## 使用

1. 返回类型为 `PageResult`，`PageResult` 为分页结果集，包含分页信息和数据列表
2. 使用 `PageUtils.startPage()` 开启分页，`PageUtils.startPage()` 会自动获取分页参数，分页参数为 `pageNum` 和 `pageSize`，分页参数默认值为 `pageNum = 1` 和 `pageSize = 10`
3. 使用 `PageUtils.getDataTable(list)` 获取分页结果集，`list` 为分页数据列表

::: code-group

```java [Java]
@GetMapping("/list")
public PageResult list(Custom custom){
    PageUtils.startPage();
    var list = customService.selectCustomList(custom);
    return PageUtils.getDataTable(list);
}
```

```kotlin [Kotlin]
@GetMapping("/list")
fun list(custom: Custom): PageResult {
    PageUtils.startPage()
    val list = customService.selectCustomList(custom)
    return PageUtils.getDataTable(list)
}
```

:::

## 前端分页

[参考前端分页](/tang-vue/pagination.md)
