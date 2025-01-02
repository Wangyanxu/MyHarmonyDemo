
import { ConversationDataInterface, ConversationListData } from '../pages/ConversationViewModel';
import { ConversationItem } from '../pages/ConversationItem';

import { deviceInfo } from '@kit.BasicServicesKit';
import { ConversationList } from '../pages/ConversationList';
import { List  } from '@kit.ArkTS'
import { EngineError, IMEngine, InitOption,Conversation } from '@rongcloud/imlib';
import ConversationListDataSource from '../data/ConversationListData'

@Builder
export function ConversationListVCBuilder(name: string, param: Array<Conversation>) {
  ConversationListVC({
    ConversationData: param
  })
}

@Entry
@Component
export struct ConversationListVC {
  @StorageProp('currentBreakpoint') @Watch('watchCurrentBreakpoint') currentBreakpoint: string = 'sm';
  @State currentConversationUserName: string = '';
  @State currentContactUserName: string = '';
  @Prop ConversationData: Array<Conversation>;
  @Provide('pageInfo') pageInfo: NavPathStack = new NavPathStack();
  watchCurrentBreakpoint() {
    if (this.currentBreakpoint === 'sm' &&
      this.pageInfo.getParamByName('ConversationDetailNone').length === 1 && this.pageInfo.size() === 1) {
      this.pageInfo.pop();
    }
  }

  build() {
    NavDestination(){
      Flex({ direction: FlexDirection.Column, justifyContent: FlexAlign.Center }) {
        ConversationList({
          currentConversationUserName: $currentConversationUserName,
          currentContactUserName: $currentContactUserName,
          ConversationData: $ConversationData
        })
          .flexGrow(1)
          .width('100%')
          .backgroundColor(Color.Orange)
      }
      .padding({
        bottom: deviceInfo.deviceType !== '2in1'
          && this.currentBreakpoint !== 'lg' ?
          '28vp' : '0vp'
      })
      .height('100%')
    }
    .onReady((ctx: NavDestinationContext) => {
      try {
        this.pageInfo = ctx.pathStack;
      } catch (e) {
        console.log(`testTag onReady catch exception: ${JSON.stringify(e)}`)
      }
    })
  }
}
