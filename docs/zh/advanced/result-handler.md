# 结果处理器

结果处理器用于自定义字段值从数据库 `ResultSet` 到 Java / Kotlin 对象的转换逻辑。你可以通过全局配置或字段注解来指定处理器。

## 查找优先级

当查询结果映射到实体字段时，Kite 按以下优先级查找结果处理器：

1. **字段注解** — `@Column(resultHandler = ...)` 指定的处理器，优先级最高
2. **全局配置** — `KiteConfig.resultHandlers` 中注册的类型处理器
3. **内置默认** — Kite 内置的默认处理器，支持常见类型

## 内置处理器

Kite 为以下类型提供了默认的结果处理器，无需额外配置即可直接使用：

| 包名          | 类型                        | 处理器                          |
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

> 如果字段类型未匹配到任何处理器，将使用 `DefaultResultHandler`。

## 全局配置

通过 `KiteConfig.resultHandlers` 注册自定义处理器，全局配置会覆盖内置默认处理器。

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

## 字段注解

通过 `@Column` 注解的 `resultHandler` 属性为单个字段指定处理器，优先级高于全局配置。

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

## 自定义处理器

实现 `ResultHandler` 接口来创建自定义结果处理器，核心方法是 `setValue`。
当值为 `null` 时，会调用 `setNullValue`（默认实现为 `Reflects.setValue(field, instance, null)`，可按需重写）。

推荐使用 `Reflects.setValue` 设置字段值，它会自动处理可见性，无需手动调用 `trySetAccessible`。

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
