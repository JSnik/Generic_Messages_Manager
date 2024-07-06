import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MassageConsumerComponent } from './massage-consumer.component';

describe('MassageConsumerComponent', () => {
  let component: MassageConsumerComponent;
  let fixture: ComponentFixture<MassageConsumerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MassageConsumerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MassageConsumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
