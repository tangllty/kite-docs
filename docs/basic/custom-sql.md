# Custom SQL

Kite ORM allows using custom SQL statements in the `Mapper` interface to meet complex query requirements.

## Annotations

> The following annotations are defined in the `com.tang.kite.annotation` package.

| Annotation | Type   | Default    | Description                 |
| ---------- | ------ | ---------- | --------------------------- |
| `@Select`  | String | (Required) | Custom SELECT SQL statement |
| `@Insert`  | String | (Required) | Custom INSERT SQL statement |
| `@Update`  | String | (Required) | Custom UPDATE SQL statement |
| `@Delete`  | String | (Required) | Custom DELETE SQL statement |

> The `@Param` annotation is used to mark method parameters. Please refer to [@Param](../annotations/param.md) for documentation.

## Parameter Description

| Parameter | Type   | Default    | Description                                |
| --------- | ------ | ---------- | ------------------------------------------ |
| `value`   | String | (Required) | Method parameter name used for SQL binding |

## Usage Example

:::tabs key:kite
== Java

```java
import com.tang.kite.annotation.Param;
import com.tang.kite.annotation.Select;
import com.tang.kite.mapper.BaseMapper;

public interface UserMapper extends BaseMapper<User> {

    @Select("select id, username from account where username = #{username}")
    Account selectByUsername(@Param("username") String username);

}
```

```java
import com.tang.kite.annotation.id.Id;
import com.tang.kite.annotation.id.IdType;

public class Account {

    @Id(type = IdType.AUTO)
    private Long id;

    private String username;

}
```

== Kotlin

```kotlin
import com.tang.kite.annotation.Param
import com.tang.kite.annotation.Select
import com.tang.kite.mapper.BaseMapper

interface UserMapper : BaseMapper<User> {

    @Select("select id, username from account where username = #{username}")
    fun selectByUsername(@Param("username") username: String): Account?

}
```

```kotlin
import com.tang.kite.annotation.id.Id
import com.tang.kite.annotation.id.IdType

class Account {

    @Id(type = IdType.AUTO)
    var id: Long? = null

    var username: String? = null

}
```

:::

## Multi-line Strings

:::tabs key:kite
== Java

```java
import com.tang.kite.annotation.Param;
import com.tang.kite.annotation.Select;
import com.tang.kite.mapper.BaseMapper;

public interface UserMapper extends BaseMapper<User> {

    @Select("""
        select id, username
        from account
        where username = #{username}
    """)
    Account selectByUsername(@Param("username") String username);

}
```

```java
import com.tang.kite.annotation.id.Id;
import com.tang.kite.annotation.id.IdType;

public class Account {

    @Id(type = IdType.AUTO)
    private Long id;

    private String username;

}
```

== Kotlin

```kotlin
import com.tang.kite.annotation.Param
import com.tang.kite.annotation.Select
import com.tang.kite.mapper.BaseMapper

interface UserMapper : BaseMapper<User> {

    @Select("""
        select id, username
        from account
        where username = #{username}
    """)
    fun selectByUsername(@Param("username") username: String): Account?

}
```

```kotlin
import com.tang.kite.annotation.id.Id
import com.tang.kite.annotation.id.IdType

class Account {

    @Id(type = IdType.AUTO)
    var id: Long? = null

    var username: String? = null

}
```

:::

## Property Access

Access object properties via `.`, access Array, List, Map elements via `[]`, support nested access, and can be used in conditional statements and `#{}` placeholders.

| Usage Scenario         | Example                | Description                                         |
| ---------------------- | ---------------------- | --------------------------------------------------- |
| Object Property Access | `account.username`     | Access object properties                            |
| Array/List Access      | `dataList[0]`          | Access Array or List element by index               |
| Map Element Access     | `settings['theme']`    | Access Map value by key                             |
| Combined Access        | `user.address[0].city` | Access city of first address in user's address list |

## Operator Support

Supports arithmetic operations, comparison operations, logical operations, and parentheses for priority control, which can be used in conditional statements and placeholders.

### Arithmetic Operators

| Operator | Description    | Example           |
| -------- | -------------- | ----------------- |
| `+`      | Addition       | `age + 1`         |
| `-`      | Subtraction    | `quantity - 5`    |
| `*`      | Multiplication | `price * 2`       |
| `/`      | Division       | `total / count`   |
| `%`      | Modulus        | `day % 7`         |
| `^`      | Exponentiation | `base ^ exponent` |

### Comparison Operators

| Operator | Description           | Example              |
| -------- | --------------------- | -------------------- |
| `>`      | Greater than          | `age > 18`           |
| `<`      | Less than             | `score < 60`         |
| `>=`     | Greater than or equal | `salary >= 5000`     |
| `<=`     | Less than or equal    | `quantity <= 100`    |
| `==`     | Equal to              | `status == 'ACTIVE'` |
| `!=`     | Not equal to          | `role != 'ADMIN'`    |

### Logical Operators

| Operator | Description | Example                          |
| -------- | ----------- | -------------------------------- |
| `&&`     | Logical AND | `age > 18 && status == 'ACTIVE'` |
| `\|\|`   | Logical OR  | `role == 'ADMIN'                 |
| `!`      | Logical NOT | `!isDeleted`                     |

### Parentheses Priority

Use `()` to control operation priority.

```kotlin
// Calculate multiplication first, then addition
price * (1 + discount)

// Calculate logical OR first, then logical AND
(role == 'ADMIN' || role == 'MANAGER') && status == 'ACTIVE'
```

## Conditional Statements

Supports `if`, `else if`, `else` and nested `if` statements:

```kotlin
@Select("""
    select id, username, email
    from account
    if (username != null && username != '') {
        and username = #{username}
    }
    if (age != null) {
        if (age > 18) {
            and age > #{age}
        } else {
            and age <= #{age}
        }
    }
    if (status == 'ACTIVE') {
        and status = 'ACTIVE'
    } else if (status == 'INACTIVE') {
        and status = 'INACTIVE'
    } else {
        and status = 'PENDING'
    }
""")
```

## Supported Methods

| Method Name          | Function Description                             | Supported Data Types               |
| -------------------- | ------------------------------------------------ | ---------------------------------- |
| `length/size`        | Get length/size                                  | CharSequence, Iterable, Array, Map |
| `isEmpty`            | Check if empty                                   | CharSequence, Iterable, Array, Map |
| `isNotEmpty`         | Check if not empty                               | CharSequence, Iterable, Array, Map |
| `contains`           | Check if contains specified element              | CharSequence, Iterable, Array, Map |
| `containsIgnoreCase` | Check if contains specified string ignoring case | CharSequence                       |
| `isBlank`            | Check if is blank string                         | CharSequence                       |
| `isNotBlank`         | Check if is not blank string                     | CharSequence                       |
| `toUpperCase`        | Convert to uppercase                             | CharSequence                       |
| `toLowerCase`        | Convert to lowercase                             | CharSequence                       |
| `startsWith`         | Check if starts with specified prefix            | CharSequence                       |
| `endsWith`           | Check if ends with specified suffix              | CharSequence                       |
| `trim`               | Remove leading and trailing whitespace           | CharSequence                       |

### Usage Examples

::: tabs key:kite
== Java

```java
@Select("""
    select id, username, email
    from account
    if (username != null) {
        and username = #{username}
    }
    if (email != null && email.contains('@')) {
        and email = #{email}
    }
""")
Account selectAccount(@Param("username") String username, @Param("email") String email);
```

== Kotlin

```kotlin
@Select("""
    select id, username, email
    from account
    if (username != null) {
        and username = #{username}
    }
    if (email != null && email.contains('@')) {
        and email = #{email}
    }
""")
fun selectAccount(@Param("username") username: String?, @Param("email") email: String?): Account?
```

:::
