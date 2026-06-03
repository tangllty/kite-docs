# 表结构同步

表结构同步允许你通过实体类定义数据库结构，Kite 会自动根据注解生成和维护数据库表、字段和索引。

## 全局配置

通过 `SchemaConfig` 配置表结构同步的行为：

| 配置项                    | 默认值     | 描述             |
|------------------------|---------|----------------|
| `enabled`              | `false` | 是否启用表结构同步      |
| `sqlLowercase`         | `true`  | 生成的 SQL 是否小写   |
| `scanPackages`         | `[]`    | 实体类扫描包路径，支持通配符 |
| `createMissingTables`  | `true`  | 是否创建缺失的表       |
| `dropExistingTables`   | `false` | 是否删除已存在的表      |
| `createMissingColumns` | `true`  | 是否添加缺失的字段      |
| `dropExistingColumns`  | `false` | 是否删除多余的字段      |
| `createMissingIndexes` | `true`  | 是否创建缺失的索引      |
| `modifyIndexes`        | `false` | 是否修改已存在的索引     |
| `dropExistingIndexes`  | `false` | 是否删除多余的索引      |

**启用示例**

:::tabs key:kite

== Java

```java
import com.tang.kite.config.schema.SchemaConfig;

SchemaConfig.setEnabled(true);
SchemaConfig.getScanPackages().add("com.example.entity");
```

== Kotlin

```kotlin
import com.tang.kite.config.schema.SchemaConfig

SchemaConfig.enabled = true
SchemaConfig.scanPackages.add("com.example.entity")
```

:::

## @Table 注解

`@Table` 注解用于将实体类映射到数据库表。表结构同步相关属性：

| 属性        | 类型       | 描述        |
|-----------|----------|-----------|
| `value`   | `String` | 表名，默认使用类名 |
| `comment` | `String` | 表注释       |

:::tabs key:kite

== Java

```java
import com.tang.kite.annotation.Table;

@Table(value = "account", comment = "账户表")
public class Account {}
```

== Kotlin

```kotlin
import com.tang.kite.annotation.Table

@Table(value = "account", comment = "账户表")
class Account
```

:::

## @Column 注解

`@Column` 注解用于将实体类字段映射到数据库列。表结构同步相关属性：

| 属性                 | 类型                 | 描述                                    |
|--------------------|--------------------|---------------------------------------|
| `value`            | `String`           | 列名，默认使用字段名                            |
| `ignore`           | `Boolean`          | 是否忽略此列，不会生成到数据库中                      |
| `dataType`         | `String`           | 列数据类型，为空则自动推断                         |
| `length`           | `Int`              | 列长度，用于 `VARCHAR`、`CHAR` 等，默认 `255`    |
| `precision`        | `Int`              | 数值精度，用于 `DECIMAL`、`NUMERIC` 等，默认 `10` |
| `scale`            | `Int`              | 小数位数，用于 `DECIMAL`、`NUMERIC` 等，默认 `2`  |
| `nullable`         | `Boolean`          | 是否允许 `NULL`，默认 `true`                 |
| `defaultValue`     | `Array<String>`    | 列默认值                                  |
| `comment`          | `Array<String>`    | 列注释                                   |
| `foreignKey`       | `String`           | 外键引用的表名                               |
| `foreignKeyColumn` | `String`           | 外键引用的列名                               |
| `onDelete`         | `ForeignKeyAction` | 删除时外键行为                               |
| `onUpdate`         | `ForeignKeyAction` | 更新时外键行为                               |

:::tabs key:kite

== Java

```java
import com.tang.kite.annotation.Column;
import com.tang.kite.sql.ast.ForeignKeyAction;

public class Account {

    @Column(value = "username", length = 50, comment = "用户名")
    private String username;

    @Column(defaultValue = "0", comment = "状态")
    private Integer status;

    @Column(foreignKey = "dept", foreignKeyColumn = "id", onDelete = ForeignKeyAction.CASCADE)
    private Long deptId;

}
```

== Kotlin

```kotlin
import com.tang.kite.annotation.Column
import com.tang.kite.sql.ast.ForeignKeyAction

class Account {

    @Column(value = "username", length = 50, comment = ["用户名"])
    var username: String? = null

    @Column(defaultValue = ["0"], comment = ["状态"])
    var status: Int? = null

    @Column(foreignKey = "dept", foreignKeyColumn = "id", onDelete = ForeignKeyAction.CASCADE)
    var deptId: Long? = null

}
```

:::

## 索引

### @Index 注解

用于在单个字段上创建索引。

| 属性       | 类型           | 描述                |
|----------|--------------|-------------------|
| `name`   | `String`     | 索引名称，默认自动生成       |
| `unique` | `Boolean`    | 是否唯一索引，默认 `false` |
| `order`  | `IndexOrder` | 排序方式，默认 `ASC`     |

:::tabs key:kite

== Java

```java
import com.tang.kite.annotation.Index;
import com.tang.kite.enumeration.IndexOrder;

public class Account {

    @Index(unique = true)
    private String username;

    @Index(name = "idx_status", order = IndexOrder.DESC)
    private Integer status;
 
}
```

== Kotlin

```kotlin
import com.tang.kite.annotation.Index
import com.tang.kite.enumeration.IndexOrder

class Account {

    @Index(unique = true)
    var username: String? = null

    @Index(name = "idx_status", order = IndexOrder.DESC)
    var status: Int? = null

}
```

:::

### @CompositeIndex 注解

用于在类级别定义多列联合索引。

| 属性        | 类型                  | 描述                |
|-----------|---------------------|-------------------|
| `name`    | `String`            | 索引名称，默认自动生成       |
| `unique`  | `Boolean`           | 是否唯一索引，默认 `false` |
| `columns` | `Array<String>`     | 联合索引包含的列名         |
| `orders`  | `Array<IndexOrder>` | 各列的排序方式           |

:::tabs key:kite

== Java

```java
import com.tang.kite.annotation.CompositeIndex;

@CompositeIndex(columns = {"username", "status"}, unique = true)
@CompositeIndex(name = "idx_time", columns = {"createTime", "updateTime"})
public class Account {}
```

== Kotlin

```kotlin
import com.tang.kite.annotation.CompositeIndex

@CompositeIndex(columns = ["username", "status"], unique = true)
@CompositeIndex(name = "idx_time", columns = ["createTime", "updateTime"])
class Account
```

:::
