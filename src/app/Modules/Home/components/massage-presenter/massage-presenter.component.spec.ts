import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MassagePresenterComponent } from './massage-presenter.component';

describe('MassagePresenterComponent', () => {
  let component: MassagePresenterComponent;
  let fixture: ComponentFixture<MassagePresenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MassagePresenterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MassagePresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
