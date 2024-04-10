import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FakestoreApiComponent } from './fakestore-api.component';

describe('FakestoreApiComponent', () => {
  let component: FakestoreApiComponent;
  let fixture: ComponentFixture<FakestoreApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FakestoreApiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FakestoreApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
