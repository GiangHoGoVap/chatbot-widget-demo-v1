import { Component, Input, OnInit } from '@angular/core';
import { Message } from 'src/app/models/message';

@Component({
  selector: 'message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.css']
})
export class MessageFormComponent implements OnInit {

  @Input('message')
  public message: Message;

  @Input('messages')
  public messages: Message[];

  constructor() { }

  ngOnInit(): void {
  }

  public onSend(): void {
    this.message.timestamp = new Date();
    this.messages.push(this.message);
    this.message = new Message('', 'assets/images/user-icon.png', false);
  }

}