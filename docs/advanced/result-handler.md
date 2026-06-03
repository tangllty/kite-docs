# Result Handler

The result handler customizes the conversion logic of field values when mapping from a database `ResultSet` to Java / Kotlin objects. You can specify handlers via global configuration or field annotations.

## Lookup Priority

When query results are mapped to entity fields, Kite looks up a result handler in the following priority:

1. **Field Annotation** — handler specified by `@Column(resultHandler = ...)`, highest priority
2. **Global Configuration** — type handlers registered in `KiteConfig.resultHandlers`
3. **Built-in Defaults** — Kite's built-in handlers for common types

## Built-in Handlers

Kite provides default result handlers for the following types, ready to use without any configuration:

| Package     | Type                      | Handler                      |
|-------------|---------------------------|------------------------------|
| `primitive` | `String`                  | `StringResultHandler`        |
| `primitive` | `Char`                    | `CharResultHandler`          |
| `primitive` | `Short`                   | `ShortResultHandler`         |
| `primitive` | `Byte`                    | `ByteResultHandler`          |
| `primitive` | `Int`                     | `IntResultHandler`           |
| `primitive` | `Long`                    | `LongResultHandler`          |
| `primitive` | `Double`                  | `DoubleResultHandler`        |
| `primitive` | `Float`                   | `FloatResultHandler`         |
| `primitive` | `Boolean`                 | `BooleanResultHandler`       |
| `math`      | `BigDecimal`              | `BigDecimalResultHandler`    |
| `math`      | `BigInteger`              | `BigIntegerResultHandler`    |
| `time`      | `java.sql.Date`           | `SqlDateResultHandler`       |
| `time`      | `java.sql.Time`           | `TimeResultHandler`          |
| `time`      | `java.sql.Timestamp`      | `TimestampResultHandler`     |
| `time`      | `java.util.Date`          | `DateResultHandler`          |
| `time`      | `java.util.Calendar`      | `CalendarResultHandler`      |
| `time`      | `java.time.Instant`       | `InstantResultHandler`       |
| `time`      | `java.time.LocalDate`     | `LocalDateResultHandler`     |
| `time`      | `java.time.LocalTime`     | `LocalTimeResultHandler`     |
| `time`      | `java.time.LocalDateTime` | `LocalDateTimeResultHandler` |

> `DefaultResultHandler` is used when no handler matches the field type.

## Global Configuration

Register custom handlers via `KiteConfig.resultHandlers`. Global configuration overrides built-in defaults.

:::tabs key:kite

== Java

```java
import com.tang.kite.config.KiteConfig;
import com.tang.kite.handler.result.ResultHandler;

KiteConfig.getResultHandlers().put(String.class, new TrimmedStringResultHandler());
```

== Kotlin

```kotlin
import com.tang.kite.config.KiteConfig
import com.tang.kite.handler.result.ResultHandler

KiteConfig.resultHandlers[String::class.java] = TrimmedStringResultHandler
```

:::

## Field Annotation

Use the `resultHandler` attribute of the `@Column` annotation to specify a handler for a single field, which takes precedence over global configuration.

:::tabs key:kite

== Java

```java
import com.tang.kite.annotation.Column;

public class Account {

    @Column(resultHandler = TrimmedStringResultHandler.class)
    private String name;

}
```

== Kotlin

```kotlin
import com.tang.kite.annotation.Column

class Account {

    @Column(resultHandler = TrimmedStringResultHandler::class)
    var name: String? = null

}
```

:::

## Custom Handlers

Implement the `ResultHandler` interface to create a custom result handler. The core method is `setValue`.
When the value is `null`, `setNullValue` is called (default implementation is `Reflects.setValue(field, instance, null)`, override as needed).

It is recommended to use `Reflects.setValue` for setting field values — it automatically handles visibility without the need to explicitly call `trySetAccessible`.

:::tabs key:kite

== Java

```java
import com.tang.kite.exception.UnsupportedTypeException;
import com.tang.kite.handler.result.ResultHandler;
import com.tang.kite.utils.Reflects;
import org.jspecify.annotations.NonNull;
import java.lang.reflect.Field;

public class TrimmedStringResultHandler implements ResultHandler {

    @Override
    public <T> void setValue(@NonNull Field field, T instance, @NonNull Object value) {
        String result;
        if (value instanceof String string) {
            result = string.trim();
        } else if (value instanceof Number number) {
            result = String.valueOf(number);
        } else {
            throw new UnsupportedTypeException(value.getClass(), field);
        }
        Reflects.setValue(field, instance, result);
    }

}
```

== Kotlin

```kotlin
import com.tang.kite.exception.UnsupportedTypeException
import com.tang.kite.handler.result.ResultHandler
import com.tang.kite.utils.Reflects
import java.lang.reflect.Field

object TrimmedStringResultHandler : ResultHandler {

    override fun <T> setValue(field: Field, instance: T, value: Any) {
        val result = when (value) {
            is String -> value.trim()
            is Number -> value.toString()
            else -> throw UnsupportedTypeException(value::class, field)
        }
        Reflects.setValue(field, instance, result)
    }

}
```

:::
