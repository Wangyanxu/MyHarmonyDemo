import { EngineError } from '../EngineError';
/**
 * 接口的统一回调，目标是统一做参数检查
 * @param code 返回的错误码
 * @param data 泛型，需要返回的数据类型
 */
export type RCCallback<T> = (code: EngineError, data?: T) => void;
/**
 * App 状态，不对外
 */
declare enum AppState {
    /**
     * 前台
     */
    Foreground = 0,
    /**
     * 后台
     */
    Background = 1
}
/**
 * 网络类型，不对外
 */
declare enum NetworkType {
    /**
     * 无网络
     */
    None = 0,
    /**
     * WiFi
     */
    Wifi = 1,
    /**
     * 有线网络，例如电脑接了网线
     */
    Wired = 2,
    /**
     * 蜂窝数据网络 2G
     */
    Cellular2G = 3,
    /**
     * 蜂窝数据网络 3G
     */
    Cellular3G = 4,
    /**
     * 蜂窝数据网络 4G
     */
    Cellular4G = 5,
    /**
     * 蜂窝数据网络 5G
     */
    Cellular5G = 6
}
/**
 * 聊天室加入状态，不对外
 */
declare enum ChatroomStatus {
    /**
     * 空闲状态
     */
    Idle = 0,
    /**
     * 加入中
     */
    Joining = 1,
    /**
     * 已加入
     */
    Joined = 2,
    /**
     * 加入失败
     */
    JoinFailed = 3,
    /**
     * 离开中
     */
    Leaving = 4,
    /**
     * 已离开
     */
    Left = 5,
    /**
     * 离开失败
     */
    LeaveFailed = 6,
    /**
     * 手动销毁
     */
    DestroyManually = 7,
    /**
     * 自动销毁
     */
    DestroyAuto = 8
}
export { AppState, NetworkType, ChatroomStatus };
