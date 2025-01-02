import List from "@ohos.util.List";
import { ChatroomInfo } from './chatroom/model/ChatroomInfo';
import { ChatroomJoinedInfo } from './chatroom/model/ChatroomJoinedInfo';
import { ConversationIdentifier } from './conversation/ConversationIdentifier';
import { InitOption } from './InitOption';
import { ConnectionStatus, ConversationType, DatabaseStatus, PushNotificationLevel } from './MacroDefine';
import { RecallNotificationMessage } from './message/content/normal/RecallNotificationMessage';
import { Message } from './message/Message';
import { MessageBlockInfo } from './message/model/MessageBlockInfo';
import { ReceivedInfo } from './message/model/ReceivedInfo';
import { ConversationStatusInfo } from './conversation/model/ConversationStatusInfo';
import { Conversation } from './conversation/Conversation';
import { ICountOption, IGetLocalMsgByIdOption, IGetLocalMsgByTimeOption, IGetRemoteMsgOption, ISearchMessageInTimeRangeOption, ISendMsgOption } from './message/option/MessageOption';
import common from '@ohos.app.ability.common';
import { MessageContentConstructor, MessageFlag } from './message/content/MessageContent';
import { IGetConversationOption, IQuietHoursOption, ISetConversationTopOption } from './conversation/option/ConversationOption';
import { EngineError } from './EngineError';
import { IAsyncResult, IConnectResult } from './IResult';
import { ChatroomStatusListener } from './chatroom/listener/ChatroomStatusListener';
import { LogLevel } from './log/Log';
import { PublicServiceInfo } from './publicservice/model/PublicServiceInfo';
import { ChatroomKVStatusListener } from './chatroom/listener/ChatroomKVStatusListener';
import { ChatroomMemberActionListener } from './chatroom/listener/ChatroomMemberActionListener';
import { ChatroomNotifyEventListener } from './chatroom/listener/ChatroomNotifyEventListener';
import { TypingStatus } from './message/model/TypingStatus';
import { MessageExpansionListener } from './message/listener/MessageExpansionListener';
import { HashMap } from '@kit.ArkTS';
import { SyncConversationReadStatusListener } from './conversation/listener/SyncConversationReadStatusListener';
import { SearchConversationResult } from './conversation/model/SearchConversationResult';
/**
 * IM SDK 核心类
 * @version 1.0.0
 */
declare class IMEngine {
    private static engine;
    private impl;
    private constructor();
    /**
     * 单例对象
     * @version 1.0.0
     */
    static getInstance(): IMEngine;
    /**
     * 初始化 SDK
     * @param context 上下文，为空则初始化失败
     * @param appKey 融云 appKey，为空则初始化失败
     * @param initOption 初始化配置，见 InitOption
     * @version 1.0.0
     */
    init(context: common.Context, appKey: string, initOption: InitOption): void;
    /**
     * 获取 SDK 版本号
     * @returns 版本号
     * @version 1.0.0
     */
    getVersion(): string;
    /**
     * 上报 APP 版本信息，服务端支持按上报的 App 版本处理自定义消息的推送内容
     *
     * @param ver APP 版本，string 类型，非空，长度小于 20, 示例如 "1.1.0"
     * @note 当 SDK 初始化时就会用该字段，所以必须在 init 之前调用
     * @version 1.0.0
     */
    setAppVersion(ver: string): void;
    /**
     * 上设置断线重连时是否踢出重连设备。
     * 用户没有开通多设备登录功能的前提下，同一个账号在一台新设备上登录的时候，会把这个账号在之前登录的设备上踢出。
     * 由于 SDK 有断线重连功能，存在下面情况： 用户在 A 设备登录，A 设备网络不稳定，没有连接成功，SDK 启动重连机制。 用户此时又在 B 设备登录，B 设备连接成功。 A
     * 设备网络稳定之后，用户在 A 设备连接成功，B 设备被踢出。 这个接口就是为这种情况加的。
     *
     * @param enable 设置为 true 时，SDK 重连的时候发现此时已有别的设备连接成功，踢出当前重连设备，不再强行踢出别的设备
     * @note 当 SDK 初始化时就会用该字段，所以必须在 init 之前调用
     * @note 该功能需要提工单，在服务端开通此功能后，客户端调用该方法才生效
     * @version 1.2.0
     */
    setReconnectKickEnable(enable: boolean): void;
    /**
     * 设置鸿蒙推送 token
     *  ```
     * 1. SDK 初始化之前设置：SDK 会将推送 token 缓存，连接成功后上报
     * 2. SDK 初始化之后连接之前设置：连接成功后 SDK 自动上报
     * 3. SDK 连接成功后设置：SDK 立即上报
     * ```
     * @param pushToken 推送 token
     * @version 1.0.0
     */
    setPushToken(pushToken: string): void;
    /**
     * 设置数据库状态监听
     * ```
     * 数据库打开的时机：
     * 1. IMToken 首次连接：SDK 不知道对应的用户 Id，所以必须等到连接成功才能打开数据
     * 2. 使用相同 IMToken 再次连接：相同的 IMToken 一定代表相同的用户 Id，所以 SDK 先打开数据库后连接。凭借该特性可以在无网时立即打开数据库
     * 3. 更换新的 IMToken 再次连接：逻辑同 IMToken 首次连接，SDK 不知道对应的用户 Id，所以必须等到连接成功才能打开数据
     * ```
     * @param listener 监听
     * @discussion init 之后 connect 之前调用。connect 成功之后调用不会有任何效果
     * @version 1.1.0
     */
    setDatabaseStatusListener(listener: (status: DatabaseStatus) => void): void;
    /**
     * 设置控制台日志级别
     * @param level 日志级别，用于过滤控制台的日志输出，初始化之后设置
     * @discussion 例如：填入 LogLevel.None ，SDK 将不再控制台输出日志
     * @discussion 例如：填入 LogLevel.Warn ，SDK 将会在控制台输出 Warn 和 Error 的日志
     * @version 1.0.0
     */
    setLogLevel(level: LogLevel): void;
    /**
     * 连接 IM
     *
     * 调用该接口，SDK 会在 timeLimit 秒内尝试重连，直到出现下面三种情况之一
     * ```
     * 第一、连接成功，回调 IConnectResult.code === EngineError.Success
     * 第二、超时，回调 IConnectResult.code === EngineError.ConnectionTimeout，需要手动调用该接口继续连接
     * 第三、出现 SDK 无法处理的错误，回调 IConnectResult.code 为具体的错误码
     *
     * 常见的错误如下：
     * ClientNotInit ：SDK 没有初始化，请先调用 init 接口
     *
     * NaviRespTokenIncorrect ：检查一下 APP 使用的 appKey 和 APP Server 使用的 appKey 是否相同
     * ConnectTokenIncorrect ：检查一下 APP 使用的 appKey 和 APP Server 使用的 appKey 是否相同
     *
     * ConnectOneTimePasswordUsed ：重新请求 Token
     * ConnectPlatformError ：重新请求 Token
     * ConnectTokenExpired ：重新请求 Token
     *
     * ConnectAppBlockOrDelete ： 给用户提示 AppKey 已经封禁或删除
     *
     * ConnectUserBlocked ：给用户提示被封禁
     * DisconnectUserKicked ：给用户提示被提掉线
     * DisconnectUserBlocked ：给用户提示被封禁
     * ConnectUserDeleteAccount ：给用户提示已销号
     * ```
     *
     * @param token 从您服务器端获取的 token (用户身份令牌)
     * @param timeout 超时时间，整型，单位秒，timeout <= 0：不设置超时时长，一直连接直到成功或失败；timeout > 0: 在对应的时间内连接未成功则返回超时错误
     * @returns 连接结果
     *
     * @note 连接成功后，SDK 将接管所有的重连处理。当因为网络原因断线的情况下，SDK 会不停重连直到连接成功为止，不需要您做额外的连接操作。
     *
     * @see IConnectResult
     * @version 1.0.0
     */
    connect(token: string, timeout: number): Promise<IConnectResult>;
    /**
     * 设置连接状态监听。每个连接状态都有详细的描述和处理意见
     * ```
     * 常见的错误如下：
     * DisconnectTokenIncorrect ： 检查一下 APP 使用的 appKey 和 APP Server 使用的 appKey 是否相同
     * DisconnectAppBlockOrDelete : 给用户提示该 AppKey 已经封禁或删除
     * DisconnectUserBlocked ：给用户提示已经被封禁
     * DisconnectUserKicked ： 给用户提示被提掉线
     * DisconnectTokenExpired ： 重新请求 Token
     * DisconnectOneTimePasswordUsed ： 重新请求 Token
     * DisconnectUserDeleteAccount ： 给用户提示已销户
     * DisconnectConnectionTimeout ： 连接超时，需要主动调用连接接口
     * DisconnectDatabaseOpenFailed ：由用户决定如何处理，用户可以将数据库备份之后再重连
     * ```
     * @param listener 监听
     * @see ConnectionStatus
     * @version 1.0.0
     */
    setConnectionStatusListener(listener: (status: ConnectionStatus) => void): void;
    /**
     * 获取当前连接状态
     * @returns 连接状态
     * @see ConnectionStatus
     * @version 1.0.0
     */
    getCurrentConnectionStatus(): Promise<IAsyncResult<ConnectionStatus>>;
    /**
     * 获取当前用户 ID
     * @returns 连接成功后才会有值
     * @version 1.0.0
     */
    getCurrentUserId(): Promise<IAsyncResult<string>>;
    /**
     * 断开连接
     * @param isReceivePush 是否接受推送
     * @note SDK 在前后台切换或者网络出现异常都会自动重连，会保证连接的可靠性，除非您的 App 逻辑需要登出，否则一般不需要调用此方法进行手动断开
     * @version 1.0.0
     */
    disconnect(isReceivePush: boolean): void;
    /**
     * 设置消息接收监听
     * @param listener 监听
     * @note 刷新逻辑参考 ReceivedInfo
     * @version 1.0.0
     */
    setMessageReceivedListener(listener: (message: Message, info: ReceivedInfo) => void): void;
    /**
     * 设置消息撤回监听，撤回了之后，原始消息会变成 RecallNotificationMessage 消息
     * @param listener 监听
     * @version 1.0.0
     */
    setMessageRecalledListener(listener: (message: Message, recallMessage: RecallNotificationMessage) => void): void;
    /**
     * 设置消息敏感词拦截监听
     * @param listener 监听
     * @discussion 当发送消息触发敏感词拦截的时候，会触发该回调
     * @see MessageBlockInfo
     * @version 1.0.0
     */
    setMessageBlockedListener(listener: (blockInfo: MessageBlockInfo) => void): void;
    /**
     * 发送消息
     * ```
     * 如果遇到 DatabaseNotOpened = 34301 ，原因是在 IM 连接成功前发送了消息
     * IM 连接成功后 SDK 才会打开对应用户的消息数据库
     * ```
     * @param message 消息对象
     * @param option 消息发送的配置
     * @param saveCallback 消息入库的回调，
     * @returns 消息发送结果
     * @discussion 只有入库成功才会走 savedCallback，其他的情况：非法参数、入库失败、发送不入库的消息等都不会走 savedCallback 直接走 resultCallback
     * @note SDK 内置消息都有推送，自定义消息必须设置 Message.pushConfig
     * @version 1.0.0
     */
    sendMessage(message: Message, option: ISendMsgOption, saveCallback: (msg: Message) => void): Promise<IAsyncResult<Message>>;
    /**
     * 发送媒体消息
     * ```
     * 如果遇到 DatabaseNotOpened = 34301 ，原因是在 IM 连接成功前发送了消息
     * IM 连接成功后 SDK 才会打开对应用户的消息数据库
     * ```
     * @param message 消息体
     * @param option 消息发送的配置
     * @param saveCallback 消息发送的配置
     * @param progressCallback 媒体文件上传进度
     * @returns 媒体消息发送结果
     * @discussion 只有入库成功才会走 savedCallback，其他的情况：非法参数、入库失败、发送不入库的消息等都不会走 savedCallback 直接走 resultCallback
     * @version 1.0.0
     */
    sendMediaMessage(message: Message, option: ISendMsgOption, saveCallback: (msg: Message) => void, progressCallback: (msg: Message, progress: number) => void): Promise<IAsyncResult<Message>>;
    /**
     * 下载媒体消息
     * @param messageId 消息 id
     * @returns 媒体消息下载成功的本地路径，存储路径见 InitOption.mediaSavePath
     * @note 调用该接口下载成功后，消息的本地路径会保存数据库中；相同的消息重复下载，会直接返回本地路径
     * @version 1.0.0
     */
    downloadMediaMessage(messageId: number): Promise<IAsyncResult<string>>;
    /**
     * 撤回消息
     * @param message 需要撤回的消息，发送成功的消息才能撤回（必须有有效的 MessageUid）
     * @returns 撤回成功后的小灰条消息
     * @discussion pushContent 用 Message.pushConfig
     * @version 1.0.0
     */
    recallMessage(message: Message): Promise<IAsyncResult<RecallNotificationMessage>>;
    /**
     * 注册自定义消息，连接之前调用
     * ```code
     * // 自定义消息示例代码
     * import { JsonConverter, MessageContent, MessageFlag, MessageTag } from '@rongcloud/imlib';
     * import List from '@ohos.util.List';
     *
     * const CustomOrderMessageObjectName = "App:OrderMsg";
     * const CustomOrderMessageFlag = MessageFlag.Count;
     *
     *
     * // 1. 继承 MessageContent 并实现 MessageTag 注解
     * &#64MessageTag(CustomOrderMessageObjectName,CustomOrderMessageFlag)
     * class CustomOrderMessage extends MessageContent {
     *   // 2. 按需增加属性
     *   id: string = ""; // 订单 ID
     *   name: string = ""; // 订单名称
     *   price: number = 0; // 订单价格
     *
     *   // 3. 必须声明无参的构造方法，因为注册自定义消息时候，只能用无参构造方法
     *   constructor() {
     *     super();
     *   }
     *
     *   // 4. 将消息对象转为 JSON 字符串
     *   encode(): string {
     *     // 4.1 将基类的数据保存到 map 中
     *     let map = super.encodeBaseData();
     *
     *     // 4.2 将本类的独有属性放到 map 中
     *     // 说明：ts 的 map 必须指定 kv 的类型，所以存多种类型数据，需要转为 Object
     *     if (this.id) {
     *       map.set("id", this.id as Object);
     *     }
     *     if (this.name) {
     *       map.set("name", this.name as Object);
     *     }
     *     map.set("price", this.price as Object);
     *
     *     // 4.3 将 map 转为 字符串
     *     return JsonConverter.stringifyFromHashMap(map);
     *   }
     *
     *   // 5. 将字符串转为消息对象
     *   decode(contentJson: string): void {
     *     // 5.1 将字符串转为 map
     *     let map = JsonConverter.parseToHashMap(contentJson);
     *     // 5.2 将基类的数据解析出来
     *     super.decodeBaseData(map);
     *
     *     // 5.3 将本类的独有属性解析
     *     // 说明：需要将 Object 转为对应的数据类型
     *     if (map.get("id")) {
     *       this.id = map.get("id") as string;
     *     }
     *     if (map.get("name")) {
     *       this.name = map.get("name") as string;
     *     }
     *     if (map.get("price")) {
     *       this.price = map.get("price") as number;
     *     }
     *   }
     *
     *   // 6. 将当前类名返回：该方法的作用是防止代码混淆或者压缩后无法获取正常的类名
     *   // 直接写字符串可能会出现拼写错误的情况，所以此处建议直接使用 类名.name
     *   getClassName(): string {
     *     return CustomOrderMessage.name;
     *   }
     *
     *
     *   // 7. 返回搜索字段
     *   // 1) 不实现该方法，该类消息无法被搜索
     *   // 2) 实现该方法，返回 null 或者 List 长度为 0，无法被搜索
     *   // 3) 实现该方法， List 里面的 空字符串 和 null 会被忽略
     *   // 4) List 中必须包含有效的字符串才能被搜索到
     *   getSearchableWord(): List<string> | null {
     *    if (!this.name) {
     *      return null;
     *    }
     *    let list = new List<string>();
     *    list.add(this.name);
     *    return list;
     *   }
     * }
     *
     * export { CustomOrderMessage, CustomOrderMessageObjectName }
     * ```
     *
     * ```
     * // 注册自定义消息示例代码
     * let clazzList: List<MessageContentConstructor> = new List();
     * clazzList.add(CustomOrderMessage);
     * IMEngine.getInstance().registerMessageType(clazzList);
     * ```
     * @param msgClassList 自定义消息数组
     * @note 自定义消息需要继承 MessageContent 并且实现无参构造方法才能注册给 SDK
     * @version 1.0.0
     */
    registerMessageType(msgClassList: List<MessageContentConstructor>): void;
    /**
     * 获取 SDK 中所有的消息 objectName 和存储标识的映射关系
     * ```
     * 注意事项：
     * 1. 映射关系集合包含 内置消息 和 自定义消息
     * 2. 必须在所有自定义消息注册完成之后再调用该方法，否则会导致无法正确获取自定义消息的映射关系
     * 3. 不要频繁调用该方法：建议 app 调用该方法之后， app 自行保存整个集合
     * ```
     * ```
     * 其他平台说明：
     * iOS 通过 RCMessagePersistentCompatible.persistentFlag 获取消息存储标识
     * Android 通过 getClass().getAnnotation(MessageTag.class) 获取消息存储标识
     * 鸿蒙需要通过本方法获取
     * ```
     * ```
     * 如何获取 objectName？
     * 1. 发送消息时需要手动构造指定的消息体，可以直接获取到 objectName：例如创建文本消息时一定知道是文本消息的 objectName
     * 2. 接收消息时通过 Message 对象获取：Message.objectName
     * 3. 读取会话时通过 Conversation 对象获取：Conversation.objectName
     * ```
     * @returns 映射关系集合。 key ：objectName 、 value ： MessageFlag
     * @version 1.2.0
     */
    getMessageTypeMap(): HashMap<string, MessageFlag>;
    /**
     * 消息批量入库（多用于数据迁移）
     *
     * Message 下列属性会被入库，其他属性会被抛弃：
     * ```
     * conversationType   会话类型
     * targetId           会话 ID
     * channelId          所属会话的业务标识，长度限制 20 字符
     * direction          消息方向
     * senderId           发送者 ID
     * receivedStatus     接收状态
     * sentStatus         发送状态
     * sentTime           发送时间
     * content            消息内容
     * objectName         消息类型，设置 content 的时候 SDK 会自动赋值对应的 objectName
     * messageUid         服务端生产的消息唯一 ID，如要携带该字段需要保证入库后是唯一的
     * extra              扩展信息
     * ```
     * @param msgList 需要入库的消息，范围 [1 ~ 500]，会话类型不支持聊天室和超级群
     * @returns 入库结果
     * @version 1.0.0
     */
    batchInsertMessage(msgList: List<Message>): Promise<IAsyncResult<void>>;
    /**
     * 单条消息入库
     *
     * Message 下列属性会被入库，其他属性会被抛弃：
     * ```
     * conversationType   会话类型
     * targetId           会话 ID
     * direction          消息方向，默认为发送
     * senderId           发送者 ID
     * receivedStatus     接收状态，默认为未读
     * sentStatus         发送状态，默认为发送失败
     * sentTime           发送时间
     * content            消息内容
     * objectName         消息类型，设置 content 的时候 SDK 会自动赋值对应的 objectName
     * messageUid         服务端生产的消息唯一 ID，如要携带该字段需要保证入库后是唯一的
     * extra              扩展信息
     * ```
     * @param Message 需要入库的消息，会话类型不支持聊天室和超级群
     * @returns 入库结果
     * @version 1.2.0
     */
    insertMessage(msg: Message): Promise<IAsyncResult<Message>>;
    /**
     * 通过 messageId 获取单条消息
     * @param messageId 消息的本地数据库自增 ID
     * @returns 消息数据
     * @version 1.0.0
     */
    getMessageById(messageId: number): Promise<IAsyncResult<Message>>;
    /**
     * 通过 messageUid 获取单条消息
     * @param messageUid 消息发送成功后的服务唯一 ID，固定格式的字符串，例如 ： CH2C-A072-OGM5-E3HL
     * @returns 消息数据
     * @version 1.0.0
     */
    getMessageByUid(messageUid: string): Promise<IAsyncResult<Message>>;
    /**
     * 获取批量本地消息，基于 messageId 获取
     * @param conId 会话标识
     * @param option 配置
     * @returns 返回本地消息结果
     * @see ConversationIdentifier
     * @see IGetLocalMsgByIdOption
     * @version 1.0.0
     */
    getHistoryMessagesById(conId: ConversationIdentifier, option: IGetLocalMsgByIdOption): Promise<IAsyncResult<List<Message>>>;
    /**
     * 获取批量本地消息，基于 time 获取
     * @param conId 会话标识
     * @param option 配置
     * @returns 返回本地消息结果
     * @see ConversationIdentifier
     * @see IGetLocalMsgByTimeOption
     * @version 1.0.0
     */
    getHistoryMessagesByTime(conId: ConversationIdentifier, option: IGetLocalMsgByTimeOption): Promise<IAsyncResult<List<Message>>>;
    /**
     * 获取批量远端消息
     * @param conId 会话标识
     * @param option 配置
     * @returns 返回远端消息结果
     * @note 此方法从服务器端获取之前的历史消息，但是必须先开通历史消息云存储功能
     * @see ConversationIdentifier
     * @see IGetLocalMsgByTimeOption
     * @version 1.0.0
     */
    getRemoteHistoryMessages(conId: ConversationIdentifier, option: IGetRemoteMsgOption): Promise<IAsyncResult<List<Message>>>;
    /**
     * 获取本地会话中 @ 自己的未读消息列表
     * @param conId 会话标识
     * @param option 配置
     * @returns 返回本地消息结果
     * @see ConversationIdentifier
     * @see ICountOption
     * @version 1.0.0
     */
    getUnreadMentionedMessages(conId: ConversationIdentifier, option: ICountOption): Promise<IAsyncResult<List<Message>>>;
    /**
     * 获取会话里第一条未读消息
     * @param conId 会话标识
     * @returns 消息，如果该会话没有未读，返回 null
     * @see ConversationIdentifier
     * @version 1.0.0
     */
    getFirstUnreadMessage(conId: ConversationIdentifier): Promise<IAsyncResult<Message>>;
    /**
     * 删除本地会话的指定一批消息
     * @param messageIds 消息 ID 列表
     * @returns 删除结果
     * @version 1.0.0
     */
    deleteHistoryMessagesByIds(messageIds: List<number>): Promise<IAsyncResult<void>>;
    /**
     * 清空本地会话的消息
     * @param conId 会话标识
     * @returns 结果
     * @see ConversationIdentifier
     * @version 1.0.0
     */
    deleteMessages(conId: ConversationIdentifier): Promise<IAsyncResult<void>>;
    /**
     * 删除本地会话特定时间前的所有消息
     * @param conId 会话标识
     * @param sentTime 毫秒时间戳。清除 <= sentTime 的所有历史消息，若为 0 则代表清除所有消息
     * @returns 结果
     * @see ConversationIdentifier
     * @version 1.0.0
     */
    deleteHistoryMessagesByTime(conId: ConversationIdentifier, sentTime: number): Promise<IAsyncResult<void>>;
    /**
     * 删除远端会话特定时间前的消息
     * @param conId 会话标识
     * @param sentTime 毫秒时间戳。清除 <= sentTime 的所有历史消息，若为 0 则代表清除所有消息
     * @returns 结果
     * @see ConversationIdentifier
     * @version 1.0.0
     */
    cleanRemoteHistoryMessagesByTime(conId: ConversationIdentifier, sentTime: number): Promise<IAsyncResult<void>>;
    /**
     * 批量删除远端消息，发送成功或者接收到的消息才可以从远端删除
     * ```
     * msgList 里面 Message 下列属性是必须的
     * uid:               服务端生产的消息唯一 id
     * direction:         消息方向
     * sentTime:          发送时间，不能小于等于 0
     * ```
     * @param conId 会话标识
     * @param msgList 消息列表，长度范围 [1, 100]
     * @param isDeleteLocal 是否删除本地消息。只有远端消息被删除成功时设置 true 才会删除本地消息。
     * @returns
     * @version 1.1.0
     */
    deleteRemoteMessages(conId: ConversationIdentifier, msgList: List<Message>, isDeleteLocal: boolean): Promise<IAsyncResult<void>>;
    /**
     * 设置输入状态的监听
     * @param listener 监听，conId 会话标识；typingStatusList 输入状态的列表
     * @version 1.1.0
     */
    setTypingStatusListener(listener: (conId: ConversationIdentifier, typingStatusList: List<TypingStatus>) => void): void;
    /**
     * 发送输入状态，仅支持单聊
     * ```
     * 常见的使用方式如下：
     * 在聊天页面输入文本时，可以发送 TextMessageObjectName ，对方收到后可以展示"正在输入中"
     * 在录音时，可以发送 HQVoiceMessageObjectName ，对方收到后可以展示"正在说话"
     * ```
     * @param conId 会话标识
     * @param objectName 正在输入的消息 ObjectName
     * @returns
     * @version 1.1.0
     */
    sendTypingStatus(conId: ConversationIdentifier, objectName: string): Promise<IAsyncResult<void>>;
    /**
     * 设置输入状态更新时间间隔
     * ```
     * 控制输入状态发送频率，在规定时间内多次调用发送输入状态方法，最终只会发送一次输入状态
     * 例如输入状态时间间隔为 6000 毫秒，在这段时间多次调用输入状态方法，只会发出一次输入状态，对方也只会收到一次输入状态
     * ```
     * @param interval 时间间隔，单位毫秒，默认为 6000 毫秒。有效值 [1000，60000] 毫秒；超过范围，则设置不成功
     * @returns
     * @version 1.1.0
     */
    setTypingStatusInterval(interval: number): Promise<IAsyncResult<void>>;
    /**
     * 设置消息扩展监听
     * @param listener 监听
     * @version 1.2.0
     */
    setMessageExpansionListener(listener: MessageExpansionListener): void;
    /**
     * 更新消息扩展信息
     * ```
     * 调用更新扩展的一方必须通过成功回调来处理本端的数据刷新。
     * 仅被动接收扩展变更的用户（包含本用户的其他端）通过监听方法 MessageExpansionListener.onMessageExpansionUpdate 获取通知。
     * 消息扩展信息是以字典形式存在。设置的时候从 expansion 中读取 key，如果原有的扩展信息中 key 不存在则添加新的 KV 对，如果 key 存在则替换成新的 value。
     * 扩展信息字典中的 Key 支持大小写英文字母、数字、部分特殊符号 + = - _ 的组合方式，最大长度 32；Value 最长长度 4096，单次设置扩展数量最大为 20，消息的扩展总数不能超过 300
     * ```
     * @param expansion 要更新的消息扩展信息键值对
     * @param messageUid 消息 messageUId
     * @returns 结果
     * @discussion 扩展信息只支持单聊和群组，其它会话类型不能设置扩展信息
     * @version 1.2.0
     */
    updateMessageExpansion(expansion: Map<string, string>, messageUid: string): Promise<IAsyncResult<void>>;
    /**
     * 删除消息扩展信息中特定的键值对
     * ```
     * 调用删除扩展的一方必须通过成功回调来处理本端的数据刷新。
     * 仅被动接收扩展变更的用户（包含本用户的其他端）通过监听方法 MessageExpansionListener.onMessageExpansionRemove 获取通知。
     * ```
     * @param keyArray 消息扩展信息中待删除的 key 的列表
     * @param messageUid 消息 messageUId
     * @returns 结果
     * @discussion 扩展信息只支持单聊和群组，其它会话类型不能设置扩展信息
     * @version 1.2.0
     */
    removeMessageExpansion(keyArray: Array<string>, messageUid: string): Promise<IAsyncResult<void>>;
    /**
     * 设置会话状态（置顶，消息免打扰）变化监听
     * @param listener 监听
     * @version 1.0.0
     */
    setConversationStatusListener(listener: (items: List<ConversationStatusInfo>) => void): void;
    /**
     * 获取单个会话
     * @param conId 会话标识
     * @returns 会话数据
     * @see ConversationIdentifier
     * @version 1.0.0
     */
    getConversation(conId: ConversationIdentifier): Promise<IAsyncResult<Conversation>>;
    /**
     * 分页获取本地会话列表
     * @param conTypeList 会话类型列表
     * @param option 配置
     * @returns 本地会话列表数据
     * @see IGetConversationOption
     * @version 1.0.0
     */
    getConversationListByPage(conTypeList: List<ConversationType>, option: IGetConversationOption): Promise<IAsyncResult<List<Conversation>>>;
    /**
     * 分页获取本地置顶会话列表
     * @param conTypeList 会话类型列表
     * @param option 配置
     * @returns 本地会话列表数据
     * @see IGetConversationOption
     * @version 1.0.0
     */
    getTopConversationListByPage(conTypeList: List<ConversationType>, option: IGetConversationOption): Promise<IAsyncResult<List<Conversation>>>;
    /**
     * 分页获取本地免打扰会话列表
     * @param conTypeList 会话类型列表
     * @param option 配置
     * @returns 本地会话列表数据
     * @see IGetConversationOption
     * @version 1.0.0
     */
    getBlockedConversationListByPage(conTypeList: List<ConversationType>, option: IGetConversationOption): Promise<IAsyncResult<List<Conversation>>>;
    /**
     * 获取本地未读会话列表，该接口仅支持单聊、群聊、系统三种会话类型，不支持聊天室、超级群。
     * @param conTypeList 会话类型数组，长度范围 [1, 100]
     * @returns 会话数组
     * @version 1.1.0
     */
    getUnreadConversations(conTypeList: List<ConversationType>): Promise<IAsyncResult<List<Conversation>>>;
    /**
     * 删除本地会话同时删除会话中的消息
     * @param conTypeList 会话类型列表
     * @returns 结果
     * @version 1.0.0
     */
    clearConversations(conTypeList: List<ConversationType>): Promise<IAsyncResult<void>>;
    /**
     * 批量删除本地会话，但是不会删除消息
     * @param conIdList 会话标识数组
     * @returns 结果
     * @version 1.0.0
     */
    removeConversations(conIdList: List<ConversationIdentifier>): Promise<IAsyncResult<void>>;
    /**
     * 批量 设置/取消 会话置顶
     * @param conIdList 会话标识列表
     * @param option 配置
     * @returns 结果
     * @see ISetConversationTopOption
     * @version 1.0.0
     */
    setConversationsToTop(conIdList: List<ConversationIdentifier>, option: ISetConversationTopOption): Promise<IAsyncResult<void>>;
    /**
     * 获取会话置顶状态
     * @param conId 会话标识
     * @returns 是否置顶
     * @version 1.0.0
     */
    getConversationTopStatus(conId: ConversationIdentifier): Promise<IAsyncResult<boolean>>;
    /**
     * 批量设置会话免打扰
     * @param conIdList 会话标识列表
     * @param level 会话免打扰级别
     * @returns 结果
     * @version 1.0.0
     */
    setConversationsNotificationLevel(conIdList: List<ConversationIdentifier>, level: PushNotificationLevel): Promise<IAsyncResult<void>>;
    /**
     * 获取单个会话免打扰状态
     * @param conId 会话标识
     * @returns 会话免打扰级别
     * @version 1.0.0
     */
    getConversationNotificationLevel(conId: ConversationIdentifier): Promise<IAsyncResult<PushNotificationLevel>>;
    /**
     * 保存/清空 会话草稿
     * @param conId 会话标识
     * @param draft 草稿：传入有效值代表保存草稿；传入空字符串代表清空草稿
     * @returns 结果
     * @discussion 保存成功的草稿可以通过 Conversation.draft 获取
     * @version 1.0.0
     */
    saveTextMessageDraft(conId: ConversationIdentifier, draft: string): Promise<IAsyncResult<void>>;
    /**
     * 获取会话草稿
     * @param conId 会话标识
     * @returns 草稿
     * @version 1.0.0
     */
    getTextMessageDraft(conId: ConversationIdentifier): Promise<IAsyncResult<string>>;
    /**
     * 屏蔽某个时间段的消息提醒
     * @param option 配置，见 IQuietHoursOption
     * @returns 结果
     * @discussion 此方法设置的屏蔽时间会在每天该时间段时生效。
     * @version 1.0.0
     */
    setNotificationQuietHoursLevel(option: IQuietHoursOption): Promise<IAsyncResult<void>>;
    /**
     * 查询已设置的时间段消息提醒屏蔽
     * @returns 具体的配置
     * @version 1.0.0
     */
    getNotificationQuietHoursLevel(): Promise<IAsyncResult<IQuietHoursOption>>;
    /**
     * 删除已设置的全局时间段消息提醒屏蔽
     * @returns 结果
     * @version 1.0.0
     */
    removeNotificationQuietHours(): Promise<IAsyncResult<void>>;
    /**
     * 获取本地会话的全部未读数
     * @returns 未读数
     * @version 1.0.0
     */
    getTotalUnreadCount(): Promise<IAsyncResult<number>>;
    /**
     * 获取本地批量会话的未读数之和
     * @param conIds 会话标识数组
     * @returns 未读数
     * @version 1.0.0
     */
    getTotalUnreadCountByIds(conIds: List<ConversationIdentifier>): Promise<IAsyncResult<number>>;
    /**
     * 获取单个会话的未读数
     * @param conId 会话标识
     * @returns 该会话的未读数
     * @version 1.0.0
     */
    getUnreadCount(conId: ConversationIdentifier): Promise<IAsyncResult<number>>;
    /**
     * 清空单个会话未读数
     * @param conId 会话标识
     * @returns 结果
     * @version 1.0.0
     */
    clearMessagesUnreadStatus(conId: ConversationIdentifier): Promise<IAsyncResult<void>>;
    /**
     * 清除单个会话的未读数：按照时间戳清除
     * @param conId 会话标识
     * @param time 时间，清理小于该时间戳的消息未读
     * @returns 结果
     * @version 1.0.0
     */
    clearMessagesUnreadStatusByTime(conId: ConversationIdentifier, time: number): Promise<IAsyncResult<void>>;
    /**
     * 会话未读数，是否包含免打扰会话的未读数
     * @param typeList 会话类型数组
     * @param isContainBlocked 是否包含免打扰；true 代表获取所有会话未读数之和； false 代表获取不包含免打扰会话的正常会话未读数之和
     * @returns 未读数
     * @discussion 正常单聊会话 A 的未读数为1，免打扰单聊会话 B 的未读数为 2。true 代表获取两个单聊会话的未读数之和，其结果为 3。false 代表获取正常会话 A 的未读数，结果为 1
     * @version 1.0.0
     */
    getUnreadCountByTypes(typeList: List<ConversationType>, isContainBlocked: boolean): Promise<IAsyncResult<number>>;
    /**
     * 同步会话已读状态
     * ```
     * 用于相同账号的多端已读同步
     * 例如用户 A 同时登录鸿蒙和 Android，两端同时收到消息，同时未读数增加
     * Android 调用该方法将某个会话同步已读之后， 鸿蒙会触发 setSyncConversationReadStatusListener
     * ```
     * @param conId 会话标识
     * @param timestamp 会话中已读的最后一条消息的发送时间戳
     * @returns 结果
     * @version 1.2.0
     */
    syncConversationReadStatus(conId: ConversationIdentifier, timestamp: number): Promise<IAsyncResult<void>>;
    /**
     * 设置会话已读状态监听
     * @param listener 监听
     * @version 1.2.0
     */
    setSyncConversationReadStatusListener(listener: SyncConversationReadStatusListener): void;
    /**
     * 根据关键字搜索本地会话。
     * @param conTypes 搜索的会话类型列表
     * @param keyword 搜索的关键字，长度范围 [1, 256]
     * @param objNameList 消息类型数组。用于搜索指定类型的消息；为空代表所有所有类型消息
     * @returns 搜索到的会话列表
     * @version 1.1.0
     * @deprecated 已废弃，使用 searchConversationsWithResult() 方法
     */
    searchConversations(typeList: List<ConversationType>, keyword: string, objNameList: List<string> | null): Promise<IAsyncResult<List<Conversation>>>;
    /**
     * 根据关键字搜索本地会话。
     * @param conTypes 搜索的会话类型列表
     * @param keyword 搜索的关键字，长度范围 [1, 256]
     * @param objNameList 消息类型数组。用于搜索指定类型的消息；为空代表所有所有类型消息
     * @returns 搜索到的会话列表
     * @version 1.2.0
     */
    searchConversationsWithResult(typeList: List<ConversationType>, keyword: string, objNameList: List<string> | null): Promise<IAsyncResult<List<SearchConversationResult>>>;
    /**
     * 根据关键字搜索指定消息类型的本地消息。
     * @param conId 会话标识
     * @param keyword 关键字，长度范围 [1, 256]
     * @param objNameList 消息类型数组。用于搜索指定类型的消息；为空代表搜索所有类型消息
     * @param startTime 查询的起始发送时间，返回小于该时间的消息，毫秒时间戳；如果为 0，则查询全部。当分页时，可以传入上一批消息的最小发送时间，取值范围 [0, INT64_MAX]
     * @param count 消息个数，传 0 时会返回所有搜索到的消息，非 0 时根据 startTime 逐页返回，取值范围 [0, 100]
     * @returns 消息列表
     * @version 1.1.0
     */
    searchMessages(conId: ConversationIdentifier, keyword: string, objNameList: List<string> | null, startTime: number, count: number): Promise<IAsyncResult<List<Message>>>;
    /**
     * 根据关键字和指定时间段搜索指定会话中的消息。
     * @param conId 会话标识
     * @param keyword 关键字，长度范围 [1, 256]
     * @param option 在时间区间内搜索消息的参数配置
     * @returns 消息列表
     * @version 1.1.0
     */
    searchMessagesInTimeRange(conId: ConversationIdentifier, keyword: string, option: ISearchMessageInTimeRangeOption): Promise<IAsyncResult<List<Message>>>;
    /**
     * 根据用户 id 搜索指定会话中的本地消息。
     * @param conId 会话标识
     * @param userId  用户 id
     * @param startTime 查询的起始发送时间，返回小于该时间的消息，毫秒时间戳；如果为 0，则查询全部。当分页时，可以传入上一批消息的最小发送时间，取值范围 [0, INT64_MAX]
     * @param count 消息个数，传 0 时会返回所有搜索到的消息；非 0 时根据 startTime 逐页返回，取值范围 [0, 100]
     * @returns 消息列表
     * @version 1.1.0
     */
    searchMessagesByUser(conId: ConversationIdentifier, userId: string, startTime: number, count: number): Promise<IAsyncResult<List<Message>>>;
    /**
     * 获取本地订阅的所有公众号（仅支持私有云）
     * @returns
     * @version 1.1.0
     */
    getPublicServiceList(): Promise<IAsyncResult<List<PublicServiceInfo>>>;
    /**
     * 获取本地订阅的指定公众号
     * @param conId 会话标识，会话类型不管为何值，SDK 均会按照 AppPublicService 处理
     * @returns
     * @version 1.1.0
     */
    getPublicService(conId: ConversationIdentifier): Promise<IAsyncResult<PublicServiceInfo>>;
    /**
     * 设置聊天室状态监听
     * ```
     * let listener: ChatroomStatusListener = {
     *  onChatroomJoining(roomId: string): void {
     *    hilog.info(0x0000, 'IM-App', 'onChatroomJoining roomId:%{public}s', roomId);
     *  },
     *
     *  onChatroomJoined(roomId: string, info: ChatroomJoinedInfo): void {
     *    hilog.info(0x0000, 'IM-App', 'onChatroomJoined roomId:%{public}s info:%{public}s', roomId, JSON.stringify(info));
     *  },
     *
     *  onChatroomJoinFailed(roomId: string, code: EngineError): void {
     *    hilog.info(0x0000, 'IM-App', 'onChatroomJoined roomId:%{public}s code:%{public}d', roomId, code);
     *  },
     *
     *  onChatroomQuited(roomId: string): void {
     *    hilog.info(0x0000, 'IM-App', 'onChatroomQuited roomId:%{public}s', roomId);
     *  },
     *
     *  onChatroomDestroyed(roomId: string, type: ChatroomDestroyType): void {
     *    hilog.info(0x0000, 'IM-App', 'onChatroomDestroyed roomId:%{public}s type:%{public}d', roomId, type);
     *  },
     * }
     * IMEngine.getInstance().setChatroomStatusListener(listener);
     * ```
     * @param listener 监听
     * @see ChatroomStatusListener
     * @version 1.0.0
     */
    setChatroomStatusListener(listener: ChatroomStatusListener): void;
    /**
     * 加入聊天室，如果聊天室不存在则创建聊天室
     * @param roomId roomId 聊天室 ID
     * @param msgCount msgCount 消息个数
     * @returns 结果
     * @version 1.0.2
     */
    joinChatroom(roomId: string, msgCount: number): Promise<IAsyncResult<ChatroomJoinedInfo>>;
    /**
     * 加入已经存在的聊天室
     * @param roomId 聊天室 ID
     * @param msgCount 消息个数
     * @returns 结果
     * @discussion 如果加入不存在的聊天室会报错 ChatroomNotExist
     * @note 聊天室的创建需要通过 AppServer 调用 IM 服务的 ServerAPI 创建
     * @version 1.0.0
     */
    joinExistingChatroom(roomId: string, msgCount: number): Promise<IAsyncResult<ChatroomJoinedInfo>>;
    /**
     * 退出聊天室
     * @param roomId 聊天室 ID
     * @returns 结果
     * @version 1.0.0
     */
    quitChatroom(roomId: string): Promise<IAsyncResult<void>>;
    /**
     * 获取聊天室信息
     * @param roomId 聊天室 ID
     * @param option 配置
     * @returns 聊天室信息
     * @see ICountOption
     * @version 1.0.0
     */
    getChatroomInfo(roomId: string, option: ICountOption): Promise<IAsyncResult<ChatroomInfo>>;
    /**
     * 设置聊天室自定义属性
     * ```
     * entries 最大限制为 10
     * key ： 聊天室属性名称，长度范围 [1~128]，支持大小写英文字母、数字、部分特殊符号 + = - _ 的组合方式
     * value : 聊天室属性对应的值，长度范围 [1~4096]
     * ```
     * @param roomId 聊天室 ID
     * @param entries key-value 字典，长度范围 [1 ~ 10]
     * @param autoDelete 用户掉线或退出时，是否自动删除该 Key、Value 值；自动删除时不会发送通知
     * @param overWrite 是否强制覆盖
     * @returns 返回的具体结果，会明确特定 key 的具体错误
     * @discussion 每个聊天室支持设置最大 KV 数为 100，如果聊天室已经有 100 个 KV，则无法再增加新的 KV
     * @version 1.1.0
     */
    setChatroomEntries(roomId: string, entries: Map</* key */ string, /* value */ string>, autoDelete: boolean, overWrite: boolean): Promise<IAsyncResult<Map</* key */ string, EngineError>>>;
    /**
     * 删除聊天室自定义属性
     * @param roomId 聊天室 ID
     * @param keys key 数组，长度范围 [1,10]
     * @param isForce 是否强制删除
     * @returns 返回的具体结果，会明确特定 key 的具体错误
     * @version 1.1.0
     */
    deleteChatroomEntries(roomId: string, keys: List</* key */ string>, isForce: boolean): Promise<IAsyncResult<Map</* key */ string, EngineError>>>;
    /**
     * 获取本地指定一批聊天室自定义属性
     * @param roomId 聊天室 ID
     * @param keys key 数组，长度范围 [1,100]
     * @returns 对应的 kv 信息
     * @discussion 见 ChatroomKVStatusListener.onChatroomKVSync
     * @version 1.1.0
     */
    getChatroomEntries(roomId: string, keys: List</* key */ string>): Promise<IAsyncResult<Map<string, string>>>;
    /**
     * 获取本地聊天室全部自定义属性
     * @param roomId 聊天室 ID
     * @returns 对应的 kv 信息
     * @discussion 见 ChatroomKVStatusListener.onChatroomKVSync
     * @version 1.1.0
     */
    getAllChatroomEntries(roomId: string): Promise<IAsyncResult<Map<string, string>>>;
    /**
     * 设置聊天室 KV 状态变化的监听
     * @param listener 聊天室 KV 状态变化的监听
     * @version 1.1.0
     */
    setChatroomKVStatusListener(listener: ChatroomKVStatusListener): void;
    /**
     * 设置聊天室成员变化监听
     * @param listener 成员变化监听
     * @version 1.1.0
     */
    setChatroomMemberListener(listener: ChatroomMemberActionListener): void;
    /**
     * 设置聊天室事件通知监听器
     * @param listener
     * @version 1.1.0
     */
    setChatroomNotifyEventListener(listener: ChatroomNotifyEventListener): void;
}
export { IMEngine };
