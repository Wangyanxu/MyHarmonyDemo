import List from '@ohos.util.List';
/**
 * 聊天室成员加入或者退出
 * @version 1.1.0
 */
declare enum ChatroomMemberActionType {
    /**
     * 聊天室成员退出
     */
    Quit = 0,
    /**
     * 聊天室成员加入
     */
    Join = 1
}
/**
 * 聊天室成员变更 model
 * @version 1.1.0
 */
declare class ChatRoomMemberActionModel {
    /**
     * 聊天室 ID
     */
    roomId: string;
    /**
     * 变更的成员列表
     */
    chatRoomMemberActions: List<ChatroomMemberAction>;
    /**
     * 当前聊天室人数
     */
    memberCount: number;
}
/**
 * 聊天室成员变化信息
 * @version 1.1.0
 */
declare class ChatroomMemberAction {
    /**
     * 用户 ID
     */
    userId: string;
    /**
     * 变化类型
     */
    actionType: ChatroomMemberActionType;
}
export { ChatroomMemberAction, ChatRoomMemberActionModel, ChatroomMemberActionType };
