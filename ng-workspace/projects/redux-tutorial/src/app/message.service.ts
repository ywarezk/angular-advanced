import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  currentMessage$ : BehaviorSubject<string> = new BehaviorSubject('initial message');

  constructor() { }
}
