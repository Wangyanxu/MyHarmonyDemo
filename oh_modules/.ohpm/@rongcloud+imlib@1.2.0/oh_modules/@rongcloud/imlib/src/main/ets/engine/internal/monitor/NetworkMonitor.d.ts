import { NetworkType } from '../InternalDefine';
/**
 * 网络状态监听
 */
declare class NetworkMonitor {
    private netConn;
    private listener;
    /**
     * 开始监听
     * @param listener 监听器
     */
    start(listener: NetworkMonitorListener): void;
    private registerNetAvailable;
    private registerNetLost;
    private registerNetUnavailable;
    private notify;
    private nameFromType;
}
/**
 * 网络变化监听
 */
interface NetworkMonitorListener {
    /**
     * 网络发生辩护
     * @param type 网络类型
     * @param name 网络类型的名称
     */
    onNetworkChanged(type: NetworkType, name: string): void;
}
export { NetworkMonitor, NetworkMonitorListener };
