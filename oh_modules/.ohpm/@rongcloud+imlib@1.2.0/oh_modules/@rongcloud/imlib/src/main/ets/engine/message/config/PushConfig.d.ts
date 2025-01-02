import { AndroidConfig } from './AndroidConfig';
import { HarmonyConfig } from './HarmonyConfig';
import { IosConfig } from './IosConfig';
/**
 * 推送配置
 * @version 1.0.0
 */
declare class PushConfig {
    /**
     * ```
     * 通知栏是否屏蔽通知标题（true: 不显示通知标题；false: 显示通知标题）
     * 默认情况下融云单聊消息通知标题为用户名、群聊消息为群名称，设置后不会再显示通知标题。
     * 此属性只针目标用户为 iOS 平台时有效，Android 第三方推送平台的通知标题为必填项，所以暂不支持
     * ```
     * @version 1.1.0
     */
    disablePushTitle: boolean;
    /**
     * 推送标题
     *
     * 如果没有设置，会使用下面的默认标题显示规则：
     *
     * 内置消息：单聊通知标题显示为发送者名称，群聊通知标题显示为群名称。
     *
     * 自定义消息：默认不显示标题。
     */
    pushTitle: string;
    /**
     * 推送内容
     */
    pushContent: string;
    /**
     * 远程推送附加信息
     */
    pushData: string;
    /**
     * 是否强制显示通知详情。推送越权设置，当目标用户设置推送不显示消息详情时，可通过此功能，强制设置该条消息显示推送详情。
     * @version 1.1.0
     */
    forceShowDetailContent: boolean;
    /**
     * iOS 推送配置
     * @version 1.1.0
     */
    iosConfig: IosConfig;
    /**
     * Android 推送配置
     * @version 1.1.0
     */
    androidConfig: AndroidConfig;
    /**
     * HarmonyOS 推送配置
     * @version 1.1.0
     */
    harmonyConfig: HarmonyConfig;
}
export { PushConfig };
