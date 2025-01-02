import List from '@ohos.util.List';
/**
 * 聊天室成员封禁事件
 * ```
 * 本事件只能通过 ServerApi 触发，端上只能被动接收到该事件
 * 事件发生时，当前用户在线时能收到该事件
 * 事件发生时，当前用户不在线，那么用户上线后，不会收到该事件。
 * ```
 * @version 1.1.0
 */
declare class ChatroomMemberBlockEvent {
    /**
     *  聊天室 Id
     */
    chatroomId: string;
    /**
     * 封禁类型
     */
    operateType: ChatroomBlockOperateType;
    /**
     *  封禁时长，单位为毫秒，最大值为43200分钟（1个月）, 最小值1分钟。 operateType 为 Blocked 时，该字段有效
     */
    durationTime: number;
    /**
     * 操作时间(毫秒时间戳)
     */
    operateTime: number;
    /**
     * 被封禁/解封的用户 ID 列表
     */
    userIdList: List<string>;
    /**
     * 附加信息
     */
    extra: string;
}
/**
 * 聊天室封禁类型
 */
declare enum ChatroomBlockOperateType {
    /**
     * 解封
     */
    Unblock = 0,
    /**
     * 封禁
     */
    Blocked = 1
}
export { ChatroomMemberBlockEvent, ChatroomBlockOperateType };
