import common from '@ohos.app.ability.common';
/**
 * deviceId 的处理模块
 * ```
 * 鸿蒙提供 aaid 作为 deviceID，问题是获取 aaid 是异步接口的，而 SDK 初始化是同步的
 * 1. 优先返回内存中的 deviceID
 * 2. 否则读取 Preferences 的 deviceID ，更新内存并返回
 * 3. 否则返回空字符串当 deviceID，异步获取 aaid 当做 deviceID，更新内存，保存到 Preferences 并立即传给底层
 * ```
 */
declare class DeviceIDHandler {
    /**
     * 本地存储，类似于 Android SP 或 iOS UserDefaults
     */
    private preferences?;
    /**
     * 内存中的 deviceID
     */
    private memDeviceId;
    private static PreferencesKey;
    private static DeviceIdKey;
    /**
     * 返回 deviceID
     */
    getDeviceId(context: common.Context): string;
    /**
     * 等待更新 deviceID
     * @returns
     */
    waitUpdateDeviceId(): Promise<string>;
    private getDeviceIdSync;
    private ensurePreferences;
    private getCachedDeviceId;
    private refreshDeviceIdAsync;
    private fetchDeviceIdAsync;
    private updateDeviceIdAsync;
    /**
     * 检查当前的 deviceID 是否正常
     * @param curDeviceID
     */
    private checkDeviceIdCacheValidAsync;
}
export { DeviceIDHandler };
