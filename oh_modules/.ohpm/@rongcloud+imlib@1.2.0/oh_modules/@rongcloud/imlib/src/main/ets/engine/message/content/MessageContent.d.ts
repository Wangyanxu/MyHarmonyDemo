import { MentionedInfo, UserInfo } from './MessageContentInfo';
import { HashMap, List } from '@kit.ArkTS';
/**
 * 消息注解，所有的消息体类都需要实现该注解
 * @param objectName 消息类型
 * @param flag 消息存储标识
 * @version 1.0.0
 */
declare function MessageTag(objectName: string, flag: MessageFlag): (clazz: any) => void;
/**
 * 声明消息体使用无参构造方法
 * @version 1.0.0
 */
type MessageContentConstructor = new () => MessageContent;
/**
 * 消息体基类
 * @version 1.0.0
 */
declare abstract class MessageContent {
    /**
     * 消息的附加信息，会随着消息发送出去
     */
    extra?: string;
    /**
     * 消息携带的用户信息
     */
    userInfo?: UserInfo;
    /**
     * 消息的 @ 信息
     */
    mentionedInfo?: MentionedInfo;
    /**
     * 消息的原始内容
     *
     * SDK 执行消息的 decode 方法正常时，会将数据解析到消息的各个字段，rawString 将会为空
     *
     * 如果 decode 方法异常时会将消息的原始数据保存在 rawString 中
     */
    rawString?: string;
    /**
     * 编码方法，将消息对象转为 string
     * @returns
     */
    abstract encode(): string;
    /**
     * 解码方法，将 string 数据解析到消息的各个字段
     * @param contentString
     */
    abstract decode(contentString: string): void;
    /**
     * 返回消息体类名。直接写字符串可能会出现拼写错误的情况，所以此处建议直接使用 类名.name
     * ```
     * 该方法的作用是保证代码处于混淆的状态依旧可以获取正常的类名
     * 类名通过 .name 属性访问，通常不会受到代码混淆或压缩的影响，因为这个属性是在编译阶段就确定的，是对 TypeScript 类型系统的一种反射
     * 对象.constructor.name 在没有代码混淆或压缩的情况下，它通常会返回构造函数的原始名称。然而，在代码混淆或压缩后，构造函数名可能会被改变或简化，这取决于混淆或压缩器的实现
     * 如果此方法返回的不是对应的类名，将不会正常执行对应消息类的 encode() 方法
     * ```
     * @returns 该消息体类名
     */
    abstract getClassName(): string;
    /**
     * 返回消息体内的可搜索内容
     * ```
     * 如果消息包含多个字段,可将每个字段填充到 List 中; 比如图文消息的 title 和 summary。
     *
     * SDK 内置消息已支持搜索，自定义消息需要实现该方法
     * 1) 不实现该方法，该类消息无法被搜索
     * 2) 实现该方法，返回 null 或者 List 长度为 0，无法被搜索
     * 3) 实现该方法， List 里面的 空字符串 和 null 会被忽略
     * 4) List 中必须包含有效的字符串才能被搜索到
     * ```
     * @returns 可搜索的内容
     * @version 1.1.0
     */
    getSearchableWord(): List<string> | null;
    /**
     * 将基类的基础数据保存到 map 中
     * @returns
     */
    encodeBaseData(): HashMap<string, Object>;
    /**
     * 将基类的基础数据从 map 中解析出来
     * @param map
     */
    decodeBaseData(map: HashMap<string, Object>): void;
    private encodeUserInfo;
    private decodeUserInfo;
    private encodeMentionedInfo;
    private decodeMentionedInfo;
}
/**
 * 消息存储标识，各个平台的存储标识必须一致
 * ```
 * 1. 自定义消息注册到 SDK ，会以自定义消息的存储标识为准；如果消息没有注册，会以发送方的存储标识为准
 * 内置消息 SDK 负责注册，自定义消息需要 app 注册
 * 例如：一个 None 类型的自定义消息没有注册，但是收到相同的消息保存在数据库中了，说明该消息在发送方是 Save|Count 类型
 *
 * 2. 各个平台(服务端、各个移动端、Web、PC 等全部平台)相同类型消息的存储标识必须一致，否则可能出现如下问题
 * 2.1. 应该入库的消息没有正确入库，导致消息丢失
 * 2.2. 不应该入库的消息被保存进数据库，导致不入库的消息出现在 UI 上
 * 2.3. 不应该增加未读数的消息被增加了未读数，导致未读数错误
 * 2.4. 该增加未读数的消息没有增加未读数，导致未读数错误
 * 例如： 鸿蒙 Android 均自定义同一个类型的消息，鸿蒙 是 Save ，Android 是 Count ，就会出现同一条消息鸿蒙没有未读数增加而 Android 未读数累加
 * ```
 * @version 1.0.0
 */
declare enum MessageFlag {
    /**
     * 空值，不表示任何意义。此类消息不会保存到数据库，也不会记录未读数
     *
     * 一般用作命令消息，通知端上做一个动作
     */
    None = 0,
    /**
     * 消息需要被存储到消息历史记录。此类消息会保存到数据库，但是不记录未读数
     *
     * 常用于小灰条类型的消息，需要 UI 展示，但不需要增加未读数
     */
    Save = 1,
    /**
     * 消息需要被记入未读消息数。此类消息会保存到数据库，并且增加未读数
     *
     * 如文本，图片等消息均为此类
     */
    Count = 3,
    /**
     * 状态消息, 不存储不计数。此类消息不会保存到数据库，也不会记录未读数
     *
     * 对方在线能收到该消息
     *
     * 对方不在线，服务器会直接丢弃该消息，对方如果之后再上线也不会再收到此消息
     *
     * 一般用于发送输入状态之类的消息
     */
    Status = 16
}
export { MessageContent, MessageTag, MessageFlag, MessageContentConstructor };
