# 分页

## 简介

封装 `el-pagination` 组件 `pagination` 组件并全局注册，用于展示分页信息，配合 `el-table` 分页使用。

## 使用

1. 在 `@/api/custom/custom/types.ts` 中声明查询参数的类型, 并继承 `PageQuery` 类型

```typescript
// 自定义查询参数
export interface CustomQuery extends PageQuery {
  customId: number
  customName: string
}
```

2. 在 `@/api/custom/custom/types.ts` 中声明对象类型

```typescript
// 自定义对象
export interface Custom {
  customId: number
  customName: string
  ......
}
```

3. 在 `@/api/custom/custom/index.ts` 中声明查询方法

```typescript
// 查询自定义列表
export const listCustom = (queryParams: CustomQuery) => {
  return request({
    url: '/custom/custom/list',
    method: 'get',
    params: queryParams
  })
}
```

4. 在需要分页的页面中引入分页查询方法、类型和查询参数

```typescript
import { listCustom } from '@/api/custom/custom'
import { Custom, CustomQuery } from '@/api/custom/custom/types'
```

5. 声明对象列表和查询参数

```typescript
const state = reactive({
  ......
  // 遮罩层
  loading: true,
  // 总条数
  total: 0,
  // 自定义表格数据
  customList: [] as Custom[],
  // 查询参数
  queryParams: {} as SysUserQuery,
  ......
})

const {
  ......
  loading,
  total,
  customList,
  queryParams,
  ......
} = toRefs(state)
```

6. 声明查询列表方法

```typescript
// 查询自定义列表
const handleList = async () => {
  state.loading = true
  const res: any = await listCustom(state.queryParams)
  state.customList = res.rows
  state.total = res.total
  state.loading = false
}
```

7. 声明表单实例

```typescript
import { FormInstance } from 'element-plus'

const customQueryFormRef = ref<FormInstance>()
```

8. 声明重置查询方法

```typescript
// 重置表单
const resetQuery = async () => {
  customQueryFormRef.value?.resetFields()
  await handleList()
}
```

8. 编写form表单

```html
<el-form ref="customQueryFormRef" :model="queryParams" inline>
  <el-form-item label="自定义ID" prop="customId">
    <el-input
      v-model="queryParams.customId"
      placeholder="自定义ID"
      clearable
      @keyup.enter="handleList"
    />
  </el-form-item>
  <el-form-item label="自定义名称" prop="customName">
    <el-input
      v-model="queryParams.customName"
      placeholder="自定义名称"
      clearable
      @keyup.enter="handleList"
    />
  </el-form-item>

  <el-form-item>
    <el-button
      type="primary"
      :icon="Search"
      @click="handleList"
    >搜索</el-button>
    <el-button
      :icon="Refresh"
      @click="resetQuery"
    >重置</el-button>
  </el-form-item>
</el-form>
```

9. 编写表格

```html
<!-- 自定义表格 -->
<el-table
  v-loading="loading"
  :data="customList"
>
  <el-table-column
    label="自定义ID"
    prop="customId"
    align="center"
  />
  <el-table-column
    label="自定义名称"
    prop="customName"
    align="center"
  />
 ......
</el-table>

<!-- 分页 -->
<pagination
  v-if="total > 0"
  :total="total"
  v-model:pageNum="queryParams.pageNum"
  v-model:pageSize="queryParams.pageSize"
  @pagination="handleList"
/>
```

## 后端分页

[参考后端分页](/tang-boot/pagination.md)
