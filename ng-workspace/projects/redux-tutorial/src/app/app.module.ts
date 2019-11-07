import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SendMessageComponent } from './send-message/send-message.component';
import { RecieveMessageComponent } from './recieve-message/recieve-message.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { RecieveMessageReduxComponent } from './recieve-message-redux/recieve-message-redux.component';
import { SendMessageReduxComponent } from './send-message-redux/send-message-redux.component';
import { TodoModule } from '../todo/todo.module';

@NgModule({
  declarations: [
    AppComponent,
    SendMessageComponent,
    RecieveMessageComponent,
    RecieveMessageReduxComponent,
    SendMessageReduxComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    TodoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
