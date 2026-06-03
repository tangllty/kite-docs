# Schema Sync

Schema Sync allows you to define database structures through entity classes. Kite automatically generates and maintains database tables, columns and indexes based on annotations.

## Global Configuration

Configure Schema Sync behavior via `SchemaConfig`:

| Option                 | Default | Description                                    |
|------------------------|---------|------------------------------------------------|
| `enabled`              | `false` | Whether to enable Schema Sync                  |
| `sqlLowercase`         | `true`  | Whether generated SQL is lowercase             |
| `scanPackages`         | `[]`    | Entity class scan packages, supports wildcards |
| `createMissingTables`  | `true`  | Whether to create missing tables               |
| `dropExistingTables`   | `false` | Whether to drop existing tables                |
| `createMissingColumns` | `true`  | Whether to add missing columns                 |
| `dropExistingColumns`  | `false` | Whether to drop extra columns                  |
| `createMissingIndexes` | `true`  | Whether to create missing indexes              |
| `modifyIndexes`        | `false` | Whether to modify existing indexes             |
| `dropExistingIndexes`  | `false` | Whether to drop extra indexes                  |

**Enabling Example**

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

## @Table Annotation

The `@Table` annotation maps entity classes to database tables. Schema Sync related attributes:

| Attribute | Type     | Description                        |
|-----------|----------|------------------------------------|
| `value`   | `String` | Table name, defaults to class name |
| `comment` | `String` | Table comment                      |

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

## @Column Annotation

The `@Column` annotation maps entity class fields to database columns. Schema Sync related attributes:

| Attribute          | Type               | Description                                                    |
|--------------------|--------------------|----------------------------------------------------------------|
| `value`            | `String`           | Column name, defaults to field name                            |
| `ignore`           | `Boolean`          | Whether to ignore this column, omitting it from the database   |
| `dataType`         | `String`           | Column data type, auto-detected if empty                       |
| `length`           | `Int`              | Column length for `VARCHAR`, `CHAR`, etc., default `255`       |
| `precision`        | `Int`              | Numeric precision for `DECIMAL`, `NUMERIC`, etc., default `10` |
| `scale`            | `Int`              | Numeric scale for `DECIMAL`, `NUMERIC`, etc., default `2`      |
| `nullable`         | `Boolean`          | Whether to allow `NULL`, default `true`                        |
| `defaultValue`     | `Array<String>`    | Column default value                                           |
| `comment`          | `Array<String>`    | Column comment                                                 |
| `foreignKey`       | `String`           | Referenced foreign key table name                              |
| `foreignKeyColumn` | `String`           | Referenced column of the foreign key table                     |
| `onDelete`         | `ForeignKeyAction` | Foreign key action on delete                                   |
| `onUpdate`         | `ForeignKeyAction` | Foreign key action on update                                   |

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

## Indexes

### @Index Annotation

Creates indexes on individual fields.

| Attribute | Type         | Description                                  |
|-----------|--------------|----------------------------------------------|
| `name`    | `String`     | Index name, auto-generated if empty          |
| `unique`  | `Boolean`    | Whether the index is unique, default `false` |
| `order`   | `IndexOrder` | Sort order, default `ASC`                    |

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

### @CompositeIndex Annotation

Defines multi-column composite indexes at the class level.

| Attribute | Type                | Description                                  |
|-----------|---------------------|----------------------------------------------|
| `name`    | `String`            | Index name, auto-generated if empty          |
| `unique`  | `Boolean`           | Whether the index is unique, default `false` |
| `columns` | `Array<String>`     | Column names in the composite index          |
| `orders`  | `Array<IndexOrder>` | Sort order for each column                   |

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
