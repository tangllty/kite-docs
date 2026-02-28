# 性能测试

结果为平均时间，单位为毫秒（ms）。测试环境为本地开发环境，使用 H2 内存数据库进行测试。每个操作执行了 50 次，以确保结果的稳定性和可靠性。

## 仓库地址

- https://github.com/tangllty/kite-benchmark
- https://gitee.com/tangllty/kite-benchmark

## 增、删、改、查、分页

```text
[selectById] Kite average time: 2.4ms
[selectById] Flex average time: 2.8ms
[selectById] Plus average time: 2.1ms

[paginate] Kite average time: 5.7ms
[paginate] Flex average time: 3.0ms
[paginate] Plus average time: 51.0ms

[insert] Kite average time: 1.4ms
[insert] Flex average time: 1.7ms
[insert] Plus average time: 1.6ms

[updateById] Kite average time: 3.1ms
[updateById] Flex average time: 2.8ms
[updateById] Plus average time: 5.9ms

[deleteById] Kite average time: 1.0ms
[deleteById] Flex average time: 1.5ms
[deleteById] Plus average time: 2.8ms
```
