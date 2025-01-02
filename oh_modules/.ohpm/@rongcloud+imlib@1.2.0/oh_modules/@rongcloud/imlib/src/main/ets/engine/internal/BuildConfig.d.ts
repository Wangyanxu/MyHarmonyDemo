/**
 * 编译配置，仅供内部使用
 */
declare class BuildConfig {
    /**
     * SDK 版本
     */
    static readonly sdkVersion = "1.2.0";
    /**
     * SDK 完整版本号
     * ```
     * 公有云 SDK ：fullSdkVersion 和 sdkVersion 完全一致
     * 私有云 SDK ：命名规则仿照 Web 端私有云
     *  "${sdkVersion}-enterprise.${IMPrivatePatch}"  IMPrivatePatch 代表私有云该版本的第几个补丁包
     *  示例："1.0.2-enterprise.3" 代表私有云的 1.0.2 第三个补丁包
     * ```
     */
    static readonly fullSdkVersion = "1.2.0";
    /**
     * 鸿蒙 SDK commitID
     */
    static readonly commitId = "acf77cd";
    /**
     * 核心库 commitID
     */
    static readonly kernelCommitId = "64fd9531";
    /**
     * 编译节点
     */
    static readonly buildNumber = 44;
    /**
     * SDK 编译时间
     */
    static readonly buildTime = "2024-11-11 17:39:00";
    /**
     * SDK 类型
     * ```
     * 108 : 公有云 SDK，108 秘钥
     * 106 : 私有云 SDK，106 秘钥
     * 104 : 私有云 SDK，104 秘钥
     * ```
     * 此值决定 SDK 为公有云还是私有云
     */
    static readonly cloudType: CloudType;
}
type CloudType = 108 | 106 | 104;
export { BuildConfig };
