# Optimistic Lock

Optimistic locking ensures data consistency in concurrent scenarios through a version number mechanism. When updating, the version field is automatically incremented and added to the WHERE clause. If the data has been modified by another transaction, an exception is thrown or 0 affected rows are returned.

## Global Configuration

Configure optimistic lock behavior via `OptimisticLockConfig`:

| Option                    | Default   | Description                                                       |
|---------------------------|-----------|-------------------------------------------------------------------|
| `enabled`                 | `false`   | Whether to enable optimistic locking                              |
| `fieldName`               | `version` | Version field name                                                |
| `initialVersion`          | `0L`      | Default initial version value                                     |
| `throwOnFailure`          | `true`    | Whether to throw an exception on optimistic lock failure          |
| `optimisticLockProcessor` | Default   | Optimistic lock processor to control which tables need processing |

**Enabling Example**

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

## @Version Annotation

Use the `@Version` annotation to mark the version field, which takes precedence over `fieldName` in global configuration.

| Attribute        | Type      | Description                                                              |
|------------------|-----------|--------------------------------------------------------------------------|
| `initialValue`   | `Long`    | Initial version value, default `0L`                                      |
| `throwOnFailure` | `Boolean` | Whether to throw an exception on optimistic lock failure, default `true` |

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

## Optimistic Lock Processor

Implement the `OptimisticLockProcessor` interface to customize the optimistic lock processor and control which tables need optimistic lock processing.

| Method                              | Description                                                                                       | Return Type |
|-------------------------------------|---------------------------------------------------------------------------------------------------|-------------|
| `processable(tableClass: Class<*>)` | Determines whether a specific table entity class needs optimistic lock processing, default `true` | `Boolean`   |

**Custom Processor**

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

**Configuring Custom Processor**

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

## Optimistic Lock Manager

`OptimisticLockManager` is used to temporarily enable or skip optimistic locking in specific scenarios.

### Method List

:::tabs key:kite

== Java

| Method                                      | Description                                                                     | Return Value                           |
|---------------------------------------------|---------------------------------------------------------------------------------|----------------------------------------|
| `withOptimisticLock(block: Runnable)`       | Temporarily use optimistic lock to execute the code block                       | None                                   |
| `withOptimisticLock(block: Supplier<T>): T` | Temporarily use optimistic lock to execute the code block and return the result | `T` the return value of the code block |
| `withSkip(block: Runnable)`                 | Skip optimistic lock and execute the code block                                 | None                                   |
| `withSkip(block: Supplier<T>): T`           | Skip optimistic lock and execute the code block, returning the result           | `T` the return value of the code block |

== Kotlin

| Method                                  | Description                                                                     | Return Value                           |
|-----------------------------------------|---------------------------------------------------------------------------------|----------------------------------------|
| `withOptimisticLock(block: () -> T): T` | Temporarily use optimistic lock to execute the code block and return the result | `T` the return value of the code block |
| `withSkip(block: () -> T): T`           | Skip optimistic lock and execute the code block, returning the result           | `T` the return value of the code block |

:::

### Usage Example

#### Temporarily Use Optimistic Lock

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

#### Skip Optimistic Lock

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
