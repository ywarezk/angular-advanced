import { Component, OnInit } from '@angular/core';


let anotherMessage = {message : 'hello world'};

@Component({
  selector: 'app-timer',
  template: `
    <p>
      timer works! {{message.message}}
    </p>
  `,
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  message = anotherMessage;

  constructor() { }

  ngOnInit() {
    // setTimeout(() => {
    //   anotherMessage['message'] = 'foo bar'
    //   // anotherMessage = {message: 'foo bar'};
    // }, 1000)    
  }

}

setTimeout(() => {
  // anotherMessage['message']= 'foo bar'
  anotherMessage['message'] = 'foo bar'
}, 1000)
