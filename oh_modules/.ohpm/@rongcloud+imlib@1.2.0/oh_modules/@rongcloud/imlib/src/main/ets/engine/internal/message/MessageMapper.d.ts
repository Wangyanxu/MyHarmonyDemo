import { NativeMessageType } from 'librongimlib.so';
import { MessageContent, MessageContentConstructor } from '../../message/content/MessageContent';
import { List } from '@kit.ArkTS';
/**
 * 消息体映射工具类
 * ```
 * 1. 所有的内部消息和外部消息都会被注册到此类
 * 2. 所有内部类需要额外处理，参考 registerBuiltInMessage()
 * ```
 */
declare class MessageMapper {
    private static instance;
    /**
     * 消息体映射字典，value 为消息体的构造方法
     */
    private mapper;
    /**
     * SDK 内置消息的 objectName 列表
     * 避免 SDK 内置消息注册给底层
     */
    private builtInMsgObjectNames;
    /**
     * 未注册/未识别的消息 objectName 列表
     * 降低报错 log 数量
     */
    private unregisterMsgObjectNames;
    private constructor();
    /** 单例对象 **/
    static getInstance(): MessageMapper;
    /**
     * 初始化，加载内置消息
     */
    init(): void;
    /**
     * 注册消息
     * @param classList 消息类列表
     */
    registerMessage(classList: List<MessageContentConstructor>): void;
    /**
     * 根据消息类型和消息内容创建消息体对象
     * ```
     * 1. objectName || contentString 为空，返回 UnknownMessage，消息内容保存在 rawString 中
     * 2. 消息体没有无参构造方法，返回 UnknownMessage，消息内容保存在 rawString 中
     * 3. 消息体 decode 失败，返回对应的消息对象，消息内容保存在 rawString 中
     * ```
     * @param objectName 消息类型
     * @param contentString 消息内容
     * @returns 消息体对象
     */
    createMessageContent(objectName: string, contentString: string): MessageContent;
    /**
     * 获取原生的消息类型，用于将自定义消息注册给底层，需要将内置消息过滤掉
     * @returns 消息类型
     */
    getNativeMessageTypeArray(): Array<NativeMessageType>;
    /**
     * 注册内置消息
     * 1. 将内置消息注册
     * 2. 将内置消息 objectName 保存，避免注册到底层
     */
    private registerAllBuiltInMessage;
    /**
     * 注册一个内置消息
     * @param list 保存内置消息的集合
     * @param msgContent 消息体
     * @param objectName 消息 objectName
     */
    private registerBuiltInMessage;
    /**
     * 过滤内置消息体：内置消息不需要注册给底层
     * @param objectName 消息类型
     * @returns 是否为内置消息
     */
    private isBuiltInMessage;
    /**
     * 创建 UnknownMessage，将消息内容保存在 rawString 中
     * @param contentString 原始消息内容
     * @returns UnknownMessage
     */
    private createUnknownMessage;
    /**
     * 打印错误 log，并将无法解析的 objectName 缓存起来，避免相同的错误 log 频繁打印
     * @param methodName 执行出现问题的方法名
     * @param error 错误描述
     * @param objectName 发生错误的 objectName
     * @param contentString 发送错误的 contentString
     */
    private recordDecodeMsgErrorLog;
}
export { MessageMapper };
