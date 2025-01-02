import { ConversationType } from '../../MacroDefine';
import { PublicServiceMenuItem } from './PublicServiceMenuItem';
import List from '@ohos.util.List';
/**
 * 公众号信息（仅支持私有云）
 * @version 1.1.0
 */
declare class PublicServiceInfo {
    /**
     * 公众号类型，仅支持 AppPublicService
     */
    conversationType: ConversationType;
    /**
     * 公众号 ID
     */
    targetId: string;
    /**
     * 公众号名称
     */
    name: string;
    /**
     * 公众号头像
     */
    portrait: string;
    /**
     * 公众号描述
     */
    introduction: string;
    /**
     * 是否关注该公众服务账号
     */
    isFollowed: boolean;
    /**
     * 菜单列表
     */
    menus: List<PublicServiceMenuItem>;
    /**
     * 公众服务账号的全局属性
     *
     * 此公众服务账号是否设置为所有用户均关注。
     */
    isGlobal: boolean;
}
export { PublicServiceInfo };
