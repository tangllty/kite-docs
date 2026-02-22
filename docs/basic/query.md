# Basic Query

Kite framework's `BaseMapper` provides basic CRUD operation methods for database tables.

> Condition entities can define query conditions through the `operator` parameter of the [@Column](../annotations/column#setting-sql-operator) annotation to specify operators.

## Basic Query

- `select()`: Query all entities.
- `select(orderBy)`: Query all entities with specified sorting.
- `select(orderBys)`: Query all entities with multiple specified sorting.
- `select(entity)`: Query all entities using the specified condition entity.
- `select(entity, orderBy)`: Query all entities using the specified condition entity and sorting.
- `select(entity, orderBys)`: Query all entities using the specified condition entity and multiple sorting.
- `queryWrapper()`: Query all entities using the specified query wrapper.
- `queryWrapper(queryWrapper)`: Query all entities using the specified query wrapper.

## Query Single

- `selectById(id)`: Query a single entity by ID.
- `selectOneWrapper(queryWrapper)`: Query a single entity using the specified query wrapper.

## Query Count

- `count()`: Query the count of all entities.
- `count(entity)`: Query the count of entities that meet the condition entity.
- `countWrapper()`: Query the count of all entities using the specified count wrapper.
- `countWrapper(countWrapper)`: Query the count of entities that meet the condition using the specified count wrapper.

## Pagination Query

- `paginate(pageNumber, pageSize)`: Pagination query all entities, specify page number and page size.
- `paginate(pageNumber, pageSize, orderBy)`: Pagination query all entities, specify page number, page size and sorting.
- `paginate(pageNumber, pageSize, orderBys)`: Pagination query all entities, specify page number, page size and multiple sorting.
- `paginate(pageNumber, pageSize, entity)`: Pagination query entities, specify page number, page size and condition entity.
- `paginate(pageNumber, pageSize, entity, orderBy)`: Pagination query entities, specify page number, page size, condition entity and sorting.
- `paginate(pageNumber, pageSize, entity, orderBys)`: Pagination query entities, specify page number, page size, condition entity and multiple sorting.
- `paginate(request)`: Pagination query entities using the specified request.
- `paginate(request, orderBy)`: Pagination query entities using the specified request and sorting.
- `paginate(request, orderBys)`: Pagination query entities using the specified request and multiple sorting.
- `paginate(request, entity)`: Pagination query entities using the specified request and condition entity.
- `paginate(request, entity, orderBy)`: Pagination query entities using the specified request, condition entity and sorting.
- `paginate(request, entity, orderBys)`: Pagination query entities using the specified request, condition entity and multiple sorting.

## Join Query

### Join Query All

- `selectWithJoins()`: Join query all entities.
- `selectWithJoins(orderBy)`: Join query all entities with specified sorting.
- `selectWithJoins(orderBys)`: Join query all entities with multiple specified sorting.
- `selectWithJoins(entity)`: Join query all entities using the specified condition entity.
- `selectWithJoins(entity, orderBy)`: Join query all entities using the specified condition entity and sorting.
- `selectWithJoins(entity, orderBys)`: Join query all entities using the specified condition entity and multiple sorting.

### Join Query Single

- `selectByIdWithJoins(id)`: Query a single entity by ID, including associated data.

### Join Pagination Query

- `paginateWithJoins(pageNumber, pageSize)`: Join query all entities with pagination, specify page number and page size.
- `paginateWithJoins(pageNumber, pageSize, orderBy)`: Join query all entities with pagination, specify page number, page size and sorting.
- `paginateWithJoins(pageNumber, pageSize, orderBys)`: Join query all entities with pagination, specify page number, page size and multiple sorting.
- `paginateWithJoins(pageNumber, pageSize, entity)`: Join query entities with pagination, specify page number, page size and condition entity.
- `paginateWithJoins(pageNumber, pageSize, entity, orderBy)`: Join query entities with pagination, specify page number, page size, condition entity and sorting.
- `paginateWithJoins(pageNumber, pageSize, entity, orderBys)`: Join query entities with pagination, specify page number, page size, condition entity and multiple sorting.
- `paginateWithJoins(request)`: Join query entities with pagination using the specified request.
- `paginateWithJoins(request, orderBy)`: Join query entities with pagination using the specified request and sorting.
- `paginateWithJoins(request, orderBys)`: Join query entities with pagination using the specified request and multiple sorting.
- `paginateWithJoins(request, entity)`: Join query entities with pagination using the specified request and condition entity.
- `paginateWithJoins(request, entity, orderBy)`: Join query entities with pagination using the specified request, condition entity and sorting.
- `paginateWithJoins(request, entity, orderBys)`: Join query entities with pagination using the specified request, condition entity and multiple sorting.
