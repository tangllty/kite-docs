# Param 注解

`@Param` 注解用于为方法参数指定名称，以便在 SQL 查询中进行参数绑定。

## 参数说明

| 参数名  | 类型   | 默认值     | 说明                                      |
| ------- | ------ | ---------- | ----------------------------------------- |
| `value` | String | (required) | 方法参数的名称，用于 SQL 查询中的参数绑定 |

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
