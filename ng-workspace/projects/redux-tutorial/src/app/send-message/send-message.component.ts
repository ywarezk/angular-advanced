import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-send-message',
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
  styleUrls: ['./send-message.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SendMessageComponent implements OnInit {
  message : string = '';

  constructor(private _messageService : MessageService) { }

  ngOnInit() {
  }

  sendMessage = (event) => {
    event.preventDefault();
    this._messageService.currentMessage$.next(this.message);
  }

}
