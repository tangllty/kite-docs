# 增删改操作

Kite框架的`BaseMapper`提供了数据库表的基础CRUD操作方法。

## 插入操作

 * `insert(entity)`: 将单个实体插入数据库表中。
 * `insertSelective(entity)`: 插入单个实体到数据库表，仅插入`非空`字段。
 * `batchInsert(list)`: 批量插入实体到数据库表。
 * `batchInsertSelective(list)`: 批量插入实体到数据库表，仅插入`非空`字段。
 * `batchInsert(list, batchSize)`: 批量插入实体到数据库表，可指定批次大小。
 * `batchInsertSelective(list, batchSize)`: 批量插入实体到数据库表，可指定批次大小，仅插入`非空`字段。

> 当未指定`batchSize`参数时，默认批次大小为1000。

## 删除操作

 * `delete(entity)`: 根据条件实体删除单个实体。
 * `deleteById(id)`: 根据主键删除单个实体。
 * `deleteByIds(ids)`: 根据主键批量删除实体。
 * `deleteWrapper()`: 根据指定条件删除单个实体。
 * `deleteWrapper(deleteWrapper)`: 根据指定条件删除单个实体。

## 更新操作

 * `update(entity)`: 根据主键更新单个实体。
 * `update(entity, conditionEntity)`: 根据指定条件更新单个实体。
 * `updateSelective(entity)`: 根据主键更新单个实体，仅更新`非空`字段。
 * `updateSelective(entity, conditionEntity)`: 根据指定条件更新单个实体，仅更新`非空`字段。
 * `updateWrapper()`: 根据指定条件更新单个实体。
 * `updateWrapper(updateWrapper)`: 根据指定条件更新单个实体。
 * `batchUpdate(list)`: 批量更新实体到数据库表。
 * `batchUpdate(list, conditionEntity)`: 批量更新实体到数据库表，根据指定条件。
 * `batchUpdateSelective(list)`: 批量更新实体到数据库表，仅更新`非空`字段。
 * `batchUpdateSelective(list, conditionEntity)`: 批量更新实体到数据库表，根据指定条件，仅更新`非空`字段。
 * `batchUpdate(list, batchSize)`: 批量更新实体到数据库表，可指定批次大小。
 * `batchUpdateSelective(list, batchSize)`: 批量更新实体到数据库表，可指定批次大小，仅更新`非空`字段。
 * `batchUpdate(list, conditionEntity, batchSize)`: 批量更新实体到数据库表，根据指定条件，可指定批次大小。
 * `batchUpdateSelective(list, conditionEntity, batchSize)`: 批量更新实体到数据库表，根据指定条件，可指定批次大小，仅更新`非空`字段。
