/**
 * 初始化配置
 * @version 1.0.0
 */
declare class InitOption {
    /**
     * 数据中心区域码
     *
     * 默认为北京数据中心，用户可以根据实际情况设置区域码，设置之后，SDK 将会使用特定区域的服务地址
     *
     * 每个数据中心都会有对应服务地址，如果开发者手动设置了本类的服务地址将会覆盖对应区域的配置
     *
     * 例如：设置 areaCode 为北美数据中心，同时又设置了此处的 naviServer ，那么最终会使用此处的 naviServer 而不是北美数据中心的 naviServer
     */
    areaCode: AreaCode;
    /**
     * 导航服务地址。V1.1.0 开始支持传入多个导航, 多个导航地址之间须以分号 ; 分隔
     *
     * 仅限独立数据中心使用，使用前必须先联系商务开通。
     *
     * @discussion 如果没有以 http(s):// 开头，SDK 会为其拼接 https:// ；如果以 http(s):// ，SDK 将直接使用
     */
    naviServer: string;
    /**
     * 统计服务器地址
     *
     * 仅限独立数据中心使用，使用前必须先联系商务开通。
     * ```
     * 私有云客户的鸿蒙推送需要配置统计服务地址，否则推送 token 无法上报给私有云服务
     * 公有云客户 SDK 内部会自动处理统计发地址，不需要手动设置
     * ```
     * @discussion 如果没有以 http(s):// 开头，SDK 会为其拼接 https:// ；如果以 http(s):// ，SDK 将直接使用
     */
    statisticServer: string;
    /**
     * 文件下载路径
     *
     * 实际路径为 context.filesDir + "/" + mediaSavePath
     */
    mediaSavePath: string;
    constructor();
}
/**
 * 数据中心区域码
 * @version 1.0.0
 */
declare enum AreaCode {
    /** 北京数据中心，默认值 */
    BJ = 1,
    /** 新加坡数据中心 */
    SG = 2,
    /** 北美数据中心 */
    NA = 3,
    /** 新加坡 B 企业合作数据中心 */
    SG_B = 4,
    /** 沙特数据中心 */
    SA = 5
}
export { InitOption, AreaCode };
