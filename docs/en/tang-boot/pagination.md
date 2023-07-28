# Pagination

## Introduction

Pagination is implemented based on `PageHelper`, which is a pagination plugin for `MyBatis`. It supports multiple databases, is easy to use, and does not depend on any third-party components.

## Dependency

Add the dependency for `pagehelper-spring-boot-starter` in the `tang-commons/pom.xml` file. See [pagehelper-spring-boot-starter](https://github.com/tangllty/tang-boot/blob/master/tang-commons/pom.xml#L25-L28) for details.

```xml
<dependency>
    <groupId>com.github.pagehelper</groupId>
    <artifactId>pagehelper-spring-boot-starter</artifactId>
</dependency>
```

## Usage

1. The return type is `TableDataResult`, which represents the pagination result set that includes pagination information and data list.
2. Use `PageUtils.startPage()` to enable pagination. `PageUtils.startPage()` automatically retrieves the pagination parameters (`pageNum` and `pageSize`). The default values for these parameters are `pageNum = 1` and `pageSize = 10`.
3. Use `PageUtils.getDataTable(list)` to get the pagination result set. Here, `list` is the data list for pagination.

```java
@GetMapping("/list")
public TableDataResult list(Custom custom){
    PageUtils.startPage();
    var list = customService.selectCustomList(custom);
    return PageUtils.getDataTable(list);
}
```

## Frontend Pagination

[Refer to Frontend Pagination](/en/tang-vue/pagination.md)
