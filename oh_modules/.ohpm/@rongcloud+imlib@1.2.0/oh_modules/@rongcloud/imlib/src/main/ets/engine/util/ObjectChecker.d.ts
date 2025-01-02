import { HashMap, List } from '@kit.ArkTS';
/**
 * 用于检查 Object 有效性的类
 * @version 1.0.0
 */
declare class ObjectChecker {
    private constructor();
    /**
     * Object 对象是否有效
     * @param obj Object 对象
     * @returns 是否有效，非 null 且非 undefined 有效；否则无效
     */
    static isValid(obj: any): boolean;
}
/**
 * 用于检查 string 有效性的类
 * @version 1.0.0
 */
declare class StringChecker {
    private constructor();
    /**
     * string 是否有效
     * @param str string
     * @returns 是否有效，Object 检查有效且长度 > 0 则有效；否则无效
     */
    static isValid(str: string): boolean;
    /**
     * 字符串是否为空
     * @param str string
     * @returns 是否为空，无效则为空
     */
    static isEmpty(str: string): boolean;
    /**
     * 两个字符串是否相同
     * @param a 第一个字符串
     * @param b 第二个字符串
     * @returns 是否相同
     */
    static equals(a: string, b: string): boolean;
    /**
     * 返回安全的字符串
     * @param str string
     * @returns 安全的字符串，确保不会返回 null 或者 undefined
     */
    static getStringSafety(str: string): string;
}
/**
 * 用于检查 Array 有效性的类
 * @version 1.0.0
 */
declare class ArrayChecker {
    private constructor();
    /**
     * Array 是否有效
     * @param obj Array
     * @returns 是否有效，Object 检查有效且长度 > 0 则有效；否则无效
     */
    static isValid(obj: Array<any>): boolean;
}
/**
 * 用于检查 HashMap 有效性的类
 * @version 1.0.0
 */
declare class HashMapChecker {
    private constructor();
    /**
     * HashMap 是否有效
     * @param obj HashMap
     * @returns 是否有效，Object 检查有效且长度 > 0 则有效；否则无效
     */
    static isValid(obj: HashMap<any, any>): boolean;
}
/**
 * 用于检查 List 有效性的类
 * @version 1.0.0
 */
declare class ListChecker {
    private constructor();
    /**
     * List 是否有效
     * @param obj List
     * @returns 是否有效，Object 检查有效且长度 > 0 则有效；否则无效
     */
    static isValid(obj: List<any>): boolean;
}
/**
 * 用于检查 Map 有效性的类
 * @version 1.1.0
 */
declare class MapChecker {
    private constructor();
    /**
     * Map 是否有效
     * @param obj Map
     * @returns 是否有效，Object 检查有效且 size > 0 则有效；否则无效
     */
    static isValid(obj: Map<any, any>): boolean;
}
/**
 * 用于检查 Set 有效性的类
 * @version 1.2.0
 */
declare class SetChecker {
    private constructor();
    /**
     * Set 是否有效
     * @param obj Set
     * @returns 是否有效，Object 检查有效且 size > 0 则有效；否则无效
     */
    static isValid(obj: Set<any>): boolean;
}
export { ObjectChecker, StringChecker, ArrayChecker, HashMapChecker, ListChecker, MapChecker, SetChecker };
