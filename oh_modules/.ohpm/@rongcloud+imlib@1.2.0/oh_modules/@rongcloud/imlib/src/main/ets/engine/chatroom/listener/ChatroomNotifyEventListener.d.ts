import { ChatroomMemberBanEvent } from '../model/ChatroomMemberBanEvent';
import { ChatroomMemberBlockEvent } from '../model/ChatroomMemberBlockEvent';
import { ChatroomSyncEvent } from '../model/ChatroomSyncEvent';
/**
 * 添加 IMLib 的聊天室事件通知监听器
 * @version 1.1.0
 */
interface ChatroomNotifyEventListener {
    /**
     * 多端登录相关事件通知回调，包含三种通知 case
     * ```
     * 1. 多端登录情况，一端加入聊天室，需要通知另一终端
     * 2. 多端登录情况，一端退出聊天室，需要通知另一终端
     * 3. 用户多端加入聊天室场景：用户在 Android 端加入聊天室，在 Web 端登录后又加入一个新的聊天室，自动将用户从上一个聊天室踢出
     * 注：被踢出聊天室中的所有成员，包括被踢出用户
     * 注：case 3 如果开通了一个用户可加入多个聊天室的情况不会进行通知
     * ```
     */
    onChatroomNotifyMultiLoginSync(syncEvent: ChatroomSyncEvent): any;
    /**
     * 封禁用户相关事件通知回调, 包含两种通知 case
     * ```
     * 1. 封禁用户，聊天室中所有成员，包括被封禁用户
     *  注：
     *  封禁后用户被自动踢出聊天室
     *  封禁后用户不会再收到被踢出的通知
     *  是否接收通知取决于 server API 的入参 needNotify（默认为 false 不通知）
     *
     * 2. 解除封禁，被解除封禁的成员。
     *  注：
     *  用户未在线时，再登录时不会收到通知
     *  服务端仅对主动解除封禁做通知，封禁时间到了，自动解除的不通知， 此刻调用加入聊天室接口可成功
     *  仅对解除封禁的本人做通知，是否接收通知取决于 server API 的入参 needNotify（默认为 false 不通知）
     * ```
     * @param blockEvent
     * @discussion 封禁时长最大值为43200分钟/1个月, 最小值1分钟
     */
    onChatroomNotifyBlock(blockEvent: ChatroomMemberBlockEvent): any;
    /**
     * 禁言相关事件通知回调，包含以下 case
     * ```
     * 注：
     * 禁言，受到白名单保护，即白名单中用户不会被禁言
     * 是否接收通知取决于 server API 的入参 needNotify（默认为 false 不通知）。通知范围：
     * 1. 禁言指定聊天室中用户，通知指定聊天室中任何成员
     * 2. 解除指定聊天室中用户禁言，通知指定聊天室中任何成员
     *
     * 注：
     * 全体禁言，也受到白名单保护，即白名单中用户不会被禁言
     * 是否接收通知取决于 server API 的入参 needNotify（默认为 false 不通知）。通知范围：
     * 3. 聊天室全体禁言，通知聊天室中所有成员
     * 4. 解除聊天室全体禁言，通知聊天室中所有成员
     *
     * 注：
     * 白名单是聊天室维度，添加后，用户在此聊天室内无法被设置禁言，即被保护
     * 生命周期跟随聊天室，销毁后，清空白名单，重建聊天室时，需要再次调用接口添加
     * 是否接收通知取决于 server API 的入参 needNotify（默认为 false 不通知）。通知范围：
     * 5. 添加禁言用户白名单，通知聊天室中所有成员
     * 6. 移出禁言用户白名单，通知聊天室中所有成员
     *
     * 注：
     * 全局禁言是最高优先级，全局禁言后，禁言用户在所有聊天室内都无法发言，即便配置白名单也不行
     * 只有全局禁言或解除全局禁言的用户可以收到通知。是否接收通知取决于 server API 的入参 needNotify（默认为 false 不通知）
     * 7. 用户聊天室全局禁言，通知被全局禁言用户
     * 8. 解除用户聊天室全局禁言，通知被解除全局禁言用户
     * ```
     * @param banEvent
     * @discussion 禁言时长最大值为43200分钟/1个月, 最小值1分钟
     */
    onChatRoomNotifyBan(banEvent: ChatroomMemberBanEvent): any;
}
export { ChatroomNotifyEventListener };
