import { Conversation, ConversationType,
  EngineError,
  IAsyncResult,
  IGetLocalMsgByTimeOption, IMEngine,Message,ConversationIdentifier } from '@rongcloud/imlib'



export default class  MessageListData {
  dataSource: Array<Message>;
  constructor(dataSource:Array<Message>) {
    this.dataSource = dataSource;
  }
  public getMessageList(
    targetId : string,
    // count = 50
  ): void {
    this.dataSource.splice(0,this.dataSource.length);
    let conId = new ConversationIdentifier();
    conId.conversationType = ConversationType.Private;
    conId.targetId = targetId;

    let option: IGetLocalMsgByTimeOption = {
      time: 0,
      beforeCount: 10,
      afterCount: 0
    }

    IMEngine.getInstance().getHistoryMessagesByTime(conId, option)
      .then(result => {
        if (EngineError.Success !== result.code) {
          return;
        }
        if (!result.data) {
          return;
        }
        result.data.forEach((message: Message) => {
          this.dataSource.push(message);
        });
      });
  }

}
