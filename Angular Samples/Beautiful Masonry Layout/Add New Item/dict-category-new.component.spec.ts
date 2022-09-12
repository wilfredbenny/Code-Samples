import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DictCategoryNewComponent } from './dict-category-new.component';

describe('DictCategoryNewComponent', () => {
  let component: DictCategoryNewComponent;
  let fixture: ComponentFixture<DictCategoryNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DictCategoryNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DictCategoryNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
