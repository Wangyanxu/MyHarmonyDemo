/**
 * iOS 推送配置
 * @version 1.1.0
 */
declare class IosConfig {
    /**
     * iOS 平台通知栏分组 ID
     *
     * 相同的 thread-id 推送分为一组
     *
     * iOS10 开始支持
     */
    threadId: string;
    /**
     * iOS 标识推送的类型
     *
     * 如果不设置后台默认取消息类型字符串，如 RC:TxtMsg
     */
    category: string;
    /**
     * iOS 平台通知覆盖 ID
     *
     * apnsCollapseId 相同时，新收到的通知会覆盖老的通知，最大 64 字节
     *
     * iOS10 开始支持
     */
    apnsCollapseId: string;
    /**
     * iOS 富文本推送内容
     */
    richMediaUri: string;
    /**
     * iOS 推送级别. 默认值 "active"
     * ```
     * 可选值为："passive" 、 "active" 、"time-sensitive" 、 "critical"
     * "passive" 被动通知：即并不需要及时关注的通知，类似餐馆推荐通知
     * "active"   主动通知（默认的）：默认的通知，即人们可能想知道的，类似最喜欢的体育比赛的最新比分
     * "time-sensitive" 时效性通知：需要人们立刻注意的通知，类似账户安全问题或快递动态
     * "critical" 重要通知：关于个人健康或直接影响到设备拥有者的公共安全事件且需要立刻关注的，这类通知很少，一般是来自公共政府机构或健康 App。
     * ```
     */
    interruptionLevel: string;
}
export { IosConfig };
