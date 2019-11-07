import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-child2',
  template: `
    <p>
      child2 works! {{sayHello()}}
    </p>
    <app-grand2 [fromChild2]="helloObj"></app-grand2>
  `,
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
  helloObj = {message: 'hello'};


  constructor(private _http : HttpClient) { }

  ngOnInit() {
    // setTimeout(() => {
    //   console.log('timer in child2');
    //   // this.helloObj = {message: 'foo'}
    //   this.helloObj['message'] = 'foo';
    // }, 1000)
  }

  sayHello = () => {
    console.log('CD: Child2');
  }

}
