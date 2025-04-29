# 介绍

`getCurrentInstance` 是 Vue 3.0 新增的 API，用于获取当前组件实例。在 Vue 2.x 中，我们可以通过 `this` 来获取当前组件实例，但是在 Vue 3.0 中，`this` 不再指向当前组件实例，而是指向 `undefined`。

## 使用

```typescript
import { getProxy } from '@/utils/getCurrentInstance'

const proxy = getProxy()

proxy.$something
```

## 实现

当你使用键入 `proxy.` 后 IDE 会提示所有的属性和方法，这是因为 `getProxy` 函数返回的是 `ComponentPublicInstance` 类型。函数实现如下：

```typescript
import { ComponentInternalInstance, ComponentPublicInstance, getCurrentInstance } from 'vue'

// 获取当前组件实例
export const getInstance = (): ComponentInternalInstance => {
  const instance = getCurrentInstance() as ComponentInternalInstance
  if (!instance) {
    throw new Error('instance is undefined')
  }
  return instance
}

// 获取当前组件实例的代理
export const getProxy = (): ComponentPublicInstance => {
  const { proxy } = getInstance()
  if (!proxy) {
    throw new Error('proxy is undefined')
  }
  return proxy
}
```

上面的代码中，我们指定了 `getProxy` 函数的返回值为 `ComponentPublicInstance` 类型并处理了 `getInstance().proxy` 为 `null` 的情况，这样就可以在使用 `proxy` 时获得正确的提示。

::: tip 提示
当你在 `src/main.ts` 注册全局属性时，IDE不会提示你的全局属性。

```typescript
......
app.config.globalProperties.$custom = custom
......
```

解决方法是在 `src/vue.d.ts` 中声明全局属性：

```typescript
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    ......
    $custom: custom
  }
}
```

:::