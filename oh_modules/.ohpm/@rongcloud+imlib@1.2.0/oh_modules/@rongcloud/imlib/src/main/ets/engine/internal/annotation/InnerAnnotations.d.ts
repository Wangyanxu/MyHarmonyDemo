import { EngineError } from '../../EngineError';
/**
 * 方法检查注解，检查 SDK 是否初始化过
 * ```
 * 说明：
 * 如果 SDK 初始化检查成功，该方法正常执行
 * 如果 SDK 初始化检查失败，该方法会直接 return，该方法的后续业务逻辑不再执行
 *  注：如果该方法最后一个参数是 RCCallback，那么会通过 Callback 返回给上层具体错误
 *  注：如果该方法最后一个参数不是 RCCallback，该方法直接 return
 * ```
 * @returns
 */
declare function InitGuard<CT>(target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor): void;
/**
 * 参数检查注解，支持各种类型见 ParamChecker.invalid()
 * ```
 * 说明：
 * 如果该参数检查出现成功，该方法正常执行
 * 如果该参数检查失败，该方法会直接 return，该方法的后续业务逻辑不再执行
 *  注：如果该方法需要通过 Callback 返回给上层具体错误，那么该方法的最后一个参数必须是 RCCallback
 * ```
 * @param code 该参数检查失败需要用到的错误码，如果该方法最后一个参数是 RCCallback， 会将该错误码
 * @param logTag 该参数检查失败打印 log 所需的 Tag，为空则不打印 log
 * @returns
 */
declare function ParamGuard<CT>(code: EngineError, logTag: string): (target: any, propertyKey: string | symbol, parameterIndex: number) => void;
export { InitGuard, ParamGuard };
