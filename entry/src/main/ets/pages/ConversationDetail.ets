
import { ConversationDetailBottom } from '../pages/ConversationDetailBottom';
import ConversationDetailItem from '../pages/ConversationDetailItem';
import { ConversationDetailTopSearch } from '../pages/ConversationDetailTopSearch';
import { deviceInfo } from '@kit.BasicServicesKit';
import { Message } from '@rongcloud/imlib';

@Builder
export function ConversationDetailBuilder(name: string, messagesData:  Array<Message>) {
  ConversationDetail({
    MessagesData:messagesData,
  })
}
@Entry
@Component
export struct ConversationDetail {
  @StorageProp('currentBreakpoint') currentBreakpoint: string = 'sm';
  @State currentConversationUserName: string = '11111';
  @State currentFeatureIndex: number = 1;
  @Prop MessagesData: Array<Message>;

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
  }
}