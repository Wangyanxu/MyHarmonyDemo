import { ConversationType, PushNotificationLevel } from '../MacroDefine';
import { MessageContent } from '../message/content/MessageContent';
/**
 * 会话类，包含会话的所有属性。
 * @version 1.0.0
 */
declare class Conversation {
    /**
     * 会话类型
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
     * 会话中的未读消息数量
     */
    unreadMessageCount: number;
    /**
     * 是否置顶
     */
    isTop: boolean;
    /**
     * 会话中最后一条消息的消息 ID
     */
    lastMessageId: number;
    /**
     * 会话中最后一条消息的接收时间（Unix时间戳、毫秒）
     */
    lastReceivedTime: number;
    /**
     * 会话中最后一条消息的发送时间（Unix时间戳、毫秒）
     */
    lastSentTime: number;
    /**
     * 会话的操作时间（Unix时间戳、毫秒），用于分页获取会话列表时传入的时间戳
     *
     * 初始值与 sentTime 相同，置顶等操作会更新此时间戳
     */
    lastOperateTime: number;
    /**
     * 会话中最后一条消息的类型名
     */
    objectName: string;
    /**
     * 会话中最后一条消息的内容，所有消息体的基类，需要根据 objectName 将 content 转为具体的消息类型
     * ```
     *     // Conversation 必须为有效的对象，此处进行简写
     *     let conversation : Conversation;
     *     if (TextMessageObjectName === conversation.objectName) {
     *        // 转成文本消息
     *        let txtMsg = conversation.content as TextMessage;
     *     } else if (ImageMessageObjectName === conversation.objectName) {
     *        // 转成图片消息
     *        let imgMsg= conversation.content as ImageMessage;
     *     }
     * ```
     *
     * @see MessageContent
     */
    content: MessageContent;
    /**
     * 会话中最后一条消息的发送者用户 ID
     */
    senderId: string;
    /**
     * 会话中存在的草稿
     */
    draft: string;
    /**
     * 免打扰级别
     */
    notificationLevel: PushNotificationLevel;
    /**
     * 会话中 @ 消息的总个数（包含 @ 我的个数和 @ 所有人的个数）
     */
    unreadMentionedCount: number;
}
export { Conversation };
