import { BaseConstants } from '../pages/BaseConstants';

@Component
export struct NormalText {
  @Prop data: ResourceStr;
  @Prop fontSize: string = '10fp';
  @Prop fontColor: string = "#182431";
  @Prop fontWeight: number = BaseConstants.FONT_WEIGHT_FOUR;
  @Prop fontFamily: string = "HarmonyHeiTi";

  build() {
    Text(this.data)
      .fontFamily(this.fontFamily)
      .fontSize(this.fontSize)
      .fontColor(this.fontColor)
      .textAlign(TextAlign.Start)
      .lineHeight("21fp")
      .fontWeight(this.fontWeight)
      .copyOption(CopyOptions.LocalDevice)
  }
}