# Introduction

`WebSocket` is a network communication protocol that enables full-duplex communication on a single TCP connection. The `WebSocket` communication protocol was standardized as RFC 6455 by IETF in 2011 and supplemented by RFC7936. The `WebSocket` API is also standardized by W3C.

## Inject

:::tabs key:tabs

== Java

```java
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

== Kotlin

```kotlin
import org.springframework.stereotype.Service

import com.tang.commons.websocket.WebSocket

@Service
class CustomServiceImpl(private val webSocket: WebSocket) : CustomService
```

:::

## Push message

:::tabs key:tabs

== Java

```java
// 推送消息到指定用户
webSocket.sendMessage(args);
// 推送消息到所有用户
webSocket.sendAllMessage(args);
```

== Kotlin

```kotlin
// 推送消息到指定用户
webSocket.sendMessage(args)
// 推送消息到所有用户
webSocket.sendAllMessage(args)
```

:::

## Subscribe message

:::tabs key:tabs

== Java

```java
@PostConstruct
public void init() {
    webSocket.subscribe(MessageType.CUSTOM, data -> {
        ......
    });
}
```

== Kotlin

```kotlin
@PostConstruct
fun init() {
    webSocket.subscribe(MessageType.CUSTOM) {
        ......
    }
}
```

:::
