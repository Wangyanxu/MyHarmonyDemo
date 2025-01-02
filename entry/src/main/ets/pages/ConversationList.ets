
// import { Adaptive, BaseConstants, BreakpointConstants } from '@ohos/base';
import { ConversationDataInterface, ConversationListData } from '../pages/ConversationViewModel';
import { ConversationItem } from '../pages/ConversationItem';
// import { HomeTopSearch } from '../views/common/HomeTopSearch';
// import { HomeConstants } from '../constants/HomeConstants';
import { deviceInfo } from '@kit.BasicServicesKit';
import  MessageListData from '../data/MessageListData';
import { Conversation, ConversationType,
  EngineError,
  IAsyncResult,Message,
  IGetConversationOption, IMEngine } from '@rongcloud/imlib'


@Component
export struct ConversationList {
  @StorageProp('currentBreakpoint') currentBreakpoint: string = 'sm';
  @Link currentConversationUserName: string;
  @Link currentContactUserName: string;
  @Link ConversationData: Array<Conversation>;
  @State private currentIndex: number = 0;
  @State dataSource: Array<Message> = new Array();
  @Consume('pageInfo') pageInfo: NavPathStack;

  build() {
      Flex({ direction: FlexDirection.Column }) {
        List() {
          ForEach(this.ConversationData, (item: Conversation, index: number) => {
            ListItem() {
              ConversationItem({ conversation: item })
                .onClick(() => {
                  if (this.pageInfo.size() > 1) {
                    this.pageInfo.pop();
                  }
                  let listdata  = new MessageListData(this.dataSource);
                  listdata.getMessageList(item.targetId);
                  // 定义回调函数
                  // this.callback = () => {
                  //   console.log("Callback triggered in A page");
                  //   // 处理 B 页面返回的数据
                  // };
                  this.pageInfo.pushPathByName("ConversationDetail", this.dataSource,this.handleSendMessage);
                  this.currentConversationUserName = '11111';
                  this.currentContactUserName = '';
                  this.currentIndex = index;
                })
            }
            .height('11%')

          }, (item: ConversationDataInterface, index: number) => index + JSON.stringify(item))
        }
        .padding({
          bottom: deviceInfo.deviceType !== '2in1' &&
            this.currentBreakpoint === 'lg' ?
            '28vp' : '0vp'
        })
        .backgroundColor(Color.White)
        .width('100%')
        .height('100%')
      }

      .height('100%')
      .width('100%')
  }

  private handleSendMessage() {
    console.log("Enter key was pressed in the child component.");
    // 在这里处理回车事件，比如发送消息等
  }
}
