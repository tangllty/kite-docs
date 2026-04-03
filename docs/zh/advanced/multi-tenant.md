# 多租户

多租户（Multi-tenancy）是一种软件架构模式，允许多个租户（用户或组织）共享同一个应用实例和数据库，同时确保各租户之间的数据相互隔离。在 SaaS（软件即服务）场景中，多租户是核心技术，它能让多个客户共享一套系统资源，既降低了成本，又便于统一维护和管理。

## 多租户配置

:::tabs key:kite

== Java

```java
import com.tang.kite.config.tenant.TenantConfig;

// 启用租户功能
TenantConfig.setEnabled(true);

// 设置租户 ID 字段名
TenantConfig.setFieldName("tenantId");

// 自定义租户处理器
TenantConfig.setTenantProcessor(new CustomTenantProcessor());
```

== Kotlin

```kotlin
import com.tang.kite.config.tenant.TenantConfig

// 启用租户功能
TenantConfig.enabled = true

// 设置租户 ID 字段名
TenantConfig.fieldName = "tenantId"

// 自定义租户处理器
TenantConfig.tenantProcessor = CustomTenantProcessor()
```

:::

## 多租户注解

Kite 提供了 @TenantId 注解，用于在实体类中指定租户 ID。该注解的优先级大于全局配置的 fieldName。

### 使用示例

:::tabs key:kite

== Java

```java
import com.tang.kite.annotation.tenant.TenantId;

public class Account {

    private Long id;
    private String name;
    @TenantId
    private Long tenantId;

}
```

== Kotlin

```kotlin
import com.tang.kite.annotation.tenant.TenantId

class Account {

    var id: Long? = null
    var name: String? = null
    @TenantId
    var tenantId: Long? = null

}
```

:::

## 多租户处理器

### 方法列表

| 方法名                                        | 描述                                                                         | 返回值      |
| --------------------------------------------- | ---------------------------------------------------------------------------- | ----------- |
| `isTableNeedProcessing(tableClass: Class<*>)` | 判断特定表实体类是否需要多租户处理。默认返回 true，处理所有表。              | `Boolean`   |
| `getTenantIds(field: Field)`                  | 获取当前上下文租户 ID 列表：新增 / 修改 / 删除使用第一个 ID，查询使用全部 ID | `List<Any>` |
| `getFirstTenantId(field: Field)`              | 获取当前上下文中的第一个租户 ID，如果未找到则返回 null。                     | `Any?`      |

### 自定义处理器

你可以实现 `TenantProcessor` 接口来自定义租户处理器：

:::tabs key:kite

== Java

```java
import com.tang.kite.config.tenant.TenantProcessor;
import org.jspecify.annotations.NonNull;

import java.lang.reflect.Field;
import java.util.List;

public class CustomTenantProcessor implements TenantProcessor {

    @Override
    public boolean isTableNeedProcessing(@NonNull Class<?> tableClass) {
        return tableClass == Account.class;
    }

    @Override
    public @NonNull List<Object> getTenantIds(@NonNull Field field) {
        return List.of(1, 2);
    }

}
```

== Kotlin

```kotlin
import com.tang.kite.config.tenant.TenantProcessor
import java.lang.reflect.Field

class CustomTenantProcessor : TenantProcessor {

    override fun isTableNeedProcessing(tableClass: Class<*>): Boolean {
        return tableClass == Account::class.java

    }

    override fun getTenantIds(field: Field): List<Any> {
        return listOf(1, 2)
    }

}
```

:::

### 配置自定义处理器

:::tabs key:kite

== Java

```java
TenantConfig.tenantProcessor = CustomTenantProcessor();
```

== Kotlin

```kotlin
TenantConfig.tenantProcessor = CustomTenantProcessor()
```

:::

## 多租户管理器

Kite 提供了 `TenantManager` 类，用于在特定场景下跳过多租户或者临时使用多租户。

### 方法列表

:::tabs key:kite

== Java

| 方法名                                 | 描述                               | 参数                                | 返回值             |
| -------------------------------------- | ---------------------------------- | ----------------------------------- | ------------------ |
| `withTenant(block: Runnable)`          | 临时使用多租户执行代码块           | `block: Runnable` 要执行的代码块    | 无                 |
| `withTenant<T>(block: Supplier<T>): T` | 临时使用多租户执行代码块并返回结果 | `block: Supplier<T>` 要执行的代码块 | `T` 代码块的返回值 |
| `withSkip(block: Runnable)`            | 跳过多租户执行代码块               | `block: Runnable` 要执行的代码块    | 无                 |
| `withSkip<T>(block: Supplier<T>): T`   | 跳过多租户执行代码块并返回结果     | `block: Supplier<T>` 要执行的代码块 | `T` 代码块的返回值 |

== Kotlin

| 方法名                             | 描述                           | 参数                               | 返回值             |
| ---------------------------------- | ------------------------------ | ---------------------------------- | ------------------ |
| `withTenant(block: () -> Unit)`    | 跳过多租户执行代码块           | `block: () -> Unit` 要执行的代码块 | 无                 |
| `withTenant<T>(block: () -> T): T` | 跳过多租户执行代码块并返回结果 | `block: () -> T` 要执行的代码块    | `T` 代码块的返回值 |
| `withSkip(block: () -> Unit)`      | 跳过多租户执行代码块           | `block: () -> Unit` 要执行的代码块 | 无                 |
| `withSkip<T>(block: () -> T): T`   | 跳过多租户执行代码块并返回结果 | `block: () -> T` 要执行的代码块    | `T` 代码块的返回值 |

:::

### 使用示例

#### 临时使用多租户

:::tabs key:kite

== Java

```java
import com.tang.kite.tenant.TenantManager;

TenantManager.withTenant(() -> {
    accountMapper.deleteById(1L);
});
```

== Kotlin

```kotlin
import com.tang.kite.tenant.TenantManager

TenantManager.withTenant {
    accountMapper.deleteById(1L)
}
```

:::

#### 跳过多租户

:::tabs key:kite

== Java

```java
import com.tang.kite.tenant.TenantManager;

TenantManager.withSkip(() -> {
    accountMapper.deleteById(1L);
});
```

== Kotlin

```kotlin
import com.tang.kite.tenant.TenantManager

TenantManager.withSkip {
    accountMapper.deleteById(1L)
}
```

:::
