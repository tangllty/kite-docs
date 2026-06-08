# 乐观锁

乐观锁通过版本号机制确保并发场景下的数据一致性。更新时，版本字段会自动递增并加入 WHERE 条件，如果数据已被其他事务修改，将抛出异常或返回 0 条受影响行。

## 全局配置

通过 `OptimisticLockConfig` 配置乐观锁行为：

| 配置项                       | 默认值       | 描述                |
|---------------------------|-----------|-------------------|
| `enabled`                 | `false`   | 是否启用乐观锁           |
| `fieldName`               | `version` | 版本字段名             |
| `initialVersion`          | `0L`      | 默认初始版本值           |
| `throwOnFailure`          | `true`    | 乐观锁失败时是否抛出异常      |
| `optimisticLockProcessor` | 默认实现      | 乐观锁处理器，可控制哪些表需要处理 |

**启用示例**

:::tabs key:kite

== Java

```java
import com.tang.kite.config.optimistic.OptimisticLockConfig;

OptimisticLockConfig.setEnabled(true);
```

== Kotlin

```kotlin
import com.tang.kite.config.optimistic.OptimisticLockConfig

OptimisticLockConfig.enabled = true
```

:::

## @Version 注解

使用 `@Version` 注解标记版本字段，优先级高于全局配置的 `fieldName`。

| 属性               | 类型        | 描述                     |
|------------------|-----------|------------------------|
| `initialValue`   | `Long`    | 初始版本值，默认 `0L`          |
| `throwOnFailure` | `Boolean` | 乐观锁失败时是否抛出异常，默认 `true` |

:::tabs key:kite

== Java

```java
import com.tang.kite.annotation.optimistic.Version;

public class Account {

    private Long id;
    private String name;
    @Version(initialValue = 0L)
    private Long version;

}
```

== Kotlin

```kotlin
import com.tang.kite.annotation.optimistic.Version

class Account {

    var id: Long? = null
    var name: String? = null
    @Version(initialValue = 0L)
    var version: Long? = null

}
```

:::

## 乐观锁处理器

实现 `OptimisticLockProcessor` 接口来自定义乐观锁处理器，控制哪些表需要乐观锁处理。

| 方法名                                 | 描述                          | 返回值       |
|-------------------------------------|-----------------------------|-----------|
| `processable(tableClass: Class<*>)` | 判断特定表实体类是否需要乐观锁处理，默认 `true` | `Boolean` |

**自定义处理器**

:::tabs key:kite

== Java

```java
import com.tang.kite.config.optimistic.OptimisticLockProcessor;

public class AccountOptimisticLockProcessor implements OptimisticLockProcessor {

    @Override
    public boolean processable(Class<?> tableClass) {
        return tableClass == Account.class;
    }

}
```

== Kotlin

```kotlin
import com.tang.kite.config.optimistic.OptimisticLockProcessor

object AccountOptimisticLockProcessor : OptimisticLockProcessor {

    override fun processable(tableClass: Class<*>): Boolean {
        return tableClass == Account::class.java
    }

}
```

:::

**配置自定义处理器**

:::tabs key:kite

== Java

```java
OptimisticLockConfig.setOptimisticLockProcessor(new AccountOptimisticLockProcessor());
```

== Kotlin

```kotlin
OptimisticLockConfig.optimisticLockProcessor = AccountOptimisticLockProcessor
```

:::

## 乐观锁管理器

`OptimisticLockManager` 用于在特定场景下临时启用或跳过乐观锁。

### 方法列表

:::tabs key:kite

== Java

| 方法名                                         | 描述                | 返回值         |
|---------------------------------------------|-------------------|-------------|
| `withOptimisticLock(block: Runnable)`       | 临时使用乐观锁执行代码块      | 无           |
| `withOptimisticLock(block: Supplier<T>): T` | 临时使用乐观锁执行代码块并返回结果 | `T` 代码块的返回值 |
| `withSkip(block: Runnable)`                 | 跳过乐观锁执行代码块        | 无           |
| `withSkip(block: Supplier<T>): T`           | 跳过乐观锁执行代码块并返回结果   | `T` 代码块的返回值 |

== Kotlin

| 方法名                                     | 描述                | 返回值         |
|-----------------------------------------|-------------------|-------------|
| `withOptimisticLock(block: () -> T): T` | 临时使用乐观锁执行代码块并返回结果 | `T` 代码块的返回值 |
| `withSkip(block: () -> T): T`           | 跳过乐观锁执行代码块并返回结果   | `T` 代码块的返回值 |

:::

### 使用示例

#### 临时使用乐观锁

:::tabs key:kite

== Java

```java
import com.tang.kite.optimistic.OptimisticLockManager;

OptimisticLockManager.withOptimisticLock(() -> {
    accountMapper.updateById(account);
});
```

== Kotlin

```kotlin
import com.tang.kite.optimistic.OptimisticLockManager

OptimisticLockManager.withOptimisticLock {
    accountMapper.updateById(account)
}
```

:::

#### 跳过乐观锁

:::tabs key:kite

== Java

```java
import com.tang.kite.optimistic.OptimisticLockManager;

OptimisticLockManager.withSkip(() -> {
    accountMapper.updateById(account);
});
```

== Kotlin

```kotlin
import com.tang.kite.optimistic.OptimisticLockManager

OptimisticLockManager.withSkip {
    accountMapper.updateById(account)
}
```

:::
