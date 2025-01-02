

import { BaseConstants } from '../pages/BaseConstants'
import { IntroduceText } from '../pages/IntroduceText'
import { NormalText } from '../pages/NormalText'
import { ConversationDataInterface, ConversationListData } from '../pages/ConversationViewModel';

@Component
export struct MessageBubble {
  @StorageProp('currentBreakpoint') currentBreakpoint: string = 'sm';
  @Prop receivedName: string;
  @Prop currentFeatureIndex: number;
  private isReceived: boolean = false;
  @Prop content: string;
  private isAppletMsg?: boolean;
  private isDocumentMsg?: boolean;
  avatar1: Resource = $r('app.media.avatar1');
  avatar2: Resource = $r('app.media.avatar1');

  build() {
    Column() {
      Flex({ justifyContent: this.isReceived ? FlexAlign.Start : FlexAlign.End, direction: FlexDirection.Row }) {
        if (this.isReceived) {
          Image(ConversationListData.find((item) => item.name === this.receivedName)?.icon || this.avatar1)
            .width('40vp')
            .height('40vp')
            .flexShrink(BaseConstants.FLEX_SHRINK_ZERO)
        }
        Column() {
          Stack({ alignContent: this.isReceived ? Alignment.TopStart : Alignment.TopEnd }) {
            Path()
              .commands('M-10 1 L0 18 L32 1 Z')
              .fillOpacity(1)
              .stroke(Color.White)
              .strokeWidth(1)
              .fill(Color.White)
              .visibility(this.isReceived ? Visibility.Visible : Visibility.None)
            Path()
              .commands('M23 1 L0 28 L-10 1 Z')
              .fillOpacity(1)
              .stroke(Color.White)
              .strokeWidth(1)
              .fill(Color.White)
              .visibility(this.isReceived ? Visibility.None : Visibility.Visible)
              .zIndex(2)
              .margin({ right: '-10vp' })
            Column() {
              this.MessageContent()
            }
            .padding({
              left: '12vp',
              right: '12vp',
              top: '10vp',
              bottom: '10vp'
            })
            .backgroundColor(Color.White)
            .borderRadius(8)
          }
          .padding({
            top: '1vp',
            left: '20vp',
            right: '20vp',
            bottom: '22vp'
          })
          .width(BaseConstants.FULL_WIDTH)
        }
        .width(BaseConstants.FULL_WIDTH)

        if (!this.isReceived) {
          Image(this.avatar2)
            .width('40vp')
            .height('40vp')
            .flexShrink(BaseConstants.FLEX_SHRINK_ZERO)
        }
      }
    }
    .margin({ left: '15vp', right: '16vp' })
  }

  @Builder
  MessageContent() {
    if (this.isAppletMsg) {
      Column() {
        Row() {
          Image($r('app.media.emoji'))
            .height('16vp')
            .width('16vp')
            .margin({ right: "10vp" })
          Text('奶茶')
            .fontFamily("HarmonyHeiTi")
            .fontSize("12fp")
            .fontColor("#182431")
            .textAlign(TextAlign.Start)
            .fontWeight(BaseConstants.FONT_WEIGHT_FOUR)
        }
        .margin({ bottom: '7vp' })

        Text(this.content)
          .fontFamily("HarmonyHeiTi")
          .fontSize("12fp")
          .fontColor("#182431")
          .textAlign(TextAlign.Start)
          .fontWeight(BaseConstants.FONT_WEIGHT_FOUR)
          .margin({ bottom: '8vp'})
          .copyOption(CopyOptions.LocalDevice)
        Flex() {
        }
        .height('138vp')
        .width('186vp')
        .backgroundImage($r('app.media.startIcon'))
        .backgroundImageSize({ width: '186vp', height: '138vp' })
        .constraintSize({ maxWidth: BaseConstants.FULL_WIDTH })
        .margin({ bottom: '6vp' })

        Text('应用')
          .fontFamily("HarmonyHeiTi")
          .fontSize('10fp')
          .fontColor("#8A9097")
          .textAlign(TextAlign.Start)
          .fontWeight(BaseConstants.FONT_WEIGHT_FOUR)
      }
      .alignItems(HorizontalAlign.Start)
    } else if (this.isDocumentMsg) {
      Column() {
        Row() {
          NormalText({ data: this.content })
            .margin({ right: "10vp" })
            .width("132vp")
          Image($r('app.media.emoji'))
            .height("36vp")
            .width("36vp")
            .margin({ right: '11vp' })
        }
        .margin({ bottom: '4vp' })

        IntroduceText({ data:'24KB', fontColor:"#8A9097" })
          .margin({ bottom: '10vp' })
        Divider()
          .color("#E6E6E6")
          .strokeWidth(1).margin({ bottom: '1vp' })
        Row() {
          Image($r('app.media.emoji'))
            .width('12vp')
            .height('12vp')
            .margin({ right: '6vp' })
          IntroduceText({
            data:'文档',
            fontColor:"#8A9097"
          })
            .margin({ top: '-2vp'})
        }
      }
      .alignItems(HorizontalAlign.Start)
      .width('180vp')
      .margin({ bottom: '-7vp' })
    } else {
      Text(this.content)
        .fontSize("12fp")
        .fontFamily("HarmonyHeiTi")
        .fontWeight(BaseConstants.FONT_WEIGHT_FOUR)
        .lineHeight('21vp')
        .fontColor("#182431")
        .copyOption(CopyOptions.LocalDevice)
    }
  }
}