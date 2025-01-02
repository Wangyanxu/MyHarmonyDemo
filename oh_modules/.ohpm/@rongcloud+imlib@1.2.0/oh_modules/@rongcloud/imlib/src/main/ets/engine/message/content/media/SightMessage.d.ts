import { MediaMessageContent } from '../MediaMessageContent';
/**
 * 消息标识
 * @version 1.2.0
 */
declare const SightMessageObjectName = "RC:SightMsg";
/**
 * 小视频消息
 * @version 1.2.0
 * todo
 */
declare class SightMessage extends MediaMessageContent {
    /**
     * 视频缩略图 base64
     */
    base64: string;
    /**
     * 视频时长，单位秒
     */
    duration: number;
    /**
     * 视频大小
     */
    size: number;
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
export { SightMessage, SightMessageObjectName };
