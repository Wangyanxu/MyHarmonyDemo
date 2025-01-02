/**
 * 加入聊天室成功后获取的聊天室基本信息
 * @version 1.0.0
 */
declare class ChatroomJoinedInfo {
    /**
     * 聊天室的创建时间，毫秒时间戳
     */
    createTime: number;
    /**
     * 当前聊天室人数
     */
    memberCount: number;
    /**
     * 是否全局禁言
     */
    isAllChatroomBanned: boolean;
    /**
     * 是否当前用户被禁言
     */
    isCurrentUserBanned: boolean;
    /**
     * 当前用户是否在此聊天室被禁言
     */
    isCurrentChatroomBanned: boolean;
    /**
     * 当前用户是否在此聊天室的白名单中
     */
    isCurrentChatroomInWhiteList: boolean;
}
export { ChatroomJoinedInfo };
