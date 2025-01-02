import { MessageContent } from '../MessageContent';
/**
 * 消息标识
 * @version 1.2.0
 */
declare const CommandMessageObjectName = "RC:CmdMsg";
/**
 * 命令消息类，不存储不计数。和 CommandNotificationMessage 不同的是该消息不入库、不在界面展示
 * @version 1.2.0
 */
declare class CommandMessage extends MessageContent {
    /**
     * 命令名
     */
    name: string;
    /**
     * 命令消息的扩展数据，可以为任意字符串，如存放您定义的 json 数据。
     */
    data: string;
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
export { CommandMessage, CommandMessageObjectName };
