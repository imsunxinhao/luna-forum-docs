# 快速开始

5 分钟快速部署一个属于你的 Luna Forum！

## 准备步骤

建议使用 Ubuntu 或 Debian 作为部署 Luna Forum 的机器。若您熟悉其它系统也可使用其它系统（如 CentOS），不同系统的运行时安装步骤可能有所不同，此处仅提供 Ubuntu / Debian 系统的教程。

~~（实际上还是因为我懒的写别的系统）~~

::: warn 请注意
我们不建议继续使用 `Ubuntu 20.04`、`Ubuntu 22.04`，Canonical 已停止对其的支持，请尽快升级到 Ubuntu 26.04 LTS。
:::

## 1. 安装 Git

如果你是 Ubuntu / Debian 系统，可直接使用 `apt` 安装 `git`。

```bash
sudo apt install git
```

## 2. 安装 Node.JS

你可以从官方处下载 Node.JS 二进制包，将其使用 xz 解压缩后创建 `Symlink` 即可。

我们推荐使用 Node.JS 22+，您可以使用以下命令安装到 `/usr/local/nodejs`。

```bash
wget https://nodejs.org/dist/v22.12.0/node-v22.12.0-linux-x64.tar.xz
tar -xJf node-v22.12.0-linux-x64.tar.xz
sudo mv node-v22.12.0-linux-x64 /usr/local/nodejs
sudo ln -s /usr/local/nodejs/bin/node /usr/local/bin/node
sudo ln -s /usr/local/nodejs/bin/npm /usr/local/bin/npm
sudo ln -s /usr/local/nodejs/bin/npx /usr/local/bin/npx
```

## 3. 安装 MongoDB

建议通过导入公钥后通过包管理器安装 MongoDB。

导入公钥：

```bash
curl -fsSL https://www.mongodb.org/static/pgp/server-7.0.asc | \
   sudo gpg -o /usr/share/keyrings/mongodb-server-7.0.gpg \
   --dearmor
```

添加 `deb` 软件源：（此处若系统版本不同会有差异，请将 noble 替换为你的 Ubuntu 版本代号）
```bash
echo "deb [ signed-by=/usr/share/keyrings/mongodb-server-7.0.gpg ] https://repo.mongodb.org/apt/ubuntu noble/mongodb-org/7.0 multiverse" | \
   sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list
```

## 4. 安装 pm2

pm2 是我们推荐的进程管理器，可通过 npm 来安装。

```bash
npm install -g pm2
```

启动 mongodb：

```
pm2 start "mongod" --name "mongodb"
```

## 5. 安装 Luna Forum

### 5.1 克隆项目

```bash
git clone https://github.com/imsunxinhao/luna-forum.git
```

### 5.2 配置文件

配置文件（config.json）分为三个部分，数据库连接、插件列表、安全，具体模板请查看 `config.example.json`。

**数据库连接**：数据库地址（mongodb 下的 uri），请填写你数据库地址，如果没有配置的话填写 `mongodb://localhost:27017` 即可，其他情况请注意拼接密码和用户名。

**插件列表**：若无自定义功能需求，请不要更改这一部分。

**安全**：建议将 `jwt_secret` 设为随机字符串，并不要泄露。

### 5.3 安装依赖

```
npm install
```

### 5.4 直接启动 🚀

```
pm2 start "npm start" --name luna-forum
```
