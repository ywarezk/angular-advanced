import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../reducers';
import {setMessage} from '../actions/hello.actions';

@Component({
  selector: 'app-send-message-redux',
  template: `
  <form (submit)="sendMessage($event)">
    <div>
      <label>Send Message</label>
      <input (input)="message=$event.target.value" type="text" />
    </div>
    <div>
      <button type="submit">Send Message</button>
    </div>
  </form>
  `,
  styleUrls: ['./send-message-redux.component.css']
})
export class SendMessageReduxComponent implements OnInit {
  message : string = '';

  constructor(private _store$ : Store<State>) { }

  ngOnInit() {
  }

  sendMessage = (event) => {
    this._store$.dispatch(setMessage({message: this.message}));
    event.preventDefault();
  }

}
