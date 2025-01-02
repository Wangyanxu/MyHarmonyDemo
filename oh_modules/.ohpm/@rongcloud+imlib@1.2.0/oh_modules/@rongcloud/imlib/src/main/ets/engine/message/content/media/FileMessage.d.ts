import { MediaMessageContent } from '../MediaMessageContent';
import List from '@ohos.util.List';
/**
 * 消息标识
 * @version 1.0.0
 */
declare const FileMessageObjectName: string;
/**
 * 文件消息
 * @version 1.0.0
 */
declare class FileMessage extends MediaMessageContent {
    /**
     * 文件大小，单位为 Byte
     */
    size: number;
    /**
     * 文件类型
     */
    type: string;
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
export { FileMessage, FileMessageObjectName };
