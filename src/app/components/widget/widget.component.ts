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
    this.message = new Message('', false);
    this.messages = [new Message('Welcome to AIT', true)];
  }

  ngOnInit(): void {
  }

  onOpen(): void{
    const popup = document.querySelector('.chat-popup');
    popup?.classList.toggle('show');
  }

}