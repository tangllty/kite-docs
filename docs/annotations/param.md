# Param Annotation

The `@Param` annotation is used to specify a name for method parameters so they can be bound in SQL queries.

## Parameters

| Parameter | Type   | Default     | Description                                             |
| --------- | ------ | ----------- | ------------------------------------------------------- |
| `value`   | String | (required)  | The name of the method parameter to be used in SQL bind |

## Usage Example

:::tabs key:kite
== Java

```java
import com.tang.kite.annotation.Param;
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
