import List from "@ohos.util.List";
import { ChatroomInfo } from '../chatroom/model/ChatroomInfo';
import { ChatroomJoinedInfo } from '../chatroom/model/ChatroomJoinedInfo';
import { ConversationIdentifier } from '../conversation/ConversationIdentifier';
import { InitOption } from '../InitOption';
import { ConnectionStatus, ConversationType, DatabaseStatus, PushNotificationLevel, SentStatus } from '../MacroDefine';
import { RecallNotificationMessage } from '../message/content/normal/RecallNotificationMessage';
import { Message } from '../message/Message';
import { MessageBlockInfo } from '../message/model/MessageBlockInfo';
import { ReceivedInfo } from '../message/model/ReceivedInfo';
import { ConversationStatusInfo } from '../conversation/model/ConversationStatusInfo';
import { Conversation } from '../conversation/Conversation';
import { ICountOption, IGetLocalMsgByIdOption, IGetLocalMsgByTimeOption, IGetRemoteMsgOption, ISearchMessageInTimeRangeOption, ISendMsgOption } from '../message/option/MessageOption';
import { NetworkMonitorListener } from './monitor/NetworkMonitor';
import common from '@ohos.app.ability.common';
import { MessageContent, MessageContentConstructor, MessageFlag } from '../message/content/MessageContent';
import { EngineError } from '../EngineError';
import { CrashMonitorListener } from './monitor/CrashMonitor';
import { IGetConversationOption, IQuietHoursOption, ISetConversationTopOption } from '../conversation/option/ConversationOption';
import { AppState, NetworkType, RCCallback } from './InternalDefine';
import { ChatroomStatusListener } from '../chatroom/listener/ChatroomStatusListener';
import { NativeInsertLogInfo } from 'librongimlib.so';
import { LogLevel } from '../log/Log';
import { PublicServiceInfo } from '../publicservice/model/PublicServiceInfo';
import { ChatroomKVStatusListener } from '../chatroom/listener/ChatroomKVStatusListener';
import { ChatroomMemberActionListener } from '../chatroom/listener/ChatroomMemberActionListener';
import { ChatroomNotifyEventListener } from '../chatroom/listener/ChatroomNotifyEventListener';
import { TypingStatus } from '../message/model/TypingStatus';
import { RtcHeartbeatListener } from './rtc/listener/RtcHeartbeatListener';
import { KeyValuePair } from './model/KeyValuePair';
import { RtcRoomEventListener } from './rtc/listener/RtcRoomEventListener';
import { GroupCallSignalListener } from './rtc/listener/GroupCallSignalListener';
import { MessageExpansionListener } from '../message/listener/MessageExpansionListener';
import { HashMap } from '@kit.ArkTS';
import { SyncConversationReadStatusListener } from '../conversation/listener/SyncConversationReadStatusListener';
import { SearchConversationResult } from '../conversation/model/SearchConversationResult';
declare class InnerEngineImpl implements NetworkMonitorListener, CrashMonitorListener {
    private static instance;
    private nativeEngine;
    private networkMonitor;
    private crashMonitor;
    private isInitialized;
    private deviceIDHandler;
    private appVersion;
    private pushToken;
    private reconnectKickEnable;
    private nativeMessageReceivedListener;
    private constructor();
    static getInstance(): InnerEngineImpl;
    /**
     * 是否已经初始化，仅用于 InitGuard 注解
     */
    isInit(): boolean;
    init(context: common.Context, appKey: string, initOption: InitOption): void;
    private setListeners;
    private setNativeMessageReceivedListener;
    private setNativeMessageSearchableWordsListener;
    private setNativeVoipCallInfoListener;
    private getInitParam;
    /**
     * 获取媒体存储路径
     */
    private getMediaSavePath;
    onNetworkChanged(type: NetworkType, name: string): void;
    onSdkCrashed(exception: string): void;
    private registerAppStateChange;
    private setDeviceId;
    getVersion(): string;
    setAppVersion(ver: string): void;
    setReconnectKickEnable(enable: boolean): void;
    setPushToken(pushToken: string): void;
    setDatabaseStatusListener(listener: (status: DatabaseStatus) => void): void;
    setLogLevel(level: LogLevel): void;
    writeLogToNative(info: NativeInsertLogInfo): void;
    connect(token: string, timeout: number, callback: RCCallback<string>): void;
    private registerMessageToNative;
    setConnectionStatusListener(listener: (status: ConnectionStatus) => void): void;
    getCurrentConnectionStatus(callback: RCCallback<ConnectionStatus>): void;
    getCurrentUserId(callback: RCCallback<string>): void;
    protected notifyAppStateChanged(appState: AppState): void;
    private notifyNetworkChanged;
    disconnect(isReceivePush: boolean): void;
    setMessageReceivedListener(listener: (message: Message, info: ReceivedInfo) => void): void;
    setMessageRecalledListener(listener: (message: Message, recallMessage: RecallNotificationMessage) => void): void;
    setMessageBlockedListener(listener: (blockInfo: MessageBlockInfo) => void): void;
    sendMessage(message: Message, option: ISendMsgOption, savedCallback: (msg: Message) => void, resultCallback: RCCallback<Message>): void;
    sendMediaMessage(message: Message, option: ISendMsgOption, savedCallback: (msg: Message) => void, progressListener: (msg: Message, progress: number) => void, resultCallback: RCCallback<Message>): void;
    downloadMediaMessage(messageId: number, callback: RCCallback<string>): void;
    recallMessage(message: Message, callback: RCCallback<RecallNotificationMessage>): void;
    registerMessageType(msgClassList: List<MessageContentConstructor>): void;
    getMessageTypeMap(): HashMap<string, MessageFlag>;
    batchInsertMessage(msgList: List<Message>, callback: RCCallback<void>): void;
    insertMessage(msg: Message, callback: RCCallback<Message>): void;
    getMessageById(messageId: number, callback: RCCallback<Message>): void;
    getMessageByUid(messageUid: string, callback: RCCallback<Message>): void;
    getHistoryMessagesById(conId: ConversationIdentifier, option: IGetLocalMsgByIdOption, callback: RCCallback<List<Message>>): void;
    getHistoryMessagesByTime(conId: ConversationIdentifier, option: IGetLocalMsgByTimeOption, callback: RCCallback<List<Message>>): void;
    getRemoteHistoryMessages(conId: ConversationIdentifier, option: IGetRemoteMsgOption, callback: RCCallback<List<Message>>): void;
    getUnreadMentionedMessages(conId: ConversationIdentifier, option: ICountOption, callback: RCCallback<List<Message>>): void;
    getFirstUnreadMessage(conId: ConversationIdentifier, callback: RCCallback<Message>): void;
    deleteHistoryMessagesByIds(messageIds: List<number>, callback: RCCallback<void>): void;
    deleteMessages(conId: ConversationIdentifier, callback: RCCallback<void>): void;
    deleteHistoryMessagesByTime(conId: ConversationIdentifier, sentTime: number, callback: RCCallback<void>): void;
    cleanRemoteHistoryMessagesByTime(conId: ConversationIdentifier, sentTime: number, callback: RCCallback<void>): void;
    deleteRemoteMessages(conId: ConversationIdentifier, msgList: List<Message>, isDeleteLocal: boolean, callback: RCCallback<void>): void;
    setTypingStatusListener(listener: (conId: ConversationIdentifier, typingStatusList: List<TypingStatus>) => void): void;
    sendTypingStatus(conId: ConversationIdentifier, objectName: string, callback: RCCallback<void>): void;
    setTypingStatusInterval(interval: number, callback: RCCallback<void>): void;
    /**
     * 修改本地数据库的消息发送状态（本方法不对外暴露）
     * @param messageId 消息 Id，必须 > 0
     * @param sentStatus 发送状态，不能设置 SentStatus.Sending 否则报错
     * @param callback 结果
     * @warning 消息的发送状态会影响消息 UI 展示，原则上只能由 SDK 内部维护，不建议外部进行修改
     * @version 1.2.0
     */
    setMessageSentStatus(messageId: number, sentStatus: SentStatus, callback: RCCallback<void>): void;
    /**
     * 修改本地数据库的消息内容（本方法不对外暴露）
     * @param messageId 消息 Id，必须 > 0
     * @param content 消息内容
     * @param objectName 消息类型。objectName 为空，SDK 会使用 content 对应的值；objectName 为有效值，则必须和 content 匹配，否则会出现解析错误
     * @param searchableWord 搜索的关键字，可以为空。逻辑和 MessageContent 的 getSearchableWord() 一致
     * @warning 消息内容会影响 UI 展示和问题排查，原则上只能由 SDK 内部维护，不建议外部进行修改
     * @version 1.2.0
     */
    setMessageContent(messageId: number, content: MessageContent, objectName: string | null, searchableWord: List<string> | null, callback: RCCallback<void>): void;
    setMessageExpansionListener(listener: MessageExpansionListener): void;
    updateMessageExpansion(expansion: Map<string, string>, messageUid: string, callback: RCCallback<void>): void;
    removeMessageExpansion(keyArray: Array<string>, messageUid: string, callback: RCCallback<void>): void;
    setConversationStatusListener(listener: (items: List<ConversationStatusInfo>) => void): void;
    getConversation(conId: ConversationIdentifier, callback: RCCallback<Conversation>): void;
    getConversationListByPage(conTypeList: List<ConversationType>, option: IGetConversationOption, callback: RCCallback<List<Conversation>>): void;
    getTopConversationListByPage(conTypeList: List<ConversationType>, option: IGetConversationOption, callback: RCCallback<List<Conversation>>): void;
    getBlockedConversationListByPage(conTypeList: List<ConversationType>, option: IGetConversationOption, callback: RCCallback<List<Conversation>>): void;
    getUnreadConversations(conTypeList: List<ConversationType>, callback: RCCallback<List<Conversation>>): void;
    clearConversations(conTypeList: List<ConversationType>, callback: RCCallback<void>): void;
    removeConversations(conIdList: List<ConversationIdentifier>, callback: RCCallback<void>): void;
    setConversationsToTop(conIdList: List<ConversationIdentifier>, option: ISetConversationTopOption, callback: RCCallback<List<Conversation>>): void;
    getConversationTopStatus(conId: ConversationIdentifier, callback: RCCallback<boolean>): void;
    setConversationsNotificationLevel(conIdList: List<ConversationIdentifier>, level: PushNotificationLevel, callback: RCCallback<void>): void;
    getConversationNotificationLevel(conId: ConversationIdentifier, callback: RCCallback<PushNotificationLevel>): void;
    saveTextMessageDraft(conId: ConversationIdentifier, draft: string, callback: RCCallback<void>): void;
    getTextMessageDraft(conId: ConversationIdentifier, callback: RCCallback<string>): void;
    setNotificationQuietHoursLevel(option: IQuietHoursOption, callback: RCCallback<void>): void;
    getNotificationQuietHoursLevel(callback: RCCallback<IQuietHoursOption>): void;
    removeNotificationQuietHours(callback: RCCallback<void>): void;
    getTotalUnreadCount(callback: RCCallback<number>): void;
    getTotalUnreadCountByIds(conIds: List<ConversationIdentifier>, callback: RCCallback<number>): void;
    getUnreadCount(conId: ConversationIdentifier, callback: RCCallback<number>): void;
    clearMessagesUnreadStatus(conId: ConversationIdentifier, callback: RCCallback<void>): void;
    clearMessagesUnreadStatusByTime(conId: ConversationIdentifier, time: number, callback: RCCallback<void>): void;
    getUnreadCountByTypes(typeList: List<ConversationType>, isContainBlocked: boolean, callback: RCCallback<number>): void;
    syncConversationReadStatus(conId: ConversationIdentifier, timestamp: number, callback: RCCallback<void>): void;
    setSyncConversationReadStatusListener(listener: SyncConversationReadStatusListener): void;
    searchConversationsWithResult(typeList: List<ConversationType>, keyword: string, objNameList: List<string> | null, callback: RCCallback<List<SearchConversationResult>>): void;
    searchMessages(conId: ConversationIdentifier, keyword: string, objNameList: List<string> | null, startTime: number, count: number, callback: RCCallback<List<Message>>): void;
    searchMessagesInTimeRange(conId: ConversationIdentifier, keyword: string, option: ISearchMessageInTimeRangeOption, callback: RCCallback<List<Message>>): void;
    searchMessagesByUser(conId: ConversationIdentifier, userId: string, startTime: number, count: number, callback: RCCallback<List<Message>>): void;
    getPublicServiceList(callback: RCCallback<List<PublicServiceInfo>>): void;
    getPublicService(conId: ConversationIdentifier, callback: RCCallback<PublicServiceInfo>): void;
    /**
     * 对外提供多个监听回调；底层只提供了一个监听回调，所以此处做区分
     */
    setChatroomStatusListener(listener: ChatroomStatusListener): void;
    joinChatroom(roomId: string, msgCount: number, callback: RCCallback<ChatroomJoinedInfo>): void;
    joinExistingChatroom(roomId: string, msgCount: number, callback: RCCallback<ChatroomJoinedInfo>): void;
    quitChatroom(roomId: string, callback: RCCallback<void>): void;
    getChatroomInfo(roomId: string, option: ICountOption, callback: RCCallback<ChatroomInfo>): void;
    setChatroomEntries(roomId: string, entries: Map</* key */ string, /* value */ string>, autoDelete: boolean, overWrite: boolean, callback: RCCallback<Map</* key */ string, EngineError>>): void;
    deleteChatroomEntries(roomId: string, keys: List</* key */ string>, isForce: boolean, callback: RCCallback<Map</* key */ string, EngineError>>): void;
    getChatroomEntries(roomId: string, keys: List</* key */ string>, callback: RCCallback<Map<string, string>>): void;
    getAllChatroomEntries(roomId: string, callback: RCCallback<Map<string, string>>): void;
    setChatroomKVStatusListener(listener: ChatroomKVStatusListener): void;
    setChatroomMemberListener(listener: ChatroomMemberActionListener): void;
    setChatroomNotifyEventListener(listener: ChatroomNotifyEventListener): void;
    /**
     * 发送 RTC 信令
     * @version 1.2.0
     */
    sendRtcSignaling(roomId: string, signalingName: string, isQuery: boolean, pbBuffer: Uint8Array, timeout: number, callback: RCCallback<Uint8Array>): number;
    /**
     * 取消 RTC 信令
     * @version 1.2.0
     */
    cancelRtcSignaling(requestIds: Array<number>): void;
    /**
     * 发送 RTC 心跳
     * @version 1.2.0
     */
    sendRtcHeartbeat(roomIds: Array<string>, timeout: number): void;
    /**
     * 设置 RTC 心跳监听
     * @version 1.2.0
     */
    setRtcHeartbeatListener(listener: RtcHeartbeatListener): void;
    /**
     * 设置 RTC 房间事件监听
     * @version 1.2.0
     */
    setRtcRoomEventListener(listener: RtcRoomEventListener): void;
    /**
     * 发送 RTC GroupCall 信令
     * @version 1.2.0
     */
    sendGroupCallSignalInfo(targetId: string, key: string, signalInfo: string, callback: RCCallback<KeyValuePair<string>>): void;
    /**
     * 设置 RTC GroupCall 信令监听
     * @version 1.2.0
     */
    setGroupCallSignalListener(listener: GroupCallSignalListener): void;
}
export { InnerEngineImpl };
