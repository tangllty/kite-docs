# 动态表名

有两种方式实现动态表名：全局配置和局部配置。

> 如果全局配置和局部配置同时存在，局部配置会覆盖全局配置。

## 全局配置

全局配置用于所有的 Mapper 方法，可以通过以下方式进行配置

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

## 局部配置

局部配置用于单个 Mapper 方法，可以通过 `@Table` 进行配置

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
