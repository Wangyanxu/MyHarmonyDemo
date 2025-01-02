/**
 * IMLib 聊天室 KV 状态变化监听器
 * @version 1.1.0
 */
interface ChatroomKVStatusListener {
    /**
     * IMLib 刚加入聊天室时 KV 同步完成的回调
     * ```
     * 触发时机：加入聊天室成功后，SDK 默认从服务端同步 KV 列表，同步完成后触发。
     * ```
     * @param roomId 聊天室 ID
     */
    onChatroomKVSync(roomId: string): void;
    /**
     * IMLib 聊天室 KV 变化的回调
     * ```
     * 触发时机：聊天室 KV 更新时。
     * 如果刚进入聊天室时存在 KV，会通过此回调将所有 KV 返回，再次回调时为其他人设置或者修改 KV 的增量数据。
     * ```
     * @param roomId 聊天室 ID
     * @param entries 发生变化的 KV,返回 KV 变化的增量数据。加入某个聊天室后第一次回调会返回全量 KV
     */
    onChatroomKVUpdate(roomId: string, entries: Map<string, string>): void;
    /**
     * IMLib 聊天室 KV 被删除的回调
     * ```
     * 触发时机：KV 被删除时触发。
     * ```
     * @param roomId 聊天室 ID
     * @param entries 被删除的 KV
     */
    onChatroomKVRemove(roomId: string, entries: Map<string, string>): void;
}
export { ChatroomKVStatusListener };
