import { List } from '@kit.ArkTS';
import { Order } from '../../MacroDefine';
/**
 * @version 1.0.0
 */
interface ISendMsgOption {
    /**
     * 消息是否加密
     * @discussion encrypted 预留字段没有特殊意义，公有云客户请忽略该字段
     * @version 1.2.0
     */
    encrypted?: boolean;
}
/**
 * 获取本地消息的配置
 *
 * beforeCount afterCount 总共分为四种情况
 * ```
 * 1. beforeCount > 0 && afterCount > 0，将获取 beforeCount + {messageId} + afterCount 的消息
 * 2. beforeCount > 0 && afterCount == 0，将获取 beforeCount + {messageId} 的消息
 * 3. beforeCount == 0 && afterCount > 0，将获取 {messageId} + afterCount 的消息
 * 4. beforeCount == 0 && afterCount == 0，将获取 {messageId}
 * ```
 * @version 1.0.0
 */
interface IGetLocalMsgByIdOption {
    /**
     * objectName 集合，为空的话代表获取所有类型的本地消息
     *
     * 有效值的话代表获取指定类型的消息
     */
    objNameList?: List<string>;
    /**
     * 消息本地数据库 ID
     */
    messageId: number;
    /**
     * 在 messageId 之前的消息个数，取值 >=0
     * @discussion beforeCount 如果传入 10 ，但是获取的个数不足时说明往前没有更多的消息了
     */
    beforeCount: number;
    /**
     * 在 messageId 之后的消息个数，取值 >=0
     * @discussion afterCount 如果传入 10 ，但是获取的个数不足时说明往后没有更多的消息了
     */
    afterCount: number;
}
/**
 * 获取本地消息的配置
 *
 * beforeCount afterCount 总共分为四种情况
 * ```
 * 1. beforeCount > 0 && afterCount > 0，将获取 beforeCount + {time} + afterCount 的消息
 * 2. beforeCount > 0 && afterCount == 0，将获取 beforeCount + {time} 的消息
 * 3. beforeCount == 0 && afterCount > 0，将获取 {time} + afterCount 的消息
 * 4. beforeCount == 0 && afterCount == 0，将获取 {time}
 * ```
 * @version 1.0.0
 */
interface IGetLocalMsgByTimeOption {
    /**
     * objectName 集合，为空的话代表获取所有类型的本地消息
     *
     * 有效值的话代表获取指定类型的消息
     */
    objNameList?: List<string>;
    /**
     * 毫秒时间戳
     * 初次可以传入当前时间: Date.now() 或者传入会话的 lastSentTime
     * @see Conversation
     */
    time: number;
    /**
     * 在 messageId 之前的消息个数，取值 >=0
     * @discussion beforeCount 如果传入 10 ，但是获取的个数不足时说明往前没有更多的消息了
     */
    beforeCount: number;
    /**
     * 在 messageId 之后的消息个数，取值 >=0
     * @discussion afterCount 如果传入 10 ，但是获取的个数不足时说明往后没有更多的消息了
     */
    afterCount: number;
}
/**
 * 获取远端消息配置
 * @version 1.0.0
 */
interface IGetRemoteMsgOption {
    /**
     * 毫秒时间戳
     * 初次可以传入当前时间: Date.now() 或者传入 Conversation.lastSentTime
     * @discussion 如果传入 Date.now() 但是拿到的消息为空，可能是设备时间有问题，尤其可能是模拟器时间不对
     */
    time: number;
    /**
     * 消息个数，[1 ~ 100]
     */
    count: number;
    /**
     * 获取的消息顺序
     *
     * Descending： 获取比 time 小的消息列表
     *
     * Ascending：获取比比 time 大的消息列表
     */
    order: Order;
    /**
     * 是否包含本地已存在消息
     *
     * @discussion true: 拉取回来的消息全部返回 ; false: 拉取回来的消息只返回本地数据库中不存在的
     */
    isCheckDup: boolean;
}
/**
 * 个数配置
 * @version 1.0.0
 */
interface ICountOption {
    /**
     * 消息个数
     */
    count: number;
    /**
     * 获取数据顺序
     * @see Order
     */
    order: Order;
}
/**
 * 在时间区间内搜索消息的参数配置，按照时间戳降序查找
 * ```
 * 例如 startTime 和 endTime 之间按时间戳从小到大有 100 条消息，limit = 10，获取后 10 条消息
 * 可以有两种分页获取的方式
 * 1 ： startTime endTime 固定不变，每获取一批消息，offset 对应增加
 * 2 ： startTime 固定不变，offset 固定为 0，每获取一批消息，endTime 更新为这批消息的最小 sentTime
 * ```
 * @version 1.1.0
 */
interface ISearchMessageInTimeRangeOption {
    /**
     * 开始时间，毫秒时间戳， 必须满足  startTime < endTime
     */
    startTime: number;
    /**
     * 结束时间，毫秒时间戳，首次搜索可传入会话最后一条消息的 sentTime
     */
    endTime: number;
    /**
     * 分页搜索时的偏移量, 首次可填入 0
     */
    offset: number;
    /**
     * 每页的数量，传 0 时会返回所有搜索到的消息；非 0 时根据 startTime 逐页返回，取值范围 [0, 100]
     */
    limit: number;
}
export { ISendMsgOption, IGetLocalMsgByIdOption, IGetLocalMsgByTimeOption, IGetRemoteMsgOption, ICountOption, ISearchMessageInTimeRangeOption };
