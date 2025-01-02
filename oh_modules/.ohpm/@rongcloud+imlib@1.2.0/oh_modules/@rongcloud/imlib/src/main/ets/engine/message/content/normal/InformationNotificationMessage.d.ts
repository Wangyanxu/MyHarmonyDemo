import { MessageContent } from '../MessageContent';
/**
 * 消息标识
 * @version 1.2.0
 */
declare const InformationNotificationMessageObjectName = "RC:InfoNtf";
/**
 * 通知类消息，一般在 UI 上当做小灰条消息展示
 * @version 1.2.0
 */
declare class InformationNotificationMessage extends MessageContent {
    /**
     * 小灰条内容
     */
    message: string;
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
export { InformationNotificationMessage, InformationNotificationMessageObjectName };
