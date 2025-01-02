import { EngineError } from './EngineError';
/**
 * 异步结果
 * @version 1.0.0
 */
interface IAsyncResult<T = void> {
    /**
     * 错误码，EngineError.Success 成功，其余为失败
     */
    code: EngineError;
    /**
     * 具体的数据
     */
    data?: T;
}
/**
 * 连接结果
 * @version 1.0.0
 */
interface IConnectResult {
    /**
     * 连接返回码
     */
    code: EngineError;
    /**
     * 用户 ID，当连接成功时，该字段才有值
     */
    userId?: string;
}
export { IAsyncResult, IConnectResult };
