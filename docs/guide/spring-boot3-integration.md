# Spring Boot 3 Integration

This section covers how to integrate Kite with Spring Boot 3 applications.

> Example for MySQL

## Usage

> Maven central: [kite-spring-boot3-starter](https://central.sonatype.com/artifact/io.github.tangllty/kite-spring-boot3-starter)

1.  Add the following dependencies to your project:

- Maven

```xml
<dependency>
   <groupId>io.github.tangllty</groupId>
   <artifactId>kite-spring-boot3-starter</artifactId>
   <version>${kite.version}</version>
</dependency>
```

- Gradle

```kts
implementation("io.github.tangllty:kite-spring-boot3-starter:${kite.version}")
```

2. Create a table in your database

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

3.  Configure your database connection information in the `application.yml` file

```yaml
spring:
  datasource:
    driver-class-name: com.mysql.cj.jdbc.Driver
    url: jdbc:mysql://127.0.0.1:3306/kite-test
    username: root
    password: password
```

4.  Create a model class for the `account` table

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

5.  Extend the `BaseMapper` interface to create a Mapper interface

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

6.  Add the `@MapperScan` annotation to your Spring Boot application class

:::tabs key:kite
== Java

```java
import com.tang.kite.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@MapperScan("com.tang.demo.mapper")
@SpringBootApplication
public class KiteApplication {

    public static void main(String[] args) {
        SpringApplication.run(KiteApplication.class, args);
    }

}
```

== Kotlin

```kotlin
import com.tang.kite.spring.annotation.MapperScan
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@MapperScan(["com.tang.demo.mapper"])
@SpringBootApplication
class KiteApplication

fun main(args: Array<String>) {
	runApplication<KiteApplication>(*args)
}
```

:::

7.  Test the Mapper interface

:::tabs key:kite
== Java

```java
import com.tang.demo.mapper.AccountMapper;
import com.tang.kite.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@MapperScan("com.tang.demo.mapper")
@SpringBootApplication
public class KiteApplication {

    public static void main(String[] args) {
        var context = SpringApplication.run(KiteApplication.class, args);
        var accountMapper = context.getBean(AccountMapper.class);
        var accounts = accountMapper.select();
        accounts.forEach(System.out::println);
    }

}
```

== Kotlin

```kotlin
import com.tang.demo.mapper.AccountMapper
import com.tang.kite.spring.annotation.MapperScan
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@MapperScan(["com.tang.demo.mapper"])
@SpringBootApplication
class KiteApplication

fun main(args: Array<String>) {
	val context = runApplication<KiteApplication>(*args)
	val accountMapper = context.getBean(AccountMapper::class.java)
	val accounts = accountMapper.select()
	accounts.forEach { println(it) }
}
```

:::
