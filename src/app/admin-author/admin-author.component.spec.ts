import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAuthorComponent } from './admin-author.component';

describe('AdminAuthorComponent', () => {
  let component: AdminAuthorComponent;
  let fixture: ComponentFixture<AdminAuthorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminAuthorComponent]
    });
    fixture = TestBed.createComponent(AdminAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
