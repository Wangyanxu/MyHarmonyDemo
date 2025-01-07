
import { ConversationDetailBottom } from '../pages/ConversationDetailBottom';
import ConversationDetailItem from '../pages/ConversationDetailItem';
import { ConversationDetailTopSearch } from '../pages/ConversationDetailTopSearch';
import { deviceInfo } from '@kit.BasicServicesKit';
import { emitter } from '@kit.BasicServicesKit';
import { ConversationIdentifier, ConversationType,
  EngineError,
  ISendMsgOption,Message,
  TextMessage, IMEngine } from '@rongcloud/imlib'
import  MessageListData from '../data/MessageListData';

import List from '@ohos.util.List';
interface ConversationDetailParam {
  dataSource: Array<Message>;
  targetId: string;
}

@Builder
export function ConversationDetailBuilder(name: string, param: ConversationDetailParam) {
  ConversationDetail({
      MessagesData : param.dataSource,
      currentConversationTargetId : param.targetId,
  })
}
@Entry
@Component
export struct ConversationDetail {
  @StorageProp('currentBreakpoint') currentBreakpoint: string = 'sm';
  @Prop currentConversationTargetId: string ;
  @State currentFeatureIndex: number = 1;
  @Prop MessagesData: Array<Message>;

  onDestroy() {
    emitter.off("sendMessage", this.handleEvent);
  }

  // 事件回调函数
  handleEvent() {
    console.info('callback');
    let conId = new ConversationIdentifier();
    conId.conversationType = ConversationType.Private;
    conId.targetId = this.currentConversationTargetId;

    let textMsg = new TextMessage();
    textMsg.content = "文本消息的内容";


    let msg = new Message(conId, textMsg);
    let option: ISendMsgOption = {};

    IMEngine.getInstance()
      .sendMessage(msg, option, (msg: Message) => {
      })
      .then(result => {
        if (EngineError.Success !== result.code) {
          return;
        }
        if (!result.data) {
          return;
        }
        let msg = result.data as Message;
        let listdata  = new MessageListData(this.MessagesData);
        listdata.getMessageList( this.currentConversationTargetId);
      })
  }
  build() {
    NavDestination() {
      Flex({ direction: FlexDirection.Column }) {
        // ConversationDetailTopSearch({ currentConversationUserName: $currentConversationUserName, })
        //   .height('11%')
        ForEach(this.MessagesData, (message: Message, index: number) => {
          ConversationDetailItem({
            message:message,
          });
        });
        Blank()
        ConversationDetailBottom()
      }
      .height('100%')
      .width('100%')
      .backgroundColor("#F6F6F6")
      .padding({
        bottom: deviceInfo.deviceType !==  '2in1' ?
        '28vp' : '0vp'
      })
    }
    .hideTitleBar(true)
    .onReady((context: NavDestinationContext) => {
      emitter.on("sendMessage", this.handleEvent.bind(this));
    })
  }
}
