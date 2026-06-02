# 字段处理器

字段处理器功能允许你在增删改查时，自动设置某些字段的值，而无需手动指定。

## 官方实现

Kite 提供了一个时间字段处理器 `TimeFieldHandler`，它可以使用 `@CreateTime` 和 `@UpdateTime` 注解自动设置创建时间和更新时间字段的值。

## 定义注解

注解只能生效在字段上。

> 你可以添加属性来实现更复杂的功能。

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

## 定义字段处理器

可以根据注解和字段类型来返回不同的值。

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

object TimeFieldHandler : FieldHandler {

    override fun handleValue(annotation: Annotation, field: Field, entity: Any): Any? {
        return LocalDateTime.now()
    }

}
```

:::

## 注册字段处理器

你可以在 `KiteConfig` 中注册字段处理器。

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

KiteConfig.fieldHandlers[FieldMetaKey(CreateTime::class, SqlType.INSERT)] = TimeFieldHandler
```

:::

## 使用示例

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
