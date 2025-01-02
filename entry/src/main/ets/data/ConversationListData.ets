import { Conversation, ConversationType,
  EngineError,
  IAsyncResult,
  IGetConversationOption, IMEngine } from '@rongcloud/imlib'
import { List } from '@kit.ArkTS'

export default class  ConversationListData {
  dataSource: Array<Conversation>;
  constructor(dataSource:Array<Conversation>) {
    this.dataSource = dataSource;
  }
  public getConversationList(
    // typeList: ConversationType[],
    // time = 0,
    // count = 50
  ): void {
    let conTypeList = new List<ConversationType>();
    conTypeList.add(ConversationType.Private);
    conTypeList.add(ConversationType.Group);

    let option: IGetConversationOption = {
      time: 0,
      count: 10
    }


    IMEngine.getInstance().getConversationListByPage(conTypeList, option)
      .then(result => {
        if (EngineError.Success !== result.code) {
          return;
        }
        if (!result.data) {
          return;
        }
        result.data.forEach((conversation: Conversation) => {
          this.dataSource.push(conversation);
        });
        // this.dataSource = result.data as List<Conversation>;
      });
  }

}
