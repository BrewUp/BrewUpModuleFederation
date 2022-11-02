import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasesSearchComponent } from './purchases-search.component';

describe('PurchasesSearchComponent', () => {
  let component: PurchasesSearchComponent;
  let fixture: ComponentFixture<PurchasesSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchasesSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchasesSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
