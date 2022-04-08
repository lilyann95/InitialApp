import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Child2TestComponent } from './child2-test.component';

describe('Child2TestComponent', () => {
  let component: Child2TestComponent;
  let fixture: ComponentFixture<Child2TestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Child2TestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Child2TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
