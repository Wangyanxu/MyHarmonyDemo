import { MessageContent, MessageFlag } from '../MessageContent';
/**
 * 消息标识
 * @version 1.0.0
 */
export declare const UnknownMessageObjectName: string;
/**
 * 消息存储类型
 * @version 1.0.0
 */
export declare const UnknownMessageFlag: MessageFlag;
/**
 * 未知消息类
 *
 * 未注册的消息会被转化为此类消息中，消息数据会存在 rawString 中
 * @version 1.0.0
 */
declare class UnknownMessage extends MessageContent {
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
}
export { UnknownMessage };
