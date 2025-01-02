import { MessageContent } from '../MessageContent';
import List from '@ohos.util.List';
/**
 * 消息标识
 * @version 1.2.0
 */
declare const RichContentMessageObjectName = "RC:ImgTextMsg";
/**
 * 图文消息
 * @version 1.2.0
 */
declare class RichContentMessage extends MessageContent {
    /**
     * 图文消息的标题
     */
    title: string;
    /**
     * 图文消息的内容摘要
     */
    content: string;
    /**
     * 图文消息图片 URL
     */
    imgUrl: string;
    /**
     * 图文消息中包含的需要跳转到的 URL
     */
    url: string;
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
export { RichContentMessage, RichContentMessageObjectName };
