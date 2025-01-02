import { MessageContent } from '../MessageContent';
/**
 * 消息标识
 * @version 1.1.0
 */
declare const LocationMessageObjectName: string;
/**
 * 位置消息
 * @version 1.1.0
 */
declare class LocationMessage extends MessageContent {
    /**
     * 纬度, double 类型
     */
    latitude: number;
    /**
     * 经度, double 类型
     */
    longitude: number;
    /**
     * 地图 poi 信息，保存地理位置的名称
     */
    poi: string;
    /**
     * 缩略图 base64，如果没有设置缩略图，App 做位置消息的 UI 展示时需要用占位图实现
     * ```
     * // 1. 获取 PixelMap 格式的地图静态图： https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/map-static-diagram-V5
     * // 静态图的宽高建议不超过 300*200 ，静态图过大可能会导致消息发送失败
     * import { staticMap } from '@kit.MapKit';
     *
     * let option: staticMap.StaticMapOptions = {
     *    location: {
     *      latitude: 39.9,
     *      longitude: 116.4
     *    },
     *    zoom: 17,
     *    imageWidth: 300,
     *    imageHeight: 200,
     *    scale: 1
     * }
     * staticMap.getMapImage(option).then((value) => {
     *    this.locImage = value;
     * })
     * ```
     * ```
     * // 2. PixelMap 转 base64 ： https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs-V5/faqs-image-15-V5
     * import { image } from '@kit.ImageKit';
     * import { buffer } from '@kit.ArkTS';
     *
     * let pixelMap : PixelMap = this.locImage as PixelMap;
     * const imagePackerApi: image.ImagePacker = image.createImagePacker();
     * let packOpts: image.PackingOption = { format: 'image/jpeg', quality: 100 };
     * imagePackerApi.packing(pixelMap, packOpts).then((data: ArrayBuffer) => {
     *    let buf: buffer.Buffer = buffer.from(data);
     *    // 将该 base64 设置给 thumbnailBase64
     *    let base64 = buf.toString('base64', 0, buf.length);
     * })
     * ```
     */
    thumbnailBase64: string;
    /**
     * 位置坐标类型，必须根据当前的地图框架设置为对应的坐标类型，否则会出现偏移量
     */
    type: LocationCoordinateType;
    constructor();
    /**
     * 编码方法，将消息转为 json 字符串
     * @returns json 字符串
     */
    encode(): string;
    /**
     * 解码方法，将 json 字符串转为消息
     * @param contentString json 字符串
     */
    decode(contentString: string): void;
    /**
     * 获取类名
     * @returns 类名
     */
    getClassName(): string;
}
/**
 * 位置坐标类型
 * ```
 * 鸿蒙系统地图：国内(包括港澳) GCJ02，中国台湾和国外 WGS84
 * 高德地图：国内(包括港澳) GCJ02，中国台湾和国外 WGS84
 * 腾讯地图：国内(包括港澳) GCJ02，中国台湾和国外 WGS84
 * 百度地图：国内(包括港澳台) BD09，国外 WGS84
 * 更多信息，请参考各个地图 SDK 的文档
 * ```
 * @version 1.1.0
 */
declare enum LocationCoordinateType {
    /**
     * UNKNOWN: 未知类型。坐标信息中未带位置类型默认设置为 UNKNOWN 。
     */
    UNKNOWN = 0,
    /**
     * WGS84 : GPS，WGS-84，原始坐标体系。
     */
    WGS84 = 1,
    /**
     * GCJ02 : GCJ-02 国测局 02 年发布的坐标体系，又称“火星坐标”。
     */
    GCJ02 = 2,
    /**
     * BD-09 : 百度地图坐标系。
     */
    BD09 = 3
}
export { LocationMessage, LocationMessageObjectName, LocationCoordinateType };
