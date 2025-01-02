/**
 * 用对象保存一对 kv
 * 如果是多对 kv，使用 Map
 * @version 1.2.0
 */
interface KeyValuePair<T> {
    key: string;
    value: T;
}
export { KeyValuePair };
