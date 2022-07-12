import { AfterViewInit, Component, ElementRef, Input, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Message } from 'src/app/models/message';
import { MessageItemComponent } from '../message-item/message-item.component';

@Component({
  selector: 'message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit, AfterViewInit {

  @Input('messages')
  public messages: Message[];

  @ViewChild('chatlist', {read: ElementRef}) chatList: ElementRef;
  @ViewChildren(MessageItemComponent, {read: ElementRef}) chatItems: QueryList<MessageItemComponent>;

  constructor() { }

  ngAfterViewInit() {
    this.chatItems.changes.subscribe(elements => {
      this.scrollToBottom();
    });
  }

  private scrollToBottom(): void {
    try {
      this.chatList.nativeElement.scrollTop = this.chatList.nativeElement.scrollHeight;
    } catch (error) {
      console.log('Could not find the "chatList" element.');
    }
  }

  ngOnInit() {
  }

}