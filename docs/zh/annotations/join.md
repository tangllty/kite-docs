# Join 注解

`@Join` 注解用于定义实体之间的关联关系，支持一对一、一对多、多对一、多对多关联类型。

> 想要查询时注解生成，需使用 `BaseMapper` 中后缀为`WithJoin`的方法。

## 参数说明

| 参数名             | 类型   | 默认值 | 说明                             |
| ------------------ | ------ | ------ | -------------------------------- |
| `selfField`        | String | ""     | 当前实体中用于关联的字段名       |
| `targetField`      | String | ""     | 目标实体中用于关联的字段名       |
| `joinTable`        | String | ""     | 关联表名（多对多关系时需要指定） |
| `joinSelfColumn`   | String | ""     | 关联表中与当前实体主键关联的列名 |
| `joinTargetColumn` | String | ""     | 关联表中与目标实体主键关联的列名 |

## 一对一（One-to-One）

适用于两个实体之间存在一对一的关联关系。

::: tabs key:kite
== Java

```java
import com.tang.kite.annotation.Join;
import com.tang.kite.annotation.id.Id;
import com.tang.kite.annotation.id.IdType;

public class Account {

    @Id(type = IdType.AUTO)
    private Long id;

    private String username;

    @Join(selfField = "id", targetField = "accountId")
    private Role role;

}
```

```java
import com.tang.kite.annotation.id.Id;
import com.tang.kite.annotation.id.IdType;

public class Role {

    @Id(type = IdType.AUTO)
    private Long id;

    private Long accountId;

    private String name;

}
```

== Kotlin

```kotlin
import com.tang.kite.annotation.Join
import com.tang.kite.annotation.id.Id
import com.tang.kite.annotation.id.IdType

class Account {

    @Id(type = IdType.AUTO)
    var id: Long? = null

    var username: String? = null

    @Join(selfField = "id", targetField = "accountId")
    var role: Role? = null

}
```

```kotlin
import com.tang.kite.annotation.id.Id
import com.tang.kite.annotation.id.IdType

class Role {

    @Id(type = IdType.AUTO)
    var id: Long? = null

    var accountId: Long? = null

    var name: String? = null

}
```

:::

## 一对多（One-to-Many）

适用于一个实体关联多个其他实体的情况。

::: tabs key:kite

== Java

```java
import com.tang.kite.annotation.Join;
import com.tang.kite.annotation.id.Id;
import com.tang.kite.annotation.id.IdType;

public class Account {

    @Id(type = IdType.AUTO)
    private Long id;

    private String username;

    @Join(selfField = "id", targetField = "accountId")
    private List<Role> roles;

}
```

```java
import com.tang.kite.annotation.id.Id;
import com.tang.kite.annotation.id.IdType;

public class Role {

    @Id(type = IdType.AUTO)
    private Long id;

    private Long accountId;

    private String name;

}
```

== Kotlin

```kotlin
import com.tang.kite.annotation.Join
import com.tang.kite.annotation.id.Id
import com.tang.kite.annotation.id.IdType

class Account {

    @Id(type = IdType.AUTO)
    var id: Long? = null

    var username: String? = null

    @Join(selfField = "id", targetField = "accountId")
    var roles: List<Role>? = null

}
```

```kotlin
import com.tang.kite.annotation.id.Id
import com.tang.kite.annotation.id.IdType

class Role {

    @Id(type = IdType.AUTO)
    var id: Long? = null

    var accountId: Long? = null

    var name: String? = null

}
```

:::

## 多对一（Many-to-One）

适用于多个实体关联到同一个实体的情况。

::: tabs key:kite
== Java

```java
import com.tang.kite.annotation.Join;
import com.tang.kite.annotation.id.Id;
import com.tang.kite.annotation.id.IdType;

public class Account {

    @Id(type = IdType.AUTO)
    private Long id;

    private String username;

    @Join(
        selfField = "id",
        targetField = "id",
        joinTable = "account_role",
        joinSelfColumn = "account_id",
        joinTargetColumn = "role_id"
    )
    private Role role;

}
```

```java
public class AccountRole {

    private Long accountId;

    private Long roleId;

}
```

```java
import com.tang.kite.annotation.id.Id;
import com.tang.kite.annotation.id.IdType;

public class Role {

    @Id(type = IdType.AUTO)
    private Long id;

    private Long accountId;

    private String name;

}
```

== Kotlin

```kotlin
import com.tang.kite.annotation.Join
import com.tang.kite.annotation.id.Id
import com.tang.kite.annotation.id.IdType

class Account {

    @Id(type = IdType.AUTO)
    var id: Long? = null

    var username: String? = null

    @Join(
        selfField = "id",
        targetField = "id",
        joinTable = "account_role",
        joinSelfColumn = "account_id",
        joinTargetColumn = "role_id"
    )
    var role: Role? = null

}
```

```kotlin
class AccountRole {

    var accountId: Long? = null

    var roleId: Long? = null

}
```

```kotlin
import com.tang.kite.annotation.id.Id
import com.tang.kite.annotation.id.IdType

class Role {

    @Id(type = IdType.AUTO)
    var id: Long? = null

    var accountId: Long? = null

    var name: String? = null

}
```

:::

## 多对多关系（Many-to-Many）

适用于两个实体之间存在多对多的关联关系，需要通过中间表来维护。

::: tabs key:kite
== Java

```java
import com.tang.kite.annotation.Join;
import com.tang.kite.annotation.id.Id;
import com.tang.kite.annotation.id.IdType;

public class Account {

    @Id(type = IdType.AUTO)
    private Long id;

    private String username;

    @Join(
        selfField = "id",
        targetField = "id",
        joinTable = "account_role",
        joinSelfColumn = "account_id",
        joinTargetColumn = "role_id"
    )
    private List<Role> roles;

}
```

```java
public class AccountRole {

    private Long accountId;

    private Long roleId;

}
```

```java
import com.tang.kite.annotation.id.Id;
import com.tang.kite.annotation.id.IdType;

public class Role {

    @Id(type = IdType.AUTO)
    private Long id;

    private Long accountId;

    private String name;

}
```

== Kotlin

```kotlin
import com.tang.kite.annotation.Join
import com.tang.kite.annotation.id.Id
import com.tang.kite.annotation.id.IdType

class Account {

    @Id(type = IdType.AUTO)
    var id: Long? = null

    var username: String? = null

    @Join(
        selfField = "id",
        targetField = "id",
        joinTable = "account_role",
        joinSelfColumn = "account_id",
        joinTargetColumn = "role_id"
    )
    var roles: List<Role>? = null

}
```

```kotlin
class AccountRole {

    var accountId: Long? = null

    var roleId: Long? = null

}
```

```kotlin
import com.tang.kite.annotation.id.Id
import com.tang.kite.annotation.id.IdType

class Role {

    @Id(type = IdType.AUTO)
    var id: Long? = null

    var accountId: Long? = null

    var name: String? = null

}
```

:::
