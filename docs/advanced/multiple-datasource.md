# Multiple Data Sources

Multiple data sources allow an application to use several databases simultaneously, switching between them via annotations or programmatically. This is suitable for scenarios such as read-write separation and multi-database sharding.

## Configuration

Kite reads the `kite.datasource` configuration first. If not configured, it falls back to `spring.datasource`.

### Single Data Source

If `kite.datasource` has no child data source configurations, the root configuration is used as an independent data source named `default`:

```yaml
kite:
  datasource:
    driver: org.h2.Driver
    url: jdbc:h2:mem:kite-h2;MODE=PostgreSQL
    username:
    password:
```

### Multiple Data Sources

The root configuration serves as the default configuration (shared properties). Child data source nodes (e.g. `ds1`, `ds2`) are individual data sources that automatically inherit shared properties from the root configuration:

```yaml
kite:
  datasource:
    driver: org.h2.Driver
    url: jdbc:h2:mem:kite-h2;MODE=PostgreSQL
    username:
    password:

    ds1:
      url: jdbc:h2:mem:kite-h2-ds1;MODE=PostgreSQL

    ds2:
      url: jdbc:h2:mem:kite-h2-ds2;MODE=PostgreSQL

    ds3:
      url: jdbc:h2:mem:kite-h2-ds3;MODE=PostgreSQL
```

> Properties like `driver`, `username`, and `password` in the root configuration can be inherited by child data sources. Child data sources only need to configure differentiating properties (such as `url`). If a child data source configures the same property, it overrides the root configuration.

## Dynamic Registration

`DataSourceRegistry` supports dynamically registering and removing data sources at runtime:

**Method List**

| Method                                                                                | Description                                           |
|---------------------------------------------------------------------------------------|-------------------------------------------------------|
| `register(dataSourceKey: String, dataSource: DataSource)`                             | Register via a `DataSource` object                    |
| `register(dataSourceKey: String, database: DatabaseValue)`                            | Register via a `DatabaseValue` object                 |
| `register(dataSourceKey: String, dataSource: DataSource, databaseType: DatabaseType)` | Register via a `DataSource` and `DatabaseType` object |
| `registerBatch(databaseMap: Map<String, DatabaseValue>)`                              | Batch register data sources                           |
| `unregister(dataSourceKey: String)`                                                   | Remove a data source                                  |
| `unregisterBatch(dataSourceKeys: List<String>)`                                       | Batch remove data sources                             |
| `get(dataSourceKey: String): DatabaseValue`                                           | Get the specified data source                         |
| `getKeys(): List<String>`                                                             | Get all registered data source keys                   |
| `clear()`                                                                             | Clear all data sources                                |

**Usage Example**

:::tabs key:kite

== Java

```java
import com.tang.kite.config.DataSourceConfig;
import com.tang.kite.datasource.DataSourceRegistry;
import com.tang.kite.sql.enumeration.DatabaseType;

DataSourceRegistry.register("ds4", dataSource, DatabaseType.H2);

// Allow overriding an existing data source
DataSourceConfig.override = true;
DataSourceRegistry.register("ds1", newDataSource, DatabaseType.POSTGRE_SQL);
```

== Kotlin

```kotlin
import com.tang.kite.config.DataSourceConfig
import com.tang.kite.datasource.DataSourceRegistry
import com.tang.kite.sql.enumeration.DatabaseType

DataSourceRegistry.register("ds4", dataSource, DatabaseType.H2)

// Allow overriding an existing data source
DataSourceConfig.override = true
DataSourceRegistry.register("ds1", newDataSource, DatabaseType.POSTGRE_SQL)
```

:::

## @DataSource Annotation

The `@DataSource` annotation can be applied to classes or methods to specify which data source to use for the current operation. Method-level annotations take precedence over class-level annotations.

:::tabs key:kite

== Java

```java
import com.tang.kite.annotation.datasource.DataSource;

@DataSource("ds1")
public class AccountMapper {

    @DataSource("ds2")
    public Account selectById(Long id) {
        // This method uses the ds2 data source
    }

    public List<Account> selectAll() {
        // This method uses the ds1 data source
    }

}
```

== Kotlin

```kotlin
import com.tang.kite.annotation.datasource.DataSource

@DataSource("ds1")
class AccountMapper {

    @DataSource("ds2")
    fun selectById(id: Long): Account? {
        // This method uses the ds2 data source
    }

    fun selectAll(): List<Account> {
        // This method uses the ds1 data source
    }

}
```

:::

## Programmatic Switching

`DataSourceContext` is implemented based on a `ThreadLocal` stack and supports nested switching. It is recommended to always use the `with` method, which automatically releases after execution without the need to manage the stack manually.

**Method List**

:::tabs key:kite

== Java

| Method                                          | Description                                                  |
| ----------------------------------------------- | ------------------------------------------------------------ |
| `with(key: String, runnable: Runnable)`         | Temporarily switch the data source and execute, no return value  |
| `with(key: String, supplier: Supplier<T>): T`   | Temporarily switch the data source and execute, with return value |

== Kotlin

| Method                                     | Description                                                  |
| ------------------------------------------ | ------------------------------------------------------------ |
| `with(key: String, block: () -> T): T`     | Temporarily switch the data source and execute, with return value |

:::

**Usage Example**

:::tabs key:kite

== Java

```java
import com.tang.kite.datasource.DataSourceContext;

DataSourceContext.with("ds2", () -> {
    return accountMapper.selectById(2L);
});
```

== Kotlin

```kotlin
import com.tang.kite.datasource.DataSourceContext

DataSourceContext.with("ds2") {
    accountMapper.selectById(2L)
}
```

:::

### withDataSource Inline Function

Kotlin additionally provides the `withDataSource` inline function, which has the same usage as `DataSourceContext.with`.

| Method                                          | Description                                                              |
| ----------------------------------------------- | ------------------------------------------------------------------------ |
| `withDataSource(key: String, block: () -> T)`   | Temporarily switch the data source and execute the code block, returning the result |

```kotlin
import com.tang.kite.datasource.withDataSource

withDataSource("ds1") {
    accountMapper.selectById(1L)
}
```
