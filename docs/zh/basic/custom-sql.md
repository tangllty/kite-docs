# 自定义 SQL

Kite ORM 允许在 `Mapper` 接口中使用自定义的 SQL 语句，以满足复杂查询需求。

## 注解

> 以下注解在 `com.tang.kite.annotation` 包中定义。

| 参数名    | 类型   | 默认值 | 说明                     |
| --------- | ------ | ------ | ------------------------ |
| `@Select` | String | (必填) | 自定义的 SELECT SQL 语句 |
| `@Insert` | String | (必填) | 自定义的 INSERT SQL 语句 |
| `@Update` | String | (必填) | 自定义的 UPDATE SQL 语句 |
| `@Delete` | String | (必填) | 自定义的 DELETE SQL 语句 |

> `@Param` 注解用于标记方法参数，文档请参考[@Param](../annotations/param.md)。

## 参数说明

| 参数名  | 类型   | 默认值 | 说明                        |
| ------- | ------ | ------ | --------------------------- |
| `value` | String | (必填) | 用于 SQL 绑定的方法参数名称 |

## 使用示例

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

## 多行字符串

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

## 属性访问

通过 `.` 访问对象属性，`[]` 访问 Array、List、Map 元素，支持嵌套访问，允许在条件语句里面和 `#{}` 占位符中使用。

| 使用场景        | 示例                   | 说明                               |
| --------------- | ---------------------- | ---------------------------------- |
| 对象属性访问    | `account.username`     | 访问对象属性                       |
| Array/List 访问 | `dataList[0]`          | 访问 Array 或 List 指定索引元素    |
| Map 元素访问    | `settings['theme']`    | 访问 Map 指定键对应的值            |
| 组合访问        | `user.address[0].city` | 访问用户地址列表中第一个地址的城市 |

## 运算符支持

支持算术运算、比较运算、逻辑运算以及括号优先级控制，可在条件语句和占位符中使用。

### 算术运算符

| 运算符 | 说明   | 示例              |
| ------ | ------ | ----------------- |
| `+`    | 加法   | `age + 1`         |
| `-`    | 减法   | `quantity - 5`    |
| `*`    | 乘法   | `price * 2`       |
| `/`    | 除法   | `total / count`   |
| `%`    | 取模   | `day % 7`         |
| `^`    | 幂运算 | `base ^ exponent` |

### 比较运算符

| 运算符 | 说明     | 示例                 |
| ------ | -------- | -------------------- |
| `>`    | 大于     | `age > 18`           |
| `<`    | 小于     | `score < 60`         |
| `>=`   | 大于等于 | `salary >= 5000`     |
| `<=`   | 小于等于 | `quantity <= 100`    |
| `==`   | 等于     | `status == 'ACTIVE'` |
| `!=`   | 不等于   | `role != 'ADMIN'`    |

### 逻辑运算符

| 运算符 | 说明   | 示例                             |
| ------ | ------ | -------------------------------- |
| `&&`   | 逻辑与 | `age > 18 && status == 'ACTIVE'` |
| `\|\|` | 逻辑或 | `role == 'ADMIN'`                |
| `!`    | 逻辑非 | `!isDeleted`                     |

### 括号优先级

使用 `()` 控制运算优先级。

```kotlin
// 先计算乘法，再计算加法
price * (1 + discount)

// 先计算逻辑或，再计算逻辑与
(role == 'ADMIN' || role == 'MANAGER') && status == 'ACTIVE'
```

## 条件语句

支持 `if`、`else if`、`else` 以及嵌套 `if` 语句：

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

## 方法支持

| 方法名               | 功能描述                         | 支持的数据类型                     |
| -------------------- | -------------------------------- | ---------------------------------- |
| `length/size`        | 获取长度/大小                    | CharSequence, Iterable, Array, Map |
| `isEmpty`            | 检查是否为空                     | CharSequence, Iterable, Array, Map |
| `isNotEmpty`         | 检查是否非空                     | CharSequence, Iterable, Array, Map |
| `contains`           | 检查是否包含指定元素             | CharSequence, Iterable, Array, Map |
| `containsIgnoreCase` | 忽略大小写检查是否包含指定字符串 | CharSequence                       |
| `isBlank`            | 检查是否为空白字符串             | CharSequence                       |
| `isNotBlank`         | 检查是否非空白字符串             | CharSequence                       |
| `toUpperCase`        | 转换为大写字母                   | CharSequence                       |
| `toLowerCase`        | 转换为小写字母                   | CharSequence                       |
| `startsWith`         | 检查是否以指定前缀开头           | CharSequence                       |
| `endsWith`           | 检查是否以指定后缀结尾           | CharSequence                       |
| `trim`               | 去除首尾空白字符                 | CharSequence                       |

### 使用示例

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
Account selectAccount(@Param("username") username: String?, @Param("email") email: String?);
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
fun selectAccount(@Param("username") username: String?, @Param("email") email: String?): Account
```

:::
