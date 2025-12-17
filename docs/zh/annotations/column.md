# Column 注解

`@Column` 注解用于指定实体字段与数据库表列的映射关系。

## 参数说明

| 参数名          | 类型                       | 默认值                 | 说明                    |
| --------------- | -------------------------- | ---------------------- | ----------------------- |
| `value`         | String                     | ""                     | 数据库列名              |
| `ignore`        | Boolean                    | false                  | 生成 SQL 时是否忽略此列 |
| `resultHandler` | KClass\<out ResultHandler> | `ResultHandler::class` | 此列的结果处理器        |

## 使用示例

:::tabs key:kite
== Java

```java
import com.tang.kite.annotation.Column;

public class User {

    private Long id;

    @Column("user_name")
    private String username;

    @Column(ignore = true)
    private String temporary;

    @Column(resultHandler = GenderResultHandler.class)
    private String gender;

}
```

== Kotlin

```kotlin
import com.tang.kite.annotation.Column

class User {

    private val id: Long? = null

    @Column("user_name")
    private val username: String? = null

    @Column(ignore = true)
    private val temporary: String? = null

    @Column(resultHandler = GenderResultHandler::class)
    private val gender: String? = null

}
```

:::

## 自定义结果处理器

> `ResultHandler` 接口允许定义自定义的结果处理逻辑，以便在查询结果映射到实体字段时进行特殊处理。

:::tabs key:kite
== Java

```java
import com.tang.kite.result.ResultHandler;
import com.tang.kite.utils.Reflects;
import java.lang.reflect.Field;

public class GenderResultHandler implements ResultHandler {

    // 自定义空值默认值
    @Override
    public <T> void setNullValue(Field field, T instance) {
        Reflects.setValue(field, instance, "未设置");
    }

    @Override
    public <T> void setValue(Field field, T instance, Object value) {
        Reflects.setValue(field, instance, value);
    }

}
```

== Kotlin

```kotlin
import com.tang.kite.result.ResultHandler
import com.tang.kite.utils.Reflects
import java.lang.reflect.Field

class GenderResultHandler : ResultHandler {

    // 自定义空值默认值
    override fun <T> setNullValue(field: Field, instance: T) {
        Reflects.setValue(field, instance, "未设置")
    }

    override fun <T> setValue(field: Field, instance: T, value: Any) {
        Reflects.setValue(field, instance, value)
    }

}
```

:::
