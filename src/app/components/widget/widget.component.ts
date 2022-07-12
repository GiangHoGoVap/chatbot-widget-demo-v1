import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
  }

  onOpen(): void{
    const popup = document.querySelector('.chat-popup');
    popup?.classList.toggle('show');
  }

}