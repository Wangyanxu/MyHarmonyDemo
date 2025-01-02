import { ConversationType, PushNotificationLevel } from '../../MacroDefine';
/**
 * 会话状态信息
 * @version 1.0.0
 */
declare class ConversationStatusInfo {
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
     * 更新时间，毫秒
     */
    updateTime: number;
    /**
     * 置顶时间，毫秒
     */
    topTime: number;
    /**
     * 是否置顶
     */
    isTop: boolean;
    /**
     * 免打扰级别
     */
    level: PushNotificationLevel;
}
export { ConversationStatusInfo };
