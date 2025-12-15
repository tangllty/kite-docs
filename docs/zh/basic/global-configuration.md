# 全局配置

Kite ORM 框架提供了灵活的全局配置选项，允许开发者根据需要自定义框架的行为。这些配置主要集中在 `com.tang.kite.config` 包下的三个核心配置类中：`KiteConfig`、`PageConfig` 和 `SqlConfig`。

## KiteConfig

`KiteConfig` 是 Kite 框架的核心配置类，包含了框架的主要配置选项。

### 配置项说明

| 配置项              | 类型                                   | 默认值                                               | 说明                                                                   |
| ------------------- | -------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------------------------- |
| `banner`            | `Boolean`                              | `true`                                               | 是否在应用启动时显示 Kite 框架的 banner                                |
| `selectiveStrategy` | `Function1<Any?, Boolean>`             | `DefaultSelectiveStrategy.isSelective(it)`           | 选择性查询策略，用于确定哪些字段应该包含在 SQL 查询中                  |
| `batchSize`         | `Int`                                  | `1000`                                               | 批量操作（如插入或更新）的批量大小                                     |
| `dialects`          | `MutableMap<DatabaseType, SqlDialect>` | `DefaultSqlDialectFactory().getDialects()`           | 不同数据库类型对应的 SQL 方言映射                                      |
| `fillHandlers`      | `MutableMap<FillKey, FillHandler>`     | 包含 CreateTime 和 UpdateTime 对应的 TimeFillHandler | 填充注解的处理程序映射，用于处理 `@CreateTime` 和 `@UpdateTime` 等注解 |
| `page`              | `PageConfig`                           | `PageConfig` 对象                                    | 分页相关配置，引用 `PageConfig` 对象                                   |
| `sql`               | `SqlConfig`                            | `SqlConfig` 对象                                     | SQL 相关配置，引用 `SqlConfig` 对象                                    |

### 使用示例

:::tabs key:kite
== Java

```java
// 修改批量操作大小
KiteConfig.setBatchSize(500);

// 关闭启动 banner
KiteConfig.setBanner(false);

// 自定义方法筛选策略
KiteConfig.setSelectiveStrategy(it -> it != null);
```

== Kotlin

```kotlin
// 修改批量操作大小
KiteConfig.batchSize = 500

// 关闭启动 banner
KiteConfig.banner = false

// 自定义方法筛选策略
KiteConfig.selectiveStrategy = { it != null }
```

:::

## PageConfig

`PageConfig` 用于配置分页相关的默认参数。

### 配置项说明

| 配置项                | 类型     | 默认值         | 说明                                       |
| --------------------- | -------- | -------------- | ------------------------------------------ |
| `pageNumber`          | `Long`   | `1`            | 默认页码                                   |
| `pageSize`            | `Long`   | `10`           | 默认每页记录数                             |
| `pageNumberParameter` | `String` | `"pageNumber"` | 页码参数名，用于从请求中获取页码           |
| `pageSizeParameter`   | `String` | `"pageSize"`   | 每页大小参数名，用于从请求中获取每页记录数 |

### 使用示例

:::tabs key:kite
== Java

```java
// 修改默认页码为 1
PageConfig.setPageNumber(1);

// 修改默认每页大小为 20
PageConfig.setPageSize(20);

// 修改页码参数名为 "page"
PageConfig.setPageNumberParameter("page");

// 修改每页大小参数名为 "size"
PageConfig.setPageSizeParameter("size");
```

== Kotlin

```kotlin
// 修改默认页码为 1
PageConfig.pageNumber = 1

// 修改默认每页大小为 20
PageConfig.pageSize = 20

// 修改页码参数名为 "page"
PageConfig.pageNumberParameter = "page"

// 修改每页大小参数名为 "size"
PageConfig.pageSizeParameter = "size"
```

:::

## SqlConfig

`SqlConfig` 用于配置 SQL 相关的参数和行为。

### 配置项说明

| 配置项               | 类型           | 默认值                      | 说明                    |
| -------------------- | -------------- | --------------------------- | ----------------------- |
| `sqlLowercase`       | `Boolean`      | `true`                      | 生成的 SQL 是否使用小写 |
| `sqlLogging`         | `Boolean`      | `true`                      | 是否记录生成的 SQL 语句 |
| `sqlDurationLogging` | `Boolean`      | `true`                      | 是否记录 SQL 执行时间   |
| `durationUnit`       | `DurationUnit` | `DurationUnit.MILLISECONDS` | SQL 执行时间的单位      |
| `durationDecimals`   | `Int`          | `0`                         | SQL 执行时间的小数位数  |

### 方法说明

| 方法名                      | 参数                    | 返回值   | 说明                                      |
| --------------------------- | ----------------------- | -------- | ----------------------------------------- |
| `getSql(StringBuilder sql)` | `sql`：SQL 字符串构建器 | `String` | 根据 `sqlLowercase` 配置格式化 SQL 字符串 |
| `getSql(String sql)`        | `sql`：SQL 字符串       | `String` | 根据 `sqlLowercase` 配置格式化 SQL 字符串 |

### 使用示例

:::tabs key:kite
== Java

```java
// 关闭 SQL 日志
SqlConfig.setSqlLogging(false);

// 设置 SQL 执行时间单位为秒
SqlConfig.setDurationUnit(DurationUnit.SECONDS);

// 设置 SQL 执行时间小数位数为 2
SqlConfig.setDurationDecimals(2);

// 生成大写 SQL
SqlConfig.setSqlLowercase(false);
```

== Kotlin

```kotlin
// 关闭 SQL 日志
SqlConfig.sqlLogging = false

// 设置 SQL 执行时间单位为秒
SqlConfig.durationUnit = DurationUnit.SECONDS

// 设置 SQL 执行时间小数位数为 2
SqlConfig.durationDecimals = 2

// 生成大写 SQL
SqlConfig.sqlLowercase = false
```

:::
