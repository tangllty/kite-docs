# Introduction

`WebSocket` is a network communication protocol that enables full-duplex communication on a single TCP connection. The `WebSocket` communication protocol was standardized as RFC 6455 by IETF in 2011 and supplemented by RFC7936. The `WebSocket` API is also standardized by W3C.

## Push message

```typescript
proxy.$socket.sendMessage(args)
```

## Subscribe message

```typescript
proxy.$socket.subscribe(MessageType.CUSTOM, data => {
    ......
})
```
