import { EngineError } from '../../EngineError';
import { RCCallback } from '../InternalDefine';
import HashMap from '@ohos.util.HashMap';
import List from '@ohos.util.List';
/**
 * 做各种类型的参数检查
 * CT = Callback T
 */
declare class ParamChecker {
    private constructor();
    /**
     * 检查各种数据类型，obj 支持的范围如下
     * ```
     * boolean ： true 合法
     * string ： 满足 StringChecker.isValid 合法
     * EngineError : 等于 EngineError.Success 合法
     * Array : 满足 ObjectChecker.isValid 合法
     * HashMap : 满足 HashMapChecker.isValid 合法
     * List : 满足 ListChecker.isValid 合法
     * Map : 满足 MapChecker.isValid 合法
     * Set : 满足 SetChecker.isValid 合法
     * Object : 满足 ObjectChecker.isValid 合法
     * ```
     * @param obj 需要检查的值
     * @param code 该值检查不通过需要返回的错误码
     * @param logTag 该值检查不通过需要打印的 logTag
     * @param callback 该值检查不通过需要触发的 Callback
     * @returns 检查是否非法，返回 true 检查不通过；false 检查通过
     */
    static invalid<CT>(obj: any, code: EngineError, logTag: string, callback: RCCallback<CT> | null): boolean;
    /**
     * 检查 SDK 是否初始化
     * @param value 是否初始化
     * @param callback 该值检查不通过需要触发的 Callback
     * @returns 检查是否非法，返回 true 检查不通过；false 检查通过
     * @discussion 不需要 logTag，没有初始化，底层引擎无法被创建，底层的 log 模块也没有创建
     */
    static invalidInit<CT>(value: boolean, callback: RCCallback<CT> | null): boolean;
    /**
     * 检查 EngineError 是否非法，EngineError != Success 为非法
     * @param value 需要检查的值
     * @param code 该值检查不通过需要返回的错误码
     * @param logTag 该值检查不通过需要打印的 logTag
     * @param callback 该值检查不通过需要触发的 Callback
     * @returns 检查是否非法，返回 true 检查不通过；false 检查通过
     */
    static invalidEngineError<CT>(value: EngineError, code: EngineError, logTag: string, callback: RCCallback<CT> | null): boolean;
    /**
     * 检查 boolean 是否非法，boolean 为 false 非法
     * @param value 需要检查的值
     * @param code 该值检查不通过需要返回的错误码
     * @param logTag 该值检查不通过需要打印的 logTag
     * @param callback 该值检查不通过需要触发的 Callback
     * @returns 检查是否非法，返回 true 检查不通过；false 检查通过
     */
    static invalidBoolean<CT>(value: boolean, code: EngineError, logTag: string, callback: RCCallback<CT> | null): boolean;
    /**
     * 检查 string 是否非法，空字符串 非法
     * @param value 需要检查的值
     * @param code 该值检查不通过需要返回的错误码
     * @param logTag 该值检查不通过需要打印的 logTag
     * @param callback 该值检查不通过需要触发的 Callback
     * @returns 检查是否非法，返回 true 检查不通过；false 检查通过
     */
    static invalidString<CT>(value: string, code: EngineError, logTag: string, callback: RCCallback<CT> | null): boolean;
    /**
     * 检查 Object 是否非法，null|undefined 非法
     * @param value 需要检查的值
     * @param code 该值检查不通过需要返回的错误码
     * @param logTag 该值检查不通过需要打印的 logTag
     * @param callback 该值检查不通过需要触发的 Callback
     * @returns 检查是否非法，返回 true 检查不通过；false 检查通过
     */
    static invalidObject<CT>(value: Object, code: EngineError, logTag: string, callback: RCCallback<CT> | null): boolean;
    /**
     * 检查 Array 是否非法
     * @param value 需要检查的值
     * @param code 该值检查不通过需要返回的错误码
     * @param logTag 该值检查不通过需要打印的 logTag
     * @param callback 该值检查不通过需要触发的 Callback
     * @returns 检查是否非法，返回 true 检查不通过；false 检查通过
     */
    static invalidArray<T, CT>(value: Array<T>, code: EngineError, logTag: string, callback: RCCallback<CT> | null): boolean;
    /**
     * 检查 HashMap 是否非法
     * @param value 需要检查的值
     * @param code 该值检查不通过需要返回的错误码
     * @param logTag 该值检查不通过需要打印的 logTag
     * @param callback 该值检查不通过需要触发的 Callback
     * @returns 检查是否非法，返回 true 检查不通过；false 检查通过
     */
    static invalidHashMap<K, V, CT>(value: HashMap<K, V>, code: EngineError, logTag: string, callback: RCCallback<CT> | null): boolean;
    /**
     * 检查 List 是否非法
     * @param value 需要检查的值
     * @param code 该值检查不通过需要返回的错误码
     * @param logTag 该值检查不通过需要打印的 logTag
     * @param callback 该值检查不通过需要触发的 Callback
     * @returns 检查是否非法，返回 true 检查不通过；false 检查通过
     */
    static invalidList<T, CT>(value: List<T>, code: EngineError, logTag: string, callback: RCCallback<CT> | null): boolean;
    /**
     * 检查 Map 是否非法
     * @param value 需要检查的值
     * @param code 该值检查不通过需要返回的错误码
     * @param logTag 该值检查不通过需要打印的 logTag
     * @param callback 该值检查不通过需要触发的 Callback
     * @returns 检查是否非法，返回 true 检查不通过；false 检查通过
     */
    static invalidMap<K, V, CT>(value: Map<K, V>, code: EngineError, logTag: string, callback: RCCallback<CT> | null): boolean;
    /**
     * 检查 Set 是否非法
     * @param value 需要检查的值
     * @param code 该值检查不通过需要返回的错误码
     * @param logTag 该值检查不通过需要打印的 logTag
     * @param callback 该值检查不通过需要触发的 Callback
     * @returns 检查是否非法，返回 true 检查不通过；false 检查通过
     */
    static invalidSet<T, CT>(value: Set<T>, code: EngineError, logTag: string, callback: RCCallback<CT> | null): boolean;
    /**
     * 触发回调
     * @param code 错误码
     * @param logTag 错误 logTag
     * @param callback
     */
    private static invokeCallback;
    private static isBoolean;
    private static isString;
    private static isEngineError;
    private static isArray;
    private static isList;
    private static isHashMap;
    private static isMap;
    private static isSet;
}
export { ParamChecker };
