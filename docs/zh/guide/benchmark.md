# 性能测试

结果为平均时间，单位为毫秒（ms）。测试环境为本地开发环境，使用 H2 内存数据库进行测试。每个操作执行了 10 次，以确保结果的稳定性和可靠性。

## 仓库地址

- https://github.com/tangllty/kite-benchmark
- https://gitee.com/tangllty/kite-benchmark

## 增删改查

```text
[selectById] Kite average time: 1.4ms
[selectById] Flex average time: 1.5ms
[selectById] Plus average time: 1.6ms

[insert] Kite average time: 1.2ms
[insert] Flex average time: 1.8ms
[insert] Plus average time: 1.7ms

[updateById] Kite average time: 1.4ms
[updateById] Flex average time: 1.5ms
[updateById] Plus average time: 1.6ms

[deleteById] Kite average time: 0.8ms
[deleteById] Flex average time: 0.8ms
[deleteById] Plus average time: 1.9ms
```
