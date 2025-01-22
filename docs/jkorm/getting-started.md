# 快速开始

 > 示例为 MySQL

## 使用

 > Maven central: [jkorm-spring-boot-starter](https://central.sonatype.com/artifact/io.github.tangllty/jkorm-spring-boot-starter)

 1. 将以下依赖添加到您的项目中：

 * Maven

```xml
<dependency>
   <groupId>io.github.tangllty</groupId>
   <artifactId>jkorm-spring-boot-starter</artifactId>
   <version>${jkorm.version}</version>
</dependency>
```

 * Gradle

```kts
implementation("io.github.tangllty:jkorm-spring-boot-starter:${jkorm.version}")
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
    url: jdbc:mysql://127.0.0.1:3306/jkorm-test
    username: root
    password: password
```

 3. 集成 `BaseMapper` 接口以创建一个 Mapper 接口

:::tabs key:jkorm
== Java

```java
import com.tang.jkorm.mapper.BaseMapper;

public interface AccountMapper extends BaseMapper<Account> {
}
```

== Kotlin

```kotlin
import com.tang.jkorm.mapper.BaseMapper

interface AccountMapper : BaseMapper<Account>
```
:::
