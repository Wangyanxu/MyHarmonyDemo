/**
 * 输入状态信息
 * @version 1.1.0
 */
declare class TypingStatus {
    /**
     * 用户 ID
     */
    userId: string;
    /**
     * 消息 ObjectName ，文本消息代表 userId 正在输入消息，语音消息就代表 userId 正在说话等
     */
    objectName: string;
    /**
     * 输入状态的时间，毫秒时间戳
     */
    sentTime: number;
}
export { TypingStatus };
