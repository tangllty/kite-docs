# Fill Handler

The fill handler feature allows you to automatically set values for certain fields during CRUD operations without manually specifying them.

## Official Implementation

Kite provides a time fill handler `TimeFillHandler` that can automatically set creation and update time fields using `@CreateTime` and `@UpdateTime` annotations.

## Define Annotations

Annotations can only be applied to fields.

> You can add properties to implement more complex functionality.

:::tabs key:kite

== Java

```java
import java.lang.annotation.Documented;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Target(ElementType.FIELD)
@Retention(RetentionPolicy.RUNTIME)
@Documented
public @interface CreateTime {}
```

== Kotlin

```kotlin
@Target(AnnotationTarget.FIELD)
@Retention(AnnotationRetention.RUNTIME)
@MustBeDocumented
annotation class CreateTime
```

:::

## Define Fill Handler

You can return different values based on annotations and field types.

:::tabs key:kite

== Java

```java
import com.tang.kite.handler.fill.FillHandler;
import java.lang.annotation.Annotation;
import java.lang.reflect.Field;
import java.time.LocalDateTime;

public class TimeFillHandler implements FillHandler {

    @Override
    @Nullable
    public Object fillValue(@NotNull Annotation annotation, @NotNull Field field, @NotNull Object entity) {
        return LocalDateTime.now();
    }

}
```

== Kotlin

```kotlin
import com.tang.kite.handler.fill.FillHandler
import java.lang.annotation.Annotation
import java.lang.reflect.Field
import java.time.LocalDateTime

class TimeFillHandler : FillHandler {

    override fun fillValue(annotation: Annotation, field: Field, entity: Any): Any? {
        return LocalDateTime.now()
    }

}
```

:::

## Register Fill Handler

You can register fill handlers in `KiteConfig`.

:::tabs key:kite

== Java

```java
import com.tang.kite.annotation.fill.CreateTime;
import com.tang.kite.config.KiteConfig;
import com.tang.kite.enumeration.SqlType;
import com.tang.kite.handler.fill.FillKey;
import com.tang.kite.handler.fill.TimeFillHandler;

KiteConfig.getFillHandlers().put(new FillKey(CreateTime.class, SqlType.INSERT), new TimeFillHandler());
```
== Kotlin

```kotlin
import com.tang.kite.annotation.fill.CreateTime
import com.tang.kite.config.KiteConfig
import com.tang.kite.enumeration.SqlType
import com.tang.kite.handler.fill.FillKey
import com.tang.kite.handler.fill.TimeFillHandler

KiteConfig.fillHandlers[FillKey(CreateTime::class, SqlType.INSERT)] = TimeFillHandler()
```
:::

## Usage Example

:::tabs key:kite

== Java

```java
public class Account {

    @CreateTime
    private LocalDateTime createTime;

    @UpdateTime
    private LocalDateTime updateTime;

}
```

== Kotlin

```kotlin
class Account {

    @CreateTime
    var createTime: LocalDateTime? = null

    @UpdateTime
    var updateTime: LocalDateTime? = null

}
```

:::
