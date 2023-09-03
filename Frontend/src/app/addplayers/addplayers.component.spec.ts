import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddplayersComponent } from './addplayers.component';

describe('AddplayersComponent', () => {
  let component: AddplayersComponent;
  let fixture: ComponentFixture<AddplayersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddplayersComponent]
    });
    fixture = TestBed.createComponent(AddplayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
