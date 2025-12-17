# Id 注解

`@Id` 注解用于将字段标记为实体的主键。它支持不同的 ID 生成策略。

## 参数说明

| 参数名       | 类型                    | 默认值                       | 说明                                           |
| ------------ | ----------------------- | ---------------------------- | ---------------------------------------------- |
| `type`       | IdType                  | `IdType.NONE`                | ID 生成策略类型                                |
| `idStrategy` | KClass\<out IdStrategy> | `SnowflakeIdStrategy::class` | 当 type 为`IdType.GENERATOR`时使用的 ID 策略类 |

## ID 类型

`IdType` 枚举提供了不同的 ID 生成策略：

- `NONE`：无特殊处理，ID 必须手动设置
- `AUTO`：自增 ID（依赖数据库支持）
- `GENERATOR`：使用自定义 ID 生成器策略

## 使用示例

### 自增 ID

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
