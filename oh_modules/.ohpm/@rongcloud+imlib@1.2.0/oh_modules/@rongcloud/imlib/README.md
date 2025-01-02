# 融云 IMLib SDK

## 1. 环境要求

### 1.1. 编译环境

* DevEco Studio 版本号：5.0.3.906
* 手机系统版本: 5.0.0.12

### 1.2. 设备要求

* 真机
  * 华为 Mate 系列
  * 真机运⾏需要配置证书，参考： https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/ide-signing-V5

* 模拟器
### 1.3. 操作步骤


#### 1.3.1. 创建 IM 应⽤

在融云管理后台创建应⽤。融云官⽹ ： https://www.rongcloud.cn/

获取 appKey 和 Token

#### 1.3.2. 创建鸿蒙应用

项目是您在鸿蒙 AppGallery Connect（以下简称AGC）资源的组织实体，您可以将一个应用的不同平台版本添加到同一个项目中。当您的应用需要使用华为服务时，您需要在AGC中创建您的项目。

https://developer.huawei.com/consumer/cn/doc/app/agc-help-createproject-0000001100334664

## 2. SDK 接⼊流程

当前 SDK 提供 连接、消息、会话、聊天室等功能，详细⻅[接⼝⽂档](https://docs.rongcloud.cn/harmonyOS-imlib)

## 2.1. 安装 SDK 

```shell
ohpm install @rongcloud/imlib
```


* 其他安装方式参考：[导入 SDK](https://docs.rongcloud.cn/harmonyOS-imlib/import)

## 2.2. 其他

* [添加 SDK 依赖权限](https://docs.rongcloud.cn/harmonyOS-imlib/import)

* [初始化 SDK](https://docs.rongcloud.cn/harmonyOS-imlib/init)

* [进行连接](https://docs.rongcloud.cn/harmonyOS-imlib/connection/connect)

更多 SDK 功能请参考: [融云官方文档](https://docs.rongcloud.cn/harmonyOS-imlib)

