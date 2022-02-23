import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalDetailComponent } from './local-detail.component';

describe('LocalDetailComponent', () => {
  let component: LocalDetailComponent;
  let fixture: ComponentFixture<LocalDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
