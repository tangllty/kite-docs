# 简介

`WebSocket` 是一种网络通信协议，可在单个 TCP 连接上进行全双工通信。`WebSocket` 通信协议于 2011 年被 IETF 定为标准 RFC 6455，并由 RFC7936 补充规范。`WebSocket` API 也被 W3C 定为标准。

## 推送消息

```typescript
proxy.$socket.sendMessage(args)
```

## 订阅消息

```typescript
proxy.$socket.subscribe(MessageType.CUSTOM, data => {
    ......
})
```
