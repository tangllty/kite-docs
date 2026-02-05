# Kite 单表基础 CRUD 全解，Java&Kotlin 一行代码搞定数据库操作

上一篇我们完成了 `Kite` 的 `Spring Boot` 快速集成，并用`select()`实现了全表查询，今天作为功能篇的开篇，我们吃透 `Kite` 最核心、最常用的单表基础 CRUD 能力—— 新增、更新、删除、全表查询、单条查询、数量查询、分页查询，这是所有 `ORM` 框架的核心基础能力，也是开发者每天用得最多的功能。

> `Kite` 框架的 `BaseMapper` 提供了数据库表的基础 CRUD 操作方法。

## 插入操作

- `insert(entity)`: 将单个实体插入数据库表中。
- `insertSelective(entity)`: 插入单个实体到数据库表，仅插入`非空`字段。
- `batchInsert(list)`: 批量插入实体到数据库表。
- `batchInsertSelective(list)`: 批量插入实体到数据库表，仅插入`非空`字段。
- `batchInsert(list, batchSize)`: 批量插入实体到数据库表，可指定批次大小。
- `batchInsertSelective(list, batchSize)`: 批量插入实体到数据库表，可指定批次大小，仅插入`非空`字段。

> 当未指定`batchSize`参数时，默认批次大小为1000。

## 删除操作

- `delete(entity)`: 根据条件实体删除单个实体。
- `deleteById(id)`: 根据主键删除单个实体。
- `deleteByIds(ids)`: 根据主键批量删除实体。
- `deleteWrapper()`: 根据指定条件删除单个实体。
- `deleteWrapper(deleteWrapper)`: 根据指定条件删除单个实体。

## 更新操作

- `update(entity)`: 根据主键更新单个实体。
- `update(entity, conditionEntity)`: 根据指定条件更新单个实体。
- `updateSelective(entity)`: 根据主键更新单个实体，仅更新`非空`字段。
- `updateSelective(entity, conditionEntity)`: 根据指定条件更新单个实体，仅更新`非空`字段。
- `updateWrapper()`: 根据指定条件更新单个实体。
- `updateWrapper(updateWrapper)`: 根据指定条件更新单个实体。
- `batchUpdate(list)`: 批量更新实体到数据库表。
- `batchUpdate(list, conditionEntity)`: 批量更新实体到数据库表，根据指定条件。
- `batchUpdateSelective(list)`: 批量更新实体到数据库表，仅更新`非空`字段。
- `batchUpdateSelective(list, conditionEntity)`: 批量更新实体到数据库表，根据指定条件，仅更新`非空`字段。
- `batchUpdate(list, batchSize)`: 批量更新实体到数据库表，可指定批次大小。
- `batchUpdateSelective(list, batchSize)`: 批量更新实体到数据库表，可指定批次大小，仅更新`非空`字段。
- `batchUpdate(list, conditionEntity, batchSize)`: 批量更新实体到数据库表，根据指定条件，可指定批次大小。
- `batchUpdateSelective(list, conditionEntity, batchSize)`: 批量更新实体到数据库表，根据指定条件，可指定批次大小，仅更新`非空`字段。

## 基础查询

- `select()`: 查询所有实体。
- `select(orderBy)`: 查询所有实体，并指定排序。
- `select(orderBys)`: 查询所有实体，并指定多个排序。
- `select(entity)`: 查询所有实体，使用指定的条件实体。
- `select(entity, orderBy)`: 查询所有实体，使用指定的条件实体和排序。
- `select(entity, orderBys)`: 查询所有实体，使用指定的条件实体和多个排序。
- `queryWrapper()`: 查询所有实体，使用指定的查询包装器。
- `queryWrapper(queryWrapper)`: 查询所有实体，使用指定的查询包装器。

## 查询单个

- `selectById(id)`: 根据 ID 查询单个实体。
- `selectOneWrapper(queryWrapper)`: 查询单个实体，使用指定的查询包装器。

## 查询数量

- `count()`: 查询所有实体的数量。
- `count(entity)`: 查询满足条件实体的数量。
- `countWrapper()`: 查询所有实体的数量，使用指定的计数包装器。
- `countWrapper(countWrapper)`: 查询满足条件实体的数量，使用指定的计数包装器。

## 分页查询

- `paginate(pageNumber, pageSize)`: 分页查询所有实体，指定页码和每页大小。
- `paginate(pageNumber, pageSize, orderBy)`: 分页查询所有实体，指定页码、每页大小和排序。
- `paginate(pageNumber, pageSize, orderBys)`: 分页查询所有实体，指定页码、每页大小和多个排序。
- `paginate(pageNumber, pageSize, entity)`: 分页查询实体，指定页码、每页大小和条件实体。
- `paginate(pageNumber, pageSize, entity, orderBy)`: 分页查询实体，指定页码、每页大小、条件实体和排序。
- `paginate(pageNumber, pageSize, entity, orderBys)`: 分页查询实体，指定页码、每页大小、条件实体和多个排序。
- `paginate(request)`: 分页查询实体，使用指定的请求。
- `paginate(request, orderBy)`: 分页查询实体，使用指定的请求和排序。
- `paginate(request, orderBys)`: 分页查询实体，使用指定的请求和多个排序。
- `paginate(request, entity)`: 分页查询实体，使用指定的请求和条件实体。
- `paginate(request, entity, orderBy)`: 分页查询实体，使用指定的请求、条件实体和排序。
- `paginate(request, entity, orderBys)`: 分页查询实体，使用指定的请求、条件实体和多个排序。

## 文档与社区

### 官方文档

详细的使用文档请参考：

- [中文文档](https://tangllty.eu.org/zh/)
- [英文文档](https://tangllty.eu.org/)

## 源码

Kite 的源码托管在 GitHub 和 Gitee 上，您可以在以下地址查看和贡献：

- [Kite GitHub 仓库](https://github.com/tangllty/kite)
- [Kite Gitee 仓库](https://gitee.com/tangllty/kite)

## 总结

Kite 是一个功能强大、易于使用的 ORM 框架，它通过全自动映射和简洁的 API，大大简化了数据库操作的开发工作。无论是在 Kotlin 项目还是 Java 项目中，都能提供高效、便捷的数据库访问体验。

如果您正在寻找一个轻量级、高性能的 ORM 框架，Kite 绝对值得一试！
