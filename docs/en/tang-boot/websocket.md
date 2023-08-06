# Introduction

`WebSocket` is a network communication protocol that enables full-duplex communication on a single TCP connection. The `WebSocket` communication protocol was standardized as RFC 6455 by IETF in 2011 and supplemented by RFC7936. The `WebSocket` API is also standardized by W3C.

## Inject

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

## Push message

```java
// Push message to specified user
webSocket.sendMessage(args);
// Push message to all users
webSocket.sendAllMessage(args);
```

## Subscribe message

```java
@PostConstruct
public void init() {
    webSocket.subscribe(MessageType.CUSTOM, data -> {
        ......
    });
}
```
