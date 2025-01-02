/**
 * 消息接收信息
 * @note 建议当 left = 0 并且 hasPackage = false 时刷新 UI
 * @version 1.0.0
 */
declare class ReceivedInfo {
    /**
     * 还剩余的未接收的消息数，left>=0
     */
    left: number;
    /**
     * SDK 拉取服务器的消息以包(package)的形式批量拉取，有 package 存在就意味着远端服务器还有消息尚未被 SDK 拉取
     */
    hasPackage: boolean;
    /**
     * 是否是离线消息
     */
    isOffline: boolean;
}
export { ReceivedInfo };
