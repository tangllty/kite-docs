# Getting Started

 > Example for MySQL

## Usage

 > Maven central: [jkorm-spring-boot-starter](https://central.sonatype.com/artifact/io.github.tangllty/jkorm-spring-boot-starter)

 1. Add the following dependencies to your project:

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

  2. Create a table in your database

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

 3. Configure your database connection information in the `application.yml` file

```yaml
spring:
  datasource:
    driver-class-name: com.mysql.cj.jdbc.Driver
    url: jdbc:mysql://127.0.0.1:3306/jkorm-test
    username: root
    password: password
```

 4. Extend the `BaseMapper` interface to create a Mapper interface

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
