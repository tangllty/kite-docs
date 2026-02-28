# Benchmark

The results are average times in milliseconds (ms). The test environment is a local development environment using H2 in-memory database. Each operation was executed 10 times to ensure the stability and reliability of the results.

## Repository

- [https://github.com/tangllty/kite-benchmark](https://github.com/tangllty/kite-benchmark)
- [https://gitee.com/tangllty/kite-benchmark](https://gitee.com/tangllty/kite-benchmark)

## CRUD Operations and Pagination

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
