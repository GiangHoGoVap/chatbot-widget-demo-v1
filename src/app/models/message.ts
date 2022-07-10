export class Message {
    avatar: string;
    content: string;
    timestamp: Date;
    isBot: Boolean;

    constructor(_content: string, _avatar: string, _isBot: Boolean = true, _timestamp?: Date){
        this.avatar = _avatar;
        this.content = _content;
        this.timestamp = _timestamp!;
        this.isBot = _isBot;
    }
}