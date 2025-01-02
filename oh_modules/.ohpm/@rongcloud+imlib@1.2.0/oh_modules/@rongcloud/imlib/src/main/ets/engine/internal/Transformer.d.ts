import List from "@ohos.util.List";
import { NativeConversationStatusChangeItem, NativeChatroomInfo, NativeChatroomJoinedInfo, NativeChatroomUserInfo, NativeConversation, NativeMessage, NativeMessageBlockInfo, NativeRecallNotificationMessage, NativeReceivedInfo, NativeConversationIdentifier, NativeSendMessageOption, NativeMessageType, NativeReceivedStatus, NativeVersionData, NativeSearchConversationResult, NativeRtcConfig } from 'librongimlib.so';
import { ChatroomInfo } from '../chatroom/model/ChatroomInfo';
import { ChatroomMemberInfo } from '../chatroom/model/ChatroomMemberInfo';
import { ChatroomJoinedInfo } from '../chatroom/model/ChatroomJoinedInfo';
import { ConversationType, Order, PushNotificationLevel, ReceivedStatus } from '../MacroDefine';
import { ConversationStatusInfo } from '../conversation/model/ConversationStatusInfo';
import { Conversation } from '../conversation/Conversation';
import { ReceivedInfo } from '../message/model/ReceivedInfo';
import { Message } from '../message/Message';
import { RecallNotificationMessage } from '../message/content/normal/RecallNotificationMessage';
import { MessageBlockInfo } from '../message/model/MessageBlockInfo';
import { ConversationIdentifier } from '../conversation/ConversationIdentifier';
import { MessageFlag } from '../message/content/MessageContent';
import { HashMap } from '@kit.ArkTS';
import { ISendMsgOption } from '../message/option/MessageOption';
import { NativeChatRoomMemberActionModel, NativeChatroomMemberBanEvent, NativeChatroomMemberBlockEvent, NativeChatroomSyncEvent, NativeKV, NativePublicServiceInfo, NativeTypingStatus } from 'librongimlib.so';
import { PublicServiceInfo } from '../publicservice/model/PublicServiceInfo';
import { ChatRoomMemberActionModel } from '../chatroom/model/ChatroomMemberAction';
import { ChatroomSyncEvent } from '../chatroom/model/ChatroomSyncEvent';
import { ChatroomMemberBlockEvent } from '../chatroom/model/ChatroomMemberBlockEvent';
import { ChatroomMemberBanEvent } from '../chatroom/model/ChatroomMemberBanEvent';
import { TypingStatus } from '../message/model/TypingStatus';
import { SearchConversationResult } from '../conversation/model/SearchConversationResult';
declare class Transformer {
    static sdkVersionArrayToNative(map: Map<string, string>): Array<NativeVersionData>;
    static messageFromNative(native: NativeMessage | null): Message | null;
    static receivedStatusFromNative(native: NativeReceivedStatus): ReceivedStatus;
    static receivedStatusToNative(receivedStatus: ReceivedStatus): NativeReceivedStatus;
    static receivedInfoFromNative(native: NativeReceivedInfo): ReceivedInfo | null;
    static recallNotificationMessageFromNative(native: NativeRecallNotificationMessage): RecallNotificationMessage | null;
    static messageBlockInfoFromNative(native: NativeMessageBlockInfo): MessageBlockInfo | null;
    static messageTypeArrayToNative(typeMap: HashMap<string, MessageFlag>): Array<NativeMessageType> | null;
    static messageArrayToNative(msgList: List<Message>): Array<NativeMessage> | null;
    static messageIdListToNative(messageIds: List<number>): Array<number> | null;
    static messageListFromNative(nativeMsgArray: Array<NativeMessage>): List<Message> | null;
    static messageToNative(msg: Message): NativeMessage | null;
    static appendStringForList(list: List<string> | null): string;
    static publicServiceInfoListFromNative(nativeArray: Array<NativePublicServiceInfo>): List<PublicServiceInfo> | null;
    static publicServiceInfoFromNative(native: NativePublicServiceInfo): PublicServiceInfo | null;
    private static publicServiceMenuItemListFromNative;
    private static publicServiceMenuItemFromNative;
    static sendMessageOptionToNative(option: ISendMsgOption): NativeSendMessageOption;
    static conversationStatusChangeItemListFomNative(nativeItemArray: Array<NativeConversationStatusChangeItem>): List<ConversationStatusInfo> | null;
    static conversationStatusChangeItemFomNative(native: NativeConversationStatusChangeItem): ConversationStatusInfo | null;
    static conversationFromNative(native: NativeConversation): Conversation | null;
    static searchConversationResultFromNative(native: NativeSearchConversationResult): SearchConversationResult | null;
    static pushNotificationLevelListToNative(levelList: List<PushNotificationLevel>): Array<number> | null;
    static conversationListFromNative(nativeConArray: Array<NativeConversation>): List<Conversation> | null;
    static searchConversationResultListFromNative(nativeSeaConResArray: Array<NativeSearchConversationResult>): List<SearchConversationResult> | null;
    static conversationIdentifierListToNative(conIdList: List<ConversationIdentifier>): Array<NativeConversationIdentifier> | null;
    static conversationTypeListToNative(typeList: List<ConversationType>): Array<number> | null;
    static chatroomJoinedInfoFromNative(native: NativeChatroomJoinedInfo): ChatroomJoinedInfo | null;
    static chatroomInfoFromNative(native: NativeChatroomInfo): ChatroomInfo | null;
    static chatroomUserInfoFromNative(native: NativeChatroomUserInfo): ChatroomMemberInfo | null;
    static orderFromNative(native: number): Order;
    static orderToNative(ts: Order): number;
    static stringListToArray(strList: List<string>): Array<string> | null;
    static stringListFromArray(strArray: Array<string> | null): List<string> | null;
    static conversationTypeListToString(typeList: List<ConversationType>): string;
    static mapToNativeArray<T>(map: Map<string, T>): Array<NativeKV<T>>;
    static mapFromNativeArray<T>(nativeArray: Array<NativeKV<T>>): Map<string, T>;
    static chatRoomMemberActionModelFromNative(native: NativeChatRoomMemberActionModel | null): ChatRoomMemberActionModel | null;
    private static chatroomMemberActionListFromNative;
    static chatroomSyncEventFromNative(native: NativeChatroomSyncEvent | null): ChatroomSyncEvent | null;
    static chatroomMemberBlockEventFromNative(native: NativeChatroomMemberBlockEvent | null): ChatroomMemberBlockEvent | null;
    static chatroomMemberBanEvent(native: NativeChatroomMemberBanEvent | null): ChatroomMemberBanEvent | null;
    static typingStatusListFromNative(nativeArray: Array<NativeTypingStatus> | null): List<TypingStatus> | null;
    private static typingStatusFromNative;
    static rtcConfigMapFromNative(native: NativeRtcConfig | null): Map<string, Object>;
}
export { Transformer };