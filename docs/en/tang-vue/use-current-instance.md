# Introduction

`getCurrentInstance` is a new API in Vue 3.0 for getting the current component instance. In Vue 2.x, we can get the current component instance through `this`, but in Vue 3.0, `this` no longer points to the current component instance, but to `undefined`.

## Usage

```typescript
import { getProxy } from '@/utils/getCurrentInstance'

const proxy = getProxy()

proxy.$something
```

## Implementation

The IDE will prompt all properties and methods when you use `proxy.`. This is because the `getProxy` function returns the `ComponentPublicInstance` type. The function is implemented as follows:

```typescript
import { ComponentInternalInstance, ComponentPublicInstance, getCurrentInstance } from 'vue'

// Get the current component instance
export const getInstance = (): ComponentInternalInstance => {
  const instance = getCurrentInstance() as ComponentInternalInstance
  if (!instance) {
    throw new Error('instance is undefined')
  }
  return instance
}

// Get the proxy of the current component instance
export const getProxy = (): ComponentPublicInstance => {
  const { proxy } = getInstance()
  if (!proxy) {
    throw new Error('proxy is undefined')
  }
  return proxy
}
```

In the code above, we specify that the return value of the `getProxy` function is the `ComponentPublicInstance` type and handle the case where `getInstance().proxy` is `null`, so that the correct prompt can be obtained when using `proxy`.

::: tip Tip
When you register global properties in `src/main.ts`, the IDE will not prompt your global properties.

```typescript
......
app.config.globalProperties.$custom = custom
......
```

The solution is to declare global properties in `src/vue.d.ts`:

```typescript
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    ......
    $custom: custom
  }
}
```

:::
