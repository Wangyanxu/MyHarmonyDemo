import { ConversationIdentifier } from '../ConversationIdentifier';
/**
 * 同步会话已读状态监听
 * @version 1.2.0
 */
interface SyncConversationReadStatusListener {
    /**
     * 会话已读
     * @param conId 会话标识
     * @param timestamp 已读的毫秒时间戳，该时间戳前的消息已读
     * @discussion 该监听触发时，本地数据库的该会话的该时间戳之前未读已清空
     */
    onSyncConversationReadStatus(conId: ConversationIdentifier, timestamp: number): void;
}
export { SyncConversationReadStatusListener };
