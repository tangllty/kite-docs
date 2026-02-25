# Table 注解

`@Table` 注解用于将类标记为实体并指定对应的数据库表信息。

> 如果未指定 `@Table` 注解，Kite ORM 将使用类名转换为下划线命名作为表名。

## 参数说明

| 参数名             | 类型                               | 默认值                       | 说明                        |
| ------------------ | ---------------------------------- | ---------------------------- | --------------------------- |
| `value`            | String                             | ""                           | 数据库表名                  |
| `alias`            | String                             | ""                           | 表的别名，用于 SQL 联表查询 |
| `dynamicTableName` | KClass\<out DynamicTableProcessor> | DynamicTableProcessor::class | 局部动态表名处理器（[局部配置](../advanced/dynamic-table-name.md#局部配置)）          |

## 使用示例

:::tabs key:kite
== Java

```java
import com.tang.kite.annotation.Table;

@Table(value = "account", alias = "a")
public class Account {}
```

== Kotlin

```kotlin
import com.tang.kite.annotation.Table

@Table(value = "account", alias = "a")
class Account {}
```

:::
