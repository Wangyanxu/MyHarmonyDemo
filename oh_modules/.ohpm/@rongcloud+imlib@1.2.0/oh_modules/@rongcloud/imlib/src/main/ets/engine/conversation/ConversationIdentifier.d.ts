import { EngineError } from '../EngineError';
import { ConversationType } from '../MacroDefine';
import { Message } from '../message/Message';
import { Conversation } from './Conversation';
import { ConversationStatusInfo } from './model/ConversationStatusInfo';
/**
 * 会话标识
 * @version 1.0.0
 */
declare class ConversationIdentifier {
    /**
     * 会话类型
     */
    conversationType: ConversationType;
    /**
     * 会话 ID
     */
    targetId: string;
    /**
     * 所属会话的业务标识，长度限制 20 字符
     * ```
     * 做正常的单群聊业务，channelId 不需要处理，默认为空字符串
     * 为了保持功能兼容，没有使用过 channelId 的单群聊会话，channelId 会被转化为空字符串
     *
     * channelId 可以分为两种功能：
     * 1. 以 channelId 维度区分会话，适用于单群聊，常用于多租户场景（单群聊 channelId 直接使用，不需要创建）
     * 举例甲、乙两人同时存在于两个不同的公司，可以通过 channelId 当做不同的公司标识用于区分会话
     * 例如公司 A 的 channelId = CompanyA ；公司 B 的 channelId = CompanyB
     * 甲、乙两人在 A、B 两个公司的均产生一个单聊会话，会话类型和 targetId 完全一样，但是 channelId 在公司 A 时为 CompanyA，在公司 B 时为 CompanyB
     *
     * 2. 以会话维度区分 channelId，适用于超级群的频道功能（超级群 channelId 需要创建）
     * 通过 conversationType & targetId 确定一个超级群，依靠 channelId 来区分超级群下的不同频道
     * 例如创建超级群，里面分吃、喝、玩、乐四个频道，那么就设置四个不同的 channelId
     * ```
     * 仅支持单聊、群聊和超级群，其他类型的会话请不要设置或传入空字符串
     * @version 1.2.0
     */
    private _channelId;
    /**
     * 检查 ConversationIdentifier 是否合法
     * @returns ConversationIdentifier 合法则返回 EngineError.Success ，否则返回具体的错误码
     */
    check(): EngineError;
    /**
     * 使用两个参数构建(conversationType、targetId)
     * @param conversationType 会话类型
     * @param targetId 会话 Id
     * @returns 会话标识
     * @version 1.2.0
     */
    static createWith2(conversationType: ConversationType, targetId: string): ConversationIdentifier;
    /**
     * 使用三个参数构建(conversationType、targetId、channelId)
     * @param conversationType 会话类型
     * @param targetId 会话 Id
     * @param channelId 业务标识
     * @returns 会话标识
     * @version 1.2.0
     */
    static createWith3(conversationType: ConversationType, targetId: string, channelId: string): ConversationIdentifier;
    /**
     * 通过 Message 创建
     * @param msg 消息对象，如果 msg 为空，返回的 ConversationIdentifier 的会话类型为单聊，targetId & ChannelId 均为空字符串
     * @returns 会话标识
     * @version 1.2.0
     */
    static createWithMessage(msg: Message): ConversationIdentifier;
    /**
     * 通过 Conversation 创建
     * @param con 会话对象对象，如果 con 为空，返回的 ConversationIdentifier 的会话类型为单聊，targetId & ChannelId 均为空字符串
     * @returns 会话标识
     * @version 1.2.0
     */
    static createWithConversation(con: Conversation): ConversationIdentifier;
    /**
     * 通过 ConversationStatusInfo 创建
     * @param info 如果 info 为空，返回的 ConversationIdentifier 的会话类型为单聊，targetId & ChannelId 均为空字符串
     * @returns 会话标识
     * @version 1.2.0
     */
    static createWithConversationStatusInfo(info: ConversationStatusInfo): ConversationIdentifier;
    set channelId(value: string);
    /**
     * 返回有效的 channelId
     * @returns null 或 undefined 会返回空字符串
     */
    get channelId(): string;
    /**
     * 会话类型是否合法
     * @returns true 合法；false 不合法
     */
    private isValidConversationType;
    /**
     * targetId 是否合法
     * @returns true 合法；false 不合法
     */
    private isValidTargetId;
    /**
     * channelId 是否合法
     * @returns true 合法；false 不合法
     */
    private isValidChannelId;
    /**
     * 该会话是否支持 channelID。单聊、群聊、超级群支持，其余不支持
     * @returns 是否支持
     */
    private isSupportChannelId;
}
export { ConversationIdentifier };
