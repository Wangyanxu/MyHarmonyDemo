import { HashMap } from '@kit.ArkTS';
/**
 * json 转换工具类，用于替换 JsonUtil
 * @version 1.2.0
 */
declare class JsonConverter {
    private constructor();
    /**
     * 将 json 字符串转为 HashMap
     * @param jsonString json 字符串
     * @returns HashMap
     */
    static parseToHashMap(jsonString: string): HashMap<string, Object>;
    /**
     * 将 json 字符串转为 Map
     * @param jsonString json 字符串
     * @returns Map
     */
    static parseToMap(jsonString: string): Map<string, Object>;
    /**
     * 将 json 字符串解析为对象
     * @param jsonString json 字符串
     * @returns 解析后的对象，如果解析失败返回 null
     */
    static parseSafety(jsonString: string): any | null;
    /**
     * 将 HashMap 变为 json 字符串
     * @param map HashMap
     * @returns json 字符串
     */
    static stringifyFromHashMap(map: HashMap<string, Object>): string;
    /**
     * 将 Map 变为 json 字符串
     * @param map Map
     * @returns json 字符串
     */
    static stringifyFromMap(map: Map<string, Object>): string;
    private static objectFromHashMap;
    private static objectFromMap;
    /**
     * 将对象转为 json 字符串
     * @param value 任意对象
     * @returns json 字符串，如果对象为 null、undefined、解析失败 会返回空字符串
     */
    static stringifySafety(value: any): string;
}
export { JsonConverter };
