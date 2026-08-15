# 注册 API 端点

Endpoint: `/api/v1/register`

请求方式：`POST`

:::info
特别地，本接口无需再请求头中携带 token 即可请求。
:::

## 请求体

| 字段 | 类型 | 描述 | Params |
| --- | --- | --- | --- |
| username | string | 用户名 | 必填 |
| password | string | 密码 | 必填 |
| email | string | 邮箱 | 必填 |

**e.g. :**
```json
{
  "username": "imsunxinhao",
  "password": "123456666666",
  "email": "imsunxinhao@163.com"
}
```

## 响应体

| 字段 | 类型 | 描述 |
| --- | --- | --- |
| success | boolean | 注册是否成功（成功为 true，失败为 false） |
| uid | number | 注册成功后返回的 UID（UID 唯一） |
| username | string | 注册成功后返回的用户名 |
| token | string | 注册成功后返回的 token，后续请求需要携带该 token |

返回例：

`HTTP 201 Created`

```json
{
    "success": true,
    "uid": 1,
    "username": "imsunxinhao",
    "token": "eyJhbGciOiOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsInVzZXJuYW1lIjoiaW1zdW54aW5oYW8iLCJpYXQiOjE2OTQ0NzY4MDAsImV4cCI6MTY5NDQ4MDQwMH0.3g7kZxjv7zFq3G9K8K8K8K8K8K8K8K8K8K8K8K8K8K8",
}
```

## 常见错误

| HTTP 错误码 | 错误描述 | 描述 |
| --- | --- | --- |
| 401 | Registration not allowed | 无权注册账户 |
| 409 | Username or email already exists | 用户名或邮箱已存在 |
