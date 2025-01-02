
import { BaseConstants } from '../pages/BaseConstants';
import { StandardIcon } from '../data/StandardIcon';
import { deviceInfo } from '@kit.BasicServicesKit';

@Component
export struct ConversationDetailTopSearch {
  @StorageProp('currentBreakpoint') currentBreakpoint: string = 'sm';
  @Link currentConversationUserName: string;
  // @Consume('pageInfo') pageInfo: NavPathStack;

  build() {
    Flex({ alignItems: ItemAlign.Center, justifyContent: FlexAlign.SpaceBetween }) {
      StandardIcon({ icon: $r('app.media.emoji') })
        .onClick(() => {

        })
      Text(this.currentConversationUserName || 'ff')
        .fontWeight(BaseConstants.FONT_WEIGHT_FIVE)
        .fontSize('18fp')
        .fontFamily("HarmonyHeiTi-Medium")
        .fontColor('#182431')
      StandardIcon({ icon: $r('app.media.emoji') })
    }
    .width(BaseConstants.FULL_WIDTH)
    .height(BaseConstants.FULL_HEIGHT)
    .padding({ left: '24vp', right: '24vp',top: deviceInfo.deviceType === BaseConstants.DEVICE_2IN1 ? '0vp': '36vp' })
  }
}