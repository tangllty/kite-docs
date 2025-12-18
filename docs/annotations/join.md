# Join Annotation

The `@Join` annotation is used to define associations between entities, supporting one-to-one, one-to-many, many-to-one, and many-to-many relationships.

> To execute queries that include annotation-generated joins, use `BaseMapper` methods with the `WithJoin` suffix.

## Parameters

| Parameter          | Type   | Default | Description                                                    |
| ------------------ | ------ | ------- | -------------------------------------------------------------- |
| `selfField`        | String | ""      | The field name in the source entity used for the join          |
| `targetField`      | String | ""      | The field name in the target entity used for the join          |
| `joinTable`        | String | ""      | The join (pivot) table name (required for many-to-many)        |
| `joinSelfColumn`   | String | ""      | The column in the join table that references the source entity |
| `joinTargetColumn` | String | ""      | The column in the join table that references the target entity |

## One-to-One

Used when two entities have a one-to-one relationship.

:::tabs key:kite
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

## One-to-Many

Used when one entity is associated with multiple entities.

:::tabs key:kite

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

## Many-to-One

Used when multiple entities reference the same target entity.

:::tabs key:kite
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

## Many-to-Many

Used when two entities have a many-to-many relationship and a join table is required.

:::tabs key:kite
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
