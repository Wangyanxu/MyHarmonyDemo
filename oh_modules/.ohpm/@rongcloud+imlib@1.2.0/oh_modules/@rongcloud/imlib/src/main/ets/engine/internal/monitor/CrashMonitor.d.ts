/**
 * 崩溃监听
 */
declare class CrashMonitor {
    private listener;
    start(listener: CrashMonitorListener): void;
    private recordByAppEventGroup;
    private recordByAppEventInfo;
    private getCrashObject;
    /**
     * 是否是 SDK 的崩溃
     * @param eventInfo
     * @returns
     */
    private isSdkCrash;
}
interface CrashMonitorListener {
    onSdkCrashed(exception: string): void;
}
export { CrashMonitor, CrashMonitorListener };
