/**
 * HarmonyOS 推送配置
 * @version 1.1.0
 */
declare class HarmonyConfig {
    /**
     * HarmonyOS 通知栏消息右侧大图标 URL
     * 通知栏右侧图片，格式支持 png、jpg，图片长*宽 < 25000 像素，图片不满足要求的情况下，终端不能显示通知消息。
     */
    imageUrl: string;
    /**
     * HarmonyOS 推送消息分类，即时通讯消息建议设置为 "IM"
     * ```
     * category 取值必须为大写字母
     * 消息自分类标识，默认值为 null，如果为 null，则以融云管理后台鸿蒙推送配置的为准
     * 其他的消息分类请参考鸿蒙通知消息分类标准文档: https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/message-classification-0000001149358835
     * ```
     */
    category: string;
}
export { HarmonyConfig };
