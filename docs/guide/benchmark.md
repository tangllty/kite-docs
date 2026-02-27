# Benchmark

The results are average times in milliseconds (ms). The test environment is a local development environment using H2 in-memory database. Each operation was executed 10 times to ensure the stability and reliability of the results.

## Repository

- [https://github.com/tangllty/kite-benchmark](https://github.com/tangllty/kite-benchmark)
- [https://gitee.com/tangllty/kite-benchmark](https://gitee.com/tangllty/kite-benchmark)

## CRUD Operations

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
