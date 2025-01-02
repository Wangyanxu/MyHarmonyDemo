import List from '@ohos.util.List';
/**
 * 聊天室禁言事件
 * ```
 * 本事件只能通过 ServerApi 触发，端上只能被动接收到该事件
 * 事件发生时，当前用户在线时能收到该事件
 * 事件发生时，当前用户不在线，那么用户上线后，不会收到该事件
 * ```
 * @version 1.1.0
 */
declare class ChatroomMemberBanEvent {
    /**
     * 聊天室 Id
     */
    chatroomId: string;
    /**
     * 禁言操作类型
     */
    banType: ChatroomMemberBanType;
    /**
     * 禁言时长，单位为毫秒：最大值为43200分钟（1个月）, 最小值1分钟。 banType 为 禁言 类型时，该字段有效
     */
    durationTime: number;
    /**
     * 操作时间(毫秒时间戳)
     */
    operateTime: number;
    /**
     * 被禁言/解禁言的用户 ID 列表
     */
    userIdList: List<string>;
    /**
     * 附加信息
     */
    extra: string;
}
/**
 * 聊天室禁言/解除禁言操作类型枚举
 */
declare enum ChatroomMemberBanType {
    /**
     * 解除指定聊天室中用户禁言
     */
    UnmuteUsers = 0,
    /**
     * 禁言指定聊天室中用户
     */
    MuteUsers = 1,
    /**
     * 解除聊天室全体禁言
     */
    UnmuteAll = 2,
    /**
     * 聊天室全体禁言
     */
    MuteAll = 3,
    /**
     * 移出禁言用户白名单
     */
    RemoveWhitelist = 4,
    /**
     * 添加禁言用户白名单
     */
    AddWhitelist = 5,
    /**
     * 解除用户聊天室全局禁言
     */
    UnmuteGlobal = 6,
    /**
     * 用户聊天室全局禁言
     */
    MuteGlobal = 7
}
export { ChatroomMemberBanEvent, ChatroomMemberBanType };
