import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendMessageReduxComponent } from './send-message-redux.component';

describe('SendMessageReduxComponent', () => {
  let component: SendMessageReduxComponent;
  let fixture: ComponentFixture<SendMessageReduxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendMessageReduxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendMessageReduxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
