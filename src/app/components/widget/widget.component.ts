import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/models/message';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent implements OnInit {
  public message: Message;
  public messages: Message[];

  constructor() { 
    this.message = new Message('', 'assets/images/user-icon.png', false);
    this.messages = [new Message('Welcome to AIT', 'assets/images/bot-icon.jpg', true)];
  }

  ngOnInit(): void {
  }

  onOpen(): void{
    const popup = document.querySelector('.chat-popup');
    popup?.classList.toggle('show');
  }

}