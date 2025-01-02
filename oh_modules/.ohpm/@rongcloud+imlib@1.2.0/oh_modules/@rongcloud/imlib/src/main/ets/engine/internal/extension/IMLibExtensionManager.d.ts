import { Context } from '@kit.AbilityKit';
import { InitOption } from '../../InitOption';
import { Message } from '../../message/Message';
import { ReceivedInfo } from '../../message/model/ReceivedInfo';
import { ConnectionStatus } from '../../MacroDefine';
/**
 * iOS NSClassFromString
 * Android Class.forName
 * iOS Android 均可通过类名字符串创建类，TS 不支持如此处理，所以才会有 ExtensionModuleTag 注解
 * @version 1.2.0
 */
declare class IMLibExtensionManager {
    private static instance;
    /**
     * 内置的扩展 SDK 类名，只有在此的类才会被允许加载到 modules 中，避免未知的三方 SDK 引入
     */
    private moduleNames;
    /**
     * 加载好的 SDK ，详细见 IMLibExtensionModule
     */
    private modules;
    private isEnableGroupCall;
    private constructor();
    /**
     * 单例方法
     */
    static getInstance(): IMLibExtensionManager;
    /**
     * 通知 onInit 方法
     * @param context 上下文
     * @param appKey appKey
     * @param initOption 初始化配置
     */
    notifyOnInit(context: Context, appKey: string, initOption: InitOption): void;
    /**
     * 通知 onConnect 方法
     * @param token IM token
     */
    notifyOnConnect(token: string, deviceId: string): void;
    /**
     * 通知 onConnected 方法
     * @param userId 连接成功的用户 id
     */
    notifyOnConnected(userId: string): void;
    /**
     * 通知 接收消息
     * @param msg 消息
     * @param info 接收信息
     * @returns true: 由 module 处理该消息，IM 将不再处理该消息； false：module 不处理该消息，IM 将继续处理该消息
     */
    notifyDidHoldReceivedMessage(msg: Message, info: ReceivedInfo): boolean;
    /**
     * 通知 rtc 配置发生变化
     * @param rtcConf rtc 配置
     */
    notifyOnRtcConfigUpdate(rtcConf: Map<string, Object>): void;
    /**
     * 通知连接状态变化
     * @param status 连接状态
     */
    notifyOnConnectionStatusChanged(status: ConnectionStatus): void;
    /**
     * 通知断开连接
     * @param isReceivePush 是否接收推送
     */
    notifyOnDisconnect(isReceivePush: boolean): void;
    /**
     * ExtensionModuleTag 触发的调用
     * @param clazz
     */
    registerModule(clazz: any): void;
    enableGroupCall(): boolean;
    /**
     * 创建 module
     * @param clazz 类
     * @returns module 对象
     */
    private createModule;
    /**
     * 是否可以将 module 加入 SDK
     * @param module module
     * @param moduleName module 类名
     * @returns 是否可以加入
     */
    private canAdd;
}
export { IMLibExtensionManager };
