import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VplusPharmacyComponent } from './vplus-pharmacy.component';

describe('VplusPharmacyComponent', () => {
  let component: VplusPharmacyComponent;
  let fixture: ComponentFixture<VplusPharmacyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VplusPharmacyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VplusPharmacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
