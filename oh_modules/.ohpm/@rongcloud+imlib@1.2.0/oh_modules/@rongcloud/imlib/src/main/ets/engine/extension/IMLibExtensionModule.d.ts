import { Context } from '@kit.AbilityKit';
import { InitOption } from '../InitOption';
import { ConnectionStatus } from '../MacroDefine';
import { Message } from '../message/Message';
import { ReceivedInfo } from '../message/model/ReceivedInfo';
/**
 * module 注解，使用该注解的类必须被创建过，该注解才能够生效
 * @version 1.2.0
 */
declare function ExtensionModuleTag(): (clazz: any) => void;
/**
 * 扩展模块协议，用于 SDK 内置模块的数据同步，例如将 IM 数据传给 RTC SDK
 * ```
 * 要实现扩展需要满足如下
 * 1. 实现该抽象类
 * 2. 实现 ExtensionModuleTag 注解
 * 3. 对扩展类的构造要求如下，才能被正常创建
 *  3.1. 如果是单例类，必须实现 getInstance() 方法：建议
 *  3.2. 如果是普通类，必须实现无参的构造方法：不建议
 * ```
 * @note TS 判断一个类是否实现了 interface 比较难，但是判断是否实现了抽象类比较简单
 * @warning SDK 仅会加载内置的模块，如果三方需要想实现该功能，请联系融云
 * @version 1.2.0
 */
declare abstract class IMLibExtensionModule {
    /**
     * IM SDK 已初始化完成
     * @param context 上下文
     * @param appKey  AppKey
     * @param initOption  初始化配置
     */
    abstract onInit(context: Context, appKey: string, initOption: InitOption): void;
    /**
     * 开始连接
     * @param token 使用的 IM token
     * @param deviceId 设备 id，使用 aaid 当做 deviceID
     */
    abstract onConnect(token: string, deviceId: string): void;
    /**
     * IM 连接成功
     * @param userId 当前用户 id
     */
    abstract onConnected(userId: string): void;
    /**
     * module 是否拦截该消息，true 由 module 处理该消息，IM 将不再处理该消息
     * @param msg 消息体
     * @param info 接收消息
     * @returns true: 由 module 处理该消息，IM 将不再处理该消息； false：module 不处理该消息，IM 将继续处理该消息
     */
    abstract didHoldReceivedMessage(msg: Message, info: ReceivedInfo): boolean;
    /**
     * rtc 配置更新
     * ```
     * voipCallInfo 是导航下发的原始数据
     * {
     *   "logServer" : "https://logServer",
     *   "dataCenter" : "BJ001",
     *   "jwtToken" : "jwtToken",
     *   "openGzip" : true|false,
     *   "voipCallInfo" : "{"strategy":1,"callEngine":[{"engineType":4,"mediaServer":"https://mediaServer","maxStreamCount":30,"wwise":1,"detectorManager":"https://detectorManager"}]}",
     * }
     * ```
     * @param rtcConf rtc 配置
     */
    abstract onRtcConfigUpdate(rtcConf: Map<string, Object>): void;
    /**
     * 连接状态发生变更
     * @param status
     */
    abstract onConnectionStatusChanged(status: ConnectionStatus): void;
    /**
     * 用户主动断开连接
     * @param isReceivePush 是否接收推送
     */
    abstract onDisconnect(isReceivePush: boolean): void;
}
export { IMLibExtensionModule, ExtensionModuleTag };
