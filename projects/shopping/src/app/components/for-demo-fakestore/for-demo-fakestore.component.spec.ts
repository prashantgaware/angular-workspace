import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForDemoFakestoreComponent } from './for-demo-fakestore.component';

describe('ForDemoFakestoreComponent', () => {
  let component: ForDemoFakestoreComponent;
  let fixture: ComponentFixture<ForDemoFakestoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForDemoFakestoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForDemoFakestoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
