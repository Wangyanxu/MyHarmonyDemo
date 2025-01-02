import { ConversationIdentifier } from '../conversation/ConversationIdentifier';
import { EngineError } from '../EngineError';
import { ConversationType, MessageDirection, ReceivedStatus, SentStatus } from '../MacroDefine';
import { PushConfig } from './config/PushConfig';
import { MessageContent } from './content/MessageContent';
/**
 * 消息实体，包含消息的所有属性
 * @version 1.0.0
 */
declare class Message {
    /**
     * 会话类型 @see EngineError
     */
    conversationType: ConversationType;
    /**
     * 会话 ID
     */
    targetId: string;
    /**
     * 所属会话的业务标识，长度限制 20 字符
     *
     * 仅支持单群聊和超级群，其他类型的会话请传入空字符串
     * @see ConversationIdentifier.channelId
     * @version 1.2.0
     */
    channelId: string;
    /**
     * 消息 ID，本地存储的消息的唯一值（数据库索引唯一值）
     * ```
     * 发送消息时
     * messageId > 0 时，SDK 更新数据库中对应的消息，然后再发送
     * messageId <= 0 时，SDK 把消息直接入库，然后再发送
     * 只有当确实需要更新数据库消息时，设置 messageId > 0 ；其余情况 messageId <= 0
     * ```
     */
    messageId: number;
    /**
     * 消息方向
     */
    direction: MessageDirection;
    /**
     * 消息发送者 ID
     */
    senderId: string;
    /**
     * 消息接收状态
     */
    receivedStatus: ReceivedStatus;
    /**
     * 消息的发送状态(针对发送的消息生效)
     */
    sentStatus: SentStatus;
    /**
     * 消息的接收毫秒时间戳，本地入库的时间，不能用做消息排序。消息排序用 sentTime
     */
    receivedTime: number;
    /**
     * 消息的发送毫秒时间戳，服务端的发送时间，用作消息排序
     */
    sentTime: number;
    /**
     * 消息类型
     */
    objectName: string;
    /**
     * 消息内容，所有消息体的基类，需要根据 objectName 将 content 转为具体的消息类型
     * ```
     *     // Message 必须为有效的消息，此处进行简写
     *     let message : Message;
     *     if (TextMessageObjectName === message.objectName) {
     *        // 转成文本消息
     *        let txtMsg = message.content as TextMessage;
     *     } else if (ImageMessageObjectName === message.objectName) {
     *        // 转成图片消息
     *        let imgMsg= message.content as ImageMessage;
     *     }
     * ```
     *
     * @see MessageContent
     */
    content: MessageContent;
    /**
     * 服务器消息唯一 ID（在同一个 AppKey 下全局唯一）
     *
     * 固定格式的字符串，例如 ： CH2C-A072-OGM5-E3HL
     */
    messageUid: string;
    /**
     * 消息的附加字段，只保存在本地数据库，区别于 MessageContent.extra
     */
    extra: string;
    /**
     * 推送配置
     */
    pushConfig: PushConfig | null;
    /**
     * 消息是否可以包含扩展信息
     *
     * @discussion 该属性在消息发送时确定，发送之后不能再做修改
     * @discussion 扩展信息只支持单聊、群聊，其它会话类型不能设置扩展信息
     * @version 1.2.0
     */
    canIncludeExpansion: boolean;
    /**
     * 消息扩展信息列表
     * ```
     * 默认消息扩展字典 key 长度不超过 32 ，value 长度不超过 4096 ，单次设置扩展数量最大为 20，消息的扩展总数不能超过 300
     * ```
     * @discussion 扩展信息只支持单聊、群聊，其它会话类型不能设置扩展信息
     * @version 1.2.0
     */
    expansion: Map<string, string> | null;
    /**
     * 消息构造方法
     *
     * conversationType、targetId、channelId、content、objectName 会被赋值
     *
     * @param conId 会话标识
     * @param content 消息体内容
     */
    constructor(conId: ConversationIdentifier, content: MessageContent);
    /**
     * 检查是否可以发送
     * @returns 是否可以发送，EngineError.Success 代表可以发送；否则代表消息数据有问题无法发送出去
     */
    checkForSend(): EngineError;
    /**
     * 检查媒体消息是否可以发送
     * @returns 是否可以发送，EngineError.Success 代表可以发送；否则代表消息数据有问题无法发送出去
     */
    checkForSendMedia(): EngineError;
    private toIdentifier;
}
export { Message };
