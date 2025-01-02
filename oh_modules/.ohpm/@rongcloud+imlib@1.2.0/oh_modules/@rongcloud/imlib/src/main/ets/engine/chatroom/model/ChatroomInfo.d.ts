import { Order } from '../../MacroDefine';
import { List } from '@kit.ArkTS';
import { ChatroomMemberInfo } from './ChatroomMemberInfo';
/**
 * 聊天室信息
 * @version 1.0.0
 */
declare class ChatroomInfo {
    /**
     * 聊天室 ID
     */
    roomId: string;
    /**
     * 当前聊天室的成员总数
     */
    totalUserCount: number;
    /**
     * 排序
     */
    order: Order;
    /**
     * 聊天室中的部分成员信息列表
     *
     * order 为 Ascending 返回最早加入的成员列表，按成员加入时间升序排列
     *
     * order 为 Descending 返回最晚加入的成员列表，按成员加入时间降序排列
     */
    userInfoList: List<ChatroomMemberInfo>;
}
export { ChatroomInfo };
