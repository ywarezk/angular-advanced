import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecieveMessageReduxComponent } from './recieve-message-redux.component';

describe('RecieveMessageReduxComponent', () => {
  let component: RecieveMessageReduxComponent;
  let fixture: ComponentFixture<RecieveMessageReduxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecieveMessageReduxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecieveMessageReduxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
