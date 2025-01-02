import { ConversationType } from '../../MacroDefine';
/**
 * 消息拦截信息
 * @version 1.0.0
 */
declare class MessageBlockInfo {
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
     *
     * 仅支持单群聊和超级群，其他类型的会话请传入空字符串
     * @version 1.2.0
     */
    channelId: string;
    /**
     * 被拦截的消息 UID
     */
    messageUid: string;
    /**
     * 附加信息
     */
    extra: string;
    /**
     * 拦截类型
     */
    blockType: MessageBlockType;
    /**
     * 消息被拦截的触发来源
     */
    sourceType: MessageBlockSourceType;
    /**
     * 源内容 Json 字符串，sourceType 为 1、2 时返回
     *
     * sourceType 为 0，sourceContent 内容为 nil
     *
     * sourceType 为 1，sourceContent 是扩展内容，示例 {"mid":"xxx-xxx-xxx-xxx","put":{"key":"敏感词"}}
     *
     * sourceType 为 2，sourceContent 是消息修改后内容，示例 {"content":"敏感词"}
     */
    sourceContent: string;
}
/**
 * 拦截类型
 * @version 1.0.0
 */
declare enum MessageBlockType {
    None = 0,
    /**
     * 全局敏感词：命中了融云内置的全局敏感词
     */
    BlockGlobal = 1,
    /**
     * 自定义敏感词拦截：命中了客户在融云自定义的敏感词
     */
    BlockCustom = 2,
    /**
     * 第三方审核拦截：命中了第三方（数美）或消息回调服务决定不下发的状态
     */
    BlockThirdParty = 3
}
/**
 * 消息被拦截的触发来源
 * @version 1.0.0
 */
declare enum MessageBlockSourceType {
    /**
     * 默认，原始消息内容被拦截
     */
    Default = 0,
    /**
     * 消息扩展被拦截
     */
    Extension = 1,
    /**
     * 修改的消息内容被拦截
     */
    Modification = 2
}
export { MessageBlockInfo, MessageBlockType, MessageBlockSourceType };
