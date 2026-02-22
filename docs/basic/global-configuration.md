# Global Configuration

The Kite ORM framework provides flexible global configuration options that allow developers to customize the framework's behavior according to their needs. These configurations are mainly concentrated in three core configuration classes under the `com.tang.kite.config` package: `KiteConfig`, `PageConfig`, and `SqlConfig`.

## KiteConfig

`KiteConfig` is the core configuration class of the Kite framework, containing the main configuration options for the framework.

### Configuration Items

| Configuration Item  | Type                                   | Default Value                                                | Description                                                                                           |
| ------------------- | -------------------------------------- | ------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------- |
| `banner`            | `Boolean`                              | `true`                                                       | Whether to display the Kite framework banner during application startup                               |
| `selectiveStrategy` | `Function1<Any?, Boolean>`             | `DefaultSelectiveStrategy.isSelective(it)`                   | Selective query strategy, used to determine which fields should be included in SQL queries            |
| `batchSize`         | `Int`                                  | `1000`                                                       | Batch size for operations like inserts or updates                                                     |
| `dialects`          | `MutableMap<DatabaseType, SqlDialect>` | `DefaultSqlDialectFactory().getDialects()`                   | SQL dialect mappings for different database types                                                     |
| `fillHandlers`      | `MutableMap<FillKey, FillHandler>`     | Contains `TimeFillHandler` for `CreateTime` and `UpdateTime` | Mapping of fill annotation handlers, used to process annotations like `@CreateTime` and `@UpdateTime` |
| `page`              | `PageConfig`                           | `PageConfig` object                                          | Pagination-related configurations, references `PageConfig` object                                     |
| `sql`               | `SqlConfig`                            | `SqlConfig` object                                           | SQL-related configurations, references `SqlConfig` object                                             |

### Usage Examples

:::tabs key:kite
== Java

```java
// Modify batch operation size
KiteConfig.setBatchSize(500);

// Disable startup banner
KiteConfig.setBanner(false);

// Custom method filtering strategy
KiteConfig.setSelectiveStrategy(it -> it != null);
```

== Kotlin

```kotlin
// Modify batch operation size
KiteConfig.batchSize = 500

// Disable startup banner
KiteConfig.banner = false

// Custom method filtering strategy
KiteConfig.selectiveStrategy = { it != null }
```

:::

## PageConfig

`PageConfig` is used to configure default parameters related to pagination.

### Configuration Items

| Configuration Item    | Type     | Default Value | Description                                                           |
| --------------------- | -------- | ------------- | --------------------------------------------------------------------- |
| `pageNumber`          | `Long`   | `1`           | Default page number                                                   |
| `pageSize`            | `Long`   | `10`          | Default number of records per page                                    |
| `pageNumberParameter` | `String` | `pageNumber`  | Page number parameter name, used to get the page number from requests |
| `pageSizeParameter`   | `String` | `pageSize`    | Page size parameter name, used to get the page size from requests     |

### Usage Examples

:::tabs key:kite
== Java

```java
// Modify default page number to 1
PageConfig.setPageNumber(1);

// Modify default page size to 20
PageConfig.setPageSize(20);

// Modify page number parameter name to "page"
PageConfig.setPageNumberParameter("page");

// Modify page size parameter name to "size"
PageConfig.setPageSizeParameter("size");
```

== Kotlin

```kotlin
// Modify default page number to 1
PageConfig.pageNumber = 1

// Modify default page size to 20
PageConfig.pageSize = 20

// Modify page number parameter name to "page"
PageConfig.pageNumberParameter = "page"

// Modify page size parameter name to "size"
PageConfig.pageSizeParameter = "size"
```

:::

## SqlConfig

`SqlConfig` is used to configure SQL-related parameters and behaviors.

### Configuration Items

| Configuration Item   | Type           | Default Value               | Description                                     |
| -------------------- | -------------- | --------------------------- | ----------------------------------------------- |
| `sqlLowercase`       | `Boolean`      | `true`                      | Whether to use lowercase for generated SQL      |
| `sqlLogging`         | `Boolean`      | `true`                      | Whether to log generated SQL statements         |
| `sqlDurationLogging` | `Boolean`      | `true`                      | Whether to log SQL execution time               |
| `durationUnit`       | `DurationUnit` | `DurationUnit.MILLISECONDS` | Unit of SQL execution time                      |
| `durationDecimals`   | `Int`          | `0`                         | Number of decimal places for SQL execution time |

### Method Descriptions

| Method Name                  | Parameters                | Return Value | Description                                                  |
| ---------------------------- | ------------------------- | ------------ | ------------------------------------------------------------ |
| `getSql(sql: StringBuilder)` | `sql`: SQL string builder | `String`     | Formats SQL string according to `sqlLowercase` configuration |
| `getSql(sql: String)`        | `sql`: SQL string         | `String`     | Formats SQL string according to `sqlLowercase` configuration |

### Usage Examples

:::tabs key:kite
== Java

```java
// Disable SQL logging
SqlConfig.setSqlLogging(false);

// Set SQL execution time unit to seconds
SqlConfig.setDurationUnit(DurationUnit.SECONDS);

// Set SQL execution time decimal places to 2
SqlConfig.setDurationDecimals(2);

// Generate uppercase SQL
SqlConfig.setSqlLowercase(false);
```

== Kotlin

```kotlin
// Disable SQL logging
SqlConfig.sqlLogging = false

// Set SQL execution time unit to seconds
SqlConfig.durationUnit = DurationUnit.SECONDS

// Set SQL execution time decimal places to 2
SqlConfig.durationDecimals = 2

// Generate uppercase SQL
SqlConfig.sqlLowercase = false
```

:::
