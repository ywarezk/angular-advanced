import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-recieve-message',
  template: `
    <h1>
      We got this message: {{messageService.currentMessage$ | async}}
    </h1>
  `,
  styleUrls: ['./recieve-message.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecieveMessageComponent implements OnInit {
  // message : string;

  constructor(public messageService : MessageService) { }

  ngOnInit() {
  }

}
