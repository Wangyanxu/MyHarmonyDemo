import { MessageContent } from '../MessageContent';
import List from '@ohos.util.List';
/**
 * 消息标识
 * @version 1.2.0
 */
declare const ReferenceMessageObjectName = "RC:ReferenceMsg";
/**
 * 引用消息
 */
declare class ReferenceMessage extends MessageContent {
    /**
     * 发送的文本
     */
    content: string;
    /**
     * 被引用消息的发送者 ID
     */
    referMsgUserId: string;
    /**
     * 消息 objectName
     */
    objName: string;
    /**
     * 被引用的消息体
     */
    referMsg: MessageContent;
    /**
     *  被引用消息的 messageUId。服务器消息唯一 ID（在同一个 AppKey 下全局唯一）
     */
    referMsgUid: string;
    /**
     * 无参构造方法
     */
    constructor();
    /**
     * 编码方法，将消息转为 json 字符串
     * @returns json 字符串
     */
    encode(): string;
    /**
     * 解码方法，将 json 字符串转为消息
     * @param contentString json 字符串
     */
    decode(contentString: string): void;
    /**
     * 获取类名
     * @returns 类名
     */
    getClassName(): string;
    /**
     * 实现搜索方法
     * @returns 需要搜索的内容
     */
    getSearchableWord(): List<string> | null;
}
export { ReferenceMessage, ReferenceMessageObjectName };
