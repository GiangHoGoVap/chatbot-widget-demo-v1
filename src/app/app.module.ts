import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MessageItemComponent } from './components/message-item/message-item.component';
import { MessageFormComponent } from './components/message-form/message-form.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MessageListComponent } from './components/message-list/message-list.component';
import { WidgetComponent } from './components/widget/widget.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent,
    MessageItemComponent,
    MessageFormComponent,
    MessageListComponent,
    WidgetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    MatButtonModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {

  constructor(injector: Injector) {

    const el = createCustomElement(AppComponent, { injector });

    customElements.define('chatbot-widget', el);

  }

  ngDoBootstrap() {}

}


