/**
 * 引擎错误码
 */
declare enum EngineError {
    /**
     * 成功
     */
    Success = 0,
    /**
     * SDK 没有初始化，请先调用 init 接口
     */
    ClientNotInit = 33001,
    /**
     * 被对方加入黑名单，发送消息失败
     */
    RejectedByBlackList = 405,
    /**
     * 对方开启了只接收白名单的信息，但己方不在白名单中，发送消息失败
     */
    NotWhitelisted = 407,
    /**
     * 在单聊中已被禁言
     */
    ForbiddenInPrivateChat = 20106,
    /**
     * 系统会话不支持发送该消息
     */
    ConversationNotSupportMessage = 20109,
    /**
     * 发送消息频率过高，1 秒钟最多只允许发送 5 条消息
     */
    MessageSendOverFrequency = 20604,
    /**
     * 请求超出了调用频率限制，请稍后再试
     */
    RequestOverFrequency = 20607,
    /**
     * 发送的消息中包含敏感词（发送方发送失败，接收方不会收到消息）
     */
    MessageIncludeSensitiveWord = 21501,
    /**
     * 消息中敏感词已经被替换（接收方可以收到被替换之后的消息）
     */
    MessageReplacedSensitiveWord = 21502,
    /**
     * 不在该群组中
     */
    NotInGroup = 22406,
    /**
     * 在群组中已被禁言
     */
    ForbiddenInGroupChat = 22408,
    /**
     * 在该聊天室中已被禁言
     */
    ForbiddenInChatroom = 23408,
    /**
     * 已被踢出聊天室
     */
    ChatroomKicked = 23409,
    /**
     * 聊天室不存在
     */
    ChatroomNotExist = 23410,
    /**
     * 聊天室成员超限，开发者可以提交工单申请聊天室人数限制变更。
     */
    ChatroomIsFull = 23411,
    /**
     * 不在该聊天室中
     */
    NotInChatroom = 23406,
    /**
     * 获取用户失败
     */
    GetUserError = 23407,
    /**
     * 聊天室接口参数无效。请确保参数不为 NULL 且有效。
     */
    ChatroomInvalidParameter = 23412,
    /**
     * 查询聊天室历史消息异常。
     */
    QueryChatroomHistoryError = 23413,
    /**
     * 聊天室云存储业务未开通。
     */
    RoamingServiceUnavailableChatroom = 23414,
    /**
     * 聊天室的 kv 属性个数超限，单个聊天室默认上限为 100 个
     * Android, iOS, Web
     */
    ChatroomKvCountExceed = 23423,
    /**
     * 没有权限修改聊天室中已存在的属性值
     * Android, iOS, Web
     */
    ChatroomKvOverwriteInvalidKey = 23424,
    /**
     * 超过聊天室中状态设置频率，1 个聊天室 1 秒钟最多设置和删除状态 100 次
     * Android, iOS, Web
     */
    ChatroomKvCallAPIExceed = 23425,
    /**
     * 聊天室属性自定义设置，您可以在开发者后台免费基础功能页面中开启该功能。
     * Android, iOS, Web
     */
    ChatroomKvStoreUnavailable = 23426,
    /**
     * 聊天室属性不存在
     * Android, iOS, Web
     */
    ChatroomKvNotExist = 23427,
    /**
     * 聊天室批量设置或删除 kv 部分不成功
     * Android, iOS, Web
     */
    ChatroomKvNotAllSuccess = 23428,
    /**
     * 聊天室 kv 设置/删除个数超限，批量操作个数最多 10 个
     * Android, iOS, Web
     */
    ChatroomKvLimit = 23429,
    /**
     * 聊天室设置 kv 失败，出现在两人或者多端同时操作一个 kv。如果出现该错误，为避免和其他端同时操作，请延时一定时间再试
     * Android, iOS, Web
     */
    ChatroomKvConcurrentError = 23431,
    /**
     * 撤回消息参数无效，请确认撤回消息参数是否正确的填写。
     */
    RecallParameterInvalid = 25101,
    /**
     * 未开通单群聊云存储服务
     */
    MessageStorageServiceUnavailable = 25102,
    /**
     * IMLib 撤回消息可以撤回自己发送的消息和别人发送的消息，IM 服务有开关，控制只可以撤回自己发送的消息，当服务该开关打开时，撤回别人的消息会报这个错误
     */
    RecallMessageUserInvalid = 25107,
    /**
     * 远程推送设置参数无效，请确认是否正确的填写了远程推送参数
     */
    PushSettingParameterInvalid = 26001,
    /**
     * 本地会话状态的版本号低于服务端值，需要等待会话状态同步完成
     */
    SettingSyncFailed = 26002,
    /**
     * 消息 uid 为空串或 NULL
     */
    InvalidArgumentMessageUid = 26009,
    /**
     * 请求上传 token 时文件大小错误
     */
    RequestUploadTokenSizeError = 26107,
    /**
     * 无效的公众号。(由会话类型和 Id 所标识的公众号会话是无效的)
     */
    InvalidPublicService = 29201,
    /**
     * 未连接或连接已关闭
     */
    ConnectionClosed = 30001,
    /**
     * 正在断开连接中
     * Rust
     */
    ConnectionClosing = 30027,
    /**
     * Publish & Query 请求响应超时 `SOCKET_SIGNAL_TIMEOUT`
     */
    SocketRecvTimeout = 30003,
    /**
     * 导航请求失败
     */
    NaviReqFailed = 30004,
    /**
     * 导航请求超时
     */
    NaviReqTimeout = 30005,
    /**
     * 消息大小超限，消息体（序列化成 json 格式之后的内容）
     */
    MsgSizeOutOfLimit = 30016,
    /**
     * cmp 信令发送超时
     */
    SocketSendTimeout = 30022,
    /**
     * 导航请求携带 Token 错误
     */
    NaviRespTokenIncorrect = 30024,
    /**
     * License 不匹配（私有云 - 鸿蒙平台）
     */
    NaviLicenseMismatch = 30026,
    /**
     * 信令版本错误
     *
     * 来源：ConnectAckCode = 1 | DisconnectAckCode = 8
     */
    ConnectIllegalProtocolVersion = 31001,
    /**
     * 客户端 info 字段格式错误，正确格式：{平台类型}-{设备信息}-{sdk 版本}。
     *
     * 来源：ConnectAckCode = 2
     */
    ConnectIdReject = 31002,
    /**
     * 不支持的平台类型，一般小程序或 PC 未开通
     *
     * 来源：ConnectAckCode = 3
     */
    ConnectPlatformUnavailable = 31003,
    /**
     * 无法连接，Token 无法解析，或 Token 已过期，请更换 Token 重新连接
     *
     * @note 经常发生在切换开发环境的时候，例如 app 用开发环境的 Token，服务端用生产环境的 appKey，或者相反的场景
     * @discussion 当发生该错误的时候检查一下 APP 使用的 appKey 和 APP Server 使用的 appKey 是否相同
     *
     * 来源：ConnectAckCode = 4
     */
    ConnectTokenIncorrect = 31004,
    /**
     * App 校验未通过（开通了 App 校验功能，但是校验未通过）
     *
     * 来源：ConnectAckCode = 5
     */
    ConnectNotAuthorized = 31005,
    /**
     * 连接重定向，需要清空导航缓存
     *
     * 来源：ConnectAckCode = 6 | DisconnectAckCode = 6
     */
    ConnectRedirect = 31006,
    /**
     * 包名与后台注册信息不匹配，仅移动端使用
     *
     * 来源：ConnectAckCode = 7
     */
    ConnectPackageNameInvalid = 31007,
    /**
     * 该 AppKey 已经封禁或删除
     *
     * 来源：ConnectAckCode = 8
     */
    ConnectAppBlockOrDelete = 31008,
    /**
     * 无法连接，该用户 ID 已经被封禁
     * @note 请自行检查融云管理后台该用户 ID 的状态
     *
     * 来源：ConnectAckCode = 9
     */
    ConnectUserBlocked = 31009,
    /**
     * cmp 异常断开错误错误
     * cmp 服务连接成功后，通知 SDK 用户被同账号其他端踢下线
     * 给用户提示，告知已被提掉线
     */
    DisconnectUserKicked = 31010,
    /**
     * cmp 服务连接成功后，通知 SDK 用户被封禁
     * 给用户提示，告知已被封禁
     */
    DisconnectUserBlocked = 31011,
    /**
     * cmp 服务连接成功后，通知 SDK 用户主动退出
     */
    DisconnectUserLogout = 31012,
    /**
     * Socket 连接异常
     */
    SocketConnectionFailed = 31014,
    /**
     * Socket 关闭输出流失败
     */
    SocketShutdownFailed = 31015,
    /**
     * 连接取消
     */
    ConnectionCancel = 31016,
    /**
     * 通知 SDK Token 过期，APP 重新请求 Token
     *
     * 来源：ConnectAckCode = 10 | DisconnectAckCode = 7
     */
    ConnectTokenExpired = 31020,
    /**
     * Token 中携带 deviceId 时，检测 Token 中 deviceId 与链接设备 deviceId 不一致
     *
     * 来源：ConnectAckCode = 11
     */
    ConnectDeviceError = 31021,
    /**
     * 链路加密认证失败 (移动端链路加密认证失败需要清空导航缓存)
     *
     * 来源：ConnectAckCode = 12
     */
    ConnectHostnameError = 31022,
    /**
     * 开启 `禁止把已在线客户端踢下线` 开关后，该错误码标识已有同类型端在线，禁止链接
     *
     * 来源：ConnectAckCode = 13
     */
    ConnectOtherDeviceLogin = 31023,
    /**
     * 连接总数量超过服务设定的并发限定值（私有云专属）
     *
     * 来源：ConnectAckCode = 14
     */
    ConnectConcurrentLimitError = 31024,
    /**
     * 客户端连错环境，引发连接拒绝；如使用开发环境 app_key 连接到生产环境
     *
     * 来源：ConnectAckCode = 15
     */
    ConnectClusterError = 31025,
    /**
     * 开启 AppServer 联合鉴权功能后，到 AppServer 认证失败
     *
     * 来源：ConnectAckCode = 16
     */
    ConnectAppAuthFailed = 31026,
    /**
     * 一次性 token 已经被使用过，需要重新请求 Token
     *
     * 来源：ConnectAckCode = 17
     */
    ConnectOneTimePasswordUsed = 31027,
    /**
     * Token 绑定的平台与登录平台不符
     *
     * 来源：ConnectAckCode = 18
     */
    ConnectPlatformError = 31028,
    /**
     * 用户账号已销户，不再进行连接，给用户提示，告知账号已注销
     *
     * 来源：ConnectAckCode = 19 | DisconnectAckCode = 9
     */
    ConnectUserDeleteAccount = 31029,
    /**
     * 导航请求证书过期
     * ```
     * 可能原因如下：
     * 1. 私有云服务的证书过期，联系融云私有云
     * 2. 私有云服务不支持鸿蒙平台，请联系融云私有云
     * ```
     *
     * 来源：ConnectAckCode = 20
     */
    ConnectLicenseExpired = 31030,
    /**
     * Kv 存储器未打开
     */
    KvStoreNotOpened = 31510,
    /**
     * Kv 存储器打开失败
     */
    KvStoreOpenFailed = 31511,
    /**
     * Kv 存储器读写错误
     */
    KvStoreIOError = 31512,
    /**
     * Kv 存储器序列化错误
     */
    KvStoreSerializationError = 31513,
    /**
     * Json 解析错误
     */
    JsonParserFailed = 31610,
    /**
     * 图片转换错误
     */
    ImageFormatError = 31611,
    /**
     * 请求文件上传 Token 时错误
     */
    RequestUploadTokenError = 31612,
    /**
     * 获取文件上传 Token 时错误
     */
    GetUploadTokenError = 31613,
    /**
     * 小视频消息压缩失败
     * Rust
     */
    SightMessageCompressError = 31614,
    /**
     * 请求已取消
     * Rust
     */
    RequestCanceled = 33200,
    /**
     * 连接被拒绝，需要清空导航缓存
     */
    ConnectRefused = 32061,
    /**
     * 将消息存储到本地数据时失败。发送或插入消息时，消息需要存储到本地数据库，当存库失败时，会回调此错误码
     */
    MessageSavedError = 33000,
    /**
     * 连接进行中
     */
    ConnectionInProcess = 33006,
    /**
     * 历史消息云存储业务未开通
     */
    CloudStorageForHistoryMessageDisable = 33007,
    /**
     * 连接已存在
     */
    ConnectionExists = 34001,
    /**
     * GIF 消息文件大小超出限制
     */
    GifMessageSizeOutOfLimit = 34003,
    /**
     * 无法连接，连接超时，需要调用 connect 接口重新进行连接，一般是设备的网络原因
     *
     * @note connect 接口传入的超时时间，在这个时间范围内没有连接成功才会报该错误
     */
    ConnectionTimeout = 34006,
    /**
     * 消息不能被扩展，只支持单群聊
     */
    MessageCantExpand = 34008,
    /**
     * 消息扩展字段超限
     */
    MessageExpansionSizeLimitExceed = 34010,
    /**
     * 上传媒体消息失败
     */
    UploadMediaFailed = 34011,
    /**
     * 未注册的消息类型
     */
    MessageNotRegistered = 34021,
    /**
     * 消息扩展不支持该会话类型
     * Android, iOS, Web
     */
    MessageExpandConversationTypeNotMatch = 34025,
    /**
     * 不支持超级群会话
     */
    InvalidArgumentUltraGroupNotSupport = 34022,
    /**
     * 构建 `EngineBuilderParamC` 时传入的 app_key 为 NULL
     * 仅 C_FFI 层使用
     */
    InvalidArgumentAppKey = 34105,
    /**
     * 开发者接口调用时传入的时间戳非法
     */
    InvalidArgumentTimestamp = 34202,
    /**
     * 开发者接口调用时传入 MessageContent 非法
     */
    InvalidArgumentMessageContent = 34205,
    /**
     * 参数 Message 列表非法
     */
    InvalidArgumentMessageVec = 34206,
    /**
     * 开发者接口调用时传入的 ConversationType 非法
     */
    InvalidArgumentConversationType = 34209,
    /**
     * 开发者接口调用时传入的 targetId 非法
     */
    InvalidArgumentTargetId = 34210,
    /**
     * 开发者接口调用时传入的 MessageExpansion 非法
     */
    InvalidParameterMessageExpansion = 34220,
    /**
     * 开发者调用频道相关接口时传入的 channelId 非法
     */
    InvalidArgumentChannelId = 34211,
    /**
     * 开发者 sendMediaMessage 传入的 Message.content 不是多媒体消息
     */
    InvalidArgumentContentNotMedia = 34223,
    /**
     * 开发者接口调用时传入的时间字符串不合法，格式为 "HH:MM:SS"
     */
    InvalidArgumentTimeString = 34224,
    /**
     * 开发者接口调用时传入的枚举值超出定义范围
     * 注：因 C 枚举类型入参超范围时，会因 Undefined Behavior 无法预知结果，不能准确判断。
     * 因此根据 https://github.com/rust-lang/rust-memory-model/issues/41 建议，改由平台层确保传入的枚举值在合法范围内。
     * 仅 C_FFI 层使用（暂未使用）
     */
    InvalidEnumOutOfRange = 34225,
    /**
     * 免打扰级别非法
     */
    InvalidArgumentPushNotificationMuteLevel = 34228,
    /**
     *  messageIds 参数为 NULL 或者数组长度为 0
     */
    InvalidArgumentMessageIdVec = 34229,
    /**
     * 开发者接口调用时传入的 count 非法
     */
    InvalidArgumentCount = 34232,
    /**
     * 开发者调用接口传入的 local path 地址不存在
     */
    InvalidArgumentMediaLocalPath = 34234,
    /**
     * 开发者调用接口传入的 mediaUrl 地址为空
     */
    InvalidArgumentMediaUrl = 34235,
    /**
     * 开发者调用接口传入的 message 参数为空
     * 仅 C_FFI 层使用
     */
    InvalidArgumentMessage = 34243,
    /**
     * 开发者调用接口传入的 sentStatus 参数错误
     * 仅 C_FFI 层使用
     */
    InvalidArgumentSentStatus = 34244,
    /**
     * 聊天室设置 kv 失败，参数 key 非法
     */
    ChatroomKvInvalidKey = 34260,
    /**
     * 聊天室设置 kv 失败，参数 key 数组非法
     */
    ChatroomKvInvalidKeyVec = 34261,
    /**
     * 聊天室设置 kv 失败，参数 value 非法
     */
    ChatroomKvInvalidValue = 34262,
    /**
     * 聊天室设置 kv 失败，参数 key 和 value 数组非法
     */
    ChatroomKvInvalidKeyValueVec = 34263,
    /**
     * 参数 MessageDirection 为空
     */
    InvalidArgumentMessageDirectionEmpty = 34267,
    /**
     * 开发者接口调用时传入的 objectName 非法
     * 仅 C_FFI 层使用
     */
    InvalidArgumentObjectName = 34271,
    /**
     * 参数 limit 非法
     */
    InvalidArgumentLimit = 34279,
    /**
     * 参数 MessageDirection 非法（发送消息时没有使用 Send）
     */
    InvalidArgumentMessageDirection = 34280,
    /**
     * 设置免打扰的 span minutes 非法，支持范围 [1, 1439]
     */
    InvalidArgumentSpanMinutes = 34283,
    /**
     * 开发者接口调用时传入的 ConversationTypeVec 列表非法
     */
    InvalidArgumentConversationTypeVec = 34284,
    /**
     * 调用 `rcim_engine_builder_set_navi_server` 时，传入的 url 为 NULL
     * 仅 C_FFI 层使用
     */
    InvalidArgumentNaviUrl = 34286,
    /**
     * 开发者接口调用时传入的 ConversationIdentifierVec 列表非法
     */
    InvalidArgumentConversationIdentifierVec = 34287,
    /**
     * 当前会话类型不支持定向消息
     */
    DirectionalMessageNotSupport = 34296,
    /**
     * 数据库未打开
     */
    DatabaseNotOpened = 34301,
    /**
     * 数据库打开错误
     */
    DatabaseOpenFailed = 34302,
    /**
     * 数据库读写错误
     */
    DatabaseIOError = 34303,
    /**
     * 数据库序没有查到数据
     */
    DatabaseTargetNotFound = 34304,
    /**
     * 网络数据转换失败
     */
    NetDataParserFailed = 34305,
    /**
     * 数据库线程错误
     */
    DatabaseThreadError = 34316,
    /**
     * 调用接口的同时，引擎已释放
     */
    EngineDropped = 34400,
    /**
     * 小视频时间长度超出限制，默认小视频时长上限为 2 分钟
     * Android,iOS,Web
     */
    SightMsgDurationLimit = 34002,
    /**
     * 接口传入的 `RcimEngineSync*` 为 NULL 时返回
     * 仅 C_FFI 层使用
     */
    InvalidArgumentEngineSync = 34401,
    /**
     * 接口传入的 `RcimEngineBuilder*` 为 NULL 时返回
     * 仅 C_FFI 层使用
     */
    InvalidArgumentEngineBuilder = 34402,
    /**
     * 构建 `EngineBuilderParamC` 时，传入的 device_id 为 NULL
     * 仅 C_FFI 层使用
     */
    InvalidArgumentDeviceId = 34403,
    /**
     * 构建 `EngineBuilderParamC` 时，传入的 package_name 为 NULL
     * 仅 C_FFI 层使用
     */
    InvalidArgumentPackageName = 34404,
    /**
     * 构建 `EngineBuilderParamC` 时，传入的 sdk_version 或 sdk_version_vec 为 NULL，或 sdk_version_vec_len = 0
     * 仅 C_FFI 层使用
     */
    InvalidArgumentSdkVersion = 34405,
    /**
     * 调用 `rcim_engine_builder_set_store_path` 或 `rcim_engine_builder_set_file_path` 时，传入的 path 为 NULL
     */
    InvalidArgumentFileStoragePath = 34406,
    /**
     * 调用 `rcim_engine_connect` 时传入的 token 为 NULL 或长度超范围
     */
    InvalidArgumentToken = 34407,
    /**
     * 开发者调用接口传入的 messageId 参数非法
     */
    InvalidArgumentMessageId = 34408,
    /**
     * 调用 `rcim_engine_register_message_types` 时传入的 type_vec 为 NULL 或 type_vec_len 为 0
     * 仅 C_FFI 层使用
     */
    InvalidArgumentMessageType = 34409,
    /**
     * rust 新增，无法解析成 MediaMessage
     */
    InvalidArgumentNotMediaMessage = 34410,
    /**
     * 用户 ID 为空
     */
    InvalidArgumentUserIdEmpty = 34411,
    /**
     * 发送语音消息时，传入的语音长度非法
     */
    InvalidArgumentAudioDuration = 34413,
    /**
     * 日志插入时参数无效
     */
    InvalidArgumentLogInfo = 34414,
    /**
     * 接口传入的 RcimEngineBuilderParamC* 为 NULL   时返回
     * 仅 C_FFI 层使用
     */
    InvalidArgumentEngineBuilderParam = 34415,
    /**
     * 构建 `EngineBuilderParamC` 时，传入的 device_model 为 NULL
     * 仅 C_FFI 层使用
     */
    InvalidArgumentDeviceModel = 34416,
    /**
     * 构建 `EngineBuilderParamC` 时，传入的 device_manufacturer 为 NULL
     * 仅 C_FFI 层使用
     */
    InvalidArgumentDeviceManufacturer = 34417,
    /**
     * 接口传入的 push_token_vec 为 NULL 或 push_token_vec_len 为 0 时返回
     * 仅 C_FFI 层使用
     */
    InvalidArgumentPushTokenVec = 34418,
    /**
     * 接口传入的 push_type 为 NULL 时返回
     * 仅 C_FFI 层使用
     */
    InvalidArgumentPushType = 34419,
    /**
     * 接口传入的 push_token 为 NULL 时返回
     * 仅 C_FFI 层使用
     */
    InvalidArgumentPushToken = 34420,
    /**
     * 开发者接口调用时传入的 SenderId 非法 All: 34421
     */
    InvalidArgumentSenderId = 34421,
    /**
     * 免打扰级别数组非法
     */
    InvalidArgumentPushNotificationMuteLevelVec = 34422,
    /**
     * 调用 `rcim_engine_get_connection_status` 时传入的 out_status 为 NULL
     * 仅 C_FFI 层使用
     */
    InvalidArgumentConnectionStatus = 34423,
    /**
     * 调用 `rcim_engine_get_version` 时传入的 version 为 NULL
     * 仅 C_FFI 层使用
     */
    InvalidArgumentVersion = 34424,
    /**
     * 构建 `EngineBuilderParamC` 时，传入的 os_version 为 NULL
     * 仅 C_FFI 层使用
     */
    InvalidArgumentOsVersion = 34425,
    /**
     * 构建 `EngineBuilderParamC` 时，传入的 app_version 为 NULL
     * 仅 C_FFI 层使用
     */
    InvalidArgumentAppVersion = 34426,
    /**
     * 构建 `rcim_engine_builder_set_statistic_server` 时，传入的 url 为 NULL
     * 仅 C_FFI 层使用
     */
    InvalidArgumentStatisticUrl = 34427,
    /**
     * 构建 rcim_engine_save_text_message_draft 时，掺入的 draft 为 NULL
     * 仅 C_FFI 层使用
     */
    InvalidArgumentDraft = 34428,
    /**
     * 构建 rcim_engine_search_local_conversations 时，插入的 keyword 为 NULL
     * 仅 C_FFI 层使用
     */
    InvalidArgumentKeyword = 34429,
    /**
     * 开发者接口调用时传入的 offset 非法
     */
    InvalidArgumentOffset = 34430,
    /**
     * 开发者接口调用时传入的 object_name_vec 非法
     */
    InvalidArgumentObjectNameVec = 34431,
    /**
     * 开发者接口调用时传入的 time_interval 非法
     * 仅 C_FFI 层使用
     */
    InvalidArgumentTimeInterval = 34432,
    /**
     * 开发者接口调用时传入的 timeout_sec 非法
     * 仅 C_FFI 层使用
     */
    InvalidArgumentTimeoutSeconds = 34433,
    /**
     * 加入聊天室 Id 为 NULL
     * 仅 C_FFI 层使用
     */
    InvalidArgumentChatroomId = 36001,
    /**
     * RTC 发送信令方法名为 NULL
     * 仅 C_FFI 层使用
     */
    InvalidArgumentRtcMethodName = 36002,
    /**
     * RTC 发送 KV 信令 Key 为 NULL
     * 仅 C_FFI 层使用
     */
    InvalidArgumentRtcKey = 36003,
    /**
     * RTC 发送 KV 信令 Value 为 NULL
     * 仅 C_FFI 层使用
     */
    InvalidArgumentRtcValue = 36004
}
export { EngineError };
