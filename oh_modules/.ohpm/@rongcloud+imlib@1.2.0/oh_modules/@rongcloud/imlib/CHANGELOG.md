# 更新日志

## 1.2.0
发版时间：2024/11/01

- 新增：完全支持API12 https://developer.huawei.com/consumer/cn/notice/20241010/
- 修复：修复删除本地消息接口崩溃问题
- 新增：新增查询会话接口 `searchConversationsWithResult`
- 废弃：废弃接口 `searchConversations`，用 `searchConversationsWithResult` 替代
- 新增：channelId
- 修复：无法清空草稿

### 连接
- 新增：设置断线重连时是否踢出重连设备接口 `setReconnectKickEnable`

### 消息
- Message 扩展
  - 新增字段 `canIncludeExpansion` & `expansion`
  - 新增：消息扩展监听 `MessageExpansionListener`
  - IMEngine 新增方法
    - 设置扩展监听：`setMessageExpansionListener`
    - 更新扩展：`updateMessageExpansion`
    - 移除扩展：`removeMessageExpansion`
- 新增：插入单条消息方法 `insertMessage`
- 新增普通消息：
  - 命令消息：`CommandMessage`
  - 命令提醒消息类（小灰条）：`CommandNotificationMessage`
  - 通知类消息（小灰条）：`InformationNotificationMessage`
  - 引用消息：`ReferenceMessage`
  - 图文消息：`RichContentMessage`
- 新增媒体消息：
  - GIF 消息：`GIFMessage`
  - 小视频消息：`SightMessage`
- 撤回消息新增字段 `originalMessageContent`

### 会话
- 新增： `SearchConversationResult`

## 1.1.0
发布日期：2024/08/29

**重要**
- 枚举值：`NaviRespLicenseExpired` 改为 `ConnectLicenseExpired`
- 枚举值：`CmpRecvTimeOut` 改为 `SocketRecvTimeout`
- ChatroomStatusListener 从抽象类改为 interface，如果报错，需要删除 entry/build 目录重新编译
- 修复：IM 方法回调中再调用 IM 方法，偶现的卡死情况
- 修复：IM 连接偶现的 31002。原因是偶现读取的系统版本号类似 `OpenHarmony-5.0.0.36` 这类包含 `-` 的特殊字符无法被 IM 服务识别
- 修复：https 请求偶现的 openssl 崩溃
- 修复：手机网络切换时偶现的崩溃


### 数据库
**新增功能**
- 新增枚举值
  - DatabaseStatus
- 新增监听
  - setDatabaseStatusListener

### 消息
**新增功能**
- 新增位置消息：LocationMessage
- 新增方法
  - deleteRemoteMessages

**问题修复**
- 修复：发送失败的消息进行重发，出现一条失败消息一条成功消息
- 修复：发送失败的消息，Message 对象为空
- 修复：媒体消息发送失败，从数据库获取的发送状态为发送中，期望为发送失败
- 修复：IGetRemoteMsgOption isCheckDup 错误
- 修复：UserInfo decode 时错误的将 userId 解析为 id


### 推送
**新增功能**
- 新增类
  - IosConfig
  - AndroidConfig
  - HarmonyConfig

### 会话

**新增功能**
- 新增方法
  - getUnreadConversations
  
**问题修复**
  - 修复：置顶或者免打扰之后，Conversation lastSentTime 被错误的更新为 lastOperateTime 

### 搜索
**新增功能**

- 新增方法
  - searchConversations
  - searchMessages
  - searchMessagesInTimeRange
  - searchMessagesByUser
- 新增类
  - ISearchMessageInTimeRangeOption

### 聊天室
**新增功能**

- 新增方法
  - setChatroomEntries
  - deleteChatroomEntries
  - getChatroomEntries
  - getAllChatroomEntries
  - setChatroomKVStatusListener
  - setChatroomMemberListener
- 新增类
  - ChatroomKVStatusListener
  - ChatroomMemberAction
  - ChatroomMemberActionListener
  - ChatroomNotifyEventListener
  - ChatroomSyncEvent
  - ChatroomMemberBlockEvent
  - ChatroomMemberBanEvent
- 新增枚举值
  - ChatroomMemberActionType


### 公众号
**公众号功能仅支持私有云**

**新增功能**

- 新增会话类型
  - 应用公众服务：AppPublicService
- 新增类
  - PublicServiceMenuItem
  - PublicServiceInfo
- 新增枚举值
  - PublicServiceMenuItemType
- 新增方法
  - getPublicServiceList
  - getPublicService
  

### 输入状态
**新增功能**
- 新增方法
  - setTypingStatusListener
  - sendTypingStatus
  - setTypingStatusInterval

## 1.0.3

发布日期：2024/08/06

**新增功能**
- 鸿蒙要求上架的 SDK 支持字节码，1.0.3 版本开始支持字节码
  - app 需要修改配置 **useNormalizedOHMUrl**，详细见融云官网鸿蒙 FAQ 文档

**问题修复**
- 修复：置顶或者免打扰之后，Conversation lastSentTime 被错误的更新为 lastOperateTime

## 1.0.2

发布日期：2024/07/10

**新增功能**
- 新增加入聊天室方法：**joinChatroom**
- 新增错误码：
    - InvalidArgumentSenderId = 34421
    - InvalidArgumentPushNotificationMuteLevelVec = 34422,
    - NaviLicenseMismatch = 30026
    - SocketConnectionFailed = 31014
    - SocketShutdownFailed = 31015
    - ConnectionCancel = 31016
    - RequestUploadTokenSizeError = 26107
- 新增连接状态
    - DisconnectLicenseMismatch

**问题修复**
- TS 层 bool 值被错误转化为 0、1，而非 bool 值
- 平台统一性：为保持与其他平台统一，UserInfo 废弃 portraitUrl，新增 portraitUri
- 私有云：需要根据导航下发信息，判断当前 License 是否支持鸿蒙平台，如不支持则报错：NaviLicenseMismatch
- 私有云：支持导航 V2。


## 1.0.1

发布日期：2024/07/02

**新增功能**

- 增加 **x86_64** 架构，支持 **Windows(64-bit)-模拟器** 和 **Mac(x86)-模拟器**

## 1.0.0

发布日期：2024/07/01

- **鸿蒙 SDK 初版**
