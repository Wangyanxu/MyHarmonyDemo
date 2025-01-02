import List from '@ohos.util.List';
/**
 * 公众号菜单子菜单类型
 * @version 1.1.0
 */
declare enum PublicServiceMenuItemType {
    /**
     * 包含子菜单的一组菜单
     */
    Group = 0,
    /**
     * 包含查看事件的菜单
     */
    View = 1,
    /**
     * 包含点击事件的菜单
     */
    Click = 2
}
/**
 * 公众号菜单子菜单（仅支持私有云）
 * @version 1.1.0
 */
declare class PublicServiceMenuItem {
    /**
     * 菜单的 ID
     */
    id: string;
    /**
     * 菜单的标题
     */
    name: string;
    /**
     * 菜单的 URL 链接
     */
    url: string;
    /**
     * 菜单的类型
     */
    type: PublicServiceMenuItemType;
    /**
     * 菜单的子菜单列表
     */
    subMenuItems: List<PublicServiceMenuItem>;
}
export { PublicServiceMenuItemType, PublicServiceMenuItem };
