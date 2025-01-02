import {
  NativeChatroomInfo,
  NativeChatroomJoinedInfo,
  NativeConversation,
  NativeConversationStatusChangeItem,
  NativeMessage,
  NativeReceivedInfo,
  NativeRecallNotificationMessage,
  NativeMessageBlockInfo,
  NativeSendMessageOption,
  NativeMessageType,
  NativeConversationIdentifier,
  NativeInitParam,
  NativeInsertLogInfo,
  NativePublicServiceInfo,
  NativeKV,
  NativeChatroomMemberAction,
  NativeChatroomMemberBanEvent,
  NativeChatroomSyncEvent,
  NativeChatroomMemberBlockEvent,
  NativeChatRoomMemberActionModel,
  NativeTypingStatus,
  NativeSearchConversationResult,
  NativeRtcConfig,
} from './NativeDefine'

/**
 * 原生引擎类
 */
export class NativeEngine {
  // 初始化相关 *******************************************************

  constructor();

  public createNativeEngine(param: NativeInitParam): void;

  public setDeviceId(deviceId: string): void;

  public getVersion(callback: (code: number, version: string) => void): void;

  public setPushToken(pushToken: string): void;

  public setDatabaseStatusListener(listener: (status: number) => void): void;

  public setMessageSearchableWordsListener(hook: any): void;

  public setLogLevel(level: number): void;

  public writeLogToNative(info: NativeInsertLogInfo): void;

  // 连接相关 *******************************************************

  public connect(token: string, timeout: number, callback: (code: number, userId: string) => void): void;

  public getCurrentUserId(callback: (code: number, userId: string) => void): void;

  public setConnectionStatusListener(listener: (status: number) => void): void;

  public getCurrentConnectionStatus(callback: (code: number, status: number) => void): void;

  public notifyAppStateChanged(appState: number): void;

  public notifyNetworkChanged(networkType: number): void;

  public disconnect(isReceivePush: boolean, callback: (code: number) => void): void;

  // 消息相关 *******************************************************
  public setMessageReceivedListener(listener: (message: NativeMessage, info: NativeReceivedInfo) => void): void;

  public setMessageRecalledListener(
    listener: (message: NativeMessage, recallMessage: NativeRecallNotificationMessage) => void
  ): void;

  public setMessageBlockedListener(listener: (blockInfo: NativeMessageBlockInfo) => void): void;

  public sendMessage(
    nativeMsg: NativeMessage,
    nativeOption: NativeSendMessageOption,
    savedCallback: (nativeMsg: NativeMessage) => void,
    resultCallback: (code: number, nativeMsg: NativeMessage) => void
  ): void;

  public sendMediaMessage(
    nativeMsg: NativeMessage,
    nativeOption: NativeSendMessageOption,
    savedCallback: (nativeMsg: NativeMessage) => void,
    resultCallback: (code: number, nativeMsg: NativeMessage) => void,
    progressListener: (nativeMsg: NativeMessage, progress: number) => void
  ): void;

  public downloadMediaMessage(messageId: number, callback: (code: number, localPath: string) => void): void;

  public recallMessage(
    message: NativeMessage,
    callback: (code: number, recallMessage: NativeRecallNotificationMessage) => void
  ): void;

  public registerMessageType(msgTypesArray: Array<NativeMessageType>): void;

  public batchInsertMessage(msgArray: Array<NativeMessage>, callback: (code: number) => void): void;

  public insertMessage(msg: NativeMessage, callback: (code: number, native: NativeMessage) => void): void;

  public getMessageById(
    messageId: number,
    callback: (code: number, native: NativeMessage) => void
  ): void;

  public getMessageByUid(messageUid: string, callback: (code: number, native: NativeMessage) => void): void;

  public getHistoryMessagesById(
    conversationType: number,
    targetId: string,
    channelId: string,
    objectNameArray: Array<string>,
    messageId: number,
    beforeCount: number,
    afterCount: number,
    callback: (code: number, nativeMsgArray: Array<NativeMessage>) => void
  ): void;

  public getHistoryMessagesByTime(
    conversationType: number,
    targetId: string,
    channelId: string,
    objectNameArray: Array<string>,
    sentTime: number,
    beforeCount: number,
    afterCount: number,
    callback: (code: number, nativeMsgArray: Array<NativeMessage>) => void
  ): void;

  public getRemoteHistoryMessages(
    conversationType: number,
    targetId: string,
    channelId: string,
    sentTime: number,
    count: number,
    order: number,
    isCheckDup: boolean,
    callback: (code: number, nativeMsgArray: Array<NativeMessage>) => void
  ): void;

  public getUnreadMentionedMessages(
    conversationType: number,
    targetId: string,
    channelId: string,
    count: number,
    order: number,
    callback: (code: number, nativeMsgArray: Array<NativeMessage>) => void
  ): void;

  public getFirstUnreadMessage(
    conversationType: number,
    targetId: string,
    channelId: string,
    callback: (code: number, nativeMsg: NativeMessage) => void
  ): void;

  public deleteHistoryMessagesByIds(
    messageIds: Array<number>,
    callback: (code: number) => void
  ): void;

  public deleteMessages(
    conversationType: number,
    targetId: string,
    channelId: string,
    callback: (code: number) => void
  ): void;

  public deleteHistoryMessagesByTime(
    conversationType: number,
    targetId: string,
    channelId: string,
    sentTime: number,
    callback: (code: number) => void
  ): void;

  public cleanRemoteHistoryMessages(
    conversationType: number,
    targetId: string,
    channelId: string,
    sentTime: number,
    callback: (code: number) => void
  ): void;

  public deleteRemoteMessages(
    conversationType: number,
    targetId: string,
    channelId: string,
    msgArray: Array<NativeMessage>,
    isDeleteLocal: boolean,
    callback: (code: number) => void
  ): void;

  public setTypingStatusListener(
    listener: (
      conversationType: number,
      targetId: string,
      channelId: string,
      typingStatusList: Array<NativeTypingStatus>
    ) => void
  );

  public sendTypingStatus(
    conversationType: number,
    targetId: string,
    channelId: string,
    objectName: string,
    callback: (code: number) => void
  ): void;

  public setTypingStatusInterval(interval: number, callback: (code: number) => void): void;

  public setMessageSentStatus(
    messageId: number,
    sentStatus: number,
    callback: (code: number) => void
  ): void;

  public setMessageContent(
    messageId: number,
    contentJson: string,
    objectName: string,
    searchableWord: string,
    callback: (code: number) => void
  ): void;

  // 消息扩展相关 ********************************************************************

  public setMessageExpansionUpdateListener(
    listener: (expansion: Array<NativeKV<string>>, nativeMsg: NativeMessage) => void
  ): void;

  public setMessageExpansionRemoveListener(
    listener: (keyArray: Array<string>, nativeMsg: NativeMessage) => void
  ): void;

  public updateMessageExpansion(
    expansion: Array<NativeKV<string>>,
    messageUid: string,
    callback: (code: number) => void
  ): void;

  public removeMessageExpansion(
    keyArray: Array<string>,
    messageUid: string,
    callback: (code: number) => void
  ): void;


  // 会话相关 *******************************************************
  public setConversationStatusListener(listener: (itemArray: Array<NativeConversationStatusChangeItem>) => void): void;

  public getConversation(
    conversationType: number,
    targetId: string,
    channelId: string,
    callback: (code: number, native: NativeConversation) => void
  ): void;


  public getConversationListByPage(
    typeArray: Array<number>,
    time: number,
    count: number,
    callback: (code: number, nativeConArray: Array<NativeConversation>) => void
  ): void;

  public getTopConversationListByPage(
    conTypeList: Array<number>,
    time: number,
    count: number,
    callback: (code: number, nativeConArray: Array<NativeConversation>) => void
  ): void;

  public getBlockedConversationListByPage(
    conTypeList: Array<number>,
    time: number,
    count: number,
    callback: (code: number, nativeConArray: Array<NativeConversation>) => void
  ): void;

  public getUnreadConversations(
    conTypeList: Array<number>,
    callback: (code: number, conversationList: Array<NativeConversation> | null) => void
  ): void

  public clearConversations(
    nativeConTypeArray: Array<number>,
    callback: (code: number) => void
  ): void;

  public removeConversations(
    nativeConIdArray: Array<NativeConversationIdentifier>,
    callback: (code: number) => void
  ): void;

  public setConversationsToTop(
    conIdArray: Array<NativeConversationIdentifier>,
    isTop: boolean,
    isNeedCreate: boolean,
    callback: (code: number) => void
  ): void;

  public getConversationTopStatus(
    conversationType: number,
    targetId: string,
    channelId: string,
    callback: (code: number, isTop: boolean) => void
  ): void;

  public setConversationsNotificationLevel(
    conIdArray: Array<NativeConversationIdentifier>,
    level: number,
    callback: (code: number) => void
  ): void;

  public getConversationNotificationLevel(
    conversationType: number,
    targetId: string,
    channelId: string,
    callback: (code: number, level: number) => void
  ): void;

  public saveTextMessageDraft(
    conversationType: number,
    targetId: string,
    channelId: string,
    draft: string,
    callback: (code: number) => void
  ): void;

  public getTextMessageDraft(
    conversationType: number,
    targetId: string,
    channelId: string,
    callback: (code: number, draft: string) => void
  ): void;

  public setNotificationQuietHoursLevel(
    startTime: string,
    duration: number,
    level: number,
    callback: (code: number) => void
  ): void;

  public getNotificationQuietHoursLevel(
    callback: (code: number, startTime: string, duration: number, level: number) => void
  ): void;

  public removeNotificationQuietHours(callback: (code: number) => void): void;

  public getTotalUnreadCount(callback: (code: number, count: number) => void): void;

  public getTotalUnreadCountByIds(
    conIdArray: Array<NativeConversationIdentifier>,
    callback: (code: number, count: number) => void
  ): void;

  public getUnreadCount(
    conversationType: number,
    targetId: string,
    channelId: string,
    callback: (code: number, count: number) => void
  ): void;

  public getUnreadCountByTypes(
    typeArray: Array<number>,
    isContainBlocked: boolean,
    callback: (code: number, count: number) => void
  ): void;

  public clearMessagesUnreadStatus(
    conversationType: number,
    targetId: string,
    channelId: string,
    callback: (code: number) => void
  ): void;

  public clearMessagesUnreadStatusByTime(
    conversationType: number,
    targetId: string,
    channelId: string,
    time: number,
    callback: (code: number) => void
  ): void;

  public syncConversationReadStatus(
    conversationType: number,
    targetId: string,
    channelId: string,
    timestamp: number,
    callback: (code: number) => void
  ): void;

  public setSyncConversationReadStatusListener(
    listener: (conversationType: number, targetId: string, channelId: string, time: number) => void
  ): void;

  // 搜索相关 ********************************************************************


  public searchConversationsWithResult(
    typeList: Array<number>,
    keyword: string,
    objNames: Array<string> | null,
    callback: (code: number, nativeConList: Array<NativeSearchConversationResult> | null) => void
  ): void;

  public searchMessages(
    conversationType: number,
    targetId: string,
    channelId: string,
    keyword: string,
    objNames: Array<string> | null,
    startTime: number,
    count: number,
    callback: (code: number, nativeMsgArray: Array<NativeMessage> | null) => void
  ): void;

  public searchMessagesInTimeRange(
    conversationType: number,
    targetId: string,
    channelId: string,
    keyword: string,
    startTime: number,
    endTime: number,
    offset: number,
    limit: number,
    callback: (code: number, nativeMsgArray: Array<NativeMessage> | null) => void
  ): void;

  public searchMessagesByUser(
    conversationType: number,
    targetId: string,
    channelId: string,
    userId: string,
    startTime: number,
    count: number,
    callback: (code: number, nativeMsgArray: Array<NativeMessage> | null) => void
  ): void;

  // 公众号相关 ********************************************************************

  public getPublicServiceList(
    callback: (code: number, nativeInfoList: Array<NativePublicServiceInfo> | null) => void
  ): void

  public getPublicService(
    conversationType: number,
    targetId: string,
    channelId: string,
    callback: (code: number, nativeInfo: NativePublicServiceInfo | null) => void
  ): void

  // 聊天室相关 *******************************************************

  public setChatroomStatusListener(
    listener: (code: number, status: number, roomId: string, nativeInfo: NativeChatroomJoinedInfo) => void
  ): void;

  public joinChatroom(
    roomId: string,
    msgCount: number,
    callback: (code: number, info: NativeChatroomJoinedInfo | null) => void
  ): void;

  public joinExistingChatroom(
    roomId: string,
    msgCount: number,
    callback: (code: number, nativeInfo: NativeChatroomJoinedInfo) => void
  ): void;

  public quitChatroom(
    roomId: string,
    callback: (code: number) => void
  ): void;

  public getChatroomInfo(
    roomId: string,
    queryCount: number,
    order: number,
    callback: (code: number, nativeInfo: NativeChatroomInfo) => void
  ): void;

  public setChatroomEntries(
    roomId: string,
    entries: Array<NativeKV<string>>,
    autoDelete: boolean,
    overWrite: boolean,
    callback: (code: number, nativeArray: Array<NativeKV<number>>) => void
  ): void;

  public deleteChatroomEntries(
    roomId: string,
    keys: Array< /* key */ string>,
    isForce: boolean,
    callback: (code: number, nativeArray: Array<NativeKV<number>>) => void
  ): void;

  public getChatroomEntries(
    roomId: string,
    keys: Array< /* key */ string>,
    callback: (code: number, nativeArray: Array<NativeKV<string>>) => void
  ): void;

  public getAllChatroomEntries(
    roomId: string,
    callback: (code: number, nativeArray: Array<NativeKV<string>>) => void
  ): void;

  public setChatroomKVStatusSyncListener(listener: (roomId: string) => void): void;

  public setChatroomKVStatusUpdateListener(listener: (roomId: string, nativeArray: Array<NativeKV<string>>) => void);

  public setChatroomKVStatusRemoveListener(listener: (roomId: string, nativeArray: Array<NativeKV<string>>) => void);

  public setChatroomMemberListener(listener: (native: NativeChatRoomMemberActionModel) => void): void;

  public setChatroomNotifyEventMultiLoginListener(listener: (native: NativeChatroomSyncEvent) => void): void;

  public setChatroomNotifyEventBlockListener(listener: (native: NativeChatroomMemberBlockEvent) => void): void;

  public setChatroomNotifyEventBanListener(listener: (native: NativeChatroomMemberBanEvent) => void): void;


  // RTC 相关 *******************************************************

  public setVoipCallInfoListener(listener: (native: NativeRtcConfig) => void): void;

  public sendRtcSignaling(
    roomId: string,
    signalingName: string,
    isQuery: boolean,
    pbBuffer: Uint8Array,
    timeout: number,
    callback: (code: number, data: Uint8Array) => void
  ): number;

  public cancelRtcSignaling(requestIds: Array<number>): void;

  public sendRtcHeartbeat(
    roomIds: Array<string>,
    timeout: number
  ): void;

  public setRtcHeartbeatSendListener(listener: (roomId: string, requestId: number) => void): void;

  public setRtcHeartbeatSendResultListener(
    listener: (code: number, roomId: string, requestId: number, version: number) => void
  ): void;

  public setRtcRoomEventListener(
    listener: (pbBuffer: Uint8Array) => void
  ): void;

  public sendGroupCallSignalInfo(
    targetId: string,
    key: string,
    signalInfo: string,
    callback: (code: number, nativeKey: string, nativeSignalInfo: string) => void
  ): void;

  public setGroupCallSignalListener(
    listener: (nativeArray: Array<NativeKV<string>>) => void
  ): void;
}