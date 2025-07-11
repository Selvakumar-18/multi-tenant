import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutSelectorComponent } from './layout-selector.component';

describe('LayoutSelectorComponent', () => {
  let component: LayoutSelectorComponent;
  let fixture: ComponentFixture<LayoutSelectorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutSelectorComponent]
    });
    fixture = TestBed.createComponent(LayoutSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
