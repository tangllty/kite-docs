# 开始

## 环境要求

* OpenJDK 17.0.7
* Apache Maven 3.8.7
* MySQL 8.3.0
* Redis 7.2.3

## 获取项目

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

## 修改配置

1. 执行 databases/20221210.sql 文件 ( **包含 drop database 语句, 请仔细查看后执行 sql 文件** )
2. 修改 tang-admin/src/main/resources/application-dev.yml & application-prod.yml 数据库和 Redis 配置

```yaml
# Spring 配置
spring:
  ......
  # 数据源配置
  datasource:
    driver-class-name: com.mysql.cj.jdbc.Driver
    url: jdbc:mysql://localhost:3306/tang-boot?useUnicode=true&characterEncoding=utf8&zeroDateTimeBehavior=convertToNull&useSSL=true&serverTimezone=GMT%2B8
    username: root
    password: password
  # Redis 配置
  data:
    redis:
      host: localhost
      port: 6379
      password: password
  ......
```

3. 修改 tang-admin/src/main/resources/application.yml 上传文件路径

```yaml
# 项目配置
tang:
  ......
  # 文件上传路径
  uploads: /home/tang/uploads/tang-boot
  ......
```

::: tip 提示
如果 application.yml 中的配置开发环境和生产环境不一致, 可以在 application-dev.yml 或者 application-prod.yml 中覆盖 application.yml 中的配置（如端口号不一致）
```yaml
# application.yml 中的配置
server:
  port: 8080

# application-dev.yml 中的配置
server:
  port: 8081

# application-prod.yml 中的配置
server:
  port: 8082
```
:::

4. 修改 tang-admin/src/main/resources/logback.xml 日志存放路径

```xml
<property name="LOG_PATH" value="/home/tang/logs/tang-boot" />
```

## 运行项目

* 在 IDE 中运行 tang-admin/src/main/java/com/tang/admin/AdminApplication.java

或者

* 在项目根目录下执行

```bash
sh bin/package.sh && sh bin/start.sh
```

## 打包项目

```bash
# 生产环境
sh bin/package.sh
```

::: tip 提示
打包后的文件在 tang-admin/target 目录下
:::

## 运行前端

[参考前端开始](/tang-vue/getting-started.md)
