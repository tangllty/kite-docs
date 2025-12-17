# Table Annotation

The `@Table` annotation is used to mark a class as an entity and specify the corresponding database table information.

> If the `@Table` annotation is not specified, Kite ORM will convert the class name to snake_case as the table name.

## Parameters

| Parameter | Type   | Default Value | Description                                                     |
| --------- | ------ | ------------- | --------------------------------------------------------------- |
| `value`   | String | (required)    | The name of the database table                                  |
| `alias`   | String | ""            | An optional alias for the table, used in SQL queries with joins |

## Usage Example

:::tabs key:kite
== Java

```java
import com.tang.kite.annotation.Table;

@Table(value = "account", alias = "a")
public class Account {}
```

== Kotlin

```kotlin
import com.tang.kite.annotation.Table

@Table(value = "account", alias = "a")
class Account {}
```

:::
