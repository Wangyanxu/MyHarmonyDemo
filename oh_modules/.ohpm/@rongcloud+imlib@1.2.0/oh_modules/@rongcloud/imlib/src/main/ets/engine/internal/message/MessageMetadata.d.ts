import HashMap from '@ohos.util.HashMap';
import { MessageFlag } from '../../message/content/MessageContent';
/**
 * 消息的原始数据，用于保存 MessageTag 注解的内容
 */
declare class MessageMetadata {
    private static instance;
    private metadataMap;
    private constructor();
    static getInstance(): MessageMetadata;
    /**
     * 定义消息体的原始数据，实现 MessageTag 的注解都会调用该方法
     * @param className 消息体类名
     * @param objectName 消息类型
     * @param flag 消息存储类型
     */
    defineMetadata(className: string, objectName: string, flag: MessageFlag): void;
    /**
     * 根据消息体类名获取消息类型
     * @param className 类名
     * @returns 消息类型
     */
    getObjectNameFromMetadata(className: string): string;
    /**
     * 获取 SDK 中所有的消息类型，含内置消息和自定义消息
     * @returns 消息类型集合。 key ：objectName 、 value ： MessageFlag
     */
    getMessageTypeMap(): HashMap<string, MessageFlag>;
}
export { MessageMetadata };
