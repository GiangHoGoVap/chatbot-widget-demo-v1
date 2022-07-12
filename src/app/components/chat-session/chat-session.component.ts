import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/models/message';

@Component({
  selector: 'chat-session',
  templateUrl: './chat-session.component.html',
  styleUrls: ['./chat-session.component.css']
})
export class ChatSessionComponent implements OnInit {

  public message: Message;
  public messages: Message[];

  constructor() { 
    this.message = new Message('', false);
    this.messages = [new Message('Welcome to AIT', true)];
  }

  ngOnInit(): void {
  }

}
