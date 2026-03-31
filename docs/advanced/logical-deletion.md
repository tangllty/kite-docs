# Logical Deletion

Logical deletion is a data processing method where data is not physically removed from the database when deleted, but marked as deleted. This approach preserves data integrity and traceability, while also allowing for data recovery when needed.

## Logical Deletion Configuration

Kite provides configuration options for logical deletion, which can be set in `LogicalDeletionConfig`.

:::tabs key:kite

== Java

```java
import com.tang.kite.config.logical.LogicalDeletionConfig;

// Enable logical deletion
LogicalDeletionConfig.enabled = true;

// Set logical deletion field name
LogicalDeletionConfig.fieldName = "deleted";

// Custom logical deletion processor
LogicalDeletionConfig.logicalDeletionProcessor = new CustomLogicalDeletionProcessor();
```

== Kotlin

```kotlin
import com.tang.kite.config.logical.LogicalDeletionConfig

// Enable logical deletion
LogicalDeletionConfig.enabled = true

// Set logical deletion field name
LogicalDeletionConfig.fieldName = "deleted"

// Custom logical deletion processor
LogicalDeletionConfig.logicalDeletionProcessor = CustomLogicalDeletionProcessor()
```

:::

## Logical Deletion Annotation

Kite provides the `@LogicalDeletion` annotation for specifying logical deletion fields in entity classes. This annotation takes precedence over the globally configured `fieldName`.

### Usage Example

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

## Logical Deletion Processor

### Method List

| Method Name                                   | Description                                                                                         | Return Value           |
| --------------------------------------------- | --------------------------------------------------------------------------------------------------- | ---------------------- |
| `isTableNeedProcessing(tableClass: Class<*>)` | Determines if a specific table class needs processing. Default returns true, processing all tables. | `Boolean`              |
| `process(field: Field)`                       | Processes the specified database field to generate logical deletion values.                         | `LogicalDeletionValue` |

### Default Implementation

Kite provides a default logical deletion processor `DefaultLogicalDeletionProcessor` that supports generating logical deletion values for multiple data types:

| Data Type | Normal Value | Deleted Value |
| --------- | ------------ | ------------- |
| `Boolean` | `false`      | `true`        |
| `Byte`    | `0`          | `1`           |
| `Short`   | `0`          | `1`           |
| `Int`     | `0`          | `1`           |
| `Long`    | `0L`         | `1L`          |
| `Char`    | `'0'`        | `'1'`         |
| `String`  | `"0"`        | `"1"`         |

### Custom Processor

You can implement the `LogicalDeletionProcessor` interface to create a custom logical deletion processor:

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

### Configure Custom Processor

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

## Logical Deletion Manager

Kite provides the `LogicalDeletionManager` class for skipping logical deletion or temporarily using logical deletion in specific scenarios.

### Method List

:::tabs key:kite

== Java

| Method Name                             | Description                                                                     | Parameters                                     | Return Value                           |
| --------------------------------------- | ------------------------------------------------------------------------------- | ---------------------------------------------- | -------------------------------------- |
| `withLogical(block: Runnable)`          | Temporarily uses logical deletion to execute a code block                       | `block: Runnable` The code block to execute    | None                                   |
| `withLogical<T>(block: Supplier<T>): T` | Temporarily uses logical deletion to execute a code block and return the result | `block: Supplier<T>` The code block to execute | `T` The return value of the code block |
| `withSkip(block: Runnable)`             | Skips logical deletion to execute a code block                                  | `block: Runnable` The code block to execute    | None                                   |
| `withSkip<T>(block: Supplier<T>): T`    | Skips logical deletion to execute a code block and return the result            | `block: Supplier<T>` The code block to execute | `T` The return value of the code block |

== Kotlin

| Method Name                         | Description                                                                     | Parameters                                    | Return Value                           |
| ----------------------------------- | ------------------------------------------------------------------------------- | --------------------------------------------- | -------------------------------------- |
| `withLogical(block: () -> Unit)`    | Temporarily uses logical deletion to execute a code block                       | `block: () -> Unit` The code block to execute | None                                   |
| `withLogical<T>(block: () -> T): T` | Temporarily uses logical deletion to execute a code block and return the result | `block: () -> T` The code block to execute    | `T` The return value of the code block |
| `withSkip(block: () -> Unit)`       | Skips logical deletion to execute a code block                                  | `block: () -> Unit` The code block to execute | None                                   |
| `withSkip<T>(block: () -> T): T`    | Skips logical deletion to execute a code block and return the result            | `block: () -> T` The code block to execute    | `T` The return value of the code block |

:::

### Usage Examples

#### Temporarily Using Logical Deletion

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

#### Skipping Logical Deletion

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
