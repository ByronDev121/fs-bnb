export class Chat {
    public id: number;
    public userId: number;
    public userImgUrl: string;
    public providerUserId: number;
    public providerUserName: string;
    public providerImgUrl: string;
    public latestTextId: number;
    public messages: Array<TextMessage>
}

export class TextMessage {
    public id: number;
    public chatId: number;
    public text: string;
    public dateTimeCreate: Date;
}
