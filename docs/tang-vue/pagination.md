# Pagination

## Introduction

Encapsulate the `el-pagination` component as the `pagination` component and register it globally for displaying pagination information, used in conjunction with `el-table` for pagination.

## Usage

1. Declare the type of query parameters in `@/api/custom/custom/types.ts` and inherit the `PageQuery` type.

```typescript
// Custom query parameters
export interface CustomQuery extends PageQuery {
  customId: number
  customName: string
}
```

2. Declare the object type in `@/api/custom/custom/types.ts`.

```typescript
// Custom object
export interface Custom {
  customId: number
  customName: string
  ......
}
```

3. Declare the query method in `@/api/custom/custom/index.ts`.

```typescript
// Query the custom list
export const listCustom = (queryParams: CustomQuery) => {
  return request({
    url: '/custom/custom/list',
    method: 'get',
    params: queryParams
  })
}
```

4. Import the pagination query method, types, and query parameters in the page that requires pagination.

```typescript
import { listCustom } from '@/api/custom/custom'
import { Custom, CustomQuery } from '@/api/custom/custom/types'
```

5. Declare the object list and query parameters.

```typescript
const state = reactive({
  ......
  // Loading mask
  loading: true,
  // Total count
  total: 0,
  // Custom table data
  customList: [] as Custom[],
  // Query parameters
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

6. Declare the method for querying the list.

```typescript
// Query the custom list
const handleList = async () => {
  state.loading = true
  const res: any = await listCustom(state.queryParams)
  state.customList = res.rows
  state.total = res.total
  state.loading = false
}
```

7. Declare the form instance.

```typescript
import { FormInstance } from 'element-plus'

const customQueryFormRef = ref<FormInstance>()
```

8. Declare the method for resetting the query.

```typescript
// Reset the form
const resetQuery = async () => {
  customQueryFormRef.value?.resetFields()
  await handleList()
}
```

8. Write the form.

```html
<el-form ref="customQueryFormRef" :model="queryParams" inline>
  <el-form-item label="Custom ID" prop="customId">
    <el-input
      v-model="queryParams.customId"
      placeholder="Custom ID"
      clearable
      @keyup.enter="handleList"
    />
  </el-form-item>
  <el-form-item label="Custom Name" prop="customName">
    <el-input
      v-model="queryParams.customName"
      placeholder="Custom Name"
      clearable
      @keyup.enter="handleList"
    />
  </el-form-item>

  <el-form-item>
    <el-button
      type="primary"
      :icon="Search"
      @click="handleList"
    >Search</el-button>
    <el-button
      :icon="Refresh"
      @click="resetQuery"
    >Reset</el-button>
  </el-form-item>
</el-form>
```

9. Write the table.

```html
<!-- Custom table -->
<el-table
  v-loading="loading"
  :data="customList"
>
  <el-table-column
    label="Custom ID"
    prop="customId"
    align="center"
  />
  <el-table-column
    label="Custom Name"
    prop="customName"
    align="center"
  />
 ......
</el-table>

<!-- Pagination -->
<pagination
  v-if="total > 0"
  :total="total"
  v-model:pageNum="queryParams.pageNum"
  v-model:pageSize="queryParams.pageSize"
  @pagination="handleList"
/>
```

## Backend pagination

[Refer to backend pagination](/tang-boot/pagination.md)
