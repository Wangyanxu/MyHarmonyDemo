/**
 * GroupCall 数据监听
 * @version 1.2.0
 */
interface GroupCallSignalListener {
    /**
     * callPlus下行通知
     * @param map 数据
     */
    onCallSignalReceived(map: Map<string, string>): any;
}
export { GroupCallSignalListener };
