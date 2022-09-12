import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DictionaryHandlerComponent } from './dictionary-handler.component';

describe('DictionaryHandlerComponent', () => {
  let component: DictionaryHandlerComponent;
  let fixture: ComponentFixture<DictionaryHandlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DictionaryHandlerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DictionaryHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
