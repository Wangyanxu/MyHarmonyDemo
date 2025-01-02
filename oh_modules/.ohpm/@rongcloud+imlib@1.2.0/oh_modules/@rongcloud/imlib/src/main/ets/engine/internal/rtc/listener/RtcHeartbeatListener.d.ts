import { EngineError } from '../../../EngineError';
/**
 * RTC 心跳监听
 * @version 1.2.0
 */
interface RtcHeartbeatListener {
    /**
     * 心跳发送事件的监听
     * @param roomId 房间 Id
     * @param requestId 请求 Id，long 类型
     */
    onRtcHeartbeatSend(roomId: string, requestId: number): any;
    /**
     * 心跳发送结果
     * @param code 错误码，EngineError.Success 为成功，其余为失败
     * @param roomId 房间 Id
     * @param requestId 请求 Id，long 类型
     * @param version 版本，long 类型
     */
    onRtcHeartBeatSendResult(code: EngineError, roomId: string, requestId: number, version: number): any;
}
export { RtcHeartbeatListener };
