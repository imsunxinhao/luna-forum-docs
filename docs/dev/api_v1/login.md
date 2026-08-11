# 登录 API 端点

Endpoint: `/api/v1/login`

请求方式：`POST`

:::info
特别地，本接口无需再请求头中携带 token 即可请求。
:::

## 请求体

| 字段 | 类型 | 描述 | Params |
| --- | --- | --- | --- |
| username | string | 用户名 | 必填 |
| password | string | 密码 | 必填 |

**e.g. :**
```json
{
  "username": "imsunxinhao",
  "password": "123456666666"
}
```

## 响应体

| 字段 | 类型 | 描述 |
| --- | --- | --- |
| success | boolean | 登录是否成功（成功为 true，失败为 false） |
| token | string | 登录成功后返回的 token，后续请求需要携带该 token |
| user | object | 登录成功后返回的用户信息 |
| user.uid | number | 用户的 UID，该数值唯一 |
| user.username | string | 用户名 |


返回例：

```json
{
    "success": true,
    "token": "eyJhbGciOiOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsInVzZXJuYW1lIjoiaW1zdW54aW5oYW8iLCJpYXQiOjE2OTQ0NzY4MDAsImV4cCI6MTY5NDQ4MDQwMH0.3g7kZxjv7zFq3G9K8K8K8K8K8K8K8K8K8K8K8K8K8K8",
    "user": {
        "uid": 1,
        "username": "imsunxinhao"
    }
}
```

## 常见错误

| HTTP 错误码 | 错误描述 | 描述 |
| --- | --- | --- |
| 401 | Invalid credentials | 无效凭据（缺少字段，用户名或密码错误，用户不存在） |
| 403 | User cannot login | 用户被封禁 |