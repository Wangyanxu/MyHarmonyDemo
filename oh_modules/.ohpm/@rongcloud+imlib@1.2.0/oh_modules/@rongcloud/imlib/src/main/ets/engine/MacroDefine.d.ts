/**
 * 会话类型
 * @version 1.0.0
 */
export declare enum ConversationType {
    /**
     * 单聊
     */
    Private = 1,
    /**
     * 群聊
     */
    Group = 3,
    /**
     * 聊天室
     */
    Chatroom = 4,
    /**
     * 系统
     *
     * @discussion 和 iOS Android 保持一致，鸿蒙 SDK 也只能接收系统会话的消息，发送系统会话的消息报错 InvalidArgumentConversationType = 34209
     */
    System = 6,
    /**
     * 应用公众服务。(仅支持私有云)
     *
     * 私有云的公众号不需要手动关注。在私有云管理后台创建的公众号会被该私有云的所有用户关注
     * @version 1.1.0
     */
    AppPublicService = 7
}
/**
 * 数据库状态
 * ```
 * 数据库升级时，会触发升级，再触发打开
 * ```
 * @version 1.1.0
 */
export declare enum DatabaseStatus {
    /**
     * 未打开
     */
    Idle = 0,
    /**
     * 数据库打开成功
     */
    OpenSuccess = 1,
    /**
     * 数据库打开失败
     */
    OpenFailed = 2,
    /**
     * 数据库升级中
     */
    Upgrading = 3,
    /**
     * 数据库升级成功
     */
    UpgradeSuccess = 4,
    /**
     * 数据库升级失败
     */
    UpgradeFailed = 5
}
/**
 * 消息方向
 * @version 1.0.0
 */
export declare enum MessageDirection {
    /**
     * 发送
     */
    Send = 1,
    /**
     * 接收
     */
    Receive = 2
}
/**
 * 消息接收状态
 * @version 1.0.0
 */
export declare class ReceivedStatus {
    /**
     * 消息是否已读
     */
    isRead: boolean;
    constructor();
}
/**
 * 消息发送状态
 * @version 1.0.0
 */
export declare enum SentStatus {
    /**
     * 发送中
     */
    Sending = 10,
    /**
     * 发送失败
     */
    Failed = 20,
    /**
     * 发送成功
     */
    Sent = 30
}
/**
 * 排序
 * @version 1.0.0
 */
export declare enum Order {
    /**
     * 降序
     */
    Descending = 0,
    /**
     * 升序
     */
    Ascending = 1
}
/**
 * @version 1.0.0
 */
export declare enum PushNotificationLevel {
    /**
     * 全部消息通知
     * 注意：超级群设置全部消息通知时
     * 1. @ 消息一定收到推送通知
     * 2. 普通消息的推送频率受到服务端默认推送频率设置的影响，无法做到所有普通消息都通知
     */
    All = -1,
    /**
     * 未设置（向上查询群或者APP级别设置）,存量数据中0表示未设置
     */
    Default = 0,
    /**
     * 群聊和超级群 @所有人 + @自己 时通知；单聊代表消息不通知
     */
    Mention = 1,
    /**
     * 群聊和超级群 @自己 时通知，其它情况不通知；单聊代表消息不通知
     */
    MentionUsers = 2,
    /**
     * 群聊和超级群 @所有人 时通知，其他情况都不通知；单聊代表消息不通知
     */
    MentionAll = 4,
    /**
     * 消息通知被屏蔽，不接收任何消息通知
     */
    Blocked = 5
}
/**
 * 连接状态
 * @version 1.0.0
 */
export declare enum ConnectionStatus {
    /**
     * 等待状态
     */
    Idle = 0,
    /**
     * 连接中
     */
    Connecting = 1,
    /**
     * 连接成功
     */
    Connected = 2,
    /**
     * 无法连接，当网络恢复后，SDK 自动连接
     */
    DisconnectNetworkUnavailable = 10,
    /**
     * 无法连接，调用了 disconnect 接口，主动退出
     */
    DisconnectUserLogout = 11,
    /**
     * 无法连接，License 授权过期（私有云专属）
     */
    DisconnectLicenseExpired = 12,
    /**
     * 无法连接，License 不匹配（私有云专属）
     */
    DisconnectLicenseMismatch = 13,
    /**
     * 无法连接，SDK 信令版本和服务信令版本不一致
     * @note 一般不会出现该问题，如果出现请联系融云
     */
    DisconnectIllegalProtocolVersion = 14,
    /**
     * 无法连接，客户端（移动端 TCP 连接建立时）`info` 字段格式错误
     * @note 一般不会出现该问题，如果出现请联系融云
     */
    DisconnectIdReject = 15,
    /**
     * 无法连接，不支持的平台类型，一般小程序或 PC 未开通
     * @note 一般不会出现该问题，如果出现请联系融云
     */
    DisconnectPlatformUnavailable = 16,
    /**
     * 无法连接，Token 无法解析，或 Token 已过期，请更换 Token 重新连接
     * @note 经常发生在切换开发环境的时候，例如 app 用开发环境的 Token，服务端用生产环境的 appKey，或者相反的场景
     * @discussion 当发生该错误的时候检查一下 APP 使用的 appKey 和 APP Server 使用的 appKey 是否相同
     */
    DisconnectTokenIncorrect = 17,
    /**
     * 无法连接，触发了防黑产规则
     * @note 请 APP 服务自查
     */
    DisconnectNotAuthorized = 18,
    /**
     * 无法连接，包名不合法（移动端使用）
     * @note 一般不会出现该问题，如果出现请联系融云
     */
    DisconnectPackageNameInvalid = 19,
    /**
     * 无法连接，该 AppKey 已经封禁或删除
     * @note 请自行检查融云管理后台该 AppKey 的状态
     */
    DisconnectAppBlockOrDelete = 20,
    /**
     * 无法连接，该用户 ID 已经被封禁
     * @note 请自行检查融云管理后台该用户 ID 的状态
     */
    DisconnectUserBlocked = 21,
    /**
     * 无法连接，用户被同账号其他端踢下线，给用户提示被踢下线
     */
    DisconnectUserKicked = 22,
    /**
     * 无法连接，Token 已过期，请重新获取 Token 再连接
     */
    DisconnectTokenExpired = 23,
    /**
     * 无法连接，Token 中携带 deviceId 时，检测 Token 中 deviceId 与链接设备 deviceId 不一致
     */
    DisconnectDeviceError = 24,
    /**
     * 无法连接，Web 端设置安全域名后，连接端域名不在安全域名范围内
     * @note 一般不会出现该问题，如果出现请联系融云
     */
    DisconnectHostnameError = 25,
    /**
     * 无法连接，开启 `禁止把已在线客户端踢下线` 开关后，该错误码标识已有同类型端在线，禁止链接
     */
    DisconnectOtherDeviceLogin = 26,
    /**
     * 无法连接，连接总数量超过服务设定的并发限定值（私有云专属）
     */
    DisconnectConcurrentLimitError = 27,
    /**
     * 无法连接，客户端连错环境，引发连接拒绝；如使用开发环境 AppKey 连接到生产环境
     */
    DisconnectClusterError = 28,
    /**
     * 无法连接，开启 AppServer 联合鉴权功能后，到 AppServer 认证失败
     * @note 一般不会出现该问题，如果出现请联系融云
     */
    DisconnectAppAuthFailed = 29,
    /**
     * 无法连接，一次性 Token 已经被使用过，重新获取 Token 进行连接
     */
    DisconnectOneTimePasswordUsed = 30,
    /**
     * 无法连接，Token 绑定的平台与登录平台不符
     */
    DisconnectPlatformError = 31,
    /**
     * 无法连接，用户账号已销户，不再进行连接
     */
    DisconnectUserDeleteAccount = 32,
    /**
     * 无法连接，连接超时，需要调用 connect 接口重新进行连接，一般是设备的网络原因
     * @note connect 接口传入的超时时间，在这个时间范围内没有连接成功才会报该错误
     */
    DisconnectConnectionTimeout = 33,
    /**
     * 无法连接，数据库打开失败
     * @note 由用户决定如何处理，用户可以将数据库备份之后再重连
     */
    DisconnectDatabaseOpenFailed = 34
}
