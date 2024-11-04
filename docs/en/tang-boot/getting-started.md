# Getting Started

## Environment Requirements

* OpenJDK 17.0.7
* Apache Maven 3.8.7
* MySQL 8.3.0
* Redis 7.2.3

## Get Project

::: tabs key:repository

== GitHub

```bash
git clone https://github.com/tangllty/tang-boot.git
```

== Gitee

```bash
git clone https://gitee.com/tangllty/tang-boot.git
```

:::

## Modify Configuration

1. Execute the databases/20221210.sql file ( **contains drop database statement, please check it carefully and execute the sql file** )
2. Modify tang-admin/src/main/resources/application-dev.yml & application-prod.yml database and Redis configuration

```yaml
# Spring configuration
spring:
  ......
  # Data source configuration
  datasource:
    driver-class-name: com.mysql.cj.jdbc.Driver
    url: jdbc:mysql://localhost:3306/tang-boot?useUnicode=true&characterEncoding=utf8&zeroDateTimeBehavior=convertToNull&useSSL=true&serverTimezone=GMT%2B8
    username: root
    password: password
  # Redis configuration
  data:
    redis:
      host: localhost
      port: 6379
      password: password
  ......
```

3. Modify tang-admin/src/main/resources/application.yml upload file path

```yaml
# Project configuration
tang:
  ......
  # File upload path
  uploads: /home/tang/uploads/tang-boot
  ......
```

::: tip Tip
if the configuration of application.yml is different between development environment and production environment, you can override the configuration in application-dev.yml or application-prod.yml (such as the port number is different)
```yaml
# Configurations in application.yml
server:
  port: 8080

# Configurations in application-dev.yml
server:
  port: 8081

# Configurations in application-prod.yml
server:
  port: 8082
```
:::

4. Modify tang-admin/src/main/resources/logback.xml log path

```xml
<property name="LOG_PATH" value="/home/tang/logs/tang-boot" />
```

## Start Project

* Run tang-admin/src/main/java/com/tang/admin/AdminApplication.java in IDE

OR

* Execute the following command in the project root directory

```bash
mvn clean package && sh bin/start.sh
```

## Build Project

```bash
# Production environment
sh bin/package.sh
```

::: tip Tip
The packaged file is in the tang-admin/target directory
:::

## Run Frontend

[Refer to run frontend](/en/tang-vue/getting-started.md)
