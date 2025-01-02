
export default class ConversationResource {
  targetId: number;
  img: Resource;
  message: string;
  time: string;

  constructor(targetId:number,img:Resource,message:string,time:string) {
    this.targetId = targetId;
    this.img = img;
    this.message = message;
    this.time = time;
  }
}