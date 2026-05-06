# Field Handler

The field handler feature allows you to automatically set values for certain fields during CRUD operations without manually specifying them.

## Official Implementation

Kite provides a time field handler `TimeFieldHandler` that can automatically set creation and update time fields using `@CreateTime` and `@UpdateTime` annotations.

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

## Define Field Handler

You can return different values based on annotations and field types.

:::tabs key:kite

== Java

```java
import com.tang.kite.handler.field.FieldHandler;
import java.lang.annotation.Annotation;
import java.lang.reflect.Field;
import java.time.LocalDateTime;

public class TimeFieldHandler implements FieldHandler {

    @Override
    @Nullable
    public Object handleValue(@NotNull Annotation annotation, @NotNull Field field, @NotNull Object entity) {
        return LocalDateTime.now();
    }

}
```

== Kotlin

```kotlin
import com.tang.kite.handler.field.FieldHandler
import java.lang.annotation.Annotation
import java.lang.reflect.Field
import java.time.LocalDateTime

class TimeFieldHandler : FieldHandler {

    override fun handleValue(annotation: Annotation, field: Field, entity: Any): Any? {
        return LocalDateTime.now()
    }

}
```

:::

## Register Field Handler

You can register field handlers in `KiteConfig`.

:::tabs key:kite

== Java

```java
import com.tang.kite.annotation.field.CreateTime;
import com.tang.kite.config.KiteConfig;
import com.tang.kite.enumeration.SqlType;
import com.tang.kite.handler.field.FieldMetaKey;
import com.tang.kite.handler.field.TimeFieldHandler;

KiteConfig.getFieldHandlers().put(new FieldMetaKey(CreateTime.class, SqlType.INSERT), new TimeFieldHandler());
```

== Kotlin

```kotlin
import com.tang.kite.annotation.field.CreateTime
import com.tang.kite.config.KiteConfig
import com.tang.kite.enumeration.SqlType
import com.tang.kite.handler.field.FieldMetaKey
import com.tang.kite.handler.field.TimeFieldHandler

KiteConfig.fieldHandlers[FieldMetaKey(CreateTime::class, SqlType.INSERT)] = TimeFieldHandler()
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
