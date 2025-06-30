import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideLayoutComponent } from './side-layout.component';

describe('SideLayoutComponent', () => {
  let component: SideLayoutComponent;
  let fixture: ComponentFixture<SideLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SideLayoutComponent]
    });
    fixture = TestBed.createComponent(SideLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
