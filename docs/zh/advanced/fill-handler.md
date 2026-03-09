# 填充处理器

填充处理器功能允许你在增删改查时，自动设置某些字段的值，而无需手动指定。

## 官方实现

Kite 提供了一个时间填充处理器 `TimeFillHandler`，它可以使用 `@CreateTime` 和 `@UpdateTime` 注解自动设置创建时间和更新时间字段的值。

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

## 定义填充处理器

可以根据注解和字段类型来返回不同的值。

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

## 注册填充处理器

你可以在 `KiteConfig` 中注册填充处理器。

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

