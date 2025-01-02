import { PushNotificationLevel } from '../../MacroDefine';
/**
 * 获取会话配置
 * @version 1.0.0
 */
interface IGetConversationOption {
    /**
     * 会话的毫秒时间戳，返回小于该时间的会话；如果为 0，则查询全部。当分页时，可以传入上一次查询的最后一条消息的发送时间
     */
    time: number;
    /**
     * 获取的数量（当实际取回的会话数量小于 count 值时，表明已取完数据）
     */
    count: number;
}
/**
 * 置顶配置
 * @version 1.0.0
 */
interface ISetConversationTopOption {
    /**
     * 是否置顶，true 设置置顶；false 取消置顶
     */
    isTop: boolean;
    /**
     * 是否创建会话：对应的会话本地不存在时，true 将创建该会话； false 不创建该会话
     */
    isNeedCreate: boolean;
}
/**
 * @version 1.0.0
 */
interface IQuietHoursOption {
    /**
     * 开始消息免打扰时间，格式为 HH:MM:SS
     */
    startTime: string;
    /**
     * 需要消息免打扰分钟数，[1 ~ 1439]
     *
     *  比如，您设置的起始时间是 00：00， 结束时间为 01:00，则 duration 为 60 分钟。设置为 1439 代表全天免打扰 （23 * 60 + 59 = 1439 ）
     */
    duration: number;
    /**
     * 消息通知级别，Default 代表移除免打扰
     */
    level: PushNotificationLevel;
}
export { IGetConversationOption, ISetConversationTopOption, IQuietHoursOption };
