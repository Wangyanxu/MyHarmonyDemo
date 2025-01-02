
import { MessageBubble } from '../pages/MessageBubble';
import { Message,Conversation,TextMessageObjectName,ImageMessageObjectName,TextMessage,ImageMessage } from '@rongcloud/imlib';

@Component
export default struct ConversationDetailItem {

  @Prop message: Message;
  private currentFeatureIndex: number = 1;
  private receivedName: string = this.message.targetId;
  private isReceived: boolean = this.message.direction === 2;
  private content: string = getMessageContent(this.message);
  private isAppletMsg?: boolean;
  private isDocumentMsg?: boolean;

  build() {
    Flex({ justifyContent: FlexAlign.End, alignItems: ItemAlign.End }) {
      MessageBubble({
        receivedName: this.receivedName,
        currentFeatureIndex: this.currentFeatureIndex,
        isReceived: this.isReceived,
        content: this.content,
        isAppletMsg: this.isAppletMsg,
        isDocumentMsg: this.isDocumentMsg
      })
    }
  }
}

function getMessageContent(message: Message): string {
  if (TextMessageObjectName === message.objectName) {
    let txtMsg = message.content as TextMessage;
    return txtMsg.content;
  } else if (ImageMessageObjectName === message.objectName) {
    let imgMsg= message.content as ImageMessage;
    return `[图片消息]`;
  } else {
    return `[其他消息]`;
  }
}