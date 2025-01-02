import { MessageContent } from './MessageContent';
/**
 * 媒体消息体基类
 *
 * SDK 中所有媒体类型消息（图片、文件等）均继承此类
 * @version 1.0.0
 */
declare abstract class MediaMessageContent extends MessageContent {
    /**
     * 媒体资源的名称
     */
    name: string;
    /**
     * 媒体资源的本地路径
     */
    localPath: string;
    /**
     * 媒体资源的远端地址
     */
    remoteUrl: string;
    /**
     * 获取正常的 localPath ，去掉 file://
     *
     * 在鸿蒙系统内部，沙盒路径需要用 file:// 开头才能被 fs 识别
     *
     * 原生层使用不能以 file:// 开头
     */
    getCorrectedLocalPath(localPath: string): string;
}
export { MediaMessageContent };
