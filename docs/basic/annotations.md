# Annotations

This section describes the key annotations used in the Kite ORM framework for entity mapping and configuration.

## Table Annotation

The `@Table` annotation is used to mark a class as an entity and specify the corresponding database table information.

> If the `@Table` annotation is not specified, Kite ORM will convert the class name to snake_case as the table name.

### Parameters

| Parameter | Type   | Default Value | Description                                                     |
| --------- | ------ | ------------- | --------------------------------------------------------------- |
| `value`   | String | (required)    | The name of the database table                                  |
| `alias`   | String | ""            | An optional alias for the table, used in SQL queries with joins |

### Usage Example

:::tabs key:kite
== Java

```java
import com.tang.kite.annotation.Table;

@Table(value = "account", alias = "a")
public class Account {}
```

== Kotlin

```kotlin
import com.tang.kite.annotation.Table

@Table(value = "account", alias = "a")
class Account {}
```

:::

## Id Annotation

The `@Id` annotation is used to mark a field as the primary key of an entity. It supports different ID generation strategies.

### Parameters

| Parameter    | Type                   | Default Value                | Description                                                  |
| ------------ | ---------------------- | ---------------------------- | ------------------------------------------------------------ |
| `type`       | IdType                 | `IdType.NONE`                | The type of ID generation strategy                           |
| `idStrategy` | KClass\<out IdStrategy> | `SnowflakeIdStrategy::class` | The ID strategy class to use when type is `IdType.GENERATOR` |

### ID Types

The `IdType` enum provides different strategies for ID generation:

- `NONE`: No special handling, ID must be set manually
- `AUTO`: Auto-increment ID (depends on database support)
- `GENERATOR`: Use a custom ID generator strategy

### Usage Examples

#### Auto-increment ID

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

#### Snowflake ID Generation

:::tabs key:kite
== Java

```java
import com.tang.kite.annotation.id.Id;
import com.tang.kite.annotation.id.IdType;

public class Account {

    @Id(type = IdType.GENERATOR)
    private Long id;

}
```

== Kotlin

```kotlin
import com.tang.kite.annotation.id.Id
import com.tang.kite.annotation.id.IdType

class Account {

    @Id(type = IdType.GENERATOR)
    val id: Long? = null

}
```

:::

#### Custom ID Strategy

:::tabs key:kite
== Java

```java
import com.tang.kite.annotation.id.strategy.IdStrategy;
import java.io.Serializable;
import java.lang.reflect.Field;

public class CustomIdStrategy implements IdStrategy {

    @Override
    public Serializable getId(Field idField) {
        // Assuming using current timestamp to generate ID
        long timestamp = System.currentTimeMillis();
        // Can return different types of IDs based on field type
        if (idField.getType().equals(String.class)) {
            return String.valueOf(timestamp);
        }
        return timestamp;
    }

}
```

== Kotlin

```kotlin
import com.tang.kite.annotation.id.strategy.IdStrategy
import java.io.Serializable
import java.lang.reflect.Field

class CustomIdStrategy : IdStrategy {

    override fun getId(idField: Field): Serializable {
      // Assuming using current timestamp to generate ID
      val timestamp = System.currentTimeMillis()
      // Can return different types of IDs based on field type
      return if (idField.type == String::class.java) {
        timestamp.toString()
      } else {
        timestamp
      }
    }

}
```

:::

#### Using Custom ID Strategy

:::tabs key:kite
== Java

```java
import com.tang.kite.annotation.id.Id;
import com.tang.kite.annotation.id.IdType;

public class Account {

    @Id(type = IdType.GENERATOR, idStrategy = CustomIdStrategy.class)
    private Long id;

}
```

== Kotlin

```kotlin
import com.tang.kite.annotation.id.Id
import com.tang.kite.annotation.id.IdType

class Account {

    @Id(type = IdType.GENERATOR, idStrategy = CustomIdStrategy::class)
    val id: Long? = null

}
```

:::
