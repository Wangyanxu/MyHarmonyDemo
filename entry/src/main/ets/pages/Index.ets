import { EngineError, IMEngine, InitOption,Conversation } from '@rongcloud/imlib';
import ConversationListData from '../data/ConversationListData'


@Entry
@Component
struct Index {
  @State message: string = 'Hello World';
  @State appkey: string = '';
  @State userId: string = '';
  pathStack: NavPathStack = new NavPathStack();
  @State dataSource: Array<Conversation> = new Array();

  build() {
    Navigation(this.pathStack){
      Column(){
        Image($r('app.media.startIcon'))
          .size({ width: 80, height: 80 })
          .margin({bottom: 20})
        Text('登录界面')
          .fontSize(28)
          .fontWeight(FontWeight.Bolder)
          .margin({bottom:40})
        TextInput({text: 'pvxdm17jpw0pr', placeholder:'appkey'})
          .maxLength(11)
          .type(InputType.Normal)
          .margin({bottom:20})
          .onChange( (value: string) => {
            this.appkey = value;
          })
        TextInput({text: '1234',placeholder:'userId'})
          .maxLength(11)
          .type(InputType.Normal)
          .margin({bottom:40})
          .onChange( (value: string) => {
            this.userId = value;
          })
        Button('登录',{type: ButtonType.Capsule})
          .onClick(()=>{
            let token = "ksfWhklMCC+qxsB5Did1RR43vfaKGrYpqBLjxZtVpKo=@44lh.cn.rongnav.com;44lh.cn.rongcfg.com";
            let timeout = 5;
            IMEngine.getInstance().connect(token, timeout)
              .then(result => {
                if (EngineError.Success === result.code) {
                  let listdata  = new ConversationListData(this.dataSource);

                  listdata.getConversationList();
                  // 连接成功
                  let userId = result.userId;
                  this.pathStack.pushPathByName('ConversationListVC',this.dataSource);
                  return;
                }

                if (EngineError.ConnectTokenExpired === result.code) {
                  // Token 过期，从 APP 服务请求新 token，获取到新 token 后重新 connect()
                } else if (EngineError.ConnectionTimeout === result.code) {
                  // 连接超时，弹出提示，可以引导用户等待网络正常的时候再次点击进行连接
                } else {
                  //其它业务错误码，请根据相应的错误码作出对应处理。
                }
              });
          })
        // ToDoItem({content:'学习'})
      }
      .justifyContent(FlexAlign.Center)
    }
    // .hideNavBar(true)
    // .hideToolBar(true)
  }
}
