import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import {State} from '../reducers';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recieve-message-redux',
  template: `
    <p>
      {{ message$ | async }}    
    </p>
  `,
  styleUrls: ['./recieve-message-redux.component.css']
})
export class RecieveMessageReduxComponent implements OnInit {
  message$ : Observable<string> = this._store$.pipe(
    select('hello', 'message')
  )


  constructor(private _store$ : Store<State>) { }

  ngOnInit() {
  }

}
