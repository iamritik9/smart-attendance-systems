import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceDataComponent } from './face-data.component';

describe('FaceDataComponent', () => {
  let component: FaceDataComponent;
  let fixture: ComponentFixture<FaceDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaceDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FaceDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
