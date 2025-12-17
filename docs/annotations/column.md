# Column Annotation

The `@Column` annotation is used to specify the mapping relationship between entity fields and database table columns.

## Parameters

| Parameter       | Type                       | Default Value          | Description                                       |
| --------------- | -------------------------- | ---------------------- | ------------------------------------------------- |
| `value`         | String                     | ""                     | The name of the database column                   |
| `ignore`        | Boolean                    | false                  | Whether to ignore this column when generating SQL |
| `resultHandler` | KClass\<out ResultHandler> | `ResultHandler::class` | The result handler for this column                |

## Usage Example

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

## Custom Result Handler

> The `ResultHandler` interface allows to define custom result processing logic for special handling when query results are mapped to entity fields.

:::tabs key:kite
== Java

```java
import com.tang.kite.result.ResultHandler;
import com.tang.kite.utils.Reflects;
import java.lang.reflect.Field;

public class GenderResultHandler implements ResultHandler {

    // Custom default value for null
    @Override
    public <T> void setNullValue(Field field, T instance) {
        Reflects.setValue(field, instance, "Not Specified");
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

    // Custom default value for null
    override fun <T> setNullValue(field: Field, instance: T) {
        Reflects.setValue(field, instance, "Not Specified")
    }

    override fun <T> setValue(field: Field, instance: T, value: Any) {
        Reflects.setValue(field, instance, value)
    }

}
```

:::
