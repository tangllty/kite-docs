# 基础查询

Kite框架的`BaseMapper`提供了数据库表的基础CRUD操作方法。

> 条件实体可通过 [@Column](../annotations/column#设置-sql-操作符) 注解的 `operator` 参数指定操作符来定义查询条件。

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

## 关联查询

### 关联查询所有

- `selectWithJoins()`: 关联查询所有实体。
- `selectWithJoins(orderBy)`: 关联查询所有实体，指定排序。
- `selectWithJoins(orderBys)`: 关联查询所有实体，指定多个排序。
- `selectWithJoins(entity)`: 关联查询所有实体，使用指定的条件实体。
- `selectWithJoins(entity, orderBy)`: 关联查询所有实体，使用指定的条件实体和排序。
- `selectWithJoins(entity, orderBys)`: 关联查询所有实体，使用指定的条件实体和多个排序。

### 关联查询单个

- `selectByIdWithJoins(id)`: 根据ID查询单个实体，包含关联数据。

### 关联分页查询

- `paginateWithJoins(pageNumber, pageSize)`: 关联查询所有实体并分页，指定页码和每页大小。
- `paginateWithJoins(pageNumber, pageSize, orderBy)`: 关联查询所有实体并分页，指定页码、每页大小和排序。
- `paginateWithJoins(pageNumber, pageSize, orderBys)`: 关联查询所有实体并分页，指定页码、每页大小和多个排序。
- `paginateWithJoins(pageNumber, pageSize, entity)`: 关联查询实体并分页，指定页码、每页大小和条件实体。
- `paginateWithJoins(pageNumber, pageSize, entity, orderBy)`: 关联查询实体并分页，指定页码、每页大小、条件实体和排序。
- `paginateWithJoins(pageNumber, pageSize, entity, orderBys)`: 关联查询实体并分页，指定页码、每页大小、条件实体和多个排序。
- `paginateWithJoins(request)`: 关联查询实体并分页，使用指定的请求。
- `paginateWithJoins(request, orderBy)`: 关联查询实体并分页，使用指定的请求和排序。
- `paginateWithJoins(request, orderBys)`: 关联查询实体并分页，使用指定的请求和多个排序。
- `paginateWithJoins(request, entity)`: 关联查询实体并分页，使用指定的请求和条件实体。
- `paginateWithJoins(request, entity, orderBy)`: 关联查询实体并分页，使用指定的请求、条件实体和排序。
- `paginateWithJoins(request, entity, orderBys)`: 关联查询实体并分页，使用指定的请求、条件实体和多个排序。
