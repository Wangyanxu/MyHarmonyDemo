
import { MessageContent, Conversation,TextMessageObjectName,ImageMessageObjectName,ImageMessage,
  EngineError,
  IAsyncResult,
  IGetConversationOption, IMEngine,
  TextMessage } from '@rongcloud/imlib'
@Component
export struct ConversationItem {
  @StorageProp('currentBreakpoint') currentBreakpoint: string = 'sm';
  @Prop conversation: Conversation;

  build() {
    Flex({ alignItems: ItemAlign.Center, justifyContent: FlexAlign.SpaceBetween }) {
      Column() {
        Image($r('app.media.avatar1'))
          .height('40vp')
          .width('40vp')
      }
      .width('40vp')
      .margin({ left: '24vp', right: '12vp'})

      Flex({ direction: FlexDirection.Column,justifyContent:FlexAlign.Center }) {
        Text(this.conversation.targetId)
          .fontSize('16fp')
          .fontWeight(500)
          .lineHeight(40)
          .fontFamily("HarmonyHeiTi-Medium")
        Text(getLastMessage(this.conversation))
          .maxLines(1)
          .textOverflow({ overflow: TextOverflow.Ellipsis })
          .fontSize('14fp')
          .fontWeight(400)
          .lineHeight(40)
          .fontFamily('HarmonyHeiTi')
          .fontColor(Color.Grey)
          .width('100%')

      }
      .flexShrink(1)
      .margin({ left: '12vp' })

      Blank()
      Column() {
        Text(formatTime(this.conversation.lastOperateTime))
          .fontWeight(400)
          .fontSize('10fp')
          .fontColor(Color.Grey)
          .fontFamily('HarmonyHeiTi')
          .backgroundColor(Color.White)
          .width('45vp')
      }
      .flexBasis('auto')
      .margin({ left:'24vp', right: '12vp' })
    }
    .width('100%')
    .padding('3vp')
  }


}

function formatTime(lastOperateTime: number): string {
  const date = new Date(lastOperateTime);
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
}


function getLastMessage(conversation: Conversation): string {
  if (TextMessageObjectName === conversation.objectName) {
    let txtMsg = conversation.content as TextMessage;
    return txtMsg.content;
  } else if (ImageMessageObjectName === conversation.objectName) {
    let imgMsg= conversation.content as ImageMessage;
    return `[图片消息]`;
  } else {
    return `[其他消息]`;
  }
}