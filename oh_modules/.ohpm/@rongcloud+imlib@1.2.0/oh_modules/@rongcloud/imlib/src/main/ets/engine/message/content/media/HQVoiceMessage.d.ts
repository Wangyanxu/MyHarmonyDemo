import { MediaMessageContent } from '../MediaMessageContent';
/**
 * 消息标识
 * @version 1.0.0
 */
declare const HQVoiceMessageObjectName = "RC:HQVCMsg";
/**
 * 高清语音消息
 * @version 1.0.0
 */
declare class HQVoiceMessage extends MediaMessageContent {
    /**
     * 语音消息时长，单位秒
     */
    duration: number;
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
export { HQVoiceMessage, HQVoiceMessageObjectName };
