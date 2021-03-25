import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YearsComponentComponent } from './years-component.component';

describe('YearsComponentComponent', () => {
  let component: YearsComponentComponent;
  let fixture: ComponentFixture<YearsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YearsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YearsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
