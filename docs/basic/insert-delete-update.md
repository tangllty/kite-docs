# Insert, Delete, Update Operations

Kite framework's `BaseMapper` provides basic CRUD operation methods for database tables.

> Condition entities can define query conditions through the `operator` parameter of the [@Column](../annotations/column#setting-sql-operator) annotation to specify operators.

## Insert Operations

- `insert(entity)`: Insert a single entity into the database table.
- `insertSelective(entity)`: Insert a single entity into the database table, only inserting `non-null` fields.
- `insertValues(entities)`: Insert multiple entities into the database table.
- `insertValues(entities, batchSize)`: Insert multiple entities into the database table, only inserting `non-null` fields.
- `batchInsert(entities)`: Batch insert entities into the database table.
- `batchInsertSelective(entities)`: Batch insert entities into the database table, only inserting `non-null` fields.
- `batchInsert(entities, batchSize)`: Batch insert entities into the database table, with specified batch size.
- `batchInsertSelective(entities, batchSize)`: Batch insert entities into the database table, with specified batch size, only inserting `non-null` fields.

> When the `batchSize` parameter is not specified, the default batch size is 1000.

## Delete Operations

- `delete(entity)`: Delete a single entity based on the condition entity.
- `deleteById(id)`: Delete a single entity based on the primary key.
- `deleteByIds(ids)`: Batch delete entities based on primary keys.
- `deleteWrapper()`: Delete a single entity based on specified conditions.
- `deleteWrapper(deleteWrapper)`: Delete a single entity based on specified conditions.

## Update Operations

- `update(entity)`: Update a single entity based on the primary key.
- `update(entity, conditionEntity)`: Update a single entity based on specified conditions.
- `updateSelective(entity)`: Update a single entity based on the primary key, only updating `non-null` fields.
- `updateSelective(entity, conditionEntity)`: Update a single entity based on specified conditions, only updating `non-null` fields.
- `updateWrapper()`: Update a single entity based on specified conditions.
- `updateWrapper(updateWrapper)`: Update a single entity based on specified conditions.
- `batchUpdate(entities)`: Batch update entities to the database table.
- `batchUpdateSelective(entities)`: Batch update entities to the database table, only updating `non-null` fields.
- `batchUpdate(entities, batchSize)`: Batch update entities to the database table, with specified batch size.
- `batchUpdateSelective(entities, batchSize)`: Batch update entities to the database table, with specified batch size, only updating `non-null` fields.
