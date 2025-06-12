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
  create_time date            default null,
  update_time date            default null,
  primary key (`id`)
);
```

 3. 在 `application.yml` 文件中配置您的数据库连接信息

```yaml
spring:
  datasource:
    driver-class-name: com.mysql.cj.jdbc.Driver
    url: jdbc:mysql://127.0.0.1:3306/kite-test
    username: root
    password: password
```

 3. 继承 `BaseMapper` 接口以创建一个 Mapper 接口

:::tabs key:kite
== Java

```java
import com.tang.kite.mapper.BaseMapper;

public interface AccountMapper extends BaseMapper<Account> {
}
```

== Kotlin

```kotlin
import com.tang.kite.mapper.BaseMapper

interface AccountMapper : BaseMapper<Account>
```
:::

 5. 测试 Mapper 接口

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
