# 简介

`WebSocket` 是一种网络通信协议，可在单个 TCP 连接上进行全双工通信。`WebSocket` 通信协议于 2011 年被 IETF 定为标准 RFC 6455，并由 RFC7936 补充规范。`WebSocket` API 也被 W3C 定为标准。

## 注入

::: code-group

```java [Java]
import org.springframework.stereotype.Service;

import com.tang.commons.websocket.WebSocket;

@Service
public class CustomServiceImpl implements CustomService {

    private final WebSocket webSocket;

    public CustomServiceImpl(WebSocket webSocket) {
        this.webSocket = webSocket;
    }

}
```

```kotlin [Kotlin]
import org.springframework.stereotype.Service

import com.tang.commons.websocket.WebSocket

@Service
class CustomServiceImpl(private val webSocket: WebSocket) : CustomService
```

:::

## 推送消息

::: code-group

```java [Java]
// 推送消息到指定用户
webSocket.sendMessage(args);
// 推送消息到所有用户
webSocket.sendAllMessage(args);
```

```kotlin [Kotlin]
// 推送消息到指定用户
webSocket.sendMessage(args)
// 推送消息到所有用户
webSocket.sendAllMessage(args)
```

:::

## 订阅消息

::: code-group

```java
@PostConstruct
public void init() {
    webSocket.subscribe(MessageType.CUSTOM, data -> {
        ......
    });
}
```

```kotlin
@PostConstruct
fun init() {
    webSocket.subscribe(MessageType.CUSTOM) {
        ......
    }
}
```

:::
