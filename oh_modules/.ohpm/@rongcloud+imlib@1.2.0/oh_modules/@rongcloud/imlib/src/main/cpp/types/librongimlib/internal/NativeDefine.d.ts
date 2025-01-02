export interface NativeInitParam {
  appKey: string;
  areaCode: number;
  deviceId: string;
  packageId: string;
  sdkVersion: string;
  osVersion: string;
  deviceModel: string;
  naviServerArray: Array<string>;
  fileServer: string;
  statServer: string;
  logServer: string;
  versionArray: Array<NativeVersionData>;
  appVersion: string;
  cloudType: number;
  mediaSavePath: string;
  enableGroupCall : boolean;
  reconnectKickEnable : boolean;
}

export interface NativeVersionData {
  name: string;
  version: string;
}

export interface NativeKV<T> {
  key: string;
  value: T;
}

export class NativeMessage {
  conversationType: number;
  targetId: string;
  channelId: string;
  messageId: number;
  direction: number;
  senderId: string;
  receivedStatus: NativeReceivedStatus;
  sentStatus: number;
  receivedTime: number;
  sentTime: number;
  objectName: string;
  contentString: string;
  searchableWords: string;
  pushConfig: NativePushConfig;
  messageUid: string;
  extra: string;
  canIncludeExpansion: boolean;
  expansionString: string;
}

export class NativeReceivedStatus {
  isRead: boolean;
}

export class NativeReceivedInfo {
  left: number;
  hasPackage: boolean;
  isOffline: boolean;
}

export class NativeRecallNotificationMessage {
  operatorId: string;
  recallTime: number;
  originalObjectName: string;
  originalMessageContent: string;
  recallContent: string;
  recallActionTime: number;
  isAdmin: boolean;
  isDelete: boolean;
}

export class NativeMessageBlockInfo {
  conversationType: number;
  targetId: string;
  channelId: string;
  messageUid: string;
  extra: string;
  blockType: number;
  sourceType: number;
  sourceContent: string;
}

export class NativePushConfig {
  disablePushTitle: boolean;
  pushTitle: string;
  pushContent: string;
  pushData: string;
  forceShowDetailContent: boolean;
  iosConfig: NativeIosConfig;
  androidConfig: NativeAndroidConfig;
  harmonyConfig: NativeHarmonyConfig;
}

export class NativeIosConfig {
  threadId: string;
  category: string;
  apnsCollapseId: string;
  richMediaUri: string;
  interruptionLevel: string;
}

export class NativeAndroidConfig {
  notificationId: string;

  miChannelId: string;

  hwChannelId: string;
  hwImportance: string;
  hwImageUrl: string;
  hwCategory: string;

  honorImportance: string;
  honorImageUrl: string;

  oppoChannelId: string;

  vivoCategory: string;
  vivoType: string;

  fcmChannelId: string;
  fcmCollapseKey: string;
  fcmImageUrl: string;
}

export class NativeHarmonyConfig {
  imageUrl: string;
  category: string;
}

export class NativeSendMessageOption {
  // 仅做占位，未来有新需求时避免重写方法
  encrypted: boolean;
}

export class NativeMessageType {
  objectName: string;
  flag: number;
  isMediaMessage: boolean;
}

export class NativeTypingStatus {
  userId: string;
  objectName: string;
  sentTime: number;
}

export class NativeConversationStatusChangeItem {
  conversationType: number;
  targetId: string;
  channelId: string;
  updateTime: number;
  topTime: number;
  isTop: boolean;
  level: number;
}

export class NativeConversation {
  conversationType: number;
  targetId: string;
  channelId: string;
  unreadMessageCount: number;
  isTop: boolean;
  lastMessageId: number;
  lastReceivedTime: number;
  lastSentTime: number;
  lastOperateTime: number;
  objectName: string;
  contentString: string;
  senderId: string;
  draft: string;
  notificationLevel: number;
  unreadMentionedCount: number;
}

export class NativeSearchConversationResult {
  conversation: NativeConversation;
  matchCount: number;
}

export class NativeConversationIdentifier {
  conversationType: number;
  targetId: string;
  channelId: string;
}

export class NativePublicServiceInfo {
  conversationType: number;
  targetId: string;
  name: string;
  portrait: string;
  introduction: string;
  isFollowed: boolean;
  menus: Array<NativePublicServiceMenuItem>;
  isGlobal: boolean;
}

export class NativePublicServiceMenuItem {
  id: string;
  name: string;
  url: string;
  type: number;
  subMenuItems: Array<NativePublicServiceMenuItem>;
}

export class NativeChatroomJoinedInfo {
  createTime: number;
  memberCount: number;
  isAllChatroomBanned: boolean;
  isCurrentUserBanned: boolean;
  isCurrentChatroomBanned: boolean;
  isCurrentChatroomInWhiteList: boolean;
}

export class NativeChatroomInfo {
  roomId: string;
  totalUserCount: number;
  order: number;
  userInfoArray: Array<NativeChatroomUserInfo>;
}

export class NativeChatroomUserInfo {
  userId: string;
  joinTime: number;
}

export interface NativeInsertLogInfo {
  type: number,
  source: number,
  level: number,
  tag: string,
  content: string,
}

export interface NativeChatRoomMemberActionModel {
  roomId: string;
  chatRoomMemberActions: Array<NativeChatroomMemberAction>;
  memberCount: number;
}

export interface NativeChatroomMemberAction {
  userId: string;
  actionType: number;
}

export interface NativeChatroomMemberBanEvent {
  chatroomId: string;
  banType: number;
  durationTime: number;
  operateTime: number;
  userIdList: Array<string>;
  extra: string;
}

export interface NativeChatroomSyncEvent {
  chatroomId: string;
  status: number;
  reason: number;
  time: number;
  extra: string;
}

export interface NativeChatroomMemberBlockEvent {
  chatroomId: string;
  operateType: number;
  durationTime: number;
  operateTime: number;
  userIdList: Array<string>;
  extra: string;
}

export interface NativeRtcConfig {
  logServer: string;
  dataCenter: string;
  jwtToken: string;
  openGzip: boolean;
  voipCallInfo: string;
}