import { Message } from "../../../message/Message";
import { ReceivedInfo } from "../../../message/model/ReceivedInfo";
/**
 * 消息监听
 * @version 1.2.0
 */
export interface MessageReceivedListener {
    /**
     * 消息接收监听
     * @param message 消息体
     * @param info 消息接收信息
     */
    onMessageReceived(message: Message, info: ReceivedInfo): void;
}
