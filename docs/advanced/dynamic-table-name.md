# Dynamic Table Name

There are two ways to implement dynamic table names: global configuration and local configuration.

> If both global configuration and local configuration exist, the local configuration will override the global configuration.

## Global Configuration

Global configuration applies to all Mapper methods and can be configured as follows:

:::tabs key:kite

== Java

```java
TableConfig.setDynamicTableName(new DynamicTableProcessor() {

    @Override
    public @NonNull String process(@NonNull String tableName) {
        return tableName + "_" + new Random().nextInt(10);
    }

});
```

== Kotlin

```kotlin
TableConfig.dynamicTableName = object : DynamicTableProcessor {

    override fun process(tableName: String): String {
        return tableName + "_" + (0..9).random()
    }

}
```

:::

## Local Configuration

Local configuration applies to individual Mapper methods and can be configured through `@Table`:

:::tabs key:kite

== Java

```java
import com.tang.kite.config.table.DynamicTableProcessor;
import org.jspecify.annotations.NonNull;

import java.util.Random;

public class RandomDynamicTableProcessor implements DynamicTableProcessor {

    @Override
    public @NonNull String process(@NonNull String tableName) {
        return tableName + "_" + new Random().nextInt(10);
    }

}
```

```java
import com.tang.kite.annotation.Table;

@Table(dynamicTableName = RandomDynamicTableProcessor.class)
public class Account {}
```

== Kotlin

```kotlin
import com.tang.kite.config.table.DynamicTableProcessor

class RandomDynamicTableProcessor : DynamicTableProcessor {

    override fun process(tableName: String): String {
        return tableName + "_" + (0..9).random()
    }

}
```

```kotlin
import com.tang.kite.annotation.Table

@Table(dynamicTableName = RandomDynamicTableProcessor::class)
class Account {}
```

:::
