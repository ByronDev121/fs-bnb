export class Chat {
    public id: number;
    public userId: number;
    public userName: string;
    public userImgUrl: string;
    public providerId: number;
    public providerName: string;
    public providerImgUrl: string;
    public messages: Array<TextMessage> = [];
}

export class TextMessage {
    public id: number;
    public chatId: number;
    public senderId: number;
    public text: string;
    public dateTimeCreate: Date;
}
