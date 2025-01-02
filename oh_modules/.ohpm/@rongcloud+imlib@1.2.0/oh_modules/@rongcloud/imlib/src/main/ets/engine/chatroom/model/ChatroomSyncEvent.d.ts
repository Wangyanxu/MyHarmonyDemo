/**
 * 聊天室同步事件，事件发生时，当前用户在线时能收到该事件
 * @discussion 事件发生时，当前用户不在线，那么用户上线后，不会收到该事件。
 * @version 1.1.0
 */
declare class ChatroomSyncEvent {
    /**
     * 聊天室 ID
     */
    chatroomId: string;
    /**
     * 同步通知的变更状态
     */
    status: ChatroomSyncStatus;
    /**
     * status 是 Quit 的情况， reason 区分离开类型： LeaveOnMyOwn，自己主动离开， OtherDeviceLogin，多端加入互踢导致离开
     *
     * status 是 Join 的情况，无需关心 reason 值
     */
    reason: ChatroomSyncStatusReason;
    /**
     * 用户加入/退出/被踢的时间戳，精确到毫秒
     */
    time: number;
    /**
     * 附加信息
     */
    extra: string;
}
/**
 * 同步通知的变更状态
 * @version 1.1.0
 */
declare enum ChatroomSyncStatus {
    /**
     * 退出
     */
    Quit = 0,
    /**
     * 加入
     */
    Join = 1
}
/**
 * 离开原因，只有当 status 为 Quit 时，reason 才有效
 * @version 1.1.0
 */
declare enum ChatroomSyncStatusReason {
    /**
     * 自己主动离开
     */
    LeaveOnMyOwn = 1,
    /**
     * 多端加入互踢导致离开
     */
    OtherDeviceLogin = 2
}
export { ChatroomSyncStatus, ChatroomSyncStatusReason, ChatroomSyncEvent };
