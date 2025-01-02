/**
 * 原生钩子，汇总被 C++ 调用的方法
 */
declare class NativeHook {
    /**
     * 返回搜索内容，由 C++ 主动调用，全局搜索该方法名
     * @param objectName 消息类型
     * @param contentJson 消息内容
     * @returns 返回消息搜索内容
     */
    hookSearch(objectName: string, contentJson: string): string;
}
export { NativeHook };
