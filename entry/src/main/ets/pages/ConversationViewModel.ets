import { Want, common } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { text } from '@kit.ArkGraphics2D';

interface ConversationDataInterface {
  name: string
  msg: string
  time: string
  icon: Resource
};

const ConversationListData: ConversationDataInterface[] = [
  { name:'11111', msg: 'fffff', time: '13:55', icon: $r('app.media.avatar1') },
  { name:'fffff', msg: 'fffff', time: '13:55', icon: $r('app.media.avatar1') },
];

class ConversationViewModel {
  public startAppletAbility(context: common.UIAbilityContext, index: number): void {
    const want: Want = {
      bundleName: getContext(context).applicationInfo.name,
      abilityName: 'AppletAbility',
      parameters: {
        position: index
      }
    };
    try {
      context.startAbility(want, (err: BusinessError) => {
        if (err.code) {
        }
      });
    } catch (error) {
      hilog.error(0x00004, 'ConversationViewModel', '%{public}s', error);
    }
  }

  public startDocumentAbility(context: common.UIAbilityContext, index: number): void {
    const want: Want = {
      bundleName: getContext(context).applicationInfo.name,
      abilityName: 'DocumentAbility',
      parameters: {
        position: index
      }
    };
    try {
      context.startAbility(want, (err: BusinessError) => {
        if (err.code) {
        }
      });
    } catch (error) {
    }
  }
}

export { ConversationDataInterface, ConversationListData, ConversationViewModel };