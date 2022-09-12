import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopHandlerComponent } from './shop-handler.component';

describe('ShopHandlerComponent', () => {
  let component: ShopHandlerComponent;
  let fixture: ComponentFixture<ShopHandlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopHandlerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
