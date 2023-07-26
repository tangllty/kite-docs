## 简介

[tang-boot](https://gitee.com/tangllty/tang-boot) 是基于 [Spring Boot3](https://spring.io/projects/spring-boot) + [Spring Security](https://spring.io/projects/spring-security) + [MyBatis](https://mybatis.org/mybatis-3/zh/index.html) + [Redis](https://redis.io/) + [Jwt](https://jwt.io/) 的前后端分离权限管理系统

## 环境要求

* OpenJDK 17.0.7
* Apache Maven 3.8.7
* MySQL 8.0.33
* Redis 7.0.11

## 项目启动

1. 执行 databases/20221210.sql 文件 ( **包含 drop database 语句, 请仔细查看后执行 sql 文件** )
2. 修改 tang-admin/src/main/resources/application-dev.yml password 等信息
3. 修改 tang-admin/src/main/resources/logback.xml 日志存放路径
4. ```bash
   sh bin/package.sh && sh bin/start.sh
   ```

## 贡献

如果你有任何问题、建议或发现了 bug，请提交 issue 或提供 Pull Request 来帮助改进该项目。

## 许可证

Tang-Boot 使用 MIT 许可证。更多详情请查阅 [LICENSE](https://gitee.com/tangllty/tang-boot/blob/master/LICENSE) 文件。
