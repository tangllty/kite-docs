# Basic Query

## Basic Query

 * `select()`: Select all entities.
 * `select(orderBy)`: Select all entities, with a specified order by.
 * `select(orderBys)`: Select all entities, with a specified order bys.
 * `select(entity)`: Select all entities, with a specified condition entity.
 * `select(entity, orderBy)`: Select all entities, with a specified condition entity and order by.
 * `select(entity, orderBys)`: Select all entities, with a specified condition entity and order bys.
 * `queryWrapper()`: Select all entities, with a specified query wrapper.
 * `queryWrapper(queryWrapper)`: Select all entities, with a specified query wrapper.

## Query One

 * `selectById(id)`: Select an entity by id.
 * `selectOneWrapper(queryWrapper)`: Select one entity, with a specified query wrapper.

## Query Count

 * `count()`: Select count of all entities.
 * `count(entity)`: Select count of entities, with a specified condition entity.

## Pagination

 * `paginate(pageNumber, pageSize)`: Select all entities with pagination, with a specified page number and page size.
 * `paginate(pageNumber, pageSize, orderBy)`: Select all entities with pagination, with a specified page number, page size and order by.
 * `paginate(pageNumber, pageSize, orderBys)`: Select all entities with pagination, with a specified page number, page size and order bys.
 * `paginate(pageNumber, pageSize, entity)`: Select all entities with pagination, with a specified page number, page size and condition entity.
 * `paginate(pageNumber, pageSize, entity, orderBy)`: Select all entities with pagination, with a specified page number, page size, condition entity and order by.
 * `paginate(pageNumber, pageSize, entity, orderBys)`: Select all entities with pagination, with a specified page number, page size, condition entity and order bys.
 * `paginate(request)`: Select all entities with pagination, with a specified request.
 * `paginate(request, orderBy)`: Select all entities with pagination, with a specified request.
 * `paginate(request, orderBys)`: Select all entities with pagination, with a specified request.
 * `paginate(request, entity)`: Select all entities with pagination, with a specified request and
 * `paginate(request, entity, orderBy)`: Select all entities with pagination, with a specified request, condition entity and order by.
 * `paginate(request, entity, orderBys)`: Select all entities with pagination, with a specified request, condition entity and order bys.

## Join Query

### Join Query

 * `selectWithJoins()`: Select all entities with joins.
 * `selectWithJoins(orderBy)`: Select all entities with joins, with a specified order by.
 * `selectWithJoins(orderBys)`: Select all entities with joins, with a specified order bys.
 * `selectWithJoins(entity)`: Select all entities with joins, with a specified condition entity.
 * `selectWithJoins(entity, orderBy)`: Select all entities with joins, with a specified condition entity and order by.
 * `selectWithJoins(entity, orderBys)`: Select all entities with joins, with a specified condition entity and order bys.

### Query One with Joins

 * `selectByIdWithJoins(id)`: Select an entity by id with joins.

### Pagination with Joins

 * `paginateWithJoins(pageNumber, pageSize)`: Select all entities with joins and pagination, with a specified page number and page size.
 * `paginateWithJoins(pageNumber, pageSize, orderBy)`: Select all entities with joins and pagination, with a specified page number, page size and order by.
 * `paginateWithJoins(pageNumber, pageSize, orderBys)`: Select all entities with joins and pagination, with a specified page number, page size and order bys.
 * `paginateWithJoins(pageNumber, pageSize, entity)`: Select all entities with joins and pagination, with a specified page number, page size and condition entity.
 * `paginateWithJoins(pageNumber, pageSize, entity, orderBy)`: Select all entities with joins and pagination, with a specified page number, page size, condition entity and
 * `paginateWithJoins(pageNumber, pageSize, entity, orderBys)`: Select all entities with joins and pagination, with a specified page number, page size, condition entity and order bys.
 * `paginateWithJoins(request)`: Select all entities with joins and pagination, with a specified request.
 * `paginateWithJoins(request, orderBy)`: Select all entities with joins and pagination, with a specified request and order by.
 * `paginateWithJoins(request, orderBys)`: Select all entities with joins and pagination, with a specified request and order bys.
 * `paginateWithJoins(request, entity)`: Select all entities with joins and pagination, with a specified request and condition entity.
 * `paginateWithJoins(request, entity, orderBy)`: Select all entities with joins and pagination, with a specified request, condition entity and order by.
 * `paginateWithJoins(request, entity, orderBys)`: Select all entities with joins and pagination, with a specified request, condition entity and order bys.
