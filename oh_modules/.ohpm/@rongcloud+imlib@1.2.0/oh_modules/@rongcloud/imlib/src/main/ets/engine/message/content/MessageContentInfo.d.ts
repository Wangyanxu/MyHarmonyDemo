/**
 * 用户信息
 * @version 1.0.0
 */
declare class UserInfo {
    /**
     * 用户 ID
     */
    userId: string;
    /**
     * 用户名
     */
    name: string;
    /**
     * 头像地址
     * @since 1.0.2
     */
    portraitUri: string;
    /**
     * 用户备注
     */
    alias?: string;
    /**
     * 用户信息附加字段
     */
    extra?: string;
    constructor(userId: string, name: string, portrait: string);
    /**
     * 设置头像，已废弃，使用 portraitUri
     * @param value 头像地址
     * @deprecated since 1.0.2
     */
    set portraitUrl(value: string);
    /**
     * 获取头像，已废弃，使用 portraitUri
     * @returns 头像地址
     * @deprecated since 1.0.2
     */
    get portraitUrl(): string;
}
/**
 * @提醒的类型
 * @version 1.0.0
 */
declare enum MentionedType {
    /**
     * @ 所有人
     */
    ALL = 1,
    /**
     * @ 部分指定用户
     */
    PART = 2
}
/**
 * 消息中的 @ 提醒信息
 * @version 1.0.0
 */
declare class MentionedInfo {
    /**
     * @ 提醒的类型
     */
    type: MentionedType;
    /**
     * @ 的用户 ID 列表
     *
     * 如果 type 是 @ 所有人，则可以传空
     *
     * @note 为了和其他平台保持一致，故而以 List 结尾
     */
    userIdList?: Array<string>;
    /**
     * 包含 @ 提醒的消息，本地通知和远程推送显示的内容
     *
     * 如果是空 , 则按默认格式显示 [有人 @ 你]
     */
    mentionedContent?: string;
    constructor();
}
export { UserInfo, MentionedType, MentionedInfo };
