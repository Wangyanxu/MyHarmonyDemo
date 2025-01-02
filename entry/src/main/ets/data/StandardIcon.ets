@Component
export struct StandardIcon {
  @Prop icon: Resource;

  build() {
    Image(this.icon)
      .width('24vp')
      .height('24vp')
  }
}