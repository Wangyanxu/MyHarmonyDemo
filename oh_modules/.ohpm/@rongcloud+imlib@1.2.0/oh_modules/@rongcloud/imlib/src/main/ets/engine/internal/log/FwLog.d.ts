import { LogLevel } from '../../log/Log';
/**
 * log 模块，类似 iOS、Android 的 FwLog
 */
declare class FwLog {
    private constructor();
    /**
     * 记录日志
     * @param type 业务类型，目前大数据平台只有 IM 和 RTC 两个值
     * @param source 日志来源，用来标识日志埋点层级，如 RTCLib、CallLib 等，业务自己订
     * @param level 日志级别
     * @param tag 日志标签
     * @param info 日志内容
     */
    static log(type: FwLogType, source: FwLogSource, level: LogLevel, tag: string, info: FwLogInfo): void;
    /**
     * 记录 IM - IMLib 的 error 日志
     */
    static error(tag: string, info: FwLogInfo): void;
    /**
     * 记录 IM - IMLib 的 warn 日志
     */
    static warn(tag: string, info: FwLogInfo): void;
    /**
     * 记录 IM - IMLib 的 info 日志
     */
    static info(tag: string, info: FwLogInfo): void;
    /**
     * 记录 IM - IMLib 的 debug 日志
     */
    static debug(tag: string, info: FwLogInfo): void;
    private static write;
    private static stringFromLogInfo;
    private static logToNative;
}
/**
 * 业务类型，目前大数据平台只有 IM 和 RTC 两个值
 */
declare enum FwLogType {
    /**
     * IM 的日志
     */
    IM = 0,
    /**
     * RTC 的日志
     */
    RTC = 1
}
/**
 * 日志来源，用来标识日志埋点层级，如 RTCLib、CallLib 等，业务自己订
 */
declare enum FwLogSource {
    IMLib = 2,
    IMKit = 3,
    RTCLib = 4,
    CallLib = 5,
    CallPlus = 6
}
/**
 * log 内容类，确保所有的 log 内容成对存在
 *
 * 解决 log 使用占位符或者分隔符可能出现不匹配的情况，规避如下面的反例
 *
 * 反例1 占位符不匹配：info("key:%s,value:%s",key)
 *
 * 反例2 分隔符不匹配：info("key|value",key,value,sum)
 *
 * @discussion 由于 TS 不支持方法重载，所以会有若干 log 带数字的方法，数字代表有几对 kv，如 log3 代表日志要写入三对 kv
 */
declare class FwLogInfo {
    private logMap;
    toString(): string;
    private valueToString;
    static log0(): FwLogInfo;
    static log1(key1: string, value1: Object): FwLogInfo;
    static log2(key1: string, value1: Object, key2: string, value2: Object): FwLogInfo;
    static log3(key1: string, value1: Object, key2: string, value2: Object, key3: string, value3: Object): FwLogInfo;
    static log4(key1: string, value1: Object, key2: string, value2: Object, key3: string, value3: Object, key4: string, value4: Object): FwLogInfo;
    static log5(key1: string, value1: Object, key2: string, value2: Object, key3: string, value3: Object, key4: string, value4: Object, key5: string, value5: Object): FwLogInfo;
    static log6(key1: string, value1: Object, key2: string, value2: Object, key3: string, value3: Object, key4: string, value4: Object, key5: string, value5: Object, key6: string, value6: Object): FwLogInfo;
    static log7(key1: string, value1: Object, key2: string, value2: Object, key3: string, value3: Object, key4: string, value4: Object, key5: string, value5: Object, key6: string, value6: Object, key7: string, value7: Object): FwLogInfo;
    static log8(key1: string, value1: Object, key2: string, value2: Object, key3: string, value3: Object, key4: string, value4: Object, key5: string, value5: Object, key6: string, value6: Object, key7: string, value7: Object, key8: string, value8: Object): FwLogInfo;
    static log9(key1: string, value1: Object, key2: string, value2: Object, key3: string, value3: Object, key4: string, value4: Object, key5: string, value5: Object, key6: string, value6: Object, key7: string, value7: Object, key8: string, value8: Object, key9: string, value9: Object): FwLogInfo;
    static logN(map: Map<string, Object>): FwLogInfo;
}
export { FwLog, FwLogType, FwLogSource, FwLogInfo };
