# 快速开始

 > 示例为 MySQL

## 使用

 > Maven central: [kite-spring-boot-starter](https://central.sonatype.com/artifact/io.github.tangllty/kite-spring-boot-starter)

 1. 将以下依赖添加到您的项目中：

 * Maven

```xml
<dependency>
   <groupId>io.github.tangllty</groupId>
   <artifactId>kite-spring-boot-starter</artifactId>
   <version>${kite.version}</version>
</dependency>
```

 * Gradle

```kts
implementation("io.github.tangllty:kite-spring-boot-starter:${kite.version}")
```

  2. 在数据库中创建以下表

```sql
create table account (
  id          bigint not null auto_increment,
  username    varchar(32)     default '',
  password    varchar(32)     default '',
  balance     decimal(10,2)   default '0.00',
  create_time datetime        default null,
  update_time datetime        default null,
  primary key (`id`)
);

insert into account (username, password, create_time, balance) values
('admin', 'admin123', '2020-01-01 12:00:00', 1000.10),
('user', 'user123', '2024-05-02 8:30:00', 101.00),
('guest', 'guest123', '2022-03-03 15:00:00', 10.00),
('tang', 'tang123', '2019-06-01 21:30:30', 1.88),
('jeo', 'jeo123', '2024-07-01 5:59:59', 0.10);
```

 3. 在 `kite-config.yml` 文件中配置您的数据库连接信息

```yaml
kite:
  datasource:
    driver: com.mysql.cj.jdbc.Driver
    url: jdbc:mysql://127.0.0.1:3306/kite-test
    username: root
    password: password
```

  4. 为 `account` 表创建实体类

:::tabs key:kite
== Java

```java
import com.tang.kite.annotation.id.Id;
import com.tang.kite.annotation.id.IdType;
import java.math.BigDecimal;
import java.time.LocalDateTime;

public class Account {

    @Id(type = IdType.AUTO)
    private Long id;
    private String username;
    private String password;
    private BigDecimal balance;
    private LocalDateTime createTime;
    private LocalDateTime updateTime;

    // Getters and Setters
}
```

== Kotlin

```kotlin
import com.tang.kite.annotation.id.Id
import com.tang.kite.annotation.id.IdType
import java.math.BigDecimal
import java.time.LocalDateTime

class Account (

    @Id(type = IdType.AUTO)
    var id: Long? = null,
    var username: String? = null,
    var password: String? = null,
    var balance: BigDecimal? = null,
    var createTime: LocalDateTime? = null,
    var updateTime: LocalDateTime? = null

)
```
:::

 5. 继承 `BaseMapper` 接口以创建一个 Mapper 接口

:::tabs key:kite
== Java

```java
import com.tang.kite.mapper.BaseMapper;
import com.tang.kite.spring.annotation.Mapper;

@Mapper
public interface AccountMapper extends BaseMapper<Account> {
}
```

== Kotlin

```kotlin
import com.tang.kite.mapper.BaseMapper
import com.tang.kite.spring.annotation.Mapper

@Mapper
interface AccountMapper : BaseMapper<Account>
```
:::

 6. 测试 Mapper 接口

:::tabs key:kite
== Java

```java
import com.tang.kite.io.Resources;
import com.tang.kite.session.factory.SqlSessionFactoryBuilder;
import com.tang.kite.session.mapper.AccountMapper;
import org.junit.jupiter.api.Test;

public class KiteTest {

    @Test
    public void test() {
        var resource = Resources.getResourceAsStream("kite-config.yml");
        var sqlSessionFactory = new SqlSessionFactoryBuilder().build(resource);
        var sqlSession = sqlSessionFactory.openSession();
        var accountMapper = sqlSession.getMapper(AccountMapper.class);
        var list = accountMapper.select();
        list.forEach(System.out::println);
        sqlSession.close();
    }

}
```
== Kotlin

```kotlin
import com.tang.kite.io.Resources
import com.tang.kite.session.factory.SqlSessionFactoryBuilder
import com.tang.kite.session.mapper.AccountMapper
import org.junit.jupiter.api.Test

class KiteTest {

    @Test
    fun test() {
        val resource = Resources.getResourceAsStream("kite-config.yml")
        val sqlSessionFactory = SqlSessionFactoryBuilder().build(resource)
        val sqlSession = sqlSessionFactory.openSession()
        val accountMapper = sqlSession.getMapper(AccountMapper::class.java)
        val list = accountMapper.select()
        list.forEach { println(it) }
        sqlSession.close()
    }

}
```
:::
