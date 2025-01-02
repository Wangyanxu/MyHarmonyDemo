import { HashMap } from '@kit.ArkTS';
/**
 * Json 工具类
 * @version 1.0.0
 * @deprecated 已废弃，本类方法命名不太准确，无法兼容 Map 的相关方法，使用 JsonConverter
 */
declare class JsonUtil {
    private constructor();
    /**
     * 将 json 字符串转为 HashMap
     * @param jsonString json 字符串
     * @returns HashMap
     * @deprecated 使用 JsonConverter.parseToHashMap()
     */
    static parseToMap(jsonString: string): HashMap<string, Object>;
    /**
     * 将 json 字符串解析为对象
     * @param jsonString json 字符串
     * @returns 解析后的对象，如果解析失败返回 null
     * @deprecated 使用 JsonConverter.parseSafety()
     */
    static parseSafety(jsonString: string): any | null;
    /**
     * 将 HashMap 变为 json 字符串
     * @param map HashMap
     * @returns json 字符串
     * @deprecated 使用 JsonConverter.stringifyFromHashMap()
     */
    static stringifyFromMap(map: HashMap<string, Object>): string;
    /**
     * 将对象转为 json 字符串
     * @param value 任意对象
     * @returns json 字符串，如果对象为 null、undefined、解析失败 会返回空字符串
     * @deprecated 使用 JsonConverter.stringifySafety()
     */
    static stringifySafety(value: any): string;
}
export { JsonUtil };
