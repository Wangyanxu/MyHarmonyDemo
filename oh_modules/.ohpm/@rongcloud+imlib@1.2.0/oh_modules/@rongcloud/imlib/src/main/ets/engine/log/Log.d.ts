/**
 * 日志级别
 */
declare enum LogLevel {
    /**
     * 不打印日志
     */
    None = 0,
    /**
     * 打印错误日志
     */
    Error = 1,
    /**
     * 打印警告日志
     */
    Warn = 2,
    /**
     * 打印流程日志
     */
    Info = 3,
    /**
     * 打印调试日志
     */
    Debug = 4
}
export { LogLevel };
