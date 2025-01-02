import { Message } from '../Message';
/**
 * 消息扩展监听
 * @version 1.2.0
 */
interface MessageExpansionListener {
    /**
     * 消息扩展信息更改的回调
     *
     * @param expansion 消息扩展信息中更新的键值对
     * @param message 消息
     * @discussion 该方法的 expansion 只包含更新的键值对，不是全部的数据。如果想获取全部的键值对，请使用 message 的 expansion 属性。
     */
    onMessageExpansionUpdate(expansion: Map<string, string>, message: Message): any;
    /**
     * 消息扩展信息删除的回调
     * @param keyArray  消息扩展信息中删除的键值对 key 数组
     * @param message 消息
     */
    onMessageExpansionRemove(keyArray: Array<string>, message: Message): any;
}
export { MessageExpansionListener };
