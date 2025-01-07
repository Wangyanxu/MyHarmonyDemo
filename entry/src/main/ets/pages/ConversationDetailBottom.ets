
import { StandardIcon } from '../data/StandardIcon';
import { emitter } from '@kit.BasicServicesKit';

@Component
export struct ConversationDetailBottom {
  @Builder CustomKeyboardBuilder(){}
  build() {
    Flex({ alignItems: ItemAlign.Center }) {
      Column() {
        StandardIcon({ icon: $r("app.media.emoji") })
      }
      .flexBasis('auto')
      .padding({
        right: '24vp',
        left: '24vp',
      })

      Blank()
      Column() {
        TextArea()
          .placeholderColor("#99000000")
          .caretColor("#007DFF")
          .backgroundColor("#F1F3F5")
          .borderRadius(20)
          .flexGrow(1)
          .padding({ right: '3vp' })
          .backgroundColor(Color.White)
          .enableKeyboardOnFocus(false)
          .customKeyboard(this.CustomKeyboardBuilder())
          .enterKeyType(EnterKeyType.Send)
          .onSubmit((enterKey: EnterKeyType) => {
            emitter.emit("sendMessage");
          })
      }

      Column() {
        StandardIcon({ icon: $r('app.media.add') })
      }
      .padding({
        right: '24vp',
        left: '24vp',
      })
    }
    .width('100%')
    .height('56vp')
  }
}