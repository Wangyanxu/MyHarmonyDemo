import { EngineError } from '../../EngineError';
import { ChatroomJoinedInfo } from '../model/ChatroomJoinedInfo';
/**
 * 聊天室状态监听
 * @version 1.0.0
 */
interface ChatroomStatusListener {
    /**
     * 开始加入聊天室的回调
     * @param roomId 聊天室 id
     */
    onChatroomJoining(roomId: string): void;
    /**
     * 加入聊天室成功的回调
     * @param roomId 聊天室 id
     * @param info 加入的聊天室信息
     */
    onChatroomJoined(roomId: string, info: ChatroomJoinedInfo): any;
    /**
     * 加入聊天室失败的回调
     * @param roomId 聊天室 id
     * @param code 加入失败的错误码
     * @discussion 如果 code 是 ChatroomKicked 或 ChatroomNotExist，则不会自动重新加入聊天室，App 需要按照自己的逻辑处理
     */
    onChatroomJoinFailed(roomId: string, code: EngineError): any;
    /**
     * 退出聊天室成功的回调
     * @param roomId 聊天室 id
     */
    onChatroomQuited(roomId: string): any;
    /**
     * 聊天室被销毁的回调，用户在线的时候房间被销毁才会收到此回调
     * @param roomId 聊天室 id
     * @param type 聊天室销毁原因
     */
    onChatroomDestroyed(roomId: string, type: ChatroomDestroyType): any;
}
/**
 * 聊天室销毁原因
 * @version 1.0.0
 */
declare enum ChatroomDestroyType {
    /**
     * 开发者主动销毁聊天室
     */
    Manual = 0,
    /**
     * 聊天室长时间不活跃，被系统自动回收
     */
    Auto = 3
}
export { ChatroomStatusListener, ChatroomDestroyType };
