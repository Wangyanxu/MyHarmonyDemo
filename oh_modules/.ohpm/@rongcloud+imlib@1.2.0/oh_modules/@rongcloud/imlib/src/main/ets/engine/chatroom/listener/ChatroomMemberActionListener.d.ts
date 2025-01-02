import { ChatRoomMemberActionModel } from '../model/ChatroomMemberAction';
/**
 * 聊天室用户进入、退出聊天室监听
 * @version 1.1.0
 */
interface ChatroomMemberActionListener {
    /**
     * 聊天室成员变更
     * @param actionModel 聊天室成员变更 model
     */
    onMemberChange(actionModel: ChatRoomMemberActionModel): void;
}
export { ChatroomMemberActionListener };
