# Insert, Delete, Update

The `BaseMapper` of Kite framework provides basic CRUD operations for database tables.

## Insert

 * `insert(entity)`: Inserts a single entity into the database table.
 * `insertSelective(entity)`: Inserts a single entity into the database table, only inserting `non-null` fields.
 * `insertValues(entities)`: Inserts a batch of entities into the database table, with a insert values.
 * `insertValues(entities, batchSize)`: Inserts a batch of entities into the database table, with a insert values.
 * `batchInsert(entities)`: Inserts a batch of entities into the database table.
 * `batchInsertSelective(entities)`: Inserts a batch of entities into the database table, only inserting `non-null` fields.
 * `batchInsert(entities, batchSize)`: Inserts a batch of entities into the database table, with a specified batch size.
 * `batchInsertSelective(entities, batchSize)`: Inserts a batch of entities into the database table, with a specified batch size, only inserting `non-null` fields.

 > When the `batchSize` parameter is not passed, the default `batchSize` is 1000.

## Delete

 * `delete(entity)`: Deletes a single entity by condition entity.
 * `deleteById(id)`: Deletes a single entity by primary key.
 * `deleteByIds(ids)`: Deletes a batch of entities by primary keys.
 * `deleteWrapper()`: Deletes a single entity in the database table, with a specified condition.
 * `deleteWrapper(deleteWrapper)`: Deletes a single entity in the database table, with a specified condition.

## Update

 * `update(entity)`: Updates a single entity by primary key.
 * `update(entity, conditionEntity)`: Updates a single entity in the database table, with a specified condition entity.
 * `updateSelective(entity)`: Updates a single entity by primary key, only updating `non-null` fields.
 * `updateSelective(entity, conditionEntity)`: Updates a single entity in the database table, with a specified condition entity, only updating `non-null` fields.
 * `updateWrapper()`: Updates a single entity in the database table, with a specified condition.
 * `updateWrapper(updateWrapper)`: Updates a single entity in the database table, with a specified condition.
 * `batchUpdate(entities)`: Updates a batch of entities in the database table.
 * `batchUpdateSelective(entities)`: Updates a batch of entities in the database table, only updating `non-null` fields.
 * `batchUpdate(entities, batchSize)`: Updates a batch of entities in the database table, with a specified batch size.
 * `batchUpdateSelective(entities, batchSize)`: Updates a batch of entities in the database table, with a specified batch size, only updating `non-null` fields.
