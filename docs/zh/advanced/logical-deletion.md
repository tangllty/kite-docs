# 逻辑删除

逻辑删除是一种数据处理方式，指在删除数据时，并非真正从数据库中物理删除记录，而是通过标记的方式表示该记录已被删除。这样做的好处是可以保留数据的完整性和可追溯性，同时也便于在需要时恢复被删除的数据。

## 逻辑删除配置

Kite 提供了逻辑删除的配置选项，你可以在 `LogicalDeletionConfig` 中进行配置。

:::tabs key:kite

== Java

```java
import com.tang.kite.config.logical.LogicalDeletionConfig;

// 启用逻辑删除
LogicalDeletionConfig.enabled = true;

// 设置逻辑删除字段名
LogicalDeletionConfig.fieldName = "deleted";

// 自定义逻辑删除处理器
LogicalDeletionConfig.logicalDeletionProcessor = new CustomLogicalDeletionProcessor();
```

== Kotlin

```kotlin
import com.tang.kite.config.logical.LogicalDeletionConfig

// 启用逻辑删除
LogicalDeletionConfig.enabled = true

// 设置逻辑删除字段名
LogicalDeletionConfig.fieldName = "deleted"

// 自定义逻辑删除处理器
LogicalDeletionConfig.logicalDeletionProcessor = CustomLogicalDeletionProcessor()
```

:::

## 逻辑删除注解

Kite 提供了 `@LogicalDeletion` 注解，用于在实体类中指定逻辑删除字段。该注解的优先级大于全局配置的 `fieldName`。

### 使用示例

:::tabs key:kite

== Java

```java
import com.tang.kite.annotation.logical.LogicalDeletion;

public class Account {

    private Long id;
    private String name;
    @LogicalDeletion
    private String deleted;

}
```

== Kotlin

```kotlin
import com.tang.kite.annotation.logical.LogicalDeletion

class Account {

    var id: Long? = null
    var name: String? = null
    @LogicalDeletion
    var deleted: String? = null

}
```

:::

## 逻辑删除处理器

### 方法列表

| 方法名                                        | 描述                                                  | 返回值                 |
| --------------------------------------------- | ----------------------------------------------------- | ---------------------- |
| `isTableNeedProcessing(tableClass: Class<*>)` | 判断特定表类是否需要处理。默认返回 true，处理所有表。 | `Boolean`              |
| `process(field: Field)`                       | 处理指定的数据库字段以生成逻辑删除值。                | `LogicalDeletionValue` |

### 默认实现

Kite 提供了一个默认的逻辑删除处理器 `DefaultLogicalDeletionProcessor`，它支持多种数据类型的逻辑删除值生成：

| 数据类型  | 正常值  | 删除值 |
| --------- | ------- | ------ |
| `Boolean` | `false` | `true` |
| `Byte`    | `0`     | `1`    |
| `Short`   | `0`     | `1`    |
| `Int`     | `0`     | `1`    |
| `Long`    | `0L`    | `1L`   |
| `Char`    | `'0'`   | `'1'`  |
| `String`  | `"0"`   | `"1"`  |

### 自定义处理器

你可以实现 `LogicalDeletionProcessor` 接口来自定义逻辑删除处理器：

:::tabs key:kite

== Java

```java
import com.tang.kite.config.logical.LogicalDeletionProcessor;
import com.tang.kite.config.logical.LogicalDeletionValue;
import java.lang.reflect.Field;

public class CustomLogicalDeletionProcessor implements LogicalDeletionProcessor {

    @Override
    public boolean isTableNeedProcessing(Class<?> tableClass) {
        return tableClass == Account.class;
    }

    @Override
    public LogicalDeletionValue process(Field field) {
        return new LogicalDeletionValue("N", "Y");
    }

}
```

== Kotlin

```kotlin
import com.tang.kite.config.logical.LogicalDeletionProcessor
import com.tang.kite.config.logical.LogicalDeletionValue
import java.lang.reflect.Field

class CustomLogicalDeletionProcessor : LogicalDeletionProcessor {

    override fun isTableNeedProcessing(tableClass: Class<*>): Boolean {
        return tableClass == Account::class.java

    }

    override fun process(field: Field): LogicalDeletionValue {
        return LogicalDeletionValue("N", "Y")
    }

}
```

:::

### 配置自定义处理器

:::tabs key:kite

== Java

```java
LogicalDeletionConfig.logicalDeletionProcessor = CustomLogicalDeletionProcessor();
```

== Kotlin

```kotlin
LogicalDeletionConfig.logicalDeletionProcessor = CustomLogicalDeletionProcessor()
```

:::

## 逻辑删除管理器

Kite 提供了 `LogicalDeletionManager` 类，用于在特定场景下跳过逻辑删除或者临时使用逻辑删除。

### 方法列表

:::tabs key:kite

== Java

| 方法名                                  | 描述                                 | 参数                                | 返回值             |
| --------------------------------------- | ------------------------------------ | ----------------------------------- | ------------------ |
| `withLogical(block: Runnable)`          | 临时使用逻辑删除执行代码块           | `block: Runnable` 要执行的代码块    | 无                 |
| `withLogical<T>(block: Supplier<T>): T` | 临时使用逻辑删除执行代码块并返回结果 | `block: Supplier<T>` 要执行的代码块 | `T` 代码块的返回值 |
| `withSkip(block: Runnable)`             | 跳过逻辑删除执行代码块               | `block: Runnable` 要执行的代码块    | 无                 |
| `withSkip<T>(block: Supplier<T>): T`    | 跳过逻辑删除执行代码块并返回结果     | `block: Supplier<T>` 要执行的代码块 | `T` 代码块的返回值 |

== Kotlin

| 方法名                              | 描述                                 | 参数                               | 返回值             |
| ----------------------------------- | ------------------------------------ | ---------------------------------- | ------------------ |
| `withLogical(block: () -> Unit)`    | 临时使用逻辑删除执行代码块           | `block: () -> Unit` 要执行的代码块 | 无                 |
| `withLogical<T>(block: () -> T): T` | 临时使用逻辑删除执行代码块并返回结果 | `block: () -> T` 要执行的代码块    | `T` 代码块的返回值 |
| `withSkip(block: () -> Unit)`       | 跳过逻辑删除执行代码块               | `block: () -> Unit` 要执行的代码块 | 无                 |
| `withSkip<T>(block: () -> T): T`    | 跳过逻辑删除执行代码块并返回结果     | `block: () -> T` 要执行的代码块    | `T` 代码块的返回值 |

:::

### 使用示例

#### 临时使用逻辑删除

:::tabs key:kite

== Java

```java
import com.tang.kite.logical.LogicalDeletionManager;

LogicalDeletionManager.withLogical(() -> {
    accountMapper.deleteById(1L);
});
```

== Kotlin

```kotlin
import com.tang.kite.logical.LogicalDeletionManager

LogicalDeletionManager.withLogical {
    accountMapper.deleteById(1L)
}
```

:::

#### 跳过逻辑删除

:::tabs key:kite

== Java

```java
import com.tang.kite.logical.LogicalDeletionManager;

LogicalDeletionManager.withSkip(() -> {
    accountMapper.deleteById(1L);
});
```

== Kotlin

```kotlin
import com.tang.kite.logical.LogicalDeletionManager

LogicalDeletionManager.withSkip {
    accountMapper.deleteById(1L)
}
```

:::
