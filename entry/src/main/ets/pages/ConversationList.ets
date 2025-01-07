
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

interface ConversationDetailParam {
  dataSource: Array<Message>;
  targetId: string;
}

@Component
export struct ConversationList {
  @StorageProp('currentBreakpoint') currentBreakpoint: string = 'sm';
  @Link currentConversationTargetId: string;
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
                  // 然后使用这个类型
                  const param: ConversationDetailParam = {
                    dataSource: this.dataSource,
                    targetId: item.targetId,
                  };
                  this.pageInfo.pushPathByName("ConversationDetail",param);
                  this.currentConversationTargetId = item.targetId;
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

}
