import { MessageContent } from '../MessageContent';
/**
 * 消息标识
 * @version 1.0.0
 */
declare const RecallNotificationMessageObjectName: string;
/**
 * 撤回消息的小灰条消息
 * @version 1.0.0
 */
declare class RecallNotificationMessage extends MessageContent {
    /**
     * 发起撤回操作的用户 ID
     */
    operatorId: string;
    /**
     * 撤回的时间（毫秒）
     */
    recallTime: number;
    /**
     * 原消息的消息类型名
     */
    originalObjectName: string;
    /**
     * 被撤回的原消息
     * @version 1.2.0
     */
    originalMessageContent: string;
    /**
     * 撤回的文本消息的内容
     */
    recallContent: string;
    /**
     * 撤回动作的时间（毫秒）
     */
    recallActionTime: number;
    /**
     * 是否是管理员操作
     */
    isAdmin: boolean;
    /**
     * 是否删除该条消息
     */
    isDelete: boolean;
    /**
     * 无参构造方法
     */
    constructor();
    /**
     * 编码方法，将消息转为 json 字符串
     * @returns json 字符串
     */
    encode(): string;
    /**
     * 解码方法，将 json 字符串转为消息
     * @param contentString json 字符串
     */
    decode(contentString: string): void;
    /**
     * 获取类名
     * @returns 类名
     */
    getClassName(): string;
}
export { RecallNotificationMessage, RecallNotificationMessageObjectName };
