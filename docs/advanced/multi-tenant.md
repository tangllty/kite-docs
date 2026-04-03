# Multi-Tenant

Multi-tenancy is a software architecture pattern that allows multiple tenants (users or organizations) to share the same application instance and database while ensuring that data between tenants is isolated from each other. In SaaS (Software as a Service) scenarios, multi-tenancy is a core technology that enables multiple customers to share a single set of system resources, reducing costs and facilitating unified maintenance and management.

## Multi-Tenant Configuration

:::tabs key:kite

== Java

```java
import com.tang.kite.config.tenant.TenantConfig;

// Enable tenant functionality
TenantConfig.setEnabled(true);

// Set tenant ID field name
TenantConfig.setFieldName("tenantId");

// Custom tenant processor
TenantConfig.setTenantProcessor(new CustomTenantProcessor());
```

== Kotlin

```kotlin
import com.tang.kite.config.tenant.TenantConfig

// Enable tenant functionality
TenantConfig.enabled = true

// Set tenant ID field name
TenantConfig.fieldName = "tenantId"

// Custom tenant processor
TenantConfig.tenantProcessor = CustomTenantProcessor()
```

:::

## Multi-Tenant Annotation

Kite provides the @TenantId annotation, which is used to specify the tenant ID in entity classes. This annotation has higher priority than the globally configured fieldName.

### Usage Example

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

## Multi-Tenant Processor

### Method List

| Method Name                                   | Description                                                                                                                 | Return Value |
| --------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | ------------ |
| `isTableNeedProcessing(tableClass: Class<*>)` | Determines whether a specific table entity class requires multi-tenant processing. Defaults to true, processing all tables. | `Boolean`    |
| `getTenantIds(field: Field)`                  | Gets the current context tenant ID list: create/update/delete uses the first ID, query uses all IDs                         | `List<Any>`  |
| `getFirstTenantId(field: Field)`              | Gets the first tenant ID in the current context, returns null if not found.                                                 | `Any?`       |

### Custom Processor

You can implement the `TenantProcessor` interface to create a custom tenant processor:

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

### Configure Custom Processor

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

## Multi-Tenant Manager

Kite provides the `TenantManager` class, which is used to skip multi-tenancy or temporarily use multi-tenancy in specific scenarios.

### Method List

:::tabs key:kite

== Java

| Method Name                            | Description                                                           | Parameter                                  | Return Value                   |
| -------------------------------------- | --------------------------------------------------------------------- | ------------------------------------------ | ------------------------------ |
| `withTenant(block: Runnable)`          | Temporarily use multi-tenancy to execute code block                   | `block: Runnable` code block to execute    | None                           |
| `withTenant<T>(block: Supplier<T>): T` | Temporarily use multi-tenancy to execute code block and return result | `block: Supplier<T>` code block to execute | `T` return value of code block |
| `withSkip(block: Runnable)`            | Skip multi-tenancy to execute code block                              | `block: Runnable` code block to execute    | None                           |
| `withSkip<T>(block: Supplier<T>): T`   | Skip multi-tenancy to execute code block and return result            | `block: Supplier<T>` code block to execute | `T` return value of code block |

== Kotlin

| Method Name                        | Description                                                           | Parameter                                 | Return Value                   |
| ---------------------------------- | --------------------------------------------------------------------- | ----------------------------------------- | ------------------------------ |
| `withTenant(block: () -> Unit)`    | Temporarily use multi-tenancy to execute code block                   | `block: () -> Unit` code block to execute | None                           |
| `withTenant<T>(block: () -> T): T` | Temporarily use multi-tenancy to execute code block and return result | `block: () -> T` code block to execute    | `T` return value of code block |
| `withSkip(block: () -> Unit)`      | Skip multi-tenancy to execute code block                              | `block: () -> Unit` code block to execute | None                           |
| `withSkip<T>(block: () -> T): T`   | Skip multi-tenancy to execute code block and return result            | `block: () -> T` code block to execute    | `T` return value of code block |

:::

### Usage Example

#### Temporarily Use Multi-Tenancy

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

#### Skip Multi-Tenancy

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
