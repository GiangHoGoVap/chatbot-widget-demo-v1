import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/models/message';

@Component({
  selector: 'welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {
  public message: Message;
  public messages: Message[];

  constructor() { 
    this.message = new Message('', false);
    this.messages = [new Message('Welcome to AIT', true)];
  }

  ngOnInit(): void {
  }

  toChat() {
    let myContainer = document.getElementById('changePage');
    myContainer?.classList.toggle('show');
  }

}
