import { Conversation } from '../Conversation';
/**
 * 会话状态信息
 * @version 1.2.0
 */
declare class SearchConversationResult {
    /**
     * 会话
     */
    conversation: Conversation;
    /**
     * 匹配数量
     */
    matchCount: number;
}
export { SearchConversationResult };
