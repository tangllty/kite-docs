# Id Annotation

The `@Id` annotation is used to mark a field as the primary key of an entity. It supports different ID generation strategies.

## Parameters

| Parameter    | Type                    | Default Value                | Description                                                  |
| ------------ | ----------------------- | ---------------------------- | ------------------------------------------------------------ |
| `type`       | IdType                  | `IdType.NONE`                | The type of ID generation strategy                           |
| `idStrategy` | KClass\<out IdStrategy> | `SnowflakeIdStrategy::class` | The ID strategy class to use when type is `IdType.GENERATOR` |

## ID Types

The `IdType` enum provides different strategies for ID generation:

- `NONE`: No special handling, ID must be set manually
- `AUTO`: Auto-increment ID (depends on database support)
- `GENERATOR`: Use a custom ID generator strategy

## Usage Examples

### Auto-increment ID

:::tabs key:kite
== Java

```java
import com.tang.kite.annotation.id.Id;
import com.tang.kite.annotation.id.IdType;

public class Account {

    @Id(type = IdType.AUTO)
    private Long id;

}
```

== Kotlin

```kotlin
import com.tang.kite.annotation.id.Id
import com.tang.kite.annotation.id.IdType

class Account {

    @Id(type = IdType.AUTO)
    var id: Long? = null

}
```

:::
