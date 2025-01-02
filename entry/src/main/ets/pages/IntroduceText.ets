import { BaseConstants } from '../pages/BaseConstants';
@Component
export struct IntroduceText {
  @Prop data: ResourceStr;
  @Prop fontSize: string = '10fp';
  @Prop fontColor: string = "#182431";
  @Prop fontWeight: number = BaseConstants.FONT_WEIGHT_FOUR;

  build() {
    Text(this.data)
      .opacity(0.5)
      .fontFamily('HarmonyHeiTi')
      .fontSize(this.fontSize)
      .fontColor(this.fontColor)
      .textAlign(TextAlign.Start)
      .lineHeight('21fp')
      .fontWeight(this.fontWeight)
  }
}