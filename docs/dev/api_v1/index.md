# API 开发
## 前言
Luna Forum 提供了完整的 RESTful API，您可以通过 API 来实现对论坛的各种操作。
## Endpoint
Endpoint: `/api/v1/`
## 认证
除 `/api/v1/login` 外，其他接口均要求在请求头中携带 `authorization` 字段，值为 `Bearer <token>`，其中 `<token>` 为用户的登录 token。登录 token 可以通过登录 API 获取。

不携带将以 Guest 身份访问，Guest 仅能进行读操作（仅限公开资源），无法进行写操作。

Guest 身份默认包含 PRIV_REGISTER_ACCOUNT 权限，即为允许注册新账户。