import { MediaMessageContent } from '../MediaMessageContent';
/**
 * 消息标识
 * @version 1.2.0
 */
declare const GIFMessageObjectName = "RC:GIFMsg";
/**
 * gif 消息
 * @version 1.2.0
 * todo gif 的尺寸控制
 */
declare class GIFMessage extends MediaMessageContent {
    /**
     * GIF 图片大小，单位字节
     */
    gifDataSize: number;
    /**
     * GIF 图片宽度
     */
    width: number;
    /**
     * GIF 图片高度
     */
    height: number;
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
export { GIFMessage, GIFMessageObjectName };
