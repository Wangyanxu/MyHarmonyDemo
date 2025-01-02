/**
 * Rtc 房间事件监听
 * @version 1.2.0
 */
interface RtcRoomEventListener {
    /**
     * 用于接受房间内状态变更通知，比如房间内有人员变动、资源变动等
     * @param pbBuffer pb 数据
     */
    onEventReceived(pbBuffer: Uint8Array): any;
}
export { RtcRoomEventListener };
