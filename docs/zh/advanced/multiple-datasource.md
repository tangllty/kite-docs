# 多数据源

多数据源支持在一个应用中使用多个数据库，通过注解或编程方式动态切换数据源，适用于读写分离、多库分库等场景。

## 配置

Kite 优先读取 `kite.datasource` 配置，如果未配置则使用 `spring.datasource`。

### 单数据源

如果 `kite.datasource` 下没有子数据源配置，根配置将作为一个名称为 `default` 的独立数据源使用：

```yaml
kite:
  datasource:
    driver: org.h2.Driver
    url: jdbc:h2:mem:kite-h2;MODE=PostgreSQL
    username:
    password:
```

### 多数据源

根配置作为默认配置（公共配置），子数据源节点（如 `ds1`、`ds2`）为独立数据源，会自动继承根配置的公共属性：

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

> 根配置中的 `driver`、`username`、`password` 等可以被子数据源继承，子数据源只需配置差异化属性（如 `url`）。如果子数据源也配置了相同属性，会覆盖根配置。

## 动态注册

`DataSourceRegistry` 支持在运行时动态注册和移除数据源：

**方法列表**

| 方法名                                                                                   | 描述                                    |
|---------------------------------------------------------------------------------------|---------------------------------------|
| `register(dataSourceKey: String, dataSource: DataSource)`                             | 通过 `DataSource` 对象注册                  |
| `register(dataSourceKey: String, database: DatabaseValue)`                            | 通过 `DatabaseValue` 对象注册               |
| `register(dataSourceKey: String, dataSource: DataSource, databaseType: DatabaseType)` | 通过 `DataSource` 和 `DatabaseType` 对象注册 |
| `registerBatch(databaseMap: Map<String, DatabaseValue>)`                              | 批量注册数据源                               |
| `unregister(dataSourceKey: String)`                                                   | 移除一个数据源                               |
| `unregisterBatch(dataSourceKeys: List<String>)`                                       | 批量移除数据源                               |
| `get(dataSourceKey: String): DatabaseValue`                                           | 获取指定数据源                               |
| `getKeys(): List<String>`                                                             | 获取所有已注册的数据源键名                         |
| `clear()`                                                                             | 清空所有数据源                               |

**使用示例**

:::tabs key:kite

== Java

```java
import com.tang.kite.config.DataSourceConfig;
import com.tang.kite.datasource.DataSourceRegistry;
import com.tang.kite.sql.enumeration.DatabaseType;

DataSourceRegistry.register("ds4", dataSource, DatabaseType.H2);

// 支持覆盖已有数据源
DataSourceConfig.override = true;
DataSourceRegistry.register("ds1", newDataSource, DatabaseType.POSTGRE_SQL);
```

== Kotlin

```kotlin
import com.tang.kite.config.DataSourceConfig
import com.tang.kite.datasource.DataSourceRegistry
import com.tang.kite.sql.enumeration.DatabaseType

DataSourceRegistry.register("ds4", dataSource, DatabaseType.H2)

// 支持覆盖已有数据源
DataSourceConfig.override = true
DataSourceRegistry.register("ds1", newDataSource, DatabaseType.POSTGRE_SQL)
```

:::

## @DataSource 注解

`@DataSource` 注解可用于类或方法，指定当前操作使用哪个数据源。方法级别的注解优先级高于类级别。

:::tabs key:kite

== Java

```java
import com.tang.kite.annotation.datasource.DataSource;

@DataSource("ds1")
public class AccountMapper {

  @DataSource("ds2")
  public Account selectById(Long id) {
    // 该方法使用 ds2 数据源
  }

  public List<Account> selectAll() {
    // 该方法使用 ds1 数据源
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
    // 该方法使用 ds2 数据源
  }

  fun selectAll(): List<Account> {
    // 该方法使用 ds1 数据源
  }

}
```

:::

## 编程式切换

`DataSourceContext` 基于 `ThreadLocal` 栈实现，支持嵌套切换。推荐始终使用 `DataSourceManager.with` 方法，执行完毕后自动释放，无需手动管理栈。

**方法列表**

:::tabs key:kite

== Java

| 方法名                                           | 描述                 |
|-----------------------------------------------|--------------------|
| `with(key: String, runnable: Runnable)`       | 临时切换数据源并执行代码块，无返回值 |
| `with(key: String, supplier: Supplier<T>): T` | 临时切换数据源并执行代码块，有返回值 |

== Kotlin

| 方法名                                    | 描述                 |
|----------------------------------------|--------------------|
| `with(key: String, block: () -> T): T` | 临时切换数据源并执行代码块，有返回值 |

:::

**使用示例**

:::tabs key:kite

== Java

```java
import com.tang.kite.datasource.DataSourceManager;

DataSourceManager.with("ds2", () -> {
  return accountMapper.selectById(2L);
});
```

== Kotlin

```kotlin
import com.tang.kite.datasource.DataSourceManager

DataSourceManager.with("ds2") {
  accountMapper.selectById(2L)
}
```

:::

### withDataSource 内联函数

Kotlin 额外提供了 `withDataSource` 内联函数，与 `DataSourceManager.with` 用法相同。

| 方法名                                           | 描述                    |
|-----------------------------------------------|-----------------------|
| `withDataSource(key: String, block: () -> T)` | 临时切换数据源并执行代码块，返回代码块结果 |

```kotlin
import com.tang.kite.datasource.withDataSource

withDataSource("ds1") {
  accountMapper.selectById(1L)
}
```
