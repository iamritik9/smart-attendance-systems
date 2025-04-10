import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchInfoComponent } from './branch-info.component';

describe('BranchInfoComponent', () => {
  let component: BranchInfoComponent;
  let fixture: ComponentFixture<BranchInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BranchInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BranchInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
