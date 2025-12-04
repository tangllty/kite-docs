# 注解

本节描述了 Kite ORM 框架中用于实体映射和配置的关键注解。

## Table 注解

`@Table` 注解用于将类标记为实体并指定对应的数据库表信息。

> 如果未指定 `@Table` 注解，Kite ORM 将使用类名转换为下划线命名作为表名。

### 参数说明

| 参数名  | 类型   | 默认值 | 说明                        |
| ------- | ------ | ------ | --------------------------- |
| `value` | String | (必填) | 数据库表名                  |
| `alias` | String | ""     | 表的别名，用于 SQL 联表查询 |

### 使用示例

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

## Id 注解

`@Id` 注解用于将字段标记为实体的主键。它支持不同的 ID 生成策略。

### 参数说明

| 参数名       | 类型                    | 默认值                       | 说明                                           |
| ------------ | ----------------------- | ---------------------------- | ---------------------------------------------- |
| `type`       | IdType                  | `IdType.NONE`                | ID 生成策略类型                                |
| `idStrategy` | KClass\<out IdStrategy> | `SnowflakeIdStrategy::class` | 当 type 为`IdType.GENERATOR`时使用的 ID 策略类 |

### ID 类型

`IdType` 枚举提供了不同的 ID 生成策略：

- `NONE`：无特殊处理，ID 必须手动设置
- `AUTO`：自增 ID（依赖数据库支持）
- `GENERATOR`：使用自定义 ID 生成器策略

### 使用示例

#### 自增 ID

:::tabs key:kite
== Java

```java
import com.tang.kite.annotation.id.Id;
import com.tang.kite.annotation.id.IdType;

public class Account {

    @Id(type = IdType.AUTO)
    private Long id;

}
```

== Kotlin

```kotlin
import com.tang.kite.annotation.id.Id
import com.tang.kite.annotation.id.IdType

class Account {

    @Id(type = IdType.AUTO)
    var id: Long? = null

}
```

:::

#### 雪花算法 ID 生成

:::tabs key:kite
== Java

```java
import com.tang.kite.annotation.id.Id;
import com.tang.kite.annotation.id.IdType;

public class Account {

    @Id(type = IdType.GENERATOR)
    private Long id;

}
```

== Kotlin

```kotlin
import com.tang.kite.annotation.id.Id
import com.tang.kite.annotation.id.IdType

class Account {

    @Id(type = IdType.GENERATOR)
    val id: Long? = null

}
```

:::

#### 自定义 ID 策略

:::tabs key:kite
== Java

```java
import com.tang.kite.annotation.id.strategy.IdStrategy;
import java.io.Serializable;
import java.lang.reflect.Field;

public class CustomIdStrategy implements IdStrategy {

    @Override
    public Serializable getId(Field idField) {
        // 假设使用当前时间戳生成 ID
        long timestamp = System.currentTimeMillis();
        // 可以根据字段类型返回不同类型的 ID
        if (idField.getType().equals(String.class)) {
            return String.valueOf(timestamp);
        }
        return timestamp;
    }

}
```

== Kotlin

```kotlin
import com.tang.kite.annotation.id.strategy.IdStrategy
import java.io.Serializable
import java.lang.reflect.Field

class CustomIdStrategy : IdStrategy {

    override fun getId(idField: Field): Serializable {
      // 假设使用当前时间戳生成 ID
      val timestamp = System.currentTimeMillis()
      // 可以根据字段类型返回不同类型的 ID
      return if (idField.type == String::class.java) {
        timestamp.toString()
      } else {
        timestamp
      }
    }

}
```

:::

#### 使用自定义 ID 策略

:::tabs key:kite
== Java

```java
import com.tang.kite.annotation.id.Id;
import com.tang.kite.annotation.id.IdType;

public class Account {

    @Id(type = IdType.GENERATOR, idStrategy = CustomIdStrategy.class)
    private Long id;

}
```

== Kotlin

```kotlin
import com.tang.kite.annotation.id.Id
import com.tang.kite.annotation.id.IdType

class Account {

    @Id(type = IdType.GENERATOR, idStrategy = CustomIdStrategy::class)
    val id: Long? = null

}
```

:::
