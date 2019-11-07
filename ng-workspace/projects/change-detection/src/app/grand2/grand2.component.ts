import { Component, OnInit, ChangeDetectionStrategy, Input, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-grand2',
  template: `
    <p>
      grand2 works! {{sayHello()}}
      {{message$ | async}}

    </p>
    <button (click)="message='foo bar'">press me</button>
    <ul>
      <li *ngFor="let task of tasks$ | async">
        {{task.title}}
      </li>
    </ul>
  `,
  styleUrls: ['./grand2.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Grand2Component implements OnInit {
  @Input() fromChild2 : any;

  message$ = new BehaviorSubject('hello')

  tasks$ : Observable<any>;

  constructor(private _http : HttpClient, private _cd : ChangeDetectorRef) { }

  ngOnInit() {
    setTimeout(() => {
      //this.message = 'foo bar'
      // this.message$.next('foo bar');
      this._cd.detectChanges();
      this._cd.markForCheck();
    }, 1000);

    // this._router.events.subscribe(() => {

    // })

    // timer does not trigger cd
    // setTimeout(() => {
    //   console.log('timer in grand2');
    //   // this.message = 'foo bar';
    // }), 1000;

    // this._http.get('https://nztodo.herokuapp.com/api/task/?format=json').subscribe((data) => {
    //   this.tasks = data as any;
    // })

    this.tasks$ = this._http.get('https://nztodo.herokuapp.com/api/task/?format=json');
  }

  // stam = () => {
  //   this.message = 'foo';
  //   return Math.random();
  // }

  sayHello = () => {
    console.log('CD: Grand2');
  }

}
